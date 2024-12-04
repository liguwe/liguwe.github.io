
# 基于 Vue3 的事件系统和事件编排逻辑，参考 AMIS 的实现思路 @823


## 目录
<!-- toc -->
 ## 1. 事件系统核心设计 

### 1.1 事件定义接口

```typescript
// 事件类型定义
interface EventDefinition {
  type: string;               // 事件类型
  description?: string;       // 事件描述
  payload?: any;             // 事件载荷类型
}

// 动作类型定义
interface ActionDefinition {
  type: string;               // 动作类型
  description?: string;       // 动作描述
  params?: Record<string, any>; // 动作参数
}

// 事件处理器定义
interface EventHandler {
  eventType: string;          // 监听的事件类型
  actions: ActionConfig[];    // 要执行的动作配置列表
  description?: string;       // 处理器描述
}

// 动作配置
interface ActionConfig {
  type: string;              // 动作类型
  params?: Record<string, any>; // 动作参数
  expression?: string;       // 条件表达式
  when?: string;            // 执行条件
  otherwise?: ActionConfig[]; // 条件不满足时的动作
}
```

### 1.2 事件管理器实现：registerAction

```typescript hl:17,25,43
// 事件管理器
import { reactive, ref } from 'vue';

export class EventManager {
  private events = new Map<string, Set<Function>>();
  private actionHandlers = new Map<string, Function>();
  private expressionEngine: ExpressionEngine;

  constructor() {
    this.expressionEngine = new ExpressionEngine();
    this.registerBuiltInActions();
  }

  // 注册内置动作
  private registerBuiltInActions() {
    // 设置状态
    this.registerAction('setState', (params, context) => {
      const { state, value } = params;
      if (context.scope) {
        context.scope[state] = value;
      }
    });

    // 发送请求
    this.registerAction('request', async (params, context) => {
      const { url, method = 'GET', data } = params;
      try {
        const response = await fetch(url, {
          method,
          body: data ? JSON.stringify(data) : undefined,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return await response.json();
      } catch (error) {
        console.error('Request failed:', error);
        throw error;
      }
    });

    // 显示提示
    this.registerAction('toast', (params) => {
      const { message, type = 'info' } = params;
      // 调用全局 toast 组件
      window.$toast?.[type](message);
    });
  }

  // 注册自定义动作
  registerAction(type: string, handler: Function) {
    this.actionHandlers.set(type, handler);
  }

  // 执行动作
  async executeAction(config: ActionConfig, context: any) {
    const handler = this.actionHandlers.get(config.type);
    if (!handler) {
      throw new Error(`Unknown action type: ${config.type}`);
    }

    // 检查条件
    if (config.when) {
      const result = this.expressionEngine.evaluate(config.when, context);
      if (!result) {
        if (config.otherwise) {
          for (const action of config.otherwise) {
            await this.executeAction(action, context);
          }
        }
        return;
      }
    }

    // 执行动作
    try {
      return await handler(config.params, context);
    } catch (error) {
      console.error(`Action ${config.type} failed:`, error);
      throw error;
    }
  }

  // 处理事件
  async handleEvent(eventType: string, event: any, context: any) {
    const handlers = this.events.get(eventType);
    if (handlers) {
      for (const handler of handlers) {
        await handler(event, context);
      }
    }
  }
}
```

### 1.3 表达式引擎实现

```typescript
// 表达式引擎
export class ExpressionEngine {
  // 解析并执行表达式
  evaluate(expression: string, context: any): any {
    // 使用 Function 构造器创建可执行函数
    try {
      const func = new Function(
        'ctx', 
        `with(ctx) { return ${expression}; }`
      );
      return func(context);
    } catch (error) {
      console.error('Expression evaluation failed:', error);
      return false;
    }
  }

  // 格式化表达式
  format(template: string, data: any): string {
    return template.replace(/\${(.*?)}/g, (match, key) => {
      try {
        return this.evaluate(key, data);
      } catch (error) {
        return match;
      }
    });
  }
}
```

## 2. 组件集成实现

### 2.1 事件混入

```typescript hl:30
// 事件混入
import { inject } from 'vue';

export function useEvents() {
  const eventManager = inject('eventManager');
  
  // 触发事件
  const emit = async (eventType: string, payload?: any) => {
    const context = {
      event: payload,
      scope: getCurrentScope()
    };
    
    await eventManager.handleEvent(eventType, payload, context);
  };

  // 注册事件处理器
  const on = (config: EventHandler) => {
    const handler = async (event: any, context: any) => {
      for (const action of config.actions) {
        await eventManager.executeAction(action, {
          ...context,
          event
        });
      }
    };

    eventManager.events.get(config.eventType)?.add(handler);
    
    // 返回清理函数
    return () => {
      eventManager.events.get(config.eventType)?.delete(handler);
    };
  };

  return {
    emit,
    on
  };
}
```

### 2.2 可视化组件示例

```vue
<!-- EventEditor.vue -->
<template>
  <div class="event-editor">
    <div class="event-list">
      <div v-for="(handler, index) in handlers" :key="index">
        <select v-model="handler.eventType">
          <option v-for="event in availableEvents" :value="event.type">
            {{ event.description }}
          </option>
        </select>
        
        <div class="action-list">
          <div v-for="(action, actionIndex) in handler.actions" 
               :key="actionIndex">
            <select v-model="action.type">
              <option v-for="type in availableActions" :value="type">
                {{ type }}
              </option>
            </select>
            
            <!-- 动作参数编辑器 -->
            <component 
              :is="getActionEditor(action.type)"
              v-model="action.params"
            />
            
            <!-- 条件编辑器 -->
            <div v-if="action.when" class="condition">
              <input v-model="action.when" 
                     placeholder="输入条件表达式" />
            </div>
          </div>
          
          <button @click="addAction(handler)">添加动作</button>
        </div>
      </div>
      
      <button @click="addHandler">添加事件处理器</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const handlers = ref<EventHandler[]>([]);

// 可用事件列表
const availableEvents = computed(() => [
  { type: 'click', description: '点击事件' },
  { type: 'change', description: '值变化事件' },
  { type: 'submit', description: '表单提交事件' }
]);

// 可用动作列表
const availableActions = computed(() => [
  'setState',
  'request',
  'toast',
  'navigate'
]);

// 添加事件处理器
const addHandler = () => {
  handlers.value.push({
    eventType: '',
    actions: []
  });
};

// 添加动作
const addAction = (handler: EventHandler) => {
  handler.actions.push({
    type: '',
    params: {}
  });
};

// 获取动作编辑器组件
const getActionEditor = (actionType: string) => {
  const editors = {
    setState: 'StateEditor',
    request: 'RequestEditor',
    toast: 'ToastEditor',
    navigate: 'NavigateEditor'
  };
  
  return editors[actionType] || 'DefaultEditor';
};
</script>
```

## 3. 使用示例

### 3.1 JSON 配置示例

```json
{
  "type": "page",
  "body": [
    {
      "type": "form",
      "body": [
        {
          "type": "input",
          "name": "username",
          "label": "用户名"
        },
        {
          "type": "button",
          "label": "提交",
          "onEvent": {
            "click": {
              "actions": [
                {
                  "type": "request",
                  "params": {
                    "url": "/api/login",
                    "method": "POST",
                    "data": {
                      "${username}": "${username}"
                    }
                  }
                },
                {
                  "type": "toast",
                  "params": {
                    "message": "登录成功"
                  },
                  "when": "event.status === 200"
                },
                {
                  "type": "navigate",
                  "params": {
                    "to": "/dashboard"
                  },
                  "when": "event.status === 200"
                }
              ]
            }
          }
        }
      ]
    }
  ]
}
```

### 3.2 组件中使用

```vue
<!-- CustomButton.vue -->
<template>
  <button @click="handleClick">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { useEvents } from './useEvents';

const props = defineProps<{
  label: string;
  onEvent?: Record<string, EventHandler>;
}>();

const { emit } = useEvents();

const handleClick = async () => {
  if (props.onEvent?.click) {
    await emit('click');
  }
};
</script>
```

关键设计点：
1. 使用 Vue3 组合式 API，便于逻辑复用和组织
2. 事件系统支持异步操作和链式调用
3. 支持条件判断和表达式计算
4. 提供内置动作和自定义动作扩展机制
5. 提供可视化配置界面
6. 保持与 AMIS 相似的 JSON 配置结构
7. 支持上下文传递和作用域管理

这个设计可以满足大多数低代码平台的事件处理需求，同时保持了良好的扩展性和可维护性。