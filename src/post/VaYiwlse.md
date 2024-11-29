
# chatGPT 是什么（篇二）

`#AI`  `#chatGPT`  `#agi`  


## 目录
<!-- toc -->
 ## 1. 如何用计算机描述真实的世界？ 

> 一切都是二进制

- 字母
- 文本
- 图片最终存在计算机内也是二进制
	- 即 `rgba()`
- 视频
- 其他等等

计算机如何把数字（二进制）和真实的世界建立联系呢？需要两步，如下

## 2. 第一步：向量化

为什么要向量化，两个原因：
- 方便电脑处理
- 方便寻找规律

### 2.1. 方便电脑处理

比如，如何描述一个人现实中的人了，如下图：

![图片|600](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907160925.png)

### 2.2. 方便寻找规律

比如看两个人的相似度，如下图

![图片|488](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907161243.png)

### 2.3. 更高维度

![图片|544](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907161423.png)

### 2.4. 初始化维度

![图片|520](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907161549.png)

### 2.5. 如何训练修改维度值呢？

![图片](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907162001.png)

### 2.6. 大量语料训练输入，修改维度值

![图片](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907161749.png)

## 3. 第二步：信息压缩和特征提取

这一步，就是为了总结出**正确的规律**，计算出**正确的向量值**

### 3.1. CNN

现在图像识别之所以成熟，是因为找到了提取图像特征的方法，即 CNN 

### 3.2. RNN

主要问题是会忘记前面说了啥？如下图

![图片](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907162735.png)

### 3.3. TransFormer

![图片](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907163023.png)

使用这种机制训练，可以让电脑**成功向量化**

![图片](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907163214.png)

各自发展路线图

![图片](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907163711.png)

### 3.4. OpenAI的选择

#### 3.4.1. 生成

![图片](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907164539.png)

#### 3.4.2. 增加参数

![图片](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907163806.png)

## 4. 涌现

选择二之后，大力出奇迹

