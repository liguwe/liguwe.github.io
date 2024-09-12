/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // 城市数量
  let n = isConnected.length;
  // 记录城市是否被访问,都初始化为未访问
  let visited = new Array(isConnected.length).fill(false);
  // 记录省份数量
  let res = 0;

  // 访问某个城市
  function dfs(city) {
    // 标记城市已访问
    visited[city] = true;
    // 访问所有与城市相连的城市
    for (let i = 0; i < n; i++) {
      // 如果城市 i 与城市 city 相连,并且城市 i 未被访问,则访问城市 i
      if (isConnected[city][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  // 遍历所有城市
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      res++;
    }
  }

  // 返回省份数量
  return res;
};
