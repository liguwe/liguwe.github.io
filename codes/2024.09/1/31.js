// 无向加权图（邻接表实现）
class Graph {
  // 存储相邻节点及边的权重
  // n 为节点数量
  constructor(n) {
    this.graph = Array.from({ length: n }, () => []);
  }

  /**
   * @description 添加一条边
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   * @param {number} weight 权重
   */
  addEdge(from, to, weight) {
    this.graph[from].push({ node: to, weight });
    this.graph[to].push({ node: from, weight });
  }

  /**
   * @description 移除一条边
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   */
  removeEdge(from, to) {
    this.graph[from] = this.graph[from].filter((edge) => edge.node !== to);
    this.graph[to] = this.graph[to].filter((edge) => edge.node !== from);
  }

  /**
   * @description 判断是否有某条边,即是否有从 from 到 to 的边
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   */
  hasEdge(from, to) {
    return this.graph[from].some((edge) => edge.node === to);
  }

  /**
   * @description 获取某条边的权重
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   */
  weight(from, to) {
    return this.graph[from].find((edge) => edge.node === to)?.weight;
  }

  /**
   * @description 获取某个节点的所有邻居节点和对应权重
   * @param {string} from 起始节点
   * @param {string} to 目标节点
   */
  neighbors(v) {
    return this.graph[v];
  }

  // 返回节点总数
  size() {
    return this.graph.length;
  }
}
