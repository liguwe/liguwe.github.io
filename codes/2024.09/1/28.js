/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = buildGraph(equations, values);

  const res = [];

  for (const [a, b] of queries) {
    // 如果 a 或 b 不存在，则 a / b 不存在,返回 -1
    if (!graph[a] || !graph[b]) {
      res.push(-1);
    } else {
      // 否则，使用深度遍历计算 a / b 的值
      res.push(dfs(a, b, graph, new Set()));
    }
  }

  return res;
};

/**
 * @description 构建图
 * @param {string[][]} equations, 二维数组，每个元素是一个长度为 2 的数组，表示方程式的两个变量
 * @param {number[]} values, 数组，表示方程式的结果
 * @return {object} 图，使用邻接表表示
 */
function buildGraph(equations, values) {
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const val = values[i];

    //////////////////////////// a -> b
    // a / b = val
    // b / a = 1 / val
    if (!graph[a]) {
      graph[a] = [];
    }
    // a -> b, val 代表 a/b
    graph[a].push({ node: b, val });

    //////////////////////////// b -> a
    if (!graph[b]) {
      graph[b] = [];
    }
    // b -> a, 1/val 代表 b/a
    graph[b].push({ node: a, val: 1 / val });
  }
  return graph;
}

/**
 * @description 使用深度遍历 计算 a / b 的值，如果 a / b 不存在，则返回 -1
 * @param {string} a
 * @param {string} b
 * @param {object} graph
 * @param {Set} visited
 * @return {number}
 */
function dfs(a, b, graph, visited) {
  // 如果 a === b，则 a / b = 1
  if (a === b) {
    return 1;
  }

  visited.add(a);

  for (const { node, val } of graph[a]) {
    if (visited.has(node)) {
      continue;
    }

    const res = dfs(node, b, graph, visited);
    if (res !== -1) {
      return val * res;
    }
  }

  return -1;
}
