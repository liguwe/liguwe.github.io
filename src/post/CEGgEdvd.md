
# React 的优先级调度机制和打断处理

`#react` 


## 目录
<!-- toc -->
 ## 1. 总结 

总结一下 React 防止低优先级任务饥饿的主要机制：
1. 过期时间：每个任务都有过期时间，一旦过期会被强制执行
2. 优先级提升：长时间得不到执行的低优任务会被提升优先级
3. 时间片轮转：通过时间片划分，确保任务能够交替执行
4. 动态优先级：任务优先级不是固定的，会根据等待时间动态调整
5. 批量更新：相同优先级的更新会被合并，提高执行效率

这种机制确保了即使在高优先级任务频繁插入的情况下，低优先级任务最终也能得到执行，同时又不会影响用户交互的流畅性。

## 2. 优先级打断机制

```javascript
// 简化的优先级定义
const priorities = {
  ImmediatePriority: 1,     // 最高优先级，同步任务
  UserBlockingPriority: 2,  // 用户交互
  NormalPriority: 3,        // 普通优先级
  LowPriority: 4,          // 低优先级
  IdlePriority: 5          // 空闲优先级
}
```

打断过程如下：

```javascript
function workLoop(deadline) {
  // 是否有待处理的高优先级任务
  while (currentTask !== null && !shouldYield()) {
    try {
      // 如果有更高优先级任务进来
      if (hasHigherPriorityWork()) {
        // 中断当前工作
        return suspendCurrentWork();
      }
      performUnitOfWork(currentTask);
    } catch (err) {
      // 错误处理
    }
  }
}
```

## 3. 饥饿问题解决方案

React 通过以下机制来防止低优先级任务饥饿：

### 3.1. A. 过期时间机制

```javascript
function scheduleCallback(priorityLevel, callback) {
  const currentTime = getCurrentTime();
  
  // 根据优先级计算过期时间
  const timeout = getTimeoutByPriorityLevel(priorityLevel);
  const expirationTime = currentTime + timeout;
  
  const newTask = {
    callback,
    priorityLevel,
    expirationTime,
    startTime: currentTime,
  };
  
  // 将任务加入队列
  push(taskQueue, newTask);
}

// 不同优先级的超时时间
const timeoutForPriorityLevel = {
  [ImmediatePriority]: -1,  // 立即执行
  [UserBlockingPriority]: 250,
  [NormalPriority]: 5000,
  [LowPriority]: 10000,
  [IdlePriority]: maxSigned31BitInt
};
```

### 3.2. 任务饥饿检测

```javascript
function shouldYieldToHost() {
  const currentTime = getCurrentTime();
  
  // 检查是否有过期任务
  if (peek(taskQueue) !== null) {
    const expiredTask = peek(taskQueue);
    if (expiredTask.expirationTime <= currentTime) {
      // 如果任务过期，强制执行
      return true;
    }
  }
  
  return false;
}
```

## 4. 优先级提升机制

```javascript
function markTaskExpired(task) {
  const currentTime = getCurrentTime();
  
  if (currentTime >= task.expirationTime) {
    // 过期任务提升优先级
    task.priorityLevel = ImmediatePriority;
  }
}
```

## 5. 时间片轮转

```javascript
function workLoopConcurrent() {
  // 当有工作要做且时间片未用完
  while (workInProgress !== null && !shouldYield()) {
    workInProgress = performUnitOfWork(workInProgress);
  }
}

function shouldYield() {
  // 检查时间片是否用完
  const currentTime = getCurrentTime();
  return currentTime >= deadline;
}
```

## 6. 任务队列管理

```javascript
class Scheduler {
  constructor() {
    this.taskQueue = new MinHeap();      // 普通任务队列
    this.timerQueue = new MinHeap();     // 延时任务队列
  }
  
  scheduleTask(task) {
    const currentTime = getCurrentTime();
    
    if (task.startTime <= currentTime) {
      // 立即执行的任务
      this.taskQueue.push(task);
    } else {
      // 延时任务
      this.timerQueue.push(task);
    }
  }
  
  // 获取下一个要执行的任务
  getNextTask() {
    const currentTime = getCurrentTime();
    
    // 将到期的延时任务移到普通队列
    this.advanceTimers(currentTime);
    
    // 返回最高优先级的任务
    return this.taskQueue.peek();
  }
}
```

## 7. 可中断渲染的实现

```javascript
function renderRoot(root, isYieldy) {
  // 是否可以中断
  isWorkLoopConcurrent = isYieldy;
  
  do {
    try {
      workLoopConcurrent();
    } catch (thrownValue) {
      handleError(root, thrownValue);
    }
  } while (workInProgress !== null && !shouldYield());
  
  // 如果还有未完成的工作
  if (workInProgress !== null) {
    // 返回未完成标记
    return RootIncomplete;
  }
  
  // 所有工作完成
  return RootCompleted;
}
```

## 8. 优先级继承

```javascript
function scheduleUpdateOnFiber(fiber, lane) {
  const root = markUpdateLaneFromFiberToRoot(fiber);
  
  if (lane === SyncLane) {
    // 同步优先级
    ensureRootIsScheduled(root);
  } else {
    // 异步优先级
    scheduleCallback(
      schedulerPriorityLevel,
      () => {
        performConcurrentWorkOnRoot(root);
      }
    );
  }
}
```

## 9. 批量更新处理

```javascript
function batchedUpdates(fn) {
  const prevExecutionContext = executionContext;
  executionContext |= BatchedContext;
  try {
    return fn();
  } finally {
    executionContext = prevExecutionContext;
    // 如果没有其他工作正在进行，刷新同步队列
    if (executionContext === NoContext) {
      flushSyncCallbackQueue();
    }
  }
}
```

