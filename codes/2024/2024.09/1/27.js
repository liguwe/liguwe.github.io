/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  // 构建邻接表
  const graph = new Array(n).fill(0).map(() => []);
  // 记录原始边，使用 Set 避免重复，key 为 "u,v"，表示 u 到 v 的有向边
  const originalEdges = new Set();

  // 使用有向边构建邻接表（无向）
  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
    originalEdges.add(`${u},${v}`);
  }

  // 记录反向边的数量(需要重新规划的边的数量)
  let reorderCount = 0;
  // 记录节点是否被访问
  const visited = new Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        // 检查是否需要反转
        // 如果原始边集合中有 neighbor 到 node 的边,则不需要反转，即能够达到中心城市 0
        // 否则，需要反转
        // 即如下代码，node 到 neighbor 的边需要反转，node 代表中心城市 0
        if (originalEdges.has(`${node},${neighbor}`)) {
          reorderCount++;
        }
        dfs(neighbor);
      }
    }
  }

  // 从节点 0 开始 DFS
  dfs(0);
  return reorderCount;
};
