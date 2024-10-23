/*****************************************
 * 非线性（递归）：图的遍历框架
 *****************************************/

//
class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.edgeTo = [];
  }
}
