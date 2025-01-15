
# 对象转成深度为一的对象



## 目录
<!-- toc -->
 ## 8. 层树结构处理转成一维树结构 → **回溯算法**，第二个参数是 `keys` 

```javascript
var entry = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      xx: "adxx",
    },
    e: "ae",
  },
};

// 要求转换成如下对象
var output = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
  "a.e": "ae",
};

function fn(obj) {
  let res = {}; 
  function backtrack(obj, keys) {
    // base case
    if (typeof obj === "string") {
      res[keys.join(".")] = obj;
      return;
    }
    // 遍历
    Object.entries(obj).forEach(([k, v]) => {
      // 做选择
      keys.push(k);
      backtrack(v, keys);
      // 撤销选择
      keys.pop();
    });
  }
  // [] 这里代表路径，需要决策的路径
  backtrack(obj, []);
  return res;
}
console.log(fn(entry));

```

## 9. 接上题：打平的对象，组装成对象

> [!danger]
> 再自己写写试试看

```javascript
var obj = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
  "a.e": "ae",
};
var res = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      xx: "adxx",
    },
    e: "ae",
  },
};
```

### 代码

- 关键点
	- let current = result;  
		- **current 当做指针**
	- 如果是最后一个路径，直接赋值
	- 如果不是最后一个路径，且该层级还没有对象，则创建一个空对象
	- `current = current[path];`
		- 移动到下一层级

```javascript hl
function transform(obj) {
  // 最终返回的结果对象
  const result = {};
  // 遍历原始对象的所有键值对
  for (const [key, value] of Object.entries(obj)) {
    // 将键按照点号分割成路径数组
    const paths = key.split(".");
    // 从结果对象开始，逐层构建嵌套对象
    let current = result;
    // 遍历路径数组中的每个部分
    paths.forEach((path, index) => {
      // 如果是最后一个路径，直接赋值
      if (index === paths.length - 1) {
        current[path] = value;
      } else {
        // 如果不是最后一个路径，且该层级还没有对象，则创建一个空对象
        if (!current[path]) {
          current[path] = {};
        }
        // 移动到下一层级
        current = current[path];
      }
    });
  }

  return result;
}
```
