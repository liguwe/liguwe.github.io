// 2. 使用数组时预分配空间
const arr = new Array(1000); // 好的做法
const arr = []; // 动态增长，可能导致多次重新分配

// 3. 避免稀疏数组
const arr = [1, 2, 3]; // 好的做法
const arr = [];
arr[0] = 1;
arr[1000] = 2; // 避免这样做
