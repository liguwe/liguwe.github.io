
# 图的 BFS 遍历


`#BFS` 

- BFS 算法一般只用来寻找那条**最短路径**，不会用来求**所有路径**
- BFS 算法一层一层向四周扩散的逻辑，第一次遇到目标节点，必然就是**最短路径**


## 目录
<!-- toc -->
 ## 1. 写法一：多叉树的 BFS →  图的 BFS （不记录步数） 

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240915203402.png)

## 2. 多叉树的BFS → 图的 BFS ：记录步数

- 下面的图是**无权图**
- 对比于多叉树，多了 **visited 数组** 

![cos-blog-832-34-20241012|1264](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240915204210.png)

## 3. 多叉树的 BFS → 图的 BFS：记录步数

基于 [#1. 写法一：多叉树的 BFS → 图的 BFS （不记录步数）](/post/i8i5wb18at.html#1-写法一多叉树的-BFS-→-图的-BFS-（不记录步数）) 来改造下即可

![cos-blog-832-34-20241012|1232](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240915205022.png)

## 4. 参考及相关笔记

- https://labuladong.online/algo/data-structure-basic/graph-traverse-basic/
- [4. 二叉树的遍历： DFS（前中后序遍历）、BFS（层序遍历）](/post/8hf085ma8n.html)
- [5. 多叉树的遍历： DFS（前中后序遍历）、BFS（层序遍历）](/post/ic9x582v3r.html)
