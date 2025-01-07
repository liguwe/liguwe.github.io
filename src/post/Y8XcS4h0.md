
# 图数据结构


# 图论基础


## 目录
<!-- toc -->
 ## 基本概念 
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/611712fb7e1b34b66e3e0188ead2ff46.png)

- 顶点：
- 边：
- 相邻顶点
- 路径：
- 度：相邻顶点的个数
   - **入度**：顶点的入度是指「`**指向该顶点的边**`」的数量；
   - **出度**：顶点的出度是指 `**该顶点指向其他点的边**`** **的数量。
- 环：比如ACDA
- 联通的：如果图中任何两个顶点都存在路径，那么他是联通的
- 有向图：如下图

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/3b293445907f9016da14531e019173fc.png)

- 强连通：比如上图的CD，双向都存在路径
- 无向图：
- 加权图：边赋予权值

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/71ecf6cea14bb69f43cebede23923670.png)

## 图的表示

### 邻接矩阵
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/935ee7a441340946e2456b1230365ca5.png)

- 比较浪费空间
- 二维数组不够灵活

### 邻接表
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/082956fbb913d9e6d99640f1442970d6.png)
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/766d5b7b869e04a2a86cb81f55cef3fa.png)

如上图，完全可是使用一个`**二维数组**`来标识，`graph = [4,3,1],[3,2,4],[3],[](/post/Y8XcS4h0.html#4,3,1],[3,2,4],[3],[)`

邻接表比较常用了，下面的代码使用`**字典**`来实现：
```javascript
import Dictionary from './dictionary';

export default class Graph {
  constructor(isDirected = false) {
    // 表示图是否有向
    this.isDirected = isDirected;
    // 用一个数组来存储图中所有顶点的名字
    this.vertices = [];
    // 字典将会使用顶点的名字作为键，邻接顶点列表作为值
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []); // initialize adjacency list with array as well;
    }
  }

  addEdge(a, b) {
    if (!this.adjList.get(a)) {
      this.addVertex(a);
    }
    if (!this.adjList.get(b)) {
      this.addVertex(b);
    }
    this.adjList.get(a).push(b);
    if (this.isDirected !== true) {
      this.adjList.get(b).push(a);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}
```

### 关联矩阵
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/12dcfa6fc439e4b1e116d63f4ed4360c.png)


# 图的遍历


```javascript
const Colors = {
  WHITE: 0, // 表示该顶点还没有被访问。
  GREY: 1, //  表示该顶点被访问过，但并未被探索过
  BLACK: 2 //  表示该顶点被访问过且被完全探索过
};


const initializeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  // (1) 标注 v 为被发现的(灰色);
  color[u] = Colors.GREY;
  if (callback) {
    callback(u);
  }
  // (2) 对于 v 的所有未访问(白色)的邻点 w，访问顶点 w;
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    // 如果它的邻接点还没访问过，那么递归调用
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback);
    }
  }
  // (3) 标注 v 为已被探索的(黑色)
  color[u] = Colors.BLACK;
};

export const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  for (let i = 0; i < vertices.length; i++) {
    // 遍历所有顶点，如果该顶点没有访问，则访问这个顶点
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

// 测试
let graph = new Graph(true);

let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

const printVertex = value => console.log('Visited vertex: ' + value);

depthFirstSearch(graph, printVertex);

```

以上是深度优先搜索算法的工作原理，下面把所有访问顶点点`**标记计数**`

```javascript

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = Colors.GREY;
  d[u] = ++time.count;
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count;

};

export const DFS = graph => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  // 顶点的发现时间
  const d = {};
  // 顶点的探索时间
  const f = {};
  // 顶点的前溯点
  const p = {};

  const time = {count: 0};

  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }

  return {
    discovery: d,
    finished: f,
    predecessors: p
  };
};

graph = new Graph(true); // directed graph

myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

const result = DFS(graph);
console.log('discovery', result.discovery);
console.log('finished', result.finished);
console.log('predecessors', result.predecessors);

```

如下图：能得出以下公式

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/e384ff31a02f020b816ff902d52feee0.png)

那么以上原理方法有什么用呢？

## 拓扑排序的深度优先实现方法
注意：只能应用于`有向无环图` 

- 如果这个图不是 DAG，那么它是没有拓扑序的；
- 如果是 DAG，那么它至少有一个拓扑序；
- 反之，如果它存在一个拓扑序，那么这个图必定是 DGA.

**应用场景：**

- 比如，每天早上起床后穿衣的过程可以分为很多步骤，例如，**穿内裤，穿裤子，穿内裤**必须在穿裤子之前，同样的**穿袜子**必须在**穿鞋子**之前等等，**戴手表**和其它的任何一个动作之间都没有明显的关系，因此放在这个线性序列中的哪里都无所谓
- 又比如，大学上课，一些课程有先后依赖关系

如下图：

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/90c6be9d9c85ccc31caa1101bf2fb968.png)
**使用深度优先遍历，即可得到下图，加上访问和探索的次数**
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/a9f65603508fb56868f853f62bc3b030.png)

```javascript

let graph = new Graph(true); // 有向图
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
const result = DFS(graph);

// 现在要做的仅仅是以倒序来排序完成时间数组，这便得出了该图的拓扑排序
const fTimes = result.finished;
let s = '';
for (let count = 0; count < myVertices.length; count++) {
  let max = 0;
  let maxName = null;
  for (i = 0; i < myVertices.length; i++) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += ' - ' + maxName;
  delete fTimes[maxName];
}
console.log(s); //  - B - A - D - C - F - E 
```
		 				
> 注意之前的拓扑排序结果**仅是多种可能性之一，比如**` A-B-C-D-F-E` 也是可以的。



## 拓扑排序的广度优先实现方法
可参考动图：[https://leetcode.cn/problems/course-schedule-ii/solution/ke-cheng-biao-ii-by-leetcode-solution/](https://leetcode.cn/problems/course-schedule-ii/solution/ke-cheng-biao-ii-by-leetcode-solution/)
同样如下图：
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/90c6be9d9c85ccc31caa1101bf2fb968.png)
```javascript
// 有向图
class Graph {
  constructor() {
    // 用一个数组来存储图中所有顶点的名字
    this.vertices = [];
    // 所有顶点的入度
    this.inDegree = new Map();
    // 所有顶点的出度
    this.outDegree = new Map();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.inDegree.set(v, []);
      this.outDegree.set(v, []);
    }
  }

  addEdge(a, b) {
    if (!this.inDegree.get(a)) {
      this.addVertex(a);
    }
    if (!this.inDegree.get(b)) {
      this.addVertex(b);
    }
    this.outDegree.get(a).push(b);
    this.inDegree.get(b).push(a);
  }

  getOutDegree = () => {
    return this.outDegree;
  }
  getInDegree = () => {
    return this.inDegree;
  }


}

const graph = new Graph(true); // 有向图
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');


// 拓扑排序
const sort = (graph) => {
  // 获取邻接点字典
  const inDegreeMap = graph.getInDegree();
  const outDegreeMap = graph.getOutDegree();
  // 存放所有入度为0的队列
  const inDegreeZeroQueue = [];
  const inDegreeLen = {};

  for (let [key, value] of inDegreeMap.entries()) {
    if (value.length === 0) {
      inDegreeZeroQueue.push(key)
    }
    inDegreeLen[key] = value.length;
  }

  //所有入度为 0 的节点都被放入res中，它们就是可以作为拓扑排序最前面的节点，并且它们之间的相对顺序是无关紧要的，排序结果
  const res = [];

  while (inDegreeZeroQueue.length) {
    // 1、对首出队
    let u = inDegreeZeroQueue.shift();
    res.push(u)

    // 2、获取改点的所有出度  →  然后把它的入度 - 1
    const outDegree = outDegreeMap.get(u);
    console.log(outDegree);

    outDegree.forEach((v) => {
      inDegreeLen[v] -= 1;
      if (inDegreeLen[v] === 0) {
        inDegreeZeroQueue.push(v)
      }
    })
  }

  console.log(res);

  return res;
}

console.log(sort(graph));
```

> 其实这里直接使用对象就好了，没那么麻烦！



## 最短路径算法



## 最小生成树

### Dijkstra 算法 - 贪心算法

贪心算法遵循一种近似解决问题的技术，期盼通过每个阶段的局部最优选择(当前最好的解)，从而达到全局的最优(全局最优解)。

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/edd2c601a2a984e6d244e7115d7e4f31.png)
使用邻接矩阵表示：

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/f493ee2f74e2bcfeb1a71724d5109f54.png)

- 注意看 `**A → C**` ，都是 `Col` 到 `Row` 

**关键步骤：**

1. **首先，初始化指定的点**`**src**`**到各顶点的最小距离为**`**dist = [INF,INF,INF,....] src到src的最小距离为0；**`
2. **定义变量**`**visted=[false,false,.....] 标识是否已经访问过改顶点**`
3. **以**`**dist**`**中，最小值的位置为**`**源点**`**，依次去找到还没访问过的点的距离，循环遍历更新最短距离   【很重要，这就是贪心算法的体现，寻找局部最优】**

以下是代码，多执行多观察几遍：应该就能理解了，可参考图：[https://leetcode.cn/problems/network-delay-time/solution/gtalgorithm-dan-yuan-zui-duan-lu-chi-tou-w3zc/](https://leetcode.cn/problems/network-delay-time/solution/gtalgorithm-dan-yuan-zui-duan-lu-chi-tou-w3zc/)

```javascript
// 二位数组
let graph = [
  //    0  1  2  3  4  5
  /* 0 */[0, 2, 4, 0, 0, 0],    //  A → C ，都是 Col 到 Row
  /* 1 */[0, 0, 2, 4, 2, 0],
  /* 2 */[0, 0, 0, 0, 3, 0],
  /* 3 */[0, 0, 0, 0, 0, 2],
  /* 4 */[0, 0, 0, 3, 0, 2],
  /* 5 */[0, 0, 0, 0, 0, 0]
];

let graph2 = [
  //      0  1  2  3  4
  /* 0 */[0, 5, 2, 6, 0],    //  A → C ，都是 Col 到 Row
  /* 1 */[0, 0, 0, 0, 1],
  /* 2 */[0, 0, 0, 3, 5],
  /* 3 */[0, 0, 0, 0, 2],
  /* 4 */[0, 0, 0, 0, 0],
]

const INF = Number.MAX_SAFE_INTEGER;

const getMinDistanceIndexFromDist = (dist, visited) => {
  let min = INF; // 无限大
  let minIndex = -1;
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return {minIndex, min};

};

/**
 * @params graph 二维数组
 * @params src  代表下标
 * */
const dijkstra = (graph, src) => {
  // 到所有顶点的所有距离数组
  const dist = [];
  // 是否已访问过
  const visited = [];
  // 把所有的距离(dist)初始化为无限大
  const {length} = graph;
  for (let i = 0; i < length; i++) {
    dist[i] = INF;
    visited[i] = false;
  }
  // 源顶点到自己的距离肯定为 0 啊
  dist[src] = 0;

  for (let i = 0; i < length - 1; i++) {
    // 要计算顶点间的 minDistance，就要搜索 dist 数组中的最小值，返回它在数组中的索引
    const {minIndex, min} = getMinDistanceIndexFromDist(dist, visited);
    visited[minIndex] = true;
    console.log(`以位置【${minIndex}】，值为【${min}】 的源点去访问更新 dist:${JSON.stringify(dist)}`)
    for (let v = 0; v < length; v++) {
      if (!visited[v]  // 还没访问过
        && graph[minIndex][v] !== 0  // 当前最小值的位置作为标识，访问其他顶点，如果不为0则更新，
        && dist[minIndex] !== INF  //   dist数组中，最小值的位置不为无穷大时
        && dist[minIndex] + graph[minIndex][v] < dist[v]
      ) {
        console.log('满足更新条件', 'i:', i, 'v:', v, 'dist[minIndex]:', dist[minIndex], 'graph[minIndex][v]:', graph[minIndex][v], 'dist[v]:', dist[v]);
        dist[v] = dist[minIndex] + graph[minIndex][v];
      }

    }
    console.log('*******************************************************************')
  }

  return dist;

};

const dist = dijkstra(graph2, 0);
console.log(dist);

```

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/4552020624cb8bf6dac0e35c95c0af90.png)


# 图的遍历
各种数据结构被发明出来无非就是`**为了遍历和访问**`，所以`**「遍历」**`是所有数据结构的基础。


# 输出所有可能的路径

## 题目
看力扣第 797 题「 [所有可能路径](https://leetcode.cn/problems/all-paths-from-source-to-target/)」,
![image.png|504](https://832-1310531898.cos.ap-beijing.myqcloud.com/3886b417d7691307389f24eb44eaef4f.png)
![image.png|568](https://832-1310531898.cos.ap-beijing.myqcloud.com/7b3ee33913d2a43127b74ece5e54e8ce.png)


## 分析
以 `0` 为起点遍历图，`同时记录遍历过的路径`，当遍历到终点时将路径记录下来即可 ，既然输入的图是`无环`的，我们就不需要 `visited` 数组辅助了，直接套用图的遍历框架：


## DFS解法
```javascript
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let graph = [4, 3, 1], [3, 2, 4], [3], [4], [](/post/Y8XcS4h0.html#4,-3,-1],-[3,-2,-4],-[3],-[4],-[)

const allPathsSourceTarget = function (graph) {
    let res = [];
    let n = graph.length;
    /* 图的遍历框架 */
    function traverse(graph, cur, path) {
        path.push(cur);
        if (cur === n - 1) {
            res.push([...path]);
            path.pop();
            return;
        }
        for (let v of graph[cur]) {
            traverse(graph, v, path);
        }
        path.pop();
    }

    traverse(graph, 0, []);

    return res;
};

console.log(allPathsSourceTarget(graph));

```

## 回溯算法解法
```javascript
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let graph = [4, 3, 1], [3, 2, 4], [3], [4], [](/post/Y8XcS4h0.html#4,-3,-1],-[3,-2,-4],-[3],-[4],-[)
const allPathsSourceTarget = function (graph) {
    let res = [];
    let n = graph.length;
    /* 图的遍历框架 */
    function backtrack(graph, cur, path) {
        // path.push(cur);
        if (cur === n - 1) {
            res.push([...path]);
            return;
        }
        for (let v of graph[cur]) {
            path.push(v);
            backtrack(graph, v, path);
            path.pop();
        }
    }
    
    backtrack(graph, 0, [0]);
    return res;
};

console.log(allPathsSourceTarget(graph));

```

## 深度遍历

![image.png|600](https://832-1310531898.cos.ap-beijing.myqcloud.com/50134014891f5dee4d35bdd9d80779bc.png)
![image.png|536](https://832-1310531898.cos.ap-beijing.myqcloud.com/c5f57e1baa4c4188140dff78896d42bd.png)
```javascript
function dfs(graph) {
    // 记录被遍历过的节点
    let visited = new Array(graph.length).fill(false);
    // 记录从起点到当前节点的路径
    let onPath = {};
    // 记录访问的点
    let res = [];

    /* 图遍历框架 */
    function traverse(graph, s) {
        console.log('进入节点：', s);

        if (visited[s]) {
            return false;
        }
        // 经过节点 s，标记为已遍历
        visited[s] = true;
        // 做选择：标记节点 s 在路径上
        onPath[s] = true;
        for (let v of graph[s]) {
            traverse(graph, v);
        }

        // console.log('离开节点：', s);
        // 撤销选择：节点 s 离开路径
        onPath[s] = false;
    }

    traverse(graph, 0)
}

const g = [4, 3, 1], [3, 2, 4], [3], [4], [](/post/Y8XcS4h0.html#4,-3,-1],-[3,-2,-4],-[3],-[4],-[)

dfs(g, 0);

进入节点： 0
进入节点： 4
进入节点： 3
进入节点： 4
进入节点： 1
进入节点： 3
进入节点： 2
进入节点： 3
进入节点： 4

```

# 拓扑排序详解及运用
先来看看力扣第 207 题「 [课程表](https://leetcode.cn/problems/course-schedule/)」：
![image.png|576](https://832-1310531898.cos.ap-beijing.myqcloud.com/c7f78bb6f5498a3137d585140c26ed64.png)


## 先构建图

`graph[s] `是一个列表，存储着节点 `s` 所指向的节点。
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/ade4378f2781c41cb461d4bdc410c6ab.png)



# BFS
 
 BFS 出现的常见场景好吧，**问题的本质就是让你在一幅「图」中找到从起点 **`**start**`** 到终点 **`**target**`** 的最近距离，这个例子听起来很枯燥，但是 BFS 算法问题其实都是在干这个事儿**

## 框架
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/8bcf3f8e6da14a73ed2332e7a436ea56.png)


## 使用JS实现
```javascript

const BFS = function (start,target) {
    let q = [start]; // 核心数据结构 // 将起点加入队列
    let visited = new Set(); // 避免走回头路
    visited.add(start);
    let step = 0; // 记录扩散的步数
    while (q.length > 0) {
        let sz = q.size();
        /* 将当前队列中的所有节点向四周扩散 */
        for (let i = 0; i < sz; i++) {
            let cur = q.unshift();
            /* 划重点：这里判断是否到达终点 */
            if (cur === target) return step;
            /* 将 cur 的相邻节点加入队列 */
            for (let x of cur.adj()) {
                if (!visited.has(x)) {
                    q.push(x);
                    visited.add(x);
                }
            }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }
};
```

## 「 [二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)」
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/6656d2174a6e70f869108a874e254ccb.png)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }
    let q = [root];
    // root 本身就是一层，depth 初始化为 1
    let depth = 1;
    while (q.length > 0) {
        // 一定要写在这儿！
        const sz = q.length;
        /* 将当前队列中的所有节点向四周扩散 */
        for (let i = 0; i < sz; i++) {
            let cur = q.shift();
            /* 判断是否到达终点 */
            if (cur.left == null && cur.right == null) {
                return depth;
            }

            /* 将 cur 的相邻节点加入队列 */
            if (cur.left != null) {
                q.push(cur.left);
            }
            if (cur.right != null) {
                q.push(cur.right);
            }
        }
        /* 这里增加步数 */
        depth++;
    }
    return depth;
};
```
