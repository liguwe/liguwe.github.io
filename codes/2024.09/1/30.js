// 有向加权图（邻接矩阵实现）
class Graph {
  // n 为节点数量
  constructor(n) {
    // init matrix
    this.matrix = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => 0),
    );
  }

  /**
   * @description 添加一条边
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   * @param {number} weight 权重
   */
  addEdge(from, to, weight) {
    this.matrix[from][to] = weight;
  }

  /**
   * @description 移除一条边
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   */
  removeEdge(from, to) {
    this.matrix[from][to] = 0;
  }

  /**
   * @description 判断是否有某条边,即是否有从 from 到 to 的边
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   */
  hasEdge(from, to) {
    return this.matrix[from][to] > 0;
  }

  /**
   * @description 获取某条边的权重
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   */
  weight(from, to) {
    return this.matrix[from][to];
  }

  /**
   * @description 获取某个节点的所有邻居节点和对应权重
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   */
  neighbors(v) {
    const res = [];
    for (let i = 0; i < this.matrix[v].length; i++) {
      if (this.matrix[v][i] > 0) {
        res.push({ node: i, weight: this.matrix[v][i] });
      }
    }
    return res;
  }

  // 返回节点总数
  size() {
    return this.matrix.length;
  }
}
