
# RAIL  模型

`#前端性能` 


## 目录
<!-- toc -->
 ## 1. 总结 

- `10ms` 产出一帧
- `5s` 让页面可交互
	- 对于第二次打开，尽量不超过**2秒**
- 用户的输入到响应的时间不超过`100ms`，给用户的感受是瞬间就完成了
	- 所以要求事件处理函数在`50ms`内完成

---


![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241025-14.png)

- 用户的输入到响应的时间不超过`100ms`，给用户的感受是瞬间就完成了
	- 事件处理函数在`50ms`内完成
- 产生每一帧的时间不要超过`10ms`
	- 为了保证浏览器`60帧，`每一帧的时间在`16ms`左右，
	- 但浏览器需要用`6ms`来渲染每一帧
-  最大化空闲时间，以增大`50ms`内响应用户输入的几率
- 打开时间不超过5秒
	- 对于第二次打开，尽量不超过2秒
