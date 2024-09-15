/**
 * @description 图的遍历框架
 * @param {*} rooms 代表房间的二维数组，邻接表
 * @param {*} room  代表当前房间的编号
 * @param {*} visited  代表当前房间是否已经访问过
 * @returns
 */
function dfs(rooms, room, visited) {
  if (visited[room]) {
    return;
  }
  // 前序位置，标记房间已访问
  visited[room] = true;

  for (var nextRoom of rooms[room]) {
    dfs(rooms, nextRoom, visited);
  }
}

function canVisitAllRooms(rooms) {
  var len = rooms.length;
  // 记录每个房间是否已经访问，使用数组来表示
  var visited = new Array(len).fill(false);
  // 房间号从 0 开始
  var rootNum = 0;
  // 广度优先遍历，遍历完后，visited 中所有的值都应该为 true，否则返回 false
  dfs(rooms, 0, visited);

  for (var v of visited) {
    if (!v) {
      return false;
    }
  }
  return true;
}
