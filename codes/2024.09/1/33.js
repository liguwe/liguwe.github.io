/**
 * @description 遍历图的所有路径
 * @param {*} graph 图结构，使用邻接表实现
 * @param {*} src 起始节点，即遍历的起点
 * @param {*} dest 目标节点，即遍历的终点
 * @returns 打印所有的路径
 */
function traverseAllPath(graph, src, dest) {
  // onPath 数组用于记录正在遍历的节点是否已经在路径上，避免成环
  var onPath = new Array(graph.size()).fill(false);
  // path 数组用于记录遍历所有的路径
  var path = [];
  var traverse = function (graph, src, dest) {
    // base case：
    // src < 0 说明节点编号不合法
    // src >= graph.size() 说明节点编号不合法
    if (src < 0 || src >= graph.size()) {
      return;
    }
    // 防止死循环（成环），说明当前节点已经在路径上
    if (onPath[src]) {
      return;
    }
    ////////////////////////////////////////// 前序位置
    onPath[src] = true;
    path.push(src);
    if (src === dest) {
      console.log("find path: " + path);
    }
    for (var e of graph.neighbors(src)) {
      traverse(graph, e.to, dest);
    }
    ////////////////////////////////////////// 后序位置:回溯
    path.pop();
    onPath[src] = false;
  };

  traverse(graph, src, dest);

  return path;
}
