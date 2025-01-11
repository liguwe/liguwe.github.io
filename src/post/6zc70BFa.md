
# 压缩算法：aabcccccaaa 会变为 a2b1c5a3



>  实现一个压缩算法，比如 aabcccccaaa 会变为 a2b1c5a3 


## 目录
<!-- toc -->
 ## 关键点： 

- 计数：num 
	- 使用变量 count 更好些
	- 注意初始值应该为 `1`
- 不相等时重置

```javascript
// aabcccccaaa 会变为 a2b1c5a3  
function fn(str) {  
  let num = 1;  
  let res = [];  
  for (let i = 0; i < str.length; i++) {  
    if (str[i] === str[i + 1]) {  
      num++;  
    } else {  
      res.push(`${str[i]}${num}`);  
      num = 1;  
    }  
  }  
  return res.join("");  
}  
  
console.log(fn("aabcccccaaa"));
```

## 1. 方法一：分割成数组遍历



## 2. 方法二：直接遍历字符串

![图片&文件](./files/20241111-19.png)
