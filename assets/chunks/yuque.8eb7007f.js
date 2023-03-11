const e=[{id:117558924,slug:"lztcwi0emt0m00q1",title:"Weekly.001",book_id:36687938,book:{id:36687938,type:"Book",slug:"blog",name:"liguwe.github.io",user_id:687303,description:"liguwe's blog",creator_id:687303,public:1,items_count:8,likes_count:0,watches_count:0,content_updated_at:"2023-03-11T09:36:03.001Z",updated_at:"2023-03-11T09:36:03.000Z",created_at:"2023-03-11T03:13:50.000Z",namespace:"liguwe/blog",user:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},_serializer:"v2.book"},user_id:687303,creator:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},format:"lake",body:`日报的格式<br />尝试
`,body_draft:`日报的格式<br />尝试
`,body_html:'<!doctype html><div class="lake-content" typography="classic"><p id="u639cb719" class="ne-p"><span class="ne-text">日报的格式</span></p><p id="u3f36891a" class="ne-p"><span class="ne-text">尝试</span></p></div>',body_lake:'<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><p data-lake-id="u639cb719" id="u639cb719"><span data-lake-id="u42cddc3c" id="u42cddc3c">日报的格式</span></p><p data-lake-id="u3f36891a" id="u3f36891a"><span data-lake-id="uc64dcb00" id="uc64dcb00">尝试</span></p>',body_draft_lake:'<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><p data-lake-id="u639cb719" id="u639cb719"><span data-lake-id="u42cddc3c" id="u42cddc3c">日报的格式</span></p><p data-lake-id="u3f36891a" id="u3f36891a"><span data-lake-id="uc64dcb00" id="uc64dcb00">尝试</span></p>',public:1,status:1,view_status:0,read_status:1,likes_count:0,comments_count:0,content_updated_at:"2023-03-11T08:44:24.000Z",deleted_at:null,created_at:"2023-03-11T08:36:56.000Z",updated_at:"2023-03-11T08:44:24.000Z",published_at:"2023-03-11T08:44:24.000Z",first_published_at:"2023-03-11T08:44:23.659Z",word_count:7,cover:null,description:"日报的格式尝试",custom_description:null,hits:0,_serializer:"v2.doc_detail"},{id:117544276,slug:"plnfg1f82amqmozi",title:"FE.面试题 04",book_id:36687938,book:{id:36687938,type:"Book",slug:"blog",name:"liguwe.github.io",user_id:687303,description:"liguwe's blog",creator_id:687303,public:1,items_count:8,likes_count:0,watches_count:0,content_updated_at:"2023-03-11T09:36:03.001Z",updated_at:"2023-03-11T09:36:03.000Z",created_at:"2023-03-11T03:13:50.000Z",namespace:"liguwe/blog",user:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},_serializer:"v2.book"},user_id:687303,creator:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},format:"lake",body:`
<a name="XRITI"></a>
## 1、请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]

**记住，补齐即可，然后再去掉**

\`\`\`typescript
/**
 * 请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，
 * 合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
 * */

let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
let arr2 = ['A', 'B', 'C', 'D']

// 这个思路不错

let a2 = arr2.map((item) => {
  return item + 3
})

function merge(arr1, arr2) {
  let arr = [...arr1, ...a2];
  arr = arr.sort();
  // 下面来个双重循环就行了
  return arr;
}

console.log(merge(arr1, arr2));
// [
//     'A1', 'A2', 'A3',
//     'B1', 'B2', 'B3',
//     'C1', 'C2', 'C3',
//     'D1', 'D2', 'D3'
// ]

// 遍历todo 在把  X3 换成 X 即可

\`\`\`
\0<br />一样，这里也可以实现一个\`fn(a,b)\` 只要比较前后两个变量\`a\`、\`b\`即可
<a name="yBdeS"></a>
## 2、说一说\`css\`与\`js\`的压缩原理
1、js的压缩原理：<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1655010106654-3cd1a4c7-55dd-44af-9b74-477309b37dd1.png#averageHue=%2332332d&clientId=ud7a0da2b-ab60-4&from=paste&height=122&id=u6a719366&name=image.png&originHeight=230&originWidth=752&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52645&status=done&style=stroke&taskId=u882a16ce-cd24-4401-80bb-f5a014dbe46&title=&width=399.984375)<br />2、Tree-Shaking，主要还是针对顶层，

- \`rollup\`只处理函数和顶层的\`import/export\`变量，不能把没用到的类的方法消除掉
- \`javascript\`动态语言的特性使得静态分析比较困难

3、\`CSS\` 压缩比较简单，就是将多余的回车\`换行符\`与\`注释\` 去掉

<a name="AIJ6R"></a>
## 3、说说 webpack 的打包原理

<a name="WHBdf"></a>
## 4、说说几种攻击手段，如\`xss\`跨站脚本（Cross-site scripting）等

<a name="gUE3o"></a>
# 5、实现 classNames 库的能力

\`\`\`javascript
/*************************************************
 * 实现 classNames 库的能力
 *
 * classNames('BFE', 'dev', 100)
 * // 'BFE dev 100'
 *
 * classNames(
 *   null, undefined, Symbol(), 1n, true, false
 * )
 * // ''
 *
 * const obj = new Map()
 * obj.cool = '!'
 *
 * classNames({BFE: [], dev: true, is: 3}, obj)
 * // 'BFE dev is cool'
 *
 * classNames(['BFE', [{dev: true}, ['is', [obj]]]])
 * // 'BFE dev is cool'
 ************************************************/


function classNames(...args) {
    let arr = [];
    for (let item of args) {
        // :::: 必须if/else if ,一个经验是尽量这么写，别分开，不然可能会重复命中
        if (typeof item === "string" || typeof item === "number") {
            arr.push(item);
        } else if (Array.isArray(item)) {
            // :::: 彻底打平，然后把它放到args参数里面去
            item.flat(Infinity).forEach((it) => {
                args.push(it);
            })
        }
        // :::: 这里需要过滤掉 null
        else if (typeof item === "object" && item !== null) {
            Object.entries(item).forEach(([k, v]) => {
                arr.push(k)
            })
        }
    }

    return arr;

}


console.log(
    // :::: BigInt 可以表示任意大的整数。1n是一种表达方式， 1n == 1 相等
    classNames(
        null, undefined, Symbol(), 1n, true, false
    ) || ''
)

console.log(
    classNames('BFE', 'dev', 100)
)


const obj = new Map()
obj.cool = '!'

// 'BFE dev is cool'
console.log(
    classNames({BFE: [], dev: true, is: 3}, obj)
)

console.log(
    classNames(['BFE', [{dev: true}, ['is', [obj]]]])
)

\`\`\`

<a name="hCCOo"></a>
# 6、SKU全排列问题

典型的全排列问题，使用回溯算法，注意是三个参数 \` (arr, track, index)\`

\`\`\`javascript
/***
 * 回溯算法
 * sku全排列
 * */
let names = ["iPhone", 'iPhone xs']
let colors = ['黑色', '白色']
let storages = ['64g', '256g']


let combine = function (...chunks) {
    let res = [];
    /**
     * 三个参数
     * */
    const backtrack = (arr, track, index) => {
        let options = arr[index];
        if (track.length === 3) {
            res.push([...track]);
            return;
        }
        for (let i = 0; i < options.length; i++) {
            // 选择
            track.push(options[i]);
            backtrack(chunks, track, index + 1);
            // 取消选择
            track.pop();
        }
    }
    backtrack(chunks, [], 0)
    return res
}

console.log(combine(names, colors, storages));
\`\`\`

<a name="RAxZF"></a>
# 7、说说 CSRF 的原理及如何防范
参考：[CSRF详解 - 掘金](https://juejin.cn/post/7008171429845811207)

- 首先肯定是跨域访问，比如\`script/img/a/form\`提交等
- 不让\`第三方网站\`直接访问

<a name="OvsiH"></a>
# 8、说说\`Flex\`布局的一些属性及细节

- flex-grow   属性  定义 子元素或者子容器 的放大比例，默认为 \`0\` ，即 如果存在剩余空间，也不放大。
- flex-shrink   属性  定义了项目的缩小比例，默认为\`1\`，即如果空间不足，该项目将缩小。
- \`flex: 1 \`默认值是什么 ？ 

第三个参数，即 \`项目本身的大小\` <br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671259398441-7c3600a0-a6be-4103-bb5d-1642e9bb29bf.png#averageHue=%23c4c0c0&clientId=u2f8a759e-27f4-4&from=paste&height=268&id=ud915898b&name=image.png&originHeight=590&originWidth=1598&originalType=binary&ratio=1&rotation=0&showTitle=false&size=145478&status=done&style=stroke&taskId=u3f496446-b3db-4a07-b074-a00043d22f4&title=&width=726.3636206201289)
<a name="qQz6v"></a>
# 9、js中的new的实现逻辑
![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671259489678-ceff838c-e893-46b1-815a-00d68abe11a0.png#averageHue=%2311151a&clientId=u2f8a759e-27f4-4&from=paste&height=316&id=u6ed89974&name=image.png&originHeight=696&originWidth=1614&originalType=binary&ratio=1&rotation=0&showTitle=false&size=106783&status=done&style=stroke&taskId=u07b09d23-6840-45be-824c-6562a51a9b2&title=&width=733.636347735224)

这一版更好理解：<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671259565612-49bd4a7f-d35e-4c23-aeae-80a51d30e438.png#averageHue=%23bbbabd&clientId=u2f8a759e-27f4-4&from=paste&height=254&id=ucc6b2119&name=image.png&originHeight=558&originWidth=1632&originalType=binary&ratio=1&rotation=0&showTitle=false&size=149733&status=done&style=stroke&taskId=u963a01b9-e15b-41c2-b9f4-92ef3118933&title=&width=741.818165739706)

简版：记住这个就好了！！！
\`\`\`javascript
function myNew(fn,...args) {
    const obj = Object.create(fn.prototype);
    const res = fn.apply(obj,args);
    return res instanceof Object ? res : obj;
}
\`\`\`



<a name="eSI0F"></a>
# 10、vue中，computed 与 watch 的区别

- \`computed\`只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。 
- \`watch\`每次都需要执行函数。 \`watch\`更适用于数据变化时的异步操作。

<a name="Z9ws0"></a>
# 11、vue中，是如何做依赖收集的，收集的是那些部分内容

<a name="KXKGr"></a>
# 12、说说react18  的并发？

<a name="RSL4U"></a>
# 13、低代码如何实现？

<a name="C3XZD"></a>
# 14、js在数据类型的存储区别是什么？

<a name="Z2Ru2"></a>
# 15、es5中，继承是如何实现的？

<a name="NCWPE"></a>
# 16、聊一聊事件循环？

<a name="OrW2D"></a>
# 17、class中箭头函数与普通函数的 \`this\` 指向问题

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671145613734-927834d4-050e-4264-bc03-b8975c20a35c.png#averageHue=%231f1d1d&clientId=u71d7a380-b126-4&from=paste&height=399&id=u0bfdccc0&name=image.png&originHeight=1196&originWidth=2146&originalType=binary&ratio=1&rotation=0&showTitle=false&size=237885&status=done&style=stroke&taskId=uf8135b46-a4b6-4828-94ae-1b7e920c804&title=&width=715.3333333333334)
> 上面的描述反了吧？


![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671145364400-e0dd3a5e-4368-458c-b7c5-34c2f3b18b64.png#averageHue=%235a7a86&clientId=u71d7a380-b126-4&from=paste&height=117&id=ued93c63c&name=image.png&originHeight=350&originWidth=1838&originalType=binary&ratio=1&rotation=0&showTitle=false&size=113454&status=done&style=stroke&taskId=u947be352-319d-4345-b8c3-34e582c71ce&title=&width=612.6666666666666)


![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671145831511-e3d95533-d5a2-404a-baac-fc0f3fb73388.png#averageHue=%231e1d1d&clientId=u71d7a380-b126-4&from=paste&height=431&id=u40f2438c&name=image.png&originHeight=1056&originWidth=2826&originalType=binary&ratio=1&rotation=0&showTitle=false&size=304840&status=done&style=stroke&taskId=udbc8027b-136c-4429-8e68-e65c125d224&title=&width=1154)

源码部分：
\`\`\`typescript
class Animal{
    constructor() {
        this.name = 'cat'
    }
    // ::::普通函数方法
    speak(){
        // ::::当然，this都指向实例对象
        console.log(this.name)
    }
    // ::::箭头函数方法
    eat = () => {
        // ::::当然，this都指向实例对象
        console.log(this.name)
    }
}
const n = new Animal();
const a = n.speak;
const b = n.eat

b();  //// ::::箭头函数方法： this依然指向创建的实例对象，即，箭头函数中的this始终是该箭头函数所在作用域中的this
a();  // ::::普通方法，报错，因为 方法中的this 会指向undefined ，即普通函数中的 this 是动态绑定的，始终指向函数的执行环境，

\`\`\`

<a name="nZ6Nz"></a>
# 18、说说fiber架构，看过那些Hooks源码？？

<a name="kRtz5"></a>
# 19、说说React rerender全流程

<a name="XELB3"></a>
# 20、Vue的响应式原理（观察者是在哪里被处理的，挂在哪里）

<a name="GrMZt"></a>
# 21、ssr的性能瓶颈，一定就比客户端渲染好吗？

<a name="sBd5r"></a>
# 22、两个模块，循环引用了，怎么解决？

- [https://juejin.cn/post/6844903768266391559](https://juejin.cn/post/6844903768266391559)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671583878935-4b057a38-dc2d-4ee9-952c-4b742df5e60c.png#averageHue=%23d9d9d9&clientId=u19662187-bc53-4&from=paste&height=484&id=ue6127a38&name=image.png&originHeight=948&originWidth=1664&originalType=binary&ratio=1&rotation=0&showTitle=false&size=201050&status=done&style=stroke&taskId=uf18fe898-6b20-449f-b725-27503518f2e&title=&width=849.359375)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671583968553-a93811ef-c23c-4cbc-94f0-5b1e77f95326.png#averageHue=%23252525&clientId=u19662187-bc53-4&from=paste&height=646&id=u909e370f&name=image.png&originHeight=1218&originWidth=1548&originalType=binary&ratio=1&rotation=0&showTitle=false&size=226011&status=done&style=stroke&taskId=u06ec08a2-abe6-4141-8575-e583e227165&title=&width=820.6363525390625)

- 解决方法之一：使用函数，产生一个新的值！

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671881368056-fc43668b-560d-48c5-9d79-61d0f5046342.png#averageHue=%23dadada&clientId=u7ec53674-144a-4&from=paste&height=702&id=uc4ec4cac&name=image.png&originHeight=1544&originWidth=1554&originalType=binary&ratio=1&rotation=0&showTitle=false&size=345741&status=done&style=stroke&taskId=u29ab013d-43d6-4bd7-a2f2-7c3828387f0&title=&width=706.3636210536172)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671881408146-d80c81d2-7c79-434e-84f0-0249f948254a.png#averageHue=%231d1d1d&clientId=u7ec53674-144a-4&from=paste&height=531&id=ueca7037d&name=image.png&originHeight=1168&originWidth=2630&originalType=binary&ratio=1&rotation=0&showTitle=false&size=394655&status=done&style=stroke&taskId=ueac9d329-aab7-4243-9eb1-ffe933f3ce0&title=&width=1195.4545195437665)

<a name="sxcNV"></a>
# 23、\`http2\`的新特性，多路复用原理以及用了什么算法？？

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671589581821-33f9a5fa-561a-494b-9273-40b28f748970.png#averageHue=%239b9b9b&clientId=u19662187-bc53-4&from=paste&height=107&id=u9f16eba2&name=image.png&originHeight=236&originWidth=1444&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50930&status=done&style=stroke&taskId=ue4cd5773-d948-4499-b7d0-d6f6a855ec2&title=&width=656.363622137338)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671589530843-46fd7947-0cb9-4777-b311-57166a6f9808.png#averageHue=%23dfdfde&clientId=u19662187-bc53-4&from=paste&height=719&id=ue2dc14a8&name=image.png&originHeight=1582&originWidth=1712&originalType=binary&ratio=1&rotation=0&showTitle=false&size=949780&status=done&style=stroke&taskId=uc2022daa-0db9-4d07-8673-a728b262a28&title=&width=778.1818013151819)



<a name="ORpLl"></a>
# 24、设计一个按需加载的 webpack loader ,如何设计 ？
我理解有点类似于\`AMD\`的思路吧，即如何加载一个异步的js

<a name="xpat3"></a>
# 26、浏览器器强刷？- 设置了\`cache-control\` 为 \`no-cache\`
![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671793223815-84d27f06-22ac-4376-b5d6-016bfb777e7b.png#averageHue=%232a2a2a&clientId=u7dc6fb82-2a13-4&from=paste&height=457&id=u68e95491&name=image.png&originHeight=1142&originWidth=1946&originalType=binary&ratio=1&rotation=0&showTitle=false&size=273166&status=done&style=stroke&taskId=ufbb5e0c9-7c63-4e44-9f14-a9c10f1c185&title=&width=778.4)






`,body_draft:`
<a name="XRITI"></a>
## 1、请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]

**记住，补齐即可，然后再去掉**

\`\`\`typescript
/**
 * 请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，
 * 合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
 * */

let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
let arr2 = ['A', 'B', 'C', 'D']

// 这个思路不错

let a2 = arr2.map((item) => {
  return item + 3
})

function merge(arr1, arr2) {
  let arr = [...arr1, ...a2];
  arr = arr.sort();
  // 下面来个双重循环就行了
  return arr;
}

console.log(merge(arr1, arr2));
// [
//     'A1', 'A2', 'A3',
//     'B1', 'B2', 'B3',
//     'C1', 'C2', 'C3',
//     'D1', 'D2', 'D3'
// ]

// 遍历todo 在把  X3 换成 X 即可

\`\`\`
\0<br />一样，这里也可以实现一个\`fn(a,b)\` 只要比较前后两个变量\`a\`、\`b\`即可
<a name="yBdeS"></a>
## 2、说一说\`css\`与\`js\`的压缩原理
1、js的压缩原理：<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1655010106654-3cd1a4c7-55dd-44af-9b74-477309b37dd1.png#averageHue=%2332332d&clientId=ud7a0da2b-ab60-4&from=paste&height=122&id=u6a719366&name=image.png&originHeight=230&originWidth=752&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52645&status=done&style=stroke&taskId=u882a16ce-cd24-4401-80bb-f5a014dbe46&title=&width=399.984375)<br />2、Tree-Shaking，主要还是针对顶层，

- \`rollup\`只处理函数和顶层的\`import/export\`变量，不能把没用到的类的方法消除掉
- \`javascript\`动态语言的特性使得静态分析比较困难

3、\`CSS\` 压缩比较简单，就是将多余的回车\`换行符\`与\`注释\` 去掉

<a name="AIJ6R"></a>
## 3、说说 webpack 的打包原理

<a name="WHBdf"></a>
## 4、说说几种攻击手段，如\`xss\`跨站脚本（Cross-site scripting）等

<a name="gUE3o"></a>
# 5、实现 classNames 库的能力

\`\`\`javascript
/*************************************************
 * 实现 classNames 库的能力
 *
 * classNames('BFE', 'dev', 100)
 * // 'BFE dev 100'
 *
 * classNames(
 *   null, undefined, Symbol(), 1n, true, false
 * )
 * // ''
 *
 * const obj = new Map()
 * obj.cool = '!'
 *
 * classNames({BFE: [], dev: true, is: 3}, obj)
 * // 'BFE dev is cool'
 *
 * classNames(['BFE', [{dev: true}, ['is', [obj]]]])
 * // 'BFE dev is cool'
 ************************************************/


function classNames(...args) {
    let arr = [];
    for (let item of args) {
        // :::: 必须if/else if ,一个经验是尽量这么写，别分开，不然可能会重复命中
        if (typeof item === "string" || typeof item === "number") {
            arr.push(item);
        } else if (Array.isArray(item)) {
            // :::: 彻底打平，然后把它放到args参数里面去
            item.flat(Infinity).forEach((it) => {
                args.push(it);
            })
        }
        // :::: 这里需要过滤掉 null
        else if (typeof item === "object" && item !== null) {
            Object.entries(item).forEach(([k, v]) => {
                arr.push(k)
            })
        }
    }

    return arr;

}


console.log(
    // :::: BigInt 可以表示任意大的整数。1n是一种表达方式， 1n == 1 相等
    classNames(
        null, undefined, Symbol(), 1n, true, false
    ) || ''
)

console.log(
    classNames('BFE', 'dev', 100)
)


const obj = new Map()
obj.cool = '!'

// 'BFE dev is cool'
console.log(
    classNames({BFE: [], dev: true, is: 3}, obj)
)

console.log(
    classNames(['BFE', [{dev: true}, ['is', [obj]]]])
)

\`\`\`

<a name="hCCOo"></a>
# 6、SKU全排列问题

典型的全排列问题，使用回溯算法，注意是三个参数 \` (arr, track, index)\`

\`\`\`javascript
/***
 * 回溯算法
 * sku全排列
 * */
let names = ["iPhone", 'iPhone xs']
let colors = ['黑色', '白色']
let storages = ['64g', '256g']


let combine = function (...chunks) {
    let res = [];
    /**
     * 三个参数
     * */
    const backtrack = (arr, track, index) => {
        let options = arr[index];
        if (track.length === 3) {
            res.push([...track]);
            return;
        }
        for (let i = 0; i < options.length; i++) {
            // 选择
            track.push(options[i]);
            backtrack(chunks, track, index + 1);
            // 取消选择
            track.pop();
        }
    }
    backtrack(chunks, [], 0)
    return res
}

console.log(combine(names, colors, storages));
\`\`\`

<a name="RAxZF"></a>
# 7、说说 CSRF 的原理及如何防范
参考：[CSRF详解 - 掘金](https://juejin.cn/post/7008171429845811207)

- 首先肯定是跨域访问，比如\`script/img/a/form\`提交等
- 不让\`第三方网站\`直接访问

<a name="OvsiH"></a>
# 8、说说\`Flex\`布局的一些属性及细节

- flex-grow   属性  定义 子元素或者子容器 的放大比例，默认为 \`0\` ，即 如果存在剩余空间，也不放大。
- flex-shrink   属性  定义了项目的缩小比例，默认为\`1\`，即如果空间不足，该项目将缩小。
- \`flex: 1 \`默认值是什么 ？ 

第三个参数，即 \`项目本身的大小\` <br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671259398441-7c3600a0-a6be-4103-bb5d-1642e9bb29bf.png#averageHue=%23c4c0c0&clientId=u2f8a759e-27f4-4&from=paste&height=268&id=ud915898b&name=image.png&originHeight=590&originWidth=1598&originalType=binary&ratio=1&rotation=0&showTitle=false&size=145478&status=done&style=stroke&taskId=u3f496446-b3db-4a07-b074-a00043d22f4&title=&width=726.3636206201289)
<a name="qQz6v"></a>
# 9、js中的new的实现逻辑
![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671259489678-ceff838c-e893-46b1-815a-00d68abe11a0.png#averageHue=%2311151a&clientId=u2f8a759e-27f4-4&from=paste&height=316&id=u6ed89974&name=image.png&originHeight=696&originWidth=1614&originalType=binary&ratio=1&rotation=0&showTitle=false&size=106783&status=done&style=stroke&taskId=u07b09d23-6840-45be-824c-6562a51a9b2&title=&width=733.636347735224)

这一版更好理解：<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671259565612-49bd4a7f-d35e-4c23-aeae-80a51d30e438.png#averageHue=%23bbbabd&clientId=u2f8a759e-27f4-4&from=paste&height=254&id=ucc6b2119&name=image.png&originHeight=558&originWidth=1632&originalType=binary&ratio=1&rotation=0&showTitle=false&size=149733&status=done&style=stroke&taskId=u963a01b9-e15b-41c2-b9f4-92ef3118933&title=&width=741.818165739706)

简版：记住这个就好了！！！
\`\`\`javascript
function myNew(fn,...args) {
    const obj = Object.create(fn.prototype);
    const res = fn.apply(obj,args);
    return res instanceof Object ? res : obj;
}
\`\`\`



<a name="eSI0F"></a>
# 10、vue中，computed 与 watch 的区别

- \`computed\`只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。 
- \`watch\`每次都需要执行函数。 \`watch\`更适用于数据变化时的异步操作。

<a name="Z9ws0"></a>
# 11、vue中，是如何做依赖收集的，收集的是那些部分内容

<a name="KXKGr"></a>
# 12、说说react18  的并发？

<a name="RSL4U"></a>
# 13、低代码如何实现？

<a name="C3XZD"></a>
# 14、js在数据类型的存储区别是什么？

<a name="Z2Ru2"></a>
# 15、es5中，继承是如何实现的？

<a name="NCWPE"></a>
# 16、聊一聊事件循环？

<a name="OrW2D"></a>
# 17、class中箭头函数与普通函数的 \`this\` 指向问题

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671145613734-927834d4-050e-4264-bc03-b8975c20a35c.png#averageHue=%231f1d1d&clientId=u71d7a380-b126-4&from=paste&height=399&id=u0bfdccc0&name=image.png&originHeight=1196&originWidth=2146&originalType=binary&ratio=1&rotation=0&showTitle=false&size=237885&status=done&style=stroke&taskId=uf8135b46-a4b6-4828-94ae-1b7e920c804&title=&width=715.3333333333334)
> 上面的描述反了吧？


![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671145364400-e0dd3a5e-4368-458c-b7c5-34c2f3b18b64.png#averageHue=%235a7a86&clientId=u71d7a380-b126-4&from=paste&height=117&id=ued93c63c&name=image.png&originHeight=350&originWidth=1838&originalType=binary&ratio=1&rotation=0&showTitle=false&size=113454&status=done&style=stroke&taskId=u947be352-319d-4345-b8c3-34e582c71ce&title=&width=612.6666666666666)


![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671145831511-e3d95533-d5a2-404a-baac-fc0f3fb73388.png#averageHue=%231e1d1d&clientId=u71d7a380-b126-4&from=paste&height=431&id=u40f2438c&name=image.png&originHeight=1056&originWidth=2826&originalType=binary&ratio=1&rotation=0&showTitle=false&size=304840&status=done&style=stroke&taskId=udbc8027b-136c-4429-8e68-e65c125d224&title=&width=1154)

源码部分：
\`\`\`typescript
class Animal{
    constructor() {
        this.name = 'cat'
    }
    // ::::普通函数方法
    speak(){
        // ::::当然，this都指向实例对象
        console.log(this.name)
    }
    // ::::箭头函数方法
    eat = () => {
        // ::::当然，this都指向实例对象
        console.log(this.name)
    }
}
const n = new Animal();
const a = n.speak;
const b = n.eat

b();  //// ::::箭头函数方法： this依然指向创建的实例对象，即，箭头函数中的this始终是该箭头函数所在作用域中的this
a();  // ::::普通方法，报错，因为 方法中的this 会指向undefined ，即普通函数中的 this 是动态绑定的，始终指向函数的执行环境，

\`\`\`

<a name="nZ6Nz"></a>
# 18、说说fiber架构，看过那些Hooks源码？？

<a name="kRtz5"></a>
# 19、说说React rerender全流程

<a name="XELB3"></a>
# 20、Vue的响应式原理（观察者是在哪里被处理的，挂在哪里）

<a name="GrMZt"></a>
# 21、ssr的性能瓶颈，一定就比客户端渲染好吗？

<a name="sBd5r"></a>
# 22、两个模块，循环引用了，怎么解决？

- [https://juejin.cn/post/6844903768266391559](https://juejin.cn/post/6844903768266391559)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671583878935-4b057a38-dc2d-4ee9-952c-4b742df5e60c.png#averageHue=%23d9d9d9&clientId=u19662187-bc53-4&from=paste&height=484&id=ue6127a38&name=image.png&originHeight=948&originWidth=1664&originalType=binary&ratio=1&rotation=0&showTitle=false&size=201050&status=done&style=stroke&taskId=uf18fe898-6b20-449f-b725-27503518f2e&title=&width=849.359375)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671583968553-a93811ef-c23c-4cbc-94f0-5b1e77f95326.png#averageHue=%23252525&clientId=u19662187-bc53-4&from=paste&height=646&id=u909e370f&name=image.png&originHeight=1218&originWidth=1548&originalType=binary&ratio=1&rotation=0&showTitle=false&size=226011&status=done&style=stroke&taskId=u06ec08a2-abe6-4141-8575-e583e227165&title=&width=820.6363525390625)

- 解决方法之一：使用函数，产生一个新的值！

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671881368056-fc43668b-560d-48c5-9d79-61d0f5046342.png#averageHue=%23dadada&clientId=u7ec53674-144a-4&from=paste&height=702&id=uc4ec4cac&name=image.png&originHeight=1544&originWidth=1554&originalType=binary&ratio=1&rotation=0&showTitle=false&size=345741&status=done&style=stroke&taskId=u29ab013d-43d6-4bd7-a2f2-7c3828387f0&title=&width=706.3636210536172)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671881408146-d80c81d2-7c79-434e-84f0-0249f948254a.png#averageHue=%231d1d1d&clientId=u7ec53674-144a-4&from=paste&height=531&id=ueca7037d&name=image.png&originHeight=1168&originWidth=2630&originalType=binary&ratio=1&rotation=0&showTitle=false&size=394655&status=done&style=stroke&taskId=ueac9d329-aab7-4243-9eb1-ffe933f3ce0&title=&width=1195.4545195437665)

<a name="sxcNV"></a>
# 23、\`http2\`的新特性，多路复用原理以及用了什么算法？？

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671589581821-33f9a5fa-561a-494b-9273-40b28f748970.png#averageHue=%239b9b9b&clientId=u19662187-bc53-4&from=paste&height=107&id=u9f16eba2&name=image.png&originHeight=236&originWidth=1444&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50930&status=done&style=stroke&taskId=ue4cd5773-d948-4499-b7d0-d6f6a855ec2&title=&width=656.363622137338)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671589530843-46fd7947-0cb9-4777-b311-57166a6f9808.png#averageHue=%23dfdfde&clientId=u19662187-bc53-4&from=paste&height=719&id=ue2dc14a8&name=image.png&originHeight=1582&originWidth=1712&originalType=binary&ratio=1&rotation=0&showTitle=false&size=949780&status=done&style=stroke&taskId=uc2022daa-0db9-4d07-8673-a728b262a28&title=&width=778.1818013151819)



<a name="ORpLl"></a>
# 24、设计一个按需加载的 webpack loader ,如何设计 ？
我理解有点类似于\`AMD\`的思路吧，即如何加载一个异步的js

<a name="xpat3"></a>
# 26、浏览器器强刷？- 设置了\`cache-control\` 为 \`no-cache\`
![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671793223815-84d27f06-22ac-4376-b5d6-016bfb777e7b.png#averageHue=%232a2a2a&clientId=u7dc6fb82-2a13-4&from=paste&height=457&id=u68e95491&name=image.png&originHeight=1142&originWidth=1946&originalType=binary&ratio=1&rotation=0&showTitle=false&size=273166&status=done&style=stroke&taskId=ufbb5e0c9-7c63-4e44-9f14-a9c10f1c185&title=&width=778.4)






`,body_html:`<!doctype html><div class="lake-content" typography="classic"><p id="uc639ae40" class="ne-p"><br></p><h2 id="XRITI"><span class="ne-text">1、请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]</span></h2><p id="u5bacb63b" class="ne-p"><br></p><p id="u3f099937" class="ne-p"><strong><span class="ne-text" style="text-decoration: underline">记住，补齐即可，然后再去掉</span></strong></p><p id="u254e5cc0" class="ne-p"><strong><span class="ne-text" style="text-decoration: underline"></span></strong></p><pre data-language="typescript" id="OhSgI" class="ne-codeblock language-typescript">/**
 * 请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，
 * 合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
 * */

let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
let arr2 = ['A', 'B', 'C', 'D']

// 这个思路不错

let a2 = arr2.map((item) =&gt; {
  return item + 3
})

function merge(arr1, arr2) {
  let arr = [...arr1, ...a2];
  arr = arr.sort();
  // 下面来个双重循环就行了
  return arr;
}

console.log(merge(arr1, arr2));
// [
//     'A1', 'A2', 'A3',
//     'B1', 'B2', 'B3',
//     'C1', 'C2', 'C3',
//     'D1', 'D2', 'D3'
// ]

// 遍历todo 在把  X3 换成 X 即可
</pre><p id="u83876247" class="ne-p"><span class="ne-text">\0</span></p><p id="u52c88924" class="ne-p"><span class="ne-text">一样，这里也可以实现一个</span><code class="ne-code"><span class="ne-text">fn(a,b)</span></code><span class="ne-text"> 只要比较前后两个变量</span><code class="ne-code"><span class="ne-text">a</span></code><span class="ne-text">、</span><code class="ne-code"><span class="ne-text">b</span></code><span class="ne-text">即可</span></p><h2 id="yBdeS"><span class="ne-text">2、说一说</span><code class="ne-code"><span class="ne-text">css</span></code><span class="ne-text">与</span><code class="ne-code"><span class="ne-text">js</span></code><span class="ne-text">的压缩原理</span></h2><p id="u4c169167" class="ne-p"><span class="ne-text">1、js的压缩原理：</span></p><p id="ueb681c36" class="ne-p" style="text-indent: 2em"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1655010106654-3cd1a4c7-55dd-44af-9b74-477309b37dd1.png" width="399.984375" id="u6a719366" class="ne-image"></p><p id="u6c87d401" class="ne-p"><span class="ne-text">2、Tree-Shaking，主要还是针对顶层，</span></p><ul class="ne-ul"><li id="udadfd090"><code class="ne-code"><span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">rollup</span></code><span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">只处理函数和顶层的</span><code class="ne-code"><span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">import/export</span></code><span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">变量，不能把没用到的类的方法消除掉</span></li><li id="u86c3be94"><code class="ne-code"><span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">javascript</span></code><span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">动态语言的特性使得静态分析比较困难</span></li></ul><p id="u19f5f22f" class="ne-p"><br></p><p id="ub0525928" class="ne-p"><span class="ne-text">3、</span><code class="ne-code"><span class="ne-text">CSS</span></code><span class="ne-text"> 压缩比较简单，就是将多余的回车</span><code class="ne-code"><span class="ne-text">换行符</span></code><span class="ne-text">与</span><code class="ne-code"><span class="ne-text">注释</span></code><span class="ne-text"> 去掉</span></p><p id="u7d54ed3b" class="ne-p"><span class="ne-text"></span></p><h2 id="AIJ6R"><span class="ne-text">3、说说 webpack 的打包原理</span></h2><p id="ud114395f" class="ne-p"><br></p><h2 id="WHBdf"><span class="ne-text">4、说说几种攻击手段，如</span><code class="ne-code"><span class="ne-text">xss</span></code><span class="ne-text">跨站脚本（Cross-site scripting）等</span></h2><p id="uc0e3fbe9" class="ne-p"><br></p><h1 id="gUE3o"><span class="ne-text">5、实现 classNames 库的能力</span></h1><p id="u14d92006" class="ne-p"><br></p><pre data-language="javascript" id="HK0ks" class="ne-codeblock language-javascript">/*************************************************
 * 实现 classNames 库的能力
 *
 * classNames('BFE', 'dev', 100)
 * // 'BFE dev 100'
 *
 * classNames(
 *   null, undefined, Symbol(), 1n, true, false
 * )
 * // ''
 *
 * const obj = new Map()
 * obj.cool = '!'
 *
 * classNames({BFE: [], dev: true, is: 3}, obj)
 * // 'BFE dev is cool'
 *
 * classNames(['BFE', [{dev: true}, ['is', [obj]]]])
 * // 'BFE dev is cool'
 ************************************************/


function classNames(...args) {
    let arr = [];
    for (let item of args) {
        // :::: 必须if/else if ,一个经验是尽量这么写，别分开，不然可能会重复命中
        if (typeof item === &quot;string&quot; || typeof item === &quot;number&quot;) {
            arr.push(item);
        } else if (Array.isArray(item)) {
            // :::: 彻底打平，然后把它放到args参数里面去
            item.flat(Infinity).forEach((it) =&gt; {
                args.push(it);
            })
        }
        // :::: 这里需要过滤掉 null
        else if (typeof item === &quot;object&quot; &amp;&amp; item !== null) {
            Object.entries(item).forEach(([k, v]) =&gt; {
                arr.push(k)
            })
        }
    }

    return arr;

}


console.log(
    // :::: BigInt 可以表示任意大的整数。1n是一种表达方式， 1n == 1 相等
    classNames(
        null, undefined, Symbol(), 1n, true, false
    ) || ''
)

console.log(
    classNames('BFE', 'dev', 100)
)


const obj = new Map()
obj.cool = '!'

// 'BFE dev is cool'
console.log(
    classNames({BFE: [], dev: true, is: 3}, obj)
)

console.log(
    classNames(['BFE', [{dev: true}, ['is', [obj]]]])
)
</pre><p id="ua517e2e2" class="ne-p"><br></p><h1 id="hCCOo"><span class="ne-text">6、SKU全排列问题</span></h1><p id="ud7bfd0a7" class="ne-p"><br></p><p id="u17a64e95" class="ne-p"><span class="ne-text">典型的全排列问题，使用回溯算法，注意是三个参数 </span><code class="ne-code"><span class="ne-text"> (arr, track, index)</span></code></p><p id="uc529897e" class="ne-p"><span class="ne-text"></span></p><pre data-language="javascript" id="EJIOP" class="ne-codeblock language-javascript">/***
 * 回溯算法
 * sku全排列
 * */
let names = [&quot;iPhone&quot;, 'iPhone xs']
let colors = ['黑色', '白色']
let storages = ['64g', '256g']


let combine = function (...chunks) {
    let res = [];
    /**
     * 三个参数
     * */
    const backtrack = (arr, track, index) =&gt; {
        let options = arr[index];
        if (track.length === 3) {
            res.push([...track]);
            return;
        }
        for (let i = 0; i &lt; options.length; i++) {
            // 选择
            track.push(options[i]);
            backtrack(chunks, track, index + 1);
            // 取消选择
            track.pop();
        }
    }
    backtrack(chunks, [], 0)
    return res
}

console.log(combine(names, colors, storages));</pre><p id="u8daf7a4d" class="ne-p"><span class="ne-text"></span></p><h1 id="RAxZF"><span class="ne-text">7、说说 CSRF 的原理及如何防范</span></h1><p id="u292efd80" class="ne-p"><span class="ne-text">参考：</span><a href="https://juejin.cn/post/7008171429845811207" data-href="https://juejin.cn/post/7008171429845811207" class="ne-link"><span class="ne-text">CSRF详解 - 掘金</span></a></p><ul class="ne-ul"><li id="ue69db99d"><span class="ne-text">首先肯定是跨域访问，比如</span><code class="ne-code"><span class="ne-text">script/img/a/form</span></code><span class="ne-text">提交等</span></li><li id="u81504f57"><span class="ne-text">不让</span><code class="ne-code"><span class="ne-text">第三方网站</span></code><span class="ne-text">直接访问</span></li></ul><p id="u967dfff0" class="ne-p"><span class="ne-text"></span></p><h1 id="OvsiH"><span class="ne-text">8、说说</span><code class="ne-code"><span class="ne-text">Flex</span></code><span class="ne-text">布局的一些属性及细节</span></h1><p id="ud13f5201" class="ne-p"><span class="ne-text"></span></p><ul class="ne-ul"><li id="ud7db5568"><span class="ne-text">flex-grow   属性  定义 子元素或者子容器 的放大比例，默认为 </span><code class="ne-code"><span class="ne-text">0</span></code><span class="ne-text"> ，即 如果存在剩余空间，也不放大。</span></li><li id="u0769f8fb"><span class="ne-text">flex-shrink   属性  定义了项目的缩小比例，默认为</span><code class="ne-code"><span class="ne-text">1</span></code><span class="ne-text">，即如果空间不足，该项目将缩小。</span></li><li id="ueea6b95e"><code class="ne-code"><span class="ne-text">flex: 1 </span></code><span class="ne-text">默认值是什么 ？ </span></li></ul><p id="uac87c668" class="ne-p"><span class="ne-text"></span></p><p id="u4d5f3005" class="ne-p"><span class="ne-text">第三个参数，即 </span><code class="ne-code"><span class="ne-text" style="color: #E8323C; text-decoration: underline">项目本身的大小</span></code><span class="ne-text" style="color: #E8323C; text-decoration: underline"> </span></p><p id="u3fe37be4" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671259398441-7c3600a0-a6be-4103-bb5d-1642e9bb29bf.png" width="726.3636206201289" id="ud915898b" class="ne-image"></p><h1 id="qQz6v"><span class="ne-text">9、js中的new的实现逻辑</span></h1><p id="u7429bfdc" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671259489678-ceff838c-e893-46b1-815a-00d68abe11a0.png" width="733.636347735224" id="u6ed89974" class="ne-image"></p><p id="u0289ed3d" class="ne-p"><br></p><p id="u217a888e" class="ne-p"><span class="ne-text">这一版更好理解：</span></p><p id="u332db18e" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671259565612-49bd4a7f-d35e-4c23-aeae-80a51d30e438.png" width="741.818165739706" id="ucc6b2119" class="ne-image"></p><p id="u1fa59948" class="ne-p"><br></p><p id="u5d849e6b" class="ne-p"><span class="ne-text">简版：记住这个就好了！！！</span></p><pre data-language="javascript" id="v69tY" class="ne-codeblock language-javascript">function myNew(fn,...args) {
    const obj = Object.create(fn.prototype);
    const res = fn.apply(obj,args);
    return res instanceof Object ? res : obj;
}</pre><p id="u7aa9a233" class="ne-p"><br></p><p id="u5881929d" class="ne-p"><br></p><p id="ua3cb7c1b" class="ne-p"><br></p><h1 id="eSI0F"><span class="ne-text">10、vue中，computed 与 watch 的区别</span></h1><ul class="ne-ul"><li id="u8a7ffe89"><code class="ne-code"><span class="ne-text">computed</span></code><span class="ne-text">只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。 </span></li><li id="u6b33e3e8"><code class="ne-code"><span class="ne-text">watch</span></code><span class="ne-text">每次都需要执行函数。 </span><code class="ne-code"><span class="ne-text">watch</span></code><span class="ne-text">更适用于数据变化时的异步操作。</span></li></ul><p id="ub913245b" class="ne-p"><br></p><h1 id="Z9ws0"><span class="ne-text">11、vue中，是如何做依赖收集的，收集的是那些部分内容</span></h1><p id="u54d4ae79" class="ne-p"><br></p><h1 id="KXKGr"><span class="ne-text">12、说说react18  的并发？</span></h1><p id="u82f40463" class="ne-p"><br></p><h1 id="RSL4U"><span class="ne-text">13、低代码如何实现？</span></h1><p id="u23b2ae5a" class="ne-p"><br></p><h1 id="C3XZD"><span class="ne-text">14、js在数据类型的存储区别是什么？</span></h1><p id="u51271aec" class="ne-p"><br></p><h1 id="Z2Ru2"><span class="ne-text">15、es5中，继承是如何实现的？</span></h1><p id="u7daa849d" class="ne-p"><br></p><h1 id="NCWPE"><span class="ne-text">16、聊一聊事件循环？</span></h1><p id="ubf4336f7" class="ne-p"><br></p><h1 id="OrW2D"><span class="ne-text">17、class中箭头函数与普通函数的 </span><code class="ne-code"><span class="ne-text">this</span></code><span class="ne-text"> 指向问题</span></h1><p id="uaddc0428" class="ne-p"><br></p><p id="uf612a905" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671145613734-927834d4-050e-4264-bc03-b8975c20a35c.png" width="715.3333333333334" id="u0bfdccc0" class="ne-image"></p><div class="ne-quote"><p id="u432d139f" class="ne-p"><span class="ne-text" style="color: rgb(205, 23, 33); background-color: rgb(235, 204, 5)">上面的描述反了吧？</span></p></div><p id="ubcc6ec8f" class="ne-p"><span class="ne-text" style="color: rgb(205, 23, 33)"></span></p><p id="u2f0c6252" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671145364400-e0dd3a5e-4368-458c-b7c5-34c2f3b18b64.png" width="612.6666666666666" id="ued93c63c" class="ne-image"></p><p id="uc84dbcbb" class="ne-p"><br></p><p id="uc5f6cd98" class="ne-p"><br></p><p id="u2e4a2ad3" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671145831511-e3d95533-d5a2-404a-baac-fc0f3fb73388.png" width="1154" id="u40f2438c" class="ne-image"></p><p id="u585cdbd7" class="ne-p"><br></p><p id="uee06bf6a" class="ne-p"><span class="ne-text">源码部分：</span></p><pre data-language="typescript" id="xsxYn" class="ne-codeblock language-typescript">class Animal{
    constructor() {
        this.name = 'cat'
    }
    // ::::普通函数方法
    speak(){
        // ::::当然，this都指向实例对象
        console.log(this.name)
    }
    // ::::箭头函数方法
    eat = () =&gt; {
        // ::::当然，this都指向实例对象
        console.log(this.name)
    }
}
const n = new Animal();
const a = n.speak;
const b = n.eat

b();  //// ::::箭头函数方法： this依然指向创建的实例对象，即，箭头函数中的this始终是该箭头函数所在作用域中的this
a();  // ::::普通方法，报错，因为 方法中的this 会指向undefined ，即普通函数中的 this 是动态绑定的，始终指向函数的执行环境，
</pre><p id="u6a04e401" class="ne-p"><span class="ne-text"></span></p><h1 id="nZ6Nz"><span class="ne-text">18、说说fiber架构，看过那些Hooks源码？？</span></h1><p id="uf7e04168" class="ne-p"><br></p><h1 id="kRtz5"><span class="ne-text">19、说说React rerender全流程</span></h1><p id="ua5f89ac9" class="ne-p"><br></p><h1 id="XELB3"><span class="ne-text">20、Vue的响应式原理（观察者是在哪里被处理的，挂在哪里）</span></h1><p id="u1c553169" class="ne-p"><span class="ne-text"></span></p><h1 id="GrMZt"><span class="ne-text">21、ssr的性能瓶颈，一定就比客户端渲染好吗？</span></h1><p id="u3a6d73fe" class="ne-p"><br></p><h1 id="sBd5r"><span class="ne-text">22、两个模块，循环引用了，怎么解决？</span></h1><p id="ud3a4b523" class="ne-p"><br></p><ul class="ne-ul"><li id="u0bbdd4f5"><a href="https://juejin.cn/post/6844903768266391559" data-href="https://juejin.cn/post/6844903768266391559" target="_blank" class="ne-link"><span class="ne-text">https://juejin.cn/post/6844903768266391559</span></a></li></ul><p id="ud2cdf714" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671583878935-4b057a38-dc2d-4ee9-952c-4b742df5e60c.png" width="849.359375" id="ue6127a38" class="ne-image"></p><p id="u51f7e390" class="ne-p"><br></p><p id="u015bc77d" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671583968553-a93811ef-c23c-4cbc-94f0-5b1e77f95326.png" width="820.6363525390625" id="u909e370f" class="ne-image"></p><p id="u174d69ff" class="ne-p"><br></p><ul class="ne-ul"><li id="ubf04702e"><span class="ne-text">解决方法之一：使用函数，产生一个新的值！</span></li></ul><p id="u0a0f3250" class="ne-p"><br></p><p id="ub5509845" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671881368056-fc43668b-560d-48c5-9d79-61d0f5046342.png" width="706.3636210536172" id="uc4ec4cac" class="ne-image"></p><p id="u27ddd640" class="ne-p"><br></p><p id="ubdd1dff2" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671881408146-d80c81d2-7c79-434e-84f0-0249f948254a.png" width="1195.4545195437665" id="ueca7037d" class="ne-image"></p><p id="u3640914b" class="ne-p"><br></p><h1 id="sxcNV"><span class="ne-text">23、</span><code class="ne-code"><span class="ne-text">http2</span></code><span class="ne-text">的新特性，多路复用原理以及用了什么算法？？</span></h1><p id="u7858ed12" class="ne-p"><br></p><p id="u84d3aee0" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671589581821-33f9a5fa-561a-494b-9273-40b28f748970.png" width="656.363622137338" id="u9f16eba2" class="ne-image"></p><p id="u49b3f4b0" class="ne-p"><br></p><p id="u8d03f59b" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671589530843-46fd7947-0cb9-4777-b311-57166a6f9808.png" width="778.1818013151819" id="ue2dc14a8" class="ne-image"></p><p id="u588348c9" class="ne-p"><br></p><p id="u837b0611" class="ne-p"><br></p><p id="ud597e94c" class="ne-p"><span class="ne-text"></span></p><h1 id="ORpLl"><span class="ne-text">24、设计一个按需加载的 webpack loader ,如何设计 ？</span></h1><p id="ufa818b99" class="ne-p"><span class="ne-text">我理解有点类似于</span><code class="ne-code"><span class="ne-text">AMD</span></code><span class="ne-text">的思路吧，即如何加载一个异步的js</span></p><p id="u99f2e3fc" class="ne-p"><br></p><h1 id="xpat3"><span class="ne-text">26、浏览器器强刷？- 设置了</span><code class="ne-code"><span class="ne-text">cache-control</span></code><span class="ne-text"> 为 </span><code class="ne-code"><span class="ne-text">no-cache</span></code></h1><p id="u338dfaf9" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671793223815-84d27f06-22ac-4376-b5d6-016bfb777e7b.png" width="778.4" id="u68e95491" class="ne-image"></p><p id="ua38c0518" class="ne-p"><span class="ne-text"></span></p><p id="ub94dad49" class="ne-p"><br></p><p id="u6a814c7b" class="ne-p"><br></p><p id="u09211d92" class="ne-p"><br></p><p id="u3bdb8fda" class="ne-p"><br></p><p id="u8d86cb7e" class="ne-p"><span class="ne-text"></span></p></div>`,body_lake:`<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><p data-lake-id="uc639ae40" id="uc639ae40"><br></p><h2 data-lake-id="XRITI" id="XRITI"><span data-lake-id="u89460c1a" id="u89460c1a">1、请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]</span></h2><p data-lake-id="u5bacb63b" id="u5bacb63b"><br></p><p data-lake-id="u3f099937" id="u3f099937"><strong><u><span data-lake-id="u1080d088" id="u1080d088">记住，补齐即可，然后再去掉</span></u></strong></p><p data-lake-id="u254e5cc0" id="u254e5cc0"><strong><u><span data-lake-id="uce97942c" id="uce97942c">​</span></u></strong><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%E8%AF%B7%E6%8A%8A%E4%BF%A9%E4%B8%AA%E6%95%B0%E7%BB%84%20%20%20%5BA1%2C%20A2%2C%20B1%2C%20B2%2C%20C1%2C%20C2%2C%20D1%2C%20D2%5D%20%E5%92%8C%20%5BA%2C%20B%2C%20C%2C%20D%5D%EF%BC%8C%5Cn%20*%20%E5%90%88%E5%B9%B6%E4%B8%BA%20%5BA1%2C%20A2%2C%20A%2C%20B1%2C%20B2%2C%20B%2C%20C1%2C%20C2%2C%20C%2C%20D1%2C%20D2%2C%20D%5D%5Cn%20*%20*%2F%5Cn%5Cnlet%20arr1%20%3D%20%5B'A1'%2C%20'A2'%2C%20'B1'%2C%20'B2'%2C%20'C1'%2C%20'C2'%2C%20'D1'%2C%20'D2'%5D%3B%5Cnlet%20arr2%20%3D%20%5B'A'%2C%20'B'%2C%20'C'%2C%20'D'%5D%5Cn%5Cn%2F%2F%20%E8%BF%99%E4%B8%AA%E6%80%9D%E8%B7%AF%E4%B8%8D%E9%94%99%5Cn%5Cnlet%20a2%20%3D%20arr2.map((item)%20%3D%3E%20%7B%5Cn%20%20return%20item%20%2B%203%5Cn%7D)%5Cn%5Cnfunction%20merge(arr1%2C%20arr2)%20%7B%5Cn%20%20let%20arr%20%3D%20%5B...arr1%2C%20...a2%5D%3B%5Cn%20%20arr%20%3D%20arr.sort()%3B%5Cn%20%20%2F%2F%20%E4%B8%8B%E9%9D%A2%E6%9D%A5%E4%B8%AA%E5%8F%8C%E9%87%8D%E5%BE%AA%E7%8E%AF%E5%B0%B1%E8%A1%8C%E4%BA%86%5Cn%20%20return%20arr%3B%5Cn%7D%5Cn%5Cnconsole.log(merge(arr1%2C%20arr2))%3B%5Cn%2F%2F%20%5B%5Cn%2F%2F%20%20%20%20%20'A1'%2C%20'A2'%2C%20'A3'%2C%5Cn%2F%2F%20%20%20%20%20'B1'%2C%20'B2'%2C%20'B3'%2C%5Cn%2F%2F%20%20%20%20%20'C1'%2C%20'C2'%2C%20'C3'%2C%5Cn%2F%2F%20%20%20%20%20'D1'%2C%20'D2'%2C%20'D3'%5Cn%2F%2F%20%5D%5Cn%5Cn%2F%2F%20%E9%81%8D%E5%8E%86todo%20%E5%9C%A8%E6%8A%8A%20%20X3%20%E6%8D%A2%E6%88%90%20X%20%E5%8D%B3%E5%8F%AF%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22OhSgI%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u83876247" id="u83876247"><span data-lake-id="ucca4796d" id="ucca4796d">\0</span></p><p data-lake-id="u52c88924" id="u52c88924"><span data-lake-id="ub0286c65" id="ub0286c65">一样，这里也可以实现一个</span><code data-lake-id="uf76e8f01" id="uf76e8f01"><span data-lake-id="ua475b542" id="ua475b542">fn(a,b)</span></code><span data-lake-id="ubdd29c79" id="ubdd29c79"> 只要比较前后两个变量</span><code data-lake-id="u19f8fac3" id="u19f8fac3"><span data-lake-id="ue6e5492a" id="ue6e5492a">a</span></code><span data-lake-id="u97d8656a" id="u97d8656a">、</span><code data-lake-id="u6b54ef58" id="u6b54ef58"><span data-lake-id="u689499f4" id="u689499f4">b</span></code><span data-lake-id="u31d4d074" id="u31d4d074">即可</span></p><h2 data-lake-id="yBdeS" id="yBdeS"><span data-lake-id="ubce09634" id="ubce09634">2、说一说</span><code data-lake-id="u46d8426a" id="u46d8426a"><span data-lake-id="u509f9c0a" id="u509f9c0a">css</span></code><span data-lake-id="ue42bb9ba" id="ue42bb9ba">与</span><code data-lake-id="ub0e513d6" id="ub0e513d6"><span data-lake-id="u0d987ca8" id="u0d987ca8">js</span></code><span data-lake-id="u555add55" id="u555add55">的压缩原理</span></h2><p data-lake-id="u4c169167" id="u4c169167"><span data-lake-id="ud3ac4f91" id="ud3ac4f91">1、js的压缩原理：</span></p><p data-lake-id="ueb681c36" id="ueb681c36" style="text-indent: 2em"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1655010106654-3cd1a4c7-55dd-44af-9b74-477309b37dd1.png%22%2C%22taskId%22%3A%22u882a16ce-cd24-4401-80bb-f5a014dbe46%22%2C%22clientId%22%3A%22ud7a0da2b-ab60-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A399.984375%2C%22height%22%3A122%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A52645%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A752%2C%22originHeight%22%3A230%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%221.%E5%B0%86CODE%E8%BD%AC%E6%8D%A2%E6%88%90AST%202%E5%B0%86AST%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%2C%20%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%B0%8F%E7%9A%84AST%20%E5%B0%86%E6%96%B0%E7%94%9F%E6%88%90%E7%9A%84AST%E5%86%8D%E8%BD%AC%E5%8C%96%E6%88%90CODE%203.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A50.961323%2C%22y%22%3A43.79129%2C%22width%22%3A301.761677%2C%22height%22%3A29.192500000000003%2C%22text%22%3A%221.%E5%B0%86CODE%E8%BD%AC%E6%8D%A2%E6%88%90AST%22%7D%2C%7B%22x%22%3A49.669003%2C%22y%22%3A107.16038%2C%22width%22%3A245.70431699999997%2C%22height%22%3A29.52797000000001%2C%22text%22%3A%222%E5%B0%86AST%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%2C%22%7D%2C%7B%22x%22%3A312.93515%2C%22y%22%3A107.81997%2C%22width%22%3A254.46744999999999%2C%22height%22%3A28.637690000000006%2C%22text%22%3A%22%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%B0%8F%E7%9A%84AST%22%7D%2C%7B%22x%22%3A93.34841%2C%22y%22%3A164.61133%2C%22width%22%3A379.01779%2C%22height%22%3A29.032420000000002%2C%22text%22%3A%22%E5%B0%86%E6%96%B0%E7%94%9F%E6%88%90%E7%9A%84AST%E5%86%8D%E8%BD%AC%E5%8C%96%E6%88%90CODE%22%7D%2C%7B%22x%22%3A50.65665%2C%22y%22%3A167.94359%2C%22width%22%3A26.625590000000003%2C%22height%22%3A24.09387000000001%2C%22text%22%3A%223.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2332332d%22%2C%22id%22%3A%22u6a719366%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u6c87d401" id="u6c87d401"><span data-lake-id="u375af9ea" id="u375af9ea">2、Tree-Shaking，主要还是针对顶层，</span></p><ul list="ue6aaa53d"><li fid="u190d42a2" data-lake-id="udadfd090" id="udadfd090"><code data-lake-id="u193327aa" id="u193327aa"><span data-lake-id="u91889c6c" id="u91889c6c" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">rollup</span></code><span data-lake-id="u8043999d" id="u8043999d" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">只处理函数和顶层的</span><code data-lake-id="ue2d62c36" id="ue2d62c36"><span data-lake-id="u21d02194" id="u21d02194" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">import/export</span></code><span data-lake-id="u6864e0bb" id="u6864e0bb" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">变量，不能把没用到的类的方法消除掉</span></li><li fid="u190d42a2" data-lake-id="u86c3be94" id="u86c3be94"><code data-lake-id="u9fff79ef" id="u9fff79ef"><span data-lake-id="u466727b0" id="u466727b0" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">javascript</span></code><span data-lake-id="uefc4e147" id="uefc4e147" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">动态语言的特性使得静态分析比较困难</span></li></ul><p data-lake-id="u19f5f22f" id="u19f5f22f"><br></p><p data-lake-id="ub0525928" id="ub0525928"><span data-lake-id="u5513c3d5" id="u5513c3d5">3、</span><code data-lake-id="u1c3cc213" id="u1c3cc213"><span data-lake-id="ud61c58a6" id="ud61c58a6">CSS</span></code><span data-lake-id="u578900ce" id="u578900ce"> 压缩比较简单，就是将多余的回车</span><code data-lake-id="u80863562" id="u80863562"><span data-lake-id="u46da740f" id="u46da740f">换行符</span></code><span data-lake-id="u5f8b132e" id="u5f8b132e">与</span><code data-lake-id="u1a28006a" id="u1a28006a"><span data-lake-id="udf8322ce" id="udf8322ce">注释</span></code><span data-lake-id="u1a4cd884" id="u1a4cd884"> 去掉</span></p><p data-lake-id="u7d54ed3b" id="u7d54ed3b"><span data-lake-id="u3b1eb825" id="u3b1eb825">​</span><br></p><h2 data-lake-id="AIJ6R" id="AIJ6R"><span data-lake-id="udc489fa3" id="udc489fa3">3、说说 webpack 的打包原理</span></h2><p data-lake-id="ud114395f" id="ud114395f"><br></p><h2 data-lake-id="WHBdf" id="WHBdf"><span data-lake-id="u3b8cdbd8" id="u3b8cdbd8">4、说说几种攻击手段，如</span><code data-lake-id="u9810e25f" id="u9810e25f"><span data-lake-id="u2fcb92f6" id="u2fcb92f6">xss</span></code><span data-lake-id="u4d9a6f33" id="u4d9a6f33">跨站脚本（Cross-site scripting）等</span></h2><p data-lake-id="uc0e3fbe9" id="uc0e3fbe9"><br></p><h1 data-lake-id="gUE3o" id="gUE3o" collapsed="true"><span data-lake-id="uc56ce538" id="uc56ce538">5、实现 classNames 库的能力</span></h1><p data-lake-id="u14d92006" id="u14d92006"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F*************************************************%5Cn%20*%20%E5%AE%9E%E7%8E%B0%20classNames%20%E5%BA%93%E7%9A%84%E8%83%BD%E5%8A%9B%5Cn%20*%5Cn%20*%20classNames('BFE'%2C%20'dev'%2C%20100)%5Cn%20*%20%2F%2F%20'BFE%20dev%20100'%5Cn%20*%5Cn%20*%20classNames(%5Cn%20*%20%20%20null%2C%20undefined%2C%20Symbol()%2C%201n%2C%20true%2C%20false%5Cn%20*%20)%5Cn%20*%20%2F%2F%20''%5Cn%20*%5Cn%20*%20const%20obj%20%3D%20new%20Map()%5Cn%20*%20obj.cool%20%3D%20'!'%5Cn%20*%5Cn%20*%20classNames(%7BBFE%3A%20%5B%5D%2C%20dev%3A%20true%2C%20is%3A%203%7D%2C%20obj)%5Cn%20*%20%2F%2F%20'BFE%20dev%20is%20cool'%5Cn%20*%5Cn%20*%20classNames(%5B'BFE'%2C%20%5B%7Bdev%3A%20true%7D%2C%20%5B'is'%2C%20%5Bobj%5D%5D%5D%5D)%5Cn%20*%20%2F%2F%20'BFE%20dev%20is%20cool'%5Cn%20************************************************%2F%5Cn%5Cn%5Cnfunction%20classNames(...args)%20%7B%5Cn%20%20%20%20let%20arr%20%3D%20%5B%5D%3B%5Cn%20%20%20%20for%20(let%20item%20of%20args)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E5%BF%85%E9%A1%BBif%2Felse%20if%20%2C%E4%B8%80%E4%B8%AA%E7%BB%8F%E9%AA%8C%E6%98%AF%E5%B0%BD%E9%87%8F%E8%BF%99%E4%B9%88%E5%86%99%EF%BC%8C%E5%88%AB%E5%88%86%E5%BC%80%EF%BC%8C%E4%B8%8D%E7%84%B6%E5%8F%AF%E8%83%BD%E4%BC%9A%E9%87%8D%E5%A4%8D%E5%91%BD%E4%B8%AD%5Cn%20%20%20%20%20%20%20%20if%20(typeof%20item%20%3D%3D%3D%20%5C%22string%5C%22%20%7C%7C%20typeof%20item%20%3D%3D%3D%20%5C%22number%5C%22)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20arr.push(item)%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(Array.isArray(item))%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E5%BD%BB%E5%BA%95%E6%89%93%E5%B9%B3%EF%BC%8C%E7%84%B6%E5%90%8E%E6%8A%8A%E5%AE%83%E6%94%BE%E5%88%B0args%E5%8F%82%E6%95%B0%E9%87%8C%E9%9D%A2%E5%8E%BB%5Cn%20%20%20%20%20%20%20%20%20%20%20%20item.flat(Infinity).forEach((it)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20args.push(it)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E8%BF%99%E9%87%8C%E9%9C%80%E8%A6%81%E8%BF%87%E6%BB%A4%E6%8E%89%20null%5Cn%20%20%20%20%20%20%20%20else%20if%20(typeof%20item%20%3D%3D%3D%20%5C%22object%5C%22%20%26%26%20item%20!%3D%3D%20null)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20Object.entries(item).forEach((%5Bk%2C%20v%5D)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20arr.push(k)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%5Cn%20%20%20%20return%20arr%3B%5Cn%5Cn%7D%5Cn%5Cn%5Cnconsole.log(%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20BigInt%20%E5%8F%AF%E4%BB%A5%E8%A1%A8%E7%A4%BA%E4%BB%BB%E6%84%8F%E5%A4%A7%E7%9A%84%E6%95%B4%E6%95%B0%E3%80%821n%E6%98%AF%E4%B8%80%E7%A7%8D%E8%A1%A8%E8%BE%BE%E6%96%B9%E5%BC%8F%EF%BC%8C%201n%20%3D%3D%201%20%E7%9B%B8%E7%AD%89%5Cn%20%20%20%20classNames(%5Cn%20%20%20%20%20%20%20%20null%2C%20undefined%2C%20Symbol()%2C%201n%2C%20true%2C%20false%5Cn%20%20%20%20)%20%7C%7C%20''%5Cn)%5Cn%5Cnconsole.log(%5Cn%20%20%20%20classNames('BFE'%2C%20'dev'%2C%20100)%5Cn)%5Cn%5Cn%5Cnconst%20obj%20%3D%20new%20Map()%5Cnobj.cool%20%3D%20'!'%5Cn%5Cn%2F%2F%20'BFE%20dev%20is%20cool'%5Cnconsole.log(%5Cn%20%20%20%20classNames(%7BBFE%3A%20%5B%5D%2C%20dev%3A%20true%2C%20is%3A%203%7D%2C%20obj)%5Cn)%5Cn%5Cnconsole.log(%5Cn%20%20%20%20classNames(%5B'BFE'%2C%20%5B%7Bdev%3A%20true%7D%2C%20%5B'is'%2C%20%5Bobj%5D%5D%5D%5D)%5Cn)%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B24%2C26%2C28%2C35%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22HK0ks%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ua517e2e2" id="ua517e2e2"><br></p><h1 data-lake-id="hCCOo" id="hCCOo"><span data-lake-id="u69f0d13d" id="u69f0d13d">6、SKU全排列问题</span></h1><p data-lake-id="ud7bfd0a7" id="ud7bfd0a7"><br></p><p data-lake-id="u17a64e95" id="u17a64e95"><span data-lake-id="ube3dc69b" id="ube3dc69b">典型的全排列问题，使用回溯算法，注意是三个参数 </span><code data-lake-id="u17340d11" id="u17340d11"><span data-lake-id="u13b08e3d" id="u13b08e3d"> (arr, track, index)</span></code></p><p data-lake-id="uc529897e" id="uc529897e"><span data-lake-id="u18fa48b3" id="u18fa48b3">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F***%5Cn%20*%20%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%5Cn%20*%20sku%E5%85%A8%E6%8E%92%E5%88%97%5Cn%20*%20*%2F%5Cnlet%20names%20%3D%20%5B%5C%22iPhone%5C%22%2C%20'iPhone%20xs'%5D%5Cnlet%20colors%20%3D%20%5B'%E9%BB%91%E8%89%B2'%2C%20'%E7%99%BD%E8%89%B2'%5D%5Cnlet%20storages%20%3D%20%5B'64g'%2C%20'256g'%5D%5Cn%5Cn%5Cnlet%20combine%20%3D%20function%20(...chunks)%20%7B%5Cn%20%20%20%20let%20res%20%3D%20%5B%5D%3B%5Cn%20%20%20%20%2F**%5Cn%20%20%20%20%20*%20%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0%5Cn%20%20%20%20%20*%20*%2F%5Cn%20%20%20%20const%20backtrack%20%3D%20(arr%2C%20track%2C%20index)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20let%20options%20%3D%20arr%5Bindex%5D%3B%5Cn%20%20%20%20%20%20%20%20if%20(track.length%20%3D%3D%3D%203)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20res.push(%5B...track%5D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20options.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%80%89%E6%8B%A9%5Cn%20%20%20%20%20%20%20%20%20%20%20%20track.push(options%5Bi%5D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20backtrack(chunks%2C%20track%2C%20index%20%2B%201)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%8F%96%E6%B6%88%E9%80%89%E6%8B%A9%5Cn%20%20%20%20%20%20%20%20%20%20%20%20track.pop()%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20backtrack(chunks%2C%20%5B%5D%2C%200)%5Cn%20%20%20%20return%20res%5Cn%7D%5Cn%5Cnconsole.log(combine(names%2C%20colors%2C%20storages))%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B23%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22EJIOP%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u8daf7a4d" id="u8daf7a4d"><span data-lake-id="ubf89746e" id="ubf89746e">​</span><br></p><h1 data-lake-id="RAxZF" id="RAxZF"><span data-lake-id="ud0c4f3be" id="ud0c4f3be">7、说说 CSRF 的原理及如何防范</span></h1><p data-lake-id="u292efd80" id="u292efd80"><span data-lake-id="u109e7c4b" id="u109e7c4b">参考：</span><a href="https://juejin.cn/post/7008171429845811207" data-lake-id="ub6dbb948" id="ub6dbb948"><span data-lake-id="u907ac038" id="u907ac038">CSRF详解 - 掘金</span></a></p><ul list="uaebdabfc"><li fid="u47615265" data-lake-id="ue69db99d" id="ue69db99d"><span data-lake-id="u37229444" id="u37229444">首先肯定是跨域访问，比如</span><code data-lake-id="u3b48ab81" id="u3b48ab81"><span data-lake-id="u0fbf2bdc" id="u0fbf2bdc">script/img/a/form</span></code><span data-lake-id="ub1ff9b37" id="ub1ff9b37">提交等</span></li><li fid="u47615265" data-lake-id="u81504f57" id="u81504f57"><span data-lake-id="u5f2b7645" id="u5f2b7645">不让</span><code data-lake-id="u51094510" id="u51094510"><span data-lake-id="ua68f68bd" id="ua68f68bd">第三方网站</span></code><span data-lake-id="uf8e67a3b" id="uf8e67a3b">直接访问</span></li></ul><p data-lake-id="u967dfff0" id="u967dfff0"><span data-lake-id="ucf4e0bac" id="ucf4e0bac">​</span><br></p><h1 data-lake-id="OvsiH" id="OvsiH"><span data-lake-id="u9c6dd023" id="u9c6dd023">8、说说</span><code data-lake-id="u120e15ab" id="u120e15ab"><span data-lake-id="u6a987f4d" id="u6a987f4d">Flex</span></code><span data-lake-id="u380229f9" id="u380229f9">布局的一些属性及细节</span></h1><p data-lake-id="ud13f5201" id="ud13f5201"><span data-lake-id="u952f9bce" id="u952f9bce">​</span><br></p><ul list="ud05898b3"><li fid="u0325ac03" data-lake-id="ud7db5568" id="ud7db5568"><span data-lake-id="ub734a5cd" id="ub734a5cd">flex-grow   属性  定义 子元素或者子容器 的放大比例，默认为 </span><code data-lake-id="ucccf2f5e" id="ucccf2f5e"><span data-lake-id="u44912ed6" id="u44912ed6">0</span></code><span data-lake-id="ud3849a58" id="ud3849a58"> ，即 如果存在剩余空间，也不放大。</span></li><li fid="u0325ac03" data-lake-id="u0769f8fb" id="u0769f8fb"><span data-lake-id="u72149a93" id="u72149a93">flex-shrink   属性  定义了项目的缩小比例，默认为</span><code data-lake-id="ufd58d67f" id="ufd58d67f"><span data-lake-id="u40370f35" id="u40370f35">1</span></code><span data-lake-id="uf190d50c" id="uf190d50c">，即如果空间不足，该项目将缩小。</span></li><li fid="u0325ac03" data-lake-id="ueea6b95e" id="ueea6b95e"><code data-lake-id="u7eee8392" id="u7eee8392"><span data-lake-id="u7d5a9b41" id="u7d5a9b41">flex: 1 </span></code><span data-lake-id="u0203983d" id="u0203983d">默认值是什么 ？ </span></li></ul><p data-lake-id="uac87c668" id="uac87c668"><span data-lake-id="u6204e256" id="u6204e256">​</span><br></p><p data-lake-id="u4d5f3005" id="u4d5f3005"><span data-lake-id="u81bdd4d3" id="u81bdd4d3">第三个参数，即 </span><code data-lake-id="ud4a122a5" id="ud4a122a5"><span style="color: #E8323C"><u><span data-lake-id="u51811df2" id="u51811df2">项目本身的大小</span></u></span></code><span style="color: #E8323C"><u><span data-lake-id="u1b654956" id="u1b654956"> </span></u></span></p><p data-lake-id="u3fe37be4" id="u3fe37be4"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671259398441-7c3600a0-a6be-4103-bb5d-1642e9bb29bf.png%22%2C%22taskId%22%3A%22u3f496446-b3db-4a07-b074-a00043d22f4%22%2C%22clientId%22%3A%22u2f8a759e-27f4-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A726.3636206201289%2C%22height%22%3A268%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A145478%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1598%2C%22originHeight%22%3A590%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22FLEX%3A1%3BFLEX%3A11AUTO%3B%20%E8%BF%99%E6%98%AF%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%2C%E8%AF%A6%E8%A7%81MDN%2C%E5%AE%83%E8%BF%98%E6%9C%89%E5%8F%A6%E5%A4%96%E4%B8%A4%E7%A7%8D%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%2C%E5%88%86%E5%88%AB%E6%98%AFINITIAL(01AUTO)%E5%92%8CNONE(00AUTO)%20%2C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-GROW%E5%AE%9A%E4%B9%89%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%94%BE%E5%A4%A7%E6%AF%94%E4%BE%8B%2C%E9%BB%98%E8%AE%A4%E4%B8%BA0%2C%E5%8D%B3%E5%A6%82%E6%9E%9C%E5%AD%98%E5%9C%A8%E5%89%A9%E4%BD%99%E7%A9%BA%E9%97%B4%2C%E4%B9%9F%E4%B8%8D%E6%94%BE%E5%A4%A7%20%2C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-SHRINK%E5%AE%9A%E4%B9%89%E4%BA%86%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%2C%E9%BB%98%E8%AE%A4%E4%B8%BA1%2C%E5%8D%B3%E5%A6%82%E6%9E%9C%E7%A9%BA%E9%97%B4%E4%B8%8D%E8%B6%B3%2C%E8%AF%A5%E9%A1%B9%E7%9B%AE%E5%B0%86%E7%BC%A9.%20%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-BASIS%E7%BB%99%E4%B8%8A%E9%9D%A2%E4%B8%A4%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%88%86%E9%85%8D%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%E4%B9%8B%E5%89%8D%2C%E8%AE%A1%E7%AE%97%E9%A1%B9%E7%9B%AE%E6%98%AF%E5%90%A6%E6%9C%89%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%2C%E9%BB%98%E8%AE%A4%20%E5%80%BC%E4%B8%BAAUTO%2C%E5%8D%B3%E9%A1%B9%E7%9B%AE%E6%9C%AC%E8%BA%AB%E7%9A%84%E5%A4%A7%E5%B0%8F%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A123.64692%2C%22y%22%3A47.602596%2C%22width%22%3A378.24911%2C%22height%22%3A38.355290000000004%2C%22text%22%3A%22FLEX%3A1%3BFLEX%3A11AUTO%3B%22%7D%2C%7B%22x%22%3A87.4813%2C%22y%22%3A143.29091%2C%22width%22%3A1343.7592000000002%2C%22height%22%3A37.825590000000005%2C%22text%22%3A%22%E8%BF%99%E6%98%AF%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%2C%E8%AF%A6%E8%A7%81MDN%2C%E5%AE%83%E8%BF%98%E6%9C%89%E5%8F%A6%E5%A4%96%E4%B8%A4%E7%A7%8D%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%2C%E5%88%86%E5%88%AB%E6%98%AFINITIAL(01AUTO)%E5%92%8CNONE(00AUTO)%22%7D%2C%7B%22x%22%3A113.74047%2C%22y%22%3A235.44934%2C%22width%22%3A1317.39253%2C%22height%22%3A37.53026%2C%22text%22%3A%22%2C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-GROW%E5%AE%9A%E4%B9%89%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%94%BE%E5%A4%A7%E6%AF%94%E4%BE%8B%2C%E9%BB%98%E8%AE%A4%E4%B8%BA0%2C%E5%8D%B3%E5%A6%82%E6%9E%9C%E5%AD%98%E5%9C%A8%E5%89%A9%E4%BD%99%E7%A9%BA%E9%97%B4%2C%E4%B9%9F%E4%B8%8D%E6%94%BE%E5%A4%A7%22%7D%2C%7B%22x%22%3A115.33157%2C%22y%22%3A284.16473%2C%22width%22%3A1329.29933%2C%22height%22%3A39.02999999999997%2C%22text%22%3A%22%2C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-SHRINK%E5%AE%9A%E4%B9%89%E4%BA%86%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%2C%E9%BB%98%E8%AE%A4%E4%B8%BA1%2C%E5%8D%B3%E5%A6%82%E6%9E%9C%E7%A9%BA%E9%97%B4%E4%B8%8D%E8%B6%B3%2C%E8%AF%A5%E9%A1%B9%E7%9B%AE%E5%B0%86%E7%BC%A9.%22%7D%2C%7B%22x%22%3A119.51061%2C%22y%22%3A391.45447%2C%22width%22%3A1324.72329%2C%22height%22%3A40.17424999999997%2C%22text%22%3A%22%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-BASIS%E7%BB%99%E4%B8%8A%E9%9D%A2%E4%B8%A4%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%88%86%E9%85%8D%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%E4%B9%8B%E5%89%8D%2C%E8%AE%A1%E7%AE%97%E9%A1%B9%E7%9B%AE%E6%98%AF%E5%90%A6%E6%9C%89%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%2C%E9%BB%98%E8%AE%A4%22%7D%2C%7B%22x%22%3A118.68481%2C%22y%22%3A440.76703%2C%22width%22%3A416.35865%2C%22height%22%3A40.110690000000034%2C%22text%22%3A%22%E5%80%BC%E4%B8%BAAUTO%2C%E5%8D%B3%E9%A1%B9%E7%9B%AE%E6%9C%AC%E8%BA%AB%E7%9A%84%E5%A4%A7%E5%B0%8F%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23c4c0c0%22%2C%22id%22%3A%22ud915898b%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><h1 data-lake-id="qQz6v" id="qQz6v"><span data-lake-id="u9fac917c" id="u9fac917c">9、js中的new的实现逻辑</span></h1><p data-lake-id="u7429bfdc" id="u7429bfdc"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671259489678-ceff838c-e893-46b1-815a-00d68abe11a0.png%22%2C%22taskId%22%3A%22u07b09d23-6840-45be-824c-6562a51a9b2%22%2C%22clientId%22%3A%22u2f8a759e-27f4-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A733.636347735224%2C%22height%22%3A316%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A106783%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1614%2C%22originHeight%22%3A696%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E5%86%8D%E6%9D%A5%E6%9C%89%E5%BC%9F-%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%2C%E4%B9%9F%E6%98%AF%E6%9C%80%E5%90%8E%E4%B8%80%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%3A%20%2F%2F%20%E7%AC%AC%E4%BA%8C%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%20FUNCTION%20OBJECTFACTORY()%20%7B%20%20VAR%20OBJ%20%E4%B8%89%20NEW%20OBJECT()%2C%20CONSTRUCTOR%20-%20%5B%5D.SHIFT.CALL(ARGUMENTS)%3B%20CONSTRUCTOR.PROTOTYPE%3B%20OBJ...PROTO%20%20VAR%20RET%20-%20CONSTRUCTOR.APPLY(OBJ%2C%20A%20BJ%2CARGUMENTS)%3B%20RETURN%20TYPEOF%20RET%20---%20'OBJECT'%20%3F%20RET%20%3A%20OBJ%3B%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A198.85033%2C%22y%22%3A31.722397%2C%22width%22%3A542.11897%2C%22height%22%3A23.760399%2C%22text%22%3A%22%E5%86%8D%E6%9D%A5%E6%9C%89%E5%BC%9F-%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%2C%E4%B9%9F%E6%98%AF%E6%9C%80%E5%90%8E%E4%B8%80%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%3A%22%7D%2C%7B%22x%22%3A236.70915%2C%22y%22%3A129.61676%2C%22width%22%3A181.21797%2C%22height%22%3A26.81219999999999%2C%22text%22%3A%22%2F%2F%20%E7%AC%AC%E4%BA%8C%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%22%7D%2C%7B%22x%22%3A230.56453%2C%22y%22%3A163.36821%2C%22width%22%3A378.78013999999996%2C%22height%22%3A33.10830999999999%2C%22text%22%3A%22FUNCTION%20OBJECTFACTORY()%20%7B%22%7D%2C%7B%22x%22%3A286.1318%2C%22y%22%3A234.45186%2C%22width%22%3A332.70129999999995%2C%22height%22%3A30.043679999999995%2C%22text%22%3A%22%20VAR%20OBJ%20%E4%B8%89%20NEW%20OBJECT()%2C%22%7D%2C%7B%22x%22%3A284.75345%2C%22y%22%3A301.74362%2C%22width%22%3A565.51999%2C%22height%22%3A32.48019999999997%2C%22text%22%3A%22CONSTRUCTOR%20-%20%5B%5D.SHIFT.CALL(ARGUMENTS)%3B%22%7D%2C%7B%22x%22%3A519.31824%2C%22y%22%3A374.6357%2C%22width%22%3A317.9932600000001%2C%22height%22%3A26.63346999999999%2C%22text%22%3A%22CONSTRUCTOR.PROTOTYPE%3B%22%7D%2C%7B%22x%22%3A284.96765%2C%22y%22%3A375.3759%2C%22width%22%3A166.35694999999998%2C%22height%22%3A23.833730000000003%2C%22text%22%3A%22OBJ...PROTO%22%7D%2C%7B%22x%22%3A284.66702%2C%22y%22%3A443.5246%2C%22width%22%3A482.0288800000001%2C%22height%22%3A32.02769999999998%2C%22text%22%3A%22%20VAR%20RET%20-%20CONSTRUCTOR.APPLY(OBJ%2C%20A%22%7D%2C%7B%22x%22%3A712.6017%2C%22y%22%3A444.18362%2C%22width%22%3A211.3327999999999%2C%22height%22%3A28.973379999999963%2C%22text%22%3A%22BJ%2CARGUMENTS)%3B%22%7D%2C%7B%22x%22%3A288.14233%2C%22y%22%3A514.7592%2C%22width%22%3A621.99007%2C%22height%22%3A32.29370000000006%2C%22text%22%3A%22RETURN%20TYPEOF%20RET%20---%20'OBJECT'%20%3F%20RET%20%3A%20OBJ%3B%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2311151a%22%2C%22id%22%3A%22u6ed89974%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u0289ed3d" id="u0289ed3d"><br></p><p data-lake-id="u217a888e" id="u217a888e"><span data-lake-id="ua81c3639" id="ua81c3639">这一版更好理解：</span></p><p data-lake-id="u332db18e" id="u332db18e"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671259565612-49bd4a7f-d35e-4c23-aeae-80a51d30e438.png%22%2C%22taskId%22%3A%22u963a01b9-e15b-41c2-b9f4-92ef3118933%22%2C%22clientId%22%3A%22u2f8a759e-27f4-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A741.818165739706%2C%22height%22%3A254%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A149733%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1632%2C%22originHeight%22%3A558%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%2F%E5%9B%A0%E4%B8%BANEW%E6%98%AF%E5%85%B3%E9%94%AE%E5%AD%97%2C%E6%88%91%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E5%BC%8F%E6%9D%A5%E5%AE%9E%E7%8E%B0%2C%E5%8F%AF%E4%BB%A5%E5%B0%86%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%92%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%E4%BC%A0%E5%85%A5%20FUNCTION%20MYNEW(FN%2C....ARGS)%7B%20%2F1.%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%A9%BA%E5%AF%B9%E8%B1%A1%2C%E5%B9%B6%E5%B0%86%E5%AF%B9%E8%B1%A1%E7%9A%84_PROTO_%E6%8C%87%E5%90%91%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84PROTOTOTYPE%E8%BF%99%E9%87%8C%E6%89%8B%20%E8%BF%99%E9%87%8C%E6%88%91%E4%B8%A4%E6%AD%A5%E4%B8%80%E8%B5%B7%E5%81%9A%E4%BA%86%20CONST%20OBIECT.CREATEATE(FN.PROTOTVPE)%3B%20%2F2.%E5%B0%86%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84THIS%E6%8C%87%E5%90%91OBJ%2C%E6%89%A7%E8%A1%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BB%A3%E7%A0%81%2C%E8%8E%B7%E5%8F%96%E8%BF%94%E5%9B%9E%E5%80%BC%20CONST%20RES-FN.APPLY(OBJ%2CARQS)%3B%20%2F%2F3.%E5%88%A4%E6%96%AD%E8%BF%94%E5%9B%9E%E5%80%BC%E7%B1%BB%E5%9E%8B%20RETURN%20RES%20INSTANCEOF%20OBJECT%20%3FRES%3AOBJ%20%E5%AD%90%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A242.72322%2C%22y%22%3A88.75177%2C%22width%22%3A1056.19898%2C%22height%22%3A35.43856000000001%2C%22text%22%3A%22%2F%E5%9B%A0%E4%B8%BANEW%E6%98%AF%E5%85%B3%E9%94%AE%E5%AD%97%2C%E6%88%91%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E5%BC%8F%E6%9D%A5%E5%AE%9E%E7%8E%B0%2C%E5%8F%AF%E4%BB%A5%E5%B0%86%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%92%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%E4%BC%A0%E5%85%A5%22%7D%2C%7B%22x%22%3A263.81973%2C%22y%22%3A134.36742%2C%22width%22%3A453.98440999999997%2C%22height%22%3A30.629649999999998%2C%22text%22%3A%22FUNCTION%20MYNEW(FN%2C....ARGS)%7B%22%7D%2C%7B%22x%22%3A309.39087%2C%22y%22%3A168.36322%2C%22width%22%3A1001.10313%2C%22height%22%3A45.20317%2C%22text%22%3A%22%2F1.%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%A9%BA%E5%AF%B9%E8%B1%A1%2C%E5%B9%B6%E5%B0%86%E5%AF%B9%E8%B1%A1%E7%9A%84_PROTO_%E6%8C%87%E5%90%91%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84PROTOTOTYPE%E8%BF%99%E9%87%8C%E6%89%8B%22%7D%2C%7B%22x%22%3A1251.6692%2C%22y%22%3A174.924%2C%22width%22%3A258.87189999999987%2C%22height%22%3A31.47032999999999%2C%22text%22%3A%22%E8%BF%99%E9%87%8C%E6%88%91%E4%B8%A4%E6%AD%A5%E4%B8%80%E8%B5%B7%E5%81%9A%E4%BA%86%22%7D%2C%7B%22x%22%3A311.7826%2C%22y%22%3A219.21971%2C%22width%22%3A632.8881%2C%22height%22%3A33.88115000000002%2C%22text%22%3A%22CONST%20OBIECT.CREATEATE(FN.PROTOTVPE)%3B%22%7D%2C%7B%22x%22%3A310.60342%2C%22y%22%3A257.19986%2C%22width%22%3A850.6016799999999%2C%22height%22%3A34.21301%2C%22text%22%3A%22%2F2.%E5%B0%86%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84THIS%E6%8C%87%E5%90%91OBJ%2C%E6%89%A7%E8%A1%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BB%A3%E7%A0%81%2C%E8%8E%B7%E5%8F%96%E8%BF%94%E5%9B%9E%E5%80%BC%22%7D%2C%7B%22x%22%3A311.4999%2C%22y%22%3A301.31836%2C%22width%22%3A486.37546999999995%2C%22height%22%3A37.89856000000003%2C%22text%22%3A%22CONST%20RES-FN.APPLY(OBJ%2CARQS)%3B%22%7D%2C%7B%22x%22%3A311.12146%2C%22y%22%3A341.96597%2C%22width%22%3A264.24810999999994%2C%22height%22%3A30.850029999999947%2C%22text%22%3A%22%2F%2F3.%E5%88%A4%E6%96%AD%E8%BF%94%E5%9B%9E%E5%80%BC%E7%B1%BB%E5%9E%8B%22%7D%2C%7B%22x%22%3A319.1335%2C%22y%22%3A387.24054%2C%22width%22%3A612.96556%2C%22height%22%3A32.66705999999999%2C%22text%22%3A%22RETURN%20RES%20INSTANCEOF%20OBJECT%20%3FRES%3AOBJ%22%7D%2C%7B%22x%22%3A258.19226%2C%22y%22%3A425.64713%2C%22width%22%3A22.31311000000005%2C%22height%22%3A35.05336999999997%2C%22text%22%3A%22%E5%AD%90%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23bbbabd%22%2C%22id%22%3A%22ucc6b2119%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u1fa59948" id="u1fa59948"><br></p><p data-lake-id="u5d849e6b" id="u5d849e6b"><span data-lake-id="u96da4f73" id="u96da4f73">简版：记住这个就好了！！！</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20myNew(fn%2C...args)%20%7B%5Cn%20%20%20%20const%20obj%20%3D%20Object.create(fn.prototype)%3B%5Cn%20%20%20%20const%20res%20%3D%20fn.apply(obj%2Cargs)%3B%5Cn%20%20%20%20return%20res%20instanceof%20Object%20%3F%20res%20%3A%20obj%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22v69tY%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u7aa9a233" id="u7aa9a233"><br></p><p data-lake-id="u5881929d" id="u5881929d"><br></p><p data-lake-id="ua3cb7c1b" id="ua3cb7c1b"><br></p><h1 data-lake-id="eSI0F" id="eSI0F"><span data-lake-id="uc4fb9def" id="uc4fb9def">10、vue中，computed 与 watch 的区别</span></h1><ul list="ueaa33457"><li fid="ub0cf8776" data-lake-id="u8a7ffe89" id="u8a7ffe89"><code data-lake-id="ufb9038e6" id="ufb9038e6"><span data-lake-id="ue7f35539" id="ue7f35539">computed</span></code><span data-lake-id="u59468836" id="u59468836">只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。 </span></li><li fid="ub0cf8776" data-lake-id="u6b33e3e8" id="u6b33e3e8"><code data-lake-id="u26201130" id="u26201130"><span data-lake-id="u9176be8d" id="u9176be8d">watch</span></code><span data-lake-id="u1f5a140e" id="u1f5a140e">每次都需要执行函数。 </span><code data-lake-id="ue2e72fcf" id="ue2e72fcf"><span data-lake-id="ueaec98fd" id="ueaec98fd">watch</span></code><span data-lake-id="u2c790c69" id="u2c790c69">更适用于数据变化时的异步操作。</span></li></ul><p data-lake-id="ub913245b" id="ub913245b"><br></p><h1 data-lake-id="Z9ws0" id="Z9ws0"><span data-lake-id="u60cb6735" id="u60cb6735">11、vue中，是如何做依赖收集的，收集的是那些部分内容</span></h1><p data-lake-id="u54d4ae79" id="u54d4ae79"><br></p><h1 data-lake-id="KXKGr" id="KXKGr"><span data-lake-id="uaf0c0e0c" id="uaf0c0e0c">12、说说react18  的并发？</span></h1><p data-lake-id="u82f40463" id="u82f40463"><br></p><h1 data-lake-id="RSL4U" id="RSL4U"><span data-lake-id="u9f2d35c0" id="u9f2d35c0">13、低代码如何实现？</span></h1><p data-lake-id="u23b2ae5a" id="u23b2ae5a"><br></p><h1 data-lake-id="C3XZD" id="C3XZD"><span data-lake-id="ud2f76f4e" id="ud2f76f4e">14、js在数据类型的存储区别是什么？</span></h1><p data-lake-id="u51271aec" id="u51271aec"><br></p><h1 data-lake-id="Z2Ru2" id="Z2Ru2"><span data-lake-id="ufd178b64" id="ufd178b64">15、es5中，继承是如何实现的？</span></h1><p data-lake-id="u7daa849d" id="u7daa849d"><br></p><h1 data-lake-id="NCWPE" id="NCWPE"><span data-lake-id="ubebce39f" id="ubebce39f">16、聊一聊事件循环？</span></h1><p data-lake-id="ubf4336f7" id="ubf4336f7"><br></p><h1 data-lake-id="OrW2D" id="OrW2D"><span data-lake-id="uad154310" id="uad154310">17、class中箭头函数与普通函数的 </span><code data-lake-id="u7b271ff5" id="u7b271ff5"><span data-lake-id="uffe801a0" id="uffe801a0">this</span></code><span data-lake-id="u5ecffeb4" id="u5ecffeb4"> 指向问题</span></h1><p data-lake-id="uaddc0428" id="uaddc0428"><br></p><p data-lake-id="uf612a905" id="uf612a905"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671145613734-927834d4-050e-4264-bc03-b8975c20a35c.png%22%2C%22taskId%22%3A%22uf8135b46-a4b6-4828-94ae-1b7e920c804%22%2C%22clientId%22%3A%22u71d7a380-b126-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A715.3333333333334%2C%22height%22%3A399%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A237885%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2146%2C%22originHeight%22%3A1196%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22ANIMALL%20CLASS%20CONSTRUCTOR()%20(%20THIS.NAME%20%2F%2F%20%3A%3A%3A%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%20SPEAK()%20%3A%3A%3A%E5%BD%93%E7%84%B6%2CTHIS%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%20'SPEAK%3A'%2CTHIS)%20CONSOLE.LOG(%20%20CONSOLE.LOG(THIS.NAME)%20%E5%AD%90%20%2F%3A%3A%3A%3A%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%20EAT%20%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%E6%8C%82%E5%9C%A8%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8A%20%3A%3A%3A%E5%BD%93%E7%84%B6%2CTHIS%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%20CONSOLE.LOG%20'EAT%3A'%2CTHIS)%20.LOG%20THIS.NAME)%20CONSOLE%20%20ANIMAL()%3B%20%20CONST%20N%20%E4%B8%89%20NEW%20A%20N.SPEAK()%3B%20N.EAT()%3B%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A205.69641%2C%22y%22%3A54.241276%2C%22width%22%3A141.17105%2C%22height%22%3A30.559123999999997%2C%22text%22%3A%22ANIMALL%22%7D%2C%7B%22x%22%3A87.46791%2C%22y%22%3A56.711536%2C%22width%22%3A97.88659%2C%22height%22%3A28.603534000000003%2C%22text%22%3A%22CLASS%22%7D%2C%7B%22x%22%3A167.00735%2C%22y%22%3A109.15001%2C%22width%22%3A301.03278%2C%22height%22%3A34.371930000000006%2C%22text%22%3A%22CONSTRUCTOR()%20(%22%7D%2C%7B%22x%22%3A246.93396%2C%22y%22%3A163.36012%2C%22width%22%3A184.13864%2C%22height%22%3A31.49114%2C%22text%22%3A%22THIS.NAME%22%7D%2C%7B%22x%22%3A169.30669%2C%22y%22%3A263.2847%2C%22width%22%3A330.62601%2C%22height%22%3A40.26544000000001%2C%22text%22%3A%22%2F%2F%20%3A%3A%3A%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%22%7D%2C%7B%22x%22%3A167.70662%2C%22y%22%3A324.78162%2C%22width%22%3A159.33916%2C%22height%22%3A32.31051000000002%2C%22text%22%3A%22SPEAK()%22%7D%2C%7B%22x%22%3A251.7366%2C%22y%22%3A376.19034%2C%22width%22%3A537.5197000000001%2C%22height%22%3A41.97714000000002%2C%22text%22%3A%22%3A%3A%3A%E5%BD%93%E7%84%B6%2CTHIS%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%22%7D%2C%7B%22x%22%3A501.7171%2C%22y%22%3A432.29474%2C%22width%22%3A259.5654%2C%22height%22%3A35.58121%2C%22text%22%3A%22'SPEAK%3A'%2CTHIS)%22%7D%2C%7B%22x%22%3A245.13051%2C%22y%22%3A434.59354%2C%22width%22%3A229.43684%2C%22height%22%3A31.79717999999997%2C%22text%22%3A%22CONSOLE.LOG(%22%7D%2C%7B%22x%22%3A243.05016%2C%22y%22%3A484.63763%2C%22width%22%3A429.59524%2C%22height%22%3A37.548069999999996%2C%22text%22%3A%22%20CONSOLE.LOG(THIS.NAME)%22%7D%2C%7B%22x%22%3A161.43106%2C%22y%22%3A536.8678%2C%22width%22%3A23.14989%2C%22height%22%3A41.17975000000001%2C%22text%22%3A%22%E5%AD%90%22%7D%2C%7B%22x%22%3A197.58922%2C%22y%22%3A592.3662%2C%22width%22%3A325.35178%2C%22height%22%3A35.89136999999994%2C%22text%22%3A%22%2F%3A%3A%3A%3A%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%22%7D%2C%7B%22x%22%3A164.97969%2C%22y%22%3A652.40625%2C%22width%22%3A58.74616%2C%22height%22%3A26.60164999999995%2C%22text%22%3A%22EAT%22%7D%2C%7B%22x%22%3A952.61694%2C%22y%22%3A688.79407%2C%22width%22%3A1105.8469600000003%2C%22height%22%3A72.71523000000002%2C%22text%22%3A%22%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%E6%8C%82%E5%9C%A8%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8A%22%7D%2C%7B%22x%22%3A337.1129%2C%22y%22%3A699.09%2C%22width%22%3A454.30762999999996%2C%22height%22%3A38.374000000000024%2C%22text%22%3A%22%3A%3A%3A%E5%BD%93%E7%84%B6%2CTHIS%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%22%7D%2C%7B%22x%22%3A243.91882%2C%22y%22%3A756.61414%2C%22width%22%3A225.76804%2C%22height%22%3A33.922860000000014%2C%22text%22%3A%22CONSOLE.LOG%22%7D%2C%7B%22x%22%3A495.31418%2C%22y%22%3A757.4715%2C%22width%22%3A224.80752%2C%22height%22%3A31.24816999999996%2C%22text%22%3A%22'EAT%3A'%2CTHIS)%22%7D%2C%7B%22x%22%3A391.96814%2C%22y%22%3A810.8877%2C%22width%22%3A77.30617999999998%2C%22height%22%3A32.73900000000003%2C%22text%22%3A%22.LOG%22%7D%2C%7B%22x%22%3A485.33566%2C%22y%22%3A811.6257%2C%22width%22%3A193.19558999999998%2C%22height%22%3A30.179539999999974%2C%22text%22%3A%22THIS.NAME)%22%7D%2C%7B%22x%22%3A247.06123%2C%22y%22%3A812.4609%2C%22width%22%3A128.49278999999999%2C%22height%22%3A28.98996999999997%2C%22text%22%3A%22CONSOLE%22%7D%2C%7B%22x%22%3A354.5174%2C%22y%22%3A970.86694%2C%22width%22%3A189.60736000000003%2C%22height%22%3A36.08502999999996%2C%22text%22%3A%22%20ANIMAL()%3B%22%7D%2C%7B%22x%22%3A83.881%2C%22y%22%3A973.97266%2C%22width%22%3A287.84306000000004%2C%22height%22%3A32.02333999999996%2C%22text%22%3A%22%20CONST%20N%20%E4%B8%89%20NEW%20A%22%7D%2C%7B%22x%22%3A83.162865%2C%22y%22%3A1025.9264%2C%22width%22%3A187.500495%2C%22height%22%3A33.372299999999996%2C%22text%22%3A%22N.SPEAK()%3B%22%7D%2C%7B%22x%22%3A82.2642%2C%22y%22%3A1082.3772%2C%22width%22%3A154.18185999999997%2C%22height%22%3A30.21460000000002%2C%22text%22%3A%22N.EAT()%3B%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231f1d1d%22%2C%22id%22%3A%22u0bfdccc0%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><blockquote data-lake-id="u28b2084f" id="u28b2084f"><p data-lake-id="u432d139f" id="u432d139f"><span data-lake-id="u7046dca2" id="u7046dca2" style="color: rgb(205, 23, 33); background-color: rgb(235, 204, 5)">上面的描述反了吧？</span></p></blockquote><p data-lake-id="ubcc6ec8f" id="ubcc6ec8f"><span data-lake-id="u63044997" id="u63044997" style="color: rgb(205, 23, 33)">​</span><br></p><p data-lake-id="u2f0c6252" id="u2f0c6252"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671145364400-e0dd3a5e-4368-458c-b7c5-34c2f3b18b64.png%22%2C%22taskId%22%3A%22u947be352-319d-4345-b8c3-34e582c71ce%22%2C%22clientId%22%3A%22u71d7a380-b126-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A612.6666666666666%2C%22height%22%3A117%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A113454%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1838%2C%22originHeight%22%3A350%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%2F%20B%20%2F%20EAT%3AFJ%20I%20SPEAK%3AANIMAL%20INAME%3A%20CAT'%20%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9B%B4%E6%8E%A5%E6%8C%82%E5%9C%A8%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%E4%B8%8A%20EAT%3A()%3E%3E%7B....)%20NAME%3A%20%5C%22CAT%5C%22%20OBJECT%20%5B%5BPROTYPE%5D%5D%5D%20CLASS%20ANIMAL%20CONSTRUCTOR%20%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%8C%82%E5%9C%A8%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8A%20SPEAK%3AF%20SPEAK()%20LLPROTOTYPELL%3A%20%20%20%20%20%20%20%20%20PROTYPELL%3A%20%20OBJECT%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A130.2198%2C%22y%22%3A34.0589%2C%22width%22%3A81.16062%2C%22height%22%3A24.86394%2C%22text%22%3A%22%2F%20B%20%2F%22%7D%2C%7B%22x%22%3A539.099%2C%22y%22%3A74.6687%2C%22width%22%3A138.6633999999999%2C%22height%22%3A26.255296%2C%22text%22%3A%22EAT%3AFJ%20I%22%7D%2C%7B%22x%22%3A113.57378%2C%22y%22%3A71.40505%2C%22width%22%3A308.10896%2C%22height%22%3A27.6892%2C%22text%22%3A%22SPEAK%3AANIMAL%20INAME%3A%22%7D%2C%7B%22x%22%3A440.50958%2C%22y%22%3A74.40266%2C%22width%22%3A67.85888999999997%2C%22height%22%3A20.79764%2C%22text%22%3A%22CAT'%22%7D%2C%7B%22x%22%3A715.4936%2C%22y%22%3A83.42246%2C%22width%22%3A838.4299000000001%2C%22height%22%3A66.07391999999999%2C%22text%22%3A%22%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9B%B4%E6%8E%A5%E6%8C%82%E5%9C%A8%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%E4%B8%8A%22%7D%2C%7B%22x%22%3A257.45825%2C%22y%22%3A105.60413%2C%22width%22%3A202.74674999999996%2C%22height%22%3A25.772520000000014%2C%22text%22%3A%22EAT%3A()%3E%3E%7B....)%22%7D%2C%7B%22x%22%3A260.03848%2C%22y%22%3A138.16971%2C%22width%22%3A154.20965999999999%2C%22height%22%3A24.731989999999996%2C%22text%22%3A%22NAME%3A%20%5C%22CAT%5C%22%22%7D%2C%7B%22x%22%3A475.72815%2C%22y%22%3A169.26047%2C%22width%22%3A90.83245%2C%22height%22%3A25.209429999999998%2C%22text%22%3A%22OBJECT%22%7D%2C%7B%22x%22%3A275.54922%2C%22y%22%3A170.36716%2C%22width%22%3A166.32712000000004%2C%22height%22%3A25.244659999999982%2C%22text%22%3A%22%5B%5BPROTYPE%5D%5D%5D%22%7D%2C%7B%22x%22%3A475.23755%2C%22y%22%3A202.88942%2C%22width%22%3A172.19365%2C%22height%22%3A22.9846%2C%22text%22%3A%22CLASS%20ANIMAL%22%7D%2C%7B%22x%22%3A281.52823%2C%22y%22%3A205.47731%2C%22width%22%3A163.54206999999997%2C%22height%22%3A20.244709999999998%2C%22text%22%3A%22CONSTRUCTOR%22%7D%2C%7B%22x%22%3A764.03705%2C%22y%22%3A218.2901%2C%22width%22%3A646.31685%2C%22height%22%3A67.49457000000001%2C%22text%22%3A%22%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%8C%82%E5%9C%A8%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8A%22%7D%2C%7B%22x%22%3A283.46536%2C%22y%22%3A234.67043%2C%22width%22%3A230.13730000000004%2C%22height%22%3A30.79203000000001%2C%22text%22%3A%22SPEAK%3AF%20SPEAK()%22%7D%2C%7B%22x%22%3A287.8144%2C%22y%22%3A265.89145%2C%22width%22%3A301.49750000000006%2C%22height%22%3A27.240169999999978%2C%22text%22%3A%22LLPROTOTYPELL%3A%20%20%20%20%20%20%20%20%20PROTYPELL%3A%20%20OBJECT%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%235a7a86%22%2C%22id%22%3A%22ued93c63c%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="uc84dbcbb" id="uc84dbcbb"><br></p><p data-lake-id="uc5f6cd98" id="uc5f6cd98"><br></p><p data-lake-id="u2e4a2ad3" id="u2e4a2ad3"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671145831511-e3d95533-d5a2-404a-baac-fc0f3fb73388.png%22%2C%22taskId%22%3A%22udbc8027b-136c-4429-8e68-e65c125d224%22%2C%22clientId%22%3A%22u71d7a380-b126-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A1154%2C%22height%22%3A431%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A304840%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2826%2C%22originHeight%22%3A1056%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%2238.JS%20%20CONST%20N%20%3B%20NEW%20ANIMAL()%3B%2016%2039.JS%2017%20CONST%20T%20A%20N.SPEAK%3B%2039-1.JS%2018%2039-2.JS%20CONSTB%20N.EAT%2039-3.JS%2019%2040JS%2020%20%3B%3B%3B%E5%89%8D%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%3ATHIS%E4%BE%9D%E7%84%B6%E6%8C%87%E5%90%91%E5%88%9B%E5%BB%BA%E7%9A%84%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%2C%E5%8D%B3%2C%E5%89%8D%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84THIS%E5%A7%8B%E7%BB%88%E6%98%AF%E8%AF%A5%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%89%80%E5%9C%A8%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%AD%E7%9A%84THIS%20B()%3B%2042.JS%2021%20A()%3B%20%3B%E9%9F%B3%E9%80%9A%E6%96%B9%E6%B3%95%2C%E6%8A%A5%E7%AE%B1%2C%E5%9B%A0%E4%B8%BA%20%E6%96%B9%E6%B3%95%E4%B8%AD%E7%9A%84THIS%20%E4%BC%9A%E6%8C%87%E5%90%91UNDEFINED%2C%E5%8D%B3%E7%AE%A1%E9%80%9A%E9%80%9F%E6%95%B0%E4%B8%AD%E7%9A%84THIS%20%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%2C%E5%A7%8B%E7%BB%88%E6%8C%87%E5%90%91%E9%80%9A%E6%95%B0%E7%9A%84%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83.%2043.JS%2044.JS%2045.JS%20AG%20IE%20TERMINAL%3A%20.%2FDAIT%20CODING%20GIT%3A(MAIN)%20X%20NOTE%201.JS%20DAIT%20CAT%20FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-COLING%2F1.JS%3A8%20CONSOLE.LOG(THIS.NAME)%20BOOKMARKS%20TYPEERROR%3A%20CANNOT%20READ%20PROPERTIES%20OF%20UNDEFINED%20(READING%20NG%20NAME)%20WDUP%20AT%20SPEAK%20(FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-CODING%2F1.JS%3A8%3A26)%20AT%20FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-CODING%2F1.JS%3A21%3A1%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A197.75267%2C%22y%22%3A61.828884%2C%22width%22%3A57.91829000000001%2C%22height%22%3A27.866839999999996%2C%22text%22%3A%2238.JS%22%7D%2C%7B%22x%22%3A587.8914%2C%22y%22%3A66.07202%2C%22width%22%3A465.96530000000007%2C%22height%22%3A37.62706%2C%22text%22%3A%22%20CONST%20N%20%3B%20NEW%20ANIMAL()%3B%22%7D%2C%7B%22x%22%3A453.73172%2C%22y%22%3A69.724%2C%22width%22%3A43.329409999999996%2C%22height%22%3A30.284194%2C%22text%22%3A%2216%22%7D%2C%7B%22x%22%3A200.07352%2C%22y%22%3A101.94356%2C%22width%22%3A57.597409999999996%2C%22height%22%3A26.32365%2C%22text%22%3A%2239.JS%22%7D%2C%7B%22x%22%3A451.52127%2C%22y%22%3A122.85672%2C%22width%22%3A46.06167999999997%2C%22height%22%3A33.118780000000015%2C%22text%22%3A%2217%22%7D%2C%7B%22x%22%3A591.1881%2C%22y%22%3A127.24051%2C%22width%22%3A111.27690000000007%2C%22height%22%3A27.33751000000001%2C%22text%22%3A%22CONST%22%7D%2C%7B%22x%22%3A682.1936%2C%22y%22%3A127.940994%2C%22width%22%3A265.12350000000004%2C%22height%22%3A29.133426%2C%22text%22%3A%22T%20A%20N.SPEAK%3B%22%7D%2C%7B%22x%22%3A200.99132%2C%22y%22%3A142.42126%2C%22width%22%3A78.03358%2C%22height%22%3A25.23737%2C%22text%22%3A%2239-1.JS%22%7D%2C%7B%22x%22%3A450.50455%2C%22y%22%3A176.02403%2C%22width%22%3A47.425250000000005%2C%22height%22%3A33.252519999999976%2C%22text%22%3A%2218%22%7D%2C%7B%22x%22%3A199.43895%2C%22y%22%3A182.01686%2C%22width%22%3A85.24834999999999%2C%22height%22%3A26.983000000000004%2C%22text%22%3A%2239-2.JS%22%7D%2C%7B%22x%22%3A591.99615%2C%22y%22%3A182.32547%2C%22width%22%3A146.63345000000004%2C%22height%22%3A27.42412999999999%2C%22text%22%3A%22CONSTB%22%7D%2C%7B%22x%22%3A783.6126%2C%22y%22%3A182.09442%2C%22width%22%3A111.00739999999996%2C%22height%22%3A26.688679999999977%2C%22text%22%3A%22N.EAT%22%7D%2C%7B%22x%22%3A201.37526%2C%22y%22%3A222.20929%2C%22width%22%3A81.66249000000002%2C%22height%22%3A25.994959999999992%2C%22text%22%3A%2239-3.JS%22%7D%2C%7B%22x%22%3A452.2964%2C%22y%22%3A233.47385%2C%22width%22%3A45.61907000000002%2C%22height%22%3A31.33435%2C%22text%22%3A%2219%22%7D%2C%7B%22x%22%3A203.33781%2C%22y%22%3A263.22827%2C%22width%22%3A51.5266%2C%22height%22%3A24.513059999999996%2C%22text%22%3A%2240JS%22%7D%2C%7B%22x%22%3A453.1854%2C%22y%22%3A284.88583%2C%22width%22%3A45.2722%2C%22height%22%3A32.37867%2C%22text%22%3A%2220%22%7D%2C%7B%22x%22%3A828.3762%2C%22y%22%3A282.43784%2C%22width%22%3A1674.7747999999997%2C%22height%22%3A38.672540000000026%2C%22text%22%3A%22%3B%3B%3B%E5%89%8D%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%3ATHIS%E4%BE%9D%E7%84%B6%E6%8C%87%E5%90%91%E5%88%9B%E5%BB%BA%E7%9A%84%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%2C%E5%8D%B3%2C%E5%89%8D%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84THIS%E5%A7%8B%E7%BB%88%E6%98%AF%E8%AF%A5%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%89%80%E5%9C%A8%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%AD%E7%9A%84THIS%22%7D%2C%7B%22x%22%3A594.57654%2C%22y%22%3A285.90915%2C%22width%22%3A80.97369000000003%2C%22height%22%3A35.99514999999997%2C%22text%22%3A%22B()%3B%22%7D%2C%7B%22x%22%3A205.70784%2C%22y%22%3A302.24573%2C%22width%22%3A48.54572999999999%2C%22height%22%3A26.623289999999997%2C%22text%22%3A%2242.JS%22%7D%2C%7B%22x%22%3A453.02298%2C%22y%22%3A336.44052%2C%22width%22%3A43.28062%2C%22height%22%3A35.09505999999999%2C%22text%22%3A%2221%22%7D%2C%7B%22x%22%3A594.90564%2C%22y%22%3A338.96704%2C%22width%22%3A83.82856000000004%2C%22height%22%3A35.68756000000002%2C%22text%22%3A%22A()%3B%22%7D%2C%7B%22x%22%3A833.2084%2C%22y%22%3A336.85788%2C%22width%22%3A1851.4303%2C%22height%22%3A41.714020000000005%2C%22text%22%3A%22%3B%E9%9F%B3%E9%80%9A%E6%96%B9%E6%B3%95%2C%E6%8A%A5%E7%AE%B1%2C%E5%9B%A0%E4%B8%BA%20%E6%96%B9%E6%B3%95%E4%B8%AD%E7%9A%84THIS%20%E4%BC%9A%E6%8C%87%E5%90%91UNDEFINED%2C%E5%8D%B3%E7%AE%A1%E9%80%9A%E9%80%9F%E6%95%B0%E4%B8%AD%E7%9A%84THIS%20%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%2C%E5%A7%8B%E7%BB%88%E6%8C%87%E5%90%91%E9%80%9A%E6%95%B0%E7%9A%84%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83.%22%7D%2C%7B%22x%22%3A203.02899%2C%22y%22%3A344.22003%2C%22width%22%3A54.02997000000002%2C%22height%22%3A26.406769999999995%2C%22text%22%3A%2243.JS%22%7D%2C%7B%22x%22%3A201.2769%2C%22y%22%3A383.73087%2C%22width%22%3A56.50461999999999%2C%22height%22%3A25.51723000000004%2C%22text%22%3A%2244.JS%22%7D%2C%7B%22x%22%3A203.04884%2C%22y%22%3A421.90692%2C%22width%22%3A51.24719999999999%2C%22height%22%3A26.280239999999992%2C%22text%22%3A%2245.JS%22%7D%2C%7B%22x%22%3A196.58397%2C%22y%22%3A459.22498%2C%22width%22%3A56.46621999999999%2C%22height%22%3A22.078119999999956%2C%22text%22%3A%22AG%20IE%22%7D%2C%7B%22x%22%3A86.22391%2C%22y%22%3A490.72983%2C%22width%22%3A111.38638999999999%2C%22height%22%3A28.14157%2C%22text%22%3A%22TERMINAL%3A%22%7D%2C%7B%22x%22%3A214.15924%2C%22y%22%3A491.70593%2C%22width%22%3A84.24917999999997%2C%22height%22%3A33.68072999999998%2C%22text%22%3A%22.%2FDAIT%22%7D%2C%7B%22x%22%3A262.86026%2C%22y%22%3A542.6978%2C%22width%22%3A614.31979%2C%22height%22%3A35.404429999999934%2C%22text%22%3A%22CODING%20GIT%3A(MAIN)%20X%20NOTE%201.JS%22%7D%2C%7B%22x%22%3A128.11665%2C%22y%22%3A543.06635%2C%22width%22%3A118.22942%2C%22height%22%3A36.87424999999996%2C%22text%22%3A%22DAIT%22%7D%2C%7B%22x%22%3A85.48697%2C%22y%22%3A599.4165%2C%22width%22%3A62.85633%2C%22height%22%3A29.62464%2C%22text%22%3A%22CAT%22%7D%2C%7B%22x%22%3A87.05107%2C%22y%22%3A650.73486%2C%22width%22%3A884.41283%2C%22height%22%3A35.267439999999965%2C%22text%22%3A%22FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-COLING%2F1.JS%3A8%22%7D%2C%7B%22x%22%3A242.29597%2C%22y%22%3A706.6929%2C%22width%22%3A442.43782999999996%2C%22height%22%3A32.208349999999996%2C%22text%22%3A%22CONSOLE.LOG(THIS.NAME)%22%7D%2C%7B%22x%22%3A41.11129%2C%22y%22%3A708.358%2C%22width%22%3A31.79088%2C%22height%22%3A161.52255000000002%2C%22text%22%3A%22BOOKMARKS%22%7D%2C%7B%22x%22%3A83.08299%2C%22y%22%3A861.28156%2C%22width%22%3A1123.5164100000002%2C%22height%22%3A42.804239999999936%2C%22text%22%3A%22TYPEERROR%3A%20CANNOT%20READ%20PROPERTIES%20OF%20UNDEFINED%20(READING%22%7D%2C%7B%22x%22%3A1152.8398%2C%22y%22%3A869.0195%2C%22width%22%3A184.26209999999992%2C%22height%22%3A32.25405999999998%2C%22text%22%3A%22NG%20NAME)%22%7D%2C%7B%22x%22%3A42.057854%2C%22y%22%3A896.73395%2C%22width%22%3A28.762626000000004%2C%22height%22%3A92.11794999999995%2C%22text%22%3A%22WDUP%22%7D%2C%7B%22x%22%3A163.29152%2C%22y%22%3A918.5467%2C%22width%22%3A1175.72378%2C%22height%22%3A37.610829999999964%2C%22text%22%3A%22AT%20SPEAK%20(FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-CODING%2F1.JS%3A8%3A26)%22%7D%2C%7B%22x%22%3A166.24896%2C%22y%22%3A975.4497%2C%22width%22%3A1023.50924%2C%22height%22%3A36.650030000000015%2C%22text%22%3A%22AT%20FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-CODING%2F1.JS%3A21%3A1%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231e1d1d%22%2C%22id%22%3A%22u40f2438c%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u585cdbd7" id="u585cdbd7"><br></p><p data-lake-id="uee06bf6a" id="uee06bf6a"><span data-lake-id="u89b8261f" id="u89b8261f">源码部分：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22class%20Animal%7B%5Cn%20%20%20%20constructor()%20%7B%5Cn%20%20%20%20%20%20%20%20this.name%20%3D%20'cat'%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%5Cn%20%20%20%20speak()%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%BD%93%E7%84%B6%EF%BC%8Cthis%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%5Cn%20%20%20%20%20%20%20%20console.log(this.name)%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%5Cn%20%20%20%20eat%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%BD%93%E7%84%B6%EF%BC%8Cthis%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%5Cn%20%20%20%20%20%20%20%20console.log(this.name)%5Cn%20%20%20%20%7D%5Cn%7D%5Cnconst%20n%20%3D%20new%20Animal()%3B%5Cnconst%20a%20%3D%20n.speak%3B%5Cnconst%20b%20%3D%20n.eat%5Cn%5Cnb()%3B%20%20%2F%2F%2F%2F%20%3A%3A%3A%3A%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%EF%BC%9A%20this%E4%BE%9D%E7%84%B6%E6%8C%87%E5%90%91%E5%88%9B%E5%BB%BA%E7%9A%84%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%EF%BC%8C%E5%8D%B3%EF%BC%8C%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84this%E5%A7%8B%E7%BB%88%E6%98%AF%E8%AF%A5%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%89%80%E5%9C%A8%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%AD%E7%9A%84this%5Cna()%3B%20%20%2F%2F%20%3A%3A%3A%3A%E6%99%AE%E9%80%9A%E6%96%B9%E6%B3%95%EF%BC%8C%E6%8A%A5%E9%94%99%EF%BC%8C%E5%9B%A0%E4%B8%BA%20%E6%96%B9%E6%B3%95%E4%B8%AD%E7%9A%84this%20%E4%BC%9A%E6%8C%87%E5%90%91undefined%20%EF%BC%8C%E5%8D%B3%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84%20this%20%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%EF%BC%8C%E5%A7%8B%E7%BB%88%E6%8C%87%E5%90%91%E5%87%BD%E6%95%B0%E7%9A%84%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83%EF%BC%8C%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22xsxYn%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6a04e401" id="u6a04e401"><span data-lake-id="u175691ab" id="u175691ab">​</span><br></p><h1 data-lake-id="nZ6Nz" id="nZ6Nz"><span data-lake-id="u07f0d2d4" id="u07f0d2d4">18、说说fiber架构，看过那些Hooks源码？？</span></h1><p data-lake-id="uf7e04168" id="uf7e04168"><br></p><h1 data-lake-id="kRtz5" id="kRtz5"><span data-lake-id="u84265f5d" id="u84265f5d">19、说说React rerender全流程</span></h1><p data-lake-id="ua5f89ac9" id="ua5f89ac9"><br></p><h1 data-lake-id="XELB3" id="XELB3"><span data-lake-id="u8dee0537" id="u8dee0537">20、Vue的响应式原理（观察者是在哪里被处理的，挂在哪里）</span></h1><p data-lake-id="u1c553169" id="u1c553169"><span data-lake-id="u6199e7b3" id="u6199e7b3">​</span><br></p><h1 data-lake-id="GrMZt" id="GrMZt"><span data-lake-id="u3e24424c" id="u3e24424c">21、ssr的性能瓶颈，一定就比客户端渲染好吗？</span></h1><p data-lake-id="u3a6d73fe" id="u3a6d73fe"><br></p><h1 data-lake-id="sBd5r" id="sBd5r"><span data-lake-id="ube439f4e" id="ube439f4e">22、两个模块，循环引用了，怎么解决？</span></h1><p data-lake-id="ud3a4b523" id="ud3a4b523"><br></p><ul list="uc7aafdbc"><li fid="u02c3be09" data-lake-id="u0bbdd4f5" id="u0bbdd4f5"><a href="https://juejin.cn/post/6844903768266391559" target="_blank" data-lake-id="u00bcc45b" id="u00bcc45b"><span data-lake-id="u9937832b" id="u9937832b">https://juejin.cn/post/6844903768266391559</span></a></li></ul><p data-lake-id="ud2cdf714" id="ud2cdf714"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671583878935-4b057a38-dc2d-4ee9-952c-4b742df5e60c.png%22%2C%22taskId%22%3A%22uf18fe898-6b20-449f-b725-27503518f2e%22%2C%22clientId%22%3A%22u19662187-bc53-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A849.359375%2C%22height%22%3A484%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A201050%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1664%2C%22originHeight%22%3A948%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22COMMONJS%E6%80%BB%E7%BB%93%20COMMONJS%20%E7%9A%84%E7%89%B9%E6%80%A7%E5%A6%82%E4%B8%8B%3A%20COMMONJS%E6%A8%A1%E5%9D%97%E7%94%B1JS%E8%BF%90%E8%A1%8C%E6%97%B6%E5%AE%9E%E7%8E%B0.%20COMMONJS%E6%98%AF%E5%8D%95%E4%B8%AA%E5%80%BC%E5%AF%BC%E5%87%BA%2C%E6%9C%AC%E8%B4%A8%E4%B8%8A%E5%AF%BC%E5%87%BA%E7%9A%84%E5%B0%B1%E6%98%AFEXPORTS%E5%B1%9E%E6%80%A7.%20COMMONJS%20%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%9A%84%2C%E5%AF%B9%E6%AF%8F%E4%B8%80%E4%B8%AA%E5%8A%A0%E8%BD%BD%E9%83%BD%E5%AD%98%E5%9C%A8%E7%BC%93%E5%AD%98%2C%E5%8F%AF%E4%BB%A5%E6%9C%89%E6%95%88%E7%9A%84%E8%A7%A3%E5%86%B3%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8%E9%97%AE%E9%A2%98.%20COMMONJS%E6%A8%A1%E5%9D%97%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E5%B9%B6%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9D%97%E6%96%87%E4%BB%B6.%20ESMODULE%E6%80%BB%E7%BB%93%20%E7%9A%84%E7%89%B9%E6%80%A7%E5%A6%82%E4%B8%8B%3A%20ES%20MODULE%20ES6MODULE%E9%9D%99%E6%80%81%E7%9A%84%2C%E4%B8%8D%E8%83%BD%E6%94%BE%E5%9C%A8%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%2C%E4%BB%A3%E7%A0%81%E5%8F%91%E7%94%9F%E5%9C%A8%E7%BC%96%E8%AF%91%E6%97%B6.%20ES6%20MODULE%20%E7%9A%84%E5%80%BC%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%2C%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%E5%AF%BC%E5%87%BA%E6%96%B9%E6%B3%95%E4%BF%AE%E6%94%B9%2C%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE%E4%BF%AE%E6%94%B9%E7%BB%93%E6%9E%9C.%20ES6MODULE%E5%8F%AF%E4%BB%A5%E5%AF%BC%E5%87%BA%E5%A4%9A%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95%2C%E5%8F%AF%E4%BB%A5%E5%8D%95%E4%B8%AA%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA%2C%E6%B7%B7%E5%90%88%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA.%20ES6%E6%A8%A1%E5%9D%97%E6%8F%90%E5%89%8D%E5%8A%A0%E8%BD%BD%E5%B9%B6%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9D%97%E6%96%87%E4%BB%B6%2C%20ES6%20MODULE%20%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97%E5%9C%A8%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8B.%20%E7%9A%84%E7%89%B9%E6%80%A7%E5%8F%AF%E4%BB%A5%E5%BE%88%E5%AE%B9%E6%98%93%E5%AE%9E%E7%8E%B0%20TREE%20SHAKING%E5%92%8CCODE%20SPLITTING.%20ES6%20MODULE%20%E7%9A%84%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A104.06146%2C%22y%22%3A62.402966%2C%22width%22%3A208.89627000000002%2C%22height%22%3A28.839694%2C%22text%22%3A%22COMMONJS%E6%80%BB%E7%BB%93%22%7D%2C%7B%22x%22%3A144.74619%2C%22y%22%3A124.67141%2C%22width%22%3A139.13011%2C%22height%22%3A30.166630000000012%2C%22text%22%3A%22COMMONJS%22%7D%2C%7B%22x%22%3A336.86197%2C%22y%22%3A125.917336%2C%22width%22%3A152.54753%2C%22height%22%3A26.986354000000006%2C%22text%22%3A%22%E7%9A%84%E7%89%B9%E6%80%A7%E5%A6%82%E4%B8%8B%3A%22%7D%2C%7B%22x%22%3A140.81041%2C%22y%22%3A190.93466%2C%22width%22%3A447.63362%2C%22height%22%3A27.57683%2C%22text%22%3A%22COMMONJS%E6%A8%A1%E5%9D%97%E7%94%B1JS%E8%BF%90%E8%A1%8C%E6%97%B6%E5%AE%9E%E7%8E%B0.%22%7D%2C%7B%22x%22%3A141.92525%2C%22y%22%3A243.67139%2C%22width%22%3A763.12015%2C%22height%22%3A32.250970000000024%2C%22text%22%3A%22COMMONJS%E6%98%AF%E5%8D%95%E4%B8%AA%E5%80%BC%E5%AF%BC%E5%87%BA%2C%E6%9C%AC%E8%B4%A8%E4%B8%8A%E5%AF%BC%E5%87%BA%E7%9A%84%E5%B0%B1%E6%98%AFEXPORTS%E5%B1%9E%E6%80%A7.%22%7D%2C%7B%22x%22%3A140.42126%2C%22y%22%3A298.8865%2C%22width%22%3A1121.71004%2C%22height%22%3A30.895669999999996%2C%22text%22%3A%22COMMONJS%20%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%9A%84%2C%E5%AF%B9%E6%AF%8F%E4%B8%80%E4%B8%AA%E5%8A%A0%E8%BD%BD%E9%83%BD%E5%AD%98%E5%9C%A8%E7%BC%93%E5%AD%98%2C%E5%8F%AF%E4%BB%A5%E6%9C%89%E6%95%88%E7%9A%84%E8%A7%A3%E5%86%B3%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8%E9%97%AE%E9%A2%98.%22%7D%2C%7B%22x%22%3A139.84052%2C%22y%22%3A355.9987%2C%22width%22%3A536.4604400000001%2C%22height%22%3A32.200800000000015%2C%22text%22%3A%22COMMONJS%E6%A8%A1%E5%9D%97%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E5%B9%B6%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9D%97%E6%96%87%E4%BB%B6.%22%7D%2C%7B%22x%22%3A104.0168%2C%22y%22%3A438.33334%2C%22width%22%3A206.00044000000003%2C%22height%22%3A28.757599999999968%2C%22text%22%3A%22ESMODULE%E6%80%BB%E7%BB%93%22%7D%2C%7B%22x%22%3A352.63126%2C%22y%22%3A501.20154%2C%22width%22%3A154.60406%2C%22height%22%3A29.442559999999958%2C%22text%22%3A%22%E7%9A%84%E7%89%B9%E6%80%A7%E5%A6%82%E4%B8%8B%3A%22%7D%2C%7B%22x%22%3A149.50114%2C%22y%22%3A503.01233%2C%22width%22%3A152.79103999999998%2C%22height%22%3A27.08159999999998%2C%22text%22%3A%22ES%20MODULE%22%7D%2C%7B%22x%22%3A139.53387%2C%22y%22%3A562.6064%2C%22width%22%3A830.34893%2C%22height%22%3A34.60659999999996%2C%22text%22%3A%22ES6MODULE%E9%9D%99%E6%80%81%E7%9A%84%2C%E4%B8%8D%E8%83%BD%E6%94%BE%E5%9C%A8%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%2C%E4%BB%A3%E7%A0%81%E5%8F%91%E7%94%9F%E5%9C%A8%E7%BC%96%E8%AF%91%E6%97%B6.%22%7D%2C%7B%22x%22%3A141.0191%2C%22y%22%3A620.4663%2C%22width%22%3A1020.6310000000001%2C%22height%22%3A29.59735999999998%2C%22text%22%3A%22ES6%20MODULE%20%E7%9A%84%E5%80%BC%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%2C%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%E5%AF%BC%E5%87%BA%E6%96%B9%E6%B3%95%E4%BF%AE%E6%94%B9%2C%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE%E4%BF%AE%E6%94%B9%E7%BB%93%E6%9E%9C.%22%7D%2C%7B%22x%22%3A141.20105%2C%22y%22%3A676.0299%2C%22width%22%3A933.1870499999999%2C%22height%22%3A29.597849999999994%2C%22text%22%3A%22ES6MODULE%E5%8F%AF%E4%BB%A5%E5%AF%BC%E5%87%BA%E5%A4%9A%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95%2C%E5%8F%AF%E4%BB%A5%E5%8D%95%E4%B8%AA%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA%2C%E6%B7%B7%E5%90%88%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA.%22%7D%2C%7B%22x%22%3A141.24553%2C%22y%22%3A733.3755%2C%22width%22%3A435.52107%2C%22height%22%3A30.362899999999968%2C%22text%22%3A%22ES6%E6%A8%A1%E5%9D%97%E6%8F%90%E5%89%8D%E5%8A%A0%E8%BD%BD%E5%B9%B6%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9D%97%E6%96%87%E4%BB%B6%2C%22%7D%2C%7B%22x%22%3A140.95482%2C%22y%22%3A785.2834%2C%22width%22%3A458.64833%2C%22height%22%3A33.46529999999996%2C%22text%22%3A%22ES6%20MODULE%20%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97%E5%9C%A8%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8B.%22%7D%2C%7B%22x%22%3A296.70953%2C%22y%22%3A843.1978%2C%22width%22%3A716.07117%2C%22height%22%3A37.206129999999916%2C%22text%22%3A%22%E7%9A%84%E7%89%B9%E6%80%A7%E5%8F%AF%E4%BB%A5%E5%BE%88%E5%AE%B9%E6%98%93%E5%AE%9E%E7%8E%B0%20TREE%20SHAKING%E5%92%8CCODE%20SPLITTING.%22%7D%2C%7B%22x%22%3A140.19557%2C%22y%22%3A846.89685%2C%22width%22%3A189.57813000000002%2C%22height%22%3A25.749390000000062%2C%22text%22%3A%22ES6%20MODULE%20%E7%9A%84%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23d9d9d9%22%2C%22id%22%3A%22ue6127a38%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u51f7e390" id="u51f7e390"><br></p><p data-lake-id="u015bc77d" id="u015bc77d"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671583968553-a93811ef-c23c-4cbc-94f0-5b1e77f95326.png%22%2C%22taskId%22%3A%22u06ec08a2-abe6-4141-8575-e583e227165%22%2C%22clientId%22%3A%22u19662187-bc53-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A820.6363525390625%2C%22height%22%3A646%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A226011%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1548%2C%22originHeight%22%3A1218%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E8%AF%AD%E5%8F%A5%E5%AF%BC%E5%87%BA%E6%A8%A1%E5%9D%97%2C%E6%98%AF%E5%BC%82%E6%AD%A5%E7%9A%84%20%E8%AF%AD%E5%8F%A5%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97%2C%20IMPORT%20EXPORT%20%E9%80%A0%E5%9E%8B.%E5%BD%93%E6%A8%A1%E5%9D%97%E9%81%87%E5%88%B0IMPORT%E5%91%BD%E4%BB%A4%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E7%94%9F%20ES6%E6%A8%A1%E5%9D%97%E5%8E%9F%E7%90%86%3A%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.%E5%BD%93%E6%A0%87%20%E8%84%9A%E6%9C%AC%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E6%97%B6%2C%E5%86%8D%E6%A0%B9%E6%8D%AE%E8%BF%99%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%2C%E5%88%B0%E8%A2%AB%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%82%A3%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%87%8C%E9%9D%A2%E5%8E%BB%E5%8F%96%20%E6%88%90%E4%B8%80%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%2C%E8%84%9A%E6%9C%AC%20%E5%80%BC.%20%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2CESG%E6%A8%A1%E5%9D%97%E6%98%AF%E5%8A%A8%E6%80%81%E5%BC%95%E7%94%A8.%E5%8F%AA%E8%A6%81%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E4%B9%8B%E9%97%B4%E5%AD%98%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%BC%95%E7%94%A8%2C%E4%BB%A3%E7%A0%81%E5%B0%B1%E8%83%BD%E5%A4%9F%E6%89%A7%E8%A1%8C(%E8%A7%A3%E5%86%B3%E5%8E%9F%E7%90%86)%20%2F%2FA.JS%201234567890%20%20CONSOLE.LOG(%5C%22BEFORE%20IMPORT%20B%5C%22)%20%20IMPORT%20%7BB%7D%20FROM%20%5C%22.%2FB%5C%22%20%20CONSOLE.LOG(%5C%22B%20IS%20%5C%22%20%2B%20B)%20%20EXPORT%20LET%20A%20-%20B%2B1%3B%20%2F%2FB.JS%20CONSOLE.LOG(%5C%22BEFORE%20IMPORT%20A%5C%22)%20.%2FA%5C%22%20%7BA%7D%20FROM%20IMPORT%20%20CONSOLE.LOG(%5C%22A%20IS%20%5C%22%20%2B%20A)%2010%20LET%20B%20%3A%20A%2B1%3B%2011%20EXPORT%20%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%3A%20%2F%2F%20BEFORE%20IMPORT%20A%201234%20UNDEFINED%20%2F%2FAIS%20%2F%2F%20BEFORE%20IMPORT%20B%20%2F%2FB%20IS%20NAN%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A553.4885%2C%22y%22%3A100.93008%2C%22width%22%3A356.19489999999996%2C%22height%22%3A35.74752000000001%2C%22text%22%3A%22%E8%AF%AD%E5%8F%A5%E5%AF%BC%E5%87%BA%E6%A8%A1%E5%9D%97%2C%E6%98%AF%E5%BC%82%E6%AD%A5%E7%9A%84%22%7D%2C%7B%22x%22%3A229.09659%2C%22y%22%3A103.869965%2C%22width%22%3A204.74984999999998%2C%22height%22%3A32.639345000000006%2C%22text%22%3A%22%E8%AF%AD%E5%8F%A5%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97%2C%22%7D%2C%7B%22x%22%3A132.87491%2C%22y%22%3A110.2061%2C%22width%22%3A89.45157%2C%22height%22%3A24.104799999999997%2C%22text%22%3A%22IMPORT%22%7D%2C%7B%22x%22%3A460.75815%2C%22y%22%3A111.276886%2C%22width%22%3A90.32979999999998%2C%22height%22%3A25.321094000000002%2C%22text%22%3A%22EXPORT%22%7D%2C%7B%22x%22%3A861.0271%2C%22y%22%3A163.53409%2C%22width%22%3A542.6449%2C%22height%22%3A37.492729999999995%2C%22text%22%3A%22%E9%80%A0%E5%9E%8B.%E5%BD%93%E6%A8%A1%E5%9D%97%E9%81%87%E5%88%B0IMPORT%E5%91%BD%E4%BB%A4%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E7%94%9F%22%7D%2C%7B%22x%22%3A125.58371%2C%22y%22%3A164.6083%2C%22width%22%3A824.29299%2C%22height%22%3A35.34994999999998%2C%22text%22%3A%22ES6%E6%A8%A1%E5%9D%97%E5%8E%9F%E7%90%86%3A%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.%E5%BD%93%E6%A0%87%22%7D%2C%7B%22x%22%3A365.9801%2C%22y%22%3A225.49792%2C%22width%22%3A994.0298%2C%22height%22%3A33.592630000000014%2C%22text%22%3A%22%E8%84%9A%E6%9C%AC%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E6%97%B6%2C%E5%86%8D%E6%A0%B9%E6%8D%AE%E8%BF%99%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%2C%E5%88%B0%E8%A2%AB%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%82%A3%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%87%8C%E9%9D%A2%E5%8E%BB%E5%8F%96%22%7D%2C%7B%22x%22%3A127.037674%2C%22y%22%3A227.06651%2C%22width%22%3A292.46436600000004%2C%22height%22%3A31.99894999999998%2C%22text%22%3A%22%E6%88%90%E4%B8%80%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%2C%E8%84%9A%E6%9C%AC%22%7D%2C%7B%22x%22%3A127.71264%2C%22y%22%3A289.7703%2C%22width%22%3A40.65574000000001%2C%22height%22%3A31.09409999999997%2C%22text%22%3A%22%E5%80%BC.%22%7D%2C%7B%22x%22%3A199.06165%2C%22y%22%3A295.8382%2C%22width%22%3A1031.81795%2C%22height%22%3A23.754700000000014%2C%22text%22%3A%22%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2CESG%E6%A8%A1%E5%9D%97%E6%98%AF%E5%8A%A8%E6%80%81%E5%BC%95%E7%94%A8.%E5%8F%AA%E8%A6%81%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E4%B9%8B%E9%97%B4%E5%AD%98%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%BC%95%E7%94%A8%2C%E4%BB%A3%E7%A0%81%E5%B0%B1%E8%83%BD%E5%A4%9F%E6%89%A7%E8%A1%8C(%E8%A7%A3%E5%86%B3%E5%8E%9F%E7%90%86)%22%7D%2C%7B%22x%22%3A177.23235%2C%22y%22%3A405.94934%2C%22width%22%3A88.20228000000003%2C%22height%22%3A26.870659999999987%2C%22text%22%3A%22%2F%2FA.JS%22%7D%2C%7B%22x%22%3A118.21569%2C%22y%22%3A419.68518%2C%22width%22%3A27.183909999999997%2C%22height%22%3A310.48062%2C%22text%22%3A%221234567890%22%7D%2C%7B%22x%22%3A176.44817%2C%22y%22%3A440.41824%2C%22width%22%3A435.70713%2C%22height%22%3A31.06353999999999%2C%22text%22%3A%22%20CONSOLE.LOG(%5C%22BEFORE%20IMPORT%20B%5C%22)%22%7D%2C%7B%22x%22%3A175.89885%2C%22y%22%3A478.6397%2C%22width%22%3A299.86325%2C%22height%22%3A27.249829999999974%2C%22text%22%3A%22%20IMPORT%20%7BB%7D%20FROM%20%5C%22.%2FB%5C%22%22%7D%2C%7B%22x%22%3A176.02296%2C%22y%22%3A514.3674%2C%22width%22%3A349.66164000000003%2C%22height%22%3A31.079700000000003%2C%22text%22%3A%22%20CONSOLE.LOG(%5C%22B%20IS%20%5C%22%20%2B%20B)%22%7D%2C%7B%22x%22%3A176.83636%2C%22y%22%3A554.6557%2C%22width%22%3A276.51804%2C%22height%22%3A25.61360000000002%2C%22text%22%3A%22%20EXPORT%20LET%20A%20-%20B%2B1%3B%22%7D%2C%7B%22x%22%3A173.80768%2C%22y%22%3A621.70215%2C%22width%22%3A90.11099000000002%2C%22height%22%3A27.95471000000009%2C%22text%22%3A%22%2F%2FB.JS%22%7D%2C%7B%22x%22%3A175.40477%2C%22y%22%3A660.92487%2C%22width%22%3A433.66793000000007%2C%22height%22%3A24.35933%2C%22text%22%3A%22CONSOLE.LOG(%5C%22BEFORE%20IMPORT%20A%5C%22)%22%7D%2C%7B%22x%22%3A432.0742%2C%22y%22%3A693.583%2C%22width%22%3A49.190049999999985%2C%22height%22%3A27.536929999999984%2C%22text%22%3A%22.%2FA%5C%22%22%7D%2C%7B%22x%22%3A282.3794%2C%22y%22%3A695.6915%2C%22width%22%3A114.30557000000005%2C%22height%22%3A27.166349999999966%2C%22text%22%3A%22%7BA%7D%20FROM%22%7D%2C%7B%22x%22%3A176.3265%2C%22y%22%3A697.1206%2C%22width%22%3A86.85140000000001%2C%22height%22%3A23.10554000000002%2C%22text%22%3A%22IMPORT%22%7D%2C%7B%22x%22%3A178.01042%2C%22y%22%3A726.28564%2C%22width%22%3A348.03163%2C%22height%22%3A34.813260000000014%2C%22text%22%3A%22%20CONSOLE.LOG(%5C%22A%20IS%20%5C%22%20%2B%20A)%22%7D%2C%7B%22x%22%3A111.75481%2C%22y%22%3A727.62805%2C%22width%22%3A31.111389999999986%2C%22height%22%3A30.06714999999997%2C%22text%22%3A%2210%22%7D%2C%7B%22x%22%3A279.48483%2C%22y%22%3A764.80963%2C%22width%22%3A171.9155%2C%22height%22%3A30.928530000000023%2C%22text%22%3A%22LET%20B%20%3A%20A%2B1%3B%22%7D%2C%7B%22x%22%3A111.37304%2C%22y%22%3A768.1172%2C%22width%22%3A30.550909999999988%2C%22height%22%3A26.455600000000004%2C%22text%22%3A%2211%22%7D%2C%7B%22x%22%3A177.85808%2C%22y%22%3A769.7097%2C%22width%22%3A83.17247%2C%22height%22%3A23.58389999999997%2C%22text%22%3A%22EXPORT%22%7D%2C%7B%22x%22%3A85.54712%2C%22y%22%3A873.1018%2C%22width%22%3A142.83557%2C%22height%22%3A35.02185999999995%2C%22text%22%3A%22%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%3A%22%7D%2C%7B%22x%22%3A174.96802%2C%22y%22%3A986.2183%2C%22width%22%3A255.68545000000003%2C%22height%22%3A31.250400000000013%2C%22text%22%3A%22%2F%2F%20BEFORE%20IMPORT%20A%22%7D%2C%7B%22x%22%3A122.37736%2C%22y%22%3A990.5053%2C%22width%22%3A19.557010000000005%2C%22height%22%3A135.33940000000007%2C%22text%22%3A%221234%22%7D%2C%7B%22x%22%3A291.40143%2C%22y%22%3A1026.437%2C%22width%22%3A134.90006999999997%2C%22height%22%3A25.11869999999999%2C%22text%22%3A%22UNDEFINED%22%7D%2C%7B%22x%22%3A182.10341%2C%22y%22%3A1026.6477%2C%22width%22%3A88.94315999999998%2C%22height%22%3A25.536599999999908%2C%22text%22%3A%22%2F%2FAIS%22%7D%2C%7B%22x%22%3A179.38855%2C%22y%22%3A1057.7953%2C%22width%22%3A259.7251%2C%22height%22%3A30.379300000000057%2C%22text%22%3A%22%2F%2F%20BEFORE%20IMPORT%20B%22%7D%2C%7B%22x%22%3A176.98343%2C%22y%22%3A1095.5688%2C%22width%22%3A162.34399000000002%2C%22height%22%3A26.792899999999918%2C%22text%22%3A%22%2F%2FB%20IS%20NAN%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23252525%22%2C%22id%22%3A%22u909e370f%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u174d69ff" id="u174d69ff"><br></p><ul list="u4d813bca"><li fid="u44a855c9" data-lake-id="ubf04702e" id="ubf04702e"><span data-lake-id="u501c56dd" id="u501c56dd">解决方法之一：使用函数，产生一个新的值！</span></li></ul><p data-lake-id="u0a0f3250" id="u0a0f3250"><br></p><p data-lake-id="ub5509845" id="ub5509845"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671881368056-fc43668b-560d-48c5-9d79-61d0f5046342.png%22%2C%22taskId%22%3A%22u29ab013d-43d6-4bd7-a2f2-7c3828387f0%22%2C%22clientId%22%3A%22u7ec53674-144a-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A706.3636210536172%2C%22height%22%3A702%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A345741%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1554%2C%22originHeight%22%3A1544%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%225.1%20COMMONJS%20%2C%E5%AF%B9%E4%BA%8E%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%2C%E5%B1%9E%E4%BA%8E%E5%A4%8D%E5%88%B6.%E5%8D%B3%E4%BC%9A%E8%A2%AB%E6%A8%A1%E5%9D%97%E7%BC%93%E5%AD%98.%E5%90%8C%E6%97%B6%2C%E5%9C%A8%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97%E5%8F%AF%E4%BB%A5%E5%AF%B9%E8%AF%A5%E6%A8%A1%E5%9D%97%E8%BE%93%E5%87%BA%E7%9A%84%E5%8F%98%E9%87%8F%E9%87%8D%E6%96%B0%E8%B5%8B.%20%E5%80%BC.%20%2C%E5%AF%B9%E4%BA%8E%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%2C%E5%B1%9E%E4%BA%8E%E6%B5%85%E6%8B%B7%E8%B4%9D.%E7%94%B1%E4%BA%8E%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E5%BC%95%E7%94%A8%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%8C%87%E5%90%91%E5%90%8C%E4%B8%80%E4%B8%AA%E5%86%85%E5%AD%98%E7%A9%BA%E9%97%B4%2C%E5%9B%A0%E6%AD%A4%E5%AF%B9%E8%AF%A5%E6%8D%A2%E5%9D%97%E7%9A%84%E5%80%BC%E5%81%9A%20%E4%BF%AE%E6%94%B9%E6%97%B6%E4%BC%9A%E5%BD%B1%E5%93%8D%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97.%20%E5%BD%93%E4%BD%BF%E7%94%A8REQUIRE%E5%91%BD%E4%BB%A4%E5%8A%A0%E8%BD%BD%E6%9F%90%E4%B8%AA%E6%A8%A1%E5%9D%97%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E8%BF%90%E8%A1%8C%E6%95%B4%E4%B8%AA%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BB%A3%E7%A0%81.%20%2C%E5%BD%93%E4%BD%BF%E7%94%A8REQUIRE%E5%91%BD%E4%BB%A4%E5%8A%A0%E8%BD%BD%E5%90%8C%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97%E6%97%B6%2C%E4%B8%8D%E4%BC%9A%E5%86%8D%E6%89%A7%E8%A1%8C%E8%AF%A5%E6%A8%A1%E5%9D%97%2C%E8%80%8C%E6%98%AF%E5%8F%96%E5%88%B0%E7%BC%93%E5%AD%98%E4%B9%8B%E4%B8%AD%E7%9A%84%E5%80%BC.%E4%B9%9F%E5%B0%B1%E6%98%AF%E8%AF%B4%2C%20COMMONJS%E6%A8%A1%E5%9D%97%E6%97%A0%E8%AE%BA%E5%8A%A0%E8%BD%BD%E5%A4%9A%E5%B0%91%E6%AC%A1%2C%E9%83%BD%E5%8F%AA%E4%BC%9A%E5%9C%A8%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%8A%A0%E8%BD%BD%E6%97%B6%E8%BF%90%E8%A1%8C%E4%B8%80%E6%AC%A1%2C%E4%BB%A5%E5%90%8E%E5%86%8D%E5%8A%A0%E8%BD%BD%2C%E5%B0%B1%E8%BF%99%E5%9B%9E%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%90%E8%A1%8C%E7%9A%84%20%E7%BB%93%E6%9E%9C%2C%E9%99%A4%E9%9D%9E%E6%89%8B%E5%8A%A8%E6%B8%85%E9%99%A4%E7%B3%BB%E7%BB%9F%E7%BC%93%E5%AD%98.%20%2C%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2C%E5%B1%9E%E4%BA%8E%E5%8A%A0%E8%BD%BD%E6%97%B6%E6%89%A7%E8%A1%8C.%E5%8D%B3%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E5%9C%A8REQUIRE%E7%9A%84%E6%97%B6%E5%80%99%2C%E5%B0%B1%E4%BC%9A%E5%85%A8%E9%83%A8%E6%89%A7%E8%A1%8C.%E4%B8%80%E6%97%A6%E5%87%BA%E7%8E%B0%E6%9F%90%E4%B8%AA%E6%A8%A1%E5%9D%97%E8%A2%AB%5C%22%E5%BE%AA%20%E7%8E%AF%E5%8A%A0%E8%BD%BD%5C%22%2C%E5%B0%B1%E5%8F%AA%E8%BE%93%E5%87%BA%E5%B7%B2%E7%BB%8F%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%2C%E8%BF%98%E6%9C%AA%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%E4%B8%8D%E4%BC%9A%E8%BE%93%E5%87%BA.%205.2%20ES6%20ES6%E6%A8%A1%E5%9D%97%E4%B8%AD%E7%9A%84%E5%80%BC%E5%B1%9E%E4%BA%8E%5B%E5%8A%A8%E6%80%81%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%5D.%20%2C%E5%AF%B9%E4%BA%8E%E5%8F%AA%E8%AF%BB%E6%9D%A5%E8%AF%B4%2C%E5%8D%B3%E4%B8%8D%E5%85%81%E8%AE%B8%E4%BF%AE%E6%94%B9%E5%BC%95%E5%85%A5%E5%8F%98%E9%87%8F%E7%9A%84%E5%80%BC%2CIMPOR%E7%9A%84%E5%8F%98%E9%87%8F%E6%98%AF%E5%8F%AA%E8%AF%BB%E7%9A%84%2C%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%20%E6%8D%AE%E7%B1%BB%E5%9E%8B.%E5%BD%93%E6%A8%A1%E5%9D%97%E9%81%87%E5%88%B0IMPORT%E5%91%BD%E4%BB%A4%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8.%E7%AD%89%E5%88%B0%E8%84%9A%E6%9C%AC%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E6%97%B6%2C%E5%86%8D%E6%A0%B9%E6%8D%AE%E8%BF%99%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%20%E7%94%A8%2C%E5%88%B0%E8%A2%AB%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%82%A3%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%87%8C%E9%9D%A2%E5%8E%BB%E5%8F%96%E5%80%BC.%20%3A%E5%AF%B9%E4%BA%8E%E5%8A%A8%E6%80%81%E6%9D%A5%E8%AF%B4%2C%E5%8E%9F%E5%A7%8B%E5%80%BC%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96%2CIMPORT%E5%8A%A0%E8%BD%BD%E7%9A%84%E5%80%BC%E4%B9%9F%E4%BC%9A%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96.%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%20%E5%9E%8B.%20%2C%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2CES6%E6%A8%A1%E5%9D%97%E6%98%AF%E5%8A%A8%E6%80%81%E5%BC%95%E7%94%A8.%E5%8F%AA%E8%A6%81%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E4%B9%8B%E9%97%B4%E5%AD%98%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%BC%95%E7%94%A8%2C%E4%BB%A3%E7%A0%81%E5%B0%B1%E8%83%BD%E5%A4%9F%E6%89%A7%E8%A1%8C.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A52.069645%2C%22y%22%3A103.04666%2C%22width%22%3A225.359855%2C%22height%22%3A27.979829999999993%2C%22text%22%3A%225.1%20COMMONJS%22%7D%2C%7B%22x%22%3A101.73857%2C%22y%22%3A189.64755%2C%22width%22%3A1299.06103%2C%22height%22%3A33.01799%2C%22text%22%3A%22%2C%E5%AF%B9%E4%BA%8E%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%2C%E5%B1%9E%E4%BA%8E%E5%A4%8D%E5%88%B6.%E5%8D%B3%E4%BC%9A%E8%A2%AB%E6%A8%A1%E5%9D%97%E7%BC%93%E5%AD%98.%E5%90%8C%E6%97%B6%2C%E5%9C%A8%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97%E5%8F%AF%E4%BB%A5%E5%AF%B9%E8%AF%A5%E6%A8%A1%E5%9D%97%E8%BE%93%E5%87%BA%E7%9A%84%E5%8F%98%E9%87%8F%E9%87%8D%E6%96%B0%E8%B5%8B.%22%7D%2C%7B%22x%22%3A101.011566%2C%22y%22%3A242.35107%2C%22width%22%3A42.84842400000001%2C%22height%22%3A31.091070000000002%2C%22text%22%3A%22%E5%80%BC.%22%7D%2C%7B%22x%22%3A101.77233%2C%22y%22%3A332.50266%2C%22width%22%3A1300.14417%2C%22height%22%3A31.654260000000022%2C%22text%22%3A%22%2C%E5%AF%B9%E4%BA%8E%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%2C%E5%B1%9E%E4%BA%8E%E6%B5%85%E6%8B%B7%E8%B4%9D.%E7%94%B1%E4%BA%8E%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E5%BC%95%E7%94%A8%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%8C%87%E5%90%91%E5%90%8C%E4%B8%80%E4%B8%AA%E5%86%85%E5%AD%98%E7%A9%BA%E9%97%B4%2C%E5%9B%A0%E6%AD%A4%E5%AF%B9%E8%AF%A5%E6%8D%A2%E5%9D%97%E7%9A%84%E5%80%BC%E5%81%9A%22%7D%2C%7B%22x%22%3A101.41992%2C%22y%22%3A383.55017%2C%22width%22%3A335.11121%2C%22height%22%3A30.534730000000025%2C%22text%22%3A%22%E4%BF%AE%E6%94%B9%E6%97%B6%E4%BC%9A%E5%BD%B1%E5%93%8D%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97.%22%7D%2C%7B%22x%22%3A103.42073%2C%22y%22%3A472.9538%2C%22width%22%3A797.0042699999999%2C%22height%22%3A31.650969999999973%2C%22text%22%3A%22%E5%BD%93%E4%BD%BF%E7%94%A8REQUIRE%E5%91%BD%E4%BB%A4%E5%8A%A0%E8%BD%BD%E6%9F%90%E4%B8%AA%E6%A8%A1%E5%9D%97%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E8%BF%90%E8%A1%8C%E6%95%B4%E4%B8%AA%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BB%A3%E7%A0%81.%22%7D%2C%7B%22x%22%3A101.487785%2C%22y%22%3A560.87415%2C%22width%22%3A1196.900515%2C%22height%22%3A31.41210000000001%2C%22text%22%3A%22%2C%E5%BD%93%E4%BD%BF%E7%94%A8REQUIRE%E5%91%BD%E4%BB%A4%E5%8A%A0%E8%BD%BD%E5%90%8C%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97%E6%97%B6%2C%E4%B8%8D%E4%BC%9A%E5%86%8D%E6%89%A7%E8%A1%8C%E8%AF%A5%E6%A8%A1%E5%9D%97%2C%E8%80%8C%E6%98%AF%E5%8F%96%E5%88%B0%E7%BC%93%E5%AD%98%E4%B9%8B%E4%B8%AD%E7%9A%84%E5%80%BC.%E4%B9%9F%E5%B0%B1%E6%98%AF%E8%AF%B4%2C%22%7D%2C%7B%22x%22%3A101.51731%2C%22y%22%3A612.547%2C%22width%22%3A1305.71099%2C%22height%22%3A30.14969999999994%2C%22text%22%3A%22COMMONJS%E6%A8%A1%E5%9D%97%E6%97%A0%E8%AE%BA%E5%8A%A0%E8%BD%BD%E5%A4%9A%E5%B0%91%E6%AC%A1%2C%E9%83%BD%E5%8F%AA%E4%BC%9A%E5%9C%A8%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%8A%A0%E8%BD%BD%E6%97%B6%E8%BF%90%E8%A1%8C%E4%B8%80%E6%AC%A1%2C%E4%BB%A5%E5%90%8E%E5%86%8D%E5%8A%A0%E8%BD%BD%2C%E5%B0%B1%E8%BF%99%E5%9B%9E%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%90%E8%A1%8C%E7%9A%84%22%7D%2C%7B%22x%22%3A100.32622%2C%22y%22%3A663.85706%2C%22width%22%3A390.03908%2C%22height%22%3A30.432489999999916%2C%22text%22%3A%22%E7%BB%93%E6%9E%9C%2C%E9%99%A4%E9%9D%9E%E6%89%8B%E5%8A%A8%E6%B8%85%E9%99%A4%E7%B3%BB%E7%BB%9F%E7%BC%93%E5%AD%98.%22%7D%2C%7B%22x%22%3A101.5207%2C%22y%22%3A752.69727%2C%22width%22%3A1288.4533999999999%2C%22height%22%3A32.38158999999996%2C%22text%22%3A%22%2C%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2C%E5%B1%9E%E4%BA%8E%E5%8A%A0%E8%BD%BD%E6%97%B6%E6%89%A7%E8%A1%8C.%E5%8D%B3%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E5%9C%A8REQUIRE%E7%9A%84%E6%97%B6%E5%80%99%2C%E5%B0%B1%E4%BC%9A%E5%85%A8%E9%83%A8%E6%89%A7%E8%A1%8C.%E4%B8%80%E6%97%A6%E5%87%BA%E7%8E%B0%E6%9F%90%E4%B8%AA%E6%A8%A1%E5%9D%97%E8%A2%AB%5C%22%E5%BE%AA%22%7D%2C%7B%22x%22%3A99.31133%2C%22y%22%3A802.85455%2C%22width%22%3A804.68513%2C%22height%22%3A33.17624999999998%2C%22text%22%3A%22%E7%8E%AF%E5%8A%A0%E8%BD%BD%5C%22%2C%E5%B0%B1%E5%8F%AA%E8%BE%93%E5%87%BA%E5%B7%B2%E7%BB%8F%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%2C%E8%BF%98%E6%9C%AA%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%E4%B8%8D%E4%BC%9A%E8%BE%93%E5%87%BA.%22%7D%2C%7B%22x%22%3A52.14703%2C%22y%22%3A914.95306%2C%22width%22%3A116.05883%2C%22height%22%3A27.77123999999992%2C%22text%22%3A%225.2%20ES6%22%7D%2C%7B%22x%22%3A100.8073%2C%22y%22%3A1004.0632%2C%22width%22%3A491.5532%2C%22height%22%3A31.460799999999836%2C%22text%22%3A%22ES6%E6%A8%A1%E5%9D%97%E4%B8%AD%E7%9A%84%E5%80%BC%E5%B1%9E%E4%BA%8E%5B%E5%8A%A8%E6%80%81%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%5D.%22%7D%2C%7B%22x%22%3A100.6436%2C%22y%22%3A1094.2869%2C%22width%22%3A1298.8117%2C%22height%22%3A31.639999999999873%2C%22text%22%3A%22%2C%E5%AF%B9%E4%BA%8E%E5%8F%AA%E8%AF%BB%E6%9D%A5%E8%AF%B4%2C%E5%8D%B3%E4%B8%8D%E5%85%81%E8%AE%B8%E4%BF%AE%E6%94%B9%E5%BC%95%E5%85%A5%E5%8F%98%E9%87%8F%E7%9A%84%E5%80%BC%2CIMPOR%E7%9A%84%E5%8F%98%E9%87%8F%E6%98%AF%E5%8F%AA%E8%AF%BB%E7%9A%84%2C%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%22%7D%2C%7B%22x%22%3A101.28174%2C%22y%22%3A1144.1497%2C%22width%22%3A1294.92246%2C%22height%22%3A32.190900000000056%2C%22text%22%3A%22%E6%8D%AE%E7%B1%BB%E5%9E%8B.%E5%BD%93%E6%A8%A1%E5%9D%97%E9%81%87%E5%88%B0IMPORT%E5%91%BD%E4%BB%A4%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8.%E7%AD%89%E5%88%B0%E8%84%9A%E6%9C%AC%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E6%97%B6%2C%E5%86%8D%E6%A0%B9%E6%8D%AE%E8%BF%99%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%22%7D%2C%7B%22x%22%3A101.33288%2C%22y%22%3A1194.0485%2C%22width%22%3A474.65412%2C%22height%22%3A33.14989999999989%2C%22text%22%3A%22%E7%94%A8%2C%E5%88%B0%E8%A2%AB%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%82%A3%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%87%8C%E9%9D%A2%E5%8E%BB%E5%8F%96%E5%80%BC.%22%7D%2C%7B%22x%22%3A101.28878%2C%22y%22%3A1284.8131%2C%22width%22%3A1298.4894199999999%2C%22height%22%3A30.733299999999872%2C%22text%22%3A%22%3A%E5%AF%B9%E4%BA%8E%E5%8A%A8%E6%80%81%E6%9D%A5%E8%AF%B4%2C%E5%8E%9F%E5%A7%8B%E5%80%BC%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96%2CIMPORT%E5%8A%A0%E8%BD%BD%E7%9A%84%E5%80%BC%E4%B9%9F%E4%BC%9A%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96.%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%22%7D%2C%7B%22x%22%3A101.612885%2C%22y%22%3A1336.0212%2C%22width%22%3A47.19222500000001%2C%22height%22%3A31.514400000000023%2C%22text%22%3A%22%E5%9E%8B.%22%7D%2C%7B%22x%22%3A100.0476%2C%22y%22%3A1425.5812%2C%22width%22%3A1105.0994999999998%2C%22height%22%3A32.78419999999983%2C%22text%22%3A%22%2C%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2CES6%E6%A8%A1%E5%9D%97%E6%98%AF%E5%8A%A8%E6%80%81%E5%BC%95%E7%94%A8.%E5%8F%AA%E8%A6%81%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E4%B9%8B%E9%97%B4%E5%AD%98%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%BC%95%E7%94%A8%2C%E4%BB%A3%E7%A0%81%E5%B0%B1%E8%83%BD%E5%A4%9F%E6%89%A7%E8%A1%8C.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23dadada%22%2C%22id%22%3A%22uc4ec4cac%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u27ddd640" id="u27ddd640"><br></p><p data-lake-id="ubdd1dff2" id="ubdd1dff2"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671881408146-d80c81d2-7c79-434e-84f0-0249f948254a.png%22%2C%22taskId%22%3A%22ueac9d329-aab7-4243-9eb1-ffe933f3ce0%22%2C%22clientId%22%3A%22u7ec53674-144a-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A1195.4545195437665%2C%22height%22%3A531%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A394655%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2630%2C%22originHeight%22%3A1168%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E8%AF%B4%E8%AF%B4CJM%2FESM%E7%9A%84%E5%8C%BA%E5%88%AB%20%2C%E5%BC%95%E7%94%A8%E4%B8%8D%E5%90%8C%3A%E4%B8%80%E4%B8%AA%E6%98%AF%E5%80%BC%E7%9A%84%E6%8B%B7%E8%B4%9D(COMMONJS)%2C%E4%B8%80%E4%B8%AA%E6%98%AF%E5%80%BC%E7%9A%84%E5%BC%95%E7%94%A8(%20%E7%94%A8(ESM)%20%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8%E6%97%B6%3A%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F%E4%B8%8D%E5%90%8C%20*%20COMMONJS%E9%81%87%E5%88%B0%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96%E6%97%B6%2C%E5%8F%AA%E4%BC%9A%E8%BE%93%E5%87%BA%E5%B7%B2%E7%BB%8F%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%2C%E5%9B%A0%E4%B8%BA%E6%98%AF%E6%8B%B7%E8%B4%9D%2C%E4%B8%94%E4%BC%9A%E7%BC%93%E5%AD%98%E8%B5%B7%E6%9D%A5%2C%E5%90%8E%E9%9D%A2%E4%B8%8D%E8%83%BD%E5%86%8D%E5%BD%B1%E5%93%8D%E5%89%8D%E9%9D%A2%E7%9A%84%E7%BB%93%E6%9E%9C%20%2B%20%E5%9B%A0%E4%B8%BA%E6%98%AF%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%2C%E9%81%BF%E5%85%8D%E4%BA%86%E6%97%A0%E9%99%90%E5%BE%AA%E7%8E%AF%2C%E4%BD%86%E4%B9%9F%E4%BC%9A%E5%AF%BC%E8%87%B4%E4%B8%80%E4%BA%9B%E4%B8%8D%E5%AE%B9%E6%98%93%E5%AF%9F%E8%A7%89%E7%9A%84%E9%94%99%E8%AF%AF%2C%E6%AF%94%E5%A6%82%E6%9F%90%E4%B8%AA%E5%80%BCUNDEFINED%E4%BA%86%20ESM%E5%91%A2%2C%E5%9B%A0%E4%B8%BA%E6%98%AF%E5%BC%95%E7%94%A8%2C%E5%8F%96%E6%9C%80%E5%90%8E%E7%9A%84%E5%80%BC%E5%B0%B1%E5%A5%BD%E4%BA%86%20630%E9%A2%86%E5%9D%97%E5%8A%A0%E6%95%B4%E6%9C%BA%E5%88%B6%E6%A0%B9%E6%9C%AC%E4%B8%8D%E5%85%B3%E5%BF%83%E6%98%AF%E5%90%A6%E5%87%BA%E7%8E%B0%E4%BA%86%E7%A1%AE%E7%8E%AF%E5%BA%94%E7%94%A8%2C%E5%8F%AA%E6%98%AF%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E6%8A%A5%E5%90%91%E6%95%B0%E6%8D%AE%E6%9D%82%E7%9A%84%E5%BC%95%E7%94%A8.%E9%9C%80%E8%A6%81%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%B7%B1%E4%BF%9D%E8%AF%81%2C%E7%9C%9F%E6%AD%A3%E5%8F%96%E5%80%BC%E7%9A%84%E6%97%B6%E5%80%99%E8%83%BD%E5%A4%9F%E5%8F%96%E5%88%B0%E4%BD%BF%E8%83%BD%E5%A4%9F%E5%8F%96%E5%88%B0%E4%BD%BFY%20%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E4%B8%A4%E4%B8%AA%3A%E5%8F%AF%E4%BB%A5%E5%BC%95%E5%85%A5WEBPACK%E6%89%93%E5%8C%85%E6%8F%92%E4%BB%B6%E6%A3%80%E6%B5%8B%3A%20*%201%2C%E4%BD%BF%E7%94%A8EXPORT%E5%87%BD%E6%95%B0%202%2C%E6%8A%8A%E4%BB%96%E4%BB%AC%E6%94%BE%E5%9C%A8%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E9%87%8C%E4%B8%8D%E5%B0%B1%E6%B2%A1%E9%97%AE%E9%A2%98%E4%BA%86%E5%90%97%202%2C%E8%BE%93%E5%87%BA%E4%B8%8D%E5%90%8C%3A%20LIGUANGWEI007%2C2022%2F7%2F4%2C%2019%3A13%20'FEAT%3A%E9%83%BD%E5%B9%B3%E9%93%BA%E5%BC%80%E6%9D%A5%20COMMONJS%E5%BF%85%E9%A1%BB%E5%9C%A8%E8%84%9A%E6%9C%AC%E6%89%A7%E8%A1%8C%E5%AE%8C%E5%AE%8C%E5%90%8E%2C%E6%89%8D%E8%83%BD%E7%A1%AE%E5%AE%9A%E8%BE%93%E5%87%BA%20ESM%E6%98%AF%E9%9D%99%E6%80%81%E7%BC%96%E8%AF%91%E6%97%B6%E5%B0%B1%E8%83%BD%E7%A1%AE%E5%AE%9A%E8%BE%93%E5%87%BA%E4%BA%86%20*%20*3%2C%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%3A%20NODE%E9%A1%B9%E7%9B%AE%E7%9A%84%E4%BB%A3%E7%A0%81%E5%8D%B3%E6%A8%A1%E5%9D%97%E9%83%BD%E5%9C%A8%E6%9C%AC%E5%9C%B0%E4%B8%89%E4%B8%89%3E%20%E6%89%80%E4%BB%A5CJM%E9%83%BD%E6%98%AF%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%20K%20%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E8%84%9A%E6%9C%AC%E9%83%BD%E9%9C%80%E8%A6%81%E5%BC%82%E6%AD%A5%E5%8E%BB%E8%AF%B7%E6%B1%82%E5%90%8E%E6%89%8D%E8%83%BD%E6%89%A7%E8%A1%8C%20%E4%B8%89%3E%E6%89%80%E4%BB%A5%E9%83%BD%E6%98%AF%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%20*%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A282.64636%2C%22y%22%3A94.32392%2C%22width%22%3A315.15984%2C%22height%22%3A33.944779999999994%2C%22text%22%3A%22%E8%AF%B4%E8%AF%B4CJM%2FESM%E7%9A%84%E5%8C%BA%E5%88%AB%22%7D%2C%7B%22x%22%3A183.8526%2C%22y%22%3A143.65877%2C%22width%22%3A854.392%2C%22height%22%3A41.41691%2C%22text%22%3A%22%2C%E5%BC%95%E7%94%A8%E4%B8%8D%E5%90%8C%3A%E4%B8%80%E4%B8%AA%E6%98%AF%E5%80%BC%E7%9A%84%E6%8B%B7%E8%B4%9D(COMMONJS)%2C%E4%B8%80%E4%B8%AA%E6%98%AF%E5%80%BC%E7%9A%84%E5%BC%95%E7%94%A8(%22%7D%2C%7B%22x%22%3A994.5604%2C%22y%22%3A147.70555%2C%22width%22%3A133.46190000000013%2C%22height%22%3A35.06865000000002%2C%22text%22%3A%22%E7%94%A8(ESM)%22%7D%2C%7B%22x%22%3A232.74199%2C%22y%22%3A201.70242%2C%22width%22%3A413.84911%2C%22height%22%3A37.760670000000005%2C%22text%22%3A%22%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8%E6%97%B6%3A%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F%E4%B8%8D%E5%90%8C%22%7D%2C%7B%22x%22%3A97.270645%2C%22y%22%3A204.06876%2C%22width%22%3A24.712445000000002%2C%22height%22%3A30.187970000000007%2C%22text%22%3A%22*%22%7D%2C%7B%22x%22%3A308.83844%2C%22y%22%3A254.49585%2C%22width%22%3A1601.87276%2C%22height%22%3A41.302490000000006%2C%22text%22%3A%22COMMONJS%E9%81%87%E5%88%B0%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96%E6%97%B6%2C%E5%8F%AA%E4%BC%9A%E8%BE%93%E5%87%BA%E5%B7%B2%E7%BB%8F%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%2C%E5%9B%A0%E4%B8%BA%E6%98%AF%E6%8B%B7%E8%B4%9D%2C%E4%B8%94%E4%BC%9A%E7%BC%93%E5%AD%98%E8%B5%B7%E6%9D%A5%2C%E5%90%8E%E9%9D%A2%E4%B8%8D%E8%83%BD%E5%86%8D%E5%BD%B1%E5%93%8D%E5%89%8D%E9%9D%A2%E7%9A%84%E7%BB%93%E6%9E%9C%22%7D%2C%7B%22x%22%3A98.616264%2C%22y%22%3A262.2631%2C%22width%22%3A22.506186%2C%22height%22%3A28.313769999999977%2C%22text%22%3A%22%2B%22%7D%2C%7B%22x%22%3A388.23547%2C%22y%22%3A306.7808%2C%22width%22%3A1388.1363299999998%2C%22height%22%3A41.42034000000001%2C%22text%22%3A%22%E5%9B%A0%E4%B8%BA%E6%98%AF%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%2C%E9%81%BF%E5%85%8D%E4%BA%86%E6%97%A0%E9%99%90%E5%BE%AA%E7%8E%AF%2C%E4%BD%86%E4%B9%9F%E4%BC%9A%E5%AF%BC%E8%87%B4%E4%B8%80%E4%BA%9B%E4%B8%8D%E5%AE%B9%E6%98%93%E5%AF%9F%E8%A7%89%E7%9A%84%E9%94%99%E8%AF%AF%2C%E6%AF%94%E5%A6%82%E6%9F%90%E4%B8%AA%E5%80%BCUNDEFINED%E4%BA%86%22%7D%2C%7B%22x%22%3A304.47852%2C%22y%22%3A361.1574%2C%22width%22%3A585.92728%2C%22height%22%3A43.98009999999999%2C%22text%22%3A%22ESM%E5%91%A2%2C%E5%9B%A0%E4%B8%BA%E6%98%AF%E5%BC%95%E7%94%A8%2C%E5%8F%96%E6%9C%80%E5%90%8E%E7%9A%84%E5%80%BC%E5%B0%B1%E5%A5%BD%E4%BA%86%22%7D%2C%7B%22x%22%3A385.2931%2C%22y%22%3A417.2691%2C%22width%22%3A1994.7286%2C%22height%22%3A38.018380000000036%2C%22text%22%3A%22630%E9%A2%86%E5%9D%97%E5%8A%A0%E6%95%B4%E6%9C%BA%E5%88%B6%E6%A0%B9%E6%9C%AC%E4%B8%8D%E5%85%B3%E5%BF%83%E6%98%AF%E5%90%A6%E5%87%BA%E7%8E%B0%E4%BA%86%E7%A1%AE%E7%8E%AF%E5%BA%94%E7%94%A8%2C%E5%8F%AA%E6%98%AF%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E6%8A%A5%E5%90%91%E6%95%B0%E6%8D%AE%E6%9D%82%E7%9A%84%E5%BC%95%E7%94%A8.%E9%9C%80%E8%A6%81%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%B7%B1%E4%BF%9D%E8%AF%81%2C%E7%9C%9F%E6%AD%A3%E5%8F%96%E5%80%BC%E7%9A%84%E6%97%B6%E5%80%99%E8%83%BD%E5%A4%9F%E5%8F%96%E5%88%B0%E4%BD%BF%E8%83%BD%E5%A4%9F%E5%8F%96%E5%88%B0%E4%BD%BFY%22%7D%2C%7B%22x%22%3A383.79407%2C%22y%22%3A472.55603%2C%22width%22%3A680.40543%2C%22height%22%3A39.29584%2C%22text%22%3A%22%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E4%B8%A4%E4%B8%AA%3A%E5%8F%AF%E4%BB%A5%E5%BC%95%E5%85%A5WEBPACK%E6%89%93%E5%8C%85%E6%8F%92%E4%BB%B6%E6%A3%80%E6%B5%8B%3A%22%7D%2C%7B%22x%22%3A98.58913%2C%22y%22%3A476.92792%2C%22width%22%3A23.73097%2C%22height%22%3A32.85228000000001%2C%22text%22%3A%22*%22%7D%2C%7B%22x%22%3A449.5108%2C%22y%22%3A528.88837%2C%22width%22%3A320.48834999999997%2C%22height%22%3A35.78842999999995%2C%22text%22%3A%221%2C%E4%BD%BF%E7%94%A8EXPORT%E5%87%BD%E6%95%B0%22%7D%2C%7B%22x%22%3A464.68234%2C%22y%22%3A580.56335%2C%22width%22%3A599.6975599999998%2C%22height%22%3A35.66134999999997%2C%22text%22%3A%222%2C%E6%8A%8A%E4%BB%96%E4%BB%AC%E6%94%BE%E5%9C%A8%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E9%87%8C%E4%B8%8D%E5%B0%B1%E6%B2%A1%E9%97%AE%E9%A2%98%E4%BA%86%E5%90%97%22%7D%2C%7B%22x%22%3A140.31902%2C%22y%22%3A634.1556%2C%22width%22%3A188.33758000000003%2C%22height%22%3A37.6345%2C%22text%22%3A%222%2C%E8%BE%93%E5%87%BA%E4%B8%8D%E5%90%8C%3A%22%7D%2C%7B%22x%22%3A1067.6931%2C%22y%22%3A686.22144%2C%22width%22%3A914.3693000000001%2C%22height%22%3A39.35996%2C%22text%22%3A%22LIGUANGWEI007%2C2022%2F7%2F4%2C%2019%3A13%20'FEAT%3A%E9%83%BD%E5%B9%B3%E9%93%BA%E5%BC%80%E6%9D%A5%22%7D%2C%7B%22x%22%3A312.05826%2C%22y%22%3A686.8576%2C%22width%22%3A701.88278%2C%22height%22%3A39.972999999999956%2C%22text%22%3A%22COMMONJS%E5%BF%85%E9%A1%BB%E5%9C%A8%E8%84%9A%E6%9C%AC%E6%89%A7%E8%A1%8C%E5%AE%8C%E5%AE%8C%E5%90%8E%2C%E6%89%8D%E8%83%BD%E7%A1%AE%E5%AE%9A%E8%BE%93%E5%87%BA%22%7D%2C%7B%22x%22%3A309.315%2C%22y%22%3A743.3166%2C%22width%22%3A475.89466%2C%22height%22%3A35.3741%2C%22text%22%3A%22ESM%E6%98%AF%E9%9D%99%E6%80%81%E7%BC%96%E8%AF%91%E6%97%B6%E5%B0%B1%E8%83%BD%E7%A1%AE%E5%AE%9A%E8%BE%93%E5%87%BA%E4%BA%86%22%7D%2C%7B%22x%22%3A98.06958%2C%22y%22%3A800.94904%2C%22width%22%3A26.6982%2C%22height%22%3A25.059810000000084%2C%22text%22%3A%22*%22%7D%2C%7B%22x%22%3A101.31814%2C%22y%22%3A848.7968%2C%22width%22%3A433.56826%2C%22height%22%3A39.03267000000005%2C%22text%22%3A%22*3%2C%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%3A%22%7D%2C%7B%22x%22%3A186.56685%2C%22y%22%3A903.2853%2C%22width%22%3A987.56855%2C%22height%22%3A37.32000000000005%2C%22text%22%3A%22NODE%E9%A1%B9%E7%9B%AE%E7%9A%84%E4%BB%A3%E7%A0%81%E5%8D%B3%E6%A8%A1%E5%9D%97%E9%83%BD%E5%9C%A8%E6%9C%AC%E5%9C%B0%E4%B8%89%E4%B8%89%3E%20%E6%89%80%E4%BB%A5CJM%E9%83%BD%E6%98%AF%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%22%7D%2C%7B%22x%22%3A96.61183%2C%22y%22%3A910.46967%2C%22width%22%3A40.47818000000001%2C%22height%22%3A28.553730000000087%2C%22text%22%3A%22K%22%7D%2C%7B%22x%22%3A191.66965%2C%22y%22%3A957.67896%2C%22width%22%3A1021.92725%2C%22height%22%3A37.93218999999999%2C%22text%22%3A%22%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E8%84%9A%E6%9C%AC%E9%83%BD%E9%9C%80%E8%A6%81%E5%BC%82%E6%AD%A5%E5%8E%BB%E8%AF%B7%E6%B1%82%E5%90%8E%E6%89%8D%E8%83%BD%E6%89%A7%E8%A1%8C%20%E4%B8%89%3E%E6%89%80%E4%BB%A5%E9%83%BD%E6%98%AF%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%22%7D%2C%7B%22x%22%3A95.52591%2C%22y%22%3A960.0107%2C%22width%22%3A38.52847000000001%2C%22height%22%3A30.484659999999963%2C%22text%22%3A%22*%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231d1d1d%22%2C%22id%22%3A%22ueca7037d%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u3640914b" id="u3640914b"><br></p><h1 data-lake-id="sxcNV" id="sxcNV"><span data-lake-id="uc573ab43" id="uc573ab43">23、</span><code data-lake-id="uf6cb3dee" id="uf6cb3dee"><span data-lake-id="u612eda75" id="u612eda75">http2</span></code><span data-lake-id="uea99bb01" id="uea99bb01">的新特性，多路复用原理以及用了什么算法？？</span></h1><p data-lake-id="u7858ed12" id="u7858ed12"><br></p><p data-lake-id="u84d3aee0" id="u84d3aee0"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671589581821-33f9a5fa-561a-494b-9273-40b28f748970.png%22%2C%22taskId%22%3A%22ue4cd5773-d948-4499-b7d0-d6f6a855ec2%22%2C%22clientId%22%3A%22u19662187-bc53-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A656.363622137338%2C%22height%22%3A107%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A50930%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1444%2C%22originHeight%22%3A236%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%222.2%E4%B8%BA%E4%BB%80%E4%B9%88HTTP%2F1.1%E4%B8%8D%E8%83%BD%E5%AE%9E%E7%8E%B0%5C%22%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8%5C%22%3F%20%5C%22%E7%9A%84%E5%8D%8F%E8%AE%AE%2CHTTP%2F1.1%E6%98%AF%E5%9F%BA%E4%BA%8E%5C%22%E6%96%87%E6%9C%AC%E5%88%86%E5%89%B2%5C%22%E8%A7%A3%E6%9E%90%E7%9A%84%E5%8D%8F%E8%AE%AE.%20%E7%AE%80%E5%8D%95%E5%9B%9E%E7%AD%94%E5%B0%B1%E6%98%AF%3AHTTP%2F2%E6%98%AF%E5%9F%BA%E4%BA%8E%E4%BA%8C%E8%BF%9B%E5%88%B6%5C%22%E5%B8%A7%5C%22%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A100.42933%2C%22y%22%3A75.89354%2C%22width%22%3A604.8158699999999%2C%22height%22%3A34.337630000000004%2C%22text%22%3A%222.2%E4%B8%BA%E4%BB%80%E4%B9%88HTTP%2F1.1%E4%B8%8D%E8%83%BD%E5%AE%9E%E7%8E%B0%5C%22%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8%5C%22%3F%22%7D%2C%7B%22x%22%3A634.0077%2C%22y%22%3A141.68652%2C%22width%22%3A597.072%2C%22height%22%3A37.85265000000001%2C%22text%22%3A%22%5C%22%E7%9A%84%E5%8D%8F%E8%AE%AE%2CHTTP%2F1.1%E6%98%AF%E5%9F%BA%E4%BA%8E%5C%22%E6%96%87%E6%9C%AC%E5%88%86%E5%89%B2%5C%22%E8%A7%A3%E6%9E%90%E7%9A%84%E5%8D%8F%E8%AE%AE.%22%7D%2C%7B%22x%22%3A100.10031%2C%22y%22%3A147.16995%2C%22width%22%3A517.06209%2C%22height%22%3A28.814809999999994%2C%22text%22%3A%22%E7%AE%80%E5%8D%95%E5%9B%9E%E7%AD%94%E5%B0%B1%E6%98%AF%3AHTTP%2F2%E6%98%AF%E5%9F%BA%E4%BA%8E%E4%BA%8C%E8%BF%9B%E5%88%B6%5C%22%E5%B8%A7%5C%22%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%239b9b9b%22%2C%22id%22%3A%22u9f16eba2%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u49b3f4b0" id="u49b3f4b0"><br></p><p data-lake-id="u8d03f59b" id="u8d03f59b"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671589530843-46fd7947-0cb9-4777-b311-57166a6f9808.png%22%2C%22taskId%22%3A%22uc2022daa-0db9-4d07-8673-a728b262a28%22%2C%22clientId%22%3A%22u19662187-bc53-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A778.1818013151819%2C%22height%22%3A719%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A949780%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1712%2C%22originHeight%22%3A1582%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22HTTP%2F2%20MULTIPLEXING%20HTTP%2F1.1%20BASELINE%201%20OPEN%20CONNECTION%20OPEN%20CONNECTION%20GET%2FINDEX.HTML%20GET%2FINDEX.HTML%202%20RESPONSE%20RESPONSE%20TIME%20GET%20%20%2FSTYLES.CSS%20GET%20%2FSTYLES.CSS%20GET%2FSCRIPTS.JS%20%E5%B9%B6%E8%A1%8C!!!%20%E5%85%B6%E5%AE%9E%E6%98%AF%E4%B8%B2%E8%A1%8C%20RESPONSE%20RESPONSE%20RESPONSE%20CLIENT%20RENDERS%20PAGE%20GET%20%20%2FSCRIPTS.JS%20CONNECTION%20REMAINS%20OPEN%207%20RESPONSE%20CLIENT%20RENDERS%20PAGE%20CONNECTION%20CLOSED%209%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A1070.8159%2C%22y%22%3A73.652756%2C%22width%22%3A415.50869999999986%2C%22height%22%3A49.88751400000001%2C%22text%22%3A%22HTTP%2F2%20MULTIPLEXING%22%7D%2C%7B%22x%22%3A274.94907%2C%22y%22%3A73.895905%2C%22width%22%3A366.63003000000003%2C%22height%22%3A41.95986500000001%2C%22text%22%3A%22HTTP%2F1.1%20BASELINE%22%7D%2C%7B%22x%22%3A442.7125%2C%22y%22%3A216.67497%2C%22width%22%3A34.17270000000002%2C%22height%22%3A44.13755999999998%2C%22text%22%3A%221%22%7D%2C%7B%22x%22%3A344.7299%2C%22y%22%3A277.66577%2C%22width%22%3A222.53590000000003%2C%22height%22%3A36.78530999999998%2C%22text%22%3A%22OPEN%20CONNECTION%22%7D%2C%7B%22x%22%3A1168.2922%2C%22y%22%3A279.1199%2C%22width%22%3A223.87059999999997%2C%22height%22%3A33.01368000000002%2C%22text%22%3A%22OPEN%20CONNECTION%22%7D%2C%7B%22x%22%3A347.56665%2C%22y%22%3A346.61096%2C%22width%22%3A203.67195000000004%2C%22height%22%3A65.63080000000002%2C%22text%22%3A%22GET%2FINDEX.HTML%22%7D%2C%7B%22x%22%3A1157.8085%2C%22y%22%3A346.90814%2C%22width%22%3A201.69650000000001%2C%22height%22%3A59.2287%2C%22text%22%3A%22GET%2FINDEX.HTML%22%7D%2C%7B%22x%22%3A230.3482%2C%22y%22%3A347.1636%2C%22width%22%3A28.211550000000017%2C%22height%22%3A30.335730000000012%2C%22text%22%3A%222%22%7D%2C%7B%22x%22%3A1182.9757%2C%22y%22%3A474.42325%2C%22width%22%3A143.0313000000001%2C%22height%22%3A53.78744999999998%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A357.3527%2C%22y%22%3A480.11694%2C%22width%22%3A146.93593999999996%2C%22height%22%3A64.25566000000003%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A814.2432%2C%22y%22%3A527.5445%2C%22width%22%3A100.30989999999997%2C%22height%22%3A37.95080000000007%2C%22text%22%3A%22TIME%22%7D%2C%7B%22x%22%3A1165.9039%2C%22y%22%3A585.67395%2C%22width%22%3A183.59680000000003%2C%22height%22%3A66.17059000000006%2C%22text%22%3A%22GET%20%20%2FSTYLES.CSS%22%7D%2C%7B%22x%22%3A357.7617%2C%22y%22%3A629.898%2C%22width%22%3A186.85213%2C%22height%22%3A87.70313999999996%2C%22text%22%3A%22GET%20%2FSTYLES.CSS%22%7D%2C%7B%22x%22%3A1167.813%2C%22y%22%3A638.7823%2C%22width%22%3A180.45349999999985%2C%22height%22%3A66.95159999999998%2C%22text%22%3A%22GET%2FSCRIPTS.JS%22%7D%2C%7B%22x%22%3A1129.2577%2C%22y%22%3A727.2453%2C%22width%22%3A166.12079999999992%2C%22height%22%3A37.098139999999944%2C%22text%22%3A%22%E5%B9%B6%E8%A1%8C!!!%22%7D%2C%7B%22x%22%3A106.89865%2C%22y%22%3A750.373%2C%22width%22%3A185.16635%2C%22height%22%3A41.47309999999993%2C%22text%22%3A%22%E5%85%B6%E5%AE%9E%E6%98%AF%E4%B8%B2%E8%A1%8C%22%7D%2C%7B%22x%22%3A1197.7251%2C%22y%22%3A790.4065%2C%22width%22%3A141.9922999999999%2C%22height%22%3A48.87474999999995%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A1195.6766%2C%22y%22%3A839.96344%2C%22width%22%3A145.49990000000003%2C%22height%22%3A50.76805999999999%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A357.23605%2C%22y%22%3A826.55035%2C%22width%22%3A147.49677000000003%2C%22height%22%3A66.66275000000007%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A1103.6522%2C%22y%22%3A964.3352%2C%22width%22%3A246.1485%2C%22height%22%3A34.262500000000045%2C%22text%22%3A%22CLIENT%20RENDERS%20PAGE%22%7D%2C%7B%22x%22%3A365.41907%2C%22y%22%3A993.3837%2C%22width%22%3A173.50092999999998%2C%22height%22%3A83.98580000000004%2C%22text%22%3A%22GET%20%20%2FSCRIPTS.JS%22%7D%2C%7B%22x%22%3A1117.1329%2C%22y%22%3A1142.4655%2C%22width%22%3A325.78959999999984%2C%22height%22%3A27.248199999999997%2C%22text%22%3A%22CONNECTION%20REMAINS%20OPEN%22%7D%2C%7B%22x%22%3A657.4543%2C%22y%22%3A1155.6167%2C%22width%22%3A27.073099999999954%2C%22height%22%3A37.7029%2C%22text%22%3A%227%22%7D%2C%7B%22x%22%3A357.39423%2C%22y%22%3A1192.056%2C%22width%22%3A146.49810000000002%2C%22height%22%3A66.28679999999986%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A276.10315%2C%22y%22%3A1326.7958%2C%22width%22%3A252.58709999999996%2C%22height%22%3A37.02089999999998%2C%22text%22%3A%22CLIENT%20RENDERS%20PAGE%22%7D%2C%7B%22x%22%3A334.81793%2C%22y%22%3A1394.5353%2C%22width%22%3A239.23417%2C%22height%22%3A28.27430000000004%2C%22text%22%3A%22CONNECTION%20CLOSED%22%7D%2C%7B%22x%22%3A445.9573%2C%22y%22%3A1444.4545%2C%22width%22%3A23.496800000000007%2C%22height%22%3A29.962099999999964%2C%22text%22%3A%229%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23dfdfde%22%2C%22id%22%3A%22ue2dc14a8%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u588348c9" id="u588348c9"><br></p><p data-lake-id="u837b0611" id="u837b0611"><br></p><p data-lake-id="ud597e94c" id="ud597e94c"><span data-lake-id="u9842b4a7" id="u9842b4a7">​</span><br></p><h1 data-lake-id="ORpLl" id="ORpLl"><span data-lake-id="u89c37609" id="u89c37609">24、设计一个按需加载的 webpack loader ,如何设计 ？</span></h1><p data-lake-id="ufa818b99" id="ufa818b99"><span data-lake-id="ufbfeb99e" id="ufbfeb99e">我理解有点类似于</span><code data-lake-id="u31eb5d0f" id="u31eb5d0f"><span data-lake-id="uf42bd36d" id="uf42bd36d">AMD</span></code><span data-lake-id="uae1e57a7" id="uae1e57a7">的思路吧，即如何加载一个异步的js</span></p><p data-lake-id="u99f2e3fc" id="u99f2e3fc"><br></p><h1 data-lake-id="xpat3" id="xpat3"><span data-lake-id="ucd96b073" id="ucd96b073">26、浏览器器强刷？- 设置了</span><code data-lake-id="u952e1952" id="u952e1952"><span data-lake-id="u1ee0671c" id="u1ee0671c">cache-control</span></code><span data-lake-id="u1cc410a2" id="u1cc410a2"> 为 </span><code data-lake-id="u6e701ccf" id="u6e701ccf"><span data-lake-id="u3e640d05" id="u3e640d05">no-cache</span></code></h1><p data-lake-id="u338dfaf9" id="u338dfaf9"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671793223815-84d27f06-22ac-4376-b5d6-016bfb777e7b.png%22%2C%22taskId%22%3A%22ufbb5e0c9-7c63-4e44-9f14-a9c10f1c185%22%2C%22clientId%22%3A%22u7dc6fb82-2a13-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A778.4%2C%22height%22%3A457%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A273166%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1946%2C%22originHeight%22%3A1142%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E6%80%BB%E7%BB%93%20%E7%BD%91%E7%AB%99%E7%9A%84%E7%BC%93%E5%AD%98%E8%AE%BE%E7%BD%AE%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E6%98%AF%E5%85%A5%E5%8F%A3HTML%E6%96%87%E4%BB%B6CACHE-CONTROL%20%E8%AE%BE%E7%BD%AENO-CACHE%2C%E5%85%B6%E4%BB%96%E6%96%87%E4%BB%B6%20MAX-AGE%2C%E8%BF%99%E6%A0%B7%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6%E4%BC%9A%E7%94%A8%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98%E4%BD%86%E6%AF%8F%E6%AC%A1%E9%83%BD%E5%8D%8F%E5%95%86%2C%E8%83%BD%E5%8F%8A%E6%97%B6%E6%9B%B4%E6%96%B0%2C%E8%80%8C%E5%85%B6%E4%BB%96%E8%B5%84%E6%BA%90%E4%B8%8D%E4%BC%9A%E5%8F%91%E8%AF%B7%20%E6%B1%82%2C%E8%83%BD%E5%87%8F%E5%B0%91%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%8E%8B%E5%8A%9B.%20%E5%A6%82%E6%9E%9C%E8%A6%81%E6%9B%B4%E6%96%B0%E7%9A%84%E8%AF%9D%2CHTML%E6%96%87%E4%BB%B6%E5%8D%8F%E5%95%86%E5%90%8E%E5%8F%91%E7%8E%B0%E6%9C%89%E6%9B%B4%E6%96%B0%E4%BC%9A%E4%B8%8B%E8%BD%BD%E6%96%B0HTML%2C%20%E8%BF%99%E6%97%B6%E5%80%99%E5%85%B3%E8%81%94%E4%BA%86%E5%85%B6%E4%BB%96HASH%E7%9A%84%20%E6%96%87%E4%BB%B6%2C%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%9A%E4%B8%8B%E8%BD%BD%E6%96%B0%E7%9A%84%2C%E4%B8%8D%E4%BC%9A%E8%B5%B0%E5%88%B0%E4%B9%8B%E5%89%8D%E6%96%87%E4%BB%B6%E7%9A%84%E7%BC%93%E5%AD%98.%20%E8%80%8C%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E5%B0%B1%E6%98%AF%E8%AE%BE%E7%BD%AE%E4%BA%86CACHE-CONTROL%E4%B8%BANO-CACHE%2C%20%E8%BF%99%E4%B8%AA%E8%A1%8C%E4%B8%BA%E8%A2%ABCHROME%20DEVTOOLS%E9%9A%90%E8%97%8F%E4%BA%86%2C%E7%94%A8%20CHARLES%20%20%E6%8A%93%E5%8C%85%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%88%B0.%20%E8%BF%98%E6%9C%89%E4%B8%AA%E6%B8%85%E7%A9%BA%E7%BC%93%E5%AD%98%E5%B9%B6%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%E7%9A%84%E5%8A%9F%E8%83%BD%2C%E9%82%A3%E4%B8%AA%E6%98%AF%E6%B8%85%E6%8E%89%E6%9C%AC%E5%9C%B0%E7%9A%84%E7%BC%93%E5%AD%98%E5%86%8D%E5%8E%BB%E5%8D%8F%E5%95%86%2C%E8%83%BD%E4%BF%9D%E8%AF%81%E4%B8%80%E5%AE%9A%E6%98%AF%E6%8B%BF%E5%88%B0%20%E6%9C%80%E6%96%B0%E7%9A%84%E8%B5%84%E6%BA%90.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A866.8532%2C%22y%22%3A99.90604%2C%22width%22%3A95.03455999999994%2C%22height%22%3A48.68399999999998%2C%22text%22%3A%22%E6%80%BB%E7%BB%93%22%7D%2C%7B%22x%22%3A89.97379%2C%22y%22%3A273.3938%2C%22width%22%3A1578.57381%2C%22height%22%3A44.629399999999976%2C%22text%22%3A%22%E7%BD%91%E7%AB%99%E7%9A%84%E7%BC%93%E5%AD%98%E8%AE%BE%E7%BD%AE%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E6%98%AF%E5%85%A5%E5%8F%A3HTML%E6%96%87%E4%BB%B6CACHE-CONTROL%20%E8%AE%BE%E7%BD%AENO-CACHE%2C%E5%85%B6%E4%BB%96%E6%96%87%E4%BB%B6%22%7D%2C%7B%22x%22%3A88.41711%2C%22y%22%3A340.96924%2C%22width%22%3A1610.45959%2C%22height%22%3A43.74468999999999%2C%22text%22%3A%22MAX-AGE%2C%E8%BF%99%E6%A0%B7%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6%E4%BC%9A%E7%94%A8%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98%E4%BD%86%E6%AF%8F%E6%AC%A1%E9%83%BD%E5%8D%8F%E5%95%86%2C%E8%83%BD%E5%8F%8A%E6%97%B6%E6%9B%B4%E6%96%B0%2C%E8%80%8C%E5%85%B6%E4%BB%96%E8%B5%84%E6%BA%90%E4%B8%8D%E4%BC%9A%E5%8F%91%E8%AF%B7%22%7D%2C%7B%22x%22%3A89.94473%2C%22y%22%3A411.57568%2C%22width%22%3A437.00966999999997%2C%22height%22%3A50.02259000000004%2C%22text%22%3A%22%E6%B1%82%2C%E8%83%BD%E5%87%8F%E5%B0%91%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%8E%8B%E5%8A%9B.%22%7D%2C%7B%22x%22%3A90.0051%2C%22y%22%3A540.7259%2C%22width%22%3A1111.2062999999998%2C%22height%22%3A44.58489999999995%2C%22text%22%3A%22%E5%A6%82%E6%9E%9C%E8%A6%81%E6%9B%B4%E6%96%B0%E7%9A%84%E8%AF%9D%2CHTML%E6%96%87%E4%BB%B6%E5%8D%8F%E5%95%86%E5%90%8E%E5%8F%91%E7%8E%B0%E6%9C%89%E6%9B%B4%E6%96%B0%E4%BC%9A%E4%B8%8B%E8%BD%BD%E6%96%B0HTML%2C%22%7D%2C%7B%22x%22%3A1231.9874%2C%22y%22%3A541.9034%2C%22width%22%3A485.1559%2C%22height%22%3A42.22569999999996%2C%22text%22%3A%22%E8%BF%99%E6%97%B6%E5%80%99%E5%85%B3%E8%81%94%E4%BA%86%E5%85%B6%E4%BB%96HASH%E7%9A%84%22%7D%2C%7B%22x%22%3A92.12172%2C%22y%22%3A611.523%2C%22width%22%3A969.80858%2C%22height%22%3A46.535529999999994%2C%22text%22%3A%22%E6%96%87%E4%BB%B6%2C%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%9A%E4%B8%8B%E8%BD%BD%E6%96%B0%E7%9A%84%2C%E4%B8%8D%E4%BC%9A%E8%B5%B0%E5%88%B0%E4%B9%8B%E5%89%8D%E6%96%87%E4%BB%B6%E7%9A%84%E7%BC%93%E5%AD%98.%22%7D%2C%7B%22x%22%3A91.681946%2C%22y%22%3A740.7983%2C%22width%22%3A1148.6891540000001%2C%22height%22%3A43.8424%2C%22text%22%3A%22%E8%80%8C%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E5%B0%B1%E6%98%AF%E8%AE%BE%E7%BD%AE%E4%BA%86CACHE-CONTROL%E4%B8%BANO-CACHE%2C%22%7D%2C%7B%22x%22%3A1268.9072%2C%22y%22%3A742.93286%2C%22width%22%3A366.90639999999985%2C%22height%22%3A42.446289999999976%2C%22text%22%3A%22%E8%BF%99%E4%B8%AA%E8%A1%8C%E4%B8%BA%E8%A2%ABCHROME%22%7D%2C%7B%22x%22%3A90.51032%2C%22y%22%3A812.96155%2C%22width%22%3A800.94318%2C%22height%22%3A40.39255000000003%2C%22text%22%3A%22DEVTOOLS%E9%9A%90%E8%97%8F%E4%BA%86%2C%E7%94%A8%20CHARLES%20%20%E6%8A%93%E5%8C%85%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%88%B0.%22%7D%2C%7B%22x%22%3A89.98071%2C%22y%22%3A940.8374%2C%22width%22%3A1615.63759%2C%22height%22%3A46.646799999999985%2C%22text%22%3A%22%E8%BF%98%E6%9C%89%E4%B8%AA%E6%B8%85%E7%A9%BA%E7%BC%93%E5%AD%98%E5%B9%B6%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%E7%9A%84%E5%8A%9F%E8%83%BD%2C%E9%82%A3%E4%B8%AA%E6%98%AF%E6%B8%85%E6%8E%89%E6%9C%AC%E5%9C%B0%E7%9A%84%E7%BC%93%E5%AD%98%E5%86%8D%E5%8E%BB%E5%8D%8F%E5%95%86%2C%E8%83%BD%E4%BF%9D%E8%AF%81%E4%B8%80%E5%AE%9A%E6%98%AF%E6%8B%BF%E5%88%B0%22%7D%2C%7B%22x%22%3A91.07991%2C%22y%22%3A1011.86926%2C%22width%22%3A224.03189000000003%2C%22height%22%3A40.89693999999997%2C%22text%22%3A%22%E6%9C%80%E6%96%B0%E7%9A%84%E8%B5%84%E6%BA%90.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%232a2a2a%22%2C%22id%22%3A%22u68e95491%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ua38c0518" id="ua38c0518"><span data-lake-id="udcecdf9b" id="udcecdf9b">​</span><br></p><p data-lake-id="ub94dad49" id="ub94dad49"><br></p><p data-lake-id="u6a814c7b" id="u6a814c7b"><br></p><p data-lake-id="u09211d92" id="u09211d92"><br></p><p data-lake-id="u3bdb8fda" id="u3bdb8fda"><br></p><p data-lake-id="u8d86cb7e" id="u8d86cb7e"><span data-lake-id="u58ba27dd" id="u58ba27dd">​</span><br></p>`,body_draft_lake:`<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><p data-lake-id="uc639ae40" id="uc639ae40"><br></p><h2 data-lake-id="XRITI" id="XRITI"><span data-lake-id="u89460c1a" id="u89460c1a">1、请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]</span></h2><p data-lake-id="u5bacb63b" id="u5bacb63b"><br></p><p data-lake-id="u3f099937" id="u3f099937"><strong><u><span data-lake-id="u1080d088" id="u1080d088">记住，补齐即可，然后再去掉</span></u></strong></p><p data-lake-id="u254e5cc0" id="u254e5cc0"><strong><u><span data-lake-id="uce97942c" id="uce97942c">​</span></u></strong><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%E8%AF%B7%E6%8A%8A%E4%BF%A9%E4%B8%AA%E6%95%B0%E7%BB%84%20%20%20%5BA1%2C%20A2%2C%20B1%2C%20B2%2C%20C1%2C%20C2%2C%20D1%2C%20D2%5D%20%E5%92%8C%20%5BA%2C%20B%2C%20C%2C%20D%5D%EF%BC%8C%5Cn%20*%20%E5%90%88%E5%B9%B6%E4%B8%BA%20%5BA1%2C%20A2%2C%20A%2C%20B1%2C%20B2%2C%20B%2C%20C1%2C%20C2%2C%20C%2C%20D1%2C%20D2%2C%20D%5D%5Cn%20*%20*%2F%5Cn%5Cnlet%20arr1%20%3D%20%5B'A1'%2C%20'A2'%2C%20'B1'%2C%20'B2'%2C%20'C1'%2C%20'C2'%2C%20'D1'%2C%20'D2'%5D%3B%5Cnlet%20arr2%20%3D%20%5B'A'%2C%20'B'%2C%20'C'%2C%20'D'%5D%5Cn%5Cn%2F%2F%20%E8%BF%99%E4%B8%AA%E6%80%9D%E8%B7%AF%E4%B8%8D%E9%94%99%5Cn%5Cnlet%20a2%20%3D%20arr2.map((item)%20%3D%3E%20%7B%5Cn%20%20return%20item%20%2B%203%5Cn%7D)%5Cn%5Cnfunction%20merge(arr1%2C%20arr2)%20%7B%5Cn%20%20let%20arr%20%3D%20%5B...arr1%2C%20...a2%5D%3B%5Cn%20%20arr%20%3D%20arr.sort()%3B%5Cn%20%20%2F%2F%20%E4%B8%8B%E9%9D%A2%E6%9D%A5%E4%B8%AA%E5%8F%8C%E9%87%8D%E5%BE%AA%E7%8E%AF%E5%B0%B1%E8%A1%8C%E4%BA%86%5Cn%20%20return%20arr%3B%5Cn%7D%5Cn%5Cnconsole.log(merge(arr1%2C%20arr2))%3B%5Cn%2F%2F%20%5B%5Cn%2F%2F%20%20%20%20%20'A1'%2C%20'A2'%2C%20'A3'%2C%5Cn%2F%2F%20%20%20%20%20'B1'%2C%20'B2'%2C%20'B3'%2C%5Cn%2F%2F%20%20%20%20%20'C1'%2C%20'C2'%2C%20'C3'%2C%5Cn%2F%2F%20%20%20%20%20'D1'%2C%20'D2'%2C%20'D3'%5Cn%2F%2F%20%5D%5Cn%5Cn%2F%2F%20%E9%81%8D%E5%8E%86todo%20%E5%9C%A8%E6%8A%8A%20%20X3%20%E6%8D%A2%E6%88%90%20X%20%E5%8D%B3%E5%8F%AF%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22OhSgI%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u83876247" id="u83876247"><span data-lake-id="ucca4796d" id="ucca4796d">\0</span></p><p data-lake-id="u52c88924" id="u52c88924"><span data-lake-id="ub0286c65" id="ub0286c65">一样，这里也可以实现一个</span><code data-lake-id="uf76e8f01" id="uf76e8f01"><span data-lake-id="ua475b542" id="ua475b542">fn(a,b)</span></code><span data-lake-id="ubdd29c79" id="ubdd29c79"> 只要比较前后两个变量</span><code data-lake-id="u19f8fac3" id="u19f8fac3"><span data-lake-id="ue6e5492a" id="ue6e5492a">a</span></code><span data-lake-id="u97d8656a" id="u97d8656a">、</span><code data-lake-id="u6b54ef58" id="u6b54ef58"><span data-lake-id="u689499f4" id="u689499f4">b</span></code><span data-lake-id="u31d4d074" id="u31d4d074">即可</span></p><h2 data-lake-id="yBdeS" id="yBdeS"><span data-lake-id="ubce09634" id="ubce09634">2、说一说</span><code data-lake-id="u46d8426a" id="u46d8426a"><span data-lake-id="u509f9c0a" id="u509f9c0a">css</span></code><span data-lake-id="ue42bb9ba" id="ue42bb9ba">与</span><code data-lake-id="ub0e513d6" id="ub0e513d6"><span data-lake-id="u0d987ca8" id="u0d987ca8">js</span></code><span data-lake-id="u555add55" id="u555add55">的压缩原理</span></h2><p data-lake-id="u4c169167" id="u4c169167"><span data-lake-id="ud3ac4f91" id="ud3ac4f91">1、js的压缩原理：</span></p><p data-lake-id="ueb681c36" id="ueb681c36" style="text-indent: 2em"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1655010106654-3cd1a4c7-55dd-44af-9b74-477309b37dd1.png%22%2C%22taskId%22%3A%22u882a16ce-cd24-4401-80bb-f5a014dbe46%22%2C%22clientId%22%3A%22ud7a0da2b-ab60-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A399.984375%2C%22height%22%3A122%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A52645%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A752%2C%22originHeight%22%3A230%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%221.%E5%B0%86CODE%E8%BD%AC%E6%8D%A2%E6%88%90AST%202%E5%B0%86AST%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%2C%20%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%B0%8F%E7%9A%84AST%20%E5%B0%86%E6%96%B0%E7%94%9F%E6%88%90%E7%9A%84AST%E5%86%8D%E8%BD%AC%E5%8C%96%E6%88%90CODE%203.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A50.961323%2C%22y%22%3A43.79129%2C%22width%22%3A301.761677%2C%22height%22%3A29.192500000000003%2C%22text%22%3A%221.%E5%B0%86CODE%E8%BD%AC%E6%8D%A2%E6%88%90AST%22%7D%2C%7B%22x%22%3A49.669003%2C%22y%22%3A107.16038%2C%22width%22%3A245.70431699999997%2C%22height%22%3A29.52797000000001%2C%22text%22%3A%222%E5%B0%86AST%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%2C%22%7D%2C%7B%22x%22%3A312.93515%2C%22y%22%3A107.81997%2C%22width%22%3A254.46744999999999%2C%22height%22%3A28.637690000000006%2C%22text%22%3A%22%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%B0%8F%E7%9A%84AST%22%7D%2C%7B%22x%22%3A93.34841%2C%22y%22%3A164.61133%2C%22width%22%3A379.01779%2C%22height%22%3A29.032420000000002%2C%22text%22%3A%22%E5%B0%86%E6%96%B0%E7%94%9F%E6%88%90%E7%9A%84AST%E5%86%8D%E8%BD%AC%E5%8C%96%E6%88%90CODE%22%7D%2C%7B%22x%22%3A50.65665%2C%22y%22%3A167.94359%2C%22width%22%3A26.625590000000003%2C%22height%22%3A24.09387000000001%2C%22text%22%3A%223.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2332332d%22%2C%22id%22%3A%22u6a719366%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u6c87d401" id="u6c87d401"><span data-lake-id="u375af9ea" id="u375af9ea">2、Tree-Shaking，主要还是针对顶层，</span></p><ul list="ue6aaa53d"><li fid="u190d42a2" data-lake-id="udadfd090" id="udadfd090"><code data-lake-id="u193327aa" id="u193327aa"><span data-lake-id="u91889c6c" id="u91889c6c" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">rollup</span></code><span data-lake-id="u8043999d" id="u8043999d" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">只处理函数和顶层的</span><code data-lake-id="ue2d62c36" id="ue2d62c36"><span data-lake-id="u21d02194" id="u21d02194" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">import/export</span></code><span data-lake-id="u6864e0bb" id="u6864e0bb" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">变量，不能把没用到的类的方法消除掉</span></li><li fid="u190d42a2" data-lake-id="u86c3be94" id="u86c3be94"><code data-lake-id="u9fff79ef" id="u9fff79ef"><span data-lake-id="u466727b0" id="u466727b0" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">javascript</span></code><span data-lake-id="uefc4e147" id="uefc4e147" class="lake-fontsize-12" style="color: rgb(51, 51, 51)">动态语言的特性使得静态分析比较困难</span></li></ul><p data-lake-id="u19f5f22f" id="u19f5f22f"><br></p><p data-lake-id="ub0525928" id="ub0525928"><span data-lake-id="u5513c3d5" id="u5513c3d5">3、</span><code data-lake-id="u1c3cc213" id="u1c3cc213"><span data-lake-id="ud61c58a6" id="ud61c58a6">CSS</span></code><span data-lake-id="u578900ce" id="u578900ce"> 压缩比较简单，就是将多余的回车</span><code data-lake-id="u80863562" id="u80863562"><span data-lake-id="u46da740f" id="u46da740f">换行符</span></code><span data-lake-id="u5f8b132e" id="u5f8b132e">与</span><code data-lake-id="u1a28006a" id="u1a28006a"><span data-lake-id="udf8322ce" id="udf8322ce">注释</span></code><span data-lake-id="u1a4cd884" id="u1a4cd884"> 去掉</span></p><p data-lake-id="u7d54ed3b" id="u7d54ed3b"><span data-lake-id="u3b1eb825" id="u3b1eb825">​</span><br></p><h2 data-lake-id="AIJ6R" id="AIJ6R"><span data-lake-id="udc489fa3" id="udc489fa3">3、说说 webpack 的打包原理</span></h2><p data-lake-id="ud114395f" id="ud114395f"><br></p><h2 data-lake-id="WHBdf" id="WHBdf"><span data-lake-id="u3b8cdbd8" id="u3b8cdbd8">4、说说几种攻击手段，如</span><code data-lake-id="u9810e25f" id="u9810e25f"><span data-lake-id="u2fcb92f6" id="u2fcb92f6">xss</span></code><span data-lake-id="u4d9a6f33" id="u4d9a6f33">跨站脚本（Cross-site scripting）等</span></h2><p data-lake-id="uc0e3fbe9" id="uc0e3fbe9"><br></p><h1 data-lake-id="gUE3o" id="gUE3o" collapsed="true"><span data-lake-id="uc56ce538" id="uc56ce538">5、实现 classNames 库的能力</span></h1><p data-lake-id="u14d92006" id="u14d92006"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F*************************************************%5Cn%20*%20%E5%AE%9E%E7%8E%B0%20classNames%20%E5%BA%93%E7%9A%84%E8%83%BD%E5%8A%9B%5Cn%20*%5Cn%20*%20classNames('BFE'%2C%20'dev'%2C%20100)%5Cn%20*%20%2F%2F%20'BFE%20dev%20100'%5Cn%20*%5Cn%20*%20classNames(%5Cn%20*%20%20%20null%2C%20undefined%2C%20Symbol()%2C%201n%2C%20true%2C%20false%5Cn%20*%20)%5Cn%20*%20%2F%2F%20''%5Cn%20*%5Cn%20*%20const%20obj%20%3D%20new%20Map()%5Cn%20*%20obj.cool%20%3D%20'!'%5Cn%20*%5Cn%20*%20classNames(%7BBFE%3A%20%5B%5D%2C%20dev%3A%20true%2C%20is%3A%203%7D%2C%20obj)%5Cn%20*%20%2F%2F%20'BFE%20dev%20is%20cool'%5Cn%20*%5Cn%20*%20classNames(%5B'BFE'%2C%20%5B%7Bdev%3A%20true%7D%2C%20%5B'is'%2C%20%5Bobj%5D%5D%5D%5D)%5Cn%20*%20%2F%2F%20'BFE%20dev%20is%20cool'%5Cn%20************************************************%2F%5Cn%5Cn%5Cnfunction%20classNames(...args)%20%7B%5Cn%20%20%20%20let%20arr%20%3D%20%5B%5D%3B%5Cn%20%20%20%20for%20(let%20item%20of%20args)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E5%BF%85%E9%A1%BBif%2Felse%20if%20%2C%E4%B8%80%E4%B8%AA%E7%BB%8F%E9%AA%8C%E6%98%AF%E5%B0%BD%E9%87%8F%E8%BF%99%E4%B9%88%E5%86%99%EF%BC%8C%E5%88%AB%E5%88%86%E5%BC%80%EF%BC%8C%E4%B8%8D%E7%84%B6%E5%8F%AF%E8%83%BD%E4%BC%9A%E9%87%8D%E5%A4%8D%E5%91%BD%E4%B8%AD%5Cn%20%20%20%20%20%20%20%20if%20(typeof%20item%20%3D%3D%3D%20%5C%22string%5C%22%20%7C%7C%20typeof%20item%20%3D%3D%3D%20%5C%22number%5C%22)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20arr.push(item)%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(Array.isArray(item))%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E5%BD%BB%E5%BA%95%E6%89%93%E5%B9%B3%EF%BC%8C%E7%84%B6%E5%90%8E%E6%8A%8A%E5%AE%83%E6%94%BE%E5%88%B0args%E5%8F%82%E6%95%B0%E9%87%8C%E9%9D%A2%E5%8E%BB%5Cn%20%20%20%20%20%20%20%20%20%20%20%20item.flat(Infinity).forEach((it)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20args.push(it)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E8%BF%99%E9%87%8C%E9%9C%80%E8%A6%81%E8%BF%87%E6%BB%A4%E6%8E%89%20null%5Cn%20%20%20%20%20%20%20%20else%20if%20(typeof%20item%20%3D%3D%3D%20%5C%22object%5C%22%20%26%26%20item%20!%3D%3D%20null)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20Object.entries(item).forEach((%5Bk%2C%20v%5D)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20arr.push(k)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%5Cn%20%20%20%20return%20arr%3B%5Cn%5Cn%7D%5Cn%5Cn%5Cnconsole.log(%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20BigInt%20%E5%8F%AF%E4%BB%A5%E8%A1%A8%E7%A4%BA%E4%BB%BB%E6%84%8F%E5%A4%A7%E7%9A%84%E6%95%B4%E6%95%B0%E3%80%821n%E6%98%AF%E4%B8%80%E7%A7%8D%E8%A1%A8%E8%BE%BE%E6%96%B9%E5%BC%8F%EF%BC%8C%201n%20%3D%3D%201%20%E7%9B%B8%E7%AD%89%5Cn%20%20%20%20classNames(%5Cn%20%20%20%20%20%20%20%20null%2C%20undefined%2C%20Symbol()%2C%201n%2C%20true%2C%20false%5Cn%20%20%20%20)%20%7C%7C%20''%5Cn)%5Cn%5Cnconsole.log(%5Cn%20%20%20%20classNames('BFE'%2C%20'dev'%2C%20100)%5Cn)%5Cn%5Cn%5Cnconst%20obj%20%3D%20new%20Map()%5Cnobj.cool%20%3D%20'!'%5Cn%5Cn%2F%2F%20'BFE%20dev%20is%20cool'%5Cnconsole.log(%5Cn%20%20%20%20classNames(%7BBFE%3A%20%5B%5D%2C%20dev%3A%20true%2C%20is%3A%203%7D%2C%20obj)%5Cn)%5Cn%5Cnconsole.log(%5Cn%20%20%20%20classNames(%5B'BFE'%2C%20%5B%7Bdev%3A%20true%7D%2C%20%5B'is'%2C%20%5Bobj%5D%5D%5D%5D)%5Cn)%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B24%2C26%2C28%2C35%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22HK0ks%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ua517e2e2" id="ua517e2e2"><br></p><h1 data-lake-id="hCCOo" id="hCCOo"><span data-lake-id="u69f0d13d" id="u69f0d13d">6、SKU全排列问题</span></h1><p data-lake-id="ud7bfd0a7" id="ud7bfd0a7"><br></p><p data-lake-id="u17a64e95" id="u17a64e95"><span data-lake-id="ube3dc69b" id="ube3dc69b">典型的全排列问题，使用回溯算法，注意是三个参数 </span><code data-lake-id="u17340d11" id="u17340d11"><span data-lake-id="u13b08e3d" id="u13b08e3d"> (arr, track, index)</span></code></p><p data-lake-id="uc529897e" id="uc529897e"><span data-lake-id="u18fa48b3" id="u18fa48b3">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F***%5Cn%20*%20%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%5Cn%20*%20sku%E5%85%A8%E6%8E%92%E5%88%97%5Cn%20*%20*%2F%5Cnlet%20names%20%3D%20%5B%5C%22iPhone%5C%22%2C%20'iPhone%20xs'%5D%5Cnlet%20colors%20%3D%20%5B'%E9%BB%91%E8%89%B2'%2C%20'%E7%99%BD%E8%89%B2'%5D%5Cnlet%20storages%20%3D%20%5B'64g'%2C%20'256g'%5D%5Cn%5Cn%5Cnlet%20combine%20%3D%20function%20(...chunks)%20%7B%5Cn%20%20%20%20let%20res%20%3D%20%5B%5D%3B%5Cn%20%20%20%20%2F**%5Cn%20%20%20%20%20*%20%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0%5Cn%20%20%20%20%20*%20*%2F%5Cn%20%20%20%20const%20backtrack%20%3D%20(arr%2C%20track%2C%20index)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20let%20options%20%3D%20arr%5Bindex%5D%3B%5Cn%20%20%20%20%20%20%20%20if%20(track.length%20%3D%3D%3D%203)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20res.push(%5B...track%5D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20options.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%80%89%E6%8B%A9%5Cn%20%20%20%20%20%20%20%20%20%20%20%20track.push(options%5Bi%5D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20backtrack(chunks%2C%20track%2C%20index%20%2B%201)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%8F%96%E6%B6%88%E9%80%89%E6%8B%A9%5Cn%20%20%20%20%20%20%20%20%20%20%20%20track.pop()%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20backtrack(chunks%2C%20%5B%5D%2C%200)%5Cn%20%20%20%20return%20res%5Cn%7D%5Cn%5Cnconsole.log(combine(names%2C%20colors%2C%20storages))%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B23%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22EJIOP%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u8daf7a4d" id="u8daf7a4d"><span data-lake-id="ubf89746e" id="ubf89746e">​</span><br></p><h1 data-lake-id="RAxZF" id="RAxZF"><span data-lake-id="ud0c4f3be" id="ud0c4f3be">7、说说 CSRF 的原理及如何防范</span></h1><p data-lake-id="u292efd80" id="u292efd80"><span data-lake-id="u109e7c4b" id="u109e7c4b">参考：</span><a href="https://juejin.cn/post/7008171429845811207" data-lake-id="ub6dbb948" id="ub6dbb948"><span data-lake-id="u907ac038" id="u907ac038">CSRF详解 - 掘金</span></a></p><ul list="uaebdabfc"><li fid="u47615265" data-lake-id="ue69db99d" id="ue69db99d"><span data-lake-id="u37229444" id="u37229444">首先肯定是跨域访问，比如</span><code data-lake-id="u3b48ab81" id="u3b48ab81"><span data-lake-id="u0fbf2bdc" id="u0fbf2bdc">script/img/a/form</span></code><span data-lake-id="ub1ff9b37" id="ub1ff9b37">提交等</span></li><li fid="u47615265" data-lake-id="u81504f57" id="u81504f57"><span data-lake-id="u5f2b7645" id="u5f2b7645">不让</span><code data-lake-id="u51094510" id="u51094510"><span data-lake-id="ua68f68bd" id="ua68f68bd">第三方网站</span></code><span data-lake-id="uf8e67a3b" id="uf8e67a3b">直接访问</span></li></ul><p data-lake-id="u967dfff0" id="u967dfff0"><span data-lake-id="ucf4e0bac" id="ucf4e0bac">​</span><br></p><h1 data-lake-id="OvsiH" id="OvsiH"><span data-lake-id="u9c6dd023" id="u9c6dd023">8、说说</span><code data-lake-id="u120e15ab" id="u120e15ab"><span data-lake-id="u6a987f4d" id="u6a987f4d">Flex</span></code><span data-lake-id="u380229f9" id="u380229f9">布局的一些属性及细节</span></h1><p data-lake-id="ud13f5201" id="ud13f5201"><span data-lake-id="u952f9bce" id="u952f9bce">​</span><br></p><ul list="ud05898b3"><li fid="u0325ac03" data-lake-id="ud7db5568" id="ud7db5568"><span data-lake-id="ub734a5cd" id="ub734a5cd">flex-grow   属性  定义 子元素或者子容器 的放大比例，默认为 </span><code data-lake-id="ucccf2f5e" id="ucccf2f5e"><span data-lake-id="u44912ed6" id="u44912ed6">0</span></code><span data-lake-id="ud3849a58" id="ud3849a58"> ，即 如果存在剩余空间，也不放大。</span></li><li fid="u0325ac03" data-lake-id="u0769f8fb" id="u0769f8fb"><span data-lake-id="u72149a93" id="u72149a93">flex-shrink   属性  定义了项目的缩小比例，默认为</span><code data-lake-id="ufd58d67f" id="ufd58d67f"><span data-lake-id="u40370f35" id="u40370f35">1</span></code><span data-lake-id="uf190d50c" id="uf190d50c">，即如果空间不足，该项目将缩小。</span></li><li fid="u0325ac03" data-lake-id="ueea6b95e" id="ueea6b95e"><code data-lake-id="u7eee8392" id="u7eee8392"><span data-lake-id="u7d5a9b41" id="u7d5a9b41">flex: 1 </span></code><span data-lake-id="u0203983d" id="u0203983d">默认值是什么 ？ </span></li></ul><p data-lake-id="uac87c668" id="uac87c668"><span data-lake-id="u6204e256" id="u6204e256">​</span><br></p><p data-lake-id="u4d5f3005" id="u4d5f3005"><span data-lake-id="u81bdd4d3" id="u81bdd4d3">第三个参数，即 </span><code data-lake-id="ud4a122a5" id="ud4a122a5"><span style="color: #E8323C"><u><span data-lake-id="u51811df2" id="u51811df2">项目本身的大小</span></u></span></code><span style="color: #E8323C"><u><span data-lake-id="u1b654956" id="u1b654956"> </span></u></span></p><p data-lake-id="u3fe37be4" id="u3fe37be4"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671259398441-7c3600a0-a6be-4103-bb5d-1642e9bb29bf.png%22%2C%22taskId%22%3A%22u3f496446-b3db-4a07-b074-a00043d22f4%22%2C%22clientId%22%3A%22u2f8a759e-27f4-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A726.3636206201289%2C%22height%22%3A268%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A145478%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1598%2C%22originHeight%22%3A590%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22FLEX%3A1%3BFLEX%3A11AUTO%3B%20%E8%BF%99%E6%98%AF%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%2C%E8%AF%A6%E8%A7%81MDN%2C%E5%AE%83%E8%BF%98%E6%9C%89%E5%8F%A6%E5%A4%96%E4%B8%A4%E7%A7%8D%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%2C%E5%88%86%E5%88%AB%E6%98%AFINITIAL(01AUTO)%E5%92%8CNONE(00AUTO)%20%2C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-GROW%E5%AE%9A%E4%B9%89%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%94%BE%E5%A4%A7%E6%AF%94%E4%BE%8B%2C%E9%BB%98%E8%AE%A4%E4%B8%BA0%2C%E5%8D%B3%E5%A6%82%E6%9E%9C%E5%AD%98%E5%9C%A8%E5%89%A9%E4%BD%99%E7%A9%BA%E9%97%B4%2C%E4%B9%9F%E4%B8%8D%E6%94%BE%E5%A4%A7%20%2C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-SHRINK%E5%AE%9A%E4%B9%89%E4%BA%86%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%2C%E9%BB%98%E8%AE%A4%E4%B8%BA1%2C%E5%8D%B3%E5%A6%82%E6%9E%9C%E7%A9%BA%E9%97%B4%E4%B8%8D%E8%B6%B3%2C%E8%AF%A5%E9%A1%B9%E7%9B%AE%E5%B0%86%E7%BC%A9.%20%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-BASIS%E7%BB%99%E4%B8%8A%E9%9D%A2%E4%B8%A4%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%88%86%E9%85%8D%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%E4%B9%8B%E5%89%8D%2C%E8%AE%A1%E7%AE%97%E9%A1%B9%E7%9B%AE%E6%98%AF%E5%90%A6%E6%9C%89%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%2C%E9%BB%98%E8%AE%A4%20%E5%80%BC%E4%B8%BAAUTO%2C%E5%8D%B3%E9%A1%B9%E7%9B%AE%E6%9C%AC%E8%BA%AB%E7%9A%84%E5%A4%A7%E5%B0%8F%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A123.64692%2C%22y%22%3A47.602596%2C%22width%22%3A378.24911%2C%22height%22%3A38.355290000000004%2C%22text%22%3A%22FLEX%3A1%3BFLEX%3A11AUTO%3B%22%7D%2C%7B%22x%22%3A87.4813%2C%22y%22%3A143.29091%2C%22width%22%3A1343.7592000000002%2C%22height%22%3A37.825590000000005%2C%22text%22%3A%22%E8%BF%99%E6%98%AF%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%2C%E8%AF%A6%E8%A7%81MDN%2C%E5%AE%83%E8%BF%98%E6%9C%89%E5%8F%A6%E5%A4%96%E4%B8%A4%E7%A7%8D%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%2C%E5%88%86%E5%88%AB%E6%98%AFINITIAL(01AUTO)%E5%92%8CNONE(00AUTO)%22%7D%2C%7B%22x%22%3A113.74047%2C%22y%22%3A235.44934%2C%22width%22%3A1317.39253%2C%22height%22%3A37.53026%2C%22text%22%3A%22%2C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-GROW%E5%AE%9A%E4%B9%89%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%94%BE%E5%A4%A7%E6%AF%94%E4%BE%8B%2C%E9%BB%98%E8%AE%A4%E4%B8%BA0%2C%E5%8D%B3%E5%A6%82%E6%9E%9C%E5%AD%98%E5%9C%A8%E5%89%A9%E4%BD%99%E7%A9%BA%E9%97%B4%2C%E4%B9%9F%E4%B8%8D%E6%94%BE%E5%A4%A7%22%7D%2C%7B%22x%22%3A115.33157%2C%22y%22%3A284.16473%2C%22width%22%3A1329.29933%2C%22height%22%3A39.02999999999997%2C%22text%22%3A%22%2C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-SHRINK%E5%AE%9A%E4%B9%89%E4%BA%86%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%2C%E9%BB%98%E8%AE%A4%E4%B8%BA1%2C%E5%8D%B3%E5%A6%82%E6%9E%9C%E7%A9%BA%E9%97%B4%E4%B8%8D%E8%B6%B3%2C%E8%AF%A5%E9%A1%B9%E7%9B%AE%E5%B0%86%E7%BC%A9.%22%7D%2C%7B%22x%22%3A119.51061%2C%22y%22%3A391.45447%2C%22width%22%3A1324.72329%2C%22height%22%3A40.17424999999997%2C%22text%22%3A%22%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0%E8%A1%A8%E7%A4%BA%3AFLEX-BASIS%E7%BB%99%E4%B8%8A%E9%9D%A2%E4%B8%A4%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%88%86%E9%85%8D%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%E4%B9%8B%E5%89%8D%2C%E8%AE%A1%E7%AE%97%E9%A1%B9%E7%9B%AE%E6%98%AF%E5%90%A6%E6%9C%89%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%2C%E9%BB%98%E8%AE%A4%22%7D%2C%7B%22x%22%3A118.68481%2C%22y%22%3A440.76703%2C%22width%22%3A416.35865%2C%22height%22%3A40.110690000000034%2C%22text%22%3A%22%E5%80%BC%E4%B8%BAAUTO%2C%E5%8D%B3%E9%A1%B9%E7%9B%AE%E6%9C%AC%E8%BA%AB%E7%9A%84%E5%A4%A7%E5%B0%8F%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23c4c0c0%22%2C%22id%22%3A%22ud915898b%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><h1 data-lake-id="qQz6v" id="qQz6v"><span data-lake-id="u9fac917c" id="u9fac917c">9、js中的new的实现逻辑</span></h1><p data-lake-id="u7429bfdc" id="u7429bfdc"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671259489678-ceff838c-e893-46b1-815a-00d68abe11a0.png%22%2C%22taskId%22%3A%22u07b09d23-6840-45be-824c-6562a51a9b2%22%2C%22clientId%22%3A%22u2f8a759e-27f4-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A733.636347735224%2C%22height%22%3A316%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A106783%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1614%2C%22originHeight%22%3A696%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E5%86%8D%E6%9D%A5%E6%9C%89%E5%BC%9F-%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%2C%E4%B9%9F%E6%98%AF%E6%9C%80%E5%90%8E%E4%B8%80%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%3A%20%2F%2F%20%E7%AC%AC%E4%BA%8C%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%20FUNCTION%20OBJECTFACTORY()%20%7B%20%20VAR%20OBJ%20%E4%B8%89%20NEW%20OBJECT()%2C%20CONSTRUCTOR%20-%20%5B%5D.SHIFT.CALL(ARGUMENTS)%3B%20CONSTRUCTOR.PROTOTYPE%3B%20OBJ...PROTO%20%20VAR%20RET%20-%20CONSTRUCTOR.APPLY(OBJ%2C%20A%20BJ%2CARGUMENTS)%3B%20RETURN%20TYPEOF%20RET%20---%20'OBJECT'%20%3F%20RET%20%3A%20OBJ%3B%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A198.85033%2C%22y%22%3A31.722397%2C%22width%22%3A542.11897%2C%22height%22%3A23.760399%2C%22text%22%3A%22%E5%86%8D%E6%9D%A5%E6%9C%89%E5%BC%9F-%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%2C%E4%B9%9F%E6%98%AF%E6%9C%80%E5%90%8E%E4%B8%80%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%3A%22%7D%2C%7B%22x%22%3A236.70915%2C%22y%22%3A129.61676%2C%22width%22%3A181.21797%2C%22height%22%3A26.81219999999999%2C%22text%22%3A%22%2F%2F%20%E7%AC%AC%E4%BA%8C%E7%89%88%E7%9A%84%E4%BB%A3%E7%A0%81%22%7D%2C%7B%22x%22%3A230.56453%2C%22y%22%3A163.36821%2C%22width%22%3A378.78013999999996%2C%22height%22%3A33.10830999999999%2C%22text%22%3A%22FUNCTION%20OBJECTFACTORY()%20%7B%22%7D%2C%7B%22x%22%3A286.1318%2C%22y%22%3A234.45186%2C%22width%22%3A332.70129999999995%2C%22height%22%3A30.043679999999995%2C%22text%22%3A%22%20VAR%20OBJ%20%E4%B8%89%20NEW%20OBJECT()%2C%22%7D%2C%7B%22x%22%3A284.75345%2C%22y%22%3A301.74362%2C%22width%22%3A565.51999%2C%22height%22%3A32.48019999999997%2C%22text%22%3A%22CONSTRUCTOR%20-%20%5B%5D.SHIFT.CALL(ARGUMENTS)%3B%22%7D%2C%7B%22x%22%3A519.31824%2C%22y%22%3A374.6357%2C%22width%22%3A317.9932600000001%2C%22height%22%3A26.63346999999999%2C%22text%22%3A%22CONSTRUCTOR.PROTOTYPE%3B%22%7D%2C%7B%22x%22%3A284.96765%2C%22y%22%3A375.3759%2C%22width%22%3A166.35694999999998%2C%22height%22%3A23.833730000000003%2C%22text%22%3A%22OBJ...PROTO%22%7D%2C%7B%22x%22%3A284.66702%2C%22y%22%3A443.5246%2C%22width%22%3A482.0288800000001%2C%22height%22%3A32.02769999999998%2C%22text%22%3A%22%20VAR%20RET%20-%20CONSTRUCTOR.APPLY(OBJ%2C%20A%22%7D%2C%7B%22x%22%3A712.6017%2C%22y%22%3A444.18362%2C%22width%22%3A211.3327999999999%2C%22height%22%3A28.973379999999963%2C%22text%22%3A%22BJ%2CARGUMENTS)%3B%22%7D%2C%7B%22x%22%3A288.14233%2C%22y%22%3A514.7592%2C%22width%22%3A621.99007%2C%22height%22%3A32.29370000000006%2C%22text%22%3A%22RETURN%20TYPEOF%20RET%20---%20'OBJECT'%20%3F%20RET%20%3A%20OBJ%3B%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2311151a%22%2C%22id%22%3A%22u6ed89974%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u0289ed3d" id="u0289ed3d"><br></p><p data-lake-id="u217a888e" id="u217a888e"><span data-lake-id="ua81c3639" id="ua81c3639">这一版更好理解：</span></p><p data-lake-id="u332db18e" id="u332db18e"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671259565612-49bd4a7f-d35e-4c23-aeae-80a51d30e438.png%22%2C%22taskId%22%3A%22u963a01b9-e15b-41c2-b9f4-92ef3118933%22%2C%22clientId%22%3A%22u2f8a759e-27f4-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A741.818165739706%2C%22height%22%3A254%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A149733%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1632%2C%22originHeight%22%3A558%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%2F%E5%9B%A0%E4%B8%BANEW%E6%98%AF%E5%85%B3%E9%94%AE%E5%AD%97%2C%E6%88%91%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E5%BC%8F%E6%9D%A5%E5%AE%9E%E7%8E%B0%2C%E5%8F%AF%E4%BB%A5%E5%B0%86%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%92%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%E4%BC%A0%E5%85%A5%20FUNCTION%20MYNEW(FN%2C....ARGS)%7B%20%2F1.%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%A9%BA%E5%AF%B9%E8%B1%A1%2C%E5%B9%B6%E5%B0%86%E5%AF%B9%E8%B1%A1%E7%9A%84_PROTO_%E6%8C%87%E5%90%91%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84PROTOTOTYPE%E8%BF%99%E9%87%8C%E6%89%8B%20%E8%BF%99%E9%87%8C%E6%88%91%E4%B8%A4%E6%AD%A5%E4%B8%80%E8%B5%B7%E5%81%9A%E4%BA%86%20CONST%20OBIECT.CREATEATE(FN.PROTOTVPE)%3B%20%2F2.%E5%B0%86%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84THIS%E6%8C%87%E5%90%91OBJ%2C%E6%89%A7%E8%A1%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BB%A3%E7%A0%81%2C%E8%8E%B7%E5%8F%96%E8%BF%94%E5%9B%9E%E5%80%BC%20CONST%20RES-FN.APPLY(OBJ%2CARQS)%3B%20%2F%2F3.%E5%88%A4%E6%96%AD%E8%BF%94%E5%9B%9E%E5%80%BC%E7%B1%BB%E5%9E%8B%20RETURN%20RES%20INSTANCEOF%20OBJECT%20%3FRES%3AOBJ%20%E5%AD%90%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A242.72322%2C%22y%22%3A88.75177%2C%22width%22%3A1056.19898%2C%22height%22%3A35.43856000000001%2C%22text%22%3A%22%2F%E5%9B%A0%E4%B8%BANEW%E6%98%AF%E5%85%B3%E9%94%AE%E5%AD%97%2C%E6%88%91%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E5%BC%8F%E6%9D%A5%E5%AE%9E%E7%8E%B0%2C%E5%8F%AF%E4%BB%A5%E5%B0%86%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%92%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%E4%BC%A0%E5%85%A5%22%7D%2C%7B%22x%22%3A263.81973%2C%22y%22%3A134.36742%2C%22width%22%3A453.98440999999997%2C%22height%22%3A30.629649999999998%2C%22text%22%3A%22FUNCTION%20MYNEW(FN%2C....ARGS)%7B%22%7D%2C%7B%22x%22%3A309.39087%2C%22y%22%3A168.36322%2C%22width%22%3A1001.10313%2C%22height%22%3A45.20317%2C%22text%22%3A%22%2F1.%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%A9%BA%E5%AF%B9%E8%B1%A1%2C%E5%B9%B6%E5%B0%86%E5%AF%B9%E8%B1%A1%E7%9A%84_PROTO_%E6%8C%87%E5%90%91%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84PROTOTOTYPE%E8%BF%99%E9%87%8C%E6%89%8B%22%7D%2C%7B%22x%22%3A1251.6692%2C%22y%22%3A174.924%2C%22width%22%3A258.87189999999987%2C%22height%22%3A31.47032999999999%2C%22text%22%3A%22%E8%BF%99%E9%87%8C%E6%88%91%E4%B8%A4%E6%AD%A5%E4%B8%80%E8%B5%B7%E5%81%9A%E4%BA%86%22%7D%2C%7B%22x%22%3A311.7826%2C%22y%22%3A219.21971%2C%22width%22%3A632.8881%2C%22height%22%3A33.88115000000002%2C%22text%22%3A%22CONST%20OBIECT.CREATEATE(FN.PROTOTVPE)%3B%22%7D%2C%7B%22x%22%3A310.60342%2C%22y%22%3A257.19986%2C%22width%22%3A850.6016799999999%2C%22height%22%3A34.21301%2C%22text%22%3A%22%2F2.%E5%B0%86%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84THIS%E6%8C%87%E5%90%91OBJ%2C%E6%89%A7%E8%A1%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BB%A3%E7%A0%81%2C%E8%8E%B7%E5%8F%96%E8%BF%94%E5%9B%9E%E5%80%BC%22%7D%2C%7B%22x%22%3A311.4999%2C%22y%22%3A301.31836%2C%22width%22%3A486.37546999999995%2C%22height%22%3A37.89856000000003%2C%22text%22%3A%22CONST%20RES-FN.APPLY(OBJ%2CARQS)%3B%22%7D%2C%7B%22x%22%3A311.12146%2C%22y%22%3A341.96597%2C%22width%22%3A264.24810999999994%2C%22height%22%3A30.850029999999947%2C%22text%22%3A%22%2F%2F3.%E5%88%A4%E6%96%AD%E8%BF%94%E5%9B%9E%E5%80%BC%E7%B1%BB%E5%9E%8B%22%7D%2C%7B%22x%22%3A319.1335%2C%22y%22%3A387.24054%2C%22width%22%3A612.96556%2C%22height%22%3A32.66705999999999%2C%22text%22%3A%22RETURN%20RES%20INSTANCEOF%20OBJECT%20%3FRES%3AOBJ%22%7D%2C%7B%22x%22%3A258.19226%2C%22y%22%3A425.64713%2C%22width%22%3A22.31311000000005%2C%22height%22%3A35.05336999999997%2C%22text%22%3A%22%E5%AD%90%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23bbbabd%22%2C%22id%22%3A%22ucc6b2119%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u1fa59948" id="u1fa59948"><br></p><p data-lake-id="u5d849e6b" id="u5d849e6b"><span data-lake-id="u96da4f73" id="u96da4f73">简版：记住这个就好了！！！</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20myNew(fn%2C...args)%20%7B%5Cn%20%20%20%20const%20obj%20%3D%20Object.create(fn.prototype)%3B%5Cn%20%20%20%20const%20res%20%3D%20fn.apply(obj%2Cargs)%3B%5Cn%20%20%20%20return%20res%20instanceof%20Object%20%3F%20res%20%3A%20obj%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22v69tY%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u7aa9a233" id="u7aa9a233"><br></p><p data-lake-id="u5881929d" id="u5881929d"><br></p><p data-lake-id="ua3cb7c1b" id="ua3cb7c1b"><br></p><h1 data-lake-id="eSI0F" id="eSI0F"><span data-lake-id="uc4fb9def" id="uc4fb9def">10、vue中，computed 与 watch 的区别</span></h1><ul list="ueaa33457"><li fid="ub0cf8776" data-lake-id="u8a7ffe89" id="u8a7ffe89"><code data-lake-id="ufb9038e6" id="ufb9038e6"><span data-lake-id="ue7f35539" id="ue7f35539">computed</span></code><span data-lake-id="u59468836" id="u59468836">只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。 </span></li><li fid="ub0cf8776" data-lake-id="u6b33e3e8" id="u6b33e3e8"><code data-lake-id="u26201130" id="u26201130"><span data-lake-id="u9176be8d" id="u9176be8d">watch</span></code><span data-lake-id="u1f5a140e" id="u1f5a140e">每次都需要执行函数。 </span><code data-lake-id="ue2e72fcf" id="ue2e72fcf"><span data-lake-id="ueaec98fd" id="ueaec98fd">watch</span></code><span data-lake-id="u2c790c69" id="u2c790c69">更适用于数据变化时的异步操作。</span></li></ul><p data-lake-id="ub913245b" id="ub913245b"><br></p><h1 data-lake-id="Z9ws0" id="Z9ws0"><span data-lake-id="u60cb6735" id="u60cb6735">11、vue中，是如何做依赖收集的，收集的是那些部分内容</span></h1><p data-lake-id="u54d4ae79" id="u54d4ae79"><br></p><h1 data-lake-id="KXKGr" id="KXKGr"><span data-lake-id="uaf0c0e0c" id="uaf0c0e0c">12、说说react18  的并发？</span></h1><p data-lake-id="u82f40463" id="u82f40463"><br></p><h1 data-lake-id="RSL4U" id="RSL4U"><span data-lake-id="u9f2d35c0" id="u9f2d35c0">13、低代码如何实现？</span></h1><p data-lake-id="u23b2ae5a" id="u23b2ae5a"><br></p><h1 data-lake-id="C3XZD" id="C3XZD"><span data-lake-id="ud2f76f4e" id="ud2f76f4e">14、js在数据类型的存储区别是什么？</span></h1><p data-lake-id="u51271aec" id="u51271aec"><br></p><h1 data-lake-id="Z2Ru2" id="Z2Ru2"><span data-lake-id="ufd178b64" id="ufd178b64">15、es5中，继承是如何实现的？</span></h1><p data-lake-id="u7daa849d" id="u7daa849d"><br></p><h1 data-lake-id="NCWPE" id="NCWPE"><span data-lake-id="ubebce39f" id="ubebce39f">16、聊一聊事件循环？</span></h1><p data-lake-id="ubf4336f7" id="ubf4336f7"><br></p><h1 data-lake-id="OrW2D" id="OrW2D"><span data-lake-id="uad154310" id="uad154310">17、class中箭头函数与普通函数的 </span><code data-lake-id="u7b271ff5" id="u7b271ff5"><span data-lake-id="uffe801a0" id="uffe801a0">this</span></code><span data-lake-id="u5ecffeb4" id="u5ecffeb4"> 指向问题</span></h1><p data-lake-id="uaddc0428" id="uaddc0428"><br></p><p data-lake-id="uf612a905" id="uf612a905"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671145613734-927834d4-050e-4264-bc03-b8975c20a35c.png%22%2C%22taskId%22%3A%22uf8135b46-a4b6-4828-94ae-1b7e920c804%22%2C%22clientId%22%3A%22u71d7a380-b126-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A715.3333333333334%2C%22height%22%3A399%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A237885%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2146%2C%22originHeight%22%3A1196%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22ANIMALL%20CLASS%20CONSTRUCTOR()%20(%20THIS.NAME%20%2F%2F%20%3A%3A%3A%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%20SPEAK()%20%3A%3A%3A%E5%BD%93%E7%84%B6%2CTHIS%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%20'SPEAK%3A'%2CTHIS)%20CONSOLE.LOG(%20%20CONSOLE.LOG(THIS.NAME)%20%E5%AD%90%20%2F%3A%3A%3A%3A%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%20EAT%20%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%E6%8C%82%E5%9C%A8%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8A%20%3A%3A%3A%E5%BD%93%E7%84%B6%2CTHIS%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%20CONSOLE.LOG%20'EAT%3A'%2CTHIS)%20.LOG%20THIS.NAME)%20CONSOLE%20%20ANIMAL()%3B%20%20CONST%20N%20%E4%B8%89%20NEW%20A%20N.SPEAK()%3B%20N.EAT()%3B%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A205.69641%2C%22y%22%3A54.241276%2C%22width%22%3A141.17105%2C%22height%22%3A30.559123999999997%2C%22text%22%3A%22ANIMALL%22%7D%2C%7B%22x%22%3A87.46791%2C%22y%22%3A56.711536%2C%22width%22%3A97.88659%2C%22height%22%3A28.603534000000003%2C%22text%22%3A%22CLASS%22%7D%2C%7B%22x%22%3A167.00735%2C%22y%22%3A109.15001%2C%22width%22%3A301.03278%2C%22height%22%3A34.371930000000006%2C%22text%22%3A%22CONSTRUCTOR()%20(%22%7D%2C%7B%22x%22%3A246.93396%2C%22y%22%3A163.36012%2C%22width%22%3A184.13864%2C%22height%22%3A31.49114%2C%22text%22%3A%22THIS.NAME%22%7D%2C%7B%22x%22%3A169.30669%2C%22y%22%3A263.2847%2C%22width%22%3A330.62601%2C%22height%22%3A40.26544000000001%2C%22text%22%3A%22%2F%2F%20%3A%3A%3A%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%22%7D%2C%7B%22x%22%3A167.70662%2C%22y%22%3A324.78162%2C%22width%22%3A159.33916%2C%22height%22%3A32.31051000000002%2C%22text%22%3A%22SPEAK()%22%7D%2C%7B%22x%22%3A251.7366%2C%22y%22%3A376.19034%2C%22width%22%3A537.5197000000001%2C%22height%22%3A41.97714000000002%2C%22text%22%3A%22%3A%3A%3A%E5%BD%93%E7%84%B6%2CTHIS%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%22%7D%2C%7B%22x%22%3A501.7171%2C%22y%22%3A432.29474%2C%22width%22%3A259.5654%2C%22height%22%3A35.58121%2C%22text%22%3A%22'SPEAK%3A'%2CTHIS)%22%7D%2C%7B%22x%22%3A245.13051%2C%22y%22%3A434.59354%2C%22width%22%3A229.43684%2C%22height%22%3A31.79717999999997%2C%22text%22%3A%22CONSOLE.LOG(%22%7D%2C%7B%22x%22%3A243.05016%2C%22y%22%3A484.63763%2C%22width%22%3A429.59524%2C%22height%22%3A37.548069999999996%2C%22text%22%3A%22%20CONSOLE.LOG(THIS.NAME)%22%7D%2C%7B%22x%22%3A161.43106%2C%22y%22%3A536.8678%2C%22width%22%3A23.14989%2C%22height%22%3A41.17975000000001%2C%22text%22%3A%22%E5%AD%90%22%7D%2C%7B%22x%22%3A197.58922%2C%22y%22%3A592.3662%2C%22width%22%3A325.35178%2C%22height%22%3A35.89136999999994%2C%22text%22%3A%22%2F%3A%3A%3A%3A%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%22%7D%2C%7B%22x%22%3A164.97969%2C%22y%22%3A652.40625%2C%22width%22%3A58.74616%2C%22height%22%3A26.60164999999995%2C%22text%22%3A%22EAT%22%7D%2C%7B%22x%22%3A952.61694%2C%22y%22%3A688.79407%2C%22width%22%3A1105.8469600000003%2C%22height%22%3A72.71523000000002%2C%22text%22%3A%22%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%E6%8C%82%E5%9C%A8%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8A%22%7D%2C%7B%22x%22%3A337.1129%2C%22y%22%3A699.09%2C%22width%22%3A454.30762999999996%2C%22height%22%3A38.374000000000024%2C%22text%22%3A%22%3A%3A%3A%E5%BD%93%E7%84%B6%2CTHIS%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%22%7D%2C%7B%22x%22%3A243.91882%2C%22y%22%3A756.61414%2C%22width%22%3A225.76804%2C%22height%22%3A33.922860000000014%2C%22text%22%3A%22CONSOLE.LOG%22%7D%2C%7B%22x%22%3A495.31418%2C%22y%22%3A757.4715%2C%22width%22%3A224.80752%2C%22height%22%3A31.24816999999996%2C%22text%22%3A%22'EAT%3A'%2CTHIS)%22%7D%2C%7B%22x%22%3A391.96814%2C%22y%22%3A810.8877%2C%22width%22%3A77.30617999999998%2C%22height%22%3A32.73900000000003%2C%22text%22%3A%22.LOG%22%7D%2C%7B%22x%22%3A485.33566%2C%22y%22%3A811.6257%2C%22width%22%3A193.19558999999998%2C%22height%22%3A30.179539999999974%2C%22text%22%3A%22THIS.NAME)%22%7D%2C%7B%22x%22%3A247.06123%2C%22y%22%3A812.4609%2C%22width%22%3A128.49278999999999%2C%22height%22%3A28.98996999999997%2C%22text%22%3A%22CONSOLE%22%7D%2C%7B%22x%22%3A354.5174%2C%22y%22%3A970.86694%2C%22width%22%3A189.60736000000003%2C%22height%22%3A36.08502999999996%2C%22text%22%3A%22%20ANIMAL()%3B%22%7D%2C%7B%22x%22%3A83.881%2C%22y%22%3A973.97266%2C%22width%22%3A287.84306000000004%2C%22height%22%3A32.02333999999996%2C%22text%22%3A%22%20CONST%20N%20%E4%B8%89%20NEW%20A%22%7D%2C%7B%22x%22%3A83.162865%2C%22y%22%3A1025.9264%2C%22width%22%3A187.500495%2C%22height%22%3A33.372299999999996%2C%22text%22%3A%22N.SPEAK()%3B%22%7D%2C%7B%22x%22%3A82.2642%2C%22y%22%3A1082.3772%2C%22width%22%3A154.18185999999997%2C%22height%22%3A30.21460000000002%2C%22text%22%3A%22N.EAT()%3B%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231f1d1d%22%2C%22id%22%3A%22u0bfdccc0%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><blockquote data-lake-id="u28b2084f" id="u28b2084f"><p data-lake-id="u432d139f" id="u432d139f"><span data-lake-id="u7046dca2" id="u7046dca2" style="color: rgb(205, 23, 33); background-color: rgb(235, 204, 5)">上面的描述反了吧？</span></p></blockquote><p data-lake-id="ubcc6ec8f" id="ubcc6ec8f"><span data-lake-id="u63044997" id="u63044997" style="color: rgb(205, 23, 33)">​</span><br></p><p data-lake-id="u2f0c6252" id="u2f0c6252"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671145364400-e0dd3a5e-4368-458c-b7c5-34c2f3b18b64.png%22%2C%22taskId%22%3A%22u947be352-319d-4345-b8c3-34e582c71ce%22%2C%22clientId%22%3A%22u71d7a380-b126-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A612.6666666666666%2C%22height%22%3A117%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A113454%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1838%2C%22originHeight%22%3A350%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%2F%20B%20%2F%20EAT%3AFJ%20I%20SPEAK%3AANIMAL%20INAME%3A%20CAT'%20%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9B%B4%E6%8E%A5%E6%8C%82%E5%9C%A8%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%E4%B8%8A%20EAT%3A()%3E%3E%7B....)%20NAME%3A%20%5C%22CAT%5C%22%20OBJECT%20%5B%5BPROTYPE%5D%5D%5D%20CLASS%20ANIMAL%20CONSTRUCTOR%20%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%8C%82%E5%9C%A8%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8A%20SPEAK%3AF%20SPEAK()%20LLPROTOTYPELL%3A%20%20%20%20%20%20%20%20%20PROTYPELL%3A%20%20OBJECT%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A130.2198%2C%22y%22%3A34.0589%2C%22width%22%3A81.16062%2C%22height%22%3A24.86394%2C%22text%22%3A%22%2F%20B%20%2F%22%7D%2C%7B%22x%22%3A539.099%2C%22y%22%3A74.6687%2C%22width%22%3A138.6633999999999%2C%22height%22%3A26.255296%2C%22text%22%3A%22EAT%3AFJ%20I%22%7D%2C%7B%22x%22%3A113.57378%2C%22y%22%3A71.40505%2C%22width%22%3A308.10896%2C%22height%22%3A27.6892%2C%22text%22%3A%22SPEAK%3AANIMAL%20INAME%3A%22%7D%2C%7B%22x%22%3A440.50958%2C%22y%22%3A74.40266%2C%22width%22%3A67.85888999999997%2C%22height%22%3A20.79764%2C%22text%22%3A%22CAT'%22%7D%2C%7B%22x%22%3A715.4936%2C%22y%22%3A83.42246%2C%22width%22%3A838.4299000000001%2C%22height%22%3A66.07391999999999%2C%22text%22%3A%22%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9B%B4%E6%8E%A5%E6%8C%82%E5%9C%A8%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%E4%B8%8A%22%7D%2C%7B%22x%22%3A257.45825%2C%22y%22%3A105.60413%2C%22width%22%3A202.74674999999996%2C%22height%22%3A25.772520000000014%2C%22text%22%3A%22EAT%3A()%3E%3E%7B....)%22%7D%2C%7B%22x%22%3A260.03848%2C%22y%22%3A138.16971%2C%22width%22%3A154.20965999999999%2C%22height%22%3A24.731989999999996%2C%22text%22%3A%22NAME%3A%20%5C%22CAT%5C%22%22%7D%2C%7B%22x%22%3A475.72815%2C%22y%22%3A169.26047%2C%22width%22%3A90.83245%2C%22height%22%3A25.209429999999998%2C%22text%22%3A%22OBJECT%22%7D%2C%7B%22x%22%3A275.54922%2C%22y%22%3A170.36716%2C%22width%22%3A166.32712000000004%2C%22height%22%3A25.244659999999982%2C%22text%22%3A%22%5B%5BPROTYPE%5D%5D%5D%22%7D%2C%7B%22x%22%3A475.23755%2C%22y%22%3A202.88942%2C%22width%22%3A172.19365%2C%22height%22%3A22.9846%2C%22text%22%3A%22CLASS%20ANIMAL%22%7D%2C%7B%22x%22%3A281.52823%2C%22y%22%3A205.47731%2C%22width%22%3A163.54206999999997%2C%22height%22%3A20.244709999999998%2C%22text%22%3A%22CONSTRUCTOR%22%7D%2C%7B%22x%22%3A764.03705%2C%22y%22%3A218.2901%2C%22width%22%3A646.31685%2C%22height%22%3A67.49457000000001%2C%22text%22%3A%22%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%8C%82%E5%9C%A8%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8A%22%7D%2C%7B%22x%22%3A283.46536%2C%22y%22%3A234.67043%2C%22width%22%3A230.13730000000004%2C%22height%22%3A30.79203000000001%2C%22text%22%3A%22SPEAK%3AF%20SPEAK()%22%7D%2C%7B%22x%22%3A287.8144%2C%22y%22%3A265.89145%2C%22width%22%3A301.49750000000006%2C%22height%22%3A27.240169999999978%2C%22text%22%3A%22LLPROTOTYPELL%3A%20%20%20%20%20%20%20%20%20PROTYPELL%3A%20%20OBJECT%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%235a7a86%22%2C%22id%22%3A%22ued93c63c%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="uc84dbcbb" id="uc84dbcbb"><br></p><p data-lake-id="uc5f6cd98" id="uc5f6cd98"><br></p><p data-lake-id="u2e4a2ad3" id="u2e4a2ad3"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671145831511-e3d95533-d5a2-404a-baac-fc0f3fb73388.png%22%2C%22taskId%22%3A%22udbc8027b-136c-4429-8e68-e65c125d224%22%2C%22clientId%22%3A%22u71d7a380-b126-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A1154%2C%22height%22%3A431%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A304840%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2826%2C%22originHeight%22%3A1056%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%2238.JS%20%20CONST%20N%20%3B%20NEW%20ANIMAL()%3B%2016%2039.JS%2017%20CONST%20T%20A%20N.SPEAK%3B%2039-1.JS%2018%2039-2.JS%20CONSTB%20N.EAT%2039-3.JS%2019%2040JS%2020%20%3B%3B%3B%E5%89%8D%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%3ATHIS%E4%BE%9D%E7%84%B6%E6%8C%87%E5%90%91%E5%88%9B%E5%BB%BA%E7%9A%84%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%2C%E5%8D%B3%2C%E5%89%8D%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84THIS%E5%A7%8B%E7%BB%88%E6%98%AF%E8%AF%A5%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%89%80%E5%9C%A8%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%AD%E7%9A%84THIS%20B()%3B%2042.JS%2021%20A()%3B%20%3B%E9%9F%B3%E9%80%9A%E6%96%B9%E6%B3%95%2C%E6%8A%A5%E7%AE%B1%2C%E5%9B%A0%E4%B8%BA%20%E6%96%B9%E6%B3%95%E4%B8%AD%E7%9A%84THIS%20%E4%BC%9A%E6%8C%87%E5%90%91UNDEFINED%2C%E5%8D%B3%E7%AE%A1%E9%80%9A%E9%80%9F%E6%95%B0%E4%B8%AD%E7%9A%84THIS%20%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%2C%E5%A7%8B%E7%BB%88%E6%8C%87%E5%90%91%E9%80%9A%E6%95%B0%E7%9A%84%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83.%2043.JS%2044.JS%2045.JS%20AG%20IE%20TERMINAL%3A%20.%2FDAIT%20CODING%20GIT%3A(MAIN)%20X%20NOTE%201.JS%20DAIT%20CAT%20FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-COLING%2F1.JS%3A8%20CONSOLE.LOG(THIS.NAME)%20BOOKMARKS%20TYPEERROR%3A%20CANNOT%20READ%20PROPERTIES%20OF%20UNDEFINED%20(READING%20NG%20NAME)%20WDUP%20AT%20SPEAK%20(FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-CODING%2F1.JS%3A8%3A26)%20AT%20FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-CODING%2F1.JS%3A21%3A1%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A197.75267%2C%22y%22%3A61.828884%2C%22width%22%3A57.91829000000001%2C%22height%22%3A27.866839999999996%2C%22text%22%3A%2238.JS%22%7D%2C%7B%22x%22%3A587.8914%2C%22y%22%3A66.07202%2C%22width%22%3A465.96530000000007%2C%22height%22%3A37.62706%2C%22text%22%3A%22%20CONST%20N%20%3B%20NEW%20ANIMAL()%3B%22%7D%2C%7B%22x%22%3A453.73172%2C%22y%22%3A69.724%2C%22width%22%3A43.329409999999996%2C%22height%22%3A30.284194%2C%22text%22%3A%2216%22%7D%2C%7B%22x%22%3A200.07352%2C%22y%22%3A101.94356%2C%22width%22%3A57.597409999999996%2C%22height%22%3A26.32365%2C%22text%22%3A%2239.JS%22%7D%2C%7B%22x%22%3A451.52127%2C%22y%22%3A122.85672%2C%22width%22%3A46.06167999999997%2C%22height%22%3A33.118780000000015%2C%22text%22%3A%2217%22%7D%2C%7B%22x%22%3A591.1881%2C%22y%22%3A127.24051%2C%22width%22%3A111.27690000000007%2C%22height%22%3A27.33751000000001%2C%22text%22%3A%22CONST%22%7D%2C%7B%22x%22%3A682.1936%2C%22y%22%3A127.940994%2C%22width%22%3A265.12350000000004%2C%22height%22%3A29.133426%2C%22text%22%3A%22T%20A%20N.SPEAK%3B%22%7D%2C%7B%22x%22%3A200.99132%2C%22y%22%3A142.42126%2C%22width%22%3A78.03358%2C%22height%22%3A25.23737%2C%22text%22%3A%2239-1.JS%22%7D%2C%7B%22x%22%3A450.50455%2C%22y%22%3A176.02403%2C%22width%22%3A47.425250000000005%2C%22height%22%3A33.252519999999976%2C%22text%22%3A%2218%22%7D%2C%7B%22x%22%3A199.43895%2C%22y%22%3A182.01686%2C%22width%22%3A85.24834999999999%2C%22height%22%3A26.983000000000004%2C%22text%22%3A%2239-2.JS%22%7D%2C%7B%22x%22%3A591.99615%2C%22y%22%3A182.32547%2C%22width%22%3A146.63345000000004%2C%22height%22%3A27.42412999999999%2C%22text%22%3A%22CONSTB%22%7D%2C%7B%22x%22%3A783.6126%2C%22y%22%3A182.09442%2C%22width%22%3A111.00739999999996%2C%22height%22%3A26.688679999999977%2C%22text%22%3A%22N.EAT%22%7D%2C%7B%22x%22%3A201.37526%2C%22y%22%3A222.20929%2C%22width%22%3A81.66249000000002%2C%22height%22%3A25.994959999999992%2C%22text%22%3A%2239-3.JS%22%7D%2C%7B%22x%22%3A452.2964%2C%22y%22%3A233.47385%2C%22width%22%3A45.61907000000002%2C%22height%22%3A31.33435%2C%22text%22%3A%2219%22%7D%2C%7B%22x%22%3A203.33781%2C%22y%22%3A263.22827%2C%22width%22%3A51.5266%2C%22height%22%3A24.513059999999996%2C%22text%22%3A%2240JS%22%7D%2C%7B%22x%22%3A453.1854%2C%22y%22%3A284.88583%2C%22width%22%3A45.2722%2C%22height%22%3A32.37867%2C%22text%22%3A%2220%22%7D%2C%7B%22x%22%3A828.3762%2C%22y%22%3A282.43784%2C%22width%22%3A1674.7747999999997%2C%22height%22%3A38.672540000000026%2C%22text%22%3A%22%3B%3B%3B%E5%89%8D%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%3ATHIS%E4%BE%9D%E7%84%B6%E6%8C%87%E5%90%91%E5%88%9B%E5%BB%BA%E7%9A%84%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%2C%E5%8D%B3%2C%E5%89%8D%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84THIS%E5%A7%8B%E7%BB%88%E6%98%AF%E8%AF%A5%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%89%80%E5%9C%A8%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%AD%E7%9A%84THIS%22%7D%2C%7B%22x%22%3A594.57654%2C%22y%22%3A285.90915%2C%22width%22%3A80.97369000000003%2C%22height%22%3A35.99514999999997%2C%22text%22%3A%22B()%3B%22%7D%2C%7B%22x%22%3A205.70784%2C%22y%22%3A302.24573%2C%22width%22%3A48.54572999999999%2C%22height%22%3A26.623289999999997%2C%22text%22%3A%2242.JS%22%7D%2C%7B%22x%22%3A453.02298%2C%22y%22%3A336.44052%2C%22width%22%3A43.28062%2C%22height%22%3A35.09505999999999%2C%22text%22%3A%2221%22%7D%2C%7B%22x%22%3A594.90564%2C%22y%22%3A338.96704%2C%22width%22%3A83.82856000000004%2C%22height%22%3A35.68756000000002%2C%22text%22%3A%22A()%3B%22%7D%2C%7B%22x%22%3A833.2084%2C%22y%22%3A336.85788%2C%22width%22%3A1851.4303%2C%22height%22%3A41.714020000000005%2C%22text%22%3A%22%3B%E9%9F%B3%E9%80%9A%E6%96%B9%E6%B3%95%2C%E6%8A%A5%E7%AE%B1%2C%E5%9B%A0%E4%B8%BA%20%E6%96%B9%E6%B3%95%E4%B8%AD%E7%9A%84THIS%20%E4%BC%9A%E6%8C%87%E5%90%91UNDEFINED%2C%E5%8D%B3%E7%AE%A1%E9%80%9A%E9%80%9F%E6%95%B0%E4%B8%AD%E7%9A%84THIS%20%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%2C%E5%A7%8B%E7%BB%88%E6%8C%87%E5%90%91%E9%80%9A%E6%95%B0%E7%9A%84%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83.%22%7D%2C%7B%22x%22%3A203.02899%2C%22y%22%3A344.22003%2C%22width%22%3A54.02997000000002%2C%22height%22%3A26.406769999999995%2C%22text%22%3A%2243.JS%22%7D%2C%7B%22x%22%3A201.2769%2C%22y%22%3A383.73087%2C%22width%22%3A56.50461999999999%2C%22height%22%3A25.51723000000004%2C%22text%22%3A%2244.JS%22%7D%2C%7B%22x%22%3A203.04884%2C%22y%22%3A421.90692%2C%22width%22%3A51.24719999999999%2C%22height%22%3A26.280239999999992%2C%22text%22%3A%2245.JS%22%7D%2C%7B%22x%22%3A196.58397%2C%22y%22%3A459.22498%2C%22width%22%3A56.46621999999999%2C%22height%22%3A22.078119999999956%2C%22text%22%3A%22AG%20IE%22%7D%2C%7B%22x%22%3A86.22391%2C%22y%22%3A490.72983%2C%22width%22%3A111.38638999999999%2C%22height%22%3A28.14157%2C%22text%22%3A%22TERMINAL%3A%22%7D%2C%7B%22x%22%3A214.15924%2C%22y%22%3A491.70593%2C%22width%22%3A84.24917999999997%2C%22height%22%3A33.68072999999998%2C%22text%22%3A%22.%2FDAIT%22%7D%2C%7B%22x%22%3A262.86026%2C%22y%22%3A542.6978%2C%22width%22%3A614.31979%2C%22height%22%3A35.404429999999934%2C%22text%22%3A%22CODING%20GIT%3A(MAIN)%20X%20NOTE%201.JS%22%7D%2C%7B%22x%22%3A128.11665%2C%22y%22%3A543.06635%2C%22width%22%3A118.22942%2C%22height%22%3A36.87424999999996%2C%22text%22%3A%22DAIT%22%7D%2C%7B%22x%22%3A85.48697%2C%22y%22%3A599.4165%2C%22width%22%3A62.85633%2C%22height%22%3A29.62464%2C%22text%22%3A%22CAT%22%7D%2C%7B%22x%22%3A87.05107%2C%22y%22%3A650.73486%2C%22width%22%3A884.41283%2C%22height%22%3A35.267439999999965%2C%22text%22%3A%22FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-COLING%2F1.JS%3A8%22%7D%2C%7B%22x%22%3A242.29597%2C%22y%22%3A706.6929%2C%22width%22%3A442.43782999999996%2C%22height%22%3A32.208349999999996%2C%22text%22%3A%22CONSOLE.LOG(THIS.NAME)%22%7D%2C%7B%22x%22%3A41.11129%2C%22y%22%3A708.358%2C%22width%22%3A31.79088%2C%22height%22%3A161.52255000000002%2C%22text%22%3A%22BOOKMARKS%22%7D%2C%7B%22x%22%3A83.08299%2C%22y%22%3A861.28156%2C%22width%22%3A1123.5164100000002%2C%22height%22%3A42.804239999999936%2C%22text%22%3A%22TYPEERROR%3A%20CANNOT%20READ%20PROPERTIES%20OF%20UNDEFINED%20(READING%22%7D%2C%7B%22x%22%3A1152.8398%2C%22y%22%3A869.0195%2C%22width%22%3A184.26209999999992%2C%22height%22%3A32.25405999999998%2C%22text%22%3A%22NG%20NAME)%22%7D%2C%7B%22x%22%3A42.057854%2C%22y%22%3A896.73395%2C%22width%22%3A28.762626000000004%2C%22height%22%3A92.11794999999995%2C%22text%22%3A%22WDUP%22%7D%2C%7B%22x%22%3A163.29152%2C%22y%22%3A918.5467%2C%22width%22%3A1175.72378%2C%22height%22%3A37.610829999999964%2C%22text%22%3A%22AT%20SPEAK%20(FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-CODING%2F1.JS%3A8%3A26)%22%7D%2C%7B%22x%22%3A166.24896%2C%22y%22%3A975.4497%2C%22width%22%3A1023.50924%2C%22height%22%3A36.650030000000015%2C%22text%22%3A%22AT%20FILE%3A%2F%2FUSERS%2FLIQUWE%2FCODE%2FDAILY-CODING%2F1.JS%3A21%3A1%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231e1d1d%22%2C%22id%22%3A%22u40f2438c%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u585cdbd7" id="u585cdbd7"><br></p><p data-lake-id="uee06bf6a" id="uee06bf6a"><span data-lake-id="u89b8261f" id="u89b8261f">源码部分：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22class%20Animal%7B%5Cn%20%20%20%20constructor()%20%7B%5Cn%20%20%20%20%20%20%20%20this.name%20%3D%20'cat'%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%5Cn%20%20%20%20speak()%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%BD%93%E7%84%B6%EF%BC%8Cthis%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%5Cn%20%20%20%20%20%20%20%20console.log(this.name)%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%5Cn%20%20%20%20eat%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%BD%93%E7%84%B6%EF%BC%8Cthis%E9%83%BD%E6%8C%87%E5%90%91%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%5Cn%20%20%20%20%20%20%20%20console.log(this.name)%5Cn%20%20%20%20%7D%5Cn%7D%5Cnconst%20n%20%3D%20new%20Animal()%3B%5Cnconst%20a%20%3D%20n.speak%3B%5Cnconst%20b%20%3D%20n.eat%5Cn%5Cnb()%3B%20%20%2F%2F%2F%2F%20%3A%3A%3A%3A%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%EF%BC%9A%20this%E4%BE%9D%E7%84%B6%E6%8C%87%E5%90%91%E5%88%9B%E5%BB%BA%E7%9A%84%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1%EF%BC%8C%E5%8D%B3%EF%BC%8C%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84this%E5%A7%8B%E7%BB%88%E6%98%AF%E8%AF%A5%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%89%80%E5%9C%A8%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%AD%E7%9A%84this%5Cna()%3B%20%20%2F%2F%20%3A%3A%3A%3A%E6%99%AE%E9%80%9A%E6%96%B9%E6%B3%95%EF%BC%8C%E6%8A%A5%E9%94%99%EF%BC%8C%E5%9B%A0%E4%B8%BA%20%E6%96%B9%E6%B3%95%E4%B8%AD%E7%9A%84this%20%E4%BC%9A%E6%8C%87%E5%90%91undefined%20%EF%BC%8C%E5%8D%B3%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84%20this%20%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%EF%BC%8C%E5%A7%8B%E7%BB%88%E6%8C%87%E5%90%91%E5%87%BD%E6%95%B0%E7%9A%84%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83%EF%BC%8C%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22xsxYn%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6a04e401" id="u6a04e401"><span data-lake-id="u175691ab" id="u175691ab">​</span><br></p><h1 data-lake-id="nZ6Nz" id="nZ6Nz"><span data-lake-id="u07f0d2d4" id="u07f0d2d4">18、说说fiber架构，看过那些Hooks源码？？</span></h1><p data-lake-id="uf7e04168" id="uf7e04168"><br></p><h1 data-lake-id="kRtz5" id="kRtz5"><span data-lake-id="u84265f5d" id="u84265f5d">19、说说React rerender全流程</span></h1><p data-lake-id="ua5f89ac9" id="ua5f89ac9"><br></p><h1 data-lake-id="XELB3" id="XELB3"><span data-lake-id="u8dee0537" id="u8dee0537">20、Vue的响应式原理（观察者是在哪里被处理的，挂在哪里）</span></h1><p data-lake-id="u1c553169" id="u1c553169"><span data-lake-id="u6199e7b3" id="u6199e7b3">​</span><br></p><h1 data-lake-id="GrMZt" id="GrMZt"><span data-lake-id="u3e24424c" id="u3e24424c">21、ssr的性能瓶颈，一定就比客户端渲染好吗？</span></h1><p data-lake-id="u3a6d73fe" id="u3a6d73fe"><br></p><h1 data-lake-id="sBd5r" id="sBd5r"><span data-lake-id="ube439f4e" id="ube439f4e">22、两个模块，循环引用了，怎么解决？</span></h1><p data-lake-id="ud3a4b523" id="ud3a4b523"><br></p><ul list="uc7aafdbc"><li fid="u02c3be09" data-lake-id="u0bbdd4f5" id="u0bbdd4f5"><a href="https://juejin.cn/post/6844903768266391559" target="_blank" data-lake-id="u00bcc45b" id="u00bcc45b"><span data-lake-id="u9937832b" id="u9937832b">https://juejin.cn/post/6844903768266391559</span></a></li></ul><p data-lake-id="ud2cdf714" id="ud2cdf714"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671583878935-4b057a38-dc2d-4ee9-952c-4b742df5e60c.png%22%2C%22taskId%22%3A%22uf18fe898-6b20-449f-b725-27503518f2e%22%2C%22clientId%22%3A%22u19662187-bc53-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A849.359375%2C%22height%22%3A484%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A201050%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1664%2C%22originHeight%22%3A948%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22COMMONJS%E6%80%BB%E7%BB%93%20COMMONJS%20%E7%9A%84%E7%89%B9%E6%80%A7%E5%A6%82%E4%B8%8B%3A%20COMMONJS%E6%A8%A1%E5%9D%97%E7%94%B1JS%E8%BF%90%E8%A1%8C%E6%97%B6%E5%AE%9E%E7%8E%B0.%20COMMONJS%E6%98%AF%E5%8D%95%E4%B8%AA%E5%80%BC%E5%AF%BC%E5%87%BA%2C%E6%9C%AC%E8%B4%A8%E4%B8%8A%E5%AF%BC%E5%87%BA%E7%9A%84%E5%B0%B1%E6%98%AFEXPORTS%E5%B1%9E%E6%80%A7.%20COMMONJS%20%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%9A%84%2C%E5%AF%B9%E6%AF%8F%E4%B8%80%E4%B8%AA%E5%8A%A0%E8%BD%BD%E9%83%BD%E5%AD%98%E5%9C%A8%E7%BC%93%E5%AD%98%2C%E5%8F%AF%E4%BB%A5%E6%9C%89%E6%95%88%E7%9A%84%E8%A7%A3%E5%86%B3%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8%E9%97%AE%E9%A2%98.%20COMMONJS%E6%A8%A1%E5%9D%97%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E5%B9%B6%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9D%97%E6%96%87%E4%BB%B6.%20ESMODULE%E6%80%BB%E7%BB%93%20%E7%9A%84%E7%89%B9%E6%80%A7%E5%A6%82%E4%B8%8B%3A%20ES%20MODULE%20ES6MODULE%E9%9D%99%E6%80%81%E7%9A%84%2C%E4%B8%8D%E8%83%BD%E6%94%BE%E5%9C%A8%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%2C%E4%BB%A3%E7%A0%81%E5%8F%91%E7%94%9F%E5%9C%A8%E7%BC%96%E8%AF%91%E6%97%B6.%20ES6%20MODULE%20%E7%9A%84%E5%80%BC%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%2C%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%E5%AF%BC%E5%87%BA%E6%96%B9%E6%B3%95%E4%BF%AE%E6%94%B9%2C%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE%E4%BF%AE%E6%94%B9%E7%BB%93%E6%9E%9C.%20ES6MODULE%E5%8F%AF%E4%BB%A5%E5%AF%BC%E5%87%BA%E5%A4%9A%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95%2C%E5%8F%AF%E4%BB%A5%E5%8D%95%E4%B8%AA%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA%2C%E6%B7%B7%E5%90%88%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA.%20ES6%E6%A8%A1%E5%9D%97%E6%8F%90%E5%89%8D%E5%8A%A0%E8%BD%BD%E5%B9%B6%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9D%97%E6%96%87%E4%BB%B6%2C%20ES6%20MODULE%20%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97%E5%9C%A8%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8B.%20%E7%9A%84%E7%89%B9%E6%80%A7%E5%8F%AF%E4%BB%A5%E5%BE%88%E5%AE%B9%E6%98%93%E5%AE%9E%E7%8E%B0%20TREE%20SHAKING%E5%92%8CCODE%20SPLITTING.%20ES6%20MODULE%20%E7%9A%84%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A104.06146%2C%22y%22%3A62.402966%2C%22width%22%3A208.89627000000002%2C%22height%22%3A28.839694%2C%22text%22%3A%22COMMONJS%E6%80%BB%E7%BB%93%22%7D%2C%7B%22x%22%3A144.74619%2C%22y%22%3A124.67141%2C%22width%22%3A139.13011%2C%22height%22%3A30.166630000000012%2C%22text%22%3A%22COMMONJS%22%7D%2C%7B%22x%22%3A336.86197%2C%22y%22%3A125.917336%2C%22width%22%3A152.54753%2C%22height%22%3A26.986354000000006%2C%22text%22%3A%22%E7%9A%84%E7%89%B9%E6%80%A7%E5%A6%82%E4%B8%8B%3A%22%7D%2C%7B%22x%22%3A140.81041%2C%22y%22%3A190.93466%2C%22width%22%3A447.63362%2C%22height%22%3A27.57683%2C%22text%22%3A%22COMMONJS%E6%A8%A1%E5%9D%97%E7%94%B1JS%E8%BF%90%E8%A1%8C%E6%97%B6%E5%AE%9E%E7%8E%B0.%22%7D%2C%7B%22x%22%3A141.92525%2C%22y%22%3A243.67139%2C%22width%22%3A763.12015%2C%22height%22%3A32.250970000000024%2C%22text%22%3A%22COMMONJS%E6%98%AF%E5%8D%95%E4%B8%AA%E5%80%BC%E5%AF%BC%E5%87%BA%2C%E6%9C%AC%E8%B4%A8%E4%B8%8A%E5%AF%BC%E5%87%BA%E7%9A%84%E5%B0%B1%E6%98%AFEXPORTS%E5%B1%9E%E6%80%A7.%22%7D%2C%7B%22x%22%3A140.42126%2C%22y%22%3A298.8865%2C%22width%22%3A1121.71004%2C%22height%22%3A30.895669999999996%2C%22text%22%3A%22COMMONJS%20%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%9A%84%2C%E5%AF%B9%E6%AF%8F%E4%B8%80%E4%B8%AA%E5%8A%A0%E8%BD%BD%E9%83%BD%E5%AD%98%E5%9C%A8%E7%BC%93%E5%AD%98%2C%E5%8F%AF%E4%BB%A5%E6%9C%89%E6%95%88%E7%9A%84%E8%A7%A3%E5%86%B3%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8%E9%97%AE%E9%A2%98.%22%7D%2C%7B%22x%22%3A139.84052%2C%22y%22%3A355.9987%2C%22width%22%3A536.4604400000001%2C%22height%22%3A32.200800000000015%2C%22text%22%3A%22COMMONJS%E6%A8%A1%E5%9D%97%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E5%B9%B6%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9D%97%E6%96%87%E4%BB%B6.%22%7D%2C%7B%22x%22%3A104.0168%2C%22y%22%3A438.33334%2C%22width%22%3A206.00044000000003%2C%22height%22%3A28.757599999999968%2C%22text%22%3A%22ESMODULE%E6%80%BB%E7%BB%93%22%7D%2C%7B%22x%22%3A352.63126%2C%22y%22%3A501.20154%2C%22width%22%3A154.60406%2C%22height%22%3A29.442559999999958%2C%22text%22%3A%22%E7%9A%84%E7%89%B9%E6%80%A7%E5%A6%82%E4%B8%8B%3A%22%7D%2C%7B%22x%22%3A149.50114%2C%22y%22%3A503.01233%2C%22width%22%3A152.79103999999998%2C%22height%22%3A27.08159999999998%2C%22text%22%3A%22ES%20MODULE%22%7D%2C%7B%22x%22%3A139.53387%2C%22y%22%3A562.6064%2C%22width%22%3A830.34893%2C%22height%22%3A34.60659999999996%2C%22text%22%3A%22ES6MODULE%E9%9D%99%E6%80%81%E7%9A%84%2C%E4%B8%8D%E8%83%BD%E6%94%BE%E5%9C%A8%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%2C%E4%BB%A3%E7%A0%81%E5%8F%91%E7%94%9F%E5%9C%A8%E7%BC%96%E8%AF%91%E6%97%B6.%22%7D%2C%7B%22x%22%3A141.0191%2C%22y%22%3A620.4663%2C%22width%22%3A1020.6310000000001%2C%22height%22%3A29.59735999999998%2C%22text%22%3A%22ES6%20MODULE%20%E7%9A%84%E5%80%BC%E6%98%AF%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E7%9A%84%2C%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%E5%AF%BC%E5%87%BA%E6%96%B9%E6%B3%95%E4%BF%AE%E6%94%B9%2C%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE%E4%BF%AE%E6%94%B9%E7%BB%93%E6%9E%9C.%22%7D%2C%7B%22x%22%3A141.20105%2C%22y%22%3A676.0299%2C%22width%22%3A933.1870499999999%2C%22height%22%3A29.597849999999994%2C%22text%22%3A%22ES6MODULE%E5%8F%AF%E4%BB%A5%E5%AF%BC%E5%87%BA%E5%A4%9A%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95%2C%E5%8F%AF%E4%BB%A5%E5%8D%95%E4%B8%AA%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA%2C%E6%B7%B7%E5%90%88%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA.%22%7D%2C%7B%22x%22%3A141.24553%2C%22y%22%3A733.3755%2C%22width%22%3A435.52107%2C%22height%22%3A30.362899999999968%2C%22text%22%3A%22ES6%E6%A8%A1%E5%9D%97%E6%8F%90%E5%89%8D%E5%8A%A0%E8%BD%BD%E5%B9%B6%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%9D%97%E6%96%87%E4%BB%B6%2C%22%7D%2C%7B%22x%22%3A140.95482%2C%22y%22%3A785.2834%2C%22width%22%3A458.64833%2C%22height%22%3A33.46529999999996%2C%22text%22%3A%22ES6%20MODULE%20%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97%E5%9C%A8%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8B.%22%7D%2C%7B%22x%22%3A296.70953%2C%22y%22%3A843.1978%2C%22width%22%3A716.07117%2C%22height%22%3A37.206129999999916%2C%22text%22%3A%22%E7%9A%84%E7%89%B9%E6%80%A7%E5%8F%AF%E4%BB%A5%E5%BE%88%E5%AE%B9%E6%98%93%E5%AE%9E%E7%8E%B0%20TREE%20SHAKING%E5%92%8CCODE%20SPLITTING.%22%7D%2C%7B%22x%22%3A140.19557%2C%22y%22%3A846.89685%2C%22width%22%3A189.57813000000002%2C%22height%22%3A25.749390000000062%2C%22text%22%3A%22ES6%20MODULE%20%E7%9A%84%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23d9d9d9%22%2C%22id%22%3A%22ue6127a38%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u51f7e390" id="u51f7e390"><br></p><p data-lake-id="u015bc77d" id="u015bc77d"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671583968553-a93811ef-c23c-4cbc-94f0-5b1e77f95326.png%22%2C%22taskId%22%3A%22u06ec08a2-abe6-4141-8575-e583e227165%22%2C%22clientId%22%3A%22u19662187-bc53-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A820.6363525390625%2C%22height%22%3A646%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A226011%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1548%2C%22originHeight%22%3A1218%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E8%AF%AD%E5%8F%A5%E5%AF%BC%E5%87%BA%E6%A8%A1%E5%9D%97%2C%E6%98%AF%E5%BC%82%E6%AD%A5%E7%9A%84%20%E8%AF%AD%E5%8F%A5%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97%2C%20IMPORT%20EXPORT%20%E9%80%A0%E5%9E%8B.%E5%BD%93%E6%A8%A1%E5%9D%97%E9%81%87%E5%88%B0IMPORT%E5%91%BD%E4%BB%A4%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E7%94%9F%20ES6%E6%A8%A1%E5%9D%97%E5%8E%9F%E7%90%86%3A%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.%E5%BD%93%E6%A0%87%20%E8%84%9A%E6%9C%AC%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E6%97%B6%2C%E5%86%8D%E6%A0%B9%E6%8D%AE%E8%BF%99%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%2C%E5%88%B0%E8%A2%AB%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%82%A3%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%87%8C%E9%9D%A2%E5%8E%BB%E5%8F%96%20%E6%88%90%E4%B8%80%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%2C%E8%84%9A%E6%9C%AC%20%E5%80%BC.%20%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2CESG%E6%A8%A1%E5%9D%97%E6%98%AF%E5%8A%A8%E6%80%81%E5%BC%95%E7%94%A8.%E5%8F%AA%E8%A6%81%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E4%B9%8B%E9%97%B4%E5%AD%98%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%BC%95%E7%94%A8%2C%E4%BB%A3%E7%A0%81%E5%B0%B1%E8%83%BD%E5%A4%9F%E6%89%A7%E8%A1%8C(%E8%A7%A3%E5%86%B3%E5%8E%9F%E7%90%86)%20%2F%2FA.JS%201234567890%20%20CONSOLE.LOG(%5C%22BEFORE%20IMPORT%20B%5C%22)%20%20IMPORT%20%7BB%7D%20FROM%20%5C%22.%2FB%5C%22%20%20CONSOLE.LOG(%5C%22B%20IS%20%5C%22%20%2B%20B)%20%20EXPORT%20LET%20A%20-%20B%2B1%3B%20%2F%2FB.JS%20CONSOLE.LOG(%5C%22BEFORE%20IMPORT%20A%5C%22)%20.%2FA%5C%22%20%7BA%7D%20FROM%20IMPORT%20%20CONSOLE.LOG(%5C%22A%20IS%20%5C%22%20%2B%20A)%2010%20LET%20B%20%3A%20A%2B1%3B%2011%20EXPORT%20%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%3A%20%2F%2F%20BEFORE%20IMPORT%20A%201234%20UNDEFINED%20%2F%2FAIS%20%2F%2F%20BEFORE%20IMPORT%20B%20%2F%2FB%20IS%20NAN%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A553.4885%2C%22y%22%3A100.93008%2C%22width%22%3A356.19489999999996%2C%22height%22%3A35.74752000000001%2C%22text%22%3A%22%E8%AF%AD%E5%8F%A5%E5%AF%BC%E5%87%BA%E6%A8%A1%E5%9D%97%2C%E6%98%AF%E5%BC%82%E6%AD%A5%E7%9A%84%22%7D%2C%7B%22x%22%3A229.09659%2C%22y%22%3A103.869965%2C%22width%22%3A204.74984999999998%2C%22height%22%3A32.639345000000006%2C%22text%22%3A%22%E8%AF%AD%E5%8F%A5%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97%2C%22%7D%2C%7B%22x%22%3A132.87491%2C%22y%22%3A110.2061%2C%22width%22%3A89.45157%2C%22height%22%3A24.104799999999997%2C%22text%22%3A%22IMPORT%22%7D%2C%7B%22x%22%3A460.75815%2C%22y%22%3A111.276886%2C%22width%22%3A90.32979999999998%2C%22height%22%3A25.321094000000002%2C%22text%22%3A%22EXPORT%22%7D%2C%7B%22x%22%3A861.0271%2C%22y%22%3A163.53409%2C%22width%22%3A542.6449%2C%22height%22%3A37.492729999999995%2C%22text%22%3A%22%E9%80%A0%E5%9E%8B.%E5%BD%93%E6%A8%A1%E5%9D%97%E9%81%87%E5%88%B0IMPORT%E5%91%BD%E4%BB%A4%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E7%94%9F%22%7D%2C%7B%22x%22%3A125.58371%2C%22y%22%3A164.6083%2C%22width%22%3A824.29299%2C%22height%22%3A35.34994999999998%2C%22text%22%3A%22ES6%E6%A8%A1%E5%9D%97%E5%8E%9F%E7%90%86%3A%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.%E5%BD%93%E6%A0%87%22%7D%2C%7B%22x%22%3A365.9801%2C%22y%22%3A225.49792%2C%22width%22%3A994.0298%2C%22height%22%3A33.592630000000014%2C%22text%22%3A%22%E8%84%9A%E6%9C%AC%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E6%97%B6%2C%E5%86%8D%E6%A0%B9%E6%8D%AE%E8%BF%99%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%2C%E5%88%B0%E8%A2%AB%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%82%A3%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%87%8C%E9%9D%A2%E5%8E%BB%E5%8F%96%22%7D%2C%7B%22x%22%3A127.037674%2C%22y%22%3A227.06651%2C%22width%22%3A292.46436600000004%2C%22height%22%3A31.99894999999998%2C%22text%22%3A%22%E6%88%90%E4%B8%80%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%2C%E8%84%9A%E6%9C%AC%22%7D%2C%7B%22x%22%3A127.71264%2C%22y%22%3A289.7703%2C%22width%22%3A40.65574000000001%2C%22height%22%3A31.09409999999997%2C%22text%22%3A%22%E5%80%BC.%22%7D%2C%7B%22x%22%3A199.06165%2C%22y%22%3A295.8382%2C%22width%22%3A1031.81795%2C%22height%22%3A23.754700000000014%2C%22text%22%3A%22%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2CESG%E6%A8%A1%E5%9D%97%E6%98%AF%E5%8A%A8%E6%80%81%E5%BC%95%E7%94%A8.%E5%8F%AA%E8%A6%81%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E4%B9%8B%E9%97%B4%E5%AD%98%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%BC%95%E7%94%A8%2C%E4%BB%A3%E7%A0%81%E5%B0%B1%E8%83%BD%E5%A4%9F%E6%89%A7%E8%A1%8C(%E8%A7%A3%E5%86%B3%E5%8E%9F%E7%90%86)%22%7D%2C%7B%22x%22%3A177.23235%2C%22y%22%3A405.94934%2C%22width%22%3A88.20228000000003%2C%22height%22%3A26.870659999999987%2C%22text%22%3A%22%2F%2FA.JS%22%7D%2C%7B%22x%22%3A118.21569%2C%22y%22%3A419.68518%2C%22width%22%3A27.183909999999997%2C%22height%22%3A310.48062%2C%22text%22%3A%221234567890%22%7D%2C%7B%22x%22%3A176.44817%2C%22y%22%3A440.41824%2C%22width%22%3A435.70713%2C%22height%22%3A31.06353999999999%2C%22text%22%3A%22%20CONSOLE.LOG(%5C%22BEFORE%20IMPORT%20B%5C%22)%22%7D%2C%7B%22x%22%3A175.89885%2C%22y%22%3A478.6397%2C%22width%22%3A299.86325%2C%22height%22%3A27.249829999999974%2C%22text%22%3A%22%20IMPORT%20%7BB%7D%20FROM%20%5C%22.%2FB%5C%22%22%7D%2C%7B%22x%22%3A176.02296%2C%22y%22%3A514.3674%2C%22width%22%3A349.66164000000003%2C%22height%22%3A31.079700000000003%2C%22text%22%3A%22%20CONSOLE.LOG(%5C%22B%20IS%20%5C%22%20%2B%20B)%22%7D%2C%7B%22x%22%3A176.83636%2C%22y%22%3A554.6557%2C%22width%22%3A276.51804%2C%22height%22%3A25.61360000000002%2C%22text%22%3A%22%20EXPORT%20LET%20A%20-%20B%2B1%3B%22%7D%2C%7B%22x%22%3A173.80768%2C%22y%22%3A621.70215%2C%22width%22%3A90.11099000000002%2C%22height%22%3A27.95471000000009%2C%22text%22%3A%22%2F%2FB.JS%22%7D%2C%7B%22x%22%3A175.40477%2C%22y%22%3A660.92487%2C%22width%22%3A433.66793000000007%2C%22height%22%3A24.35933%2C%22text%22%3A%22CONSOLE.LOG(%5C%22BEFORE%20IMPORT%20A%5C%22)%22%7D%2C%7B%22x%22%3A432.0742%2C%22y%22%3A693.583%2C%22width%22%3A49.190049999999985%2C%22height%22%3A27.536929999999984%2C%22text%22%3A%22.%2FA%5C%22%22%7D%2C%7B%22x%22%3A282.3794%2C%22y%22%3A695.6915%2C%22width%22%3A114.30557000000005%2C%22height%22%3A27.166349999999966%2C%22text%22%3A%22%7BA%7D%20FROM%22%7D%2C%7B%22x%22%3A176.3265%2C%22y%22%3A697.1206%2C%22width%22%3A86.85140000000001%2C%22height%22%3A23.10554000000002%2C%22text%22%3A%22IMPORT%22%7D%2C%7B%22x%22%3A178.01042%2C%22y%22%3A726.28564%2C%22width%22%3A348.03163%2C%22height%22%3A34.813260000000014%2C%22text%22%3A%22%20CONSOLE.LOG(%5C%22A%20IS%20%5C%22%20%2B%20A)%22%7D%2C%7B%22x%22%3A111.75481%2C%22y%22%3A727.62805%2C%22width%22%3A31.111389999999986%2C%22height%22%3A30.06714999999997%2C%22text%22%3A%2210%22%7D%2C%7B%22x%22%3A279.48483%2C%22y%22%3A764.80963%2C%22width%22%3A171.9155%2C%22height%22%3A30.928530000000023%2C%22text%22%3A%22LET%20B%20%3A%20A%2B1%3B%22%7D%2C%7B%22x%22%3A111.37304%2C%22y%22%3A768.1172%2C%22width%22%3A30.550909999999988%2C%22height%22%3A26.455600000000004%2C%22text%22%3A%2211%22%7D%2C%7B%22x%22%3A177.85808%2C%22y%22%3A769.7097%2C%22width%22%3A83.17247%2C%22height%22%3A23.58389999999997%2C%22text%22%3A%22EXPORT%22%7D%2C%7B%22x%22%3A85.54712%2C%22y%22%3A873.1018%2C%22width%22%3A142.83557%2C%22height%22%3A35.02185999999995%2C%22text%22%3A%22%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%3A%22%7D%2C%7B%22x%22%3A174.96802%2C%22y%22%3A986.2183%2C%22width%22%3A255.68545000000003%2C%22height%22%3A31.250400000000013%2C%22text%22%3A%22%2F%2F%20BEFORE%20IMPORT%20A%22%7D%2C%7B%22x%22%3A122.37736%2C%22y%22%3A990.5053%2C%22width%22%3A19.557010000000005%2C%22height%22%3A135.33940000000007%2C%22text%22%3A%221234%22%7D%2C%7B%22x%22%3A291.40143%2C%22y%22%3A1026.437%2C%22width%22%3A134.90006999999997%2C%22height%22%3A25.11869999999999%2C%22text%22%3A%22UNDEFINED%22%7D%2C%7B%22x%22%3A182.10341%2C%22y%22%3A1026.6477%2C%22width%22%3A88.94315999999998%2C%22height%22%3A25.536599999999908%2C%22text%22%3A%22%2F%2FAIS%22%7D%2C%7B%22x%22%3A179.38855%2C%22y%22%3A1057.7953%2C%22width%22%3A259.7251%2C%22height%22%3A30.379300000000057%2C%22text%22%3A%22%2F%2F%20BEFORE%20IMPORT%20B%22%7D%2C%7B%22x%22%3A176.98343%2C%22y%22%3A1095.5688%2C%22width%22%3A162.34399000000002%2C%22height%22%3A26.792899999999918%2C%22text%22%3A%22%2F%2FB%20IS%20NAN%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23252525%22%2C%22id%22%3A%22u909e370f%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u174d69ff" id="u174d69ff"><br></p><ul list="u4d813bca"><li fid="u44a855c9" data-lake-id="ubf04702e" id="ubf04702e"><span data-lake-id="u501c56dd" id="u501c56dd">解决方法之一：使用函数，产生一个新的值！</span></li></ul><p data-lake-id="u0a0f3250" id="u0a0f3250"><br></p><p data-lake-id="ub5509845" id="ub5509845"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671881368056-fc43668b-560d-48c5-9d79-61d0f5046342.png%22%2C%22taskId%22%3A%22u29ab013d-43d6-4bd7-a2f2-7c3828387f0%22%2C%22clientId%22%3A%22u7ec53674-144a-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A706.3636210536172%2C%22height%22%3A702%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A345741%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1554%2C%22originHeight%22%3A1544%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%225.1%20COMMONJS%20%2C%E5%AF%B9%E4%BA%8E%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%2C%E5%B1%9E%E4%BA%8E%E5%A4%8D%E5%88%B6.%E5%8D%B3%E4%BC%9A%E8%A2%AB%E6%A8%A1%E5%9D%97%E7%BC%93%E5%AD%98.%E5%90%8C%E6%97%B6%2C%E5%9C%A8%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97%E5%8F%AF%E4%BB%A5%E5%AF%B9%E8%AF%A5%E6%A8%A1%E5%9D%97%E8%BE%93%E5%87%BA%E7%9A%84%E5%8F%98%E9%87%8F%E9%87%8D%E6%96%B0%E8%B5%8B.%20%E5%80%BC.%20%2C%E5%AF%B9%E4%BA%8E%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%2C%E5%B1%9E%E4%BA%8E%E6%B5%85%E6%8B%B7%E8%B4%9D.%E7%94%B1%E4%BA%8E%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E5%BC%95%E7%94%A8%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%8C%87%E5%90%91%E5%90%8C%E4%B8%80%E4%B8%AA%E5%86%85%E5%AD%98%E7%A9%BA%E9%97%B4%2C%E5%9B%A0%E6%AD%A4%E5%AF%B9%E8%AF%A5%E6%8D%A2%E5%9D%97%E7%9A%84%E5%80%BC%E5%81%9A%20%E4%BF%AE%E6%94%B9%E6%97%B6%E4%BC%9A%E5%BD%B1%E5%93%8D%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97.%20%E5%BD%93%E4%BD%BF%E7%94%A8REQUIRE%E5%91%BD%E4%BB%A4%E5%8A%A0%E8%BD%BD%E6%9F%90%E4%B8%AA%E6%A8%A1%E5%9D%97%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E8%BF%90%E8%A1%8C%E6%95%B4%E4%B8%AA%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BB%A3%E7%A0%81.%20%2C%E5%BD%93%E4%BD%BF%E7%94%A8REQUIRE%E5%91%BD%E4%BB%A4%E5%8A%A0%E8%BD%BD%E5%90%8C%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97%E6%97%B6%2C%E4%B8%8D%E4%BC%9A%E5%86%8D%E6%89%A7%E8%A1%8C%E8%AF%A5%E6%A8%A1%E5%9D%97%2C%E8%80%8C%E6%98%AF%E5%8F%96%E5%88%B0%E7%BC%93%E5%AD%98%E4%B9%8B%E4%B8%AD%E7%9A%84%E5%80%BC.%E4%B9%9F%E5%B0%B1%E6%98%AF%E8%AF%B4%2C%20COMMONJS%E6%A8%A1%E5%9D%97%E6%97%A0%E8%AE%BA%E5%8A%A0%E8%BD%BD%E5%A4%9A%E5%B0%91%E6%AC%A1%2C%E9%83%BD%E5%8F%AA%E4%BC%9A%E5%9C%A8%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%8A%A0%E8%BD%BD%E6%97%B6%E8%BF%90%E8%A1%8C%E4%B8%80%E6%AC%A1%2C%E4%BB%A5%E5%90%8E%E5%86%8D%E5%8A%A0%E8%BD%BD%2C%E5%B0%B1%E8%BF%99%E5%9B%9E%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%90%E8%A1%8C%E7%9A%84%20%E7%BB%93%E6%9E%9C%2C%E9%99%A4%E9%9D%9E%E6%89%8B%E5%8A%A8%E6%B8%85%E9%99%A4%E7%B3%BB%E7%BB%9F%E7%BC%93%E5%AD%98.%20%2C%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2C%E5%B1%9E%E4%BA%8E%E5%8A%A0%E8%BD%BD%E6%97%B6%E6%89%A7%E8%A1%8C.%E5%8D%B3%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E5%9C%A8REQUIRE%E7%9A%84%E6%97%B6%E5%80%99%2C%E5%B0%B1%E4%BC%9A%E5%85%A8%E9%83%A8%E6%89%A7%E8%A1%8C.%E4%B8%80%E6%97%A6%E5%87%BA%E7%8E%B0%E6%9F%90%E4%B8%AA%E6%A8%A1%E5%9D%97%E8%A2%AB%5C%22%E5%BE%AA%20%E7%8E%AF%E5%8A%A0%E8%BD%BD%5C%22%2C%E5%B0%B1%E5%8F%AA%E8%BE%93%E5%87%BA%E5%B7%B2%E7%BB%8F%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%2C%E8%BF%98%E6%9C%AA%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%E4%B8%8D%E4%BC%9A%E8%BE%93%E5%87%BA.%205.2%20ES6%20ES6%E6%A8%A1%E5%9D%97%E4%B8%AD%E7%9A%84%E5%80%BC%E5%B1%9E%E4%BA%8E%5B%E5%8A%A8%E6%80%81%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%5D.%20%2C%E5%AF%B9%E4%BA%8E%E5%8F%AA%E8%AF%BB%E6%9D%A5%E8%AF%B4%2C%E5%8D%B3%E4%B8%8D%E5%85%81%E8%AE%B8%E4%BF%AE%E6%94%B9%E5%BC%95%E5%85%A5%E5%8F%98%E9%87%8F%E7%9A%84%E5%80%BC%2CIMPOR%E7%9A%84%E5%8F%98%E9%87%8F%E6%98%AF%E5%8F%AA%E8%AF%BB%E7%9A%84%2C%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%20%E6%8D%AE%E7%B1%BB%E5%9E%8B.%E5%BD%93%E6%A8%A1%E5%9D%97%E9%81%87%E5%88%B0IMPORT%E5%91%BD%E4%BB%A4%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8.%E7%AD%89%E5%88%B0%E8%84%9A%E6%9C%AC%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E6%97%B6%2C%E5%86%8D%E6%A0%B9%E6%8D%AE%E8%BF%99%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%20%E7%94%A8%2C%E5%88%B0%E8%A2%AB%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%82%A3%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%87%8C%E9%9D%A2%E5%8E%BB%E5%8F%96%E5%80%BC.%20%3A%E5%AF%B9%E4%BA%8E%E5%8A%A8%E6%80%81%E6%9D%A5%E8%AF%B4%2C%E5%8E%9F%E5%A7%8B%E5%80%BC%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96%2CIMPORT%E5%8A%A0%E8%BD%BD%E7%9A%84%E5%80%BC%E4%B9%9F%E4%BC%9A%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96.%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%20%E5%9E%8B.%20%2C%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2CES6%E6%A8%A1%E5%9D%97%E6%98%AF%E5%8A%A8%E6%80%81%E5%BC%95%E7%94%A8.%E5%8F%AA%E8%A6%81%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E4%B9%8B%E9%97%B4%E5%AD%98%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%BC%95%E7%94%A8%2C%E4%BB%A3%E7%A0%81%E5%B0%B1%E8%83%BD%E5%A4%9F%E6%89%A7%E8%A1%8C.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A52.069645%2C%22y%22%3A103.04666%2C%22width%22%3A225.359855%2C%22height%22%3A27.979829999999993%2C%22text%22%3A%225.1%20COMMONJS%22%7D%2C%7B%22x%22%3A101.73857%2C%22y%22%3A189.64755%2C%22width%22%3A1299.06103%2C%22height%22%3A33.01799%2C%22text%22%3A%22%2C%E5%AF%B9%E4%BA%8E%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%2C%E5%B1%9E%E4%BA%8E%E5%A4%8D%E5%88%B6.%E5%8D%B3%E4%BC%9A%E8%A2%AB%E6%A8%A1%E5%9D%97%E7%BC%93%E5%AD%98.%E5%90%8C%E6%97%B6%2C%E5%9C%A8%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97%E5%8F%AF%E4%BB%A5%E5%AF%B9%E8%AF%A5%E6%A8%A1%E5%9D%97%E8%BE%93%E5%87%BA%E7%9A%84%E5%8F%98%E9%87%8F%E9%87%8D%E6%96%B0%E8%B5%8B.%22%7D%2C%7B%22x%22%3A101.011566%2C%22y%22%3A242.35107%2C%22width%22%3A42.84842400000001%2C%22height%22%3A31.091070000000002%2C%22text%22%3A%22%E5%80%BC.%22%7D%2C%7B%22x%22%3A101.77233%2C%22y%22%3A332.50266%2C%22width%22%3A1300.14417%2C%22height%22%3A31.654260000000022%2C%22text%22%3A%22%2C%E5%AF%B9%E4%BA%8E%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%2C%E5%B1%9E%E4%BA%8E%E6%B5%85%E6%8B%B7%E8%B4%9D.%E7%94%B1%E4%BA%8E%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E5%BC%95%E7%94%A8%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%8C%87%E5%90%91%E5%90%8C%E4%B8%80%E4%B8%AA%E5%86%85%E5%AD%98%E7%A9%BA%E9%97%B4%2C%E5%9B%A0%E6%AD%A4%E5%AF%B9%E8%AF%A5%E6%8D%A2%E5%9D%97%E7%9A%84%E5%80%BC%E5%81%9A%22%7D%2C%7B%22x%22%3A101.41992%2C%22y%22%3A383.55017%2C%22width%22%3A335.11121%2C%22height%22%3A30.534730000000025%2C%22text%22%3A%22%E4%BF%AE%E6%94%B9%E6%97%B6%E4%BC%9A%E5%BD%B1%E5%93%8D%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97.%22%7D%2C%7B%22x%22%3A103.42073%2C%22y%22%3A472.9538%2C%22width%22%3A797.0042699999999%2C%22height%22%3A31.650969999999973%2C%22text%22%3A%22%E5%BD%93%E4%BD%BF%E7%94%A8REQUIRE%E5%91%BD%E4%BB%A4%E5%8A%A0%E8%BD%BD%E6%9F%90%E4%B8%AA%E6%A8%A1%E5%9D%97%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E8%BF%90%E8%A1%8C%E6%95%B4%E4%B8%AA%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BB%A3%E7%A0%81.%22%7D%2C%7B%22x%22%3A101.487785%2C%22y%22%3A560.87415%2C%22width%22%3A1196.900515%2C%22height%22%3A31.41210000000001%2C%22text%22%3A%22%2C%E5%BD%93%E4%BD%BF%E7%94%A8REQUIRE%E5%91%BD%E4%BB%A4%E5%8A%A0%E8%BD%BD%E5%90%8C%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97%E6%97%B6%2C%E4%B8%8D%E4%BC%9A%E5%86%8D%E6%89%A7%E8%A1%8C%E8%AF%A5%E6%A8%A1%E5%9D%97%2C%E8%80%8C%E6%98%AF%E5%8F%96%E5%88%B0%E7%BC%93%E5%AD%98%E4%B9%8B%E4%B8%AD%E7%9A%84%E5%80%BC.%E4%B9%9F%E5%B0%B1%E6%98%AF%E8%AF%B4%2C%22%7D%2C%7B%22x%22%3A101.51731%2C%22y%22%3A612.547%2C%22width%22%3A1305.71099%2C%22height%22%3A30.14969999999994%2C%22text%22%3A%22COMMONJS%E6%A8%A1%E5%9D%97%E6%97%A0%E8%AE%BA%E5%8A%A0%E8%BD%BD%E5%A4%9A%E5%B0%91%E6%AC%A1%2C%E9%83%BD%E5%8F%AA%E4%BC%9A%E5%9C%A8%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%8A%A0%E8%BD%BD%E6%97%B6%E8%BF%90%E8%A1%8C%E4%B8%80%E6%AC%A1%2C%E4%BB%A5%E5%90%8E%E5%86%8D%E5%8A%A0%E8%BD%BD%2C%E5%B0%B1%E8%BF%99%E5%9B%9E%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%90%E8%A1%8C%E7%9A%84%22%7D%2C%7B%22x%22%3A100.32622%2C%22y%22%3A663.85706%2C%22width%22%3A390.03908%2C%22height%22%3A30.432489999999916%2C%22text%22%3A%22%E7%BB%93%E6%9E%9C%2C%E9%99%A4%E9%9D%9E%E6%89%8B%E5%8A%A8%E6%B8%85%E9%99%A4%E7%B3%BB%E7%BB%9F%E7%BC%93%E5%AD%98.%22%7D%2C%7B%22x%22%3A101.5207%2C%22y%22%3A752.69727%2C%22width%22%3A1288.4533999999999%2C%22height%22%3A32.38158999999996%2C%22text%22%3A%22%2C%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2C%E5%B1%9E%E4%BA%8E%E5%8A%A0%E8%BD%BD%E6%97%B6%E6%89%A7%E8%A1%8C.%E5%8D%B3%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E5%9C%A8REQUIRE%E7%9A%84%E6%97%B6%E5%80%99%2C%E5%B0%B1%E4%BC%9A%E5%85%A8%E9%83%A8%E6%89%A7%E8%A1%8C.%E4%B8%80%E6%97%A6%E5%87%BA%E7%8E%B0%E6%9F%90%E4%B8%AA%E6%A8%A1%E5%9D%97%E8%A2%AB%5C%22%E5%BE%AA%22%7D%2C%7B%22x%22%3A99.31133%2C%22y%22%3A802.85455%2C%22width%22%3A804.68513%2C%22height%22%3A33.17624999999998%2C%22text%22%3A%22%E7%8E%AF%E5%8A%A0%E8%BD%BD%5C%22%2C%E5%B0%B1%E5%8F%AA%E8%BE%93%E5%87%BA%E5%B7%B2%E7%BB%8F%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%2C%E8%BF%98%E6%9C%AA%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%E4%B8%8D%E4%BC%9A%E8%BE%93%E5%87%BA.%22%7D%2C%7B%22x%22%3A52.14703%2C%22y%22%3A914.95306%2C%22width%22%3A116.05883%2C%22height%22%3A27.77123999999992%2C%22text%22%3A%225.2%20ES6%22%7D%2C%7B%22x%22%3A100.8073%2C%22y%22%3A1004.0632%2C%22width%22%3A491.5532%2C%22height%22%3A31.460799999999836%2C%22text%22%3A%22ES6%E6%A8%A1%E5%9D%97%E4%B8%AD%E7%9A%84%E5%80%BC%E5%B1%9E%E4%BA%8E%5B%E5%8A%A8%E6%80%81%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8%5D.%22%7D%2C%7B%22x%22%3A100.6436%2C%22y%22%3A1094.2869%2C%22width%22%3A1298.8117%2C%22height%22%3A31.639999999999873%2C%22text%22%3A%22%2C%E5%AF%B9%E4%BA%8E%E5%8F%AA%E8%AF%BB%E6%9D%A5%E8%AF%B4%2C%E5%8D%B3%E4%B8%8D%E5%85%81%E8%AE%B8%E4%BF%AE%E6%94%B9%E5%BC%95%E5%85%A5%E5%8F%98%E9%87%8F%E7%9A%84%E5%80%BC%2CIMPOR%E7%9A%84%E5%8F%98%E9%87%8F%E6%98%AF%E5%8F%AA%E8%AF%BB%E7%9A%84%2C%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%22%7D%2C%7B%22x%22%3A101.28174%2C%22y%22%3A1144.1497%2C%22width%22%3A1294.92246%2C%22height%22%3A32.190900000000056%2C%22text%22%3A%22%E6%8D%AE%E7%B1%BB%E5%9E%8B.%E5%BD%93%E6%A8%A1%E5%9D%97%E9%81%87%E5%88%B0IMPORT%E5%91%BD%E4%BB%A4%E6%97%B6%2C%E5%B0%B1%E4%BC%9A%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%E7%94%A8.%E7%AD%89%E5%88%B0%E8%84%9A%E6%9C%AC%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E6%97%B6%2C%E5%86%8D%E6%A0%B9%E6%8D%AE%E8%BF%99%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%BC%95%22%7D%2C%7B%22x%22%3A101.33288%2C%22y%22%3A1194.0485%2C%22width%22%3A474.65412%2C%22height%22%3A33.14989999999989%2C%22text%22%3A%22%E7%94%A8%2C%E5%88%B0%E8%A2%AB%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%82%A3%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%87%8C%E9%9D%A2%E5%8E%BB%E5%8F%96%E5%80%BC.%22%7D%2C%7B%22x%22%3A101.28878%2C%22y%22%3A1284.8131%2C%22width%22%3A1298.4894199999999%2C%22height%22%3A30.733299999999872%2C%22text%22%3A%22%3A%E5%AF%B9%E4%BA%8E%E5%8A%A8%E6%80%81%E6%9D%A5%E8%AF%B4%2C%E5%8E%9F%E5%A7%8B%E5%80%BC%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96%2CIMPORT%E5%8A%A0%E8%BD%BD%E7%9A%84%E5%80%BC%E4%B9%9F%E4%BC%9A%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96.%E4%B8%8D%E8%AE%BA%E6%98%AF%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BF%98%E6%98%AF%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%B1%BB%22%7D%2C%7B%22x%22%3A101.612885%2C%22y%22%3A1336.0212%2C%22width%22%3A47.19222500000001%2C%22height%22%3A31.514400000000023%2C%22text%22%3A%22%E5%9E%8B.%22%7D%2C%7B%22x%22%3A100.0476%2C%22y%22%3A1425.5812%2C%22width%22%3A1105.0994999999998%2C%22height%22%3A32.78419999999983%2C%22text%22%3A%22%2C%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD%E6%97%B6%2CES6%E6%A8%A1%E5%9D%97%E6%98%AF%E5%8A%A8%E6%80%81%E5%BC%95%E7%94%A8.%E5%8F%AA%E8%A6%81%E4%B8%A4%E4%B8%AA%E6%A8%A1%E5%9D%97%E4%B9%8B%E9%97%B4%E5%AD%98%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%BC%95%E7%94%A8%2C%E4%BB%A3%E7%A0%81%E5%B0%B1%E8%83%BD%E5%A4%9F%E6%89%A7%E8%A1%8C.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23dadada%22%2C%22id%22%3A%22uc4ec4cac%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u27ddd640" id="u27ddd640"><br></p><p data-lake-id="ubdd1dff2" id="ubdd1dff2"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671881408146-d80c81d2-7c79-434e-84f0-0249f948254a.png%22%2C%22taskId%22%3A%22ueac9d329-aab7-4243-9eb1-ffe933f3ce0%22%2C%22clientId%22%3A%22u7ec53674-144a-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A1195.4545195437665%2C%22height%22%3A531%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A394655%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2630%2C%22originHeight%22%3A1168%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E8%AF%B4%E8%AF%B4CJM%2FESM%E7%9A%84%E5%8C%BA%E5%88%AB%20%2C%E5%BC%95%E7%94%A8%E4%B8%8D%E5%90%8C%3A%E4%B8%80%E4%B8%AA%E6%98%AF%E5%80%BC%E7%9A%84%E6%8B%B7%E8%B4%9D(COMMONJS)%2C%E4%B8%80%E4%B8%AA%E6%98%AF%E5%80%BC%E7%9A%84%E5%BC%95%E7%94%A8(%20%E7%94%A8(ESM)%20%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8%E6%97%B6%3A%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F%E4%B8%8D%E5%90%8C%20*%20COMMONJS%E9%81%87%E5%88%B0%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96%E6%97%B6%2C%E5%8F%AA%E4%BC%9A%E8%BE%93%E5%87%BA%E5%B7%B2%E7%BB%8F%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%2C%E5%9B%A0%E4%B8%BA%E6%98%AF%E6%8B%B7%E8%B4%9D%2C%E4%B8%94%E4%BC%9A%E7%BC%93%E5%AD%98%E8%B5%B7%E6%9D%A5%2C%E5%90%8E%E9%9D%A2%E4%B8%8D%E8%83%BD%E5%86%8D%E5%BD%B1%E5%93%8D%E5%89%8D%E9%9D%A2%E7%9A%84%E7%BB%93%E6%9E%9C%20%2B%20%E5%9B%A0%E4%B8%BA%E6%98%AF%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%2C%E9%81%BF%E5%85%8D%E4%BA%86%E6%97%A0%E9%99%90%E5%BE%AA%E7%8E%AF%2C%E4%BD%86%E4%B9%9F%E4%BC%9A%E5%AF%BC%E8%87%B4%E4%B8%80%E4%BA%9B%E4%B8%8D%E5%AE%B9%E6%98%93%E5%AF%9F%E8%A7%89%E7%9A%84%E9%94%99%E8%AF%AF%2C%E6%AF%94%E5%A6%82%E6%9F%90%E4%B8%AA%E5%80%BCUNDEFINED%E4%BA%86%20ESM%E5%91%A2%2C%E5%9B%A0%E4%B8%BA%E6%98%AF%E5%BC%95%E7%94%A8%2C%E5%8F%96%E6%9C%80%E5%90%8E%E7%9A%84%E5%80%BC%E5%B0%B1%E5%A5%BD%E4%BA%86%20630%E9%A2%86%E5%9D%97%E5%8A%A0%E6%95%B4%E6%9C%BA%E5%88%B6%E6%A0%B9%E6%9C%AC%E4%B8%8D%E5%85%B3%E5%BF%83%E6%98%AF%E5%90%A6%E5%87%BA%E7%8E%B0%E4%BA%86%E7%A1%AE%E7%8E%AF%E5%BA%94%E7%94%A8%2C%E5%8F%AA%E6%98%AF%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E6%8A%A5%E5%90%91%E6%95%B0%E6%8D%AE%E6%9D%82%E7%9A%84%E5%BC%95%E7%94%A8.%E9%9C%80%E8%A6%81%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%B7%B1%E4%BF%9D%E8%AF%81%2C%E7%9C%9F%E6%AD%A3%E5%8F%96%E5%80%BC%E7%9A%84%E6%97%B6%E5%80%99%E8%83%BD%E5%A4%9F%E5%8F%96%E5%88%B0%E4%BD%BF%E8%83%BD%E5%A4%9F%E5%8F%96%E5%88%B0%E4%BD%BFY%20%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E4%B8%A4%E4%B8%AA%3A%E5%8F%AF%E4%BB%A5%E5%BC%95%E5%85%A5WEBPACK%E6%89%93%E5%8C%85%E6%8F%92%E4%BB%B6%E6%A3%80%E6%B5%8B%3A%20*%201%2C%E4%BD%BF%E7%94%A8EXPORT%E5%87%BD%E6%95%B0%202%2C%E6%8A%8A%E4%BB%96%E4%BB%AC%E6%94%BE%E5%9C%A8%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E9%87%8C%E4%B8%8D%E5%B0%B1%E6%B2%A1%E9%97%AE%E9%A2%98%E4%BA%86%E5%90%97%202%2C%E8%BE%93%E5%87%BA%E4%B8%8D%E5%90%8C%3A%20LIGUANGWEI007%2C2022%2F7%2F4%2C%2019%3A13%20'FEAT%3A%E9%83%BD%E5%B9%B3%E9%93%BA%E5%BC%80%E6%9D%A5%20COMMONJS%E5%BF%85%E9%A1%BB%E5%9C%A8%E8%84%9A%E6%9C%AC%E6%89%A7%E8%A1%8C%E5%AE%8C%E5%AE%8C%E5%90%8E%2C%E6%89%8D%E8%83%BD%E7%A1%AE%E5%AE%9A%E8%BE%93%E5%87%BA%20ESM%E6%98%AF%E9%9D%99%E6%80%81%E7%BC%96%E8%AF%91%E6%97%B6%E5%B0%B1%E8%83%BD%E7%A1%AE%E5%AE%9A%E8%BE%93%E5%87%BA%E4%BA%86%20*%20*3%2C%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%3A%20NODE%E9%A1%B9%E7%9B%AE%E7%9A%84%E4%BB%A3%E7%A0%81%E5%8D%B3%E6%A8%A1%E5%9D%97%E9%83%BD%E5%9C%A8%E6%9C%AC%E5%9C%B0%E4%B8%89%E4%B8%89%3E%20%E6%89%80%E4%BB%A5CJM%E9%83%BD%E6%98%AF%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%20K%20%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E8%84%9A%E6%9C%AC%E9%83%BD%E9%9C%80%E8%A6%81%E5%BC%82%E6%AD%A5%E5%8E%BB%E8%AF%B7%E6%B1%82%E5%90%8E%E6%89%8D%E8%83%BD%E6%89%A7%E8%A1%8C%20%E4%B8%89%3E%E6%89%80%E4%BB%A5%E9%83%BD%E6%98%AF%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%20*%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A282.64636%2C%22y%22%3A94.32392%2C%22width%22%3A315.15984%2C%22height%22%3A33.944779999999994%2C%22text%22%3A%22%E8%AF%B4%E8%AF%B4CJM%2FESM%E7%9A%84%E5%8C%BA%E5%88%AB%22%7D%2C%7B%22x%22%3A183.8526%2C%22y%22%3A143.65877%2C%22width%22%3A854.392%2C%22height%22%3A41.41691%2C%22text%22%3A%22%2C%E5%BC%95%E7%94%A8%E4%B8%8D%E5%90%8C%3A%E4%B8%80%E4%B8%AA%E6%98%AF%E5%80%BC%E7%9A%84%E6%8B%B7%E8%B4%9D(COMMONJS)%2C%E4%B8%80%E4%B8%AA%E6%98%AF%E5%80%BC%E7%9A%84%E5%BC%95%E7%94%A8(%22%7D%2C%7B%22x%22%3A994.5604%2C%22y%22%3A147.70555%2C%22width%22%3A133.46190000000013%2C%22height%22%3A35.06865000000002%2C%22text%22%3A%22%E7%94%A8(ESM)%22%7D%2C%7B%22x%22%3A232.74199%2C%22y%22%3A201.70242%2C%22width%22%3A413.84911%2C%22height%22%3A37.760670000000005%2C%22text%22%3A%22%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8%E6%97%B6%3A%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F%E4%B8%8D%E5%90%8C%22%7D%2C%7B%22x%22%3A97.270645%2C%22y%22%3A204.06876%2C%22width%22%3A24.712445000000002%2C%22height%22%3A30.187970000000007%2C%22text%22%3A%22*%22%7D%2C%7B%22x%22%3A308.83844%2C%22y%22%3A254.49585%2C%22width%22%3A1601.87276%2C%22height%22%3A41.302490000000006%2C%22text%22%3A%22COMMONJS%E9%81%87%E5%88%B0%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96%E6%97%B6%2C%E5%8F%AA%E4%BC%9A%E8%BE%93%E5%87%BA%E5%B7%B2%E7%BB%8F%E6%89%A7%E8%A1%8C%E7%9A%84%E9%83%A8%E5%88%86%2C%E5%9B%A0%E4%B8%BA%E6%98%AF%E6%8B%B7%E8%B4%9D%2C%E4%B8%94%E4%BC%9A%E7%BC%93%E5%AD%98%E8%B5%B7%E6%9D%A5%2C%E5%90%8E%E9%9D%A2%E4%B8%8D%E8%83%BD%E5%86%8D%E5%BD%B1%E5%93%8D%E5%89%8D%E9%9D%A2%E7%9A%84%E7%BB%93%E6%9E%9C%22%7D%2C%7B%22x%22%3A98.616264%2C%22y%22%3A262.2631%2C%22width%22%3A22.506186%2C%22height%22%3A28.313769999999977%2C%22text%22%3A%22%2B%22%7D%2C%7B%22x%22%3A388.23547%2C%22y%22%3A306.7808%2C%22width%22%3A1388.1363299999998%2C%22height%22%3A41.42034000000001%2C%22text%22%3A%22%E5%9B%A0%E4%B8%BA%E6%98%AF%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%2C%E9%81%BF%E5%85%8D%E4%BA%86%E6%97%A0%E9%99%90%E5%BE%AA%E7%8E%AF%2C%E4%BD%86%E4%B9%9F%E4%BC%9A%E5%AF%BC%E8%87%B4%E4%B8%80%E4%BA%9B%E4%B8%8D%E5%AE%B9%E6%98%93%E5%AF%9F%E8%A7%89%E7%9A%84%E9%94%99%E8%AF%AF%2C%E6%AF%94%E5%A6%82%E6%9F%90%E4%B8%AA%E5%80%BCUNDEFINED%E4%BA%86%22%7D%2C%7B%22x%22%3A304.47852%2C%22y%22%3A361.1574%2C%22width%22%3A585.92728%2C%22height%22%3A43.98009999999999%2C%22text%22%3A%22ESM%E5%91%A2%2C%E5%9B%A0%E4%B8%BA%E6%98%AF%E5%BC%95%E7%94%A8%2C%E5%8F%96%E6%9C%80%E5%90%8E%E7%9A%84%E5%80%BC%E5%B0%B1%E5%A5%BD%E4%BA%86%22%7D%2C%7B%22x%22%3A385.2931%2C%22y%22%3A417.2691%2C%22width%22%3A1994.7286%2C%22height%22%3A38.018380000000036%2C%22text%22%3A%22630%E9%A2%86%E5%9D%97%E5%8A%A0%E6%95%B4%E6%9C%BA%E5%88%B6%E6%A0%B9%E6%9C%AC%E4%B8%8D%E5%85%B3%E5%BF%83%E6%98%AF%E5%90%A6%E5%87%BA%E7%8E%B0%E4%BA%86%E7%A1%AE%E7%8E%AF%E5%BA%94%E7%94%A8%2C%E5%8F%AA%E6%98%AF%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E6%8A%A5%E5%90%91%E6%95%B0%E6%8D%AE%E6%9D%82%E7%9A%84%E5%BC%95%E7%94%A8.%E9%9C%80%E8%A6%81%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%B7%B1%E4%BF%9D%E8%AF%81%2C%E7%9C%9F%E6%AD%A3%E5%8F%96%E5%80%BC%E7%9A%84%E6%97%B6%E5%80%99%E8%83%BD%E5%A4%9F%E5%8F%96%E5%88%B0%E4%BD%BF%E8%83%BD%E5%A4%9F%E5%8F%96%E5%88%B0%E4%BD%BFY%22%7D%2C%7B%22x%22%3A383.79407%2C%22y%22%3A472.55603%2C%22width%22%3A680.40543%2C%22height%22%3A39.29584%2C%22text%22%3A%22%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E4%B8%A4%E4%B8%AA%3A%E5%8F%AF%E4%BB%A5%E5%BC%95%E5%85%A5WEBPACK%E6%89%93%E5%8C%85%E6%8F%92%E4%BB%B6%E6%A3%80%E6%B5%8B%3A%22%7D%2C%7B%22x%22%3A98.58913%2C%22y%22%3A476.92792%2C%22width%22%3A23.73097%2C%22height%22%3A32.85228000000001%2C%22text%22%3A%22*%22%7D%2C%7B%22x%22%3A449.5108%2C%22y%22%3A528.88837%2C%22width%22%3A320.48834999999997%2C%22height%22%3A35.78842999999995%2C%22text%22%3A%221%2C%E4%BD%BF%E7%94%A8EXPORT%E5%87%BD%E6%95%B0%22%7D%2C%7B%22x%22%3A464.68234%2C%22y%22%3A580.56335%2C%22width%22%3A599.6975599999998%2C%22height%22%3A35.66134999999997%2C%22text%22%3A%222%2C%E6%8A%8A%E4%BB%96%E4%BB%AC%E6%94%BE%E5%9C%A8%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E9%87%8C%E4%B8%8D%E5%B0%B1%E6%B2%A1%E9%97%AE%E9%A2%98%E4%BA%86%E5%90%97%22%7D%2C%7B%22x%22%3A140.31902%2C%22y%22%3A634.1556%2C%22width%22%3A188.33758000000003%2C%22height%22%3A37.6345%2C%22text%22%3A%222%2C%E8%BE%93%E5%87%BA%E4%B8%8D%E5%90%8C%3A%22%7D%2C%7B%22x%22%3A1067.6931%2C%22y%22%3A686.22144%2C%22width%22%3A914.3693000000001%2C%22height%22%3A39.35996%2C%22text%22%3A%22LIGUANGWEI007%2C2022%2F7%2F4%2C%2019%3A13%20'FEAT%3A%E9%83%BD%E5%B9%B3%E9%93%BA%E5%BC%80%E6%9D%A5%22%7D%2C%7B%22x%22%3A312.05826%2C%22y%22%3A686.8576%2C%22width%22%3A701.88278%2C%22height%22%3A39.972999999999956%2C%22text%22%3A%22COMMONJS%E5%BF%85%E9%A1%BB%E5%9C%A8%E8%84%9A%E6%9C%AC%E6%89%A7%E8%A1%8C%E5%AE%8C%E5%AE%8C%E5%90%8E%2C%E6%89%8D%E8%83%BD%E7%A1%AE%E5%AE%9A%E8%BE%93%E5%87%BA%22%7D%2C%7B%22x%22%3A309.315%2C%22y%22%3A743.3166%2C%22width%22%3A475.89466%2C%22height%22%3A35.3741%2C%22text%22%3A%22ESM%E6%98%AF%E9%9D%99%E6%80%81%E7%BC%96%E8%AF%91%E6%97%B6%E5%B0%B1%E8%83%BD%E7%A1%AE%E5%AE%9A%E8%BE%93%E5%87%BA%E4%BA%86%22%7D%2C%7B%22x%22%3A98.06958%2C%22y%22%3A800.94904%2C%22width%22%3A26.6982%2C%22height%22%3A25.059810000000084%2C%22text%22%3A%22*%22%7D%2C%7B%22x%22%3A101.31814%2C%22y%22%3A848.7968%2C%22width%22%3A433.56826%2C%22height%22%3A39.03267000000005%2C%22text%22%3A%22*3%2C%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%3A%22%7D%2C%7B%22x%22%3A186.56685%2C%22y%22%3A903.2853%2C%22width%22%3A987.56855%2C%22height%22%3A37.32000000000005%2C%22text%22%3A%22NODE%E9%A1%B9%E7%9B%AE%E7%9A%84%E4%BB%A3%E7%A0%81%E5%8D%B3%E6%A8%A1%E5%9D%97%E9%83%BD%E5%9C%A8%E6%9C%AC%E5%9C%B0%E4%B8%89%E4%B8%89%3E%20%E6%89%80%E4%BB%A5CJM%E9%83%BD%E6%98%AF%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%22%7D%2C%7B%22x%22%3A96.61183%2C%22y%22%3A910.46967%2C%22width%22%3A40.47818000000001%2C%22height%22%3A28.553730000000087%2C%22text%22%3A%22K%22%7D%2C%7B%22x%22%3A191.66965%2C%22y%22%3A957.67896%2C%22width%22%3A1021.92725%2C%22height%22%3A37.93218999999999%2C%22text%22%3A%22%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E8%84%9A%E6%9C%AC%E9%83%BD%E9%9C%80%E8%A6%81%E5%BC%82%E6%AD%A5%E5%8E%BB%E8%AF%B7%E6%B1%82%E5%90%8E%E6%89%8D%E8%83%BD%E6%89%A7%E8%A1%8C%20%E4%B8%89%3E%E6%89%80%E4%BB%A5%E9%83%BD%E6%98%AF%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%22%7D%2C%7B%22x%22%3A95.52591%2C%22y%22%3A960.0107%2C%22width%22%3A38.52847000000001%2C%22height%22%3A30.484659999999963%2C%22text%22%3A%22*%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231d1d1d%22%2C%22id%22%3A%22ueca7037d%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u3640914b" id="u3640914b"><br></p><h1 data-lake-id="sxcNV" id="sxcNV"><span data-lake-id="uc573ab43" id="uc573ab43">23、</span><code data-lake-id="uf6cb3dee" id="uf6cb3dee"><span data-lake-id="u612eda75" id="u612eda75">http2</span></code><span data-lake-id="uea99bb01" id="uea99bb01">的新特性，多路复用原理以及用了什么算法？？</span></h1><p data-lake-id="u7858ed12" id="u7858ed12"><br></p><p data-lake-id="u84d3aee0" id="u84d3aee0"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671589581821-33f9a5fa-561a-494b-9273-40b28f748970.png%22%2C%22taskId%22%3A%22ue4cd5773-d948-4499-b7d0-d6f6a855ec2%22%2C%22clientId%22%3A%22u19662187-bc53-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A656.363622137338%2C%22height%22%3A107%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A50930%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1444%2C%22originHeight%22%3A236%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%222.2%E4%B8%BA%E4%BB%80%E4%B9%88HTTP%2F1.1%E4%B8%8D%E8%83%BD%E5%AE%9E%E7%8E%B0%5C%22%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8%5C%22%3F%20%5C%22%E7%9A%84%E5%8D%8F%E8%AE%AE%2CHTTP%2F1.1%E6%98%AF%E5%9F%BA%E4%BA%8E%5C%22%E6%96%87%E6%9C%AC%E5%88%86%E5%89%B2%5C%22%E8%A7%A3%E6%9E%90%E7%9A%84%E5%8D%8F%E8%AE%AE.%20%E7%AE%80%E5%8D%95%E5%9B%9E%E7%AD%94%E5%B0%B1%E6%98%AF%3AHTTP%2F2%E6%98%AF%E5%9F%BA%E4%BA%8E%E4%BA%8C%E8%BF%9B%E5%88%B6%5C%22%E5%B8%A7%5C%22%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A100.42933%2C%22y%22%3A75.89354%2C%22width%22%3A604.8158699999999%2C%22height%22%3A34.337630000000004%2C%22text%22%3A%222.2%E4%B8%BA%E4%BB%80%E4%B9%88HTTP%2F1.1%E4%B8%8D%E8%83%BD%E5%AE%9E%E7%8E%B0%5C%22%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8%5C%22%3F%22%7D%2C%7B%22x%22%3A634.0077%2C%22y%22%3A141.68652%2C%22width%22%3A597.072%2C%22height%22%3A37.85265000000001%2C%22text%22%3A%22%5C%22%E7%9A%84%E5%8D%8F%E8%AE%AE%2CHTTP%2F1.1%E6%98%AF%E5%9F%BA%E4%BA%8E%5C%22%E6%96%87%E6%9C%AC%E5%88%86%E5%89%B2%5C%22%E8%A7%A3%E6%9E%90%E7%9A%84%E5%8D%8F%E8%AE%AE.%22%7D%2C%7B%22x%22%3A100.10031%2C%22y%22%3A147.16995%2C%22width%22%3A517.06209%2C%22height%22%3A28.814809999999994%2C%22text%22%3A%22%E7%AE%80%E5%8D%95%E5%9B%9E%E7%AD%94%E5%B0%B1%E6%98%AF%3AHTTP%2F2%E6%98%AF%E5%9F%BA%E4%BA%8E%E4%BA%8C%E8%BF%9B%E5%88%B6%5C%22%E5%B8%A7%5C%22%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%239b9b9b%22%2C%22id%22%3A%22u9f16eba2%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u49b3f4b0" id="u49b3f4b0"><br></p><p data-lake-id="u8d03f59b" id="u8d03f59b"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671589530843-46fd7947-0cb9-4777-b311-57166a6f9808.png%22%2C%22taskId%22%3A%22uc2022daa-0db9-4d07-8673-a728b262a28%22%2C%22clientId%22%3A%22u19662187-bc53-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A778.1818013151819%2C%22height%22%3A719%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A949780%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1712%2C%22originHeight%22%3A1582%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22HTTP%2F2%20MULTIPLEXING%20HTTP%2F1.1%20BASELINE%201%20OPEN%20CONNECTION%20OPEN%20CONNECTION%20GET%2FINDEX.HTML%20GET%2FINDEX.HTML%202%20RESPONSE%20RESPONSE%20TIME%20GET%20%20%2FSTYLES.CSS%20GET%20%2FSTYLES.CSS%20GET%2FSCRIPTS.JS%20%E5%B9%B6%E8%A1%8C!!!%20%E5%85%B6%E5%AE%9E%E6%98%AF%E4%B8%B2%E8%A1%8C%20RESPONSE%20RESPONSE%20RESPONSE%20CLIENT%20RENDERS%20PAGE%20GET%20%20%2FSCRIPTS.JS%20CONNECTION%20REMAINS%20OPEN%207%20RESPONSE%20CLIENT%20RENDERS%20PAGE%20CONNECTION%20CLOSED%209%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A1070.8159%2C%22y%22%3A73.652756%2C%22width%22%3A415.50869999999986%2C%22height%22%3A49.88751400000001%2C%22text%22%3A%22HTTP%2F2%20MULTIPLEXING%22%7D%2C%7B%22x%22%3A274.94907%2C%22y%22%3A73.895905%2C%22width%22%3A366.63003000000003%2C%22height%22%3A41.95986500000001%2C%22text%22%3A%22HTTP%2F1.1%20BASELINE%22%7D%2C%7B%22x%22%3A442.7125%2C%22y%22%3A216.67497%2C%22width%22%3A34.17270000000002%2C%22height%22%3A44.13755999999998%2C%22text%22%3A%221%22%7D%2C%7B%22x%22%3A344.7299%2C%22y%22%3A277.66577%2C%22width%22%3A222.53590000000003%2C%22height%22%3A36.78530999999998%2C%22text%22%3A%22OPEN%20CONNECTION%22%7D%2C%7B%22x%22%3A1168.2922%2C%22y%22%3A279.1199%2C%22width%22%3A223.87059999999997%2C%22height%22%3A33.01368000000002%2C%22text%22%3A%22OPEN%20CONNECTION%22%7D%2C%7B%22x%22%3A347.56665%2C%22y%22%3A346.61096%2C%22width%22%3A203.67195000000004%2C%22height%22%3A65.63080000000002%2C%22text%22%3A%22GET%2FINDEX.HTML%22%7D%2C%7B%22x%22%3A1157.8085%2C%22y%22%3A346.90814%2C%22width%22%3A201.69650000000001%2C%22height%22%3A59.2287%2C%22text%22%3A%22GET%2FINDEX.HTML%22%7D%2C%7B%22x%22%3A230.3482%2C%22y%22%3A347.1636%2C%22width%22%3A28.211550000000017%2C%22height%22%3A30.335730000000012%2C%22text%22%3A%222%22%7D%2C%7B%22x%22%3A1182.9757%2C%22y%22%3A474.42325%2C%22width%22%3A143.0313000000001%2C%22height%22%3A53.78744999999998%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A357.3527%2C%22y%22%3A480.11694%2C%22width%22%3A146.93593999999996%2C%22height%22%3A64.25566000000003%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A814.2432%2C%22y%22%3A527.5445%2C%22width%22%3A100.30989999999997%2C%22height%22%3A37.95080000000007%2C%22text%22%3A%22TIME%22%7D%2C%7B%22x%22%3A1165.9039%2C%22y%22%3A585.67395%2C%22width%22%3A183.59680000000003%2C%22height%22%3A66.17059000000006%2C%22text%22%3A%22GET%20%20%2FSTYLES.CSS%22%7D%2C%7B%22x%22%3A357.7617%2C%22y%22%3A629.898%2C%22width%22%3A186.85213%2C%22height%22%3A87.70313999999996%2C%22text%22%3A%22GET%20%2FSTYLES.CSS%22%7D%2C%7B%22x%22%3A1167.813%2C%22y%22%3A638.7823%2C%22width%22%3A180.45349999999985%2C%22height%22%3A66.95159999999998%2C%22text%22%3A%22GET%2FSCRIPTS.JS%22%7D%2C%7B%22x%22%3A1129.2577%2C%22y%22%3A727.2453%2C%22width%22%3A166.12079999999992%2C%22height%22%3A37.098139999999944%2C%22text%22%3A%22%E5%B9%B6%E8%A1%8C!!!%22%7D%2C%7B%22x%22%3A106.89865%2C%22y%22%3A750.373%2C%22width%22%3A185.16635%2C%22height%22%3A41.47309999999993%2C%22text%22%3A%22%E5%85%B6%E5%AE%9E%E6%98%AF%E4%B8%B2%E8%A1%8C%22%7D%2C%7B%22x%22%3A1197.7251%2C%22y%22%3A790.4065%2C%22width%22%3A141.9922999999999%2C%22height%22%3A48.87474999999995%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A1195.6766%2C%22y%22%3A839.96344%2C%22width%22%3A145.49990000000003%2C%22height%22%3A50.76805999999999%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A357.23605%2C%22y%22%3A826.55035%2C%22width%22%3A147.49677000000003%2C%22height%22%3A66.66275000000007%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A1103.6522%2C%22y%22%3A964.3352%2C%22width%22%3A246.1485%2C%22height%22%3A34.262500000000045%2C%22text%22%3A%22CLIENT%20RENDERS%20PAGE%22%7D%2C%7B%22x%22%3A365.41907%2C%22y%22%3A993.3837%2C%22width%22%3A173.50092999999998%2C%22height%22%3A83.98580000000004%2C%22text%22%3A%22GET%20%20%2FSCRIPTS.JS%22%7D%2C%7B%22x%22%3A1117.1329%2C%22y%22%3A1142.4655%2C%22width%22%3A325.78959999999984%2C%22height%22%3A27.248199999999997%2C%22text%22%3A%22CONNECTION%20REMAINS%20OPEN%22%7D%2C%7B%22x%22%3A657.4543%2C%22y%22%3A1155.6167%2C%22width%22%3A27.073099999999954%2C%22height%22%3A37.7029%2C%22text%22%3A%227%22%7D%2C%7B%22x%22%3A357.39423%2C%22y%22%3A1192.056%2C%22width%22%3A146.49810000000002%2C%22height%22%3A66.28679999999986%2C%22text%22%3A%22RESPONSE%22%7D%2C%7B%22x%22%3A276.10315%2C%22y%22%3A1326.7958%2C%22width%22%3A252.58709999999996%2C%22height%22%3A37.02089999999998%2C%22text%22%3A%22CLIENT%20RENDERS%20PAGE%22%7D%2C%7B%22x%22%3A334.81793%2C%22y%22%3A1394.5353%2C%22width%22%3A239.23417%2C%22height%22%3A28.27430000000004%2C%22text%22%3A%22CONNECTION%20CLOSED%22%7D%2C%7B%22x%22%3A445.9573%2C%22y%22%3A1444.4545%2C%22width%22%3A23.496800000000007%2C%22height%22%3A29.962099999999964%2C%22text%22%3A%229%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23dfdfde%22%2C%22id%22%3A%22ue2dc14a8%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u588348c9" id="u588348c9"><br></p><p data-lake-id="u837b0611" id="u837b0611"><br></p><p data-lake-id="ud597e94c" id="ud597e94c"><span data-lake-id="u9842b4a7" id="u9842b4a7">​</span><br></p><h1 data-lake-id="ORpLl" id="ORpLl"><span data-lake-id="u89c37609" id="u89c37609">24、设计一个按需加载的 webpack loader ,如何设计 ？</span></h1><p data-lake-id="ufa818b99" id="ufa818b99"><span data-lake-id="ufbfeb99e" id="ufbfeb99e">我理解有点类似于</span><code data-lake-id="u31eb5d0f" id="u31eb5d0f"><span data-lake-id="uf42bd36d" id="uf42bd36d">AMD</span></code><span data-lake-id="uae1e57a7" id="uae1e57a7">的思路吧，即如何加载一个异步的js</span></p><p data-lake-id="u99f2e3fc" id="u99f2e3fc"><br></p><h1 data-lake-id="xpat3" id="xpat3"><span data-lake-id="ucd96b073" id="ucd96b073">26、浏览器器强刷？- 设置了</span><code data-lake-id="u952e1952" id="u952e1952"><span data-lake-id="u1ee0671c" id="u1ee0671c">cache-control</span></code><span data-lake-id="u1cc410a2" id="u1cc410a2"> 为 </span><code data-lake-id="u6e701ccf" id="u6e701ccf"><span data-lake-id="u3e640d05" id="u3e640d05">no-cache</span></code></h1><p data-lake-id="u338dfaf9" id="u338dfaf9"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671793223815-84d27f06-22ac-4376-b5d6-016bfb777e7b.png%22%2C%22taskId%22%3A%22ufbb5e0c9-7c63-4e44-9f14-a9c10f1c185%22%2C%22clientId%22%3A%22u7dc6fb82-2a13-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A778.4%2C%22height%22%3A457%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A273166%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1946%2C%22originHeight%22%3A1142%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E6%80%BB%E7%BB%93%20%E7%BD%91%E7%AB%99%E7%9A%84%E7%BC%93%E5%AD%98%E8%AE%BE%E7%BD%AE%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E6%98%AF%E5%85%A5%E5%8F%A3HTML%E6%96%87%E4%BB%B6CACHE-CONTROL%20%E8%AE%BE%E7%BD%AENO-CACHE%2C%E5%85%B6%E4%BB%96%E6%96%87%E4%BB%B6%20MAX-AGE%2C%E8%BF%99%E6%A0%B7%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6%E4%BC%9A%E7%94%A8%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98%E4%BD%86%E6%AF%8F%E6%AC%A1%E9%83%BD%E5%8D%8F%E5%95%86%2C%E8%83%BD%E5%8F%8A%E6%97%B6%E6%9B%B4%E6%96%B0%2C%E8%80%8C%E5%85%B6%E4%BB%96%E8%B5%84%E6%BA%90%E4%B8%8D%E4%BC%9A%E5%8F%91%E8%AF%B7%20%E6%B1%82%2C%E8%83%BD%E5%87%8F%E5%B0%91%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%8E%8B%E5%8A%9B.%20%E5%A6%82%E6%9E%9C%E8%A6%81%E6%9B%B4%E6%96%B0%E7%9A%84%E8%AF%9D%2CHTML%E6%96%87%E4%BB%B6%E5%8D%8F%E5%95%86%E5%90%8E%E5%8F%91%E7%8E%B0%E6%9C%89%E6%9B%B4%E6%96%B0%E4%BC%9A%E4%B8%8B%E8%BD%BD%E6%96%B0HTML%2C%20%E8%BF%99%E6%97%B6%E5%80%99%E5%85%B3%E8%81%94%E4%BA%86%E5%85%B6%E4%BB%96HASH%E7%9A%84%20%E6%96%87%E4%BB%B6%2C%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%9A%E4%B8%8B%E8%BD%BD%E6%96%B0%E7%9A%84%2C%E4%B8%8D%E4%BC%9A%E8%B5%B0%E5%88%B0%E4%B9%8B%E5%89%8D%E6%96%87%E4%BB%B6%E7%9A%84%E7%BC%93%E5%AD%98.%20%E8%80%8C%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E5%B0%B1%E6%98%AF%E8%AE%BE%E7%BD%AE%E4%BA%86CACHE-CONTROL%E4%B8%BANO-CACHE%2C%20%E8%BF%99%E4%B8%AA%E8%A1%8C%E4%B8%BA%E8%A2%ABCHROME%20DEVTOOLS%E9%9A%90%E8%97%8F%E4%BA%86%2C%E7%94%A8%20CHARLES%20%20%E6%8A%93%E5%8C%85%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%88%B0.%20%E8%BF%98%E6%9C%89%E4%B8%AA%E6%B8%85%E7%A9%BA%E7%BC%93%E5%AD%98%E5%B9%B6%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%E7%9A%84%E5%8A%9F%E8%83%BD%2C%E9%82%A3%E4%B8%AA%E6%98%AF%E6%B8%85%E6%8E%89%E6%9C%AC%E5%9C%B0%E7%9A%84%E7%BC%93%E5%AD%98%E5%86%8D%E5%8E%BB%E5%8D%8F%E5%95%86%2C%E8%83%BD%E4%BF%9D%E8%AF%81%E4%B8%80%E5%AE%9A%E6%98%AF%E6%8B%BF%E5%88%B0%20%E6%9C%80%E6%96%B0%E7%9A%84%E8%B5%84%E6%BA%90.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A866.8532%2C%22y%22%3A99.90604%2C%22width%22%3A95.03455999999994%2C%22height%22%3A48.68399999999998%2C%22text%22%3A%22%E6%80%BB%E7%BB%93%22%7D%2C%7B%22x%22%3A89.97379%2C%22y%22%3A273.3938%2C%22width%22%3A1578.57381%2C%22height%22%3A44.629399999999976%2C%22text%22%3A%22%E7%BD%91%E7%AB%99%E7%9A%84%E7%BC%93%E5%AD%98%E8%AE%BE%E7%BD%AE%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E6%98%AF%E5%85%A5%E5%8F%A3HTML%E6%96%87%E4%BB%B6CACHE-CONTROL%20%E8%AE%BE%E7%BD%AENO-CACHE%2C%E5%85%B6%E4%BB%96%E6%96%87%E4%BB%B6%22%7D%2C%7B%22x%22%3A88.41711%2C%22y%22%3A340.96924%2C%22width%22%3A1610.45959%2C%22height%22%3A43.74468999999999%2C%22text%22%3A%22MAX-AGE%2C%E8%BF%99%E6%A0%B7%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6%E4%BC%9A%E7%94%A8%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98%E4%BD%86%E6%AF%8F%E6%AC%A1%E9%83%BD%E5%8D%8F%E5%95%86%2C%E8%83%BD%E5%8F%8A%E6%97%B6%E6%9B%B4%E6%96%B0%2C%E8%80%8C%E5%85%B6%E4%BB%96%E8%B5%84%E6%BA%90%E4%B8%8D%E4%BC%9A%E5%8F%91%E8%AF%B7%22%7D%2C%7B%22x%22%3A89.94473%2C%22y%22%3A411.57568%2C%22width%22%3A437.00966999999997%2C%22height%22%3A50.02259000000004%2C%22text%22%3A%22%E6%B1%82%2C%E8%83%BD%E5%87%8F%E5%B0%91%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%8E%8B%E5%8A%9B.%22%7D%2C%7B%22x%22%3A90.0051%2C%22y%22%3A540.7259%2C%22width%22%3A1111.2062999999998%2C%22height%22%3A44.58489999999995%2C%22text%22%3A%22%E5%A6%82%E6%9E%9C%E8%A6%81%E6%9B%B4%E6%96%B0%E7%9A%84%E8%AF%9D%2CHTML%E6%96%87%E4%BB%B6%E5%8D%8F%E5%95%86%E5%90%8E%E5%8F%91%E7%8E%B0%E6%9C%89%E6%9B%B4%E6%96%B0%E4%BC%9A%E4%B8%8B%E8%BD%BD%E6%96%B0HTML%2C%22%7D%2C%7B%22x%22%3A1231.9874%2C%22y%22%3A541.9034%2C%22width%22%3A485.1559%2C%22height%22%3A42.22569999999996%2C%22text%22%3A%22%E8%BF%99%E6%97%B6%E5%80%99%E5%85%B3%E8%81%94%E4%BA%86%E5%85%B6%E4%BB%96HASH%E7%9A%84%22%7D%2C%7B%22x%22%3A92.12172%2C%22y%22%3A611.523%2C%22width%22%3A969.80858%2C%22height%22%3A46.535529999999994%2C%22text%22%3A%22%E6%96%87%E4%BB%B6%2C%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%9A%E4%B8%8B%E8%BD%BD%E6%96%B0%E7%9A%84%2C%E4%B8%8D%E4%BC%9A%E8%B5%B0%E5%88%B0%E4%B9%8B%E5%89%8D%E6%96%87%E4%BB%B6%E7%9A%84%E7%BC%93%E5%AD%98.%22%7D%2C%7B%22x%22%3A91.681946%2C%22y%22%3A740.7983%2C%22width%22%3A1148.6891540000001%2C%22height%22%3A43.8424%2C%22text%22%3A%22%E8%80%8C%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E5%B0%B1%E6%98%AF%E8%AE%BE%E7%BD%AE%E4%BA%86CACHE-CONTROL%E4%B8%BANO-CACHE%2C%22%7D%2C%7B%22x%22%3A1268.9072%2C%22y%22%3A742.93286%2C%22width%22%3A366.90639999999985%2C%22height%22%3A42.446289999999976%2C%22text%22%3A%22%E8%BF%99%E4%B8%AA%E8%A1%8C%E4%B8%BA%E8%A2%ABCHROME%22%7D%2C%7B%22x%22%3A90.51032%2C%22y%22%3A812.96155%2C%22width%22%3A800.94318%2C%22height%22%3A40.39255000000003%2C%22text%22%3A%22DEVTOOLS%E9%9A%90%E8%97%8F%E4%BA%86%2C%E7%94%A8%20CHARLES%20%20%E6%8A%93%E5%8C%85%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%88%B0.%22%7D%2C%7B%22x%22%3A89.98071%2C%22y%22%3A940.8374%2C%22width%22%3A1615.63759%2C%22height%22%3A46.646799999999985%2C%22text%22%3A%22%E8%BF%98%E6%9C%89%E4%B8%AA%E6%B8%85%E7%A9%BA%E7%BC%93%E5%AD%98%E5%B9%B6%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%E7%9A%84%E5%8A%9F%E8%83%BD%2C%E9%82%A3%E4%B8%AA%E6%98%AF%E6%B8%85%E6%8E%89%E6%9C%AC%E5%9C%B0%E7%9A%84%E7%BC%93%E5%AD%98%E5%86%8D%E5%8E%BB%E5%8D%8F%E5%95%86%2C%E8%83%BD%E4%BF%9D%E8%AF%81%E4%B8%80%E5%AE%9A%E6%98%AF%E6%8B%BF%E5%88%B0%22%7D%2C%7B%22x%22%3A91.07991%2C%22y%22%3A1011.86926%2C%22width%22%3A224.03189000000003%2C%22height%22%3A40.89693999999997%2C%22text%22%3A%22%E6%9C%80%E6%96%B0%E7%9A%84%E8%B5%84%E6%BA%90.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%232a2a2a%22%2C%22id%22%3A%22u68e95491%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ua38c0518" id="ua38c0518"><span data-lake-id="udcecdf9b" id="udcecdf9b">​</span><br></p><p data-lake-id="ub94dad49" id="ub94dad49"><br></p><p data-lake-id="u6a814c7b" id="u6a814c7b"><br></p><p data-lake-id="u09211d92" id="u09211d92"><br></p><p data-lake-id="u3bdb8fda" id="u3bdb8fda"><br></p><p data-lake-id="u8d86cb7e" id="u8d86cb7e"><span data-lake-id="u58ba27dd" id="u58ba27dd">​</span><br></p>`,public:1,status:1,view_status:0,read_status:1,likes_count:0,comments_count:0,content_updated_at:"2023-03-11T07:06:31.000Z",deleted_at:null,created_at:"2023-03-11T05:41:56.000Z",updated_at:"2023-03-11T08:37:49.000Z",published_at:"2023-03-11T08:25:59.000Z",first_published_at:"2023-03-11T05:41:55.842Z",word_count:1529,cover:"https://cdn.nlark.com/yuque/0/2022/png/687303/1655010106654-3cd1a4c7-55dd-44af-9b74-477309b37dd1.png",description:"1、请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]记住，补齐即可，然后再去掉/**  * 请把俩个数组   [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，  * 合并为 [A1,...",custom_description:null,hits:2,_serializer:"v2.doc_detail"},{id:117544262,slug:"dw2hzi18gqnsy6f9",title:"FE.面试题",book_id:36687938,book:{id:36687938,type:"Book",slug:"blog",name:"liguwe.github.io",user_id:687303,description:"liguwe's blog",creator_id:687303,public:1,items_count:8,likes_count:0,watches_count:0,content_updated_at:"2023-03-11T09:36:03.001Z",updated_at:"2023-03-11T09:36:03.000Z",created_at:"2023-03-11T03:13:50.000Z",namespace:"liguwe/blog",user:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},_serializer:"v2.book"},user_id:687303,creator:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},format:"lake",body:`<a name="U16pd"></a>
## 1、for循环中，return是可以中断循环的。这个需要注意了
\`\`\`typescript
/**************************************************************************
 * // ::::return 是可以中断循环的，之前都懵懵懂懂的
 * ***********************************************************************/
function test() {
    // 或者使用while一样的效果
    for (let i = 1; i < 10; i++) {
        if (i === 5) return;
        console.log(i);
    }
}
test();
\`\`\`

<a name="YNkQf"></a>
## 2、原地去重数组
\`\`\`javascript
function fn1(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}


// 移除所有重复的元素
// 书踹死indexof 和 lastIndexOf
function fn2(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    })
}
\`\`\`

<a name="Q7rRs"></a>
## 3、说说为什么引入React Hooks

- 类组件的问题：难于拆分、复用
- class的生命周期复杂，this指向的问题等
- hook从另外一个角度解决了这些问题！！
- 较多生命周期，且划分并不符合\`**“内聚性”**\`原则，例如 \`setInterval\` 和 \`clearInterval\` 这种具有强关联的逻辑被拆分在不同的生命周期方法中
- 复用问题：数据共享或功能复用，从最早之前的mixin / 高阶组件 、或者到 Render Props

<a name="iGsHk"></a>
# 4、什么是虚拟DOM，为什么要用什么虚拟DOM


<a name="FjHT5"></a>
# 5、说说长列表优化思路

- 虚列列表
- 类似于\`diff\`算法的思路
- 分片
- 节流等思路
<a name="cHzaq"></a>
# 6、sb，当时没做出来，一个树结构的深度优先应用
针对下面的树结构，实现函数 \`howOld(tree,name)\` 
\`\`\`javascript
var tree = {
    age: 100,
    name: 'a',
    child: [
        {
            age: 88,
            name: 'b'
        },
        {
            age: 66,
            name: 'c',
            child: [
                {
                    age: 0,
                    name: 'd',
                    child: [
                        {
                            age: -1,
                            name: 'e'
                        }
                    ]
                }]
        }]
}
\`\`\`

其实就是\`深度优先查找\` 

还是先写结构：
\`\`\`javascript
function howOld(tree, name) {

    let res = null;

    function dfs(root, name) {
      // ....
    }

    dfs(tree, name);

    return res;
}
\`\`\`

补充：
\`\`\`javascript
function howOld(tree, name) {
    let res = null;
    function dfs(root, name) {
        if (root.name === name) {
            res = root.age;
            return
        }
        if (Array.isArray(root.child)) {
            root.child.forEach((item) => {
                dfs(item, name)
            })
        }
    }
    dfs(tree, name);
    return res;
}
console.log(howOld(tree, 'a')) // 100
console.log(howOld(tree, 'b')) // 88
console.log(howOld(tree, 'e')) // -1
\`\`\`

:::danger
另外，深度优先，也可以使用\`栈\`的数据结构来实现 \`DFS\` ,  其实\`递归\`本身也是\`栈\`的体现
:::

<a name="JUwSF"></a>
# 7、递归实现反转字符串
关键就是\`return fn(str.slice(1)) + str[0]\`<br />注意是：一直递归  \`fn(str.slice(1))\`

\`\`\`javascript
/**
 *
 * @description 递归实现反转字符串
 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。
 如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，
 输入函数必须只有一个参数传入，必须返回字符串。

 */

let str = '1234';


function fn(str) {
    // ::::基准条件嘛，每次都从slice1开始，
    if (str === '') {
        return str;
    } else {
        // ::::关键
        return fn(str.slice(1)) + str[0]
    }
}

console.log(fn(str));
\`\`\`

<a name="yI9il"></a>
# 8、罗马数字转化整数

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671061026829-a88eba62-a5fa-42eb-a584-8ec29e7345b9.png#averageHue=%23252525&clientId=u5ba1859b-6989-4&from=paste&height=656&id=u8c926233&name=image.png&originHeight=1522&originWidth=1788&originalType=binary&ratio=1&rotation=0&showTitle=false&size=234002&status=done&style=none&taskId=u410a0773-cea5-4460-a311-63c1d2c8bb3&title=&width=770.2000122070312)<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671061360738-619c949d-6033-4f67-8a09-f0d0ce1b78c4.png#averageHue=%23242424&clientId=u5ba1859b-6989-4&from=paste&height=323&id=ud1a72d5f&name=image.png&originHeight=808&originWidth=1644&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81646&status=done&style=none&taskId=u01278be3-d9dc-479d-abbb-5edf0b20f64&title=&width=657.6)

\`\`\`javascript

function fn(str) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let res = [];
    let arr = str.split('');
    arr.forEach((item) => {
        res.push(map[item]);
    })
    
    let val = 0;
    for (let i = 0; i < res.length; i++) {

        let a = res[i];
        let b = res[i + 1];

        // ::::这里是例外的情况，需要特殊处理
        if (b && b > a) {
            val += b - a;
            //:::: 这里很关键，直接i++跳过了
            i++;
        } else {
            val += a;
        }
    }
    console.log(val);
    return val;
}


fn('MCMXCIV')
fn('LVIII')
fn('IX')

\`\`\`

<a name="TInfq"></a>
# 9、整数转成罗马数字
低频<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671061928885-a38d0d48-853a-4084-9f3a-abc8a6eb11ab.png#averageHue=%23252525&clientId=u5ba1859b-6989-4&from=paste&height=620&id=uce798191&name=image.png&originHeight=1550&originWidth=1732&originalType=binary&ratio=1&rotation=0&showTitle=false&size=233018&status=done&style=none&taskId=u2c345420-6920-4d26-a895-666f96cf8b1&title=&width=692.8)<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671061949217-0cea1bf3-2508-42ad-ad88-055b49c0faa0.png#averageHue=%23242424&clientId=u5ba1859b-6989-4&from=paste&height=326&id=u2b614474&name=image.png&originHeight=816&originWidth=1746&originalType=binary&ratio=1&rotation=0&showTitle=false&size=84780&status=done&style=none&taskId=ub6e70458-d7fe-454f-820d-06a78d4a4a7&title=&width=698.4)

？？？？贪心思路：
\`\`\`javascript
let intToRoman = function (num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        strs = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
        result = '';
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            result += strs[i];
        }
    }
    return result;
};
\`\`\`


<a name="r9z5W"></a>
# 10、实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject\0 
\`\`\`javascript
Promise.retry = function (promiseFn, times = 3) {
    return new Promise(async (resolve, reject) => {
        while (times--) {
            try {
                let ret = await promiseFn();
                resolve(ret);
                // 成功了就直接break了
                break;
            } catch (error) {
                if (!times) reject(error);
            }
        }
    });
};


function getProm() {
    const n = Math.random();
    return new Promise((resolve, reject) => {
        console.log(n);
        setTimeout(() =>  n > 0.9 ? resolve(n) : reject(n), 1000);
    });
}
Promise.retry(getProm,10);
\`\`\`

<a name="SYekL"></a>
# 11、柯里化参数固定场景 \`add(1)(2)(3)\0\`
\`\`\`javascript
/**
 * 柯里化
 * 参数固定场景
 * add(1)(2)(3)
 * add(4)(5)(6)
 *
 * */

const curry = (fn, ...args1) => {
    if (args1.length >= fn.length) {
        return fn(...args1)
    } else {
         // 两个return 
        return (...args2) => {
            return curry(fn, ...args1, ...args2);
        }
    }
}

function add1(x, y, z) {
    return x + y + z;
}

const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
\`\`\`

<a name="VwHiu"></a>
# 12、接上题，参数不固定的柯里化场景

\`\`\`typescript
/**
 * 柯里化
 * 参数不固定场景
 * add(1)(2)(3,4).sumof()
 *
 * */

const add = (...args) => {
    let vars = [];
    
    // 写一个函数，形成闭包
    const curried = (...arg2) => {
        // ::::这里 vars,记住了
        vars = [...vars, ...arg2];
        return curried
    }
    
    curried.sumof = () => {
        //todo 做你想做的事情
        return vars;
    }
    return curried(...args)
}

console.log(add(1)(2)(3, 4).sumof())
console.log(add(1)(2)(3, 4)(7, 8).sumof())
\`\`\`

<a name="sif8W"></a>
# 13、如何实现大文件上传
\`\`\`javascript
/*************************************************
 * 大文件上传
 *
 * 1、使用FileReader读文件流 ，blob.slice分割，md5文件唯一标识，hash.1.png
 * 2、试试监听xhr  ononpress实时获取上传进度
 * 3、都上传完后，需要再发一个请求告诉服务器做合并处理
 *
 ************************************************/
\`\`\`

<a name="HnlYe"></a>
# 14、如何实现图片懒加载
加载图片的时机：

- \`img[i].offsetTop < 可视区域视图高度 + scrollTop\`

<a name="PBMk4"></a>
# 15、说说\`jsonp\`的原理
![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1654739236669-f84c6c1f-a135-470b-b8eb-4d21f0dd1fb9.png#averageHue=%23f2efee&clientId=u33fd68fe-cfcb-4&from=paste&height=612&id=ud9c10d62&name=image.png&originHeight=1300&originWidth=1210&originalType=binary&ratio=1&rotation=0&showTitle=false&size=501103&status=done&style=stroke&taskId=ue7ecac9a-c2c8-4ece-8bc5-ddf8f1c84ae&title=&width=569.9937744140625)

<a name="x3y9h"></a>
# 16、各种循环的快慢
\`while最快，其次for、最后for in \`<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1654613959790-a0908bf5-375e-491c-9314-acaad3b68bc4.png#averageHue=%23747e83&clientId=u8d90aaeb-1258-4&from=paste&height=562&id=ub0de0a96&name=image.png&originHeight=850&originWidth=1206&originalType=binary&ratio=1&rotation=0&showTitle=false&size=474598&status=done&style=stroke&taskId=ucd2778c3-7a1b-40b4-bd05-78c72aee384&title=&width=798)


<a name="WQieP"></a>
# 17、自己实现\`Array.prototype.splice\0\`
\`\`\`javascript
Array.prototype.splice = Array.prototype.splice || function (start, deleteCount, ...addList) {

    //// :::: 处理开始 startIndex
    if (start < 0) {
        if (Math.abs(start) > this.length) {
            start = 0
        } else {
            start += this.length
        }
    }

    // ::::处理删除的的个数，如果没传，直接等于长度 - start
    if (typeof deleteCount === 'undefined') {
        deleteCount = this.length - start
    }

    // ::::处理，移除的
    const removeList = this.slice(start, start + deleteCount)
  
    const right = this.slice(start + deleteCount)

    //// :::: 重新修改this -> 原数组 ，即加入addlist数组片段 + right剩余的数组片段
    // ::::  关键是这里，没有发现所谓的left,因为left还在this里呢，也就是本身没变
  
    let addIndex = start
    addList.concat(right).forEach(item => {
        this[addIndex] = item
        addIndex++
    })

    this.length = addIndex

    return removeList
}

\`\`\`


<a name="JaZ1p"></a>
# 18、实现\`1,2,3,5,7,8,9\`  =>  \`1~3,5,7~9\0\`

没啥技巧，也不用再想了，如果真出现，写出下面的写法就OK了

\`\`\`javascript
/**
 * 1,2,3,5,7,8,9  =>  1~3,5,7~9
 * 1,2,3,5,7,8,10,12,13,14,100,101,102   =>   1~3,5,7~8,10,12~14,100~102
 * */
function fn(str) {
    let arr = str.split(',').map(Number);
    let len = arr.length;
    let s = new Array(len).fill(false);
    // 第一步
    s[0] = arr[0];
    // 第二步 遍历
    for (let i = 1; i < len; i++) {
        let item = arr[i];
        let prev = arr[i - 1];
        let next = arr[i + 1];
        if (prev && next && item === prev + 1 && next === item + 1) {
            continue;
        } else if (prev && next && item === prev + 1 && next !== item + 1) {
            s[i] = \`~\${arr[i]}\`;
        } else if (prev && next && (item !== prev + 1 || next !== item + 1)) {
            s[i] = \`\${arr[i]}\`;
        } else if (prev && !next) {
            if (item === prev + 1) {
                s[i] = \`~\${arr[i]}\`;
            } else {
                s[i] = \`\${arr[i]}\`;
            }
        }
    }
    // 第三步 处理空值情况
    return s.filter(Boolean).join(',').replace(/,~/g, '~')
}

let str = '1,2,3,5,7,8,10,12,13,14,100,101,102';

console.log(fn('1,2,3,5,7,8,9'));
console.log(fn('1,2,3,5,7,8,10,12,13,14,100,101,102'));

\`\`\`

<a name="WWdFG"></a>
# 19、要求设计 \`LazyMan\` 类，实现以下功能\0

\`\`\`javascript
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
\`\`\`

\`\`\`javascript
class LazyManClass {
    constructor(name) {
        this.taskList = [];
        this.name = name;
        console.log(\`Hi I am \${this.name}\`);
        setTimeout(() => {
            this.next();
        }, 0);
    }
    eat (name) {
        var that = this;

        // 这里包装了一下，放在一个函数里面
        var fn = (function (n) {
            return function () {
                console.log(\`I am eating \${n}\`)
                that.next();
            }
        })(name);

        this.taskList.push(fn);

        return this;
    }
    sleepFirst (time) {
        var that = this;
        var fn = (function (t) {
            return function () {
                setTimeout(() => {
                    console.log(\`等待了\${t}秒...\`)
                    that.next();
                }, t * 1000);
            }
        })(time);
         // 优先级较高
      
        this.taskList.unshift(fn);
        return this;
    }
    sleep (time) {
        var that = this
        var fn = (function (t) {
            return function () {
                setTimeout(() => {
                    console.log(\`等待了\${t}秒...\`)
                    that.next();
                }, t * 1000);
            }
        })(time);
        this.taskList.push(fn);
        return this;
    }
    next () {
        var fn = this.taskList.shift();
        fn && fn();
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');



\`\`\`


<a name="hcLfs"></a>
# 20、几个异步代码的执行结果

\`\`\`javascript
function wait() {
    return new Promise(resolve =>
        setTimeout(resolve, 1000)
    )
}

async function main() {
    console.time();
    await wait();
    await wait();
    await wait();
    // default: 3.008s ，
    // 三个串行，互相依赖
    console.timeEnd();
}

main();
\`\`\`

改成如下呢？

\`\`\`javascript
function wait() {
    return new Promise(resolve =>
        setTimeout(resolve,  1000)
    )
}

// 先说结果，等待1秒，同步执行。
async function main() {
    console.time();
    let a = wait();
    let b = wait();
    let c = wait();
    await a;
    await b;
    await c;
    console.timeEnd();
    // default: 1.002s
}
main();
\`\`\`

**解释如下：**

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671088379697-9462a341-b626-4b30-be45-17a397496396.png#averageHue=%2313171b&clientId=u5ba1859b-6989-4&from=paste&height=430&id=u93d36360&name=image.png&originHeight=1076&originWidth=1780&originalType=binary&ratio=1&rotation=0&showTitle=false&size=222610&status=done&style=stroke&taskId=u44c2ae8f-d92d-4767-8752-491f28d9c67&title=&width=712)


<a name="w9I25"></a>
# 21、看下面代码如何输出

\`\`\`javascript
const list = [1, 2, 3]
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}
\`\`\`

使用\`forEach\` , 隔 \`1s\` ，输出 \`1/4/9\` 

\`\`\`javascript
// foreach 肯定不行
function test() {
    list.forEach(async x=> {
        const res = await square(x)
        console.log(res)
    })
}
test()
\`\`\`

每1s，输出1、 4、  9

\`\`\`javascript
// for of 可以
console.log('test1:');
async function  test1() {
    for(let x of list){
        const res = await square(x)
        console.log(res)
    }
}
test1()
\`\`\`

使用 \`for\` 循环，每1s，输出1、 4、  9
\`\`\`javascript
console.log('test3:');
async function test3() {
    for (let i = 0; i < list.length; i++) {
        let x = list[i]
        const res = await square(x)
        console.log(res)
    }
}
test3()
\`\`\`

<a name="KBEx3"></a>
# 22、字符串仅由\`小写字母\`和\` [] \`组成，且字符串不会包含多余的空格。\0转成如下结构

\`\`\`javascript
/**
 *字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
 示例一: 'abc' --> {value: 'abc'}
 示例二：'[abc[bcd[def]]]' --> 
 				{value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 */
\`\`\`

先看如下代码
\`\`\`javascript
let s = '[abc[bcd[def]]]';
let r = /[\\[\\]]/g
console.log(s.split(r))

/*************************************************
 *     [
 *     '',    'abc', 'bcd',
 *         'def', '',    '',
 *         ''
 *     ]
 ************************************************/
\`\`\`
所以需要 \` s.split(r)\`后还需要过滤空字符串，如下：
\`\`\`typescript
let arr = str.split(/[\\[\\]]/).filter((item) => {
  return !!item
});
\`\`\`

当然也可以使用正则 \`match\` 产出一个数组，如下

\`\`\`typescript
let ss = '[abc[bcd[def]]]'
var list = ss.match(/\\w+/g)
console.log(list);
// [ 'abc', 'bcd', 'def' ]
\`\`\`

单独看\`let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];\0\` 如何转化成上面要求的对象。

\`\`\`typescript
let ss = '[abc[bcd[def]]]'
var list = ss.match(/\\w+/g)

let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];

// ::::很简洁吧！！！

let res = {};
arr.reduce((prev, next, index, array) => {
    // console.log(prev, next, index);
    prev.value = next;
    // :::: 除了最后一个，都返回 prev.children
    if (array.length - 1 !== index) {
        prev.children = {}
        return prev.children;
    }
}, res)

console.log(JSON.stringify(res));
\`\`\`

再看看\`reduce\`方法注意事项：

\`\`\`typescript
let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];
let res = {};
// ::::没传初始值，index只会打印 1、2、3、4 忽略 0
arr.reduce((a, b, index, array) => {
    console.log(a, b, index, array);
    // ::::打印结果如下
    /**
     *      abc         bcd      1    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *      undefined   def      2    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *      undefined   gfg      3    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *      undefined   ccc      4    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *
     * */
})

// ::::传了初始值，index打印从 0 到 4
arr.reduce((a, b, index, array) => {
    console.log(a, b, index, array);
    // ::::打印结果如下
    /**
     *          {}          abc   0        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   bcd   1        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   def   2        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   gfg   3        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   ccc   4        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * */
}, res)
\`\`\`


<a name="ynh7n"></a>
# 23、正则的一个应用

\`\`\`typescript
/**
 * url有三种情况
 * https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33
 * https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33
 * https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33
 * 匹配elective后的数字输出（写出你认为的最优解法）:
 * */
\`\`\`
方法1：正则
\`\`\`typescript
function fn(url) {
    let reg = /elective=(.*)&/g
    // 使用exec,记住，是第2个元素
    let arr = reg.exec(url);
    let res = [];
    res = arr && arr[1] ? arr[1].split(',') : [];
    console.log(res);
}
\`\`\`
上面\`exec\`的结果：<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090415809-4cfdfba9-9171-4388-ad9b-b8cae1197b1a.png#averageHue=%231c1a19&clientId=u5ba1859b-6989-4&from=paste&height=150&id=u6d53627d&name=image.png&originHeight=450&originWidth=2164&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71738&status=done&style=stroke&taskId=u0e0806d3-28d8-4499-a948-7a3a25ee66c&title=&width=721.3333333333334)

---

方法2：直接使用\`new URLSearchParams\0(url)\`

\`\`\`typescript
let params = new URLSearchParams('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33');
console.log(params.get('elective'))
\`\`\`
![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090489770-2ba4d4c1-0699-4c13-99f8-acf4028145a3.png#averageHue=%239fa1a0&clientId=u5ba1859b-6989-4&from=paste&height=71&id=uac83d730&name=image.png&originHeight=214&originWidth=2198&originalType=binary&ratio=1&rotation=0&showTitle=false&size=70199&status=done&style=stroke&taskId=u2e0c7d6a-3721-4395-955c-189cabbe47f&title=&width=732.6666666666666)

<a name="bciww"></a>
# 24、找出字符串中连续出现最多的字符和个数\0
\`\`\`typescript
/**
 *  找出字符串中连续出现最多的字符和个数 #220
 * 'abcaakjbb' => {'a':2,'b':2}
 * 'abbkejsbcccwqaa' => {'c':3}
 * */
\`\`\`

\`let reg = /(\\w)\\1*/g\`

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090672927-f89caa97-d7bb-4531-b1d5-d28f596b240e.png#averageHue=%231e1b1a&clientId=u5ba1859b-6989-4&from=paste&height=217&id=u33f6b8ea&name=image.png&originHeight=650&originWidth=1776&originalType=binary&ratio=1&rotation=0&showTitle=false&size=114485&status=done&style=stroke&taskId=u49a08a65-c29f-4c30-9b22-c1d50435af7&title=&width=592)<br />看打印结果：然后遍历就好了！！！<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090724883-a8c27a4b-8027-4f8f-8b6c-bb1664bb0828.png#averageHue=%231b1b1b&clientId=u5ba1859b-6989-4&from=paste&height=245&id=u690bb355&name=image.png&originHeight=734&originWidth=1156&originalType=binary&ratio=1&rotation=0&showTitle=false&size=59412&status=done&style=stroke&taskId=u0eff5dcc-ff59-441d-ab0f-c3d05defa4e&title=&width=385.3333333333333)

<a name="fwoFm"></a>
# 25、将下面的数组结构转成树形结构

\`\`\`typescript
/**
 *  21、数组转成树形结构
 *  如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）
 *  转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重） #243
 * */
\`\`\`
先去重：使用\`map\`去重，然后\`map.values()\`<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090865710-50c94080-c573-4f27-a823-62a0b6b8ea85.png#averageHue=%231d1d1c&clientId=u5ba1859b-6989-4&from=paste&height=551&id=u5ed4802f&name=image.png&originHeight=1314&originWidth=1396&originalType=binary&ratio=1&rotation=0&showTitle=false&size=162074&status=done&style=stroke&taskId=u778b19e5-0ff2-41db-af7b-521554ad147&title=&width=585.3312683105469)

:::danger
最好再写一遍，花了两个小时，不一定又写不出来了
:::

\`\`\`typescript
// :::: 已经去重了
let arr = [
    {id: 1, pid: 0},
    {id: 2, pid: 1},
    {id: 3, pid: 2},
    {id: 4, pid: 1},
    {id: 5, pid: 3},
    {id: 6, pid: 2}];

/**
 * @rootId 跟节点的 pid
 * */
function fn(array, rootId) {
    // :::: 第1步： 借助map对象， 转成以id为 key , item为value的 对象
    let map = {};
    array.forEach((item) => {
        map[item.id] = {...item} // 浅拷贝
    });
    const res = [];
    // ::::遍历
    array.forEach((item) => {
        let {id, pid} = item;
        // ::::如果是根节点，那么直接push 给 res
        if (pid === rootId) {
            res.push(map[id]);
        //// ::::   否则，操作后面的map,判断是否有children，没有就复制给一个
        } else {
            if (map[pid].children) {
                map[pid].children.push(map[id]);
            } else {
                map[pid].children = [map[id]];
            }
        }
    })
    return res;
}


console.log(JSON.stringify(fn(arr,0)));

\`\`\`

再看下一个题，完全类似的题

\`\`\`typescript
//  id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
//  现在要求实现一个 convert 方法，把原始 list 转换成树形结构，
//  parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
let list = [
  {id: 1, name: '部门A', parentId: 0},
  {id: 2, name: '部门B', parentId: 0},
  {id: 3, name: '部门C', parentId: 1},
  {id: 4, name: '部门D', parentId: 1},
  {id: 5, name: '部门E', parentId: 2},
  {id: 6, name: '部门F', parentId: 3},
  {id: 7, name: '部门G', parentId: 2},
  {id: 8, name: '部门H', parentId: 4}
];


function fn(list, root) {
  let res = [];
  let map = {};
  list.forEach((item) => {
    map[item.id] = {...item};
  });
  for (let i = 0; i < list.length; i++) {
    let {id, parentId} = list[i];
    if (parentId === root) {
      res.push(map[id]);
    } else {
      if (map[parentId].children) {
        // 这里是pid
        map[parentId].children.push(map[id]);
      } else {
        map[parentId].children = [map[id]];
      }
    }
  }
  return res;
}

console.log(JSON.stringify(fn(list, 0)))
\`\`\`
\0



`,body_draft:`<a name="U16pd"></a>
## 1、for循环中，return是可以中断循环的。这个需要注意了
\`\`\`typescript
/**************************************************************************
 * // ::::return 是可以中断循环的，之前都懵懵懂懂的
 * ***********************************************************************/
function test() {
    // 或者使用while一样的效果
    for (let i = 1; i < 10; i++) {
        if (i === 5) return;
        console.log(i);
    }
}
test();
\`\`\`

<a name="YNkQf"></a>
## 2、原地去重数组
\`\`\`javascript
function fn1(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}


// 移除所有重复的元素
// 书踹死indexof 和 lastIndexOf
function fn2(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    })
}
\`\`\`

<a name="Q7rRs"></a>
## 3、说说为什么引入React Hooks

- 类组件的问题：难于拆分、复用
- class的生命周期复杂，this指向的问题等
- hook从另外一个角度解决了这些问题！！
- 较多生命周期，且划分并不符合\`**“内聚性”**\`原则，例如 \`setInterval\` 和 \`clearInterval\` 这种具有强关联的逻辑被拆分在不同的生命周期方法中
- 复用问题：数据共享或功能复用，从最早之前的mixin / 高阶组件 、或者到 Render Props

<a name="iGsHk"></a>
# 4、什么是虚拟DOM，为什么要用什么虚拟DOM


<a name="FjHT5"></a>
# 5、说说长列表优化思路

- 虚列列表
- 类似于\`diff\`算法的思路
- 分片
- 节流等思路
<a name="cHzaq"></a>
# 6、sb，当时没做出来，一个树结构的深度优先应用
针对下面的树结构，实现函数 \`howOld(tree,name)\` 
\`\`\`javascript
var tree = {
    age: 100,
    name: 'a',
    child: [
        {
            age: 88,
            name: 'b'
        },
        {
            age: 66,
            name: 'c',
            child: [
                {
                    age: 0,
                    name: 'd',
                    child: [
                        {
                            age: -1,
                            name: 'e'
                        }
                    ]
                }]
        }]
}
\`\`\`

其实就是\`深度优先查找\` 

还是先写结构：
\`\`\`javascript
function howOld(tree, name) {

    let res = null;

    function dfs(root, name) {
      // ....
    }

    dfs(tree, name);

    return res;
}
\`\`\`

补充：
\`\`\`javascript
function howOld(tree, name) {
    let res = null;
    function dfs(root, name) {
        if (root.name === name) {
            res = root.age;
            return
        }
        if (Array.isArray(root.child)) {
            root.child.forEach((item) => {
                dfs(item, name)
            })
        }
    }
    dfs(tree, name);
    return res;
}
console.log(howOld(tree, 'a')) // 100
console.log(howOld(tree, 'b')) // 88
console.log(howOld(tree, 'e')) // -1
\`\`\`

:::danger
另外，深度优先，也可以使用\`栈\`的数据结构来实现 \`DFS\` ,  其实\`递归\`本身也是\`栈\`的体现
:::

<a name="JUwSF"></a>
# 7、递归实现反转字符串
关键就是\`return fn(str.slice(1)) + str[0]\`<br />注意是：一直递归  \`fn(str.slice(1))\`

\`\`\`javascript
/**
 *
 * @description 递归实现反转字符串
 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。
 如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，
 输入函数必须只有一个参数传入，必须返回字符串。

 */

let str = '1234';


function fn(str) {
    // ::::基准条件嘛，每次都从slice1开始，
    if (str === '') {
        return str;
    } else {
        // ::::关键
        return fn(str.slice(1)) + str[0]
    }
}

console.log(fn(str));
\`\`\`

<a name="yI9il"></a>
# 8、罗马数字转化整数

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671061026829-a88eba62-a5fa-42eb-a584-8ec29e7345b9.png#averageHue=%23252525&clientId=u5ba1859b-6989-4&from=paste&height=656&id=u8c926233&name=image.png&originHeight=1522&originWidth=1788&originalType=binary&ratio=1&rotation=0&showTitle=false&size=234002&status=done&style=none&taskId=u410a0773-cea5-4460-a311-63c1d2c8bb3&title=&width=770.2000122070312)<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671061360738-619c949d-6033-4f67-8a09-f0d0ce1b78c4.png#averageHue=%23242424&clientId=u5ba1859b-6989-4&from=paste&height=323&id=ud1a72d5f&name=image.png&originHeight=808&originWidth=1644&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81646&status=done&style=none&taskId=u01278be3-d9dc-479d-abbb-5edf0b20f64&title=&width=657.6)

\`\`\`javascript

function fn(str) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let res = [];
    let arr = str.split('');
    arr.forEach((item) => {
        res.push(map[item]);
    })
    
    let val = 0;
    for (let i = 0; i < res.length; i++) {

        let a = res[i];
        let b = res[i + 1];

        // ::::这里是例外的情况，需要特殊处理
        if (b && b > a) {
            val += b - a;
            //:::: 这里很关键，直接i++跳过了
            i++;
        } else {
            val += a;
        }
    }
    console.log(val);
    return val;
}


fn('MCMXCIV')
fn('LVIII')
fn('IX')

\`\`\`

<a name="TInfq"></a>
# 9、整数转成罗马数字
低频<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671061928885-a38d0d48-853a-4084-9f3a-abc8a6eb11ab.png#averageHue=%23252525&clientId=u5ba1859b-6989-4&from=paste&height=620&id=uce798191&name=image.png&originHeight=1550&originWidth=1732&originalType=binary&ratio=1&rotation=0&showTitle=false&size=233018&status=done&style=none&taskId=u2c345420-6920-4d26-a895-666f96cf8b1&title=&width=692.8)<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671061949217-0cea1bf3-2508-42ad-ad88-055b49c0faa0.png#averageHue=%23242424&clientId=u5ba1859b-6989-4&from=paste&height=326&id=u2b614474&name=image.png&originHeight=816&originWidth=1746&originalType=binary&ratio=1&rotation=0&showTitle=false&size=84780&status=done&style=none&taskId=ub6e70458-d7fe-454f-820d-06a78d4a4a7&title=&width=698.4)

？？？？贪心思路：
\`\`\`javascript
let intToRoman = function (num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        strs = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
        result = '';
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            result += strs[i];
        }
    }
    return result;
};
\`\`\`


<a name="r9z5W"></a>
# 10、实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject\0 
\`\`\`javascript
Promise.retry = function (promiseFn, times = 3) {
    return new Promise(async (resolve, reject) => {
        while (times--) {
            try {
                let ret = await promiseFn();
                resolve(ret);
                // 成功了就直接break了
                break;
            } catch (error) {
                if (!times) reject(error);
            }
        }
    });
};


function getProm() {
    const n = Math.random();
    return new Promise((resolve, reject) => {
        console.log(n);
        setTimeout(() =>  n > 0.9 ? resolve(n) : reject(n), 1000);
    });
}
Promise.retry(getProm,10);
\`\`\`

<a name="SYekL"></a>
# 11、柯里化参数固定场景 \`add(1)(2)(3)\0\`
\`\`\`javascript
/**
 * 柯里化
 * 参数固定场景
 * add(1)(2)(3)
 * add(4)(5)(6)
 *
 * */

const curry = (fn, ...args1) => {
    if (args1.length >= fn.length) {
        return fn(...args1)
    } else {
         // 两个return 
        return (...args2) => {
            return curry(fn, ...args1, ...args2);
        }
    }
}

function add1(x, y, z) {
    return x + y + z;
}

const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
\`\`\`

<a name="VwHiu"></a>
# 12、接上题，参数不固定的柯里化场景

\`\`\`typescript
/**
 * 柯里化
 * 参数不固定场景
 * add(1)(2)(3,4).sumof()
 *
 * */

const add = (...args) => {
    let vars = [];
    
    // 写一个函数，形成闭包
    const curried = (...arg2) => {
        // ::::这里 vars,记住了
        vars = [...vars, ...arg2];
        return curried
    }
    
    curried.sumof = () => {
        //todo 做你想做的事情
        return vars;
    }
    return curried(...args)
}

console.log(add(1)(2)(3, 4).sumof())
console.log(add(1)(2)(3, 4)(7, 8).sumof())
\`\`\`

<a name="sif8W"></a>
# 13、如何实现大文件上传
\`\`\`javascript
/*************************************************
 * 大文件上传
 *
 * 1、使用FileReader读文件流 ，blob.slice分割，md5文件唯一标识，hash.1.png
 * 2、试试监听xhr  ononpress实时获取上传进度
 * 3、都上传完后，需要再发一个请求告诉服务器做合并处理
 *
 ************************************************/
\`\`\`

<a name="HnlYe"></a>
# 14、如何实现图片懒加载
加载图片的时机：

- \`img[i].offsetTop < 可视区域视图高度 + scrollTop\`

<a name="PBMk4"></a>
# 15、说说\`jsonp\`的原理
![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1654739236669-f84c6c1f-a135-470b-b8eb-4d21f0dd1fb9.png#averageHue=%23f2efee&clientId=u33fd68fe-cfcb-4&from=paste&height=612&id=ud9c10d62&name=image.png&originHeight=1300&originWidth=1210&originalType=binary&ratio=1&rotation=0&showTitle=false&size=501103&status=done&style=stroke&taskId=ue7ecac9a-c2c8-4ece-8bc5-ddf8f1c84ae&title=&width=569.9937744140625)

<a name="x3y9h"></a>
# 16、各种循环的快慢
\`while最快，其次for、最后for in \`<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1654613959790-a0908bf5-375e-491c-9314-acaad3b68bc4.png#averageHue=%23747e83&clientId=u8d90aaeb-1258-4&from=paste&height=562&id=ub0de0a96&name=image.png&originHeight=850&originWidth=1206&originalType=binary&ratio=1&rotation=0&showTitle=false&size=474598&status=done&style=stroke&taskId=ucd2778c3-7a1b-40b4-bd05-78c72aee384&title=&width=798)


<a name="WQieP"></a>
# 17、自己实现\`Array.prototype.splice\0\`
\`\`\`javascript
Array.prototype.splice = Array.prototype.splice || function (start, deleteCount, ...addList) {

    //// :::: 处理开始 startIndex
    if (start < 0) {
        if (Math.abs(start) > this.length) {
            start = 0
        } else {
            start += this.length
        }
    }

    // ::::处理删除的的个数，如果没传，直接等于长度 - start
    if (typeof deleteCount === 'undefined') {
        deleteCount = this.length - start
    }

    // ::::处理，移除的
    const removeList = this.slice(start, start + deleteCount)
  
    const right = this.slice(start + deleteCount)

    //// :::: 重新修改this -> 原数组 ，即加入addlist数组片段 + right剩余的数组片段
    // ::::  关键是这里，没有发现所谓的left,因为left还在this里呢，也就是本身没变
  
    let addIndex = start
    addList.concat(right).forEach(item => {
        this[addIndex] = item
        addIndex++
    })

    this.length = addIndex

    return removeList
}

\`\`\`


<a name="JaZ1p"></a>
# 18、实现\`1,2,3,5,7,8,9\`  =>  \`1~3,5,7~9\0\`

没啥技巧，也不用再想了，如果真出现，写出下面的写法就OK了

\`\`\`javascript
/**
 * 1,2,3,5,7,8,9  =>  1~3,5,7~9
 * 1,2,3,5,7,8,10,12,13,14,100,101,102   =>   1~3,5,7~8,10,12~14,100~102
 * */
function fn(str) {
    let arr = str.split(',').map(Number);
    let len = arr.length;
    let s = new Array(len).fill(false);
    // 第一步
    s[0] = arr[0];
    // 第二步 遍历
    for (let i = 1; i < len; i++) {
        let item = arr[i];
        let prev = arr[i - 1];
        let next = arr[i + 1];
        if (prev && next && item === prev + 1 && next === item + 1) {
            continue;
        } else if (prev && next && item === prev + 1 && next !== item + 1) {
            s[i] = \`~\${arr[i]}\`;
        } else if (prev && next && (item !== prev + 1 || next !== item + 1)) {
            s[i] = \`\${arr[i]}\`;
        } else if (prev && !next) {
            if (item === prev + 1) {
                s[i] = \`~\${arr[i]}\`;
            } else {
                s[i] = \`\${arr[i]}\`;
            }
        }
    }
    // 第三步 处理空值情况
    return s.filter(Boolean).join(',').replace(/,~/g, '~')
}

let str = '1,2,3,5,7,8,10,12,13,14,100,101,102';

console.log(fn('1,2,3,5,7,8,9'));
console.log(fn('1,2,3,5,7,8,10,12,13,14,100,101,102'));

\`\`\`

<a name="WWdFG"></a>
# 19、要求设计 \`LazyMan\` 类，实现以下功能\0

\`\`\`javascript
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
\`\`\`

\`\`\`javascript
class LazyManClass {
    constructor(name) {
        this.taskList = [];
        this.name = name;
        console.log(\`Hi I am \${this.name}\`);
        setTimeout(() => {
            this.next();
        }, 0);
    }
    eat (name) {
        var that = this;

        // 这里包装了一下，放在一个函数里面
        var fn = (function (n) {
            return function () {
                console.log(\`I am eating \${n}\`)
                that.next();
            }
        })(name);

        this.taskList.push(fn);

        return this;
    }
    sleepFirst (time) {
        var that = this;
        var fn = (function (t) {
            return function () {
                setTimeout(() => {
                    console.log(\`等待了\${t}秒...\`)
                    that.next();
                }, t * 1000);
            }
        })(time);
         // 优先级较高
      
        this.taskList.unshift(fn);
        return this;
    }
    sleep (time) {
        var that = this
        var fn = (function (t) {
            return function () {
                setTimeout(() => {
                    console.log(\`等待了\${t}秒...\`)
                    that.next();
                }, t * 1000);
            }
        })(time);
        this.taskList.push(fn);
        return this;
    }
    next () {
        var fn = this.taskList.shift();
        fn && fn();
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');



\`\`\`


<a name="hcLfs"></a>
# 20、几个异步代码的执行结果

\`\`\`javascript
function wait() {
    return new Promise(resolve =>
        setTimeout(resolve, 1000)
    )
}

async function main() {
    console.time();
    await wait();
    await wait();
    await wait();
    // default: 3.008s ，
    // 三个串行，互相依赖
    console.timeEnd();
}

main();
\`\`\`

改成如下呢？

\`\`\`javascript
function wait() {
    return new Promise(resolve =>
        setTimeout(resolve,  1000)
    )
}

// 先说结果，等待1秒，同步执行。
async function main() {
    console.time();
    let a = wait();
    let b = wait();
    let c = wait();
    await a;
    await b;
    await c;
    console.timeEnd();
    // default: 1.002s
}
main();
\`\`\`

**解释如下：**

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671088379697-9462a341-b626-4b30-be45-17a397496396.png#averageHue=%2313171b&clientId=u5ba1859b-6989-4&from=paste&height=430&id=u93d36360&name=image.png&originHeight=1076&originWidth=1780&originalType=binary&ratio=1&rotation=0&showTitle=false&size=222610&status=done&style=stroke&taskId=u44c2ae8f-d92d-4767-8752-491f28d9c67&title=&width=712)


<a name="w9I25"></a>
# 21、看下面代码如何输出

\`\`\`javascript
const list = [1, 2, 3]
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}
\`\`\`

使用\`forEach\` , 隔 \`1s\` ，输出 \`1/4/9\` 

\`\`\`javascript
// foreach 肯定不行
function test() {
    list.forEach(async x=> {
        const res = await square(x)
        console.log(res)
    })
}
test()
\`\`\`

每1s，输出1、 4、  9

\`\`\`javascript
// for of 可以
console.log('test1:');
async function  test1() {
    for(let x of list){
        const res = await square(x)
        console.log(res)
    }
}
test1()
\`\`\`

使用 \`for\` 循环，每1s，输出1、 4、  9
\`\`\`javascript
console.log('test3:');
async function test3() {
    for (let i = 0; i < list.length; i++) {
        let x = list[i]
        const res = await square(x)
        console.log(res)
    }
}
test3()
\`\`\`

<a name="KBEx3"></a>
# 22、字符串仅由\`小写字母\`和\` [] \`组成，且字符串不会包含多余的空格。\0转成如下结构

\`\`\`javascript
/**
 *字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
 示例一: 'abc' --> {value: 'abc'}
 示例二：'[abc[bcd[def]]]' --> 
 				{value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 */
\`\`\`

先看如下代码
\`\`\`javascript
let s = '[abc[bcd[def]]]';
let r = /[\\[\\]]/g
console.log(s.split(r))

/*************************************************
 *     [
 *     '',    'abc', 'bcd',
 *         'def', '',    '',
 *         ''
 *     ]
 ************************************************/
\`\`\`
所以需要 \` s.split(r)\`后还需要过滤空字符串，如下：
\`\`\`typescript
let arr = str.split(/[\\[\\]]/).filter((item) => {
  return !!item
});
\`\`\`

当然也可以使用正则 \`match\` 产出一个数组，如下

\`\`\`typescript
let ss = '[abc[bcd[def]]]'
var list = ss.match(/\\w+/g)
console.log(list);
// [ 'abc', 'bcd', 'def' ]
\`\`\`

单独看\`let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];\0\` 如何转化成上面要求的对象。

\`\`\`typescript
let ss = '[abc[bcd[def]]]'
var list = ss.match(/\\w+/g)

let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];

// ::::很简洁吧！！！

let res = {};
arr.reduce((prev, next, index, array) => {
    // console.log(prev, next, index);
    prev.value = next;
    // :::: 除了最后一个，都返回 prev.children
    if (array.length - 1 !== index) {
        prev.children = {}
        return prev.children;
    }
}, res)

console.log(JSON.stringify(res));
\`\`\`

再看看\`reduce\`方法注意事项：

\`\`\`typescript
let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];
let res = {};
// ::::没传初始值，index只会打印 1、2、3、4 忽略 0
arr.reduce((a, b, index, array) => {
    console.log(a, b, index, array);
    // ::::打印结果如下
    /**
     *      abc         bcd      1    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *      undefined   def      2    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *      undefined   gfg      3    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *      undefined   ccc      4    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *
     * */
})

// ::::传了初始值，index打印从 0 到 4
arr.reduce((a, b, index, array) => {
    console.log(a, b, index, array);
    // ::::打印结果如下
    /**
     *          {}          abc   0        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   bcd   1        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   def   2        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   gfg   3        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   ccc   4        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * */
}, res)
\`\`\`


<a name="ynh7n"></a>
# 23、正则的一个应用

\`\`\`typescript
/**
 * url有三种情况
 * https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33
 * https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33
 * https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33
 * 匹配elective后的数字输出（写出你认为的最优解法）:
 * */
\`\`\`
方法1：正则
\`\`\`typescript
function fn(url) {
    let reg = /elective=(.*)&/g
    // 使用exec,记住，是第2个元素
    let arr = reg.exec(url);
    let res = [];
    res = arr && arr[1] ? arr[1].split(',') : [];
    console.log(res);
}
\`\`\`
上面\`exec\`的结果：<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090415809-4cfdfba9-9171-4388-ad9b-b8cae1197b1a.png#averageHue=%231c1a19&clientId=u5ba1859b-6989-4&from=paste&height=150&id=u6d53627d&name=image.png&originHeight=450&originWidth=2164&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71738&status=done&style=stroke&taskId=u0e0806d3-28d8-4499-a948-7a3a25ee66c&title=&width=721.3333333333334)

---

方法2：直接使用\`new URLSearchParams\0(url)\`

\`\`\`typescript
let params = new URLSearchParams('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33');
console.log(params.get('elective'))
\`\`\`
![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090489770-2ba4d4c1-0699-4c13-99f8-acf4028145a3.png#averageHue=%239fa1a0&clientId=u5ba1859b-6989-4&from=paste&height=71&id=uac83d730&name=image.png&originHeight=214&originWidth=2198&originalType=binary&ratio=1&rotation=0&showTitle=false&size=70199&status=done&style=stroke&taskId=u2e0c7d6a-3721-4395-955c-189cabbe47f&title=&width=732.6666666666666)

<a name="bciww"></a>
# 24、找出字符串中连续出现最多的字符和个数\0
\`\`\`typescript
/**
 *  找出字符串中连续出现最多的字符和个数 #220
 * 'abcaakjbb' => {'a':2,'b':2}
 * 'abbkejsbcccwqaa' => {'c':3}
 * */
\`\`\`

\`let reg = /(\\w)\\1*/g\`

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090672927-f89caa97-d7bb-4531-b1d5-d28f596b240e.png#averageHue=%231e1b1a&clientId=u5ba1859b-6989-4&from=paste&height=217&id=u33f6b8ea&name=image.png&originHeight=650&originWidth=1776&originalType=binary&ratio=1&rotation=0&showTitle=false&size=114485&status=done&style=stroke&taskId=u49a08a65-c29f-4c30-9b22-c1d50435af7&title=&width=592)<br />看打印结果：然后遍历就好了！！！<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090724883-a8c27a4b-8027-4f8f-8b6c-bb1664bb0828.png#averageHue=%231b1b1b&clientId=u5ba1859b-6989-4&from=paste&height=245&id=u690bb355&name=image.png&originHeight=734&originWidth=1156&originalType=binary&ratio=1&rotation=0&showTitle=false&size=59412&status=done&style=stroke&taskId=u0eff5dcc-ff59-441d-ab0f-c3d05defa4e&title=&width=385.3333333333333)

<a name="fwoFm"></a>
# 25、将下面的数组结构转成树形结构

\`\`\`typescript
/**
 *  21、数组转成树形结构
 *  如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）
 *  转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重） #243
 * */
\`\`\`
先去重：使用\`map\`去重，然后\`map.values()\`<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1671090865710-50c94080-c573-4f27-a823-62a0b6b8ea85.png#averageHue=%231d1d1c&clientId=u5ba1859b-6989-4&from=paste&height=551&id=u5ed4802f&name=image.png&originHeight=1314&originWidth=1396&originalType=binary&ratio=1&rotation=0&showTitle=false&size=162074&status=done&style=stroke&taskId=u778b19e5-0ff2-41db-af7b-521554ad147&title=&width=585.3312683105469)

:::danger
最好再写一遍，花了两个小时，不一定又写不出来了
:::

\`\`\`typescript
// :::: 已经去重了
let arr = [
    {id: 1, pid: 0},
    {id: 2, pid: 1},
    {id: 3, pid: 2},
    {id: 4, pid: 1},
    {id: 5, pid: 3},
    {id: 6, pid: 2}];

/**
 * @rootId 跟节点的 pid
 * */
function fn(array, rootId) {
    // :::: 第1步： 借助map对象， 转成以id为 key , item为value的 对象
    let map = {};
    array.forEach((item) => {
        map[item.id] = {...item} // 浅拷贝
    });
    const res = [];
    // ::::遍历
    array.forEach((item) => {
        let {id, pid} = item;
        // ::::如果是根节点，那么直接push 给 res
        if (pid === rootId) {
            res.push(map[id]);
        //// ::::   否则，操作后面的map,判断是否有children，没有就复制给一个
        } else {
            if (map[pid].children) {
                map[pid].children.push(map[id]);
            } else {
                map[pid].children = [map[id]];
            }
        }
    })
    return res;
}


console.log(JSON.stringify(fn(arr,0)));

\`\`\`

再看下一个题，完全类似的题

\`\`\`typescript
//  id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
//  现在要求实现一个 convert 方法，把原始 list 转换成树形结构，
//  parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
let list = [
  {id: 1, name: '部门A', parentId: 0},
  {id: 2, name: '部门B', parentId: 0},
  {id: 3, name: '部门C', parentId: 1},
  {id: 4, name: '部门D', parentId: 1},
  {id: 5, name: '部门E', parentId: 2},
  {id: 6, name: '部门F', parentId: 3},
  {id: 7, name: '部门G', parentId: 2},
  {id: 8, name: '部门H', parentId: 4}
];


function fn(list, root) {
  let res = [];
  let map = {};
  list.forEach((item) => {
    map[item.id] = {...item};
  });
  for (let i = 0; i < list.length; i++) {
    let {id, parentId} = list[i];
    if (parentId === root) {
      res.push(map[id]);
    } else {
      if (map[parentId].children) {
        // 这里是pid
        map[parentId].children.push(map[id]);
      } else {
        map[parentId].children = [map[id]];
      }
    }
  }
  return res;
}

console.log(JSON.stringify(fn(list, 0)))
\`\`\`
\0



`,body_html:`<!doctype html><div class="lake-content" typography="classic"><h2 id="U16pd"><span class="ne-text">1、for循环中，return是可以中断循环的。这个需要注意了</span></h2><pre data-language="typescript" id="YgHz4" class="ne-codeblock language-typescript">/**************************************************************************
 * // ::::return 是可以中断循环的，之前都懵懵懂懂的
 * ***********************************************************************/
function test() {
    // 或者使用while一样的效果
    for (let i = 1; i &lt; 10; i++) {
        if (i === 5) return;
        console.log(i);
    }
}
test();</pre><p id="u469f36fd" class="ne-p"><span class="ne-text"></span></p><h2 id="YNkQf"><span class="ne-text">2、原地去重数组</span></h2><pre data-language="javascript" id="iaetU" class="ne-codeblock language-javascript">function fn1(arr) {
    return arr.filter((item, index) =&gt; {
        return arr.indexOf(item) === index;
    })
}


// 移除所有重复的元素
// 书踹死indexof 和 lastIndexOf
function fn2(arr) {
    return arr.filter((item, index) =&gt; {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    })
}</pre><p id="u3472a330" class="ne-p"><span class="ne-text"></span></p><h2 id="Q7rRs"><span class="ne-text">3、说说为什么引入React Hooks</span></h2><ul class="ne-ul"><li id="ue4efa04a"><span class="ne-text">类组件的问题：难于拆分、复用</span></li><li id="u1f2564f4"><span class="ne-text">class的生命周期复杂，this指向的问题等</span></li><li id="u49aa95e4"><span class="ne-text">hook从另外一个角度解决了这些问题！！</span></li><li id="u6eed881e"><span class="ne-text">较多生命周期，且划分并不符合</span><code class="ne-code"><strong><span class="ne-text" style="color: #E8323C">“内聚性”</span></strong></code><span class="ne-text">原则，例如 </span><code class="ne-code"><span class="ne-text">setInterval</span></code><span class="ne-text"> 和 </span><code class="ne-code"><span class="ne-text">clearInterval</span></code><span class="ne-text"> 这种具有强关联的逻辑被拆分在不同的生命周期方法中</span></li><li id="u2171bac4"><span class="ne-text">复用问题：数据共享或功能复用，从最早之前的mixin / 高阶组件 、或者到 Render Props</span></li></ul><p id="uea9be8fd" class="ne-p"><span class="ne-text"></span></p><h1 id="iGsHk"><span class="ne-text">4、什么是虚拟DOM，为什么要用什么虚拟DOM</span></h1><p id="ua4a1d618" class="ne-p"><br></p><p id="u798e187f" class="ne-p"><br></p><h1 id="FjHT5"><span class="ne-text">5、说说长列表优化思路</span></h1><ul class="ne-ul"><li id="u94a2e0f0"><span class="ne-text">虚列列表</span></li><li id="u8549dbb5"><span class="ne-text">类似于</span><code class="ne-code"><span class="ne-text">diff</span></code><span class="ne-text">算法的思路</span></li><li id="u4c7fe595"><span class="ne-text">分片</span></li><li id="ueeb62ce0"><span class="ne-text">节流等思路</span></li></ul><h1 id="cHzaq"><span class="ne-text">6、sb，当时没做出来，一个树结构的深度优先应用</span></h1><p id="u58bfcdcc" class="ne-p"><span class="ne-text">针对下面的树结构，实现函数 </span><code class="ne-code"><span class="ne-text">howOld(tree,name)</span></code><span class="ne-text"> </span></p><pre data-language="javascript" id="hQcUV" class="ne-codeblock language-javascript">var tree = {
    age: 100,
    name: 'a',
    child: [
        {
            age: 88,
            name: 'b'
        },
        {
            age: 66,
            name: 'c',
            child: [
                {
                    age: 0,
                    name: 'd',
                    child: [
                        {
                            age: -1,
                            name: 'e'
                        }
                    ]
                }]
        }]
}</pre><p id="u811f6a20" class="ne-p"><br></p><p id="ub66ee107" class="ne-p"><span class="ne-text">其实就是</span><code class="ne-code"><span class="ne-text">深度优先查找</span></code><span class="ne-text"> </span></p><p id="uab657269" class="ne-p"><span class="ne-text"></span></p><p id="u1a8c4c63" class="ne-p"><span class="ne-text">还是先写结构：</span></p><pre data-language="javascript" id="NPUFr" class="ne-codeblock language-javascript">function howOld(tree, name) {

    let res = null;

    function dfs(root, name) {
      // ....
    }

    dfs(tree, name);

    return res;
}</pre><p id="uce62fb60" class="ne-p"><br></p><p id="uaab4c604" class="ne-p"><span class="ne-text">补充：</span></p><pre data-language="javascript" id="Fxxn7" class="ne-codeblock language-javascript">function howOld(tree, name) {
    let res = null;
    function dfs(root, name) {
        if (root.name === name) {
            res = root.age;
            return
        }
        if (Array.isArray(root.child)) {
            root.child.forEach((item) =&gt; {
                dfs(item, name)
            })
        }
    }
    dfs(tree, name);
    return res;
}
console.log(howOld(tree, 'a')) // 100
console.log(howOld(tree, 'b')) // 88
console.log(howOld(tree, 'e')) // -1</pre><p id="u965f6d81" class="ne-p"><span class="ne-text"></span></p><div data-type="danger" class="ne-alert"><p id="u1527151e" class="ne-p"><span class="ne-text">另外，深度优先，也可以使用</span><code class="ne-code"><span class="ne-text">栈</span></code><span class="ne-text">的数据结构来实现 </span><code class="ne-code"><span class="ne-text">DFS</span></code><span class="ne-text"> ,  其实</span><code class="ne-code"><span class="ne-text">递归</span></code><span class="ne-text">本身也是</span><code class="ne-code"><span class="ne-text">栈</span></code><span class="ne-text">的体现</span></p></div><p id="u89691e22" class="ne-p"><br></p><h1 id="JUwSF"><span class="ne-text">7、递归实现反转字符串</span></h1><p id="ub45c9044" class="ne-p"><span class="ne-text">关键就是</span><code class="ne-code"><span class="ne-text">return fn(str.slice(1)) + str[0]</span></code></p><p id="u1bdb9446" class="ne-p"><span class="ne-text">注意是：一直递归  </span><code class="ne-code"><span class="ne-text">fn(str.slice(1))</span></code></p><p id="ued71e277" class="ne-p"><span class="ne-text"></span></p><pre data-language="javascript" id="pMdRF" class="ne-codeblock language-javascript">/**
 *
 * @description 递归实现反转字符串
 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。
 如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，
 输入函数必须只有一个参数传入，必须返回字符串。

 */

let str = '1234';


function fn(str) {
    // ::::基准条件嘛，每次都从slice1开始，
    if (str === '') {
        return str;
    } else {
        // ::::关键
        return fn(str.slice(1)) + str[0]
    }
}

console.log(fn(str));</pre><p id="u1494e765" class="ne-p"><br></p><h1 id="yI9il"><span class="ne-text">8、罗马数字转化整数</span></h1><p id="u9bd9c5f2" class="ne-p"><span class="ne-text"></span></p><p id="u8a69f3bb" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671061026829-a88eba62-a5fa-42eb-a584-8ec29e7345b9.png" width="770.2000122070312" id="u8c926233" class="ne-image"></p><p id="u338043a2" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671061360738-619c949d-6033-4f67-8a09-f0d0ce1b78c4.png" width="657.6" id="ud1a72d5f" class="ne-image"></p><p id="uff80d743" class="ne-p"><br></p><pre data-language="javascript" id="YwllR" class="ne-codeblock language-javascript">
function fn(str) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let res = [];
    let arr = str.split('');
    arr.forEach((item) =&gt; {
        res.push(map[item]);
    })
    
    let val = 0;
    for (let i = 0; i &lt; res.length; i++) {

        let a = res[i];
        let b = res[i + 1];

        // ::::这里是例外的情况，需要特殊处理
        if (b &amp;&amp; b &gt; a) {
            val += b - a;
            //:::: 这里很关键，直接i++跳过了
            i++;
        } else {
            val += a;
        }
    }
    console.log(val);
    return val;
}


fn('MCMXCIV')
fn('LVIII')
fn('IX')
</pre><p id="udb1f1c12" class="ne-p"><br></p><h1 id="TInfq"><span class="ne-text">9、整数转成罗马数字</span></h1><p id="u77ca6c77" class="ne-p"><span class="ne-text"></span><span data-color="0" id="sBTYR" class="ne-label">低频</span></p><p id="u6f7be6bb" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671061928885-a38d0d48-853a-4084-9f3a-abc8a6eb11ab.png" width="692.8" id="uce798191" class="ne-image"></p><p id="ucfc4ab99" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671061949217-0cea1bf3-2508-42ad-ad88-055b49c0faa0.png" width="698.4" id="u2b614474" class="ne-image"></p><p id="ucc116c65" class="ne-p"><br></p><p id="u47d967d3" class="ne-p"><span class="ne-text">？？？？贪心思路：</span></p><pre data-language="javascript" id="KQjYH" class="ne-codeblock language-javascript">let intToRoman = function (num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        strs = [&quot;M&quot;, &quot;CM&quot;, &quot;D&quot;, &quot;CD&quot;, &quot;C&quot;, &quot;XC&quot;, &quot;L&quot;, &quot;XL&quot;, &quot;X&quot;, &quot;IX&quot;, &quot;V&quot;, &quot;IV&quot;, &quot;I&quot;],
        result = '';
    for (let i = 0; i &lt; values.length; i++) {
        while (num &gt;= values[i]) {
            num -= values[i];
            result += strs[i];
        }
    }
    return result;
};</pre><p id="u5d869315" class="ne-p"><span class="ne-text"></span></p><p id="ud4dfc10d" class="ne-p"><br></p><h1 id="r9z5W"><span class="ne-text">10、实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject\0 </span></h1><pre data-language="javascript" id="I3Dil" class="ne-codeblock language-javascript">Promise.retry = function (promiseFn, times = 3) {
    return new Promise(async (resolve, reject) =&gt; {
        while (times--) {
            try {
                let ret = await promiseFn();
                resolve(ret);
                // 成功了就直接break了
                break;
            } catch (error) {
                if (!times) reject(error);
            }
        }
    });
};


function getProm() {
    const n = Math.random();
    return new Promise((resolve, reject) =&gt; {
        console.log(n);
        setTimeout(() =&gt;  n &gt; 0.9 ? resolve(n) : reject(n), 1000);
    });
}
Promise.retry(getProm,10);</pre><p id="u997bc3db" class="ne-p"><br></p><h1 id="SYekL"><span class="ne-text">11、柯里化参数固定场景 </span><code class="ne-code"><span class="ne-text">add(1)(2)(3)\0</span></code></h1><pre data-language="javascript" id="elkUl" class="ne-codeblock language-javascript">/**
 * 柯里化
 * 参数固定场景
 * add(1)(2)(3)
 * add(4)(5)(6)
 *
 * */

const curry = (fn, ...args1) =&gt; {
    if (args1.length &gt;= fn.length) {
        return fn(...args1)
    } else {
         // 两个return 
        return (...args2) =&gt; {
            return curry(fn, ...args1, ...args2);
        }
    }
}

function add1(x, y, z) {
    return x + y + z;
}

const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));</pre><p id="uca535bd9" class="ne-p"><br></p><h1 id="VwHiu"><span class="ne-text">12、接上题，参数不固定的柯里化场景</span></h1><p id="u56528b02" class="ne-p"><br></p><pre data-language="typescript" id="eouym" class="ne-codeblock language-typescript">/**
 * 柯里化
 * 参数不固定场景
 * add(1)(2)(3,4).sumof()
 *
 * */

const add = (...args) =&gt; {
    let vars = [];
    
    // 写一个函数，形成闭包
    const curried = (...arg2) =&gt; {
        // ::::这里 vars,记住了
        vars = [...vars, ...arg2];
        return curried
    }
    
    curried.sumof = () =&gt; {
        //todo 做你想做的事情
        return vars;
    }
    return curried(...args)
}

console.log(add(1)(2)(3, 4).sumof())
console.log(add(1)(2)(3, 4)(7, 8).sumof())</pre><p id="uad88cec4" class="ne-p"><span class="ne-text"></span></p><h1 id="sif8W"><span class="ne-text">13、如何实现大文件上传</span></h1><pre data-language="javascript" id="jU5sb" class="ne-codeblock language-javascript">/*************************************************
 * 大文件上传
 *
 * 1、使用FileReader读文件流 ，blob.slice分割，md5文件唯一标识，hash.1.png
 * 2、试试监听xhr  ononpress实时获取上传进度
 * 3、都上传完后，需要再发一个请求告诉服务器做合并处理
 *
 ************************************************/</pre><p id="u85ba6bc3" class="ne-p"><br></p><h1 id="HnlYe"><span class="ne-text">14、如何实现图片懒加载</span></h1><p id="ud62acaf0" class="ne-p"><span class="ne-text">加载图片的时机：</span></p><ul class="ne-ul"><li id="u605ab160"><span class="ne-text"></span><code class="ne-code"><span class="ne-text">img[i].offsetTop &lt; 可视区域视图高度 + scrollTop</span></code></li></ul><p id="u7fc71715" class="ne-p"><br></p><h1 id="PBMk4"><span class="ne-text">15、说说</span><code class="ne-code"><span class="ne-text">jsonp</span></code><span class="ne-text">的原理</span></h1><p id="uce53bdbd" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1654739236669-f84c6c1f-a135-470b-b8eb-4d21f0dd1fb9.png" width="569.9937744140625" id="ud9c10d62" class="ne-image"></p><p id="uccd9442f" class="ne-p"><br></p><h1 id="x3y9h"><span class="ne-text">16、各种循环的快慢</span></h1><p id="u606e0fc7" class="ne-p"><code class="ne-code"><span class="ne-text">while最快，其次for、最后for in </span></code></p><p id="ue751d957" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1654613959790-a0908bf5-375e-491c-9314-acaad3b68bc4.png" width="798" id="ub0de0a96" class="ne-image"></p><p id="ucb696392" class="ne-p"><br></p><p id="u7d41a682" class="ne-p"><br></p><h1 id="WQieP"><span class="ne-text">17、自己实现</span><code class="ne-code"><span class="ne-text">Array.prototype.splice\0</span></code></h1><pre data-language="javascript" id="PgkKE" class="ne-codeblock language-javascript">Array.prototype.splice = Array.prototype.splice || function (start, deleteCount, ...addList) {

    //// :::: 处理开始 startIndex
    if (start &lt; 0) {
        if (Math.abs(start) &gt; this.length) {
            start = 0
        } else {
            start += this.length
        }
    }

    // ::::处理删除的的个数，如果没传，直接等于长度 - start
    if (typeof deleteCount === 'undefined') {
        deleteCount = this.length - start
    }

    // ::::处理，移除的
    const removeList = this.slice(start, start + deleteCount)
  
    const right = this.slice(start + deleteCount)

    //// :::: 重新修改this -&gt; 原数组 ，即加入addlist数组片段 + right剩余的数组片段
    // ::::  关键是这里，没有发现所谓的left,因为left还在this里呢，也就是本身没变
  
    let addIndex = start
    addList.concat(right).forEach(item =&gt; {
        this[addIndex] = item
        addIndex++
    })

    this.length = addIndex

    return removeList
}
</pre><p id="u5b1241f8" class="ne-p"><br></p><p id="ua17e4baa" class="ne-p"><br></p><h1 id="JaZ1p"><span class="ne-text">18、实现</span><code class="ne-code"><span class="ne-text">1,2,3,5,7,8,9</span></code><span class="ne-text">  =&gt;  </span><code class="ne-code"><span class="ne-text">1~3,5,7~9\0</span></code></h1><p id="uf7a8c8a9" class="ne-p"><br></p><p id="ubc2b0b0a" class="ne-p"><span class="ne-text">没啥技巧，也不用再想了，如果真出现，写出下面的写法就OK了</span></p><p id="u67a421f1" class="ne-p"><span class="ne-text"></span></p><pre data-language="javascript" id="CtJqv" class="ne-codeblock language-javascript">/**
 * 1,2,3,5,7,8,9  =&gt;  1~3,5,7~9
 * 1,2,3,5,7,8,10,12,13,14,100,101,102   =&gt;   1~3,5,7~8,10,12~14,100~102
 * */
function fn(str) {
    let arr = str.split(',').map(Number);
    let len = arr.length;
    let s = new Array(len).fill(false);
    // 第一步
    s[0] = arr[0];
    // 第二步 遍历
    for (let i = 1; i &lt; len; i++) {
        let item = arr[i];
        let prev = arr[i - 1];
        let next = arr[i + 1];
        if (prev &amp;&amp; next &amp;&amp; item === prev + 1 &amp;&amp; next === item + 1) {
            continue;
        } else if (prev &amp;&amp; next &amp;&amp; item === prev + 1 &amp;&amp; next !== item + 1) {
            s[i] = \`~\${arr[i]}\`;
        } else if (prev &amp;&amp; next &amp;&amp; (item !== prev + 1 || next !== item + 1)) {
            s[i] = \`\${arr[i]}\`;
        } else if (prev &amp;&amp; !next) {
            if (item === prev + 1) {
                s[i] = \`~\${arr[i]}\`;
            } else {
                s[i] = \`\${arr[i]}\`;
            }
        }
    }
    // 第三步 处理空值情况
    return s.filter(Boolean).join(',').replace(/,~/g, '~')
}

let str = '1,2,3,5,7,8,10,12,13,14,100,101,102';

console.log(fn('1,2,3,5,7,8,9'));
console.log(fn('1,2,3,5,7,8,10,12,13,14,100,101,102'));
</pre><p id="u9b0399bc" class="ne-p"><br></p><h1 id="WWdFG"><span class="ne-text">19、要求设计 </span><code class="ne-code"><span class="ne-text">LazyMan</span></code><span class="ne-text"> 类，实现以下功能\0</span></h1><p id="u2b9c2a30" class="ne-p"><br></p><pre data-language="javascript" id="T7ydj" class="ne-codeblock language-javascript">LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food</pre><p id="u24629085" class="ne-p"><br></p><pre data-language="javascript" id="NpSBk" class="ne-codeblock language-javascript">class LazyManClass {
    constructor(name) {
        this.taskList = [];
        this.name = name;
        console.log(\`Hi I am \${this.name}\`);
        setTimeout(() =&gt; {
            this.next();
        }, 0);
    }
    eat (name) {
        var that = this;

        // 这里包装了一下，放在一个函数里面
        var fn = (function (n) {
            return function () {
                console.log(\`I am eating \${n}\`)
                that.next();
            }
        })(name);

        this.taskList.push(fn);

        return this;
    }
    sleepFirst (time) {
        var that = this;
        var fn = (function (t) {
            return function () {
                setTimeout(() =&gt; {
                    console.log(\`等待了\${t}秒...\`)
                    that.next();
                }, t * 1000);
            }
        })(time);
         // 优先级较高
      
        this.taskList.unshift(fn);
        return this;
    }
    sleep (time) {
        var that = this
        var fn = (function (t) {
            return function () {
                setTimeout(() =&gt; {
                    console.log(\`等待了\${t}秒...\`)
                    that.next();
                }, t * 1000);
            }
        })(time);
        this.taskList.push(fn);
        return this;
    }
    next () {
        var fn = this.taskList.shift();
        fn &amp;&amp; fn();
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');


</pre><p id="uf4b3e59b" class="ne-p"><br></p><p id="u598a4a79" class="ne-p"><br></p><h1 id="hcLfs"><span class="ne-text">20、几个异步代码的执行结果</span></h1><p id="u0a5f7ebf" class="ne-p"><br></p><pre data-language="javascript" id="DvbdO" class="ne-codeblock language-javascript">function wait() {
    return new Promise(resolve =&gt;
        setTimeout(resolve, 1000)
    )
}

async function main() {
    console.time();
    await wait();
    await wait();
    await wait();
    // default: 3.008s ，
    // 三个串行，互相依赖
    console.timeEnd();
}

main();</pre><p id="u2a9f2468" class="ne-p"><br></p><p id="uf4a4b467" class="ne-p"><span class="ne-text">改成如下呢？</span></p><p id="ub94d304e" class="ne-p"><span class="ne-text"></span></p><pre data-language="javascript" id="vp7wE" class="ne-codeblock language-javascript">function wait() {
    return new Promise(resolve =&gt;
        setTimeout(resolve,  1000)
    )
}

// 先说结果，等待1秒，同步执行。
async function main() {
    console.time();
    let a = wait();
    let b = wait();
    let c = wait();
    await a;
    await b;
    await c;
    console.timeEnd();
    // default: 1.002s
}
main();</pre><p id="uc3615237" class="ne-p"><br></p><p id="u12d3f3a0" class="ne-p"><strong><span class="ne-text" style="color: #E8323C">解释如下：</span></strong></p><p id="u85c8c133" class="ne-p"><strong><span class="ne-text" style="color: #E8323C"></span></strong></p><p id="u260adfe4" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671088379697-9462a341-b626-4b30-be45-17a397496396.png" width="712" id="u93d36360" class="ne-image"></p><p id="u9f476a00" class="ne-p"><br></p><p id="u63c2c638" class="ne-p"><br></p><h1 id="w9I25"><span class="ne-text">21、看下面代码如何输出</span></h1><p id="u617a5914" class="ne-p"><br></p><pre data-language="javascript" id="kkTRZ" class="ne-codeblock language-javascript">const list = [1, 2, 3]
const square = num =&gt; {
    return new Promise((resolve, reject) =&gt; {
        setTimeout(() =&gt; {
            resolve(num * num)
        }, 1000)
    })
}</pre><p id="u7fb213f2" class="ne-p"><br></p><p id="uff5b3abd" class="ne-p"><span class="ne-text">使用</span><code class="ne-code"><span class="ne-text">forEach</span></code><span class="ne-text"> , 隔 </span><code class="ne-code"><span class="ne-text">1s</span></code><span class="ne-text"> ，输出 </span><code class="ne-code"><span class="ne-text">1/4/9</span></code><span class="ne-text"> </span></p><p id="uad0b07d0" class="ne-p"><span class="ne-text"></span></p><pre data-language="javascript" id="sG1xB" class="ne-codeblock language-javascript">// foreach 肯定不行
function test() {
    list.forEach(async x=&gt; {
        const res = await square(x)
        console.log(res)
    })
}
test()</pre><p id="u32d1b62e" class="ne-p"><br></p><p id="uf73b92b9" class="ne-p"><span class="ne-text">每1s，输出1、 4、  9</span></p><p id="u460556b0" class="ne-p"><span class="ne-text"></span></p><pre data-language="javascript" id="zdaIr" class="ne-codeblock language-javascript">// for of 可以
console.log('test1:');
async function  test1() {
    for(let x of list){
        const res = await square(x)
        console.log(res)
    }
}
test1()</pre><p id="u89a076d7" class="ne-p"><br></p><p id="ub7c85693" class="ne-p"><span class="ne-text">使用 </span><code class="ne-code"><span class="ne-text">for</span></code><span class="ne-text"> 循环，每1s，输出1、 4、  9</span></p><pre data-language="javascript" id="wnowm" class="ne-codeblock language-javascript">console.log('test3:');
async function test3() {
    for (let i = 0; i &lt; list.length; i++) {
        let x = list[i]
        const res = await square(x)
        console.log(res)
    }
}
test3()</pre><p id="u9f4d12e8" class="ne-p"><br></p><h1 id="KBEx3"><span class="ne-text">22、字符串仅由</span><code class="ne-code"><span class="ne-text">小写字母</span></code><span class="ne-text">和</span><code class="ne-code"><span class="ne-text"> [] </span></code><span class="ne-text">组成，且字符串不会包含多余的空格。\0转成如下结构</span></h1><p id="u7756da41" class="ne-p"><span class="ne-text"></span></p><pre data-language="javascript" id="D2bOC" class="ne-codeblock language-javascript">/**
 *字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
 示例一: 'abc' --&gt; {value: 'abc'}
 示例二：'[abc[bcd[def]]]' --&gt; 
 				{value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 */</pre><p id="ua1710050" class="ne-p"><span class="ne-text"></span></p><p id="u2f84e924" class="ne-p"><span class="ne-text">先看如下代码</span></p><pre data-language="javascript" id="cP5pz" class="ne-codeblock language-javascript">let s = '[abc[bcd[def]]]';
let r = /[\\[\\]]/g
console.log(s.split(r))

/*************************************************
 *     [
 *     '',    'abc', 'bcd',
 *         'def', '',    '',
 *         ''
 *     ]
 ************************************************/</pre><p id="uf9df0655" class="ne-p"><span class="ne-text">所以需要 </span><code class="ne-code"><span class="ne-text"> s.split(r)</span></code><span class="ne-text">后还需要过滤空字符串，如下：</span></p><pre data-language="typescript" id="pitCF" class="ne-codeblock language-typescript">let arr = str.split(/[\\[\\]]/).filter((item) =&gt; {
  return !!item
});</pre><p id="u79c318c3" class="ne-p"><span class="ne-text"></span></p><p id="u59e9e7c4" class="ne-p"><span class="ne-text">当然也可以使用正则 </span><code class="ne-code"><span class="ne-text">match</span></code><span class="ne-text"> 产出一个数组，如下</span></p><p id="uccb8902c" class="ne-p"><span class="ne-text"></span></p><pre data-language="typescript" id="oHlS5" class="ne-codeblock language-typescript">let ss = '[abc[bcd[def]]]'
var list = ss.match(/\\w+/g)
console.log(list);
// [ 'abc', 'bcd', 'def' ]</pre><p id="u793581ce" class="ne-p"><span class="ne-text"></span></p><p id="u54ea0ded" class="ne-p"><span class="ne-text">单独看</span><code class="ne-code"><span class="ne-text">let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];\0</span></code><span class="ne-text"> 如何转化成上面要求的对象。</span></p><p id="u8cc08144" class="ne-p"><span class="ne-text"></span></p><pre data-language="typescript" id="oAP2N" class="ne-codeblock language-typescript">let ss = '[abc[bcd[def]]]'
var list = ss.match(/\\w+/g)

let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];

// ::::很简洁吧！！！

let res = {};
arr.reduce((prev, next, index, array) =&gt; {
    // console.log(prev, next, index);
    prev.value = next;
    // :::: 除了最后一个，都返回 prev.children
    if (array.length - 1 !== index) {
        prev.children = {}
        return prev.children;
    }
}, res)

console.log(JSON.stringify(res));</pre><p id="ub99fe676" class="ne-p"><br></p><p id="u4f577e31" class="ne-p"><span class="ne-text">再看看</span><code class="ne-code"><span class="ne-text">reduce</span></code><span class="ne-text">方法注意事项：</span></p><p id="u056f296f" class="ne-p"><span class="ne-text"></span></p><pre data-language="typescript" id="YAdOi" class="ne-codeblock language-typescript">let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];
let res = {};
// ::::没传初始值，index只会打印 1、2、3、4 忽略 0
arr.reduce((a, b, index, array) =&gt; {
    console.log(a, b, index, array);
    // ::::打印结果如下
    /**
     *      abc         bcd      1    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *      undefined   def      2    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *      undefined   gfg      3    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *      undefined   ccc      4    [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *
     * */
})

// ::::传了初始值，index打印从 0 到 4
arr.reduce((a, b, index, array) =&gt; {
    console.log(a, b, index, array);
    // ::::打印结果如下
    /**
     *          {}          abc   0        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   bcd   1        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   def   2        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   gfg   3        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *          undefined   ccc   4        [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * */
}, res)</pre><p id="u64f5e6cb" class="ne-p"><span class="ne-text"></span></p><p id="ud2626e5d" class="ne-p"><span class="ne-text"></span></p><h1 id="ynh7n"><span class="ne-text">23、正则的一个应用</span></h1><p id="u5dff0624" class="ne-p"><span class="ne-text"></span></p><pre data-language="typescript" id="UOmpB" class="ne-codeblock language-typescript">/**
 * url有三种情况
 * https://www.xx.cn/api?keyword=&amp;level1=&amp;local_batch_id=&amp;elective=&amp;local_province_id=33
 * https://www.xx.cn/api?keyword=&amp;level1=&amp;local_batch_id=&amp;elective=800&amp;local_province_id=33
 * https://www.xx.cn/api?keyword=&amp;level1=&amp;local_batch_id=&amp;elective=800,700&amp;local_province_id=33
 * 匹配elective后的数字输出（写出你认为的最优解法）:
 * */</pre><p id="u0ef5a344" class="ne-p"><span class="ne-text">方法1：正则</span></p><pre data-language="typescript" id="O8Bah" class="ne-codeblock language-typescript">function fn(url) {
    let reg = /elective=(.*)&amp;/g
    // 使用exec,记住，是第2个元素
    let arr = reg.exec(url);
    let res = [];
    res = arr &amp;&amp; arr[1] ? arr[1].split(',') : [];
    console.log(res);
}</pre><p id="u625aa3f0" class="ne-p"><span class="ne-text">上面</span><code class="ne-code"><span class="ne-text">exec</span></code><span class="ne-text">的结果：</span></p><p id="u93c10495" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671090415809-4cfdfba9-9171-4388-ad9b-b8cae1197b1a.png" width="721.3333333333334" id="u6d53627d" class="ne-image"></p><p id="u9151dd42" class="ne-p"><br></p><hr id="to3bA" class="ne-hr"><p id="udbb5d7fe" class="ne-p"><span class="ne-text">方法2：直接使用</span><code class="ne-code"><span class="ne-text">new URLSearchParams\0(url)</span></code></p><p id="u1f0bc938" class="ne-p"><span class="ne-text"></span></p><pre data-language="typescript" id="VcGOH" class="ne-codeblock language-typescript">let params = new URLSearchParams('https://www.xx.cn/api?keyword=&amp;level1=&amp;local_batch_id=&amp;elective=800,700&amp;local_province_id=33');
console.log(params.get('elective'))</pre><p id="u6c670fd6" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671090489770-2ba4d4c1-0699-4c13-99f8-acf4028145a3.png" width="732.6666666666666" id="uac83d730" class="ne-image"></p><p id="u4225372a" class="ne-p"><br></p><h1 id="bciww"><span class="ne-text">24、找出字符串中连续出现最多的字符和个数\0</span></h1><pre data-language="typescript" id="UnRfB" class="ne-codeblock language-typescript">/**
 *  找出字符串中连续出现最多的字符和个数 #220
 * 'abcaakjbb' =&gt; {'a':2,'b':2}
 * 'abbkejsbcccwqaa' =&gt; {'c':3}
 * */</pre><p id="uc150d59a" class="ne-p"><br></p><p id="u5be1f056" class="ne-p"><code class="ne-code"><span class="ne-text">let reg = /</span><span class="ne-text" style="color: rgb(205, 23, 33); background-color: rgb(235, 204, 5)">(\\w)\\1*</span><span class="ne-text">/g</span></code></p><p id="udc3efa93" class="ne-p"><span class="ne-text"></span></p><p id="ufc3550d7" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671090672927-f89caa97-d7bb-4531-b1d5-d28f596b240e.png" width="592" id="u33f6b8ea" class="ne-image"></p><p id="u68982943" class="ne-p"><span class="ne-text">看打印结果：然后遍历就好了！！！</span></p><p id="uc0ecef60" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671090724883-a8c27a4b-8027-4f8f-8b6c-bb1664bb0828.png" width="385.3333333333333" id="u690bb355" class="ne-image"></p><p id="u89bad8d6" class="ne-p"><br></p><h1 id="fwoFm"><span class="ne-text">25、将下面的数组结构转成树形结构</span></h1><p id="u18e89325" class="ne-p"><br></p><pre data-language="typescript" id="tFzah" class="ne-codeblock language-typescript">/**
 *  21、数组转成树形结构
 *  如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）
 *  转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重） #243
 * */</pre><p id="u16016782" class="ne-p"><span class="ne-text">先去重：使用</span><code class="ne-code"><span class="ne-text">map</span></code><span class="ne-text">去重，然后</span><code class="ne-code"><span class="ne-text">map.values()</span></code></p><p id="uc2ee4399" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1671090865710-50c94080-c573-4f27-a823-62a0b6b8ea85.png" width="585.3312683105469" id="u5ed4802f" class="ne-image"></p><p id="u1bea7fe5" class="ne-p"><br></p><div data-type="danger" class="ne-alert"><p id="ue2bcaac8" class="ne-p"><span class="ne-text">最好再写一遍，花了两个小时，不一定又写不出来了</span></p></div><p id="ud404bb1c" class="ne-p"><br></p><pre data-language="typescript" id="yEVRA" class="ne-codeblock language-typescript">// :::: 已经去重了
let arr = [
    {id: 1, pid: 0},
    {id: 2, pid: 1},
    {id: 3, pid: 2},
    {id: 4, pid: 1},
    {id: 5, pid: 3},
    {id: 6, pid: 2}];

/**
 * @rootId 跟节点的 pid
 * */
function fn(array, rootId) {
    // :::: 第1步： 借助map对象， 转成以id为 key , item为value的 对象
    let map = {};
    array.forEach((item) =&gt; {
        map[item.id] = {...item} // 浅拷贝
    });
    const res = [];
    // ::::遍历
    array.forEach((item) =&gt; {
        let {id, pid} = item;
        // ::::如果是根节点，那么直接push 给 res
        if (pid === rootId) {
            res.push(map[id]);
        //// ::::   否则，操作后面的map,判断是否有children，没有就复制给一个
        } else {
            if (map[pid].children) {
                map[pid].children.push(map[id]);
            } else {
                map[pid].children = [map[id]];
            }
        }
    })
    return res;
}


console.log(JSON.stringify(fn(arr,0)));
</pre><p id="u525fbe0c" class="ne-p"><br></p><p id="uffab904b" class="ne-p"><span class="ne-text">再看下一个题，完全类似的题</span></p><p id="u1a7a43ac" class="ne-p"><span class="ne-text"></span></p><pre data-language="typescript" id="eiSlL" class="ne-codeblock language-typescript">//  id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
//  现在要求实现一个 convert 方法，把原始 list 转换成树形结构，
//  parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
let list = [
  {id: 1, name: '部门A', parentId: 0},
  {id: 2, name: '部门B', parentId: 0},
  {id: 3, name: '部门C', parentId: 1},
  {id: 4, name: '部门D', parentId: 1},
  {id: 5, name: '部门E', parentId: 2},
  {id: 6, name: '部门F', parentId: 3},
  {id: 7, name: '部门G', parentId: 2},
  {id: 8, name: '部门H', parentId: 4}
];


function fn(list, root) {
  let res = [];
  let map = {};
  list.forEach((item) =&gt; {
    map[item.id] = {...item};
  });
  for (let i = 0; i &lt; list.length; i++) {
    let {id, parentId} = list[i];
    if (parentId === root) {
      res.push(map[id]);
    } else {
      if (map[parentId].children) {
        // 这里是pid
        map[parentId].children.push(map[id]);
      } else {
        map[parentId].children = [map[id]];
      }
    }
  }
  return res;
}

console.log(JSON.stringify(fn(list, 0)))</pre><p id="uec5cc5c2" class="ne-p"><span class="ne-text">\0</span></p><p id="u4d577e47" class="ne-p"><br></p><p id="uf943d214" class="ne-p"><br></p><p id="uf568c3da" class="ne-p"><br></p></div>`,body_lake:`<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><h2 data-lake-id="U16pd" id="U16pd"><span data-lake-id="u675df596" id="u675df596">1、for循环中，return是可以中断循环的。这个需要注意了</span></h2><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**************************************************************************%5Cn%20*%20%2F%2F%20%3A%3A%3A%3Areturn%20%E6%98%AF%E5%8F%AF%E4%BB%A5%E4%B8%AD%E6%96%AD%E5%BE%AA%E7%8E%AF%E7%9A%84%EF%BC%8C%E4%B9%8B%E5%89%8D%E9%83%BD%E6%87%B5%E6%87%B5%E6%87%82%E6%87%82%E7%9A%84%5Cn%20*%20***********************************************************************%2F%5Cnfunction%20test()%20%7B%5Cn%20%20%20%20%2F%2F%20%E6%88%96%E8%80%85%E4%BD%BF%E7%94%A8while%E4%B8%80%E6%A0%B7%E7%9A%84%E6%95%88%E6%9E%9C%5Cn%20%20%20%20for%20(let%20i%20%3D%201%3B%20i%20%3C%2010%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(i%20%3D%3D%3D%205)%20return%3B%5Cn%20%20%20%20%20%20%20%20console.log(i)%3B%5Cn%20%20%20%20%7D%5Cn%7D%5Cntest()%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22return%20%E4%B8%AD%E6%96%AD%E5%BE%AA%E7%8E%AF%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B4%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22YgHz4%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u469f36fd" id="u469f36fd"><span data-lake-id="uf8ad53e2" id="uf8ad53e2">​</span><br></p><h2 data-lake-id="YNkQf" id="YNkQf"><span data-lake-id="u0da8c5ac" id="u0da8c5ac">2、原地去重数组</span></h2><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20fn1(arr)%20%7B%5Cn%20%20%20%20return%20arr.filter((item%2C%20index)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20return%20arr.indexOf(item)%20%3D%3D%3D%20index%3B%5Cn%20%20%20%20%7D)%5Cn%7D%5Cn%5Cn%5Cn%2F%2F%20%E7%A7%BB%E9%99%A4%E6%89%80%E6%9C%89%E9%87%8D%E5%A4%8D%E7%9A%84%E5%85%83%E7%B4%A0%5Cn%2F%2F%20%E4%B9%A6%E8%B8%B9%E6%AD%BBindexof%20%E5%92%8C%20lastIndexOf%5Cnfunction%20fn2(arr)%20%7B%5Cn%20%20%20%20return%20arr.filter((item%2C%20index)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20return%20arr.indexOf(item)%20%3D%3D%3D%20arr.lastIndexOf(item)%3B%5Cn%20%20%20%20%7D)%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84%E7%9A%84filter%E6%96%B9%E6%B3%95%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22iaetU%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u3472a330" id="u3472a330"><span data-lake-id="ubc306b7a" id="ubc306b7a">​</span><br></p><h2 data-lake-id="Q7rRs" id="Q7rRs"><span data-lake-id="u708b1314" id="u708b1314">3、说说为什么引入React Hooks</span></h2><ul list="ucd5165fc"><li fid="uce0e4dcd" data-lake-id="ue4efa04a" id="ue4efa04a"><span data-lake-id="ucd2d90c0" id="ucd2d90c0">类组件的问题：难于拆分、复用</span></li><li fid="uce0e4dcd" data-lake-id="u1f2564f4" id="u1f2564f4"><span data-lake-id="u48dcbc96" id="u48dcbc96">class的生命周期复杂，this指向的问题等</span></li><li fid="uce0e4dcd" data-lake-id="u49aa95e4" id="u49aa95e4"><span data-lake-id="u47ae240a" id="u47ae240a">hook从另外一个角度解决了这些问题！！</span></li><li fid="uce0e4dcd" data-lake-id="u6eed881e" id="u6eed881e"><span data-lake-id="ubf851502" id="ubf851502">较多生命周期，且划分并不符合</span><code data-lake-id="ub77fe338" id="ub77fe338"><strong><span data-lake-id="ua9e00602" id="ua9e00602" style="color: #E8323C">“内聚性”</span></strong></code><span data-lake-id="u8e454eb7" id="u8e454eb7">原则，例如 </span><code data-lake-id="ue0203294" id="ue0203294"><span data-lake-id="u11efa56c" id="u11efa56c">setInterval</span></code><span data-lake-id="u25e36ec7" id="u25e36ec7"> 和 </span><code data-lake-id="u73b2a3f0" id="u73b2a3f0"><span data-lake-id="u6c869e5b" id="u6c869e5b">clearInterval</span></code><span data-lake-id="u7d2c9c95" id="u7d2c9c95"> 这种具有强关联的逻辑被拆分在不同的生命周期方法中</span></li><li fid="uce0e4dcd" data-lake-id="u2171bac4" id="u2171bac4"><span data-lake-id="u3b04f193" id="u3b04f193">复用问题：数据共享或功能复用，从最早之前的mixin / 高阶组件 、或者到 Render Props</span></li></ul><p data-lake-id="uea9be8fd" id="uea9be8fd"><span data-lake-id="u84c8af93" id="u84c8af93">​</span><br></p><h1 data-lake-id="iGsHk" id="iGsHk"><span data-lake-id="u9e83335d" id="u9e83335d">4、什么是虚拟DOM，为什么要用什么虚拟DOM</span></h1><p data-lake-id="ua4a1d618" id="ua4a1d618"><br></p><p data-lake-id="u798e187f" id="u798e187f"><br></p><h1 data-lake-id="FjHT5" id="FjHT5"><span data-lake-id="u310ec550" id="u310ec550">5、说说长列表优化思路</span></h1><ul list="uef602902"><li fid="u00318c0b" data-lake-id="u94a2e0f0" id="u94a2e0f0"><span data-lake-id="ucdbfdda5" id="ucdbfdda5">虚列列表</span></li><li fid="u00318c0b" data-lake-id="u8549dbb5" id="u8549dbb5"><span data-lake-id="ud5183092" id="ud5183092">类似于</span><code data-lake-id="u296cc419" id="u296cc419"><span data-lake-id="uc04ca715" id="uc04ca715">diff</span></code><span data-lake-id="u8000207c" id="u8000207c">算法的思路</span></li><li fid="u00318c0b" data-lake-id="u4c7fe595" id="u4c7fe595"><span data-lake-id="ua327d380" id="ua327d380">分片</span></li><li fid="u00318c0b" data-lake-id="ueeb62ce0" id="ueeb62ce0"><span data-lake-id="u89613d95" id="u89613d95">节流等思路</span></li></ul><h1 data-lake-id="cHzaq" id="cHzaq"><span data-lake-id="uc82c67bf" id="uc82c67bf">6、sb，当时没做出来，一个树结构的深度优先应用</span></h1><p data-lake-id="u58bfcdcc" id="u58bfcdcc"><span data-lake-id="ua0e6cb63" id="ua0e6cb63">针对下面的树结构，实现函数 </span><code data-lake-id="ub0b93d46" id="ub0b93d46"><span data-lake-id="u4844c303" id="u4844c303">howOld(tree,name)</span></code><span data-lake-id="u1d0dd0ae" id="u1d0dd0ae"> </span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22var%20tree%20%3D%20%7B%5Cn%20%20%20%20age%3A%20100%2C%5Cn%20%20%20%20name%3A%20'a'%2C%5Cn%20%20%20%20child%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20age%3A%2088%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'b'%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20age%3A%2066%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'c'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20child%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20age%3A%200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'd'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20child%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20age%3A%20-1%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'e'%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%7D%5D%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22hQcUV%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u811f6a20" id="u811f6a20"><br></p><p data-lake-id="ub66ee107" id="ub66ee107"><span data-lake-id="uc9753757" id="uc9753757">其实就是</span><code data-lake-id="u6a2ab88d" id="u6a2ab88d"><span data-lake-id="ua4d20e85" id="ua4d20e85">深度优先查找</span></code><span data-lake-id="uda6d5fba" id="uda6d5fba"> </span></p><p data-lake-id="uab657269" id="uab657269"><span data-lake-id="uf9a8cf5f" id="uf9a8cf5f">​</span><br></p><p data-lake-id="u1a8c4c63" id="u1a8c4c63"><span data-lake-id="u8bfdd709" id="u8bfdd709">还是先写结构：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20howOld(tree%2C%20name)%20%7B%5Cn%5Cn%20%20%20%20let%20res%20%3D%20null%3B%5Cn%5Cn%20%20%20%20function%20dfs(root%2C%20name)%20%7B%5Cn%20%20%20%20%20%20%2F%2F%20....%5Cn%20%20%20%20%7D%5Cn%5Cn%20%20%20%20dfs(tree%2C%20name)%3B%5Cn%5Cn%20%20%20%20return%20res%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E7%BB%93%E6%9E%84%E5%86%99%E5%87%BA%E6%9D%A5%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22NPUFr%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uce62fb60" id="uce62fb60"><br></p><p data-lake-id="uaab4c604" id="uaab4c604"><span data-lake-id="uc092213c" id="uc092213c">补充：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20howOld(tree%2C%20name)%20%7B%5Cn%20%20%20%20let%20res%20%3D%20null%3B%5Cn%20%20%20%20function%20dfs(root%2C%20name)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(root.name%20%3D%3D%3D%20name)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20res%20%3D%20root.age%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20if%20(Array.isArray(root.child))%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20root.child.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dfs(item%2C%20name)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20dfs(tree%2C%20name)%3B%5Cn%20%20%20%20return%20res%3B%5Cn%7D%5Cnconsole.log(howOld(tree%2C%20'a'))%20%2F%2F%20100%5Cnconsole.log(howOld(tree%2C%20'b'))%20%2F%2F%2088%5Cnconsole.log(howOld(tree%2C%20'e'))%20%2F%2F%20-1%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0%EF%BC%9Afn(root%2Cname)%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B3%2C9%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22Fxxn7%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u965f6d81" id="u965f6d81"><span data-lake-id="uee6d47f0" id="uee6d47f0">​</span><br></p><blockquote data-lake-id="ud1de1ac6" id="ud1de1ac6" class="lake-alert lake-alert-danger"><p data-lake-id="u1527151e" id="u1527151e"><span data-lake-id="uff0802ec" id="uff0802ec">另外，深度优先，也可以使用</span><code data-lake-id="u6d676d4c" id="u6d676d4c"><span data-lake-id="u80b4a373" id="u80b4a373">栈</span></code><span data-lake-id="ucb9d9de7" id="ucb9d9de7">的数据结构来实现 </span><code data-lake-id="u608f9dae" id="u608f9dae"><span data-lake-id="u22632d43" id="u22632d43">DFS</span></code><span data-lake-id="u247cfbda" id="u247cfbda"> ,  其实</span><code data-lake-id="u0d2fb147" id="u0d2fb147"><span data-lake-id="u92bfb032" id="u92bfb032">递归</span></code><span data-lake-id="u33feeece" id="u33feeece">本身也是</span><code data-lake-id="u88b456fd" id="u88b456fd"><span data-lake-id="u835f9e9b" id="u835f9e9b">栈</span></code><span data-lake-id="u85217b60" id="u85217b60">的体现</span></p></blockquote><p data-lake-id="u89691e22" id="u89691e22"><br></p><h1 data-lake-id="JUwSF" id="JUwSF"><span data-lake-id="uceab59b8" id="uceab59b8">7、递归实现反转字符串</span></h1><p data-lake-id="ub45c9044" id="ub45c9044"><span data-lake-id="u3396760d" id="u3396760d">关键就是</span><code data-lake-id="ue499b3a7" id="ue499b3a7"><span data-lake-id="u592fa6df" id="u592fa6df">return fn(str.slice(1)) + str[0]</span></code></p><p data-lake-id="u1bdb9446" id="u1bdb9446"><span data-lake-id="u48fed011" id="u48fed011">注意是：一直递归  </span><code data-lake-id="u86636c25" id="u86636c25"><span data-lake-id="ufc3cb00b" id="ufc3cb00b">fn(str.slice(1))</span></code></p><p data-lake-id="ued71e277" id="ued71e277"><span data-lake-id="uf62011b0" id="uf62011b0">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F**%5Cn%20*%5Cn%20*%20%40description%20%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%5Cn%20%E7%94%A8%20JavaScript%20%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%EF%BC%8C%E8%BE%93%E5%85%A5%20int%20%E5%9E%8B%EF%BC%8C%E8%BF%94%E5%9B%9E%E6%95%B4%E6%95%B0%E9%80%86%E5%BA%8F%E5%90%8E%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%82%5Cn%20%E5%A6%82%EF%BC%9A%E8%BE%93%E5%85%A5%E6%95%B4%E5%9E%8B%201234%EF%BC%8C%E8%BF%94%E5%9B%9E%E5%AD%97%E7%AC%A6%E4%B8%B2%E2%80%9C4321%E2%80%9D%E3%80%82%E8%A6%81%E6%B1%82%E5%BF%85%E9%A1%BB%E4%BD%BF%E7%94%A8%E9%80%92%E5%BD%92%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%EF%BC%8C%E4%B8%8D%E8%83%BD%E7%94%A8%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%EF%BC%8C%5Cn%20%E8%BE%93%E5%85%A5%E5%87%BD%E6%95%B0%E5%BF%85%E9%A1%BB%E5%8F%AA%E6%9C%89%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E4%BC%A0%E5%85%A5%EF%BC%8C%E5%BF%85%E9%A1%BB%E8%BF%94%E5%9B%9E%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%82%5Cn%5Cn%20*%2F%5Cn%5Cnlet%20str%20%3D%20'1234'%3B%5Cn%5Cn%5Cnfunction%20fn(str)%20%7B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%9F%BA%E5%87%86%E6%9D%A1%E4%BB%B6%E5%98%9B%EF%BC%8C%E6%AF%8F%E6%AC%A1%E9%83%BD%E4%BB%8Eslice1%E5%BC%80%E5%A7%8B%EF%BC%8C%5Cn%20%20%20%20if%20(str%20%3D%3D%3D%20'')%20%7B%5Cn%20%20%20%20%20%20%20%20return%20str%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%85%B3%E9%94%AE%5Cn%20%20%20%20%20%20%20%20return%20fn(str.slice(1))%20%2B%20str%5B0%5D%5Cn%20%20%20%20%7D%5Cn%7D%5Cn%5Cnconsole.log(fn(str))%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22fn(str.slice(1))%20%2B%20str%5B0%5D%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22pMdRF%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u1494e765" id="u1494e765"><br></p><h1 data-lake-id="yI9il" id="yI9il"><span data-lake-id="u8e3b5ce9" id="u8e3b5ce9">8、罗马数字转化整数</span></h1><p data-lake-id="u9bd9c5f2" id="u9bd9c5f2"><span data-lake-id="u5bacc71d" id="u5bacc71d">​</span><br></p><p data-lake-id="u8a69f3bb" id="u8a69f3bb"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671061026829-a88eba62-a5fa-42eb-a584-8ec29e7345b9.png%22%2C%22taskId%22%3A%22u410a0773-cea5-4460-a311-63c1d2c8bb3%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A770.2000122070312%2C%22height%22%3A656%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A234002%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1788%2C%22originHeight%22%3A1522%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%2213.%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E8%BD%AC%E6%95%B4%E6%95%B0%20%E6%96%87%E5%88%87%E6%8D%A2%E4%B8%BA%E8%8B%B1%E6%96%87%E6%8E%A5%E6%94%B6%E5%8A%A8%E6%80%81%20%E5%8F%8D%E9%A6%88%20%E9%9A%BE%E5%BA%A6%E7%AE%80%E5%8D%95%E5%B1%B12%20%E6%94%B6%E8%97%8F%20%E6%96%87A%20%E5%88%86%E4%BA%AB%202173%20%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E5%8C%85%E5%90%AB%E4%BB%A5%E4%B8%8B%E4%B8%83%E7%A7%8D%E5%AD%97%E7%AC%A6%3A%20%E5%92%8C%20V%2C%20X%2C%E5%B7%A5%2C(%20%E5%AD%97%E7%AC%A6%20%E6%95%B0%E5%80%BC%20I%201%20VXLC%205%2010%2050%20100%20D%20500%201000%20M%20%E4%BE%8B%E5%A6%82%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%972%E5%86%99%E5%81%9AII%2C%E5%8D%B3%E4%B8%BA%E4%B8%A4%E4%B8%AA%E5%B9%B6%E5%88%97%E7%9A%841.12%E5%86%99%E5%81%9AXII%2C%20%E5%81%9AXII%2C%E5%8D%B3%E4%B8%BAX%2BI.27%E5%86%99%E5%81%9AXX%20XXVII%2C%E5%8D%B3%E4%B8%BAXX%2BV%2BII%20%E9%80%82%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%2C%E7%BD%97%E9%A9%AC%E8%87%B4%E7%8E%87%E4%B8%AD%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AD%97%E5%9C%A8%E5%A4%A7%E7%9A%84%E6%95%B0%E5%AD%97%E7%9A%84%E5%8F%B3%E8%BE%B9%2C%E4%BD%86%E4%B9%9F%E5%AD%98%E5%9C%A8%E7%89%B9%E4%BE%8B%2C%E4%BE%8B%E5%A6%82A%E4%B8%8D%E5%86%99%E5%81%9A%201IIT%2C%E8%80%8C%E6%98%AF%20IY%2C%E6%95%B0%E5%AD%971%E5%9C%A8%E6%95%B0%E5%AD%975%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%89%80%E8%A1%A8%E7%A4%BA%E7%9A%84%20%E6%95%B0%E7%AD%89%E4%BA%8E%E5%A4%A7%E6%95%B05%E5%87%8F%E5%B0%8F%E6%95%B01%E5%BE%97%E5%88%B0%E7%9A%84%E6%95%B0%E5%80%BC4.%E5%90%8C%E6%A0%B7%E5%9C%B0%2C%E6%95%B0%E5%AD%979%E8%A1%A8%E7%A4%BA%E4%B8%BA%20%E5%B7%A5X.%E8%BF%99%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E8%A7%84%E5%88%99%E5%8F%AA%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%A5%E4%B8%8B%E5%85%AD%E7%A7%8D%E6%83%85%E5%86%B5%3A%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8V%20(5)%E5%92%8CX(10)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA4%E5%92%8C9.%20X%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8%20(50)%E5%92%8CC(100)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA40%E5%92%8C90.%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8D(500)%E5%92%8C%20M(1000)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA%20400%E5%92%8C900.%20%E7%BB%99%E5%AE%9A%E4%B8%80%E4%B8%AA%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%2C%E5%B0%86%E5%85%B6%E8%BD%AC%E6%8D%A2%E6%88%90%E6%95%B4%E6%95%B0.%20%E7%A4%BA%E4%BE%8B1%3A%20%E8%BE%93%E5%85%A5%3AS%20%5C%22IIII%5C%22%20%E8%BE%93%E5%87%BA%3A3%20%E7%A4%BA%E4%BE%8B2%3A%20%E8%BE%93%E5%85%A5%3AS%E4%B8%89%5C%22IV%5C%22%20%E8%BE%93%E5%87%BA%3A4%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A71.19077%2C%22y%22%3A41.842274%2C%22width%22%3A245.12799%2C%22height%22%3A27.56554%2C%22text%22%3A%2213.%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E8%BD%AC%E6%95%B4%E6%95%B0%22%7D%2C%7B%22x%22%3A659.4192%2C%22y%22%3A99.60305%2C%22width%22%3A356.93279999999993%2C%22height%22%3A28.645100000000014%2C%22text%22%3A%22%E6%96%87%E5%88%87%E6%8D%A2%E4%B8%BA%E8%8B%B1%E6%96%87%E6%8E%A5%E6%94%B6%E5%8A%A8%E6%80%81%22%7D%2C%7B%22x%22%3A1105.6287%2C%22y%22%3A100.38709%2C%22width%22%3A50.321100000000115%2C%22height%22%3A26.663843999999997%2C%22text%22%3A%22%E5%8F%8D%E9%A6%88%22%7D%2C%7B%22x%22%3A66.53179%2C%22y%22%3A101.75833%2C%22width%22%3A219.61039%2C%22height%22%3A24.823719999999994%2C%22text%22%3A%22%E9%9A%BE%E5%BA%A6%E7%AE%80%E5%8D%95%E5%B1%B12%22%7D%2C%7B%22x%22%3A387.22702%2C%22y%22%3A101.67885%2C%22width%22%3A88.73958000000005%2C%22height%22%3A24.698935000000006%2C%22text%22%3A%22%E6%94%B6%E8%97%8F%22%7D%2C%7B%22x%22%3A666.97345%2C%22y%22%3A102.2285%2C%22width%22%3A26.27692000000002%2C%22height%22%3A25.484490000000008%2C%22text%22%3A%22%E6%96%87A%22%7D%2C%7B%22x%22%3A566.7546%2C%22y%22%3A102.36963%2C%22width%22%3A48.01589999999999%2C%22height%22%3A25.103830000000002%2C%22text%22%3A%22%E5%88%86%E4%BA%AB%22%7D%2C%7B%22x%22%3A266.35422%2C%22y%22%3A103.43857%2C%22width%22%3A67.68383999999998%2C%22height%22%3A22.41507%2C%22text%22%3A%222173%22%7D%2C%7B%22x%22%3A67.32458%2C%22y%22%3A192.05687%2C%22width%22%3A322.73890000000006%2C%22height%22%3A26.862470000000002%2C%22text%22%3A%22%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E5%8C%85%E5%90%AB%E4%BB%A5%E4%B8%8B%E4%B8%83%E7%A7%8D%E5%AD%97%E7%AC%A6%3A%22%7D%2C%7B%22x%22%3A722.4658%2C%22y%22%3A192.37656%2C%22width%22%3A53.27785000000006%2C%22height%22%3A27.950849999999974%2C%22text%22%3A%22%E5%92%8C%22%7D%2C%7B%22x%22%3A445.8547%2C%22y%22%3A192.89513%2C%22width%22%3A59.08262000000002%2C%22height%22%3A28.54271%2C%22text%22%3A%22V%2C%22%7D%2C%7B%22x%22%3A536.6927%2C%22y%22%3A195.26122%2C%22width%22%3A116.49956000000009%2C%22height%22%3A28.07416999999998%2C%22text%22%3A%22X%2C%E5%B7%A5%2C(%22%7D%2C%7B%22x%22%3A96.074165%2C%22y%22%3A276.65955%2C%22width%22%3A53.55675500000001%2C%22height%22%3A28.794119999999964%2C%22text%22%3A%22%E5%AD%97%E7%AC%A6%22%7D%2C%7B%22x%22%3A304.19803%2C%22y%22%3A277.53195%2C%22width%22%3A55.359249999999975%2C%22height%22%3A27.560249999999996%2C%22text%22%3A%22%E6%95%B0%E5%80%BC%22%7D%2C%7B%22x%22%3A95.1982%2C%22y%22%3A316.1501%2C%22width%22%3A23.143024999999994%2C%22height%22%3A33.622450000000015%2C%22text%22%3A%22I%22%7D%2C%7B%22x%22%3A314.29688%2C%22y%22%3A319.88437%2C%22width%22%3A22.350000000000023%2C%22height%22%3A27.93756000000002%2C%22text%22%3A%221%22%7D%2C%7B%22x%22%3A91.26978%2C%22y%22%3A350.50607%2C%22width%22%3A30.895740000000004%2C%22height%22%3A167.38747999999998%2C%22text%22%3A%22VXLC%22%7D%2C%7B%22x%22%3A314.64417%2C%22y%22%3A359.755%2C%22width%22%3A20.431430000000034%2C%22height%22%3A27.377700000000004%2C%22text%22%3A%225%22%7D%2C%7B%22x%22%3A319.8645%2C%22y%22%3A403.37485%2C%22width%22%3A31.2072%2C%22height%22%3A24.670050000000003%2C%22text%22%3A%2210%22%7D%2C%7B%22x%22%3A317.57104%2C%22y%22%3A444.4455%2C%22width%22%3A33.167940000000044%2C%22height%22%3A25.65930000000003%2C%22text%22%3A%2250%22%7D%2C%7B%22x%22%3A318.13974%2C%22y%22%3A486.41418%2C%22width%22%3A46.10035999999997%2C%22height%22%3A23.639620000000036%2C%22text%22%3A%22100%22%7D%2C%7B%22x%22%3A97.08449%2C%22y%22%3A513.4095%2C%22width%22%3A17.395796000000004%2C%22height%22%3A41.19780000000003%2C%22text%22%3A%22D%22%7D%2C%7B%22x%22%3A315.58768%2C%22y%22%3A528.1625%2C%22width%22%3A47.669219999999996%2C%22height%22%3A25.036100000000033%2C%22text%22%3A%22500%22%7D%2C%7B%22x%22%3A315.6549%2C%22y%22%3A567.94604%2C%22width%22%3A65.47532000000001%2C%22height%22%3A26.345359999999914%2C%22text%22%3A%221000%22%7D%2C%7B%22x%22%3A94.70865%2C%22y%22%3A569.08307%2C%22width%22%3A20.712226%2C%22height%22%3A24.868589999999926%2C%22text%22%3A%22M%22%7D%2C%7B%22x%22%3A66.334335%2C%22y%22%3A653.8286%2C%22width%22%3A814.015565%2C%22height%22%3A29.914749999999913%2C%22text%22%3A%22%E4%BE%8B%E5%A6%82%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%972%E5%86%99%E5%81%9AII%2C%E5%8D%B3%E4%B8%BA%E4%B8%A4%E4%B8%AA%E5%B9%B6%E5%88%97%E7%9A%841.12%E5%86%99%E5%81%9AXII%2C%22%7D%2C%7B%22x%22%3A777.3657%2C%22y%22%3A655.4269%2C%22width%22%3A471.15070000000003%2C%22height%22%3A27.35245999999995%2C%22text%22%3A%22%E5%81%9AXII%2C%E5%8D%B3%E4%B8%BAX%2BI.27%E5%86%99%E5%81%9AXX%22%7D%2C%7B%22x%22%3A1215.3254%2C%22y%22%3A656.09564%2C%22width%22%3A333.0983000000001%2C%22height%22%3A28.279660000000035%2C%22text%22%3A%22XXVII%2C%E5%8D%B3%E4%B8%BAXX%2BV%2BII%22%7D%2C%7B%22x%22%3A65.73574%2C%22y%22%3A718.4225%2C%22width%22%3A1613.2202599999998%2C%22height%22%3A28.686450000000036%2C%22text%22%3A%22%E9%80%82%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%2C%E7%BD%97%E9%A9%AC%E8%87%B4%E7%8E%87%E4%B8%AD%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AD%97%E5%9C%A8%E5%A4%A7%E7%9A%84%E6%95%B0%E5%AD%97%E7%9A%84%E5%8F%B3%E8%BE%B9%2C%E4%BD%86%E4%B9%9F%E5%AD%98%E5%9C%A8%E7%89%B9%E4%BE%8B%2C%E4%BE%8B%E5%A6%82A%E4%B8%8D%E5%86%99%E5%81%9A%201IIT%2C%E8%80%8C%E6%98%AF%20IY%2C%E6%95%B0%E5%AD%971%E5%9C%A8%E6%95%B0%E5%AD%975%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%89%80%E8%A1%A8%E7%A4%BA%E7%9A%84%22%7D%2C%7B%22x%22%3A66.19111%2C%22y%22%3A758.27277%2C%22width%22%3A1254.13699%2C%22height%22%3A27.884429999999952%2C%22text%22%3A%22%E6%95%B0%E7%AD%89%E4%BA%8E%E5%A4%A7%E6%95%B05%E5%87%8F%E5%B0%8F%E6%95%B01%E5%BE%97%E5%88%B0%E7%9A%84%E6%95%B0%E5%80%BC4.%E5%90%8C%E6%A0%B7%E5%9C%B0%2C%E6%95%B0%E5%AD%979%E8%A1%A8%E7%A4%BA%E4%B8%BA%20%E5%B7%A5X.%E8%BF%99%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E8%A7%84%E5%88%99%E5%8F%AA%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%A5%E4%B8%8B%E5%85%AD%E7%A7%8D%E6%83%85%E5%86%B5%3A%22%7D%2C%7B%22x%22%3A174.52731%2C%22y%22%3A822.0736%2C%22width%22%3A609.95102%2C%22height%22%3A27.49554999999998%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8V%20(5)%E5%92%8CX(10)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA4%E5%92%8C9.%22%7D%2C%7B%22x%22%3A150.58597%2C%22y%22%3A859.7085%2C%22width%22%3A698.66733%2C%22height%22%3A33.72350000000006%2C%22text%22%3A%22X%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8%20(50)%E5%92%8CC(100)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA40%E5%92%8C90.%22%7D%2C%7B%22x%22%3A187.75949%2C%22y%22%3A897.00433%2C%22width%22%3A725.23371%2C%22height%22%3A29.700500000000034%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8D(500)%E5%92%8C%20M(1000)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA%20400%E5%92%8C900.%22%7D%2C%7B%22x%22%3A66.21939%2C%22y%22%3A963.1876%2C%22width%22%3A427.44275000000005%2C%22height%22%3A27.124300000000062%2C%22text%22%3A%22%E7%BB%99%E5%AE%9A%E4%B8%80%E4%B8%AA%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%2C%E5%B0%86%E5%85%B6%E8%BD%AC%E6%8D%A2%E6%88%90%E6%95%B4%E6%95%B0.%22%7D%2C%7B%22x%22%3A65.926895%2C%22y%22%3A1086.1241%2C%22width%22%3A87.555555%2C%22height%22%3A29.804499999999962%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B1%3A%22%7D%2C%7B%22x%22%3A95.296394%2C%22y%22%3A1166.7015%2C%22width%22%3A232.471906%2C%22height%22%3A35.87630000000013%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%20%5C%22IIII%5C%22%22%7D%2C%7B%22x%22%3A96.844536%2C%22y%22%3A1215.0715%2C%22width%22%3A102.96425399999998%2C%22height%22%3A27.037399999999934%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A3%22%7D%2C%7B%22x%22%3A66.04782%2C%22y%22%3A1301.7693%2C%22width%22%3A86.17580000000001%2C%22height%22%3A26.63440000000014%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B2%3A%22%7D%2C%7B%22x%22%3A96.62961%2C%22y%22%3A1383.683%2C%22width%22%3A211.83648999999997%2C%22height%22%3A27.1570999999999%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%E4%B8%89%5C%22IV%5C%22%22%7D%2C%7B%22x%22%3A95.954575%2C%22y%22%3A1426.2025%2C%22width%22%3A103.094225%2C%22height%22%3A26.550899999999956%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A4%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23252525%22%2C%22id%22%3A%22u8c926233%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u338043a2" id="u338043a2"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671061360738-619c949d-6033-4f67-8a09-f0d0ce1b78c4.png%22%2C%22taskId%22%3A%22u01278be3-d9dc-479d-abbb-5edf0b20f64%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A657.6%2C%22height%22%3A323%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A81646%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1644%2C%22originHeight%22%3A808%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22%E7%A4%BA%E4%BE%8B3%3A%20%E8%BE%93%E5%85%A5%3AS%5C%22IX%5C%22%20%E8%BE%93%E5%87%BA%3AG%20%E7%A4%BA%E4%BE%8B4%3A%20%E8%BE%93%E5%85%A5%3AS%20%5C%22LVIII%5C%22%20%E8%BE%93%E5%87%BA%3A58%20%E8%A7%A3%E9%87%8A%3AL%20%E4%B8%89%2050%2CV%205%2C%20II%20%E4%B8%89%203.%20%E7%A4%BA%E4%BE%8B5%3A%20%E8%BE%93%E5%85%A5%3AS%20%E4%B8%89%5C%22MCMXCIV%5C%22%20%E8%BE%93%E5%87%BA%3A1994%20%E8%A7%A3%E9%87%8A%3AM%20%E4%B8%89%201000%2CCM%20%E4%BA%8C%20900%2CXC%20%E4%BA%8C%204.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A59.015984%2C%22y%22%3A54.346695%2C%22width%22%3A81.421056%2C%22height%22%3A25.664085%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B3%3A%22%7D%2C%7B%22x%22%3A87.264435%2C%22y%22%3A137.20667%2C%22width%22%3A213.319185%2C%22height%22%3A27.26167000000001%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%5C%22IX%5C%22%22%7D%2C%7B%22x%22%3A88.72879%2C%22y%22%3A177.544%2C%22width%22%3A91.57749999999999%2C%22height%22%3A28.423039999999986%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3AG%22%7D%2C%7B%22x%22%3A57.943287%2C%22y%22%3A265.4797%2C%22width%22%3A82.080063%2C%22height%22%3A27.401220000000023%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B4%3A%22%7D%2C%7B%22x%22%3A88.8565%2C%22y%22%3A349.375%2C%22width%22%3A255.2547%2C%22height%22%3A27.15210000000002%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%20%5C%22LVIII%5C%22%22%7D%2C%7B%22x%22%3A89.808205%2C%22y%22%3A391.70358%2C%22width%22%3A116.36168500000001%2C%22height%22%3A26.87226000000004%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A58%22%7D%2C%7B%22x%22%3A88.25695%2C%22y%22%3A429.8633%2C%22width%22%3A428.09985%2C%22height%22%3A31.691540000000032%2C%22text%22%3A%22%E8%A7%A3%E9%87%8A%3AL%20%E4%B8%89%2050%2CV%205%2C%20II%20%E4%B8%89%203.%22%7D%2C%7B%22x%22%3A59.198856%2C%22y%22%3A520.13226%2C%22width%22%3A83.964044%2C%22height%22%3A27.13693999999998%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B5%3A%22%7D%2C%7B%22x%22%3A87.81276%2C%22y%22%3A600.4184%2C%22width%22%3A290.24159%2C%22height%22%3A31.645440000000008%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%20%E4%B8%89%5C%22MCMXCIV%5C%22%22%7D%2C%7B%22x%22%3A87.65881%2C%22y%22%3A646.04254%2C%22width%22%3A148.37621000000001%2C%22height%22%3A26.95375999999999%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A1994%22%7D%2C%7B%22x%22%3A87.6885%2C%22y%22%3A684.2373%2C%22width%22%3A647.34275%2C%22height%22%3A30.26400000000001%2C%22text%22%3A%22%E8%A7%A3%E9%87%8A%3AM%20%E4%B8%89%201000%2CCM%20%E4%BA%8C%20900%2CXC%20%E4%BA%8C%204.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23242424%22%2C%22id%22%3A%22ud1a72d5f%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="uff80d743" id="uff80d743"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%5Cnfunction%20fn(str)%20%7B%5Cn%20%20%20%20let%20map%20%3D%20%7B%5Cn%20%20%20%20%20%20%20%20I%3A%201%2C%5Cn%20%20%20%20%20%20%20%20V%3A%205%2C%5Cn%20%20%20%20%20%20%20%20X%3A%2010%2C%5Cn%20%20%20%20%20%20%20%20L%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20C%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20D%3A%20500%2C%5Cn%20%20%20%20%20%20%20%20M%3A%201000%2C%5Cn%20%20%20%20%7D%5Cn%20%20%20%20let%20res%20%3D%20%5B%5D%3B%5Cn%20%20%20%20let%20arr%20%3D%20str.split('')%3B%5Cn%20%20%20%20arr.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20res.push(map%5Bitem%5D)%3B%5Cn%20%20%20%20%7D)%5Cn%20%20%20%20%5Cn%20%20%20%20let%20val%20%3D%200%3B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20res.length%3B%20i%2B%2B)%20%7B%5Cn%5Cn%20%20%20%20%20%20%20%20let%20a%20%3D%20res%5Bi%5D%3B%5Cn%20%20%20%20%20%20%20%20let%20b%20%3D%20res%5Bi%20%2B%201%5D%3B%5Cn%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E8%BF%99%E9%87%8C%E6%98%AF%E4%BE%8B%E5%A4%96%E7%9A%84%E6%83%85%E5%86%B5%EF%BC%8C%E9%9C%80%E8%A6%81%E7%89%B9%E6%AE%8A%E5%A4%84%E7%90%86%5Cn%20%20%20%20%20%20%20%20if%20(b%20%26%26%20b%20%3E%20a)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20val%20%2B%3D%20b%20-%20a%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%3A%3A%3A%3A%20%E8%BF%99%E9%87%8C%E5%BE%88%E5%85%B3%E9%94%AE%EF%BC%8C%E7%9B%B4%E6%8E%A5i%2B%2B%E8%B7%B3%E8%BF%87%E4%BA%86%5Cn%20%20%20%20%20%20%20%20%20%20%20%20i%2B%2B%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20val%20%2B%3D%20a%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20console.log(val)%3B%5Cn%20%20%20%20return%20val%3B%5Cn%7D%5Cn%5Cn%5Cnfn('MCMXCIV')%5Cnfn('LVIII')%5Cnfn('IX')%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Atrue%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%BE%8B%E5%A4%96%E7%9A%84%E6%83%85%E5%86%B5%E7%89%B9%E6%AE%8A%E5%A4%84%E7%90%86%EF%BC%8C%E5%85%B6%E4%BB%96%E6%AD%A3%E5%B8%B8%E8%AE%A1%E7%AE%97%E5%8D%B3%E5%8F%AF%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B23%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22YwllR%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="udb1f1c12" id="udb1f1c12"><br></p><h1 data-lake-id="TInfq" id="TInfq" collapsed="true"><span data-lake-id="u8c5b0bb4" id="u8c5b0bb4">9、整数转成罗马数字</span></h1><p data-lake-id="u77ca6c77" id="u77ca6c77"><span data-lake-id="u01044cd9" id="u01044cd9">​</span><card type="inline" name="label" value="data:%7B%22label%22%3A%22%E4%BD%8E%E9%A2%91%22%2C%22colorIndex%22%3A0%2C%22id%22%3A%22sBTYR%22%7D"></card></p><p data-lake-id="u6f7be6bb" id="u6f7be6bb"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671061928885-a38d0d48-853a-4084-9f3a-abc8a6eb11ab.png%22%2C%22taskId%22%3A%22u2c345420-6920-4d26-a895-666f96cf8b1%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A692.8%2C%22height%22%3A620%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A233018%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1732%2C%22originHeight%22%3A1550%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%2212.%E6%95%B4%E6%95%B0%E8%BD%AC%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%20%E5%88%87%E6%8D%A2%E4%B8%BA%E8%8B%B1%E6%96%87%20%E6%8E%A5%E6%94%B6%E5%8A%A8%E6%80%81%20%E5%8F%8D%E9%A6%88%2001021%20%E6%94%B6%E8%97%8F%20%E5%88%86%E4%BA%AB%20%E9%9A%BE%E5%BA%A6%E4%B8%AD%E7%AD%89%20I%2CV%2CX%2C%E5%B7%A5%2CC%2CD%E5%92%8CM.%20%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E5%8C%85%E5%90%AB%E4%BB%A5%E4%B8%8B%E4%B8%83%E7%A7%8D%E5%AD%97%E7%AC%A6%3A%20%E5%AD%97%E7%AC%A6%20%E6%95%B0%E5%80%BC%20I%201%20V%205%20X%2010%20L%2050%20C%20100%20500%20D%201000%2027%E5%86%99%E5%81%9A%20%E5%8D%B3%E4%B8%BAX%2BII%20%E4%BE%8B%E5%A6%82%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%972%E5%86%99%E5%81%9AII%2C%E5%8D%B3%E4%B8%BA%E4%B8%A4%E4%B8%AA%E5%B9%B6%E5%88%97%E7%9A%841.12%E5%86%99%E5%81%9A7%20%E5%86%99%E5%81%9AXII%20%E5%8D%B3%E4%B8%BA%20XXX%20V%20II%20IIAXX%20%E9%80%9A%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E4%B8%AD%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AD%97%E5%9C%A8%E5%A4%A7%E7%9A%84%E6%95%99%E5%AD%A6%E7%9A%84%E5%8F%B3%E8%BE%B9%2C%E4%BD%86%E4%B9%9F%E5%AD%98%E5%9C%A8%E7%89%B9%E4%BE%8B%2C%E4%BE%8B%E5%A6%824%E4%B8%8D%E5%86%99%E5%81%9A%20IIIT%2C%E8%80%8C%E6%98%AF%2CTY%2C%E6%95%B0%E5%AD%971%E5%9C%A8%E8%87%B4%E5%AE%875%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%89%80%E8%A1%A8%E7%A4%BA%E7%9A%84%20%E6%95%B0%E7%AD%89%E4%BA%8E%E5%A4%A7%E6%95%B05%E5%87%8F%E5%B0%8F%E6%95%B01%E5%BE%97%E5%88%B0%E7%9A%84%E6%95%B0%E5%80%BC4.%E5%90%8C%E6%A0%B7%E5%9C%B0%2C%E6%95%B0%E5%AD%979%E8%A1%A8%E7%A4%BA%E4%B8%BA%20%E5%B7%A5X.%E8%BF%99%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E8%A7%84%E5%88%99%E5%8F%AA%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%A5%E4%B8%8B%E5%85%AD%E7%A7%8D%E6%83%85%E5%86%B5%3A%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8V(5)%E5%92%8CX(10)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA4%E5%92%8C9.%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8(50)%E5%92%8CC(100)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA40%E5%92%8C90.%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8D(500)%E5%92%8CM(1000)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA400%E5%92%8C900.%20%E7%BB%99%E4%BD%A0%E4%B8%80%E4%B8%AA%E6%95%B4%E6%95%B0%2C%E5%B0%86%E5%85%B6%E8%BD%AC%E4%B8%BA%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97.%20%E7%A4%BA%E4%BE%8B1%3A%20%E8%BE%93%E5%85%A5%3ANUM%203%20%E8%BE%93%E5%87%BA%3A%5C%22II%5C%22%20%E7%A4%BA%E4%BE%8B2%3A%20%E8%BE%93%E5%85%A5%3ANUM%20%E4%B8%89%204%20%E8%BE%93%E5%87%BA%3A%5C%22IV%5C%22%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A62.29826%2C%22y%22%3A55.133102%2C%22width%22%3A247.94661%2C%22height%22%3A28.495588000000005%2C%22text%22%3A%2212.%E6%95%B4%E6%95%B0%E8%BD%AC%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%22%7D%2C%7B%22x%22%3A696.19855%2C%22y%22%3A115.83735%2C%22width%22%3A125.32989000000009%2C%22height%22%3A28.809160000000006%2C%22text%22%3A%22%E5%88%87%E6%8D%A2%E4%B8%BA%E8%8B%B1%E6%96%87%22%7D%2C%7B%22x%22%3A912.22437%2C%22y%22%3A117.076614%2C%22width%22%3A97.40602999999999%2C%22height%22%3A25.460605999999984%2C%22text%22%3A%22%E6%8E%A5%E6%94%B6%E5%8A%A8%E6%80%81%22%7D%2C%7B%22x%22%3A1100.5547%2C%22y%22%3A117.57302%2C%22width%22%3A50.72280000000001%2C%22height%22%3A25.439829999999986%2C%22text%22%3A%22%E5%8F%8D%E9%A6%88%22%7D%2C%7B%22x%22%3A233.81592%2C%22y%22%3A117.618324%2C%22width%22%3A94.55394999999999%2C%22height%22%3A24.012305999999995%2C%22text%22%3A%2201021%22%7D%2C%7B%22x%22%3A418.8261%2C%22y%22%3A117.6608%2C%22width%22%3A49.44902000000002%2C%22height%22%3A25.037990000000008%2C%22text%22%3A%22%E6%94%B6%E8%97%8F%22%7D%2C%7B%22x%22%3A556.3668%2C%22y%22%3A118.000984%2C%22width%22%3A51.07814999999994%2C%22height%22%3A25.477515999999994%2C%22text%22%3A%22%E5%88%86%E4%BA%AB%22%7D%2C%7B%22x%22%3A58.60556%2C%22y%22%3A118.15932%2C%22width%22%3A158.83948%2C%22height%22%3A25.171930000000017%2C%22text%22%3A%22%E9%9A%BE%E5%BA%A6%E4%B8%AD%E7%AD%89%22%7D%2C%7B%22x%22%3A412.15652%2C%22y%22%3A206.34572%2C%22width%22%3A420.59698000000003%2C%22height%22%3A34.60929999999999%2C%22text%22%3A%22I%2CV%2CX%2C%E5%B7%A5%2CC%2CD%E5%92%8CM.%22%7D%2C%7B%22x%22%3A61.33587%2C%22y%22%3A208.11375%2C%22width%22%3A322.91209%2C%22height%22%3A28.155959999999993%2C%22text%22%3A%22%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E5%8C%85%E5%90%AB%E4%BB%A5%E4%B8%8B%E4%B8%83%E7%A7%8D%E5%AD%97%E7%AC%A6%3A%22%7D%2C%7B%22x%22%3A89.05206%2C%22y%22%3A292.8356%2C%22width%22%3A55.72689000000001%2C%22height%22%3A28.85584%2C%22text%22%3A%22%E5%AD%97%E7%AC%A6%22%7D%2C%7B%22x%22%3A297.87534%2C%22y%22%3A294.9953%2C%22width%22%3A55.44481999999999%2C%22height%22%3A25.877200000000016%2C%22text%22%3A%22%E6%95%B0%E5%80%BC%22%7D%2C%7B%22x%22%3A89.859695%2C%22y%22%3A334.96884%2C%22width%22%3A17.540994999999995%2C%22height%22%3A27.992709999999988%2C%22text%22%3A%22I%22%7D%2C%7B%22x%22%3A308.85226%2C%22y%22%3A336.42142%2C%22width%22%3A18.603940000000023%2C%22height%22%3A26.792359999999974%2C%22text%22%3A%221%22%7D%2C%7B%22x%22%3A88.67695%2C%22y%22%3A374.98416%2C%22width%22%3A22.060384999999997%2C%22height%22%3A28.599890000000016%2C%22text%22%3A%22V%22%7D%2C%7B%22x%22%3A310.1943%2C%22y%22%3A376.124%2C%22width%22%3A16.126899999999978%2C%22height%22%3A26.107349999999997%2C%22text%22%3A%225%22%7D%2C%7B%22x%22%3A87.367775%2C%22y%22%3A417.36255%2C%22width%22%3A25.63259500000001%2C%22height%22%3A28.437099999999987%2C%22text%22%3A%22X%22%7D%2C%7B%22x%22%3A313.61063%2C%22y%22%3A419.8182%2C%22width%22%3A29.621699999999976%2C%22height%22%3A23.921899999999994%2C%22text%22%3A%2210%22%7D%2C%7B%22x%22%3A87.714096%2C%22y%22%3A461.02176%2C%22width%22%3A20.187984%2C%22height%22%3A32.35690000000005%2C%22text%22%3A%22L%22%7D%2C%7B%22x%22%3A311.8007%2C%22y%22%3A463.3723%2C%22width%22%3A30.720879999999966%2C%22height%22%3A21.21956%2C%22text%22%3A%2250%22%7D%2C%7B%22x%22%3A88.9788%2C%22y%22%3A495.58972%2C%22width%22%3A20.49799999999999%2C%22height%22%3A35.65033%2C%22text%22%3A%22C%22%7D%2C%7B%22x%22%3A312.1186%2C%22y%22%3A503.84503%2C%22width%22%3A45.279499999999985%2C%22height%22%3A22.348869999999977%2C%22text%22%3A%22100%22%7D%2C%7B%22x%22%3A310.96008%2C%22y%22%3A545.2519%2C%22width%22%3A45.57605000000001%2C%22height%22%3A21.82384000000002%2C%22text%22%3A%22500%22%7D%2C%7B%22x%22%3A88.445496%2C%22y%22%3A545.4353%2C%22width%22%3A18.904563999999993%2C%22height%22%3A25.970950000000016%2C%22text%22%3A%22D%22%7D%2C%7B%22x%22%3A311.80865%2C%22y%22%3A587.10767%2C%22width%22%3A62.27895000000001%2C%22height%22%3A21.94722999999999%2C%22text%22%3A%221000%22%7D%2C%7B%22x%22%3A1055.4615%2C%22y%22%3A671.5986%2C%22width%22%3A96.56560000000013%2C%22height%22%3A27.119659999999953%2C%22text%22%3A%2227%E5%86%99%E5%81%9A%22%7D%2C%7B%22x%22%3A846.3123%2C%22y%22%3A672.1218%2C%22width%22%3A168.8041599999999%2C%22height%22%3A27.335500000000025%2C%22text%22%3A%22%E5%8D%B3%E4%B8%BAX%2BII%22%7D%2C%7B%22x%22%3A60.71616%2C%22y%22%3A671.3128%2C%22width%22%3A691.7444399999999%2C%22height%22%3A28.41926000000001%2C%22text%22%3A%22%E4%BE%8B%E5%A6%82%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%972%E5%86%99%E5%81%9AII%2C%E5%8D%B3%E4%B8%BA%E4%B8%A4%E4%B8%AA%E5%B9%B6%E5%88%97%E7%9A%841.12%E5%86%99%E5%81%9A7%22%7D%2C%7B%22x%22%3A706.7618%2C%22y%22%3A672.45044%2C%22width%22%3A105.70230000000004%2C%22height%22%3A27.356960000000072%2C%22text%22%3A%22%E5%86%99%E5%81%9AXII%22%7D%2C%7B%22x%22%3A1270.344%2C%22y%22%3A672.7952%2C%22width%22%3A52.1552999999999%2C%22height%22%3A26.415740000000028%2C%22text%22%3A%22%E5%8D%B3%E4%B8%BA%22%7D%2C%7B%22x%22%3A1336.3547%2C%22y%22%3A675.205%2C%22width%22%3A65.2494999999999%2C%22height%22%3A23.25452999999993%2C%22text%22%3A%22XXX%22%7D%2C%7B%22x%22%3A1413.7437%2C%22y%22%3A675.8451%2C%22width%22%3A19.605999999999995%2C%22height%22%3A22.73599999999999%2C%22text%22%3A%22V%22%7D%2C%7B%22x%22%3A1469.7701%2C%22y%22%3A676.76733%2C%22width%22%3A38.69820000000004%2C%22height%22%3A21.47136999999998%2C%22text%22%3A%22II%22%7D%2C%7B%22x%22%3A1168.6044%2C%22y%22%3A676.7315%2C%22width%22%3A78.94050000000016%2C%22height%22%3A21.23339999999996%2C%22text%22%3A%22IIAXX%22%7D%2C%7B%22x%22%3A60.925064%2C%22y%22%3A735.3427%2C%22width%22%3A1613.452536%2C%22height%22%3A29.61590000000001%2C%22text%22%3A%22%E9%80%9A%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E4%B8%AD%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AD%97%E5%9C%A8%E5%A4%A7%E7%9A%84%E6%95%99%E5%AD%A6%E7%9A%84%E5%8F%B3%E8%BE%B9%2C%E4%BD%86%E4%B9%9F%E5%AD%98%E5%9C%A8%E7%89%B9%E4%BE%8B%2C%E4%BE%8B%E5%A6%824%E4%B8%8D%E5%86%99%E5%81%9A%20IIIT%2C%E8%80%8C%E6%98%AF%2CTY%2C%E6%95%B0%E5%AD%971%E5%9C%A8%E8%87%B4%E5%AE%875%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%89%80%E8%A1%A8%E7%A4%BA%E7%9A%84%22%7D%2C%7B%22x%22%3A60.456924%2C%22y%22%3A773.02124%2C%22width%22%3A1255.2000759999999%2C%22height%22%3A28.886359999999968%2C%22text%22%3A%22%E6%95%B0%E7%AD%89%E4%BA%8E%E5%A4%A7%E6%95%B05%E5%87%8F%E5%B0%8F%E6%95%B01%E5%BE%97%E5%88%B0%E7%9A%84%E6%95%B0%E5%80%BC4.%E5%90%8C%E6%A0%B7%E5%9C%B0%2C%E6%95%B0%E5%AD%979%E8%A1%A8%E7%A4%BA%E4%B8%BA%20%E5%B7%A5X.%E8%BF%99%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E8%A7%84%E5%88%99%E5%8F%AA%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%A5%E4%B8%8B%E5%85%AD%E7%A7%8D%E6%83%85%E5%86%B5%3A%22%7D%2C%7B%22x%22%3A174.41545%2C%22y%22%3A837.0229%2C%22width%22%3A605.15981%2C%22height%22%3A27.801799999999957%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8V(5)%E5%92%8CX(10)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA4%E5%92%8C9.%22%7D%2C%7B%22x%22%3A177.89536%2C%22y%22%3A875.86554%2C%22width%22%3A659.69464%2C%22height%22%3A28.963319999999953%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8(50)%E5%92%8CC(100)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA40%E5%92%8C90.%22%7D%2C%7B%22x%22%3A182.4572%2C%22y%22%3A913.02295%2C%22width%22%3A725.1868999999999%2C%22height%22%3A30.80340000000001%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8D(500)%E5%92%8CM(1000)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA400%E5%92%8C900.%22%7D%2C%7B%22x%22%3A59.780064%2C%22y%22%3A978.57336%2C%22width%22%3A406.97197600000004%2C%22height%22%3A28.767740000000003%2C%22text%22%3A%22%E7%BB%99%E4%BD%A0%E4%B8%80%E4%B8%AA%E6%95%B4%E6%95%B0%2C%E5%B0%86%E5%85%B6%E8%BD%AC%E4%B8%BA%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97.%22%7D%2C%7B%22x%22%3A57.457607%2C%22y%22%3A1100.9564%2C%22width%22%3A88.83234300000001%2C%22height%22%3A31.716300000000047%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B1%3A%22%7D%2C%7B%22x%22%3A89.90387%2C%22y%22%3A1187.8611%2C%22width%22%3A137.02233%2C%22height%22%3A30.752099999999928%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%22%7D%2C%7B%22x%22%3A269.42252%2C%22y%22%3A1190.1678%2C%22width%22%3A14.293819999999982%2C%22height%22%3A21.032500000000027%2C%22text%22%3A%223%22%7D%2C%7B%22x%22%3A89.965515%2C%22y%22%3A1230.0923%2C%22width%22%3A161.721185%2C%22height%22%3A27.251800000000003%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22II%5C%22%22%7D%2C%7B%22x%22%3A60.109104%2C%22y%22%3A1315.5518%2C%22width%22%3A88.23476600000001%2C%22height%22%3A29.28469999999993%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B2%3A%22%7D%2C%7B%22x%22%3A90.545105%2C%22y%22%3A1401.0825%2C%22width%22%3A192.06283499999998%2C%22height%22%3A25.62609999999995%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%20%E4%B8%89%204%22%7D%2C%7B%22x%22%3A90.67733%2C%22y%22%3A1441.1827%2C%22width%22%3A143.86816%2C%22height%22%3A27.39949999999999%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22IV%5C%22%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23252525%22%2C%22id%22%3A%22uce798191%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ucfc4ab99" id="ucfc4ab99"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671061949217-0cea1bf3-2508-42ad-ad88-055b49c0faa0.png%22%2C%22taskId%22%3A%22ub6e70458-d7fe-454f-820d-06a78d4a4a7%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A698.4%2C%22height%22%3A326%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A84780%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1746%2C%22originHeight%22%3A816%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22%E7%A4%BA%E4%BE%8B3%3A%20%E8%BE%93%E5%85%A5%3ANUM%209%20%E8%BE%93%E5%87%BA%3A%5C%22IX%5C%22%20%E7%A4%BA%E4%BE%8B4%3A%20%E8%BE%93%E5%85%A5%3ANUM%20%2058%20%E8%BE%93%E5%87%BA%3A%5C%22LVIII%5C%22%20%E8%A7%A3%E9%87%8A%3AL%20%E4%BA%8C%2050%2CV%205%2C%20III%20%E4%B8%893.%20%E7%A4%BA%E4%BE%8B5%3A%20%E8%BE%93%E5%85%A5%3ANUM%20%201994%20%E8%BE%93%E5%87%BA%3A%5C%22MCMXCIV%5C%22%20%E8%A7%A3%E9%87%8A%3AM%201000%2CCM%20%3A900%2CXC%E4%BA%8C90%2CIV%E4%B8%894.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A59.264885%2C%22y%22%3A66.830185%2C%22width%22%3A86.39361500000001%2C%22height%22%3A26.037491000000003%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B3%3A%22%7D%2C%7B%22x%22%3A88.30588%2C%22y%22%3A147.80725%2C%22width%22%3A136.04039%2C%22height%22%3A29.33678999999998%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%22%7D%2C%7B%22x%22%3A265.44467%2C%22y%22%3A150.04686%2C%22width%22%3A16.916260000000023%2C%22height%22%3A23.189089999999993%2C%22text%22%3A%229%22%7D%2C%7B%22x%22%3A88.369774%2C%22y%22%3A188.75284%2C%22width%22%3A142.836896%2C%22height%22%3A29.42496%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22IX%5C%22%22%7D%2C%7B%22x%22%3A58.99816%2C%22y%22%3A275.6218%2C%22width%22%3A81.50338%2C%22height%22%3A28.69292999999999%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B4%3A%22%7D%2C%7B%22x%22%3A88.43651%2C%22y%22%3A360.86615%2C%22width%22%3A212.99473%2C%22height%22%3A29.373289999999997%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%20%2058%22%7D%2C%7B%22x%22%3A87.64723%2C%22y%22%3A400.90942%2C%22width%22%3A198.16167000000002%2C%22height%22%3A29.53782000000001%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22LVIII%5C%22%22%7D%2C%7B%22x%22%3A98.20017%2C%22y%22%3A444.18073%2C%22width%22%3A354.34945%2C%22height%22%3A29.206970000000013%2C%22text%22%3A%22%E8%A7%A3%E9%87%8A%3AL%20%E4%BA%8C%2050%2CV%205%2C%20III%22%7D%2C%7B%22x%22%3A462.59714%2C%22y%22%3A445.85492%2C%22width%22%3A63.83346%2C%22height%22%3A25.016200000000026%2C%22text%22%3A%22%E4%B8%893.%22%7D%2C%7B%22x%22%3A59.768936%2C%22y%22%3A531.79474%2C%22width%22%3A85.24310400000002%2C%22height%22%3A27.041560000000004%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B5%3A%22%7D%2C%7B%22x%22%3A87.19127%2C%22y%22%3A613.6101%2C%22width%22%3A244.52363%2C%22height%22%3A28.786699999999996%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%20%201994%22%7D%2C%7B%22x%22%3A88.10955%2C%22y%22%3A655.8773%2C%22width%22%3A225.04534999999998%2C%22height%22%3A30.959550000000036%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22MCMXCIV%5C%22%22%7D%2C%7B%22x%22%3A87.464386%2C%22y%22%3A698.74884%2C%22width%22%3A296.610164%2C%22height%22%3A27.84789999999998%2C%22text%22%3A%22%E8%A7%A3%E9%87%8A%3AM%201000%2CCM%22%7D%2C%7B%22x%22%3A400.7935%2C%22y%22%3A698.014%2C%22width%22%3A335.3991%2C%22height%22%3A28.216000000000008%2C%22text%22%3A%22%3A900%2CXC%E4%BA%8C90%2CIV%E4%B8%894.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23242424%22%2C%22id%22%3A%22u2b614474%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ucc116c65" id="ucc116c65"><br></p><p data-lake-id="u47d967d3" id="u47d967d3"><span data-lake-id="u6392bfe4" id="u6392bfe4">？？？？贪心思路：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22let%20intToRoman%20%3D%20function%20(num)%20%7B%5Cn%20%20%20%20let%20values%20%3D%20%5B1000%2C%20900%2C%20500%2C%20400%2C%20100%2C%2090%2C%2050%2C%2040%2C%2010%2C%209%2C%205%2C%204%2C%201%5D%2C%5Cn%20%20%20%20%20%20%20%20strs%20%3D%20%5B%5C%22M%5C%22%2C%20%5C%22CM%5C%22%2C%20%5C%22D%5C%22%2C%20%5C%22CD%5C%22%2C%20%5C%22C%5C%22%2C%20%5C%22XC%5C%22%2C%20%5C%22L%5C%22%2C%20%5C%22XL%5C%22%2C%20%5C%22X%5C%22%2C%20%5C%22IX%5C%22%2C%20%5C%22V%5C%22%2C%20%5C%22IV%5C%22%2C%20%5C%22I%5C%22%5D%2C%5Cn%20%20%20%20%20%20%20%20result%20%3D%20''%3B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20values.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20while%20(num%20%3E%3D%20values%5Bi%5D)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20num%20-%3D%20values%5Bi%5D%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20result%20%2B%3D%20strs%5Bi%5D%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20return%20result%3B%5Cn%7D%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22KQjYH%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u5d869315" id="u5d869315"><span data-lake-id="u1c50fc43" id="u1c50fc43">​</span><br></p><p data-lake-id="ud4dfc10d" id="ud4dfc10d"><br></p><h1 data-lake-id="r9z5W" id="r9z5W"><span data-lake-id="u049e5fd9" id="u049e5fd9">10、实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject\0 </span></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22Promise.retry%20%3D%20function%20(promiseFn%2C%20times%20%3D%203)%20%7B%5Cn%20%20%20%20return%20new%20Promise(async%20(resolve%2C%20reject)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20while%20(times--)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20ret%20%3D%20await%20promiseFn()%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(ret)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E6%88%90%E5%8A%9F%E4%BA%86%E5%B0%B1%E7%9B%B4%E6%8E%A5break%E4%BA%86%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!times)%20reject(error)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D)%3B%5Cn%7D%3B%5Cn%5Cn%5Cnfunction%20getProm()%20%7B%5Cn%20%20%20%20const%20n%20%3D%20Math.random()%3B%5Cn%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20console.log(n)%3B%5Cn%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%20n%20%3E%200.9%20%3F%20resolve(n)%20%3A%20reject(n)%2C%201000)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%7D%5CnPromise.retry(getProm%2C10)%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B6%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22I3Dil%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u997bc3db" id="u997bc3db"><br></p><h1 data-lake-id="SYekL" id="SYekL"><span data-lake-id="u5eb046f8" id="u5eb046f8">11、柯里化参数固定场景 </span><code data-lake-id="u4586272d" id="u4586272d"><span data-lake-id="u9e3c97c3" id="u9e3c97c3">add(1)(2)(3)\0</span></code></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%E6%9F%AF%E9%87%8C%E5%8C%96%5Cn%20*%20%E5%8F%82%E6%95%B0%E5%9B%BA%E5%AE%9A%E5%9C%BA%E6%99%AF%5Cn%20*%20add(1)(2)(3)%5Cn%20*%20add(4)(5)(6)%5Cn%20*%5Cn%20*%20*%2F%5Cn%5Cnconst%20curry%20%3D%20(fn%2C%20...args1)%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(args1.length%20%3E%3D%20fn.length)%20%7B%5Cn%20%20%20%20%20%20%20%20return%20fn(...args1)%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%2F%2F%20%E4%B8%A4%E4%B8%AAreturn%20%5Cn%20%20%20%20%20%20%20%20return%20(...args2)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20curry(fn%2C%20...args1%2C%20...args2)%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20add1(x%2C%20y%2C%20z)%20%7B%5Cn%20%20%20%20return%20x%20%2B%20y%20%2B%20z%3B%5Cn%7D%5Cn%5Cnconst%20add%20%3D%20curry(add1)%3B%5Cnconsole.log(add(1%2C%202%2C%203))%3B%5Cnconsole.log(add(1)(2)(3))%3B%5Cnconsole.log(add(1%2C%202)(3))%3B%5Cnconsole.log(add(1)(2%2C%203))%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22elkUl%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uca535bd9" id="uca535bd9"><br></p><h1 data-lake-id="VwHiu" id="VwHiu"><span data-lake-id="u256ac7b6" id="u256ac7b6">12、接上题，参数不固定的柯里化场景</span></h1><p data-lake-id="u56528b02" id="u56528b02"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%E6%9F%AF%E9%87%8C%E5%8C%96%5Cn%20*%20%E5%8F%82%E6%95%B0%E4%B8%8D%E5%9B%BA%E5%AE%9A%E5%9C%BA%E6%99%AF%5Cn%20*%20add(1)(2)(3%2C4).sumof()%5Cn%20*%5Cn%20*%20*%2F%5Cn%5Cnconst%20add%20%3D%20(...args)%20%3D%3E%20%7B%5Cn%20%20%20%20let%20vars%20%3D%20%5B%5D%3B%5Cn%20%20%20%20%5Cn%20%20%20%20%2F%2F%20%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%EF%BC%8C%E5%BD%A2%E6%88%90%E9%97%AD%E5%8C%85%5Cn%20%20%20%20const%20curried%20%3D%20(...arg2)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E8%BF%99%E9%87%8C%20vars%2C%E8%AE%B0%E4%BD%8F%E4%BA%86%5Cn%20%20%20%20%20%20%20%20vars%20%3D%20%5B...vars%2C%20...arg2%5D%3B%5Cn%20%20%20%20%20%20%20%20return%20curried%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%5Cn%20%20%20%20curried.sumof%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2Ftodo%20%E5%81%9A%E4%BD%A0%E6%83%B3%E5%81%9A%E7%9A%84%E4%BA%8B%E6%83%85%5Cn%20%20%20%20%20%20%20%20return%20vars%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20return%20curried(...args)%5Cn%7D%5Cn%5Cnconsole.log(add(1)(2)(3%2C%204).sumof())%5Cnconsole.log(add(1)(2)(3%2C%204)(7%2C%208).sumof())%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B8%2C12%2C18%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22eouym%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uad88cec4" id="uad88cec4"><span data-lake-id="ufa56ac50" id="ufa56ac50">​</span><br></p><h1 data-lake-id="sif8W" id="sif8W"><span data-lake-id="u30361f72" id="u30361f72">13、如何实现大文件上传</span></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F*************************************************%5Cn%20*%20%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%5Cn%20*%5Cn%20*%201%E3%80%81%E4%BD%BF%E7%94%A8FileReader%E8%AF%BB%E6%96%87%E4%BB%B6%E6%B5%81%20%EF%BC%8Cblob.slice%E5%88%86%E5%89%B2%EF%BC%8Cmd5%E6%96%87%E4%BB%B6%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%EF%BC%8Chash.1.png%5Cn%20*%202%E3%80%81%E8%AF%95%E8%AF%95%E7%9B%91%E5%90%ACxhr%20%20ononpress%E5%AE%9E%E6%97%B6%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%BC%A0%E8%BF%9B%E5%BA%A6%5Cn%20*%203%E3%80%81%E9%83%BD%E4%B8%8A%E4%BC%A0%E5%AE%8C%E5%90%8E%EF%BC%8C%E9%9C%80%E8%A6%81%E5%86%8D%E5%8F%91%E4%B8%80%E4%B8%AA%E8%AF%B7%E6%B1%82%E5%91%8A%E8%AF%89%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%81%9A%E5%90%88%E5%B9%B6%E5%A4%84%E7%90%86%5Cn%20*%5Cn%20************************************************%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22jU5sb%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u85ba6bc3" id="u85ba6bc3"><br></p><h1 data-lake-id="HnlYe" id="HnlYe"><span data-lake-id="u0eb1816a" id="u0eb1816a">14、如何实现图片懒加载</span></h1><p data-lake-id="ud62acaf0" id="ud62acaf0"><span data-lake-id="u8feffdf6" id="u8feffdf6">加载图片的时机：</span></p><ul list="u45102ee9"><li fid="ub2bd12f8" data-lake-id="u605ab160" id="u605ab160"><span data-lake-id="ua2cd7e2e" id="ua2cd7e2e">​</span><code data-lake-id="u3944f2ee" id="u3944f2ee"><span data-lake-id="ubc925597" id="ubc925597">img[i].offsetTop &lt; 可视区域视图高度 + scrollTop</span></code></li></ul><p data-lake-id="u7fc71715" id="u7fc71715"><br></p><h1 data-lake-id="PBMk4" id="PBMk4"><span data-lake-id="u3388ab30" id="u3388ab30">15、说说</span><code data-lake-id="ud4add3cf" id="ud4add3cf"><span data-lake-id="u6d938c57" id="u6d938c57">jsonp</span></code><span data-lake-id="uc46208c2" id="uc46208c2">的原理</span></h1><p data-lake-id="uce53bdbd" id="uce53bdbd"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1654739236669-f84c6c1f-a135-470b-b8eb-4d21f0dd1fb9.png%22%2C%22taskId%22%3A%22ue7ecac9a-c2c8-4ece-8bc5-ddf8f1c84ae%22%2C%22clientId%22%3A%22u33fd68fe-cfcb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A569.9937744140625%2C%22height%22%3A612%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A501103%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1210%2C%22originHeight%22%3A1300%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%3CHTML%3E%20%3CBODY%3E%20%3CDIV%3E%20RECEIVE%20%3CSPAN%20ID-%5C%22QWERTY%5C%22%3E%20%3C%2FSPAN%3E%20%3C%2FDIV%3E%20%3C%2FBODY%3E%20%3CSCRIPT%3E%20CALLFUN(%20DAT%20FUNCTION%20DOCUMENT.GETELEMENTBYID(%5C%22QWERTY').INNERHTML%20DATA%3B%20%3C%2FSCRIPT%3E%20%3CSCRIPT%20SRC-%5C%22HTTP%3A%2F%2F127.0.0.1%3A10010%2FJS%3FZALL-CALLFUN%5C%22P%3C%2FSCRIPT%3E%20%3C%2FHTML%3E%20%E5%90%8E%E7%AB%AF%E4%BD%BF%E7%94%A8%E7%9A%84EGG.JS%2C%E6%A0%B8%E5%BF%83%E4%BB%A3%E7%A0%81%E5%8F%AA%E6%9C%89CTX.BODY%E9%82%A3%E4%B8%80%E5%8F%A5%20'USE%20STRICT'%3B%20CONST%20CONTROLLER%20-%20REQUIRE('EGG').CONTROLLER%3B%20CONTROLLER%20CLASS%20JSONPCONTROLLER%20EXTENDS%20ASYNC%20INDEX()%20CONST%7B%20CTX%20%7D%20-%20THIS%3B%20CONSOLE.LOG(CTX.QUERY)%3B%20'TEXT%2FJAVASCRIPT')%3B%20CTX.SET('CONTENT-TYPE'%2C%20CTX%2CBODY%20CTX%2CQUERY.CALL%20'(%5C%22NIHAO%5C%22)'%3B%20%E4%B8%BA%E4%BA%86%E8%AE%A9%E5%90%8E%E7%AB%AF%E7%9F%A5%E9%81%93%E6%88%91%E4%BB%AC%E5%89%8D%E7%AB%AF%E7%9A%84%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%8D%E5%AD%97%2C%E6%88%91%E4%BB%AC%E5%9C%A8SCRIPT%E7%9A%84%E8%AF%B7%E6%B1%82%20%E4%B8%AD%E5%8A%A0%E5%85%A5%E4%BA%86CALL-CALLFUN%E5%8F%82%E6%95%B0%2C%E5%90%8E%E7%AB%AF%20%E6%8E%A5%E6%94%B6%E5%88%B0CTX.QUERY.CALL%2C%E5%86%8D%E5%92%8C(%5C%22NIHAO%5C%22)%E5%90%88%E5%B9%B6%2C%E6%9C%80%E5%90%8E%E5%BD%A2%E6%88%90%E4%BA%86%E5%AD%97%E7%AC%A6%E4%B8%B2CALLFUN(%5C%22NIHAO%5C%22)%E8%BF%99%E4%B8%80%E5%8F%A5JS%E4%BB%A3%E7%A0%81%2C%E4%BC%A0%20%E5%88%B0%E5%89%8D%E7%AB%AF.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A30.186176%2C%22y%22%3A3.197723%2C%22width%22%3A87.013904%2C%22height%22%3A26.584185%2C%22text%22%3A%22%3CHTML%3E%22%7D%2C%7B%22x%22%3A59.427086%2C%22y%22%3A44.622147%2C%22width%22%3A91.49112399999999%2C%22height%22%3A27.746177000000003%2C%22text%22%3A%22%3CBODY%3E%22%7D%2C%7B%22x%22%3A89.38256%2C%22y%22%3A85.18746%2C%22width%22%3A74.96%2C%22height%22%3A22.811639999999997%2C%22text%22%3A%22%3CDIV%3E%22%7D%2C%7B%22x%22%3A122.07273%2C%22y%22%3A122.2838%2C%22width%22%3A495.89087000000006%2C%22height%22%3A25.899839999999998%2C%22text%22%3A%22RECEIVE%20%3CSPAN%20ID-%5C%22QWERTY%5C%22%3E%20%3C%2FSPAN%3E%22%7D%2C%7B%22x%22%3A90.17562%2C%22y%22%3A163.29803%2C%22width%22%3A85.95886%2C%22height%22%3A22.87666999999999%2C%22text%22%3A%22%3C%2FDIV%3E%22%7D%2C%7B%22x%22%3A59.03563%2C%22y%22%3A200.93222%2C%22width%22%3A106.31132%2C%22height%22%3A23.76442%2C%22text%22%3A%22%3C%2FBODY%3E%22%7D%2C%7B%22x%22%3A59.201836%2C%22y%22%3A240.02806%2C%22width%22%3A116.91406400000001%2C%22height%22%3A23.809439999999967%2C%22text%22%3A%22%3CSCRIPT%3E%22%7D%2C%7B%22x%22%3A222.66006%2C%22y%22%3A278.03912%2C%22width%22%3A146.91602%2C%22height%22%3A26.213229999999953%2C%22text%22%3A%22CALLFUN(%20DAT%22%7D%2C%7B%22x%22%3A89.67748%2C%22y%22%3A278.4487%2C%22width%22%3A120.25656000000001%2C%22height%22%3A26.646150000000034%2C%22text%22%3A%22FUNCTION%22%7D%2C%7B%22x%22%3A119.86246%2C%22y%22%3A318.06042%2C%22width%22%3A743.47504%2C%22height%22%3A24.395939999999996%2C%22text%22%3A%22DOCUMENT.GETELEMENTBYID(%5C%22QWERTY').INNERHTML%20DATA%3B%22%7D%2C%7B%22x%22%3A60.941887%2C%22y%22%3A394.95728%2C%22width%22%3A131.64475299999998%2C%22height%22%3A24.999719999999968%2C%22text%22%3A%22%3C%2FSCRIPT%3E%22%7D%2C%7B%22x%22%3A60.042564%2C%22y%22%3A429.3825%2C%22width%22%3A908.9413860000001%2C%22height%22%3A32.104870000000005%2C%22text%22%3A%22%3CSCRIPT%20SRC-%5C%22HTTP%3A%2F%2F127.0.0.1%3A10010%2FJS%3FZALL-CALLFUN%5C%22P%3C%2FSCRIPT%3E%22%7D%2C%7B%22x%22%3A30.429743%2C%22y%22%3A472.10373%2C%22width%22%3A102.62482700000001%2C%22height%22%3A24.56549000000001%2C%22text%22%3A%22%3C%2FHTML%3E%22%7D%2C%7B%22x%22%3A9.410989%2C%22y%22%3A571.5982%2C%22width%22%3A606.018711%2C%22height%22%3A28.177099999999996%2C%22text%22%3A%22%E5%90%8E%E7%AB%AF%E4%BD%BF%E7%94%A8%E7%9A%84EGG.JS%2C%E6%A0%B8%E5%BF%83%E4%BB%A3%E7%A0%81%E5%8F%AA%E6%9C%89CTX.BODY%E9%82%A3%E4%B8%80%E5%8F%A5%22%7D%2C%7B%22x%22%3A43.843857%2C%22y%22%3A673.288%2C%22width%22%3A166.192183%2C%22height%22%3A23.518599999999992%2C%22text%22%3A%22'USE%20STRICT'%3B%22%7D%2C%7B%22x%22%3A31.404425%2C%22y%22%3A746.61975%2C%22width%22%3A657.593745%2C%22height%22%3A30.641110000000026%2C%22text%22%3A%22CONST%20CONTROLLER%20-%20REQUIRE('EGG').CONTROLLER%3B%22%7D%2C%7B%22x%22%3A470.27887%2C%22y%22%3A789.1855%2C%22width%22%3A176.66163000000006%2C%22height%22%3A25.771959999999922%2C%22text%22%3A%22CONTROLLER%22%7D%2C%7B%22x%22%3A31.007618%2C%22y%22%3A790.0378%2C%22width%22%3A425.001282%2C%22height%22%3A23.664960000000065%2C%22text%22%3A%22CLASS%20JSONPCONTROLLER%20EXTENDS%22%7D%2C%7B%22x%22%3A59.21073%2C%22y%22%3A828.37445%2C%22width%22%3A219.98926999999998%2C%22height%22%3A29.914949999999976%2C%22text%22%3A%22ASYNC%20INDEX()%22%7D%2C%7B%22x%22%3A88.05679%2C%22y%22%3A865.5369%2C%22width%22%3A307.27796%2C%22height%22%3A28.411460000000034%2C%22text%22%3A%22CONST%7B%20CTX%20%7D%20-%20THIS%3B%22%7D%2C%7B%22x%22%3A89.75395%2C%22y%22%3A907.0072%2C%22width%22%3A333.63676999999996%2C%22height%22%3A28.38919999999996%2C%22text%22%3A%22CONSOLE.LOG(CTX.QUERY)%3B%22%7D%2C%7B%22x%22%3A449.81506%2C%22y%22%3A943.87665%2C%22width%22%3A270.70434%2C%22height%22%3A28.903500000000008%2C%22text%22%3A%22'TEXT%2FJAVASCRIPT')%3B%22%7D%2C%7B%22x%22%3A88.305824%2C%22y%22%3A945.05554%2C%22width%22%3A327.34673599999996%2C%22height%22%3A27.48496%2C%22text%22%3A%22CTX.SET('CONTENT-TYPE'%2C%22%7D%2C%7B%22x%22%3A92.74562%2C%22y%22%3A982.7129%2C%22width%22%3A367.84023%2C%22height%22%3A25.561199999999985%2C%22text%22%3A%22CTX%2CBODY%20CTX%2CQUERY.CALL%22%7D%2C%7B%22x%22%3A508.8063%2C%22y%22%3A983.5922%2C%22width%22%3A164.06099999999998%2C%22height%22%3A25.900199999999927%2C%22text%22%3A%22'(%5C%22NIHAO%5C%22)'%3B%22%7D%2C%7B%22x%22%3A9.330955%2C%22y%22%3A1160.2942%2C%22width%22%3A751.073345%2C%22height%22%3A28.963600000000042%2C%22text%22%3A%22%E4%B8%BA%E4%BA%86%E8%AE%A9%E5%90%8E%E7%AB%AF%E7%9F%A5%E9%81%93%E6%88%91%E4%BB%AC%E5%89%8D%E7%AB%AF%E7%9A%84%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%8D%E5%AD%97%2C%E6%88%91%E4%BB%AC%E5%9C%A8SCRIPT%E7%9A%84%E8%AF%B7%E6%B1%82%22%7D%2C%7B%22x%22%3A789.5417%2C%22y%22%3A1160.3115%2C%22width%22%3A377.7753%2C%22height%22%3A38.72219999999993%2C%22text%22%3A%22%E4%B8%AD%E5%8A%A0%E5%85%A5%E4%BA%86CALL-CALLFUN%E5%8F%82%E6%95%B0%2C%E5%90%8E%E7%AB%AF%22%7D%2C%7B%22x%22%3A8.570627%2C%22y%22%3A1199.7621%2C%22width%22%3A1178.441673%2C%22height%22%3A37.047199999999975%2C%22text%22%3A%22%E6%8E%A5%E6%94%B6%E5%88%B0CTX.QUERY.CALL%2C%E5%86%8D%E5%92%8C(%5C%22NIHAO%5C%22)%E5%90%88%E5%B9%B6%2C%E6%9C%80%E5%90%8E%E5%BD%A2%E6%88%90%E4%BA%86%E5%AD%97%E7%AC%A6%E4%B8%B2CALLFUN(%5C%22NIHAO%5C%22)%E8%BF%99%E4%B8%80%E5%8F%A5JS%E4%BB%A3%E7%A0%81%2C%E4%BC%A0%22%7D%2C%7B%22x%22%3A7.4088507%2C%22y%22%3A1247.9119%2C%22width%22%3A92.8696893%2C%22height%22%3A29.24389999999994%2C%22text%22%3A%22%E5%88%B0%E5%89%8D%E7%AB%AF.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23f2efee%22%2C%22id%22%3A%22ud9c10d62%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="uccd9442f" id="uccd9442f"><br></p><h1 data-lake-id="x3y9h" id="x3y9h"><span data-lake-id="uf374a7ff" id="uf374a7ff">16、各种循环的快慢</span></h1><p data-lake-id="u606e0fc7" id="u606e0fc7"><code data-lake-id="ua4ce4290" id="ua4ce4290"><span data-lake-id="uf292736f" id="uf292736f">while最快，其次for、最后for in </span></code></p><p data-lake-id="ue751d957" id="ue751d957"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1654613959790-a0908bf5-375e-491c-9314-acaad3b68bc4.png%22%2C%22taskId%22%3A%22ucd2778c3-7a1b-40b4-bd05-78c72aee384%22%2C%22clientId%22%3A%22u8d90aaeb-1258-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A798%2C%22height%22%3A562%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A474598%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1206%2C%22originHeight%22%3A850%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E5%BE%AA%E7%8E%AF%2CWHILE%E6%9C%80%E5%BF%AB%2C%E5%85%B6%E6%AC%A1FOR%2C%E6%9C%80%E5%90%8EFOR%20IN%20CONST%20LENGTH%20-%20ARRAY.LENGTH%3B%20LETI%200%3B%20SUM-0%3B%20SUNS%20FOR(CONST%20KEY%20IN%20ARRAY)%20WHILE%20(I%3CLENGTH)%20-ARRAY%5BKEY%5D%3B%20CONST%20ELEMENT%20CONST%20ELEMENT%20ARRAYLIL%3B%20ELEMENT%3B%20SUM%2B%E4%B8%89%20SUM%2BELEMENT%3B%20141MS%204MS%20FOR(LETII0%3BI%3CARRAY.LENGTH%3BI%2B%2B%2B%2B%2B%20CONST%20ELEMENT%20-%20ARRAY%5BIL%3B%20SUM%2BELEMENT%3B%20Y%2012MS%20CODE%E7%A7%98%E5%AF%86%E8%8A%B1%E5%9B%AD%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A29.65749%2C%22y%22%3A16.47008%2C%22width%22%3A501.44865%2C%22height%22%3A35.31815%2C%22text%22%3A%22%E5%BE%AA%E7%8E%AF%2CWHILE%E6%9C%80%E5%BF%AB%2C%E5%85%B6%E6%AC%A1FOR%2C%E6%9C%80%E5%90%8EFOR%20IN%22%7D%2C%7B%22x%22%3A133.31783%2C%22y%22%3A152.89183%2C%22width%22%3A312.42912%2C%22height%22%3A24.760320000000007%2C%22text%22%3A%22CONST%20LENGTH%20-%20ARRAY.LENGTH%3B%22%7D%2C%7B%22x%22%3A129.6203%2C%22y%22%3A176.73326%2C%22width%22%3A111.30533000000003%2C%22height%22%3A18.401639999999986%2C%22text%22%3A%22LETI%200%3B%22%7D%2C%7B%22x%22%3A708.5004%2C%22y%22%3A182.23709%2C%22width%22%3A91.2672%2C%22height%22%3A22.459339999999997%2C%22text%22%3A%22SUM-0%3B%22%7D%2C%7B%22x%22%3A129.06683%2C%22y%22%3A198.65308%2C%22width%22%3A82.36216999999999%2C%22height%22%3A18.93446%2C%22text%22%3A%22SUNS%22%7D%2C%7B%22x%22%3A708.12646%2C%22y%22%3A206.7038%2C%22width%22%3A303.91854%2C%22height%22%3A27.36435%2C%22text%22%3A%22FOR(CONST%20KEY%20IN%20ARRAY)%22%7D%2C%7B%22x%22%3A128.2668%2C%22y%22%3A219.07272%2C%22width%22%3A230.28014000000002%2C%22height%22%3A21.71195%2C%22text%22%3A%22WHILE%20(I%3CLENGTH)%22%7D%2C%7B%22x%22%3A894.6131%2C%22y%22%3A233.34366%2C%22width%22%3A148.8989999999999%2C%22height%22%3A26.764920000000018%2C%22text%22%3A%22-ARRAY%5BKEY%5D%3B%22%7D%2C%7B%22x%22%3A732.639%2C%22y%22%3A237.52133%2C%22width%22%3A153.18503999999996%2C%22height%22%3A18.337009999999992%2C%22text%22%3A%22CONST%20ELEMENT%22%7D%2C%7B%22x%22%3A153.15517%2C%22y%22%3A241.07625%2C%22width%22%3A283.12046%2C%22height%22%3A22.14685%2C%22text%22%3A%22CONST%20ELEMENT%20ARRAYLIL%3B%22%7D%2C%7B%22x%22%3A794.6704%2C%22y%22%3A263.03134%2C%22width%22%3A108.19355000000007%2C%22height%22%3A19.763260000000002%2C%22text%22%3A%22ELEMENT%3B%22%7D%2C%7B%22x%22%3A732.1118%2C%22y%22%3A264.909%2C%22width%22%3A75.1404%2C%22height%22%3A16.506039999999985%2C%22text%22%3A%22SUM%2B%E4%B8%89%22%7D%2C%7B%22x%22%3A152.46248%2C%22y%22%3A267.91382%2C%22width%22%3A171.92192000000003%2C%22height%22%3A18.581110000000024%2C%22text%22%3A%22SUM%2BELEMENT%3B%22%7D%2C%7B%22x%22%3A807.1076%2C%22y%22%3A368.64032%2C%22width%22%3A87.07899999999995%2C%22height%22%3A24.549180000000035%2C%22text%22%3A%22141MS%22%7D%2C%7B%22x%22%3A207.13934%2C%22y%22%3A379.69434%2C%22width%22%3A62.27303999999998%2C%22height%22%3A24.700440000000015%2C%22text%22%3A%224MS%22%7D%2C%7B%22x%22%3A328.7612%2C%22y%22%3A611.7384%2C%22width%22%3A492.4710400000001%2C%22height%22%3A25.499450000000024%2C%22text%22%3A%22FOR(LETII0%3BI%3CARRAY.LENGTH%3BI%2B%2B%2B%2B%2B%22%7D%2C%7B%22x%22%3A354.92767%2C%22y%22%3A641.1147%2C%22width%22%3A306.37453%2C%22height%22%3A24.817549999999983%2C%22text%22%3A%22CONST%20ELEMENT%20-%20ARRAY%5BIL%3B%22%7D%2C%7B%22x%22%3A352.39343%2C%22y%22%3A672.83954%2C%22width%22%3A188.57216999999997%2C%22height%22%3A21.396259999999984%2C%22text%22%3A%22SUM%2BELEMENT%3B%22%7D%2C%7B%22x%22%3A327.59683%2C%22y%22%3A693.9692%2C%22width%22%3A15.348599999999976%2C%22height%22%3A30.354649999999992%2C%22text%22%3A%22Y%22%7D%2C%7B%22x%22%3A504.11877%2C%22y%22%3A788.72064%2C%22width%22%3A76.02369000000004%2C%22height%22%3A28.76189999999997%2C%22text%22%3A%2212MS%22%7D%2C%7B%22x%22%3A986.6466%2C%22y%22%3A796.5777%2C%22width%22%3A215.77520000000004%2C%22height%22%3A41.44189999999992%2C%22text%22%3A%22CODE%E7%A7%98%E5%AF%86%E8%8A%B1%E5%9B%AD%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23747e83%22%2C%22id%22%3A%22ub0de0a96%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ucb696392" id="ucb696392"><br></p><p data-lake-id="u7d41a682" id="u7d41a682"><br></p><h1 data-lake-id="WQieP" id="WQieP"><span data-lake-id="ud025aee3" id="ud025aee3">17、自己实现</span><code data-lake-id="u56deeaee" id="u56deeaee"><span data-lake-id="uf2afeba3" id="uf2afeba3">Array.prototype.splice\0</span></code></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22Array.prototype.splice%20%3D%20Array.prototype.splice%20%7C%7C%20function%20(start%2C%20deleteCount%2C%20...addList)%20%7B%5Cn%5Cn%20%20%20%20%2F%2F%2F%2F%20%3A%3A%3A%3A%20%E5%A4%84%E7%90%86%E5%BC%80%E5%A7%8B%20startIndex%5Cn%20%20%20%20if%20(start%20%3C%200)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(Math.abs(start)%20%3E%20this.length)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20start%20%3D%200%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20start%20%2B%3D%20this.length%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%A4%84%E7%90%86%E5%88%A0%E9%99%A4%E7%9A%84%E7%9A%84%E4%B8%AA%E6%95%B0%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%B2%A1%E4%BC%A0%EF%BC%8C%E7%9B%B4%E6%8E%A5%E7%AD%89%E4%BA%8E%E9%95%BF%E5%BA%A6%20-%20start%5Cn%20%20%20%20if%20(typeof%20deleteCount%20%3D%3D%3D%20'undefined')%20%7B%5Cn%20%20%20%20%20%20%20%20deleteCount%20%3D%20this.length%20-%20start%5Cn%20%20%20%20%7D%5Cn%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%A4%84%E7%90%86%EF%BC%8C%E7%A7%BB%E9%99%A4%E7%9A%84%5Cn%20%20%20%20const%20removeList%20%3D%20this.slice(start%2C%20start%20%2B%20deleteCount)%5Cn%20%20%5Cn%20%20%20%20const%20right%20%3D%20this.slice(start%20%2B%20deleteCount)%5Cn%5Cn%20%20%20%20%2F%2F%2F%2F%20%3A%3A%3A%3A%20%E9%87%8D%E6%96%B0%E4%BF%AE%E6%94%B9this%20-%3E%20%E5%8E%9F%E6%95%B0%E7%BB%84%20%EF%BC%8C%E5%8D%B3%E5%8A%A0%E5%85%A5addlist%E6%95%B0%E7%BB%84%E7%89%87%E6%AE%B5%20%2B%20right%E5%89%A9%E4%BD%99%E7%9A%84%E6%95%B0%E7%BB%84%E7%89%87%E6%AE%B5%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%20%E5%85%B3%E9%94%AE%E6%98%AF%E8%BF%99%E9%87%8C%EF%BC%8C%E6%B2%A1%E6%9C%89%E5%8F%91%E7%8E%B0%E6%89%80%E8%B0%93%E7%9A%84left%2C%E5%9B%A0%E4%B8%BAleft%E8%BF%98%E5%9C%A8this%E9%87%8C%E5%91%A2%EF%BC%8C%E4%B9%9F%E5%B0%B1%E6%98%AF%E6%9C%AC%E8%BA%AB%E6%B2%A1%E5%8F%98%5Cn%20%20%5Cn%20%20%20%20let%20addIndex%20%3D%20start%5Cn%20%20%20%20addList.concat(right).forEach(item%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this%5BaddIndex%5D%20%3D%20item%5Cn%20%20%20%20%20%20%20%20addIndex%2B%2B%5Cn%20%20%20%20%7D)%5Cn%5Cn%20%20%20%20this.length%20%3D%20addIndex%5Cn%5Cn%20%20%20%20return%20removeList%5Cn%7D%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B2%2C11%2C22%2C24%2C27%2C30%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22PgkKE%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u5b1241f8" id="u5b1241f8"><br></p><p data-lake-id="ua17e4baa" id="ua17e4baa"><br></p><h1 data-lake-id="JaZ1p" id="JaZ1p" collapsed="true"><span data-lake-id="u7a4d4585" id="u7a4d4585">18、实现</span><code data-lake-id="u86e9fd7d" id="u86e9fd7d"><span data-lake-id="u4190332f" id="u4190332f">1,2,3,5,7,8,9</span></code><span data-lake-id="u64a38768" id="u64a38768">  =&gt;  </span><code data-lake-id="u0a17ae6d" id="u0a17ae6d"><span data-lake-id="uf7940f1c" id="uf7940f1c">1~3,5,7~9\0</span></code></h1><p data-lake-id="uf7a8c8a9" id="uf7a8c8a9"><br></p><p data-lake-id="ubc2b0b0a" id="ubc2b0b0a"><span data-lake-id="ufc6e07b5" id="ufc6e07b5">没啥技巧，也不用再想了，如果真出现，写出下面的写法就OK了</span></p><p data-lake-id="u67a421f1" id="u67a421f1"><span data-lake-id="ufd0af3e9" id="ufd0af3e9">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F**%5Cn%20*%201%2C2%2C3%2C5%2C7%2C8%2C9%20%20%3D%3E%20%201~3%2C5%2C7~9%5Cn%20*%201%2C2%2C3%2C5%2C7%2C8%2C10%2C12%2C13%2C14%2C100%2C101%2C102%20%20%20%3D%3E%20%20%201~3%2C5%2C7~8%2C10%2C12~14%2C100~102%5Cn%20*%20*%2F%5Cnfunction%20fn(str)%20%7B%5Cn%20%20%20%20let%20arr%20%3D%20str.split('%2C').map(Number)%3B%5Cn%20%20%20%20let%20len%20%3D%20arr.length%3B%5Cn%20%20%20%20let%20s%20%3D%20new%20Array(len).fill(false)%3B%5Cn%20%20%20%20%2F%2F%20%E7%AC%AC%E4%B8%80%E6%AD%A5%5Cn%20%20%20%20s%5B0%5D%20%3D%20arr%5B0%5D%3B%5Cn%20%20%20%20%2F%2F%20%E7%AC%AC%E4%BA%8C%E6%AD%A5%20%E9%81%8D%E5%8E%86%5Cn%20%20%20%20for%20(let%20i%20%3D%201%3B%20i%20%3C%20len%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20let%20item%20%3D%20arr%5Bi%5D%3B%5Cn%20%20%20%20%20%20%20%20let%20prev%20%3D%20arr%5Bi%20-%201%5D%3B%5Cn%20%20%20%20%20%20%20%20let%20next%20%3D%20arr%5Bi%20%2B%201%5D%3B%5Cn%20%20%20%20%20%20%20%20if%20(prev%20%26%26%20next%20%26%26%20item%20%3D%3D%3D%20prev%20%2B%201%20%26%26%20next%20%3D%3D%3D%20item%20%2B%201)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20continue%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(prev%20%26%26%20next%20%26%26%20item%20%3D%3D%3D%20prev%20%2B%201%20%26%26%20next%20!%3D%3D%20item%20%2B%201)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20s%5Bi%5D%20%3D%20%60~%24%7Barr%5Bi%5D%7D%60%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(prev%20%26%26%20next%20%26%26%20(item%20!%3D%3D%20prev%20%2B%201%20%7C%7C%20next%20!%3D%3D%20item%20%2B%201))%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20s%5Bi%5D%20%3D%20%60%24%7Barr%5Bi%5D%7D%60%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(prev%20%26%26%20!next)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20if%20(item%20%3D%3D%3D%20prev%20%2B%201)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s%5Bi%5D%20%3D%20%60~%24%7Barr%5Bi%5D%7D%60%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s%5Bi%5D%20%3D%20%60%24%7Barr%5Bi%5D%7D%60%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%2F%2F%20%E7%AC%AC%E4%B8%89%E6%AD%A5%20%E5%A4%84%E7%90%86%E7%A9%BA%E5%80%BC%E6%83%85%E5%86%B5%5Cn%20%20%20%20return%20s.filter(Boolean).join('%2C').replace(%2F%2C~%2Fg%2C%20'~')%5Cn%7D%5Cn%5Cnlet%20str%20%3D%20'1%2C2%2C3%2C5%2C7%2C8%2C10%2C12%2C13%2C14%2C100%2C101%2C102'%3B%5Cn%5Cnconsole.log(fn('1%2C2%2C3%2C5%2C7%2C8%2C9'))%3B%5Cnconsole.log(fn('1%2C2%2C3%2C5%2C7%2C8%2C10%2C12%2C13%2C14%2C100%2C101%2C102'))%3B%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E9%81%8D%E5%8E%86%EF%BC%8C%E5%A4%84%E7%90%86current%2Fprev%2Fnext%E5%80%BC%E5%8D%B3%E5%8F%AF%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22CtJqv%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u9b0399bc" id="u9b0399bc"><br></p><h1 data-lake-id="WWdFG" id="WWdFG"><span data-lake-id="ua8f244c7" id="ua8f244c7">19、要求设计 </span><code data-lake-id="u11e87d9b" id="u11e87d9b"><span data-lake-id="u6d31398d" id="u6d31398d">LazyMan</span></code><span data-lake-id="uab011968" id="uab011968"> 类，实现以下功能\0</span></h1><p data-lake-id="u2b9c2a30" id="u2b9c2a30"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22LazyMan('Tony')%3B%5Cn%2F%2F%20Hi%20I%20am%20Tony%5Cn%5CnLazyMan('Tony').sleep(10).eat('lunch')%3B%5Cn%2F%2F%20Hi%20I%20am%20Tony%5Cn%2F%2F%20%E7%AD%89%E5%BE%85%E4%BA%8610%E7%A7%92...%5Cn%2F%2F%20I%20am%20eating%20lunch%5Cn%5CnLazyMan('Tony').eat('lunch').sleep(10).eat('dinner')%3B%5Cn%2F%2F%20Hi%20I%20am%20Tony%5Cn%2F%2F%20I%20am%20eating%20lunch%5Cn%2F%2F%20%E7%AD%89%E5%BE%85%E4%BA%8610%E7%A7%92...%5Cn%2F%2F%20I%20am%20eating%20diner%5Cn%5CnLazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk%20food')%3B%5Cn%2F%2F%20Hi%20I%20am%20Tony%5Cn%2F%2F%20%E7%AD%89%E5%BE%85%E4%BA%865%E7%A7%92...%5Cn%2F%2F%20I%20am%20eating%20lunch%5Cn%2F%2F%20I%20am%20eating%20dinner%5Cn%2F%2F%20%E7%AD%89%E5%BE%85%E4%BA%8610%E7%A7%92...%5Cn%2F%2F%20I%20am%20eating%20junk%20food%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22T7ydj%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u24629085" id="u24629085"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22class%20LazyManClass%20%7B%5Cn%20%20%20%20constructor(name)%20%7B%5Cn%20%20%20%20%20%20%20%20this.taskList%20%3D%20%5B%5D%3B%5Cn%20%20%20%20%20%20%20%20this.name%20%3D%20name%3B%5Cn%20%20%20%20%20%20%20%20console.log(%60Hi%20I%20am%20%24%7Bthis.name%7D%60)%3B%5Cn%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.next()%3B%5Cn%20%20%20%20%20%20%20%20%7D%2C%200)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20eat%20(name)%20%7B%5Cn%20%20%20%20%20%20%20%20var%20that%20%3D%20this%3B%5Cn%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%BF%99%E9%87%8C%E5%8C%85%E8%A3%85%E4%BA%86%E4%B8%80%E4%B8%8B%EF%BC%8C%E6%94%BE%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E9%87%8C%E9%9D%A2%5Cn%20%20%20%20%20%20%20%20var%20fn%20%3D%20(function%20(n)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20function%20()%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60I%20am%20eating%20%24%7Bn%7D%60)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20that.next()%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D)(name)%3B%5Cn%5Cn%20%20%20%20%20%20%20%20this.taskList.push(fn)%3B%5Cn%5Cn%20%20%20%20%20%20%20%20return%20this%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20sleepFirst%20(time)%20%7B%5Cn%20%20%20%20%20%20%20%20var%20that%20%3D%20this%3B%5Cn%20%20%20%20%20%20%20%20var%20fn%20%3D%20(function%20(t)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20function%20()%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60%E7%AD%89%E5%BE%85%E4%BA%86%24%7Bt%7D%E7%A7%92...%60)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20that.next()%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20t%20*%201000)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D)(time)%3B%5Cn%20%20%20%20%20%20%20%20%20%2F%2F%20%E4%BC%98%E5%85%88%E7%BA%A7%E8%BE%83%E9%AB%98%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%20%20this.taskList.unshift(fn)%3B%5Cn%20%20%20%20%20%20%20%20return%20this%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20sleep%20(time)%20%7B%5Cn%20%20%20%20%20%20%20%20var%20that%20%3D%20this%5Cn%20%20%20%20%20%20%20%20var%20fn%20%3D%20(function%20(t)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20function%20()%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60%E7%AD%89%E5%BE%85%E4%BA%86%24%7Bt%7D%E7%A7%92...%60)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20that.next()%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20t%20*%201000)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D)(time)%3B%5Cn%20%20%20%20%20%20%20%20this.taskList.push(fn)%3B%5Cn%20%20%20%20%20%20%20%20return%20this%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20next%20()%20%7B%5Cn%20%20%20%20%20%20%20%20var%20fn%20%3D%20this.taskList.shift()%3B%5Cn%20%20%20%20%20%20%20%20fn%20%26%26%20fn()%3B%5Cn%20%20%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20LazyMan(name)%20%7B%5Cn%20%20%20%20return%20new%20LazyManClass(name)%3B%5Cn%7D%5Cn%5CnLazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk%20food')%3B%5Cn%5Cn%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B2%2C5%2C12%2C34%2C36%2C49%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22NpSBk%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uf4b3e59b" id="uf4b3e59b"><br></p><p data-lake-id="u598a4a79" id="u598a4a79"><br></p><h1 data-lake-id="hcLfs" id="hcLfs"><span data-lake-id="uaf19cd6e" id="uaf19cd6e">20、几个异步代码的执行结果</span></h1><p data-lake-id="u0a5f7ebf" id="u0a5f7ebf"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20wait()%20%7B%5Cn%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%5Cn%20%20%20%20%20%20%20%20setTimeout(resolve%2C%201000)%5Cn%20%20%20%20)%5Cn%7D%5Cn%5Cnasync%20function%20main()%20%7B%5Cn%20%20%20%20console.time()%3B%5Cn%20%20%20%20await%20wait()%3B%5Cn%20%20%20%20await%20wait()%3B%5Cn%20%20%20%20await%20wait()%3B%5Cn%20%20%20%20%2F%2F%20default%3A%203.008s%20%EF%BC%8C%5Cn%20%20%20%20%2F%2F%20%E4%B8%89%E4%B8%AA%E4%B8%B2%E8%A1%8C%EF%BC%8C%E4%BA%92%E7%9B%B8%E4%BE%9D%E8%B5%96%5Cn%20%20%20%20console.timeEnd()%3B%5Cn%7D%5Cn%5Cnmain()%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%B8%89%E4%B8%AA%E4%B8%B2%E8%A1%8C%EF%BC%8C%E4%BA%92%E7%9B%B8%E4%BE%9D%E8%B5%96%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22DvbdO%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u2a9f2468" id="u2a9f2468"><br></p><p data-lake-id="uf4a4b467" id="uf4a4b467"><span data-lake-id="uae9ac1ce" id="uae9ac1ce">改成如下呢？</span></p><p data-lake-id="ub94d304e" id="ub94d304e"><span data-lake-id="u66031683" id="u66031683">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20wait()%20%7B%5Cn%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%5Cn%20%20%20%20%20%20%20%20setTimeout(resolve%2C%20%201000)%5Cn%20%20%20%20)%5Cn%7D%5Cn%5Cn%2F%2F%20%E5%85%88%E8%AF%B4%E7%BB%93%E6%9E%9C%EF%BC%8C%E7%AD%89%E5%BE%851%E7%A7%92%EF%BC%8C%E5%90%8C%E6%AD%A5%E6%89%A7%E8%A1%8C%E3%80%82%5Cnasync%20function%20main()%20%7B%5Cn%20%20%20%20console.time()%3B%5Cn%20%20%20%20let%20a%20%3D%20wait()%3B%5Cn%20%20%20%20let%20b%20%3D%20wait()%3B%5Cn%20%20%20%20let%20c%20%3D%20wait()%3B%5Cn%20%20%20%20await%20a%3B%5Cn%20%20%20%20await%20b%3B%5Cn%20%20%20%20await%20c%3B%5Cn%20%20%20%20console.timeEnd()%3B%5Cn%20%20%20%20%2F%2F%20default%3A%201.002s%5Cn%7D%5Cnmain()%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF1s%3F%3F%3F%3F%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B16%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22vp7wE%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uc3615237" id="uc3615237"><br></p><p data-lake-id="u12d3f3a0" id="u12d3f3a0"><strong><span data-lake-id="u1b65ed46" id="u1b65ed46" style="color: #E8323C">解释如下：</span></strong></p><p data-lake-id="u85c8c133" id="u85c8c133"><strong><span data-lake-id="ud1efef15" id="ud1efef15" style="color: #E8323C">​</span></strong><br></p><p data-lake-id="u260adfe4" id="u260adfe4"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671088379697-9462a341-b626-4b30-be45-17a397496396.png%22%2C%22taskId%22%3A%22u44c2ae8f-d92d-4767-8752-491f28d9c67%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A712%2C%22height%22%3A430%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A222610%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1780%2C%22originHeight%22%3A1076%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E5%85%88%E8%AF%B4%E7%BB%93%E6%9E%9C%2C%E5%A4%A7%E6%A6%8230%E7%A7%92%E5%A4%9A%E7%82%B9%2C30%E7%A7%92%E6%98%AF%E5%9B%A0%E4%B8%BA%E6%AF%8F%E4%B8%AA%E7%AD%89%E5%BE%8510%E7%A7%92%2C%E5%90%8C%E6%AD%A5%E6%89%A7%E8%A1%8C.%20%E5%85%B6%E5%AE%9E%E8%BF%98%E6%9C%89%E4%B8%80%E4%B8%AA%E5%8F%98%E7%A7%8D%3A%20%20FUNCTION%20WAIT()%20%7B%20RETURN%20NEW%20PROMISE(RESOLVE%20%3E%20SETTIMEOUT(RESOLVE%2C10*1000)%20%E4%BA%86%20%20ASYNC%20FUNCTION%20MAIN()%20%7B%20CONSOLE.TIME()%3B%20LET%20A%20WAIT()%3B%20LET%20B%20%E4%B8%89%20WAIT()%3B%20LET%20C%20%E4%B8%89%20WAIT()%3B%20AWAIT%20A%3B%20AWAIT%20B%3B%20AWAIT%20C%3B%20CONSOLE.TIMEEND()%3B%20%7D%20MAIN()%3B%20%E7%AD%89%E5%88%B0WAIT%E7%9A%84%E6%97%B6%20%E8%BF%99%E4%B8%AA%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4%E6%98%AF10S%E5%A4%9A%E4%B8%80%E7%82%B9%2C%E8%BF%99%E6%98%AF%E5%9B%A0%E4%B8%BA%3BA%2CB.C%E7%9A%84%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82%E4%BC%9A%E6%8C%89%E9%A1%BA%E5%BA%8F%E5%8F%91%E8%B5%B7.%E8%80%8C%E8%BF%99%E4%B8%AA%E8%BF%87%E7%A8%8B%E6%98%AF%E4%B8%8D%E9%9C%80%E8%A6%81%E4%BA%92%E7%9B%B8%E4%BE%9D%E8%B5%96%E7%AD%89%E5%BE%85%E7%9A%84%20%E5%80%99%2C%E5%85%B6%E5%AE%9E%E6%98%AF%E6%AF%94%E8%BE%83%E9%82%A3%E4%B8%AA%E5%BC%82%E6%AD%A5%E8%80%97%E6%97%B6%E6%9C%80%E5%A4%9A.%E5%B0%B1%E4%BC%9A%E7%AD%89%E5%BE%85%E6%9C%80%E9%95%BF.%E6%9C%80%E9%95%BF%E7%9A%84%E8%80%97%E6%97%B6%E5%B0%B1%E6%98%AF%E6%95%B4%E4%BD%93%E7%9A%84%E8%80%97%E6%97%B6.%20%E5%A6%82%E6%9E%9C%E5%9C%A8%E4%B8%9A%E5%8A%A1%E4%B8%AD%2C%E4%B8%A4%E4%B8%AA%E5%BC%82%E6%AD%A5%E6%B2%A1%E6%9C%89%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB.%E5%BA%94%E8%AF%A5%E6%98%AF%E5%90%8E%E9%9D%A2%E8%BF%99%E7%A7%8D%E5%86%99%E6%B3%95.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A54.27032%2C%22y%22%3A56.69684%2C%22width%22%3A816.00068%2C%22height%22%3A31.965610000000005%2C%22text%22%3A%22%E5%85%88%E8%AF%B4%E7%BB%93%E6%9E%9C%2C%E5%A4%A7%E6%A6%8230%E7%A7%92%E5%A4%9A%E7%82%B9%2C30%E7%A7%92%E6%98%AF%E5%9B%A0%E4%B8%BA%E6%AF%8F%E4%B8%AA%E7%AD%89%E5%BE%8510%E7%A7%92%2C%E5%90%8C%E6%AD%A5%E6%89%A7%E8%A1%8C.%22%7D%2C%7B%22x%22%3A56.58051%2C%22y%22%3A100.65443%2C%22width%22%3A233.47604%2C%22height%22%3A29.175329999999988%2C%22text%22%3A%22%E5%85%B6%E5%AE%9E%E8%BF%98%E6%9C%89%E4%B8%80%E4%B8%AA%E5%8F%98%E7%A7%8D%3A%22%7D%2C%7B%22x%22%3A87.89419%2C%22y%22%3A201.6345%2C%22width%22%3A246.38035000000002%2C%22height%22%3A27.16524000000001%2C%22text%22%3A%22%20FUNCTION%20WAIT()%20%7B%22%7D%2C%7B%22x%22%3A119.92492%2C%22y%22%3A239.59085%2C%22width%22%3A404.39912%2C%22height%22%3A26.02161000000001%2C%22text%22%3A%22RETURN%20NEW%20PROMISE(RESOLVE%20%3E%22%7D%2C%7B%22x%22%3A139.78287%2C%22y%22%3A274.53015%2C%22width%22%3A439.31822999999997%2C%22height%22%3A25.07868000000002%2C%22text%22%3A%22SETTIMEOUT(RESOLVE%2C10*1000)%22%7D%2C%7B%22x%22%3A86.21875%2C%22y%22%3A340.70312%2C%22width%22%3A16.6875%2C%22height%22%3A29.203129999999987%2C%22text%22%3A%22%E4%BA%86%22%7D%2C%7B%22x%22%3A83.879974%2C%22y%22%3A412.56882%2C%22width%22%3A339.178806%2C%22height%22%3A29.806519999999978%2C%22text%22%3A%22%20ASYNC%20FUNCTION%20MAIN()%20%7B%22%7D%2C%7B%22x%22%3A118.29186%2C%22y%22%3A447.91003%2C%22width%22%3A205.50898%2C%22height%22%3A26.645629999999983%2C%22text%22%3A%22CONSOLE.TIME()%3B%22%7D%2C%7B%22x%22%3A117.2616%2C%22y%22%3A482.71732%2C%22width%22%3A75.50823999999999%2C%22height%22%3A23.698480000000018%2C%22text%22%3A%22LET%20A%22%7D%2C%7B%22x%22%3A229.2455%2C%22y%22%3A483.8057%2C%22width%22%3A100.92515000000003%2C%22height%22%3A26.23394000000002%2C%22text%22%3A%22WAIT()%3B%22%7D%2C%7B%22x%22%3A119.45699%2C%22y%22%3A516.74506%2C%22width%22%3A211.74061%2C%22height%22%3A27.859000000000037%2C%22text%22%3A%22LET%20B%20%E4%B8%89%20WAIT()%3B%22%7D%2C%7B%22x%22%3A117.44157%2C%22y%22%3A551.1681%2C%22width%22%3A214.57702999999998%2C%22height%22%3A27.717700000000036%2C%22text%22%3A%22LET%20C%20%E4%B8%89%20WAIT()%3B%22%7D%2C%7B%22x%22%3A114.89862%2C%22y%22%3A589.5287%2C%22width%22%3A74.03609%2C%22height%22%3A20.91734000000008%2C%22text%22%3A%22AWAIT%22%7D%2C%7B%22x%22%3A200.81934%2C%22y%22%3A591.17566%2C%22width%22%3A29.79079999999999%2C%22height%22%3A22.46727999999996%2C%22text%22%3A%22A%3B%22%7D%2C%7B%22x%22%3A114.05912%2C%22y%22%3A622.4187%2C%22width%22%3A115.76411%2C%22height%22%3A23.640600000000063%2C%22text%22%3A%22AWAIT%20B%3B%22%7D%2C%7B%22x%22%3A114.484695%2C%22y%22%3A658.1995%2C%22width%22%3A118.431865%2C%22height%22%3A23.000760000000014%2C%22text%22%3A%22AWAIT%20C%3B%22%7D%2C%7B%22x%22%3A113.86785%2C%22y%22%3A692.0971%2C%22width%22%3A263.48209999999995%2C%22height%22%3A28.36970000000008%2C%22text%22%3A%22CONSOLE.TIMEEND()%3B%22%7D%2C%7B%22x%22%3A83.60173%2C%22y%22%3A721.55865%2C%22width%22%3A18.3373%2C%22height%22%3A29.756720000000087%2C%22text%22%3A%22%7D%22%7D%2C%7B%22x%22%3A85.277084%2C%22y%22%3A760.4389%2C%22width%22%3A102.220066%2C%22height%22%3A25.583439999999996%2C%22text%22%3A%22MAIN()%3B%22%7D%2C%7B%22x%22%3A1490.618%2C%22y%22%3A862.0461%2C%22width%22%3A168.1286%2C%22height%22%3A31.647399999999948%2C%22text%22%3A%22%E7%AD%89%E5%88%B0WAIT%E7%9A%84%E6%97%B6%22%7D%2C%7B%22x%22%3A55.21971%2C%22y%22%3A858.3127%2C%22width%22%3A1411.98399%2C%22height%22%3A39.08433000000002%2C%22text%22%3A%22%E8%BF%99%E4%B8%AA%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4%E6%98%AF10S%E5%A4%9A%E4%B8%80%E7%82%B9%2C%E8%BF%99%E6%98%AF%E5%9B%A0%E4%B8%BA%3BA%2CB.C%E7%9A%84%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82%E4%BC%9A%E6%8C%89%E9%A1%BA%E5%BA%8F%E5%8F%91%E8%B5%B7.%E8%80%8C%E8%BF%99%E4%B8%AA%E8%BF%87%E7%A8%8B%E6%98%AF%E4%B8%8D%E9%9C%80%E8%A6%81%E4%BA%92%E7%9B%B8%E4%BE%9D%E8%B5%96%E7%AD%89%E5%BE%85%E7%9A%84%22%7D%2C%7B%22x%22%3A63.50303%2C%22y%22%3A904.9464%2C%22width%22%3A984.5173700000001%2C%22height%22%3A31.289260000000013%2C%22text%22%3A%22%E5%80%99%2C%E5%85%B6%E5%AE%9E%E6%98%AF%E6%AF%94%E8%BE%83%E9%82%A3%E4%B8%AA%E5%BC%82%E6%AD%A5%E8%80%97%E6%97%B6%E6%9C%80%E5%A4%9A.%E5%B0%B1%E4%BC%9A%E7%AD%89%E5%BE%85%E6%9C%80%E9%95%BF.%E6%9C%80%E9%95%BF%E7%9A%84%E8%80%97%E6%97%B6%E5%B0%B1%E6%98%AF%E6%95%B4%E4%BD%93%E7%9A%84%E8%80%97%E6%97%B6.%22%7D%2C%7B%22x%22%3A57.104336%2C%22y%22%3A978.5656%2C%22width%22%3A770.249564%2C%22height%22%3A30.410049999999956%2C%22text%22%3A%22%E5%A6%82%E6%9E%9C%E5%9C%A8%E4%B8%9A%E5%8A%A1%E4%B8%AD%2C%E4%B8%A4%E4%B8%AA%E5%BC%82%E6%AD%A5%E6%B2%A1%E6%9C%89%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB.%E5%BA%94%E8%AF%A5%E6%98%AF%E5%90%8E%E9%9D%A2%E8%BF%99%E7%A7%8D%E5%86%99%E6%B3%95.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2313171b%22%2C%22id%22%3A%22u93d36360%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u9f476a00" id="u9f476a00"><br></p><p data-lake-id="u63c2c638" id="u63c2c638"><br></p><h1 data-lake-id="w9I25" id="w9I25"><span data-lake-id="u5abf7c1c" id="u5abf7c1c">21、看下面代码如何输出</span></h1><p data-lake-id="u617a5914" id="u617a5914"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22const%20list%20%3D%20%5B1%2C%202%2C%203%5D%5Cnconst%20square%20%3D%20num%20%3D%3E%20%7B%5Cn%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20resolve(num%20*%20num)%5Cn%20%20%20%20%20%20%20%20%7D%2C%201000)%5Cn%20%20%20%20%7D)%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22kkTRZ%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u7fb213f2" id="u7fb213f2"><br></p><p data-lake-id="uff5b3abd" id="uff5b3abd"><span data-lake-id="uf7c2d34b" id="uf7c2d34b">使用</span><code data-lake-id="u2a394a23" id="u2a394a23"><span data-lake-id="uaaca7bd6" id="uaaca7bd6">forEach</span></code><span data-lake-id="u4af595d3" id="u4af595d3"> , 隔 </span><code data-lake-id="u4ed9b9e6" id="u4ed9b9e6"><span data-lake-id="u30df5203" id="u30df5203">1s</span></code><span data-lake-id="udb90c05b" id="udb90c05b"> ，输出 </span><code data-lake-id="ub97a2aea" id="ub97a2aea"><span data-lake-id="ub94ccbd6" id="ub94ccbd6">1/4/9</span></code><span data-lake-id="u7165c4d7" id="u7165c4d7"> </span></p><p data-lake-id="uad0b07d0" id="uad0b07d0"><span data-lake-id="u83142adc" id="u83142adc">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F%2F%20foreach%20%E8%82%AF%E5%AE%9A%E4%B8%8D%E8%A1%8C%5Cnfunction%20test()%20%7B%5Cn%20%20%20%20list.forEach(async%20x%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20const%20res%20%3D%20await%20square(x)%5Cn%20%20%20%20%20%20%20%20console.log(res)%5Cn%20%20%20%20%7D)%5Cn%7D%5Cntest()%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22forEach%20%2C%20%E9%9A%94%201s%20%EF%BC%8C%E4%B8%80%E8%B5%B7%E8%BE%93%E5%87%BA%201%2F4%2F9%20%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22sG1xB%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u32d1b62e" id="u32d1b62e"><br></p><p data-lake-id="uf73b92b9" id="uf73b92b9"><span data-lake-id="udfc96332" id="udfc96332">每1s，输出1、 4、  9</span></p><p data-lake-id="u460556b0" id="u460556b0"><span data-lake-id="u362351f5" id="u362351f5">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F%2F%20for%20of%20%E5%8F%AF%E4%BB%A5%5Cnconsole.log('test1%3A')%3B%5Cnasync%20function%20%20test1()%20%7B%5Cn%20%20%20%20for(let%20x%20of%20list)%7B%5Cn%20%20%20%20%20%20%20%20const%20res%20%3D%20await%20square(x)%5Cn%20%20%20%20%20%20%20%20console.log(res)%5Cn%20%20%20%20%7D%5Cn%7D%5Cntest1()%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22for%20of%20%E5%8F%AF%E4%BB%A5%20%E6%AF%8F1s%EF%BC%8C%E8%BE%93%E5%87%BA1%E3%80%81%204%E3%80%81%20%209%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22zdaIr%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u89a076d7" id="u89a076d7"><br></p><p data-lake-id="ub7c85693" id="ub7c85693"><span data-lake-id="u04f629a3" id="u04f629a3">使用 </span><code data-lake-id="u931432f6" id="u931432f6"><span data-lake-id="u30a1fe5e" id="u30a1fe5e">for</span></code><span data-lake-id="u941b4581" id="u941b4581"> 循环，每1s，输出1、 4、  9</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22console.log('test3%3A')%3B%5Cnasync%20function%20test3()%20%7B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20list.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20let%20x%20%3D%20list%5Bi%5D%5Cn%20%20%20%20%20%20%20%20const%20res%20%3D%20await%20square(x)%5Cn%20%20%20%20%20%20%20%20console.log(res)%5Cn%20%20%20%20%7D%5Cn%7D%5Cntest3()%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E6%AF%8F1s%EF%BC%8C%E8%BE%93%E5%87%BA1%E3%80%81%204%E3%80%81%20%209%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22wnowm%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u9f4d12e8" id="u9f4d12e8"><br></p><h1 data-lake-id="KBEx3" id="KBEx3"><span data-lake-id="u6458fa78" id="u6458fa78">22、字符串仅由</span><code data-lake-id="ue5511c6d" id="ue5511c6d"><span data-lake-id="u119e32b0" id="u119e32b0">小写字母</span></code><span data-lake-id="u11c9af1d" id="u11c9af1d">和</span><code data-lake-id="ua7b03bdd" id="ua7b03bdd"><span data-lake-id="ua0ad5a6f" id="ua0ad5a6f"> [] </span></code><span data-lake-id="u4d1c0ea9" id="u4d1c0ea9">组成，且字符串不会包含多余的空格。\0转成如下结构</span></h1><p data-lake-id="u7756da41" id="u7756da41"><span data-lake-id="u8e9bb6c9" id="u8e9bb6c9">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F**%5Cn%20*%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BB%85%E7%94%B1%E5%B0%8F%E5%86%99%E5%AD%97%E6%AF%8D%E5%92%8C%20%5B%5D%20%E7%BB%84%E6%88%90%EF%BC%8C%E4%B8%94%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8D%E4%BC%9A%E5%8C%85%E5%90%AB%E5%A4%9A%E4%BD%99%E7%9A%84%E7%A9%BA%E6%A0%BC%E3%80%82%5Cn%20%E7%A4%BA%E4%BE%8B%E4%B8%80%3A%20'abc'%20--%3E%20%7Bvalue%3A%20'abc'%7D%5Cn%20%E7%A4%BA%E4%BE%8B%E4%BA%8C%EF%BC%9A'%5Babc%5Bbcd%5Bdef%5D%5D%5D'%20--%3E%20%5Cn%20%5Ct%5Ct%5Ct%5Ct%7Bvalue%3A%20'abc'%2C%20children%3A%20%7Bvalue%3A%20'bcd'%2C%20children%3A%20%7Bvalue%3A%20'def'%7D%7D%7D%5Cn%20*%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E9%A2%98%E7%9B%AE%E8%A6%81%E6%B1%82%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22D2bOC%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ua1710050" id="ua1710050"><span data-lake-id="u969fccff" id="u969fccff">​</span><br></p><p data-lake-id="u2f84e924" id="u2f84e924"><span data-lake-id="u638ca1f3" id="u638ca1f3">先看如下代码</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22let%20s%20%3D%20'%5Babc%5Bbcd%5Bdef%5D%5D%5D'%3B%5Cnlet%20r%20%3D%20%2F%5B%5C%5C%5B%5C%5C%5D%5D%2Fg%5Cnconsole.log(s.split(r))%5Cn%5Cn%2F*************************************************%5Cn%20*%20%20%20%20%20%5B%5Cn%20*%20%20%20%20%20''%2C%20%20%20%20'abc'%2C%20'bcd'%2C%5Cn%20*%20%20%20%20%20%20%20%20%20'def'%2C%20''%2C%20%20%20%20''%2C%5Cn%20*%20%20%20%20%20%20%20%20%20''%5Cn%20*%20%20%20%20%20%5D%5Cn%20************************************************%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22cP5pz%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uf9df0655" id="uf9df0655"><span data-lake-id="u9bc4b0fb" id="u9bc4b0fb">所以需要 </span><code data-lake-id="u3ddc7b3c" id="u3ddc7b3c"><span data-lake-id="ucd9afd14" id="ucd9afd14"> s.split(r)</span></code><span data-lake-id="u5aecfb6d" id="u5aecfb6d">后还需要过滤空字符串，如下：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20arr%20%3D%20str.split(%2F%5B%5C%5C%5B%5C%5C%5D%5D%2F).filter((item)%20%3D%3E%20%7B%5Cn%20%20return%20!!item%5Cn%7D)%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22pitCF%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u79c318c3" id="u79c318c3"><span data-lake-id="u7c3951c3" id="u7c3951c3">​</span><br></p><p data-lake-id="u59e9e7c4" id="u59e9e7c4"><span data-lake-id="u1ebdd8dc" id="u1ebdd8dc">当然也可以使用正则 </span><code data-lake-id="ud237d8b2" id="ud237d8b2"><span data-lake-id="u013c23fd" id="u013c23fd">match</span></code><span data-lake-id="uceed2ba7" id="uceed2ba7"> 产出一个数组，如下</span></p><p data-lake-id="uccb8902c" id="uccb8902c"><span data-lake-id="ua9646cde" id="ua9646cde">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20ss%20%3D%20'%5Babc%5Bbcd%5Bdef%5D%5D%5D'%5Cnvar%20list%20%3D%20ss.match(%2F%5C%5Cw%2B%2Fg)%5Cnconsole.log(list)%3B%5Cn%2F%2F%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%20%5D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B0%2C3%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22oHlS5%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u793581ce" id="u793581ce"><span data-lake-id="u45f05277" id="u45f05277">​</span><br></p><p data-lake-id="u54ea0ded" id="u54ea0ded"><span data-lake-id="u9c0ae216" id="u9c0ae216">单独看</span><code data-lake-id="u42c415dd" id="u42c415dd"><span data-lake-id="u36d5672c" id="u36d5672c">let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];\0</span></code><span data-lake-id="u993dab73" id="u993dab73"> 如何转化成上面要求的对象。</span></p><p data-lake-id="u8cc08144" id="u8cc08144"><span data-lake-id="u81461758" id="u81461758">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20ss%20%3D%20'%5Babc%5Bbcd%5Bdef%5D%5D%5D'%5Cnvar%20list%20%3D%20ss.match(%2F%5C%5Cw%2B%2Fg)%5Cn%5Cnlet%20arr%20%3D%20%5B'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%5D%3B%5Cn%5Cn%2F%2F%20%3A%3A%3A%3A%E5%BE%88%E7%AE%80%E6%B4%81%E5%90%A7%EF%BC%81%EF%BC%81%EF%BC%81%5Cn%5Cnlet%20res%20%3D%20%7B%7D%3B%5Cnarr.reduce((prev%2C%20next%2C%20index%2C%20array)%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20console.log(prev%2C%20next%2C%20index)%3B%5Cn%20%20%20%20prev.value%20%3D%20next%3B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E9%99%A4%E4%BA%86%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%EF%BC%8C%E9%83%BD%E8%BF%94%E5%9B%9E%20prev.children%5Cn%20%20%20%20if%20(array.length%20-%201%20!%3D%3D%20index)%20%7B%5Cn%20%20%20%20%20%20%20%20prev.children%20%3D%20%7B%7D%5Cn%20%20%20%20%20%20%20%20return%20prev.children%3B%5Cn%20%20%20%20%7D%5Cn%7D%2C%20res)%5Cn%5Cnconsole.log(JSON.stringify(res))%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%2C13%2C14%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22oAP2N%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ub99fe676" id="ub99fe676"><br></p><p data-lake-id="u4f577e31" id="u4f577e31"><span data-lake-id="u6796626e" id="u6796626e">再看看</span><code data-lake-id="u509fa111" id="u509fa111"><span data-lake-id="u79ddb4b8" id="u79ddb4b8">reduce</span></code><span data-lake-id="u58cc0877" id="u58cc0877">方法注意事项：</span></p><p data-lake-id="u056f296f" id="u056f296f"><span data-lake-id="ub9b0f415" id="ub9b0f415">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20arr%20%3D%20%5B'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%5D%3B%5Cnlet%20res%20%3D%20%7B%7D%3B%5Cn%2F%2F%20%3A%3A%3A%3A%E6%B2%A1%E4%BC%A0%E5%88%9D%E5%A7%8B%E5%80%BC%EF%BC%8Cindex%E5%8F%AA%E4%BC%9A%E6%89%93%E5%8D%B0%201%E3%80%812%E3%80%813%E3%80%814%20%E5%BF%BD%E7%95%A5%200%5Cnarr.reduce((a%2C%20b%2C%20index%2C%20array)%20%3D%3E%20%7B%5Cn%20%20%20%20console.log(a%2C%20b%2C%20index%2C%20array)%3B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E6%89%93%E5%8D%B0%E7%BB%93%E6%9E%9C%E5%A6%82%E4%B8%8B%5Cn%20%20%20%20%2F**%5Cn%20%20%20%20%20*%20%20%20%20%20%20abc%20%20%20%20%20%20%20%20%20bcd%20%20%20%20%20%201%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20undefined%20%20%20def%20%20%20%20%20%202%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20undefined%20%20%20gfg%20%20%20%20%20%203%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20undefined%20%20%20ccc%20%20%20%20%20%204%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%5Cn%20%20%20%20%20*%20*%2F%5Cn%7D)%5Cn%5Cn%2F%2F%20%3A%3A%3A%3A%E4%BC%A0%E4%BA%86%E5%88%9D%E5%A7%8B%E5%80%BC%EF%BC%8Cindex%E6%89%93%E5%8D%B0%E4%BB%8E%200%20%E5%88%B0%204%5Cnarr.reduce((a%2C%20b%2C%20index%2C%20array)%20%3D%3E%20%7B%5Cn%20%20%20%20console.log(a%2C%20b%2C%20index%2C%20array)%3B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E6%89%93%E5%8D%B0%E7%BB%93%E6%9E%9C%E5%A6%82%E4%B8%8B%5Cn%20%20%20%20%2F**%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20%7B%7D%20%20%20%20%20%20%20%20%20%20abc%20%20%200%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20undefined%20%20%20bcd%20%20%201%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20undefined%20%20%20def%20%20%202%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20undefined%20%20%20gfg%20%20%203%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20undefined%20%20%20ccc%20%20%204%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20*%2F%5Cn%7D%2C%20res)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B2%2C15%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22YAdOi%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u64f5e6cb" id="u64f5e6cb"><span data-lake-id="ub1768da4" id="ub1768da4">​</span><br></p><p data-lake-id="ud2626e5d" id="ud2626e5d"><span data-lake-id="u3362fcb8" id="u3362fcb8">​</span><br></p><h1 data-lake-id="ynh7n" id="ynh7n"><span data-lake-id="ub9b4be2b" id="ub9b4be2b">23、正则的一个应用</span></h1><p data-lake-id="u5dff0624" id="u5dff0624"><span data-lake-id="ud9bb21df" id="ud9bb21df">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20url%E6%9C%89%E4%B8%89%E7%A7%8D%E6%83%85%E5%86%B5%5Cn%20*%20https%3A%2F%2Fwww.xx.cn%2Fapi%3Fkeyword%3D%26level1%3D%26local_batch_id%3D%26elective%3D%26local_province_id%3D33%5Cn%20*%20https%3A%2F%2Fwww.xx.cn%2Fapi%3Fkeyword%3D%26level1%3D%26local_batch_id%3D%26elective%3D800%26local_province_id%3D33%5Cn%20*%20https%3A%2F%2Fwww.xx.cn%2Fapi%3Fkeyword%3D%26level1%3D%26local_batch_id%3D%26elective%3D800%2C700%26local_province_id%3D33%5Cn%20*%20%E5%8C%B9%E9%85%8Delective%E5%90%8E%E7%9A%84%E6%95%B0%E5%AD%97%E8%BE%93%E5%87%BA%EF%BC%88%E5%86%99%E5%87%BA%E4%BD%A0%E8%AE%A4%E4%B8%BA%E7%9A%84%E6%9C%80%E4%BC%98%E8%A7%A3%E6%B3%95%EF%BC%89%3A%5Cn%20*%20*%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B5%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22UOmpB%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u0ef5a344" id="u0ef5a344"><span data-lake-id="u83386cb0" id="u83386cb0">方法1：正则</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20fn(url)%20%7B%5Cn%20%20%20%20let%20reg%20%3D%20%2Felective%3D(.*)%26%2Fg%5Cn%20%20%20%20%2F%2F%20%E4%BD%BF%E7%94%A8exec%2C%E8%AE%B0%E4%BD%8F%EF%BC%8C%E6%98%AF%E7%AC%AC2%E4%B8%AA%E5%85%83%E7%B4%A0%5Cn%20%20%20%20let%20arr%20%3D%20reg.exec(url)%3B%5Cn%20%20%20%20let%20res%20%3D%20%5B%5D%3B%5Cn%20%20%20%20res%20%3D%20arr%20%26%26%20arr%5B1%5D%20%3F%20arr%5B1%5D.split('%2C')%20%3A%20%5B%5D%3B%5Cn%20%20%20%20console.log(res)%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B1%2C3%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22O8Bah%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u625aa3f0" id="u625aa3f0"><span data-lake-id="u21c68e2c" id="u21c68e2c">上面</span><code data-lake-id="u017b5a74" id="u017b5a74"><span data-lake-id="u0b6d799e" id="u0b6d799e">exec</span></code><span data-lake-id="u6e2681f7" id="u6e2681f7">的结果：</span></p><p data-lake-id="u93c10495" id="u93c10495"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090415809-4cfdfba9-9171-4388-ad9b-b8cae1197b1a.png%22%2C%22taskId%22%3A%22u0e0806d3-28d8-4499-a948-7a3a25ee66c%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A721.3333333333334%2C%22height%22%3A150%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A71738%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2164%2C%22originHeight%22%3A450%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22ELECTIVE800%26%20800%20INDEX%3A%2055%2C%20%2F%2FWWW.XX.CN%2FAPIZKEYWORD-SLEVELL-SLOCAL%20BATCH.ID-GELECTIVE-809SLOCAL.PROVINCE.ID-33'%5C%22%20INPUT%3A%20NTTPS%3A%2F%2FW%20UNDEFINED%20GROUPS%3A%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A128.81412%2C%22y%22%3A99.75395%2C%22width%22%3A240.19702%2C%22height%22%3A28.38149999999999%2C%22text%22%3A%22ELECTIVE800%26%22%7D%2C%7B%22x%22%3A106.95941%2C%22y%22%3A153.58289%2C%22width%22%3A68.91973%2C%22height%22%3A30.08348000000001%2C%22text%22%3A%22800%22%7D%2C%7B%22x%22%3A85.699486%2C%22y%22%3A212.47983%2C%22width%22%3A194.801464%2C%22height%22%3A27.575880000000012%2C%22text%22%3A%22INDEX%3A%2055%2C%22%7D%2C%7B%22x%22%3A384.31778%2C%22y%22%3A254.59142%2C%22width%22%3A1667.71082%2C%22height%22%3A46.09157999999999%2C%22text%22%3A%22%2F%2FWWW.XX.CN%2FAPIZKEYWORD-SLEVELL-SLOCAL%20BATCH.ID-GELECTIVE-809SLOCAL.PROVINCE.ID-33'%5C%22%22%7D%2C%7B%22x%22%3A84.1094%2C%22y%22%3A266.98767%2C%22width%22%3A130.88694%2C%22height%22%3A26.962649999999996%2C%22text%22%3A%22INPUT%3A%22%7D%2C%7B%22x%22%3A254.91826%2C%22y%22%3A268.83966%2C%22width%22%3A160.66134000000002%2C%22height%22%3A22.631140000000016%2C%22text%22%3A%22NTTPS%3A%2F%2FW%22%7D%2C%7B%22x%22%3A232.77545%2C%22y%22%3A318.20462%2C%22width%22%3A198.91477%2C%22height%22%3A31.192750000000046%2C%22text%22%3A%22UNDEFINED%22%7D%2C%7B%22x%22%3A89.2421%2C%22y%22%3A322.5931%2C%22width%22%3A161.6611%2C%22height%22%3A25.660470000000032%2C%22text%22%3A%22GROUPS%3A%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231c1a19%22%2C%22id%22%3A%22u6d53627d%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u9151dd42" id="u9151dd42"><br></p><card type="block" name="hr" value="data:%7B%22id%22%3A%22to3bA%22%7D"></card><p data-lake-id="udbb5d7fe" id="udbb5d7fe"><span data-lake-id="u7335c73f" id="u7335c73f">方法2：直接使用</span><code data-lake-id="u420df835" id="u420df835"><span data-lake-id="u870dee94" id="u870dee94">new URLSearchParams\0(url)</span></code></p><p data-lake-id="u1f0bc938" id="u1f0bc938"><span data-lake-id="uc657cfb4" id="uc657cfb4">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20params%20%3D%20new%20URLSearchParams('https%3A%2F%2Fwww.xx.cn%2Fapi%3Fkeyword%3D%26level1%3D%26local_batch_id%3D%26elective%3D800%2C700%26local_province_id%3D33')%3B%5Cnconsole.log(params.get('elective'))%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22VcGOH%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6c670fd6" id="u6c670fd6"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090489770-2ba4d4c1-0699-4c13-99f8-acf4028145a3.png%22%2C%22taskId%22%3A%22u2e0c7d6a-3721-4395-955c-189cabbe47f%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A732.6666666666666%2C%22height%22%3A71%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A70199%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2198%2C%22originHeight%22%3A214%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22LET%20%20PERONS%20-%20NOW%20UNISEARCH-SONS(%20NTEPS%2F%2FMNU%2CSTESNOREESHOCAL%20SOTERESTOCAL%20SOTEREETIVEREESTIOCALA-33%20)%20CONSOLE.LOG(PARAMS.GET('ELECTIVE'))%20800%2C700%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A92.731445%2C%22y%22%3A50.98955%2C%22width%22%3A1865.968755%2C%22height%22%3A36.898149999999994%2C%22text%22%3A%22LET%20%20PERONS%20-%20NOW%20UNISEARCH-SONS(%20NTEPS%2F%2FMNU%2CSTESNOREESHOCAL%20SOTERESTOCAL%20SOTEREETIVEREESTIOCALA-33%20)%22%7D%2C%7B%22x%22%3A88.53321%2C%22y%22%3A87.228455%2C%22width%22%3A507.21918999999997%2C%22height%22%3A23.078595000000007%2C%22text%22%3A%22CONSOLE.LOG(PARAMS.GET('ELECTIVE'))%22%7D%2C%7B%22x%22%3A90.055336%2C%22y%22%3A125.71452%2C%22width%22%3A105.30206400000002%2C%22height%22%3A22.233460000000008%2C%22text%22%3A%22800%2C700%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%239fa1a0%22%2C%22id%22%3A%22uac83d730%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u4225372a" id="u4225372a"><br></p><h1 data-lake-id="bciww" id="bciww"><span data-lake-id="u135d001d" id="u135d001d">24、找出字符串中连续出现最多的字符和个数\0</span></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%20%E6%89%BE%E5%87%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E8%BF%9E%E7%BB%AD%E5%87%BA%E7%8E%B0%E6%9C%80%E5%A4%9A%E7%9A%84%E5%AD%97%E7%AC%A6%E5%92%8C%E4%B8%AA%E6%95%B0%20%23220%5Cn%20*%20'abcaakjbb'%20%3D%3E%20%7B'a'%3A2%2C'b'%3A2%7D%5Cn%20*%20'abbkejsbcccwqaa'%20%3D%3E%20%7B'c'%3A3%7D%5Cn%20*%20*%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22UnRfB%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uc150d59a" id="uc150d59a"><br></p><p data-lake-id="u5be1f056" id="u5be1f056"><code data-lake-id="u8e95dd4b" id="u8e95dd4b"><span data-lake-id="uda6db3fc" id="uda6db3fc">let reg = /</span><span data-lake-id="ua3ff74c2" id="ua3ff74c2" style="color: rgb(205, 23, 33); background-color: rgb(235, 204, 5)">(\\w)\\1*</span><span data-lake-id="ucdabc081" id="ucdabc081">/g</span></code></p><p data-lake-id="udc3efa93" id="udc3efa93"><span data-lake-id="uef6b718b" id="uef6b718b">​</span><br></p><p data-lake-id="ufc3550d7" id="ufc3550d7"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090672927-f89caa97-d7bb-4531-b1d5-d28f596b240e.png%22%2C%22taskId%22%3A%22u49a08a65-c29f-4c30-9b22-c1d50435af7%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A592%2C%22height%22%3A217%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A114485%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1776%2C%22originHeight%22%3A650%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%2F%2F%2F%2F%3A%3A%3A%3A%3A%3A%E6%9C%80%E6%9C%80%E6%9C%80%E6%9C%80%E5%85%B3%E9%94%AE%E7%9A%84%20LET%20REG%20%E4%B8%89%20%2F(%5C%5CW)%5C%5C1*%2FG%20%E6%AD%A3%E5%88%99%E5%86%99%E5%87%BA%E6%9D%A5%E5%B0%B1%E6%B2%A1%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%E4%BA%86%20'AKSAAKIBH'.MATCH(REG)%3B%20CONST%20ARR1%20%3B%20CONST%20ARR2%20-%20'ABBKEISHCCCWGAA'%20.MATCH(REG)%3B%20CONSOLE.LOG(ARR1)%3B%20%20CONSOLE.LOG(ARR2)%3B%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A100.30858%2C%22y%22%3A67.664696%2C%22width%22%3A497.61835999999994%2C%22height%22%3A55.374854%2C%22text%22%3A%22%2F%2F%2F%2F%3A%3A%3A%3A%3A%3A%E6%9C%80%E6%9C%80%E6%9C%80%E6%9C%80%E5%85%B3%E9%94%AE%E7%9A%84%22%7D%2C%7B%22x%22%3A106.23369%2C%22y%22%3A131.174%2C%22width%22%3A403.05451000000005%2C%22height%22%3A33.51683%2C%22text%22%3A%22LET%20REG%20%E4%B8%89%20%2F(%5C%5CW)%5C%5C1*%2FG%22%7D%2C%7B%22x%22%3A827.096%2C%22y%22%3A153.63527%2C%22width%22%3A769.6994%2C%22height%22%3A70.88081%2C%22text%22%3A%22%E6%AD%A3%E5%88%99%E5%86%99%E5%87%BA%E6%9D%A5%E5%B0%B1%E6%B2%A1%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%E4%BA%86%22%7D%2C%7B%22x%22%3A373.53433%2C%22y%22%3A292.71524%2C%22width%22%3A449.38912999999997%2C%22height%22%3A38.36218000000002%2C%22text%22%3A%22'AKSAAKIBH'.MATCH(REG)%3B%22%7D%2C%7B%22x%22%3A105.49386%2C%22y%22%3A295.60495%2C%22width%22%3A104.37539%2C%22height%22%3A27.85880000000003%2C%22text%22%3A%22CONST%22%7D%2C%7B%22x%22%3A225.89891%2C%22y%22%3A295.40738%2C%22width%22%3A125.02269000000001%2C%22height%22%3A28.49892%2C%22text%22%3A%22ARR1%20%3B%22%7D%2C%7B%22x%22%3A107.78336%2C%22y%22%3A341.3046%2C%22width%22%3A839.1072399999999%2C%22height%22%3A45.01693%2C%22text%22%3A%22CONST%20ARR2%20-%20'ABBKEISHCCCWGAA'%20.MATCH(REG)%3B%22%7D%2C%7B%22x%22%3A105.69352%2C%22y%22%3A449.89163%2C%22width%22%3A361.27311999999995%2C%22height%22%3A40.83233999999999%2C%22text%22%3A%22CONSOLE.LOG(ARR1)%3B%22%7D%2C%7B%22x%22%3A106.91808%2C%22y%22%3A508.1198%2C%22width%22%3A350.96867%2C%22height%22%3A35.400649999999985%2C%22text%22%3A%22%20CONSOLE.LOG(ARR2)%3B%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231e1b1a%22%2C%22id%22%3A%22u33f6b8ea%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u68982943" id="u68982943"><span data-lake-id="ud3a3d0d0" id="ud3a3d0d0">看打印结果：然后遍历就好了！！！</span></p><p data-lake-id="uc0ecef60" id="uc0ecef60"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090724883-a8c27a4b-8027-4f8f-8b6c-bb1664bb0828.png%22%2C%22taskId%22%3A%22u0eff5dcc-ff59-441d-ab0f-c3d05defa4e%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A385.3333333333333%2C%22height%22%3A245%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A59412%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1156%2C%22originHeight%22%3A734%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22NODE%2020.JS%20%20DAILY-CODING%20GIT%3A(MAIN)%20'A'%2C%20'B'%2C'C'%2C%20'AA'%2C%20'K'%2C%20'J'%2C%20'BB%2011%20'BB'%2C%20%20'K'%2C%20%2C%20%20'E'%2C'J'%2C%20%20'S'%2C%20IQ'%20'CCC'%2C%20'W'%2C%20Q'%2C%20'AA%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A636.4504%2C%22y%22%3A47.750507%2C%22width%22%3A203.28060000000005%2C%22height%22%3A36.832333000000006%2C%22text%22%3A%22NODE%2020.JS%22%7D%2C%7B%22x%22%3A118.82372%2C%22y%22%3A45.625202%2C%22width%22%3A456.06777999999997%2C%22height%22%3A45.034153%2C%22text%22%3A%22%20DAILY-CODING%20GIT%3A(MAIN)%22%7D%2C%7B%22x%22%3A68.245415%2C%22y%22%3A155.46112%2C%22width%22%3A384.88968500000004%2C%22height%22%3A41.79981000000001%2C%22text%22%3A%22'A'%2C%20'B'%2C'C'%2C%22%7D%2C%7B%22x%22%3A108.82878%2C%22y%22%3A205.50117%2C%22width%22%3A285.98102%2C%22height%22%3A41.13705999999999%2C%22text%22%3A%22'AA'%2C%20'K'%2C%20'J'%2C%22%7D%2C%7B%22x%22%3A107.13966%2C%22y%22%3A265.96713%2C%22width%22%3A56.58477999999998%2C%22height%22%3A28.59784000000002%2C%22text%22%3A%22'BB%22%7D%2C%7B%22x%22%3A61.71859%2C%22y%22%3A315.0443%2C%22width%22%3A15.165749999999996%2C%22height%22%3A70.99122%2C%22text%22%3A%2211%22%7D%2C%7B%22x%22%3A192.47804%2C%22y%22%3A429.42056%2C%22width%22%3A210.39246%2C%22height%22%3A30.961179999999956%2C%22text%22%3A%22'BB'%2C%20%20'K'%2C%22%7D%2C%7B%22x%22%3A13.6892395%2C%22y%22%3A477.55673%2C%22width%22%3A383.57496050000003%2C%22height%22%3A37.610630000000015%2C%22text%22%3A%22%2C%20%20'E'%2C'J'%2C%20%20'S'%2C%22%7D%2C%7B%22x%22%3A104.04797%2C%22y%22%3A536.03046%2C%22width%22%3A44.873649999999984%2C%22height%22%3A30.057440000000042%2C%22text%22%3A%22IQ'%22%7D%2C%7B%22x%22%3A210.10284%2C%22y%22%3A536.1928%2C%22width%22%3A204.24286000000004%2C%22height%22%3A34.864149999999995%2C%22text%22%3A%22'CCC'%2C%20'W'%2C%22%7D%2C%7B%22x%22%3A118.732864%2C%22y%22%3A587.62714%2C%22width%22%3A144.192636%2C%22height%22%3A34.215459999999894%2C%22text%22%3A%22Q'%2C%20'AA%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231b1b1b%22%2C%22id%22%3A%22u690bb355%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u89bad8d6" id="u89bad8d6"><br></p><h1 data-lake-id="fwoFm" id="fwoFm"><span data-lake-id="ue605d790" id="ue605d790">25、将下面的数组结构转成树形结构</span></h1><p data-lake-id="u18e89325" id="u18e89325"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%2021%E3%80%81%E6%95%B0%E7%BB%84%E8%BD%AC%E6%88%90%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%5Cn%20*%20%20%E5%A6%82%E4%BD%95%E5%B0%86%20%5B%7Bid%3A%201%7D%2C%20%7Bid%3A%202%2C%20pId%3A%201%7D%2C%20...%5D%20%E7%9A%84%E9%87%8D%E5%A4%8D%E6%95%B0%E7%BB%84%EF%BC%88%E6%9C%89%E9%87%8D%E5%A4%8D%E6%95%B0%E6%8D%AE%EF%BC%89%5Cn%20*%20%20%E8%BD%AC%E6%88%90%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E7%9A%84%E6%95%B0%E7%BB%84%20%5B%7Bid%3A%201%2C%20child%3A%20%5B%7Bid%3A%202%2C%20pId%3A%201%7D%5D%7D%2C%20...%5D%20%EF%BC%88%E9%9C%80%E8%A6%81%E5%8E%BB%E9%87%8D%EF%BC%89%20%23243%5Cn%20*%20*%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22tFzah%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u16016782" id="u16016782"><span data-lake-id="u5640e622" id="u5640e622">先去重：使用</span><code data-lake-id="u0fc65532" id="u0fc65532"><span data-lake-id="uec47cf6e" id="uec47cf6e">map</span></code><span data-lake-id="ua011caa9" id="ua011caa9">去重，然后</span><code data-lake-id="u805dd45d" id="u805dd45d"><span data-lake-id="uc40e79d4" id="uc40e79d4">map.values()</span></code></p><p data-lake-id="uc2ee4399" id="uc2ee4399"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090865710-50c94080-c573-4f27-a823-62a0b6b8ea85.png%22%2C%22taskId%22%3A%22u778b19e5-0ff2-41db-af7b-521554ad147%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A585.3312683105469%2C%22height%22%3A551%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A162074%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1396%2C%22originHeight%22%3A1314%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22-LET%20ARR%20%E5%B7%9D%20%7BID%3A%201%7D%2C%20%E9%87%8D%E5%A4%8D%20%7BID%3A%202%2C%20PID%3A%201%7D%2C%20%7BID%3A%203%2C%20PID%3A%202%7D%2C%20%7BID%3A%204%2C%20PID%3A%201%7D%2C%20%7BID%3A%205%2C%20PID%3A%203%7D%2C%20%7BID%3A%206%2C%20PID%3A%202%7D%2C%20%7BID%3A%206%2C%20PID%3A%202%7D%2C%20%7BID%3A2%2C%20PID%3A%201%7D%20%2F%2F%2F%20%3A%3A%3A%3A%3A%3A%3A%3A%20%E9%87%8D%E5%A4%8D%20IFUNCTION%20FN(ARR)%20%7B%20MAP()%20LET%20%E5%B7%9D%20NEW%20MAP%20OF%20ARR)%20%7B%20(LET%20ITEM%20FOR%20%20IF%20(!MAP.GET(ITEM.ID))%20%7B%20%20MAP.SET(ITEM.ID%2C%20ITEM)%3B%20%E5%AD%90%20%20CONSOLE.LOG(MAP.VALUES())%3B%20LIGUANGWEI007%2C%202022%2F6%2F29%2C05%3A47%20%20FEAT%3A%E6%89%93%E5%B9%B3%E7%9B%AE%E5%BD%95%20FN(ARR)%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A80.55388%2C%22y%22%3A65.783646%2C%22width%22%3A74.71059999999999%2C%22height%22%3A28.813164%2C%22text%22%3A%22-LET%22%7D%2C%7B%22x%22%3A175.60194%2C%22y%22%3A70.27076%2C%22width%22%3A62.890799999999984%2C%22height%22%3A24.528090000000006%2C%22text%22%3A%22ARR%22%7D%2C%7B%22x%22%3A250.02084%2C%22y%22%3A70.38054%2C%22width%22%3A24.81928000000002%2C%22height%22%3A22.920630000000003%2C%22text%22%3A%22%E5%B7%9D%22%7D%2C%7B%22x%22%3A178.24176%2C%22y%22%3A115.539345%2C%22width%22%3A149.89154000000002%2C%22height%22%3A37.823634999999996%2C%22text%22%3A%22%7BID%3A%201%7D%2C%22%7D%2C%7B%22x%22%3A732.09204%2C%22y%22%3A170.06808%2C%22width%22%3A66.30276000000003%2C%22height%22%3A34.69847999999999%2C%22text%22%3A%22%E9%87%8D%E5%A4%8D%22%7D%2C%7B%22x%22%3A176.8015%2C%22y%22%3A170.60283%2C%22width%22%3A311.19769999999994%2C%22height%22%3A35.47954999999999%2C%22text%22%3A%22%7BID%3A%202%2C%20PID%3A%201%7D%2C%22%7D%2C%7B%22x%22%3A177.70686%2C%22y%22%3A224.81993%2C%22width%22%3A312.09829%2C%22height%22%3A34.640150000000006%2C%22text%22%3A%22%7BID%3A%203%2C%20PID%3A%202%7D%2C%22%7D%2C%7B%22x%22%3A176.77338%2C%22y%22%3A278.7121%2C%22width%22%3A308.52945%2C%22height%22%3A34.35262999999998%2C%22text%22%3A%22%7BID%3A%204%2C%20PID%3A%201%7D%2C%22%7D%2C%7B%22x%22%3A176.68295%2C%22y%22%3A332.58%2C%22width%22%3A309.36081%2C%22height%22%3A35.03077999999999%2C%22text%22%3A%22%7BID%3A%205%2C%20PID%3A%203%7D%2C%22%7D%2C%7B%22x%22%3A176.23648%2C%22y%22%3A385.049%2C%22width%22%3A311.63392%2C%22height%22%3A37.657730000000015%2C%22text%22%3A%22%7BID%3A%206%2C%20PID%3A%202%7D%2C%22%7D%2C%7B%22x%22%3A178.22792%2C%22y%22%3A440.5732%2C%22width%22%3A310.53297999999995%2C%22height%22%3A37.75093000000004%2C%22text%22%3A%22%7BID%3A%206%2C%20PID%3A%202%7D%2C%22%7D%2C%7B%22x%22%3A176.91846%2C%22y%22%3A493.4091%2C%22width%22%3A623.4248%2C%22height%22%3A39.503699999999924%2C%22text%22%3A%22%7BID%3A2%2C%20PID%3A%201%7D%20%2F%2F%2F%20%3A%3A%3A%3A%3A%3A%3A%3A%20%E9%87%8D%E5%A4%8D%22%7D%2C%7B%22x%22%3A107.9084%2C%22y%22%3A656.7546%2C%22width%22%3A348.47905000000003%2C%22height%22%3A42.93394000000001%2C%22text%22%3A%22IFUNCTION%20FN(ARR)%20%7B%22%7D%2C%7B%22x%22%3A453.7115%2C%22y%22%3A712.67255%2C%22width%22%3A96.10040000000004%2C%22height%22%3A30.851850000000013%2C%22text%22%3A%22MAP()%22%7D%2C%7B%22x%22%3A177.08409%2C%22y%22%3A714.80554%2C%22width%22%3A59.948170000000005%2C%22height%22%3A26.984320000000025%2C%22text%22%3A%22LET%22%7D%2C%7B%22x%22%3A334.51233%2C%22y%22%3A716.7957%2C%22width%22%3A21.808989999999994%2C%22height%22%3A23.691799999999944%2C%22text%22%3A%22%E5%B7%9D%22%7D%2C%7B%22x%22%3A374.67764%2C%22y%22%3A717.2487%2C%22width%22%3A64.14938999999998%2C%22height%22%3A24.88076000000001%2C%22text%22%3A%22NEW%22%7D%2C%7B%22x%22%3A255.45683%2C%22y%22%3A718.4668%2C%22width%22%3A64.01737%2C%22height%22%3A25.88259999999991%2C%22text%22%3A%22MAP%22%7D%2C%7B%22x%22%3A454.29327%2C%22y%22%3A764.554%2C%22width%22%3A186.81343000000004%2C%22height%22%3A39.34019999999998%2C%22text%22%3A%22OF%20ARR)%20%7B%22%7D%2C%7B%22x%22%3A259.93436%2C%22y%22%3A766.57495%2C%22width%22%3A76.62759%2C%22height%22%3A31.054050000000075%2C%22text%22%3A%22(LET%22%7D%2C%7B%22x%22%3A356.22745%2C%22y%22%3A767.9455%2C%22width%22%3A81.35812000000004%2C%22height%22%3A30.2654%2C%22text%22%3A%22ITEM%22%7D%2C%7B%22x%22%3A174.43393%2C%22y%22%3A769.7561%2C%22width%22%3A62.07289%2C%22height%22%3A27.267900000000054%2C%22text%22%3A%22FOR%22%7D%2C%7B%22x%22%3A254.5297%2C%22y%22%3A816.899%2C%22width%22%3A484.3068%2C%22height%22%3A40.327%2C%22text%22%3A%22%20IF%20(!MAP.GET(ITEM.ID))%20%7B%22%7D%2C%7B%22x%22%3A331.0015%2C%22y%22%3A875.2234%2C%22width%22%3A453.31185%2C%22height%22%3A38.05180000000007%2C%22text%22%3A%22%20MAP.SET(ITEM.ID%2C%20ITEM)%3B%22%7D%2C%7B%22x%22%3A253.99031%2C%22y%22%3A924.6557%2C%22width%22%3A20.808239999999984%2C%22height%22%3A38.72249999999997%2C%22text%22%3A%22%E5%AD%90%22%7D%2C%7B%22x%22%3A172.704%2C%22y%22%3A1030.1534%2C%22width%22%3A511.91529999999995%2C%22height%22%3A43.60180000000014%2C%22text%22%3A%22%20CONSOLE.LOG(MAP.VALUES())%3B%22%7D%2C%7B%22x%22%3A316.89642%2C%22y%22%3A1195.7996%2C%22width%22%3A929.21918%2C%22height%22%3A36.934799999999996%2C%22text%22%3A%22LIGUANGWEI007%2C%202022%2F6%2F29%2C05%3A47%20%20FEAT%3A%E6%89%93%E5%B9%B3%E7%9B%AE%E5%BD%95%22%7D%2C%7B%22x%22%3A96.93387%2C%22y%22%3A1197.2957%2C%22width%22%3A142.66431999999998%2C%22height%22%3A36.70810000000006%2C%22text%22%3A%22FN(ARR)%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231d1d1c%22%2C%22id%22%3A%22u5ed4802f%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u1bea7fe5" id="u1bea7fe5"><br></p><blockquote data-lake-id="u6413a879" id="u6413a879" class="lake-alert lake-alert-danger"><p data-lake-id="ue2bcaac8" id="ue2bcaac8"><span data-lake-id="ub64a48ab" id="ub64a48ab">最好再写一遍，花了两个小时，不一定又写不出来了</span></p></blockquote><p data-lake-id="ud404bb1c" id="ud404bb1c"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%3A%3A%3A%3A%20%E5%B7%B2%E7%BB%8F%E5%8E%BB%E9%87%8D%E4%BA%86%5Cnlet%20arr%20%3D%20%5B%5Cn%20%20%20%20%7Bid%3A%201%2C%20pid%3A%200%7D%2C%5Cn%20%20%20%20%7Bid%3A%202%2C%20pid%3A%201%7D%2C%5Cn%20%20%20%20%7Bid%3A%203%2C%20pid%3A%202%7D%2C%5Cn%20%20%20%20%7Bid%3A%204%2C%20pid%3A%201%7D%2C%5Cn%20%20%20%20%7Bid%3A%205%2C%20pid%3A%203%7D%2C%5Cn%20%20%20%20%7Bid%3A%206%2C%20pid%3A%202%7D%5D%3B%5Cn%5Cn%2F**%5Cn%20*%20%40rootId%20%E8%B7%9F%E8%8A%82%E7%82%B9%E7%9A%84%20pid%5Cn%20*%20*%2F%5Cnfunction%20fn(array%2C%20rootId)%20%7B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E7%AC%AC1%E6%AD%A5%EF%BC%9A%20%E5%80%9F%E5%8A%A9map%E5%AF%B9%E8%B1%A1%EF%BC%8C%20%E8%BD%AC%E6%88%90%E4%BB%A5id%E4%B8%BA%20key%20%2C%20item%E4%B8%BAvalue%E7%9A%84%20%E5%AF%B9%E8%B1%A1%5Cn%20%20%20%20let%20map%20%3D%20%7B%7D%3B%5Cn%20%20%20%20array.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20map%5Bitem.id%5D%20%3D%20%7B...item%7D%20%2F%2F%20%E6%B5%85%E6%8B%B7%E8%B4%9D%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20const%20res%20%3D%20%5B%5D%3B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E9%81%8D%E5%8E%86%5Cn%20%20%20%20array.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20let%20%7Bid%2C%20pid%7D%20%3D%20item%3B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%A6%82%E6%9E%9C%E6%98%AF%E6%A0%B9%E8%8A%82%E7%82%B9%EF%BC%8C%E9%82%A3%E4%B9%88%E7%9B%B4%E6%8E%A5push%20%E7%BB%99%20res%5Cn%20%20%20%20%20%20%20%20if%20(pid%20%3D%3D%3D%20rootId)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20res.push(map%5Bid%5D)%3B%5Cn%20%20%20%20%20%20%20%20%2F%2F%2F%2F%20%3A%3A%3A%3A%20%20%20%E5%90%A6%E5%88%99%EF%BC%8C%E6%93%8D%E4%BD%9C%E5%90%8E%E9%9D%A2%E7%9A%84map%2C%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%9C%89children%EF%BC%8C%E6%B2%A1%E6%9C%89%E5%B0%B1%E5%A4%8D%E5%88%B6%E7%BB%99%E4%B8%80%E4%B8%AA%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20if%20(map%5Bpid%5D.children)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20map%5Bpid%5D.children.push(map%5Bid%5D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20map%5Bpid%5D.children%20%3D%20%5Bmap%5Bid%5D%5D%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D)%5Cn%20%20%20%20return%20res%3B%5Cn%7D%5Cn%5Cn%5Cnconsole.log(JSON.stringify(fn(arr%2C0)))%3B%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B13%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22yEVRA%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u525fbe0c" id="u525fbe0c"><br></p><p data-lake-id="uffab904b" id="uffab904b"><span data-lake-id="ub50cd36b" id="ub50cd36b">再看下一个题，完全类似的题</span></p><p data-lake-id="u1a7a43ac" id="u1a7a43ac"><span data-lake-id="u6b09483c" id="u6b09483c">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%20id%20%E4%BB%A3%E8%A1%A8%E9%83%A8%E9%97%A8%E7%BC%96%E5%8F%B7%EF%BC%8Cname%20%E6%98%AF%E9%83%A8%E9%97%A8%E5%90%8D%E7%A7%B0%EF%BC%8CparentId%20%E6%98%AF%E7%88%B6%E9%83%A8%E9%97%A8%E7%BC%96%E5%8F%B7%EF%BC%8C%E4%B8%BA%200%20%E4%BB%A3%E8%A1%A8%E4%B8%80%E7%BA%A7%E9%83%A8%E9%97%A8%EF%BC%8C%5Cn%2F%2F%20%20%E7%8E%B0%E5%9C%A8%E8%A6%81%E6%B1%82%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%20convert%20%E6%96%B9%E6%B3%95%EF%BC%8C%E6%8A%8A%E5%8E%9F%E5%A7%8B%20list%20%E8%BD%AC%E6%8D%A2%E6%88%90%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%EF%BC%8C%5Cn%2F%2F%20%20parentId%20%E4%B8%BA%E5%A4%9A%E5%B0%91%E5%B0%B1%E6%8C%82%E8%BD%BD%E5%9C%A8%E8%AF%A5%20id%20%E7%9A%84%E5%B1%9E%E6%80%A7%20children%20%E6%95%B0%E7%BB%84%E4%B8%8B%EF%BC%8C%E7%BB%93%E6%9E%84%E5%A6%82%E4%B8%8B%EF%BC%9A%5Cnlet%20list%20%3D%20%5B%5Cn%20%20%7Bid%3A%201%2C%20name%3A%20'%E9%83%A8%E9%97%A8A'%2C%20parentId%3A%200%7D%2C%5Cn%20%20%7Bid%3A%202%2C%20name%3A%20'%E9%83%A8%E9%97%A8B'%2C%20parentId%3A%200%7D%2C%5Cn%20%20%7Bid%3A%203%2C%20name%3A%20'%E9%83%A8%E9%97%A8C'%2C%20parentId%3A%201%7D%2C%5Cn%20%20%7Bid%3A%204%2C%20name%3A%20'%E9%83%A8%E9%97%A8D'%2C%20parentId%3A%201%7D%2C%5Cn%20%20%7Bid%3A%205%2C%20name%3A%20'%E9%83%A8%E9%97%A8E'%2C%20parentId%3A%202%7D%2C%5Cn%20%20%7Bid%3A%206%2C%20name%3A%20'%E9%83%A8%E9%97%A8F'%2C%20parentId%3A%203%7D%2C%5Cn%20%20%7Bid%3A%207%2C%20name%3A%20'%E9%83%A8%E9%97%A8G'%2C%20parentId%3A%202%7D%2C%5Cn%20%20%7Bid%3A%208%2C%20name%3A%20'%E9%83%A8%E9%97%A8H'%2C%20parentId%3A%204%7D%5Cn%5D%3B%5Cn%5Cn%5Cnfunction%20fn(list%2C%20root)%20%7B%5Cn%20%20let%20res%20%3D%20%5B%5D%3B%5Cn%20%20let%20map%20%3D%20%7B%7D%3B%5Cn%20%20list.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20map%5Bitem.id%5D%20%3D%20%7B...item%7D%3B%5Cn%20%20%7D)%3B%5Cn%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20list.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20let%20%7Bid%2C%20parentId%7D%20%3D%20list%5Bi%5D%3B%5Cn%20%20%20%20if%20(parentId%20%3D%3D%3D%20root)%20%7B%5Cn%20%20%20%20%20%20res.push(map%5Bid%5D)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20if%20(map%5BparentId%5D.children)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%BF%99%E9%87%8C%E6%98%AFpid%5Cn%20%20%20%20%20%20%20%20map%5BparentId%5D.children.push(map%5Bid%5D)%3B%5Cn%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20map%5BparentId%5D.children%20%3D%20%5Bmap%5Bid%5D%5D%3B%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%20%20return%20res%3B%5Cn%7D%5Cn%5Cnconsole.log(JSON.stringify(fn(list%2C%200)))%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B27%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22eiSlL%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uec5cc5c2" id="uec5cc5c2"><span data-lake-id="u07165f33" id="u07165f33">\0</span></p><p data-lake-id="u4d577e47" id="u4d577e47"><br></p><p data-lake-id="uf943d214" id="uf943d214"><br></p><p data-lake-id="uf568c3da" id="uf568c3da"><br></p>`,body_draft_lake:`<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><h2 data-lake-id="U16pd" id="U16pd"><span data-lake-id="u675df596" id="u675df596">1、for循环中，return是可以中断循环的。这个需要注意了</span></h2><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**************************************************************************%5Cn%20*%20%2F%2F%20%3A%3A%3A%3Areturn%20%E6%98%AF%E5%8F%AF%E4%BB%A5%E4%B8%AD%E6%96%AD%E5%BE%AA%E7%8E%AF%E7%9A%84%EF%BC%8C%E4%B9%8B%E5%89%8D%E9%83%BD%E6%87%B5%E6%87%B5%E6%87%82%E6%87%82%E7%9A%84%5Cn%20*%20***********************************************************************%2F%5Cnfunction%20test()%20%7B%5Cn%20%20%20%20%2F%2F%20%E6%88%96%E8%80%85%E4%BD%BF%E7%94%A8while%E4%B8%80%E6%A0%B7%E7%9A%84%E6%95%88%E6%9E%9C%5Cn%20%20%20%20for%20(let%20i%20%3D%201%3B%20i%20%3C%2010%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(i%20%3D%3D%3D%205)%20return%3B%5Cn%20%20%20%20%20%20%20%20console.log(i)%3B%5Cn%20%20%20%20%7D%5Cn%7D%5Cntest()%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22return%20%E4%B8%AD%E6%96%AD%E5%BE%AA%E7%8E%AF%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B4%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22YgHz4%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u469f36fd" id="u469f36fd"><span data-lake-id="uf8ad53e2" id="uf8ad53e2">​</span><br></p><h2 data-lake-id="YNkQf" id="YNkQf"><span data-lake-id="u0da8c5ac" id="u0da8c5ac">2、原地去重数组</span></h2><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20fn1(arr)%20%7B%5Cn%20%20%20%20return%20arr.filter((item%2C%20index)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20return%20arr.indexOf(item)%20%3D%3D%3D%20index%3B%5Cn%20%20%20%20%7D)%5Cn%7D%5Cn%5Cn%5Cn%2F%2F%20%E7%A7%BB%E9%99%A4%E6%89%80%E6%9C%89%E9%87%8D%E5%A4%8D%E7%9A%84%E5%85%83%E7%B4%A0%5Cn%2F%2F%20%E4%B9%A6%E8%B8%B9%E6%AD%BBindexof%20%E5%92%8C%20lastIndexOf%5Cnfunction%20fn2(arr)%20%7B%5Cn%20%20%20%20return%20arr.filter((item%2C%20index)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20return%20arr.indexOf(item)%20%3D%3D%3D%20arr.lastIndexOf(item)%3B%5Cn%20%20%20%20%7D)%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84%E7%9A%84filter%E6%96%B9%E6%B3%95%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22iaetU%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u3472a330" id="u3472a330"><span data-lake-id="ubc306b7a" id="ubc306b7a">​</span><br></p><h2 data-lake-id="Q7rRs" id="Q7rRs"><span data-lake-id="u708b1314" id="u708b1314">3、说说为什么引入React Hooks</span></h2><ul list="ucd5165fc"><li fid="uce0e4dcd" data-lake-id="ue4efa04a" id="ue4efa04a"><span data-lake-id="ucd2d90c0" id="ucd2d90c0">类组件的问题：难于拆分、复用</span></li><li fid="uce0e4dcd" data-lake-id="u1f2564f4" id="u1f2564f4"><span data-lake-id="u48dcbc96" id="u48dcbc96">class的生命周期复杂，this指向的问题等</span></li><li fid="uce0e4dcd" data-lake-id="u49aa95e4" id="u49aa95e4"><span data-lake-id="u47ae240a" id="u47ae240a">hook从另外一个角度解决了这些问题！！</span></li><li fid="uce0e4dcd" data-lake-id="u6eed881e" id="u6eed881e"><span data-lake-id="ubf851502" id="ubf851502">较多生命周期，且划分并不符合</span><code data-lake-id="ub77fe338" id="ub77fe338"><strong><span data-lake-id="ua9e00602" id="ua9e00602" style="color: #E8323C">“内聚性”</span></strong></code><span data-lake-id="u8e454eb7" id="u8e454eb7">原则，例如 </span><code data-lake-id="ue0203294" id="ue0203294"><span data-lake-id="u11efa56c" id="u11efa56c">setInterval</span></code><span data-lake-id="u25e36ec7" id="u25e36ec7"> 和 </span><code data-lake-id="u73b2a3f0" id="u73b2a3f0"><span data-lake-id="u6c869e5b" id="u6c869e5b">clearInterval</span></code><span data-lake-id="u7d2c9c95" id="u7d2c9c95"> 这种具有强关联的逻辑被拆分在不同的生命周期方法中</span></li><li fid="uce0e4dcd" data-lake-id="u2171bac4" id="u2171bac4"><span data-lake-id="u3b04f193" id="u3b04f193">复用问题：数据共享或功能复用，从最早之前的mixin / 高阶组件 、或者到 Render Props</span></li></ul><p data-lake-id="uea9be8fd" id="uea9be8fd"><span data-lake-id="u84c8af93" id="u84c8af93">​</span><br></p><h1 data-lake-id="iGsHk" id="iGsHk"><span data-lake-id="u9e83335d" id="u9e83335d">4、什么是虚拟DOM，为什么要用什么虚拟DOM</span></h1><p data-lake-id="ua4a1d618" id="ua4a1d618"><br></p><p data-lake-id="u798e187f" id="u798e187f"><br></p><h1 data-lake-id="FjHT5" id="FjHT5"><span data-lake-id="u310ec550" id="u310ec550">5、说说长列表优化思路</span></h1><ul list="uef602902"><li fid="u00318c0b" data-lake-id="u94a2e0f0" id="u94a2e0f0"><span data-lake-id="ucdbfdda5" id="ucdbfdda5">虚列列表</span></li><li fid="u00318c0b" data-lake-id="u8549dbb5" id="u8549dbb5"><span data-lake-id="ud5183092" id="ud5183092">类似于</span><code data-lake-id="u296cc419" id="u296cc419"><span data-lake-id="uc04ca715" id="uc04ca715">diff</span></code><span data-lake-id="u8000207c" id="u8000207c">算法的思路</span></li><li fid="u00318c0b" data-lake-id="u4c7fe595" id="u4c7fe595"><span data-lake-id="ua327d380" id="ua327d380">分片</span></li><li fid="u00318c0b" data-lake-id="ueeb62ce0" id="ueeb62ce0"><span data-lake-id="u89613d95" id="u89613d95">节流等思路</span></li></ul><h1 data-lake-id="cHzaq" id="cHzaq"><span data-lake-id="uc82c67bf" id="uc82c67bf">6、sb，当时没做出来，一个树结构的深度优先应用</span></h1><p data-lake-id="u58bfcdcc" id="u58bfcdcc"><span data-lake-id="ua0e6cb63" id="ua0e6cb63">针对下面的树结构，实现函数 </span><code data-lake-id="ub0b93d46" id="ub0b93d46"><span data-lake-id="u4844c303" id="u4844c303">howOld(tree,name)</span></code><span data-lake-id="u1d0dd0ae" id="u1d0dd0ae"> </span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22var%20tree%20%3D%20%7B%5Cn%20%20%20%20age%3A%20100%2C%5Cn%20%20%20%20name%3A%20'a'%2C%5Cn%20%20%20%20child%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20age%3A%2088%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'b'%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20age%3A%2066%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'c'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20child%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20age%3A%200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'd'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20child%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20age%3A%20-1%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'e'%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%7D%5D%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22hQcUV%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u811f6a20" id="u811f6a20"><br></p><p data-lake-id="ub66ee107" id="ub66ee107"><span data-lake-id="uc9753757" id="uc9753757">其实就是</span><code data-lake-id="u6a2ab88d" id="u6a2ab88d"><span data-lake-id="ua4d20e85" id="ua4d20e85">深度优先查找</span></code><span data-lake-id="uda6d5fba" id="uda6d5fba"> </span></p><p data-lake-id="uab657269" id="uab657269"><span data-lake-id="uf9a8cf5f" id="uf9a8cf5f">​</span><br></p><p data-lake-id="u1a8c4c63" id="u1a8c4c63"><span data-lake-id="u8bfdd709" id="u8bfdd709">还是先写结构：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20howOld(tree%2C%20name)%20%7B%5Cn%5Cn%20%20%20%20let%20res%20%3D%20null%3B%5Cn%5Cn%20%20%20%20function%20dfs(root%2C%20name)%20%7B%5Cn%20%20%20%20%20%20%2F%2F%20....%5Cn%20%20%20%20%7D%5Cn%5Cn%20%20%20%20dfs(tree%2C%20name)%3B%5Cn%5Cn%20%20%20%20return%20res%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E7%BB%93%E6%9E%84%E5%86%99%E5%87%BA%E6%9D%A5%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22NPUFr%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uce62fb60" id="uce62fb60"><br></p><p data-lake-id="uaab4c604" id="uaab4c604"><span data-lake-id="uc092213c" id="uc092213c">补充：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20howOld(tree%2C%20name)%20%7B%5Cn%20%20%20%20let%20res%20%3D%20null%3B%5Cn%20%20%20%20function%20dfs(root%2C%20name)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(root.name%20%3D%3D%3D%20name)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20res%20%3D%20root.age%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20if%20(Array.isArray(root.child))%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20root.child.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dfs(item%2C%20name)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20dfs(tree%2C%20name)%3B%5Cn%20%20%20%20return%20res%3B%5Cn%7D%5Cnconsole.log(howOld(tree%2C%20'a'))%20%2F%2F%20100%5Cnconsole.log(howOld(tree%2C%20'b'))%20%2F%2F%2088%5Cnconsole.log(howOld(tree%2C%20'e'))%20%2F%2F%20-1%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0%EF%BC%9Afn(root%2Cname)%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B3%2C9%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22Fxxn7%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u965f6d81" id="u965f6d81"><span data-lake-id="uee6d47f0" id="uee6d47f0">​</span><br></p><blockquote data-lake-id="ud1de1ac6" id="ud1de1ac6" class="lake-alert lake-alert-danger"><p data-lake-id="u1527151e" id="u1527151e"><span data-lake-id="uff0802ec" id="uff0802ec">另外，深度优先，也可以使用</span><code data-lake-id="u6d676d4c" id="u6d676d4c"><span data-lake-id="u80b4a373" id="u80b4a373">栈</span></code><span data-lake-id="ucb9d9de7" id="ucb9d9de7">的数据结构来实现 </span><code data-lake-id="u608f9dae" id="u608f9dae"><span data-lake-id="u22632d43" id="u22632d43">DFS</span></code><span data-lake-id="u247cfbda" id="u247cfbda"> ,  其实</span><code data-lake-id="u0d2fb147" id="u0d2fb147"><span data-lake-id="u92bfb032" id="u92bfb032">递归</span></code><span data-lake-id="u33feeece" id="u33feeece">本身也是</span><code data-lake-id="u88b456fd" id="u88b456fd"><span data-lake-id="u835f9e9b" id="u835f9e9b">栈</span></code><span data-lake-id="u85217b60" id="u85217b60">的体现</span></p></blockquote><p data-lake-id="u89691e22" id="u89691e22"><br></p><h1 data-lake-id="JUwSF" id="JUwSF"><span data-lake-id="uceab59b8" id="uceab59b8">7、递归实现反转字符串</span></h1><p data-lake-id="ub45c9044" id="ub45c9044"><span data-lake-id="u3396760d" id="u3396760d">关键就是</span><code data-lake-id="ue499b3a7" id="ue499b3a7"><span data-lake-id="u592fa6df" id="u592fa6df">return fn(str.slice(1)) + str[0]</span></code></p><p data-lake-id="u1bdb9446" id="u1bdb9446"><span data-lake-id="u48fed011" id="u48fed011">注意是：一直递归  </span><code data-lake-id="u86636c25" id="u86636c25"><span data-lake-id="ufc3cb00b" id="ufc3cb00b">fn(str.slice(1))</span></code></p><p data-lake-id="ued71e277" id="ued71e277"><span data-lake-id="uf62011b0" id="uf62011b0">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F**%5Cn%20*%5Cn%20*%20%40description%20%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%5Cn%20%E7%94%A8%20JavaScript%20%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%EF%BC%8C%E8%BE%93%E5%85%A5%20int%20%E5%9E%8B%EF%BC%8C%E8%BF%94%E5%9B%9E%E6%95%B4%E6%95%B0%E9%80%86%E5%BA%8F%E5%90%8E%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%82%5Cn%20%E5%A6%82%EF%BC%9A%E8%BE%93%E5%85%A5%E6%95%B4%E5%9E%8B%201234%EF%BC%8C%E8%BF%94%E5%9B%9E%E5%AD%97%E7%AC%A6%E4%B8%B2%E2%80%9C4321%E2%80%9D%E3%80%82%E8%A6%81%E6%B1%82%E5%BF%85%E9%A1%BB%E4%BD%BF%E7%94%A8%E9%80%92%E5%BD%92%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%EF%BC%8C%E4%B8%8D%E8%83%BD%E7%94%A8%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%EF%BC%8C%5Cn%20%E8%BE%93%E5%85%A5%E5%87%BD%E6%95%B0%E5%BF%85%E9%A1%BB%E5%8F%AA%E6%9C%89%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E4%BC%A0%E5%85%A5%EF%BC%8C%E5%BF%85%E9%A1%BB%E8%BF%94%E5%9B%9E%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%82%5Cn%5Cn%20*%2F%5Cn%5Cnlet%20str%20%3D%20'1234'%3B%5Cn%5Cn%5Cnfunction%20fn(str)%20%7B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%9F%BA%E5%87%86%E6%9D%A1%E4%BB%B6%E5%98%9B%EF%BC%8C%E6%AF%8F%E6%AC%A1%E9%83%BD%E4%BB%8Eslice1%E5%BC%80%E5%A7%8B%EF%BC%8C%5Cn%20%20%20%20if%20(str%20%3D%3D%3D%20'')%20%7B%5Cn%20%20%20%20%20%20%20%20return%20str%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%85%B3%E9%94%AE%5Cn%20%20%20%20%20%20%20%20return%20fn(str.slice(1))%20%2B%20str%5B0%5D%5Cn%20%20%20%20%7D%5Cn%7D%5Cn%5Cnconsole.log(fn(str))%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22fn(str.slice(1))%20%2B%20str%5B0%5D%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22pMdRF%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u1494e765" id="u1494e765"><br></p><h1 data-lake-id="yI9il" id="yI9il"><span data-lake-id="u8e3b5ce9" id="u8e3b5ce9">8、罗马数字转化整数</span></h1><p data-lake-id="u9bd9c5f2" id="u9bd9c5f2"><span data-lake-id="u5bacc71d" id="u5bacc71d">​</span><br></p><p data-lake-id="u8a69f3bb" id="u8a69f3bb"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671061026829-a88eba62-a5fa-42eb-a584-8ec29e7345b9.png%22%2C%22taskId%22%3A%22u410a0773-cea5-4460-a311-63c1d2c8bb3%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A770.2000122070312%2C%22height%22%3A656%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A234002%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1788%2C%22originHeight%22%3A1522%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%2213.%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E8%BD%AC%E6%95%B4%E6%95%B0%20%E6%96%87%E5%88%87%E6%8D%A2%E4%B8%BA%E8%8B%B1%E6%96%87%E6%8E%A5%E6%94%B6%E5%8A%A8%E6%80%81%20%E5%8F%8D%E9%A6%88%20%E9%9A%BE%E5%BA%A6%E7%AE%80%E5%8D%95%E5%B1%B12%20%E6%94%B6%E8%97%8F%20%E6%96%87A%20%E5%88%86%E4%BA%AB%202173%20%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E5%8C%85%E5%90%AB%E4%BB%A5%E4%B8%8B%E4%B8%83%E7%A7%8D%E5%AD%97%E7%AC%A6%3A%20%E5%92%8C%20V%2C%20X%2C%E5%B7%A5%2C(%20%E5%AD%97%E7%AC%A6%20%E6%95%B0%E5%80%BC%20I%201%20VXLC%205%2010%2050%20100%20D%20500%201000%20M%20%E4%BE%8B%E5%A6%82%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%972%E5%86%99%E5%81%9AII%2C%E5%8D%B3%E4%B8%BA%E4%B8%A4%E4%B8%AA%E5%B9%B6%E5%88%97%E7%9A%841.12%E5%86%99%E5%81%9AXII%2C%20%E5%81%9AXII%2C%E5%8D%B3%E4%B8%BAX%2BI.27%E5%86%99%E5%81%9AXX%20XXVII%2C%E5%8D%B3%E4%B8%BAXX%2BV%2BII%20%E9%80%82%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%2C%E7%BD%97%E9%A9%AC%E8%87%B4%E7%8E%87%E4%B8%AD%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AD%97%E5%9C%A8%E5%A4%A7%E7%9A%84%E6%95%B0%E5%AD%97%E7%9A%84%E5%8F%B3%E8%BE%B9%2C%E4%BD%86%E4%B9%9F%E5%AD%98%E5%9C%A8%E7%89%B9%E4%BE%8B%2C%E4%BE%8B%E5%A6%82A%E4%B8%8D%E5%86%99%E5%81%9A%201IIT%2C%E8%80%8C%E6%98%AF%20IY%2C%E6%95%B0%E5%AD%971%E5%9C%A8%E6%95%B0%E5%AD%975%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%89%80%E8%A1%A8%E7%A4%BA%E7%9A%84%20%E6%95%B0%E7%AD%89%E4%BA%8E%E5%A4%A7%E6%95%B05%E5%87%8F%E5%B0%8F%E6%95%B01%E5%BE%97%E5%88%B0%E7%9A%84%E6%95%B0%E5%80%BC4.%E5%90%8C%E6%A0%B7%E5%9C%B0%2C%E6%95%B0%E5%AD%979%E8%A1%A8%E7%A4%BA%E4%B8%BA%20%E5%B7%A5X.%E8%BF%99%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E8%A7%84%E5%88%99%E5%8F%AA%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%A5%E4%B8%8B%E5%85%AD%E7%A7%8D%E6%83%85%E5%86%B5%3A%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8V%20(5)%E5%92%8CX(10)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA4%E5%92%8C9.%20X%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8%20(50)%E5%92%8CC(100)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA40%E5%92%8C90.%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8D(500)%E5%92%8C%20M(1000)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA%20400%E5%92%8C900.%20%E7%BB%99%E5%AE%9A%E4%B8%80%E4%B8%AA%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%2C%E5%B0%86%E5%85%B6%E8%BD%AC%E6%8D%A2%E6%88%90%E6%95%B4%E6%95%B0.%20%E7%A4%BA%E4%BE%8B1%3A%20%E8%BE%93%E5%85%A5%3AS%20%5C%22IIII%5C%22%20%E8%BE%93%E5%87%BA%3A3%20%E7%A4%BA%E4%BE%8B2%3A%20%E8%BE%93%E5%85%A5%3AS%E4%B8%89%5C%22IV%5C%22%20%E8%BE%93%E5%87%BA%3A4%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A71.19077%2C%22y%22%3A41.842274%2C%22width%22%3A245.12799%2C%22height%22%3A27.56554%2C%22text%22%3A%2213.%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E8%BD%AC%E6%95%B4%E6%95%B0%22%7D%2C%7B%22x%22%3A659.4192%2C%22y%22%3A99.60305%2C%22width%22%3A356.93279999999993%2C%22height%22%3A28.645100000000014%2C%22text%22%3A%22%E6%96%87%E5%88%87%E6%8D%A2%E4%B8%BA%E8%8B%B1%E6%96%87%E6%8E%A5%E6%94%B6%E5%8A%A8%E6%80%81%22%7D%2C%7B%22x%22%3A1105.6287%2C%22y%22%3A100.38709%2C%22width%22%3A50.321100000000115%2C%22height%22%3A26.663843999999997%2C%22text%22%3A%22%E5%8F%8D%E9%A6%88%22%7D%2C%7B%22x%22%3A66.53179%2C%22y%22%3A101.75833%2C%22width%22%3A219.61039%2C%22height%22%3A24.823719999999994%2C%22text%22%3A%22%E9%9A%BE%E5%BA%A6%E7%AE%80%E5%8D%95%E5%B1%B12%22%7D%2C%7B%22x%22%3A387.22702%2C%22y%22%3A101.67885%2C%22width%22%3A88.73958000000005%2C%22height%22%3A24.698935000000006%2C%22text%22%3A%22%E6%94%B6%E8%97%8F%22%7D%2C%7B%22x%22%3A666.97345%2C%22y%22%3A102.2285%2C%22width%22%3A26.27692000000002%2C%22height%22%3A25.484490000000008%2C%22text%22%3A%22%E6%96%87A%22%7D%2C%7B%22x%22%3A566.7546%2C%22y%22%3A102.36963%2C%22width%22%3A48.01589999999999%2C%22height%22%3A25.103830000000002%2C%22text%22%3A%22%E5%88%86%E4%BA%AB%22%7D%2C%7B%22x%22%3A266.35422%2C%22y%22%3A103.43857%2C%22width%22%3A67.68383999999998%2C%22height%22%3A22.41507%2C%22text%22%3A%222173%22%7D%2C%7B%22x%22%3A67.32458%2C%22y%22%3A192.05687%2C%22width%22%3A322.73890000000006%2C%22height%22%3A26.862470000000002%2C%22text%22%3A%22%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E5%8C%85%E5%90%AB%E4%BB%A5%E4%B8%8B%E4%B8%83%E7%A7%8D%E5%AD%97%E7%AC%A6%3A%22%7D%2C%7B%22x%22%3A722.4658%2C%22y%22%3A192.37656%2C%22width%22%3A53.27785000000006%2C%22height%22%3A27.950849999999974%2C%22text%22%3A%22%E5%92%8C%22%7D%2C%7B%22x%22%3A445.8547%2C%22y%22%3A192.89513%2C%22width%22%3A59.08262000000002%2C%22height%22%3A28.54271%2C%22text%22%3A%22V%2C%22%7D%2C%7B%22x%22%3A536.6927%2C%22y%22%3A195.26122%2C%22width%22%3A116.49956000000009%2C%22height%22%3A28.07416999999998%2C%22text%22%3A%22X%2C%E5%B7%A5%2C(%22%7D%2C%7B%22x%22%3A96.074165%2C%22y%22%3A276.65955%2C%22width%22%3A53.55675500000001%2C%22height%22%3A28.794119999999964%2C%22text%22%3A%22%E5%AD%97%E7%AC%A6%22%7D%2C%7B%22x%22%3A304.19803%2C%22y%22%3A277.53195%2C%22width%22%3A55.359249999999975%2C%22height%22%3A27.560249999999996%2C%22text%22%3A%22%E6%95%B0%E5%80%BC%22%7D%2C%7B%22x%22%3A95.1982%2C%22y%22%3A316.1501%2C%22width%22%3A23.143024999999994%2C%22height%22%3A33.622450000000015%2C%22text%22%3A%22I%22%7D%2C%7B%22x%22%3A314.29688%2C%22y%22%3A319.88437%2C%22width%22%3A22.350000000000023%2C%22height%22%3A27.93756000000002%2C%22text%22%3A%221%22%7D%2C%7B%22x%22%3A91.26978%2C%22y%22%3A350.50607%2C%22width%22%3A30.895740000000004%2C%22height%22%3A167.38747999999998%2C%22text%22%3A%22VXLC%22%7D%2C%7B%22x%22%3A314.64417%2C%22y%22%3A359.755%2C%22width%22%3A20.431430000000034%2C%22height%22%3A27.377700000000004%2C%22text%22%3A%225%22%7D%2C%7B%22x%22%3A319.8645%2C%22y%22%3A403.37485%2C%22width%22%3A31.2072%2C%22height%22%3A24.670050000000003%2C%22text%22%3A%2210%22%7D%2C%7B%22x%22%3A317.57104%2C%22y%22%3A444.4455%2C%22width%22%3A33.167940000000044%2C%22height%22%3A25.65930000000003%2C%22text%22%3A%2250%22%7D%2C%7B%22x%22%3A318.13974%2C%22y%22%3A486.41418%2C%22width%22%3A46.10035999999997%2C%22height%22%3A23.639620000000036%2C%22text%22%3A%22100%22%7D%2C%7B%22x%22%3A97.08449%2C%22y%22%3A513.4095%2C%22width%22%3A17.395796000000004%2C%22height%22%3A41.19780000000003%2C%22text%22%3A%22D%22%7D%2C%7B%22x%22%3A315.58768%2C%22y%22%3A528.1625%2C%22width%22%3A47.669219999999996%2C%22height%22%3A25.036100000000033%2C%22text%22%3A%22500%22%7D%2C%7B%22x%22%3A315.6549%2C%22y%22%3A567.94604%2C%22width%22%3A65.47532000000001%2C%22height%22%3A26.345359999999914%2C%22text%22%3A%221000%22%7D%2C%7B%22x%22%3A94.70865%2C%22y%22%3A569.08307%2C%22width%22%3A20.712226%2C%22height%22%3A24.868589999999926%2C%22text%22%3A%22M%22%7D%2C%7B%22x%22%3A66.334335%2C%22y%22%3A653.8286%2C%22width%22%3A814.015565%2C%22height%22%3A29.914749999999913%2C%22text%22%3A%22%E4%BE%8B%E5%A6%82%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%972%E5%86%99%E5%81%9AII%2C%E5%8D%B3%E4%B8%BA%E4%B8%A4%E4%B8%AA%E5%B9%B6%E5%88%97%E7%9A%841.12%E5%86%99%E5%81%9AXII%2C%22%7D%2C%7B%22x%22%3A777.3657%2C%22y%22%3A655.4269%2C%22width%22%3A471.15070000000003%2C%22height%22%3A27.35245999999995%2C%22text%22%3A%22%E5%81%9AXII%2C%E5%8D%B3%E4%B8%BAX%2BI.27%E5%86%99%E5%81%9AXX%22%7D%2C%7B%22x%22%3A1215.3254%2C%22y%22%3A656.09564%2C%22width%22%3A333.0983000000001%2C%22height%22%3A28.279660000000035%2C%22text%22%3A%22XXVII%2C%E5%8D%B3%E4%B8%BAXX%2BV%2BII%22%7D%2C%7B%22x%22%3A65.73574%2C%22y%22%3A718.4225%2C%22width%22%3A1613.2202599999998%2C%22height%22%3A28.686450000000036%2C%22text%22%3A%22%E9%80%82%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%2C%E7%BD%97%E9%A9%AC%E8%87%B4%E7%8E%87%E4%B8%AD%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AD%97%E5%9C%A8%E5%A4%A7%E7%9A%84%E6%95%B0%E5%AD%97%E7%9A%84%E5%8F%B3%E8%BE%B9%2C%E4%BD%86%E4%B9%9F%E5%AD%98%E5%9C%A8%E7%89%B9%E4%BE%8B%2C%E4%BE%8B%E5%A6%82A%E4%B8%8D%E5%86%99%E5%81%9A%201IIT%2C%E8%80%8C%E6%98%AF%20IY%2C%E6%95%B0%E5%AD%971%E5%9C%A8%E6%95%B0%E5%AD%975%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%89%80%E8%A1%A8%E7%A4%BA%E7%9A%84%22%7D%2C%7B%22x%22%3A66.19111%2C%22y%22%3A758.27277%2C%22width%22%3A1254.13699%2C%22height%22%3A27.884429999999952%2C%22text%22%3A%22%E6%95%B0%E7%AD%89%E4%BA%8E%E5%A4%A7%E6%95%B05%E5%87%8F%E5%B0%8F%E6%95%B01%E5%BE%97%E5%88%B0%E7%9A%84%E6%95%B0%E5%80%BC4.%E5%90%8C%E6%A0%B7%E5%9C%B0%2C%E6%95%B0%E5%AD%979%E8%A1%A8%E7%A4%BA%E4%B8%BA%20%E5%B7%A5X.%E8%BF%99%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E8%A7%84%E5%88%99%E5%8F%AA%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%A5%E4%B8%8B%E5%85%AD%E7%A7%8D%E6%83%85%E5%86%B5%3A%22%7D%2C%7B%22x%22%3A174.52731%2C%22y%22%3A822.0736%2C%22width%22%3A609.95102%2C%22height%22%3A27.49554999999998%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8V%20(5)%E5%92%8CX(10)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA4%E5%92%8C9.%22%7D%2C%7B%22x%22%3A150.58597%2C%22y%22%3A859.7085%2C%22width%22%3A698.66733%2C%22height%22%3A33.72350000000006%2C%22text%22%3A%22X%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8%20(50)%E5%92%8CC(100)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA40%E5%92%8C90.%22%7D%2C%7B%22x%22%3A187.75949%2C%22y%22%3A897.00433%2C%22width%22%3A725.23371%2C%22height%22%3A29.700500000000034%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8D(500)%E5%92%8C%20M(1000)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA%20400%E5%92%8C900.%22%7D%2C%7B%22x%22%3A66.21939%2C%22y%22%3A963.1876%2C%22width%22%3A427.44275000000005%2C%22height%22%3A27.124300000000062%2C%22text%22%3A%22%E7%BB%99%E5%AE%9A%E4%B8%80%E4%B8%AA%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%2C%E5%B0%86%E5%85%B6%E8%BD%AC%E6%8D%A2%E6%88%90%E6%95%B4%E6%95%B0.%22%7D%2C%7B%22x%22%3A65.926895%2C%22y%22%3A1086.1241%2C%22width%22%3A87.555555%2C%22height%22%3A29.804499999999962%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B1%3A%22%7D%2C%7B%22x%22%3A95.296394%2C%22y%22%3A1166.7015%2C%22width%22%3A232.471906%2C%22height%22%3A35.87630000000013%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%20%5C%22IIII%5C%22%22%7D%2C%7B%22x%22%3A96.844536%2C%22y%22%3A1215.0715%2C%22width%22%3A102.96425399999998%2C%22height%22%3A27.037399999999934%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A3%22%7D%2C%7B%22x%22%3A66.04782%2C%22y%22%3A1301.7693%2C%22width%22%3A86.17580000000001%2C%22height%22%3A26.63440000000014%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B2%3A%22%7D%2C%7B%22x%22%3A96.62961%2C%22y%22%3A1383.683%2C%22width%22%3A211.83648999999997%2C%22height%22%3A27.1570999999999%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%E4%B8%89%5C%22IV%5C%22%22%7D%2C%7B%22x%22%3A95.954575%2C%22y%22%3A1426.2025%2C%22width%22%3A103.094225%2C%22height%22%3A26.550899999999956%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A4%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23252525%22%2C%22id%22%3A%22u8c926233%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u338043a2" id="u338043a2"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671061360738-619c949d-6033-4f67-8a09-f0d0ce1b78c4.png%22%2C%22taskId%22%3A%22u01278be3-d9dc-479d-abbb-5edf0b20f64%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A657.6%2C%22height%22%3A323%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A81646%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1644%2C%22originHeight%22%3A808%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22%E7%A4%BA%E4%BE%8B3%3A%20%E8%BE%93%E5%85%A5%3AS%5C%22IX%5C%22%20%E8%BE%93%E5%87%BA%3AG%20%E7%A4%BA%E4%BE%8B4%3A%20%E8%BE%93%E5%85%A5%3AS%20%5C%22LVIII%5C%22%20%E8%BE%93%E5%87%BA%3A58%20%E8%A7%A3%E9%87%8A%3AL%20%E4%B8%89%2050%2CV%205%2C%20II%20%E4%B8%89%203.%20%E7%A4%BA%E4%BE%8B5%3A%20%E8%BE%93%E5%85%A5%3AS%20%E4%B8%89%5C%22MCMXCIV%5C%22%20%E8%BE%93%E5%87%BA%3A1994%20%E8%A7%A3%E9%87%8A%3AM%20%E4%B8%89%201000%2CCM%20%E4%BA%8C%20900%2CXC%20%E4%BA%8C%204.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A59.015984%2C%22y%22%3A54.346695%2C%22width%22%3A81.421056%2C%22height%22%3A25.664085%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B3%3A%22%7D%2C%7B%22x%22%3A87.264435%2C%22y%22%3A137.20667%2C%22width%22%3A213.319185%2C%22height%22%3A27.26167000000001%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%5C%22IX%5C%22%22%7D%2C%7B%22x%22%3A88.72879%2C%22y%22%3A177.544%2C%22width%22%3A91.57749999999999%2C%22height%22%3A28.423039999999986%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3AG%22%7D%2C%7B%22x%22%3A57.943287%2C%22y%22%3A265.4797%2C%22width%22%3A82.080063%2C%22height%22%3A27.401220000000023%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B4%3A%22%7D%2C%7B%22x%22%3A88.8565%2C%22y%22%3A349.375%2C%22width%22%3A255.2547%2C%22height%22%3A27.15210000000002%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%20%5C%22LVIII%5C%22%22%7D%2C%7B%22x%22%3A89.808205%2C%22y%22%3A391.70358%2C%22width%22%3A116.36168500000001%2C%22height%22%3A26.87226000000004%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A58%22%7D%2C%7B%22x%22%3A88.25695%2C%22y%22%3A429.8633%2C%22width%22%3A428.09985%2C%22height%22%3A31.691540000000032%2C%22text%22%3A%22%E8%A7%A3%E9%87%8A%3AL%20%E4%B8%89%2050%2CV%205%2C%20II%20%E4%B8%89%203.%22%7D%2C%7B%22x%22%3A59.198856%2C%22y%22%3A520.13226%2C%22width%22%3A83.964044%2C%22height%22%3A27.13693999999998%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B5%3A%22%7D%2C%7B%22x%22%3A87.81276%2C%22y%22%3A600.4184%2C%22width%22%3A290.24159%2C%22height%22%3A31.645440000000008%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3AS%20%E4%B8%89%5C%22MCMXCIV%5C%22%22%7D%2C%7B%22x%22%3A87.65881%2C%22y%22%3A646.04254%2C%22width%22%3A148.37621000000001%2C%22height%22%3A26.95375999999999%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A1994%22%7D%2C%7B%22x%22%3A87.6885%2C%22y%22%3A684.2373%2C%22width%22%3A647.34275%2C%22height%22%3A30.26400000000001%2C%22text%22%3A%22%E8%A7%A3%E9%87%8A%3AM%20%E4%B8%89%201000%2CCM%20%E4%BA%8C%20900%2CXC%20%E4%BA%8C%204.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23242424%22%2C%22id%22%3A%22ud1a72d5f%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="uff80d743" id="uff80d743"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%5Cnfunction%20fn(str)%20%7B%5Cn%20%20%20%20let%20map%20%3D%20%7B%5Cn%20%20%20%20%20%20%20%20I%3A%201%2C%5Cn%20%20%20%20%20%20%20%20V%3A%205%2C%5Cn%20%20%20%20%20%20%20%20X%3A%2010%2C%5Cn%20%20%20%20%20%20%20%20L%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20C%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20D%3A%20500%2C%5Cn%20%20%20%20%20%20%20%20M%3A%201000%2C%5Cn%20%20%20%20%7D%5Cn%20%20%20%20let%20res%20%3D%20%5B%5D%3B%5Cn%20%20%20%20let%20arr%20%3D%20str.split('')%3B%5Cn%20%20%20%20arr.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20res.push(map%5Bitem%5D)%3B%5Cn%20%20%20%20%7D)%5Cn%20%20%20%20%5Cn%20%20%20%20let%20val%20%3D%200%3B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20res.length%3B%20i%2B%2B)%20%7B%5Cn%5Cn%20%20%20%20%20%20%20%20let%20a%20%3D%20res%5Bi%5D%3B%5Cn%20%20%20%20%20%20%20%20let%20b%20%3D%20res%5Bi%20%2B%201%5D%3B%5Cn%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E8%BF%99%E9%87%8C%E6%98%AF%E4%BE%8B%E5%A4%96%E7%9A%84%E6%83%85%E5%86%B5%EF%BC%8C%E9%9C%80%E8%A6%81%E7%89%B9%E6%AE%8A%E5%A4%84%E7%90%86%5Cn%20%20%20%20%20%20%20%20if%20(b%20%26%26%20b%20%3E%20a)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20val%20%2B%3D%20b%20-%20a%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%3A%3A%3A%3A%20%E8%BF%99%E9%87%8C%E5%BE%88%E5%85%B3%E9%94%AE%EF%BC%8C%E7%9B%B4%E6%8E%A5i%2B%2B%E8%B7%B3%E8%BF%87%E4%BA%86%5Cn%20%20%20%20%20%20%20%20%20%20%20%20i%2B%2B%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20val%20%2B%3D%20a%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20console.log(val)%3B%5Cn%20%20%20%20return%20val%3B%5Cn%7D%5Cn%5Cn%5Cnfn('MCMXCIV')%5Cnfn('LVIII')%5Cnfn('IX')%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Atrue%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%BE%8B%E5%A4%96%E7%9A%84%E6%83%85%E5%86%B5%E7%89%B9%E6%AE%8A%E5%A4%84%E7%90%86%EF%BC%8C%E5%85%B6%E4%BB%96%E6%AD%A3%E5%B8%B8%E8%AE%A1%E7%AE%97%E5%8D%B3%E5%8F%AF%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B23%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22YwllR%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="udb1f1c12" id="udb1f1c12"><br></p><h1 data-lake-id="TInfq" id="TInfq" collapsed="true"><span data-lake-id="u8c5b0bb4" id="u8c5b0bb4">9、整数转成罗马数字</span></h1><p data-lake-id="u77ca6c77" id="u77ca6c77"><span data-lake-id="u01044cd9" id="u01044cd9">​</span><card type="inline" name="label" value="data:%7B%22label%22%3A%22%E4%BD%8E%E9%A2%91%22%2C%22colorIndex%22%3A0%2C%22id%22%3A%22sBTYR%22%7D"></card></p><p data-lake-id="u6f7be6bb" id="u6f7be6bb"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671061928885-a38d0d48-853a-4084-9f3a-abc8a6eb11ab.png%22%2C%22taskId%22%3A%22u2c345420-6920-4d26-a895-666f96cf8b1%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A692.8%2C%22height%22%3A620%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A233018%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1732%2C%22originHeight%22%3A1550%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%2212.%E6%95%B4%E6%95%B0%E8%BD%AC%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%20%E5%88%87%E6%8D%A2%E4%B8%BA%E8%8B%B1%E6%96%87%20%E6%8E%A5%E6%94%B6%E5%8A%A8%E6%80%81%20%E5%8F%8D%E9%A6%88%2001021%20%E6%94%B6%E8%97%8F%20%E5%88%86%E4%BA%AB%20%E9%9A%BE%E5%BA%A6%E4%B8%AD%E7%AD%89%20I%2CV%2CX%2C%E5%B7%A5%2CC%2CD%E5%92%8CM.%20%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E5%8C%85%E5%90%AB%E4%BB%A5%E4%B8%8B%E4%B8%83%E7%A7%8D%E5%AD%97%E7%AC%A6%3A%20%E5%AD%97%E7%AC%A6%20%E6%95%B0%E5%80%BC%20I%201%20V%205%20X%2010%20L%2050%20C%20100%20500%20D%201000%2027%E5%86%99%E5%81%9A%20%E5%8D%B3%E4%B8%BAX%2BII%20%E4%BE%8B%E5%A6%82%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%972%E5%86%99%E5%81%9AII%2C%E5%8D%B3%E4%B8%BA%E4%B8%A4%E4%B8%AA%E5%B9%B6%E5%88%97%E7%9A%841.12%E5%86%99%E5%81%9A7%20%E5%86%99%E5%81%9AXII%20%E5%8D%B3%E4%B8%BA%20XXX%20V%20II%20IIAXX%20%E9%80%9A%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E4%B8%AD%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AD%97%E5%9C%A8%E5%A4%A7%E7%9A%84%E6%95%99%E5%AD%A6%E7%9A%84%E5%8F%B3%E8%BE%B9%2C%E4%BD%86%E4%B9%9F%E5%AD%98%E5%9C%A8%E7%89%B9%E4%BE%8B%2C%E4%BE%8B%E5%A6%824%E4%B8%8D%E5%86%99%E5%81%9A%20IIIT%2C%E8%80%8C%E6%98%AF%2CTY%2C%E6%95%B0%E5%AD%971%E5%9C%A8%E8%87%B4%E5%AE%875%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%89%80%E8%A1%A8%E7%A4%BA%E7%9A%84%20%E6%95%B0%E7%AD%89%E4%BA%8E%E5%A4%A7%E6%95%B05%E5%87%8F%E5%B0%8F%E6%95%B01%E5%BE%97%E5%88%B0%E7%9A%84%E6%95%B0%E5%80%BC4.%E5%90%8C%E6%A0%B7%E5%9C%B0%2C%E6%95%B0%E5%AD%979%E8%A1%A8%E7%A4%BA%E4%B8%BA%20%E5%B7%A5X.%E8%BF%99%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E8%A7%84%E5%88%99%E5%8F%AA%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%A5%E4%B8%8B%E5%85%AD%E7%A7%8D%E6%83%85%E5%86%B5%3A%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8V(5)%E5%92%8CX(10)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA4%E5%92%8C9.%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8(50)%E5%92%8CC(100)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA40%E5%92%8C90.%20%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8D(500)%E5%92%8CM(1000)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA400%E5%92%8C900.%20%E7%BB%99%E4%BD%A0%E4%B8%80%E4%B8%AA%E6%95%B4%E6%95%B0%2C%E5%B0%86%E5%85%B6%E8%BD%AC%E4%B8%BA%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97.%20%E7%A4%BA%E4%BE%8B1%3A%20%E8%BE%93%E5%85%A5%3ANUM%203%20%E8%BE%93%E5%87%BA%3A%5C%22II%5C%22%20%E7%A4%BA%E4%BE%8B2%3A%20%E8%BE%93%E5%85%A5%3ANUM%20%E4%B8%89%204%20%E8%BE%93%E5%87%BA%3A%5C%22IV%5C%22%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A62.29826%2C%22y%22%3A55.133102%2C%22width%22%3A247.94661%2C%22height%22%3A28.495588000000005%2C%22text%22%3A%2212.%E6%95%B4%E6%95%B0%E8%BD%AC%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%22%7D%2C%7B%22x%22%3A696.19855%2C%22y%22%3A115.83735%2C%22width%22%3A125.32989000000009%2C%22height%22%3A28.809160000000006%2C%22text%22%3A%22%E5%88%87%E6%8D%A2%E4%B8%BA%E8%8B%B1%E6%96%87%22%7D%2C%7B%22x%22%3A912.22437%2C%22y%22%3A117.076614%2C%22width%22%3A97.40602999999999%2C%22height%22%3A25.460605999999984%2C%22text%22%3A%22%E6%8E%A5%E6%94%B6%E5%8A%A8%E6%80%81%22%7D%2C%7B%22x%22%3A1100.5547%2C%22y%22%3A117.57302%2C%22width%22%3A50.72280000000001%2C%22height%22%3A25.439829999999986%2C%22text%22%3A%22%E5%8F%8D%E9%A6%88%22%7D%2C%7B%22x%22%3A233.81592%2C%22y%22%3A117.618324%2C%22width%22%3A94.55394999999999%2C%22height%22%3A24.012305999999995%2C%22text%22%3A%2201021%22%7D%2C%7B%22x%22%3A418.8261%2C%22y%22%3A117.6608%2C%22width%22%3A49.44902000000002%2C%22height%22%3A25.037990000000008%2C%22text%22%3A%22%E6%94%B6%E8%97%8F%22%7D%2C%7B%22x%22%3A556.3668%2C%22y%22%3A118.000984%2C%22width%22%3A51.07814999999994%2C%22height%22%3A25.477515999999994%2C%22text%22%3A%22%E5%88%86%E4%BA%AB%22%7D%2C%7B%22x%22%3A58.60556%2C%22y%22%3A118.15932%2C%22width%22%3A158.83948%2C%22height%22%3A25.171930000000017%2C%22text%22%3A%22%E9%9A%BE%E5%BA%A6%E4%B8%AD%E7%AD%89%22%7D%2C%7B%22x%22%3A412.15652%2C%22y%22%3A206.34572%2C%22width%22%3A420.59698000000003%2C%22height%22%3A34.60929999999999%2C%22text%22%3A%22I%2CV%2CX%2C%E5%B7%A5%2CC%2CD%E5%92%8CM.%22%7D%2C%7B%22x%22%3A61.33587%2C%22y%22%3A208.11375%2C%22width%22%3A322.91209%2C%22height%22%3A28.155959999999993%2C%22text%22%3A%22%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E5%8C%85%E5%90%AB%E4%BB%A5%E4%B8%8B%E4%B8%83%E7%A7%8D%E5%AD%97%E7%AC%A6%3A%22%7D%2C%7B%22x%22%3A89.05206%2C%22y%22%3A292.8356%2C%22width%22%3A55.72689000000001%2C%22height%22%3A28.85584%2C%22text%22%3A%22%E5%AD%97%E7%AC%A6%22%7D%2C%7B%22x%22%3A297.87534%2C%22y%22%3A294.9953%2C%22width%22%3A55.44481999999999%2C%22height%22%3A25.877200000000016%2C%22text%22%3A%22%E6%95%B0%E5%80%BC%22%7D%2C%7B%22x%22%3A89.859695%2C%22y%22%3A334.96884%2C%22width%22%3A17.540994999999995%2C%22height%22%3A27.992709999999988%2C%22text%22%3A%22I%22%7D%2C%7B%22x%22%3A308.85226%2C%22y%22%3A336.42142%2C%22width%22%3A18.603940000000023%2C%22height%22%3A26.792359999999974%2C%22text%22%3A%221%22%7D%2C%7B%22x%22%3A88.67695%2C%22y%22%3A374.98416%2C%22width%22%3A22.060384999999997%2C%22height%22%3A28.599890000000016%2C%22text%22%3A%22V%22%7D%2C%7B%22x%22%3A310.1943%2C%22y%22%3A376.124%2C%22width%22%3A16.126899999999978%2C%22height%22%3A26.107349999999997%2C%22text%22%3A%225%22%7D%2C%7B%22x%22%3A87.367775%2C%22y%22%3A417.36255%2C%22width%22%3A25.63259500000001%2C%22height%22%3A28.437099999999987%2C%22text%22%3A%22X%22%7D%2C%7B%22x%22%3A313.61063%2C%22y%22%3A419.8182%2C%22width%22%3A29.621699999999976%2C%22height%22%3A23.921899999999994%2C%22text%22%3A%2210%22%7D%2C%7B%22x%22%3A87.714096%2C%22y%22%3A461.02176%2C%22width%22%3A20.187984%2C%22height%22%3A32.35690000000005%2C%22text%22%3A%22L%22%7D%2C%7B%22x%22%3A311.8007%2C%22y%22%3A463.3723%2C%22width%22%3A30.720879999999966%2C%22height%22%3A21.21956%2C%22text%22%3A%2250%22%7D%2C%7B%22x%22%3A88.9788%2C%22y%22%3A495.58972%2C%22width%22%3A20.49799999999999%2C%22height%22%3A35.65033%2C%22text%22%3A%22C%22%7D%2C%7B%22x%22%3A312.1186%2C%22y%22%3A503.84503%2C%22width%22%3A45.279499999999985%2C%22height%22%3A22.348869999999977%2C%22text%22%3A%22100%22%7D%2C%7B%22x%22%3A310.96008%2C%22y%22%3A545.2519%2C%22width%22%3A45.57605000000001%2C%22height%22%3A21.82384000000002%2C%22text%22%3A%22500%22%7D%2C%7B%22x%22%3A88.445496%2C%22y%22%3A545.4353%2C%22width%22%3A18.904563999999993%2C%22height%22%3A25.970950000000016%2C%22text%22%3A%22D%22%7D%2C%7B%22x%22%3A311.80865%2C%22y%22%3A587.10767%2C%22width%22%3A62.27895000000001%2C%22height%22%3A21.94722999999999%2C%22text%22%3A%221000%22%7D%2C%7B%22x%22%3A1055.4615%2C%22y%22%3A671.5986%2C%22width%22%3A96.56560000000013%2C%22height%22%3A27.119659999999953%2C%22text%22%3A%2227%E5%86%99%E5%81%9A%22%7D%2C%7B%22x%22%3A846.3123%2C%22y%22%3A672.1218%2C%22width%22%3A168.8041599999999%2C%22height%22%3A27.335500000000025%2C%22text%22%3A%22%E5%8D%B3%E4%B8%BAX%2BII%22%7D%2C%7B%22x%22%3A60.71616%2C%22y%22%3A671.3128%2C%22width%22%3A691.7444399999999%2C%22height%22%3A28.41926000000001%2C%22text%22%3A%22%E4%BE%8B%E5%A6%82%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%972%E5%86%99%E5%81%9AII%2C%E5%8D%B3%E4%B8%BA%E4%B8%A4%E4%B8%AA%E5%B9%B6%E5%88%97%E7%9A%841.12%E5%86%99%E5%81%9A7%22%7D%2C%7B%22x%22%3A706.7618%2C%22y%22%3A672.45044%2C%22width%22%3A105.70230000000004%2C%22height%22%3A27.356960000000072%2C%22text%22%3A%22%E5%86%99%E5%81%9AXII%22%7D%2C%7B%22x%22%3A1270.344%2C%22y%22%3A672.7952%2C%22width%22%3A52.1552999999999%2C%22height%22%3A26.415740000000028%2C%22text%22%3A%22%E5%8D%B3%E4%B8%BA%22%7D%2C%7B%22x%22%3A1336.3547%2C%22y%22%3A675.205%2C%22width%22%3A65.2494999999999%2C%22height%22%3A23.25452999999993%2C%22text%22%3A%22XXX%22%7D%2C%7B%22x%22%3A1413.7437%2C%22y%22%3A675.8451%2C%22width%22%3A19.605999999999995%2C%22height%22%3A22.73599999999999%2C%22text%22%3A%22V%22%7D%2C%7B%22x%22%3A1469.7701%2C%22y%22%3A676.76733%2C%22width%22%3A38.69820000000004%2C%22height%22%3A21.47136999999998%2C%22text%22%3A%22II%22%7D%2C%7B%22x%22%3A1168.6044%2C%22y%22%3A676.7315%2C%22width%22%3A78.94050000000016%2C%22height%22%3A21.23339999999996%2C%22text%22%3A%22IIAXX%22%7D%2C%7B%22x%22%3A60.925064%2C%22y%22%3A735.3427%2C%22width%22%3A1613.452536%2C%22height%22%3A29.61590000000001%2C%22text%22%3A%22%E9%80%9A%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%2C%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E4%B8%AD%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AD%97%E5%9C%A8%E5%A4%A7%E7%9A%84%E6%95%99%E5%AD%A6%E7%9A%84%E5%8F%B3%E8%BE%B9%2C%E4%BD%86%E4%B9%9F%E5%AD%98%E5%9C%A8%E7%89%B9%E4%BE%8B%2C%E4%BE%8B%E5%A6%824%E4%B8%8D%E5%86%99%E5%81%9A%20IIIT%2C%E8%80%8C%E6%98%AF%2CTY%2C%E6%95%B0%E5%AD%971%E5%9C%A8%E8%87%B4%E5%AE%875%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%89%80%E8%A1%A8%E7%A4%BA%E7%9A%84%22%7D%2C%7B%22x%22%3A60.456924%2C%22y%22%3A773.02124%2C%22width%22%3A1255.2000759999999%2C%22height%22%3A28.886359999999968%2C%22text%22%3A%22%E6%95%B0%E7%AD%89%E4%BA%8E%E5%A4%A7%E6%95%B05%E5%87%8F%E5%B0%8F%E6%95%B01%E5%BE%97%E5%88%B0%E7%9A%84%E6%95%B0%E5%80%BC4.%E5%90%8C%E6%A0%B7%E5%9C%B0%2C%E6%95%B0%E5%AD%979%E8%A1%A8%E7%A4%BA%E4%B8%BA%20%E5%B7%A5X.%E8%BF%99%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E8%A7%84%E5%88%99%E5%8F%AA%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%A5%E4%B8%8B%E5%85%AD%E7%A7%8D%E6%83%85%E5%86%B5%3A%22%7D%2C%7B%22x%22%3A174.41545%2C%22y%22%3A837.0229%2C%22width%22%3A605.15981%2C%22height%22%3A27.801799999999957%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8V(5)%E5%92%8CX(10)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA4%E5%92%8C9.%22%7D%2C%7B%22x%22%3A177.89536%2C%22y%22%3A875.86554%2C%22width%22%3A659.69464%2C%22height%22%3A28.963319999999953%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8(50)%E5%92%8CC(100)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA40%E5%92%8C90.%22%7D%2C%7B%22x%22%3A182.4572%2C%22y%22%3A913.02295%2C%22width%22%3A725.1868999999999%2C%22height%22%3A30.80340000000001%2C%22text%22%3A%22%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8D(500)%E5%92%8CM(1000)%E7%9A%84%E5%B7%A6%E8%BE%B9%2C%E6%9D%A5%E8%A1%A8%E7%A4%BA400%E5%92%8C900.%22%7D%2C%7B%22x%22%3A59.780064%2C%22y%22%3A978.57336%2C%22width%22%3A406.97197600000004%2C%22height%22%3A28.767740000000003%2C%22text%22%3A%22%E7%BB%99%E4%BD%A0%E4%B8%80%E4%B8%AA%E6%95%B4%E6%95%B0%2C%E5%B0%86%E5%85%B6%E8%BD%AC%E4%B8%BA%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97.%22%7D%2C%7B%22x%22%3A57.457607%2C%22y%22%3A1100.9564%2C%22width%22%3A88.83234300000001%2C%22height%22%3A31.716300000000047%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B1%3A%22%7D%2C%7B%22x%22%3A89.90387%2C%22y%22%3A1187.8611%2C%22width%22%3A137.02233%2C%22height%22%3A30.752099999999928%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%22%7D%2C%7B%22x%22%3A269.42252%2C%22y%22%3A1190.1678%2C%22width%22%3A14.293819999999982%2C%22height%22%3A21.032500000000027%2C%22text%22%3A%223%22%7D%2C%7B%22x%22%3A89.965515%2C%22y%22%3A1230.0923%2C%22width%22%3A161.721185%2C%22height%22%3A27.251800000000003%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22II%5C%22%22%7D%2C%7B%22x%22%3A60.109104%2C%22y%22%3A1315.5518%2C%22width%22%3A88.23476600000001%2C%22height%22%3A29.28469999999993%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B2%3A%22%7D%2C%7B%22x%22%3A90.545105%2C%22y%22%3A1401.0825%2C%22width%22%3A192.06283499999998%2C%22height%22%3A25.62609999999995%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%20%E4%B8%89%204%22%7D%2C%7B%22x%22%3A90.67733%2C%22y%22%3A1441.1827%2C%22width%22%3A143.86816%2C%22height%22%3A27.39949999999999%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22IV%5C%22%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23252525%22%2C%22id%22%3A%22uce798191%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ucfc4ab99" id="ucfc4ab99"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671061949217-0cea1bf3-2508-42ad-ad88-055b49c0faa0.png%22%2C%22taskId%22%3A%22ub6e70458-d7fe-454f-820d-06a78d4a4a7%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A698.4%2C%22height%22%3A326%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A84780%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1746%2C%22originHeight%22%3A816%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22%E7%A4%BA%E4%BE%8B3%3A%20%E8%BE%93%E5%85%A5%3ANUM%209%20%E8%BE%93%E5%87%BA%3A%5C%22IX%5C%22%20%E7%A4%BA%E4%BE%8B4%3A%20%E8%BE%93%E5%85%A5%3ANUM%20%2058%20%E8%BE%93%E5%87%BA%3A%5C%22LVIII%5C%22%20%E8%A7%A3%E9%87%8A%3AL%20%E4%BA%8C%2050%2CV%205%2C%20III%20%E4%B8%893.%20%E7%A4%BA%E4%BE%8B5%3A%20%E8%BE%93%E5%85%A5%3ANUM%20%201994%20%E8%BE%93%E5%87%BA%3A%5C%22MCMXCIV%5C%22%20%E8%A7%A3%E9%87%8A%3AM%201000%2CCM%20%3A900%2CXC%E4%BA%8C90%2CIV%E4%B8%894.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A59.264885%2C%22y%22%3A66.830185%2C%22width%22%3A86.39361500000001%2C%22height%22%3A26.037491000000003%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B3%3A%22%7D%2C%7B%22x%22%3A88.30588%2C%22y%22%3A147.80725%2C%22width%22%3A136.04039%2C%22height%22%3A29.33678999999998%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%22%7D%2C%7B%22x%22%3A265.44467%2C%22y%22%3A150.04686%2C%22width%22%3A16.916260000000023%2C%22height%22%3A23.189089999999993%2C%22text%22%3A%229%22%7D%2C%7B%22x%22%3A88.369774%2C%22y%22%3A188.75284%2C%22width%22%3A142.836896%2C%22height%22%3A29.42496%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22IX%5C%22%22%7D%2C%7B%22x%22%3A58.99816%2C%22y%22%3A275.6218%2C%22width%22%3A81.50338%2C%22height%22%3A28.69292999999999%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B4%3A%22%7D%2C%7B%22x%22%3A88.43651%2C%22y%22%3A360.86615%2C%22width%22%3A212.99473%2C%22height%22%3A29.373289999999997%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%20%2058%22%7D%2C%7B%22x%22%3A87.64723%2C%22y%22%3A400.90942%2C%22width%22%3A198.16167000000002%2C%22height%22%3A29.53782000000001%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22LVIII%5C%22%22%7D%2C%7B%22x%22%3A98.20017%2C%22y%22%3A444.18073%2C%22width%22%3A354.34945%2C%22height%22%3A29.206970000000013%2C%22text%22%3A%22%E8%A7%A3%E9%87%8A%3AL%20%E4%BA%8C%2050%2CV%205%2C%20III%22%7D%2C%7B%22x%22%3A462.59714%2C%22y%22%3A445.85492%2C%22width%22%3A63.83346%2C%22height%22%3A25.016200000000026%2C%22text%22%3A%22%E4%B8%893.%22%7D%2C%7B%22x%22%3A59.768936%2C%22y%22%3A531.79474%2C%22width%22%3A85.24310400000002%2C%22height%22%3A27.041560000000004%2C%22text%22%3A%22%E7%A4%BA%E4%BE%8B5%3A%22%7D%2C%7B%22x%22%3A87.19127%2C%22y%22%3A613.6101%2C%22width%22%3A244.52363%2C%22height%22%3A28.786699999999996%2C%22text%22%3A%22%E8%BE%93%E5%85%A5%3ANUM%20%201994%22%7D%2C%7B%22x%22%3A88.10955%2C%22y%22%3A655.8773%2C%22width%22%3A225.04534999999998%2C%22height%22%3A30.959550000000036%2C%22text%22%3A%22%E8%BE%93%E5%87%BA%3A%5C%22MCMXCIV%5C%22%22%7D%2C%7B%22x%22%3A87.464386%2C%22y%22%3A698.74884%2C%22width%22%3A296.610164%2C%22height%22%3A27.84789999999998%2C%22text%22%3A%22%E8%A7%A3%E9%87%8A%3AM%201000%2CCM%22%7D%2C%7B%22x%22%3A400.7935%2C%22y%22%3A698.014%2C%22width%22%3A335.3991%2C%22height%22%3A28.216000000000008%2C%22text%22%3A%22%3A900%2CXC%E4%BA%8C90%2CIV%E4%B8%894.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23242424%22%2C%22id%22%3A%22u2b614474%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ucc116c65" id="ucc116c65"><br></p><p data-lake-id="u47d967d3" id="u47d967d3"><span data-lake-id="u6392bfe4" id="u6392bfe4">？？？？贪心思路：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22let%20intToRoman%20%3D%20function%20(num)%20%7B%5Cn%20%20%20%20let%20values%20%3D%20%5B1000%2C%20900%2C%20500%2C%20400%2C%20100%2C%2090%2C%2050%2C%2040%2C%2010%2C%209%2C%205%2C%204%2C%201%5D%2C%5Cn%20%20%20%20%20%20%20%20strs%20%3D%20%5B%5C%22M%5C%22%2C%20%5C%22CM%5C%22%2C%20%5C%22D%5C%22%2C%20%5C%22CD%5C%22%2C%20%5C%22C%5C%22%2C%20%5C%22XC%5C%22%2C%20%5C%22L%5C%22%2C%20%5C%22XL%5C%22%2C%20%5C%22X%5C%22%2C%20%5C%22IX%5C%22%2C%20%5C%22V%5C%22%2C%20%5C%22IV%5C%22%2C%20%5C%22I%5C%22%5D%2C%5Cn%20%20%20%20%20%20%20%20result%20%3D%20''%3B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20values.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20while%20(num%20%3E%3D%20values%5Bi%5D)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20num%20-%3D%20values%5Bi%5D%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20result%20%2B%3D%20strs%5Bi%5D%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20return%20result%3B%5Cn%7D%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22KQjYH%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u5d869315" id="u5d869315"><span data-lake-id="u1c50fc43" id="u1c50fc43">​</span><br></p><p data-lake-id="ud4dfc10d" id="ud4dfc10d"><br></p><h1 data-lake-id="r9z5W" id="r9z5W"><span data-lake-id="u049e5fd9" id="u049e5fd9">10、实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject\0 </span></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22Promise.retry%20%3D%20function%20(promiseFn%2C%20times%20%3D%203)%20%7B%5Cn%20%20%20%20return%20new%20Promise(async%20(resolve%2C%20reject)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20while%20(times--)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20ret%20%3D%20await%20promiseFn()%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(ret)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E6%88%90%E5%8A%9F%E4%BA%86%E5%B0%B1%E7%9B%B4%E6%8E%A5break%E4%BA%86%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!times)%20reject(error)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D)%3B%5Cn%7D%3B%5Cn%5Cn%5Cnfunction%20getProm()%20%7B%5Cn%20%20%20%20const%20n%20%3D%20Math.random()%3B%5Cn%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20console.log(n)%3B%5Cn%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%20n%20%3E%200.9%20%3F%20resolve(n)%20%3A%20reject(n)%2C%201000)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%7D%5CnPromise.retry(getProm%2C10)%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B6%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22I3Dil%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u997bc3db" id="u997bc3db"><br></p><h1 data-lake-id="SYekL" id="SYekL"><span data-lake-id="u5eb046f8" id="u5eb046f8">11、柯里化参数固定场景 </span><code data-lake-id="u4586272d" id="u4586272d"><span data-lake-id="u9e3c97c3" id="u9e3c97c3">add(1)(2)(3)\0</span></code></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%E6%9F%AF%E9%87%8C%E5%8C%96%5Cn%20*%20%E5%8F%82%E6%95%B0%E5%9B%BA%E5%AE%9A%E5%9C%BA%E6%99%AF%5Cn%20*%20add(1)(2)(3)%5Cn%20*%20add(4)(5)(6)%5Cn%20*%5Cn%20*%20*%2F%5Cn%5Cnconst%20curry%20%3D%20(fn%2C%20...args1)%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(args1.length%20%3E%3D%20fn.length)%20%7B%5Cn%20%20%20%20%20%20%20%20return%20fn(...args1)%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%2F%2F%20%E4%B8%A4%E4%B8%AAreturn%20%5Cn%20%20%20%20%20%20%20%20return%20(...args2)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20curry(fn%2C%20...args1%2C%20...args2)%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20add1(x%2C%20y%2C%20z)%20%7B%5Cn%20%20%20%20return%20x%20%2B%20y%20%2B%20z%3B%5Cn%7D%5Cn%5Cnconst%20add%20%3D%20curry(add1)%3B%5Cnconsole.log(add(1%2C%202%2C%203))%3B%5Cnconsole.log(add(1)(2)(3))%3B%5Cnconsole.log(add(1%2C%202)(3))%3B%5Cnconsole.log(add(1)(2%2C%203))%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22elkUl%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uca535bd9" id="uca535bd9"><br></p><h1 data-lake-id="VwHiu" id="VwHiu"><span data-lake-id="u256ac7b6" id="u256ac7b6">12、接上题，参数不固定的柯里化场景</span></h1><p data-lake-id="u56528b02" id="u56528b02"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%E6%9F%AF%E9%87%8C%E5%8C%96%5Cn%20*%20%E5%8F%82%E6%95%B0%E4%B8%8D%E5%9B%BA%E5%AE%9A%E5%9C%BA%E6%99%AF%5Cn%20*%20add(1)(2)(3%2C4).sumof()%5Cn%20*%5Cn%20*%20*%2F%5Cn%5Cnconst%20add%20%3D%20(...args)%20%3D%3E%20%7B%5Cn%20%20%20%20let%20vars%20%3D%20%5B%5D%3B%5Cn%20%20%20%20%5Cn%20%20%20%20%2F%2F%20%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%EF%BC%8C%E5%BD%A2%E6%88%90%E9%97%AD%E5%8C%85%5Cn%20%20%20%20const%20curried%20%3D%20(...arg2)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E8%BF%99%E9%87%8C%20vars%2C%E8%AE%B0%E4%BD%8F%E4%BA%86%5Cn%20%20%20%20%20%20%20%20vars%20%3D%20%5B...vars%2C%20...arg2%5D%3B%5Cn%20%20%20%20%20%20%20%20return%20curried%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%5Cn%20%20%20%20curried.sumof%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2Ftodo%20%E5%81%9A%E4%BD%A0%E6%83%B3%E5%81%9A%E7%9A%84%E4%BA%8B%E6%83%85%5Cn%20%20%20%20%20%20%20%20return%20vars%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20return%20curried(...args)%5Cn%7D%5Cn%5Cnconsole.log(add(1)(2)(3%2C%204).sumof())%5Cnconsole.log(add(1)(2)(3%2C%204)(7%2C%208).sumof())%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B8%2C12%2C18%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22eouym%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uad88cec4" id="uad88cec4"><span data-lake-id="ufa56ac50" id="ufa56ac50">​</span><br></p><h1 data-lake-id="sif8W" id="sif8W"><span data-lake-id="u30361f72" id="u30361f72">13、如何实现大文件上传</span></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F*************************************************%5Cn%20*%20%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%5Cn%20*%5Cn%20*%201%E3%80%81%E4%BD%BF%E7%94%A8FileReader%E8%AF%BB%E6%96%87%E4%BB%B6%E6%B5%81%20%EF%BC%8Cblob.slice%E5%88%86%E5%89%B2%EF%BC%8Cmd5%E6%96%87%E4%BB%B6%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%EF%BC%8Chash.1.png%5Cn%20*%202%E3%80%81%E8%AF%95%E8%AF%95%E7%9B%91%E5%90%ACxhr%20%20ononpress%E5%AE%9E%E6%97%B6%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%BC%A0%E8%BF%9B%E5%BA%A6%5Cn%20*%203%E3%80%81%E9%83%BD%E4%B8%8A%E4%BC%A0%E5%AE%8C%E5%90%8E%EF%BC%8C%E9%9C%80%E8%A6%81%E5%86%8D%E5%8F%91%E4%B8%80%E4%B8%AA%E8%AF%B7%E6%B1%82%E5%91%8A%E8%AF%89%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%81%9A%E5%90%88%E5%B9%B6%E5%A4%84%E7%90%86%5Cn%20*%5Cn%20************************************************%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22jU5sb%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u85ba6bc3" id="u85ba6bc3"><br></p><h1 data-lake-id="HnlYe" id="HnlYe"><span data-lake-id="u0eb1816a" id="u0eb1816a">14、如何实现图片懒加载</span></h1><p data-lake-id="ud62acaf0" id="ud62acaf0"><span data-lake-id="u8feffdf6" id="u8feffdf6">加载图片的时机：</span></p><ul list="u45102ee9"><li fid="ub2bd12f8" data-lake-id="u605ab160" id="u605ab160"><span data-lake-id="ua2cd7e2e" id="ua2cd7e2e">​</span><code data-lake-id="u3944f2ee" id="u3944f2ee"><span data-lake-id="ubc925597" id="ubc925597">img[i].offsetTop &lt; 可视区域视图高度 + scrollTop</span></code></li></ul><p data-lake-id="u7fc71715" id="u7fc71715"><br></p><h1 data-lake-id="PBMk4" id="PBMk4"><span data-lake-id="u3388ab30" id="u3388ab30">15、说说</span><code data-lake-id="ud4add3cf" id="ud4add3cf"><span data-lake-id="u6d938c57" id="u6d938c57">jsonp</span></code><span data-lake-id="uc46208c2" id="uc46208c2">的原理</span></h1><p data-lake-id="uce53bdbd" id="uce53bdbd"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1654739236669-f84c6c1f-a135-470b-b8eb-4d21f0dd1fb9.png%22%2C%22taskId%22%3A%22ue7ecac9a-c2c8-4ece-8bc5-ddf8f1c84ae%22%2C%22clientId%22%3A%22u33fd68fe-cfcb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A569.9937744140625%2C%22height%22%3A612%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A501103%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1210%2C%22originHeight%22%3A1300%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%3CHTML%3E%20%3CBODY%3E%20%3CDIV%3E%20RECEIVE%20%3CSPAN%20ID-%5C%22QWERTY%5C%22%3E%20%3C%2FSPAN%3E%20%3C%2FDIV%3E%20%3C%2FBODY%3E%20%3CSCRIPT%3E%20CALLFUN(%20DAT%20FUNCTION%20DOCUMENT.GETELEMENTBYID(%5C%22QWERTY').INNERHTML%20DATA%3B%20%3C%2FSCRIPT%3E%20%3CSCRIPT%20SRC-%5C%22HTTP%3A%2F%2F127.0.0.1%3A10010%2FJS%3FZALL-CALLFUN%5C%22P%3C%2FSCRIPT%3E%20%3C%2FHTML%3E%20%E5%90%8E%E7%AB%AF%E4%BD%BF%E7%94%A8%E7%9A%84EGG.JS%2C%E6%A0%B8%E5%BF%83%E4%BB%A3%E7%A0%81%E5%8F%AA%E6%9C%89CTX.BODY%E9%82%A3%E4%B8%80%E5%8F%A5%20'USE%20STRICT'%3B%20CONST%20CONTROLLER%20-%20REQUIRE('EGG').CONTROLLER%3B%20CONTROLLER%20CLASS%20JSONPCONTROLLER%20EXTENDS%20ASYNC%20INDEX()%20CONST%7B%20CTX%20%7D%20-%20THIS%3B%20CONSOLE.LOG(CTX.QUERY)%3B%20'TEXT%2FJAVASCRIPT')%3B%20CTX.SET('CONTENT-TYPE'%2C%20CTX%2CBODY%20CTX%2CQUERY.CALL%20'(%5C%22NIHAO%5C%22)'%3B%20%E4%B8%BA%E4%BA%86%E8%AE%A9%E5%90%8E%E7%AB%AF%E7%9F%A5%E9%81%93%E6%88%91%E4%BB%AC%E5%89%8D%E7%AB%AF%E7%9A%84%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%8D%E5%AD%97%2C%E6%88%91%E4%BB%AC%E5%9C%A8SCRIPT%E7%9A%84%E8%AF%B7%E6%B1%82%20%E4%B8%AD%E5%8A%A0%E5%85%A5%E4%BA%86CALL-CALLFUN%E5%8F%82%E6%95%B0%2C%E5%90%8E%E7%AB%AF%20%E6%8E%A5%E6%94%B6%E5%88%B0CTX.QUERY.CALL%2C%E5%86%8D%E5%92%8C(%5C%22NIHAO%5C%22)%E5%90%88%E5%B9%B6%2C%E6%9C%80%E5%90%8E%E5%BD%A2%E6%88%90%E4%BA%86%E5%AD%97%E7%AC%A6%E4%B8%B2CALLFUN(%5C%22NIHAO%5C%22)%E8%BF%99%E4%B8%80%E5%8F%A5JS%E4%BB%A3%E7%A0%81%2C%E4%BC%A0%20%E5%88%B0%E5%89%8D%E7%AB%AF.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A30.186176%2C%22y%22%3A3.197723%2C%22width%22%3A87.013904%2C%22height%22%3A26.584185%2C%22text%22%3A%22%3CHTML%3E%22%7D%2C%7B%22x%22%3A59.427086%2C%22y%22%3A44.622147%2C%22width%22%3A91.49112399999999%2C%22height%22%3A27.746177000000003%2C%22text%22%3A%22%3CBODY%3E%22%7D%2C%7B%22x%22%3A89.38256%2C%22y%22%3A85.18746%2C%22width%22%3A74.96%2C%22height%22%3A22.811639999999997%2C%22text%22%3A%22%3CDIV%3E%22%7D%2C%7B%22x%22%3A122.07273%2C%22y%22%3A122.2838%2C%22width%22%3A495.89087000000006%2C%22height%22%3A25.899839999999998%2C%22text%22%3A%22RECEIVE%20%3CSPAN%20ID-%5C%22QWERTY%5C%22%3E%20%3C%2FSPAN%3E%22%7D%2C%7B%22x%22%3A90.17562%2C%22y%22%3A163.29803%2C%22width%22%3A85.95886%2C%22height%22%3A22.87666999999999%2C%22text%22%3A%22%3C%2FDIV%3E%22%7D%2C%7B%22x%22%3A59.03563%2C%22y%22%3A200.93222%2C%22width%22%3A106.31132%2C%22height%22%3A23.76442%2C%22text%22%3A%22%3C%2FBODY%3E%22%7D%2C%7B%22x%22%3A59.201836%2C%22y%22%3A240.02806%2C%22width%22%3A116.91406400000001%2C%22height%22%3A23.809439999999967%2C%22text%22%3A%22%3CSCRIPT%3E%22%7D%2C%7B%22x%22%3A222.66006%2C%22y%22%3A278.03912%2C%22width%22%3A146.91602%2C%22height%22%3A26.213229999999953%2C%22text%22%3A%22CALLFUN(%20DAT%22%7D%2C%7B%22x%22%3A89.67748%2C%22y%22%3A278.4487%2C%22width%22%3A120.25656000000001%2C%22height%22%3A26.646150000000034%2C%22text%22%3A%22FUNCTION%22%7D%2C%7B%22x%22%3A119.86246%2C%22y%22%3A318.06042%2C%22width%22%3A743.47504%2C%22height%22%3A24.395939999999996%2C%22text%22%3A%22DOCUMENT.GETELEMENTBYID(%5C%22QWERTY').INNERHTML%20DATA%3B%22%7D%2C%7B%22x%22%3A60.941887%2C%22y%22%3A394.95728%2C%22width%22%3A131.64475299999998%2C%22height%22%3A24.999719999999968%2C%22text%22%3A%22%3C%2FSCRIPT%3E%22%7D%2C%7B%22x%22%3A60.042564%2C%22y%22%3A429.3825%2C%22width%22%3A908.9413860000001%2C%22height%22%3A32.104870000000005%2C%22text%22%3A%22%3CSCRIPT%20SRC-%5C%22HTTP%3A%2F%2F127.0.0.1%3A10010%2FJS%3FZALL-CALLFUN%5C%22P%3C%2FSCRIPT%3E%22%7D%2C%7B%22x%22%3A30.429743%2C%22y%22%3A472.10373%2C%22width%22%3A102.62482700000001%2C%22height%22%3A24.56549000000001%2C%22text%22%3A%22%3C%2FHTML%3E%22%7D%2C%7B%22x%22%3A9.410989%2C%22y%22%3A571.5982%2C%22width%22%3A606.018711%2C%22height%22%3A28.177099999999996%2C%22text%22%3A%22%E5%90%8E%E7%AB%AF%E4%BD%BF%E7%94%A8%E7%9A%84EGG.JS%2C%E6%A0%B8%E5%BF%83%E4%BB%A3%E7%A0%81%E5%8F%AA%E6%9C%89CTX.BODY%E9%82%A3%E4%B8%80%E5%8F%A5%22%7D%2C%7B%22x%22%3A43.843857%2C%22y%22%3A673.288%2C%22width%22%3A166.192183%2C%22height%22%3A23.518599999999992%2C%22text%22%3A%22'USE%20STRICT'%3B%22%7D%2C%7B%22x%22%3A31.404425%2C%22y%22%3A746.61975%2C%22width%22%3A657.593745%2C%22height%22%3A30.641110000000026%2C%22text%22%3A%22CONST%20CONTROLLER%20-%20REQUIRE('EGG').CONTROLLER%3B%22%7D%2C%7B%22x%22%3A470.27887%2C%22y%22%3A789.1855%2C%22width%22%3A176.66163000000006%2C%22height%22%3A25.771959999999922%2C%22text%22%3A%22CONTROLLER%22%7D%2C%7B%22x%22%3A31.007618%2C%22y%22%3A790.0378%2C%22width%22%3A425.001282%2C%22height%22%3A23.664960000000065%2C%22text%22%3A%22CLASS%20JSONPCONTROLLER%20EXTENDS%22%7D%2C%7B%22x%22%3A59.21073%2C%22y%22%3A828.37445%2C%22width%22%3A219.98926999999998%2C%22height%22%3A29.914949999999976%2C%22text%22%3A%22ASYNC%20INDEX()%22%7D%2C%7B%22x%22%3A88.05679%2C%22y%22%3A865.5369%2C%22width%22%3A307.27796%2C%22height%22%3A28.411460000000034%2C%22text%22%3A%22CONST%7B%20CTX%20%7D%20-%20THIS%3B%22%7D%2C%7B%22x%22%3A89.75395%2C%22y%22%3A907.0072%2C%22width%22%3A333.63676999999996%2C%22height%22%3A28.38919999999996%2C%22text%22%3A%22CONSOLE.LOG(CTX.QUERY)%3B%22%7D%2C%7B%22x%22%3A449.81506%2C%22y%22%3A943.87665%2C%22width%22%3A270.70434%2C%22height%22%3A28.903500000000008%2C%22text%22%3A%22'TEXT%2FJAVASCRIPT')%3B%22%7D%2C%7B%22x%22%3A88.305824%2C%22y%22%3A945.05554%2C%22width%22%3A327.34673599999996%2C%22height%22%3A27.48496%2C%22text%22%3A%22CTX.SET('CONTENT-TYPE'%2C%22%7D%2C%7B%22x%22%3A92.74562%2C%22y%22%3A982.7129%2C%22width%22%3A367.84023%2C%22height%22%3A25.561199999999985%2C%22text%22%3A%22CTX%2CBODY%20CTX%2CQUERY.CALL%22%7D%2C%7B%22x%22%3A508.8063%2C%22y%22%3A983.5922%2C%22width%22%3A164.06099999999998%2C%22height%22%3A25.900199999999927%2C%22text%22%3A%22'(%5C%22NIHAO%5C%22)'%3B%22%7D%2C%7B%22x%22%3A9.330955%2C%22y%22%3A1160.2942%2C%22width%22%3A751.073345%2C%22height%22%3A28.963600000000042%2C%22text%22%3A%22%E4%B8%BA%E4%BA%86%E8%AE%A9%E5%90%8E%E7%AB%AF%E7%9F%A5%E9%81%93%E6%88%91%E4%BB%AC%E5%89%8D%E7%AB%AF%E7%9A%84%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%8D%E5%AD%97%2C%E6%88%91%E4%BB%AC%E5%9C%A8SCRIPT%E7%9A%84%E8%AF%B7%E6%B1%82%22%7D%2C%7B%22x%22%3A789.5417%2C%22y%22%3A1160.3115%2C%22width%22%3A377.7753%2C%22height%22%3A38.72219999999993%2C%22text%22%3A%22%E4%B8%AD%E5%8A%A0%E5%85%A5%E4%BA%86CALL-CALLFUN%E5%8F%82%E6%95%B0%2C%E5%90%8E%E7%AB%AF%22%7D%2C%7B%22x%22%3A8.570627%2C%22y%22%3A1199.7621%2C%22width%22%3A1178.441673%2C%22height%22%3A37.047199999999975%2C%22text%22%3A%22%E6%8E%A5%E6%94%B6%E5%88%B0CTX.QUERY.CALL%2C%E5%86%8D%E5%92%8C(%5C%22NIHAO%5C%22)%E5%90%88%E5%B9%B6%2C%E6%9C%80%E5%90%8E%E5%BD%A2%E6%88%90%E4%BA%86%E5%AD%97%E7%AC%A6%E4%B8%B2CALLFUN(%5C%22NIHAO%5C%22)%E8%BF%99%E4%B8%80%E5%8F%A5JS%E4%BB%A3%E7%A0%81%2C%E4%BC%A0%22%7D%2C%7B%22x%22%3A7.4088507%2C%22y%22%3A1247.9119%2C%22width%22%3A92.8696893%2C%22height%22%3A29.24389999999994%2C%22text%22%3A%22%E5%88%B0%E5%89%8D%E7%AB%AF.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23f2efee%22%2C%22id%22%3A%22ud9c10d62%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="uccd9442f" id="uccd9442f"><br></p><h1 data-lake-id="x3y9h" id="x3y9h"><span data-lake-id="uf374a7ff" id="uf374a7ff">16、各种循环的快慢</span></h1><p data-lake-id="u606e0fc7" id="u606e0fc7"><code data-lake-id="ua4ce4290" id="ua4ce4290"><span data-lake-id="uf292736f" id="uf292736f">while最快，其次for、最后for in </span></code></p><p data-lake-id="ue751d957" id="ue751d957"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1654613959790-a0908bf5-375e-491c-9314-acaad3b68bc4.png%22%2C%22taskId%22%3A%22ucd2778c3-7a1b-40b4-bd05-78c72aee384%22%2C%22clientId%22%3A%22u8d90aaeb-1258-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A798%2C%22height%22%3A562%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A474598%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1206%2C%22originHeight%22%3A850%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E5%BE%AA%E7%8E%AF%2CWHILE%E6%9C%80%E5%BF%AB%2C%E5%85%B6%E6%AC%A1FOR%2C%E6%9C%80%E5%90%8EFOR%20IN%20CONST%20LENGTH%20-%20ARRAY.LENGTH%3B%20LETI%200%3B%20SUM-0%3B%20SUNS%20FOR(CONST%20KEY%20IN%20ARRAY)%20WHILE%20(I%3CLENGTH)%20-ARRAY%5BKEY%5D%3B%20CONST%20ELEMENT%20CONST%20ELEMENT%20ARRAYLIL%3B%20ELEMENT%3B%20SUM%2B%E4%B8%89%20SUM%2BELEMENT%3B%20141MS%204MS%20FOR(LETII0%3BI%3CARRAY.LENGTH%3BI%2B%2B%2B%2B%2B%20CONST%20ELEMENT%20-%20ARRAY%5BIL%3B%20SUM%2BELEMENT%3B%20Y%2012MS%20CODE%E7%A7%98%E5%AF%86%E8%8A%B1%E5%9B%AD%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A29.65749%2C%22y%22%3A16.47008%2C%22width%22%3A501.44865%2C%22height%22%3A35.31815%2C%22text%22%3A%22%E5%BE%AA%E7%8E%AF%2CWHILE%E6%9C%80%E5%BF%AB%2C%E5%85%B6%E6%AC%A1FOR%2C%E6%9C%80%E5%90%8EFOR%20IN%22%7D%2C%7B%22x%22%3A133.31783%2C%22y%22%3A152.89183%2C%22width%22%3A312.42912%2C%22height%22%3A24.760320000000007%2C%22text%22%3A%22CONST%20LENGTH%20-%20ARRAY.LENGTH%3B%22%7D%2C%7B%22x%22%3A129.6203%2C%22y%22%3A176.73326%2C%22width%22%3A111.30533000000003%2C%22height%22%3A18.401639999999986%2C%22text%22%3A%22LETI%200%3B%22%7D%2C%7B%22x%22%3A708.5004%2C%22y%22%3A182.23709%2C%22width%22%3A91.2672%2C%22height%22%3A22.459339999999997%2C%22text%22%3A%22SUM-0%3B%22%7D%2C%7B%22x%22%3A129.06683%2C%22y%22%3A198.65308%2C%22width%22%3A82.36216999999999%2C%22height%22%3A18.93446%2C%22text%22%3A%22SUNS%22%7D%2C%7B%22x%22%3A708.12646%2C%22y%22%3A206.7038%2C%22width%22%3A303.91854%2C%22height%22%3A27.36435%2C%22text%22%3A%22FOR(CONST%20KEY%20IN%20ARRAY)%22%7D%2C%7B%22x%22%3A128.2668%2C%22y%22%3A219.07272%2C%22width%22%3A230.28014000000002%2C%22height%22%3A21.71195%2C%22text%22%3A%22WHILE%20(I%3CLENGTH)%22%7D%2C%7B%22x%22%3A894.6131%2C%22y%22%3A233.34366%2C%22width%22%3A148.8989999999999%2C%22height%22%3A26.764920000000018%2C%22text%22%3A%22-ARRAY%5BKEY%5D%3B%22%7D%2C%7B%22x%22%3A732.639%2C%22y%22%3A237.52133%2C%22width%22%3A153.18503999999996%2C%22height%22%3A18.337009999999992%2C%22text%22%3A%22CONST%20ELEMENT%22%7D%2C%7B%22x%22%3A153.15517%2C%22y%22%3A241.07625%2C%22width%22%3A283.12046%2C%22height%22%3A22.14685%2C%22text%22%3A%22CONST%20ELEMENT%20ARRAYLIL%3B%22%7D%2C%7B%22x%22%3A794.6704%2C%22y%22%3A263.03134%2C%22width%22%3A108.19355000000007%2C%22height%22%3A19.763260000000002%2C%22text%22%3A%22ELEMENT%3B%22%7D%2C%7B%22x%22%3A732.1118%2C%22y%22%3A264.909%2C%22width%22%3A75.1404%2C%22height%22%3A16.506039999999985%2C%22text%22%3A%22SUM%2B%E4%B8%89%22%7D%2C%7B%22x%22%3A152.46248%2C%22y%22%3A267.91382%2C%22width%22%3A171.92192000000003%2C%22height%22%3A18.581110000000024%2C%22text%22%3A%22SUM%2BELEMENT%3B%22%7D%2C%7B%22x%22%3A807.1076%2C%22y%22%3A368.64032%2C%22width%22%3A87.07899999999995%2C%22height%22%3A24.549180000000035%2C%22text%22%3A%22141MS%22%7D%2C%7B%22x%22%3A207.13934%2C%22y%22%3A379.69434%2C%22width%22%3A62.27303999999998%2C%22height%22%3A24.700440000000015%2C%22text%22%3A%224MS%22%7D%2C%7B%22x%22%3A328.7612%2C%22y%22%3A611.7384%2C%22width%22%3A492.4710400000001%2C%22height%22%3A25.499450000000024%2C%22text%22%3A%22FOR(LETII0%3BI%3CARRAY.LENGTH%3BI%2B%2B%2B%2B%2B%22%7D%2C%7B%22x%22%3A354.92767%2C%22y%22%3A641.1147%2C%22width%22%3A306.37453%2C%22height%22%3A24.817549999999983%2C%22text%22%3A%22CONST%20ELEMENT%20-%20ARRAY%5BIL%3B%22%7D%2C%7B%22x%22%3A352.39343%2C%22y%22%3A672.83954%2C%22width%22%3A188.57216999999997%2C%22height%22%3A21.396259999999984%2C%22text%22%3A%22SUM%2BELEMENT%3B%22%7D%2C%7B%22x%22%3A327.59683%2C%22y%22%3A693.9692%2C%22width%22%3A15.348599999999976%2C%22height%22%3A30.354649999999992%2C%22text%22%3A%22Y%22%7D%2C%7B%22x%22%3A504.11877%2C%22y%22%3A788.72064%2C%22width%22%3A76.02369000000004%2C%22height%22%3A28.76189999999997%2C%22text%22%3A%2212MS%22%7D%2C%7B%22x%22%3A986.6466%2C%22y%22%3A796.5777%2C%22width%22%3A215.77520000000004%2C%22height%22%3A41.44189999999992%2C%22text%22%3A%22CODE%E7%A7%98%E5%AF%86%E8%8A%B1%E5%9B%AD%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23747e83%22%2C%22id%22%3A%22ub0de0a96%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ucb696392" id="ucb696392"><br></p><p data-lake-id="u7d41a682" id="u7d41a682"><br></p><h1 data-lake-id="WQieP" id="WQieP"><span data-lake-id="ud025aee3" id="ud025aee3">17、自己实现</span><code data-lake-id="u56deeaee" id="u56deeaee"><span data-lake-id="uf2afeba3" id="uf2afeba3">Array.prototype.splice\0</span></code></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22Array.prototype.splice%20%3D%20Array.prototype.splice%20%7C%7C%20function%20(start%2C%20deleteCount%2C%20...addList)%20%7B%5Cn%5Cn%20%20%20%20%2F%2F%2F%2F%20%3A%3A%3A%3A%20%E5%A4%84%E7%90%86%E5%BC%80%E5%A7%8B%20startIndex%5Cn%20%20%20%20if%20(start%20%3C%200)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(Math.abs(start)%20%3E%20this.length)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20start%20%3D%200%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20start%20%2B%3D%20this.length%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%A4%84%E7%90%86%E5%88%A0%E9%99%A4%E7%9A%84%E7%9A%84%E4%B8%AA%E6%95%B0%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%B2%A1%E4%BC%A0%EF%BC%8C%E7%9B%B4%E6%8E%A5%E7%AD%89%E4%BA%8E%E9%95%BF%E5%BA%A6%20-%20start%5Cn%20%20%20%20if%20(typeof%20deleteCount%20%3D%3D%3D%20'undefined')%20%7B%5Cn%20%20%20%20%20%20%20%20deleteCount%20%3D%20this.length%20-%20start%5Cn%20%20%20%20%7D%5Cn%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%A4%84%E7%90%86%EF%BC%8C%E7%A7%BB%E9%99%A4%E7%9A%84%5Cn%20%20%20%20const%20removeList%20%3D%20this.slice(start%2C%20start%20%2B%20deleteCount)%5Cn%20%20%5Cn%20%20%20%20const%20right%20%3D%20this.slice(start%20%2B%20deleteCount)%5Cn%5Cn%20%20%20%20%2F%2F%2F%2F%20%3A%3A%3A%3A%20%E9%87%8D%E6%96%B0%E4%BF%AE%E6%94%B9this%20-%3E%20%E5%8E%9F%E6%95%B0%E7%BB%84%20%EF%BC%8C%E5%8D%B3%E5%8A%A0%E5%85%A5addlist%E6%95%B0%E7%BB%84%E7%89%87%E6%AE%B5%20%2B%20right%E5%89%A9%E4%BD%99%E7%9A%84%E6%95%B0%E7%BB%84%E7%89%87%E6%AE%B5%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%20%E5%85%B3%E9%94%AE%E6%98%AF%E8%BF%99%E9%87%8C%EF%BC%8C%E6%B2%A1%E6%9C%89%E5%8F%91%E7%8E%B0%E6%89%80%E8%B0%93%E7%9A%84left%2C%E5%9B%A0%E4%B8%BAleft%E8%BF%98%E5%9C%A8this%E9%87%8C%E5%91%A2%EF%BC%8C%E4%B9%9F%E5%B0%B1%E6%98%AF%E6%9C%AC%E8%BA%AB%E6%B2%A1%E5%8F%98%5Cn%20%20%5Cn%20%20%20%20let%20addIndex%20%3D%20start%5Cn%20%20%20%20addList.concat(right).forEach(item%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this%5BaddIndex%5D%20%3D%20item%5Cn%20%20%20%20%20%20%20%20addIndex%2B%2B%5Cn%20%20%20%20%7D)%5Cn%5Cn%20%20%20%20this.length%20%3D%20addIndex%5Cn%5Cn%20%20%20%20return%20removeList%5Cn%7D%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B2%2C11%2C22%2C24%2C27%2C30%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22PgkKE%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u5b1241f8" id="u5b1241f8"><br></p><p data-lake-id="ua17e4baa" id="ua17e4baa"><br></p><h1 data-lake-id="JaZ1p" id="JaZ1p" collapsed="true"><span data-lake-id="u7a4d4585" id="u7a4d4585">18、实现</span><code data-lake-id="u86e9fd7d" id="u86e9fd7d"><span data-lake-id="u4190332f" id="u4190332f">1,2,3,5,7,8,9</span></code><span data-lake-id="u64a38768" id="u64a38768">  =&gt;  </span><code data-lake-id="u0a17ae6d" id="u0a17ae6d"><span data-lake-id="uf7940f1c" id="uf7940f1c">1~3,5,7~9\0</span></code></h1><p data-lake-id="uf7a8c8a9" id="uf7a8c8a9"><br></p><p data-lake-id="ubc2b0b0a" id="ubc2b0b0a"><span data-lake-id="ufc6e07b5" id="ufc6e07b5">没啥技巧，也不用再想了，如果真出现，写出下面的写法就OK了</span></p><p data-lake-id="u67a421f1" id="u67a421f1"><span data-lake-id="ufd0af3e9" id="ufd0af3e9">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F**%5Cn%20*%201%2C2%2C3%2C5%2C7%2C8%2C9%20%20%3D%3E%20%201~3%2C5%2C7~9%5Cn%20*%201%2C2%2C3%2C5%2C7%2C8%2C10%2C12%2C13%2C14%2C100%2C101%2C102%20%20%20%3D%3E%20%20%201~3%2C5%2C7~8%2C10%2C12~14%2C100~102%5Cn%20*%20*%2F%5Cnfunction%20fn(str)%20%7B%5Cn%20%20%20%20let%20arr%20%3D%20str.split('%2C').map(Number)%3B%5Cn%20%20%20%20let%20len%20%3D%20arr.length%3B%5Cn%20%20%20%20let%20s%20%3D%20new%20Array(len).fill(false)%3B%5Cn%20%20%20%20%2F%2F%20%E7%AC%AC%E4%B8%80%E6%AD%A5%5Cn%20%20%20%20s%5B0%5D%20%3D%20arr%5B0%5D%3B%5Cn%20%20%20%20%2F%2F%20%E7%AC%AC%E4%BA%8C%E6%AD%A5%20%E9%81%8D%E5%8E%86%5Cn%20%20%20%20for%20(let%20i%20%3D%201%3B%20i%20%3C%20len%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20let%20item%20%3D%20arr%5Bi%5D%3B%5Cn%20%20%20%20%20%20%20%20let%20prev%20%3D%20arr%5Bi%20-%201%5D%3B%5Cn%20%20%20%20%20%20%20%20let%20next%20%3D%20arr%5Bi%20%2B%201%5D%3B%5Cn%20%20%20%20%20%20%20%20if%20(prev%20%26%26%20next%20%26%26%20item%20%3D%3D%3D%20prev%20%2B%201%20%26%26%20next%20%3D%3D%3D%20item%20%2B%201)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20continue%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(prev%20%26%26%20next%20%26%26%20item%20%3D%3D%3D%20prev%20%2B%201%20%26%26%20next%20!%3D%3D%20item%20%2B%201)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20s%5Bi%5D%20%3D%20%60~%24%7Barr%5Bi%5D%7D%60%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(prev%20%26%26%20next%20%26%26%20(item%20!%3D%3D%20prev%20%2B%201%20%7C%7C%20next%20!%3D%3D%20item%20%2B%201))%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20s%5Bi%5D%20%3D%20%60%24%7Barr%5Bi%5D%7D%60%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(prev%20%26%26%20!next)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20if%20(item%20%3D%3D%3D%20prev%20%2B%201)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s%5Bi%5D%20%3D%20%60~%24%7Barr%5Bi%5D%7D%60%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s%5Bi%5D%20%3D%20%60%24%7Barr%5Bi%5D%7D%60%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%2F%2F%20%E7%AC%AC%E4%B8%89%E6%AD%A5%20%E5%A4%84%E7%90%86%E7%A9%BA%E5%80%BC%E6%83%85%E5%86%B5%5Cn%20%20%20%20return%20s.filter(Boolean).join('%2C').replace(%2F%2C~%2Fg%2C%20'~')%5Cn%7D%5Cn%5Cnlet%20str%20%3D%20'1%2C2%2C3%2C5%2C7%2C8%2C10%2C12%2C13%2C14%2C100%2C101%2C102'%3B%5Cn%5Cnconsole.log(fn('1%2C2%2C3%2C5%2C7%2C8%2C9'))%3B%5Cnconsole.log(fn('1%2C2%2C3%2C5%2C7%2C8%2C10%2C12%2C13%2C14%2C100%2C101%2C102'))%3B%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E9%81%8D%E5%8E%86%EF%BC%8C%E5%A4%84%E7%90%86current%2Fprev%2Fnext%E5%80%BC%E5%8D%B3%E5%8F%AF%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22CtJqv%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u9b0399bc" id="u9b0399bc"><br></p><h1 data-lake-id="WWdFG" id="WWdFG"><span data-lake-id="ua8f244c7" id="ua8f244c7">19、要求设计 </span><code data-lake-id="u11e87d9b" id="u11e87d9b"><span data-lake-id="u6d31398d" id="u6d31398d">LazyMan</span></code><span data-lake-id="uab011968" id="uab011968"> 类，实现以下功能\0</span></h1><p data-lake-id="u2b9c2a30" id="u2b9c2a30"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22LazyMan('Tony')%3B%5Cn%2F%2F%20Hi%20I%20am%20Tony%5Cn%5CnLazyMan('Tony').sleep(10).eat('lunch')%3B%5Cn%2F%2F%20Hi%20I%20am%20Tony%5Cn%2F%2F%20%E7%AD%89%E5%BE%85%E4%BA%8610%E7%A7%92...%5Cn%2F%2F%20I%20am%20eating%20lunch%5Cn%5CnLazyMan('Tony').eat('lunch').sleep(10).eat('dinner')%3B%5Cn%2F%2F%20Hi%20I%20am%20Tony%5Cn%2F%2F%20I%20am%20eating%20lunch%5Cn%2F%2F%20%E7%AD%89%E5%BE%85%E4%BA%8610%E7%A7%92...%5Cn%2F%2F%20I%20am%20eating%20diner%5Cn%5CnLazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk%20food')%3B%5Cn%2F%2F%20Hi%20I%20am%20Tony%5Cn%2F%2F%20%E7%AD%89%E5%BE%85%E4%BA%865%E7%A7%92...%5Cn%2F%2F%20I%20am%20eating%20lunch%5Cn%2F%2F%20I%20am%20eating%20dinner%5Cn%2F%2F%20%E7%AD%89%E5%BE%85%E4%BA%8610%E7%A7%92...%5Cn%2F%2F%20I%20am%20eating%20junk%20food%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22T7ydj%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u24629085" id="u24629085"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22class%20LazyManClass%20%7B%5Cn%20%20%20%20constructor(name)%20%7B%5Cn%20%20%20%20%20%20%20%20this.taskList%20%3D%20%5B%5D%3B%5Cn%20%20%20%20%20%20%20%20this.name%20%3D%20name%3B%5Cn%20%20%20%20%20%20%20%20console.log(%60Hi%20I%20am%20%24%7Bthis.name%7D%60)%3B%5Cn%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.next()%3B%5Cn%20%20%20%20%20%20%20%20%7D%2C%200)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20eat%20(name)%20%7B%5Cn%20%20%20%20%20%20%20%20var%20that%20%3D%20this%3B%5Cn%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%BF%99%E9%87%8C%E5%8C%85%E8%A3%85%E4%BA%86%E4%B8%80%E4%B8%8B%EF%BC%8C%E6%94%BE%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E9%87%8C%E9%9D%A2%5Cn%20%20%20%20%20%20%20%20var%20fn%20%3D%20(function%20(n)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20function%20()%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60I%20am%20eating%20%24%7Bn%7D%60)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20that.next()%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D)(name)%3B%5Cn%5Cn%20%20%20%20%20%20%20%20this.taskList.push(fn)%3B%5Cn%5Cn%20%20%20%20%20%20%20%20return%20this%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20sleepFirst%20(time)%20%7B%5Cn%20%20%20%20%20%20%20%20var%20that%20%3D%20this%3B%5Cn%20%20%20%20%20%20%20%20var%20fn%20%3D%20(function%20(t)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20function%20()%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60%E7%AD%89%E5%BE%85%E4%BA%86%24%7Bt%7D%E7%A7%92...%60)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20that.next()%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20t%20*%201000)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D)(time)%3B%5Cn%20%20%20%20%20%20%20%20%20%2F%2F%20%E4%BC%98%E5%85%88%E7%BA%A7%E8%BE%83%E9%AB%98%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%20%20this.taskList.unshift(fn)%3B%5Cn%20%20%20%20%20%20%20%20return%20this%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20sleep%20(time)%20%7B%5Cn%20%20%20%20%20%20%20%20var%20that%20%3D%20this%5Cn%20%20%20%20%20%20%20%20var%20fn%20%3D%20(function%20(t)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20function%20()%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60%E7%AD%89%E5%BE%85%E4%BA%86%24%7Bt%7D%E7%A7%92...%60)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20that.next()%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20t%20*%201000)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D)(time)%3B%5Cn%20%20%20%20%20%20%20%20this.taskList.push(fn)%3B%5Cn%20%20%20%20%20%20%20%20return%20this%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20next%20()%20%7B%5Cn%20%20%20%20%20%20%20%20var%20fn%20%3D%20this.taskList.shift()%3B%5Cn%20%20%20%20%20%20%20%20fn%20%26%26%20fn()%3B%5Cn%20%20%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20LazyMan(name)%20%7B%5Cn%20%20%20%20return%20new%20LazyManClass(name)%3B%5Cn%7D%5Cn%5CnLazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk%20food')%3B%5Cn%5Cn%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B2%2C5%2C12%2C34%2C36%2C49%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22NpSBk%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uf4b3e59b" id="uf4b3e59b"><br></p><p data-lake-id="u598a4a79" id="u598a4a79"><br></p><h1 data-lake-id="hcLfs" id="hcLfs"><span data-lake-id="uaf19cd6e" id="uaf19cd6e">20、几个异步代码的执行结果</span></h1><p data-lake-id="u0a5f7ebf" id="u0a5f7ebf"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20wait()%20%7B%5Cn%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%5Cn%20%20%20%20%20%20%20%20setTimeout(resolve%2C%201000)%5Cn%20%20%20%20)%5Cn%7D%5Cn%5Cnasync%20function%20main()%20%7B%5Cn%20%20%20%20console.time()%3B%5Cn%20%20%20%20await%20wait()%3B%5Cn%20%20%20%20await%20wait()%3B%5Cn%20%20%20%20await%20wait()%3B%5Cn%20%20%20%20%2F%2F%20default%3A%203.008s%20%EF%BC%8C%5Cn%20%20%20%20%2F%2F%20%E4%B8%89%E4%B8%AA%E4%B8%B2%E8%A1%8C%EF%BC%8C%E4%BA%92%E7%9B%B8%E4%BE%9D%E8%B5%96%5Cn%20%20%20%20console.timeEnd()%3B%5Cn%7D%5Cn%5Cnmain()%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%B8%89%E4%B8%AA%E4%B8%B2%E8%A1%8C%EF%BC%8C%E4%BA%92%E7%9B%B8%E4%BE%9D%E8%B5%96%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22DvbdO%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u2a9f2468" id="u2a9f2468"><br></p><p data-lake-id="uf4a4b467" id="uf4a4b467"><span data-lake-id="uae9ac1ce" id="uae9ac1ce">改成如下呢？</span></p><p data-lake-id="ub94d304e" id="ub94d304e"><span data-lake-id="u66031683" id="u66031683">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20wait()%20%7B%5Cn%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%5Cn%20%20%20%20%20%20%20%20setTimeout(resolve%2C%20%201000)%5Cn%20%20%20%20)%5Cn%7D%5Cn%5Cn%2F%2F%20%E5%85%88%E8%AF%B4%E7%BB%93%E6%9E%9C%EF%BC%8C%E7%AD%89%E5%BE%851%E7%A7%92%EF%BC%8C%E5%90%8C%E6%AD%A5%E6%89%A7%E8%A1%8C%E3%80%82%5Cnasync%20function%20main()%20%7B%5Cn%20%20%20%20console.time()%3B%5Cn%20%20%20%20let%20a%20%3D%20wait()%3B%5Cn%20%20%20%20let%20b%20%3D%20wait()%3B%5Cn%20%20%20%20let%20c%20%3D%20wait()%3B%5Cn%20%20%20%20await%20a%3B%5Cn%20%20%20%20await%20b%3B%5Cn%20%20%20%20await%20c%3B%5Cn%20%20%20%20console.timeEnd()%3B%5Cn%20%20%20%20%2F%2F%20default%3A%201.002s%5Cn%7D%5Cnmain()%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF1s%3F%3F%3F%3F%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B16%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22vp7wE%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uc3615237" id="uc3615237"><br></p><p data-lake-id="u12d3f3a0" id="u12d3f3a0"><strong><span data-lake-id="u1b65ed46" id="u1b65ed46" style="color: #E8323C">解释如下：</span></strong></p><p data-lake-id="u85c8c133" id="u85c8c133"><strong><span data-lake-id="ud1efef15" id="ud1efef15" style="color: #E8323C">​</span></strong><br></p><p data-lake-id="u260adfe4" id="u260adfe4"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671088379697-9462a341-b626-4b30-be45-17a397496396.png%22%2C%22taskId%22%3A%22u44c2ae8f-d92d-4767-8752-491f28d9c67%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A712%2C%22height%22%3A430%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A222610%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1780%2C%22originHeight%22%3A1076%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%E5%85%88%E8%AF%B4%E7%BB%93%E6%9E%9C%2C%E5%A4%A7%E6%A6%8230%E7%A7%92%E5%A4%9A%E7%82%B9%2C30%E7%A7%92%E6%98%AF%E5%9B%A0%E4%B8%BA%E6%AF%8F%E4%B8%AA%E7%AD%89%E5%BE%8510%E7%A7%92%2C%E5%90%8C%E6%AD%A5%E6%89%A7%E8%A1%8C.%20%E5%85%B6%E5%AE%9E%E8%BF%98%E6%9C%89%E4%B8%80%E4%B8%AA%E5%8F%98%E7%A7%8D%3A%20%20FUNCTION%20WAIT()%20%7B%20RETURN%20NEW%20PROMISE(RESOLVE%20%3E%20SETTIMEOUT(RESOLVE%2C10*1000)%20%E4%BA%86%20%20ASYNC%20FUNCTION%20MAIN()%20%7B%20CONSOLE.TIME()%3B%20LET%20A%20WAIT()%3B%20LET%20B%20%E4%B8%89%20WAIT()%3B%20LET%20C%20%E4%B8%89%20WAIT()%3B%20AWAIT%20A%3B%20AWAIT%20B%3B%20AWAIT%20C%3B%20CONSOLE.TIMEEND()%3B%20%7D%20MAIN()%3B%20%E7%AD%89%E5%88%B0WAIT%E7%9A%84%E6%97%B6%20%E8%BF%99%E4%B8%AA%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4%E6%98%AF10S%E5%A4%9A%E4%B8%80%E7%82%B9%2C%E8%BF%99%E6%98%AF%E5%9B%A0%E4%B8%BA%3BA%2CB.C%E7%9A%84%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82%E4%BC%9A%E6%8C%89%E9%A1%BA%E5%BA%8F%E5%8F%91%E8%B5%B7.%E8%80%8C%E8%BF%99%E4%B8%AA%E8%BF%87%E7%A8%8B%E6%98%AF%E4%B8%8D%E9%9C%80%E8%A6%81%E4%BA%92%E7%9B%B8%E4%BE%9D%E8%B5%96%E7%AD%89%E5%BE%85%E7%9A%84%20%E5%80%99%2C%E5%85%B6%E5%AE%9E%E6%98%AF%E6%AF%94%E8%BE%83%E9%82%A3%E4%B8%AA%E5%BC%82%E6%AD%A5%E8%80%97%E6%97%B6%E6%9C%80%E5%A4%9A.%E5%B0%B1%E4%BC%9A%E7%AD%89%E5%BE%85%E6%9C%80%E9%95%BF.%E6%9C%80%E9%95%BF%E7%9A%84%E8%80%97%E6%97%B6%E5%B0%B1%E6%98%AF%E6%95%B4%E4%BD%93%E7%9A%84%E8%80%97%E6%97%B6.%20%E5%A6%82%E6%9E%9C%E5%9C%A8%E4%B8%9A%E5%8A%A1%E4%B8%AD%2C%E4%B8%A4%E4%B8%AA%E5%BC%82%E6%AD%A5%E6%B2%A1%E6%9C%89%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB.%E5%BA%94%E8%AF%A5%E6%98%AF%E5%90%8E%E9%9D%A2%E8%BF%99%E7%A7%8D%E5%86%99%E6%B3%95.%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A54.27032%2C%22y%22%3A56.69684%2C%22width%22%3A816.00068%2C%22height%22%3A31.965610000000005%2C%22text%22%3A%22%E5%85%88%E8%AF%B4%E7%BB%93%E6%9E%9C%2C%E5%A4%A7%E6%A6%8230%E7%A7%92%E5%A4%9A%E7%82%B9%2C30%E7%A7%92%E6%98%AF%E5%9B%A0%E4%B8%BA%E6%AF%8F%E4%B8%AA%E7%AD%89%E5%BE%8510%E7%A7%92%2C%E5%90%8C%E6%AD%A5%E6%89%A7%E8%A1%8C.%22%7D%2C%7B%22x%22%3A56.58051%2C%22y%22%3A100.65443%2C%22width%22%3A233.47604%2C%22height%22%3A29.175329999999988%2C%22text%22%3A%22%E5%85%B6%E5%AE%9E%E8%BF%98%E6%9C%89%E4%B8%80%E4%B8%AA%E5%8F%98%E7%A7%8D%3A%22%7D%2C%7B%22x%22%3A87.89419%2C%22y%22%3A201.6345%2C%22width%22%3A246.38035000000002%2C%22height%22%3A27.16524000000001%2C%22text%22%3A%22%20FUNCTION%20WAIT()%20%7B%22%7D%2C%7B%22x%22%3A119.92492%2C%22y%22%3A239.59085%2C%22width%22%3A404.39912%2C%22height%22%3A26.02161000000001%2C%22text%22%3A%22RETURN%20NEW%20PROMISE(RESOLVE%20%3E%22%7D%2C%7B%22x%22%3A139.78287%2C%22y%22%3A274.53015%2C%22width%22%3A439.31822999999997%2C%22height%22%3A25.07868000000002%2C%22text%22%3A%22SETTIMEOUT(RESOLVE%2C10*1000)%22%7D%2C%7B%22x%22%3A86.21875%2C%22y%22%3A340.70312%2C%22width%22%3A16.6875%2C%22height%22%3A29.203129999999987%2C%22text%22%3A%22%E4%BA%86%22%7D%2C%7B%22x%22%3A83.879974%2C%22y%22%3A412.56882%2C%22width%22%3A339.178806%2C%22height%22%3A29.806519999999978%2C%22text%22%3A%22%20ASYNC%20FUNCTION%20MAIN()%20%7B%22%7D%2C%7B%22x%22%3A118.29186%2C%22y%22%3A447.91003%2C%22width%22%3A205.50898%2C%22height%22%3A26.645629999999983%2C%22text%22%3A%22CONSOLE.TIME()%3B%22%7D%2C%7B%22x%22%3A117.2616%2C%22y%22%3A482.71732%2C%22width%22%3A75.50823999999999%2C%22height%22%3A23.698480000000018%2C%22text%22%3A%22LET%20A%22%7D%2C%7B%22x%22%3A229.2455%2C%22y%22%3A483.8057%2C%22width%22%3A100.92515000000003%2C%22height%22%3A26.23394000000002%2C%22text%22%3A%22WAIT()%3B%22%7D%2C%7B%22x%22%3A119.45699%2C%22y%22%3A516.74506%2C%22width%22%3A211.74061%2C%22height%22%3A27.859000000000037%2C%22text%22%3A%22LET%20B%20%E4%B8%89%20WAIT()%3B%22%7D%2C%7B%22x%22%3A117.44157%2C%22y%22%3A551.1681%2C%22width%22%3A214.57702999999998%2C%22height%22%3A27.717700000000036%2C%22text%22%3A%22LET%20C%20%E4%B8%89%20WAIT()%3B%22%7D%2C%7B%22x%22%3A114.89862%2C%22y%22%3A589.5287%2C%22width%22%3A74.03609%2C%22height%22%3A20.91734000000008%2C%22text%22%3A%22AWAIT%22%7D%2C%7B%22x%22%3A200.81934%2C%22y%22%3A591.17566%2C%22width%22%3A29.79079999999999%2C%22height%22%3A22.46727999999996%2C%22text%22%3A%22A%3B%22%7D%2C%7B%22x%22%3A114.05912%2C%22y%22%3A622.4187%2C%22width%22%3A115.76411%2C%22height%22%3A23.640600000000063%2C%22text%22%3A%22AWAIT%20B%3B%22%7D%2C%7B%22x%22%3A114.484695%2C%22y%22%3A658.1995%2C%22width%22%3A118.431865%2C%22height%22%3A23.000760000000014%2C%22text%22%3A%22AWAIT%20C%3B%22%7D%2C%7B%22x%22%3A113.86785%2C%22y%22%3A692.0971%2C%22width%22%3A263.48209999999995%2C%22height%22%3A28.36970000000008%2C%22text%22%3A%22CONSOLE.TIMEEND()%3B%22%7D%2C%7B%22x%22%3A83.60173%2C%22y%22%3A721.55865%2C%22width%22%3A18.3373%2C%22height%22%3A29.756720000000087%2C%22text%22%3A%22%7D%22%7D%2C%7B%22x%22%3A85.277084%2C%22y%22%3A760.4389%2C%22width%22%3A102.220066%2C%22height%22%3A25.583439999999996%2C%22text%22%3A%22MAIN()%3B%22%7D%2C%7B%22x%22%3A1490.618%2C%22y%22%3A862.0461%2C%22width%22%3A168.1286%2C%22height%22%3A31.647399999999948%2C%22text%22%3A%22%E7%AD%89%E5%88%B0WAIT%E7%9A%84%E6%97%B6%22%7D%2C%7B%22x%22%3A55.21971%2C%22y%22%3A858.3127%2C%22width%22%3A1411.98399%2C%22height%22%3A39.08433000000002%2C%22text%22%3A%22%E8%BF%99%E4%B8%AA%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4%E6%98%AF10S%E5%A4%9A%E4%B8%80%E7%82%B9%2C%E8%BF%99%E6%98%AF%E5%9B%A0%E4%B8%BA%3BA%2CB.C%E7%9A%84%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82%E4%BC%9A%E6%8C%89%E9%A1%BA%E5%BA%8F%E5%8F%91%E8%B5%B7.%E8%80%8C%E8%BF%99%E4%B8%AA%E8%BF%87%E7%A8%8B%E6%98%AF%E4%B8%8D%E9%9C%80%E8%A6%81%E4%BA%92%E7%9B%B8%E4%BE%9D%E8%B5%96%E7%AD%89%E5%BE%85%E7%9A%84%22%7D%2C%7B%22x%22%3A63.50303%2C%22y%22%3A904.9464%2C%22width%22%3A984.5173700000001%2C%22height%22%3A31.289260000000013%2C%22text%22%3A%22%E5%80%99%2C%E5%85%B6%E5%AE%9E%E6%98%AF%E6%AF%94%E8%BE%83%E9%82%A3%E4%B8%AA%E5%BC%82%E6%AD%A5%E8%80%97%E6%97%B6%E6%9C%80%E5%A4%9A.%E5%B0%B1%E4%BC%9A%E7%AD%89%E5%BE%85%E6%9C%80%E9%95%BF.%E6%9C%80%E9%95%BF%E7%9A%84%E8%80%97%E6%97%B6%E5%B0%B1%E6%98%AF%E6%95%B4%E4%BD%93%E7%9A%84%E8%80%97%E6%97%B6.%22%7D%2C%7B%22x%22%3A57.104336%2C%22y%22%3A978.5656%2C%22width%22%3A770.249564%2C%22height%22%3A30.410049999999956%2C%22text%22%3A%22%E5%A6%82%E6%9E%9C%E5%9C%A8%E4%B8%9A%E5%8A%A1%E4%B8%AD%2C%E4%B8%A4%E4%B8%AA%E5%BC%82%E6%AD%A5%E6%B2%A1%E6%9C%89%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB.%E5%BA%94%E8%AF%A5%E6%98%AF%E5%90%8E%E9%9D%A2%E8%BF%99%E7%A7%8D%E5%86%99%E6%B3%95.%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2313171b%22%2C%22id%22%3A%22u93d36360%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u9f476a00" id="u9f476a00"><br></p><p data-lake-id="u63c2c638" id="u63c2c638"><br></p><h1 data-lake-id="w9I25" id="w9I25"><span data-lake-id="u5abf7c1c" id="u5abf7c1c">21、看下面代码如何输出</span></h1><p data-lake-id="u617a5914" id="u617a5914"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22const%20list%20%3D%20%5B1%2C%202%2C%203%5D%5Cnconst%20square%20%3D%20num%20%3D%3E%20%7B%5Cn%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20resolve(num%20*%20num)%5Cn%20%20%20%20%20%20%20%20%7D%2C%201000)%5Cn%20%20%20%20%7D)%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22kkTRZ%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u7fb213f2" id="u7fb213f2"><br></p><p data-lake-id="uff5b3abd" id="uff5b3abd"><span data-lake-id="uf7c2d34b" id="uf7c2d34b">使用</span><code data-lake-id="u2a394a23" id="u2a394a23"><span data-lake-id="uaaca7bd6" id="uaaca7bd6">forEach</span></code><span data-lake-id="u4af595d3" id="u4af595d3"> , 隔 </span><code data-lake-id="u4ed9b9e6" id="u4ed9b9e6"><span data-lake-id="u30df5203" id="u30df5203">1s</span></code><span data-lake-id="udb90c05b" id="udb90c05b"> ，输出 </span><code data-lake-id="ub97a2aea" id="ub97a2aea"><span data-lake-id="ub94ccbd6" id="ub94ccbd6">1/4/9</span></code><span data-lake-id="u7165c4d7" id="u7165c4d7"> </span></p><p data-lake-id="uad0b07d0" id="uad0b07d0"><span data-lake-id="u83142adc" id="u83142adc">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F%2F%20foreach%20%E8%82%AF%E5%AE%9A%E4%B8%8D%E8%A1%8C%5Cnfunction%20test()%20%7B%5Cn%20%20%20%20list.forEach(async%20x%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20const%20res%20%3D%20await%20square(x)%5Cn%20%20%20%20%20%20%20%20console.log(res)%5Cn%20%20%20%20%7D)%5Cn%7D%5Cntest()%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22forEach%20%2C%20%E9%9A%94%201s%20%EF%BC%8C%E4%B8%80%E8%B5%B7%E8%BE%93%E5%87%BA%201%2F4%2F9%20%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22sG1xB%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u32d1b62e" id="u32d1b62e"><br></p><p data-lake-id="uf73b92b9" id="uf73b92b9"><span data-lake-id="udfc96332" id="udfc96332">每1s，输出1、 4、  9</span></p><p data-lake-id="u460556b0" id="u460556b0"><span data-lake-id="u362351f5" id="u362351f5">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F%2F%20for%20of%20%E5%8F%AF%E4%BB%A5%5Cnconsole.log('test1%3A')%3B%5Cnasync%20function%20%20test1()%20%7B%5Cn%20%20%20%20for(let%20x%20of%20list)%7B%5Cn%20%20%20%20%20%20%20%20const%20res%20%3D%20await%20square(x)%5Cn%20%20%20%20%20%20%20%20console.log(res)%5Cn%20%20%20%20%7D%5Cn%7D%5Cntest1()%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22for%20of%20%E5%8F%AF%E4%BB%A5%20%E6%AF%8F1s%EF%BC%8C%E8%BE%93%E5%87%BA1%E3%80%81%204%E3%80%81%20%209%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22zdaIr%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u89a076d7" id="u89a076d7"><br></p><p data-lake-id="ub7c85693" id="ub7c85693"><span data-lake-id="u04f629a3" id="u04f629a3">使用 </span><code data-lake-id="u931432f6" id="u931432f6"><span data-lake-id="u30a1fe5e" id="u30a1fe5e">for</span></code><span data-lake-id="u941b4581" id="u941b4581"> 循环，每1s，输出1、 4、  9</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22console.log('test3%3A')%3B%5Cnasync%20function%20test3()%20%7B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20list.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20let%20x%20%3D%20list%5Bi%5D%5Cn%20%20%20%20%20%20%20%20const%20res%20%3D%20await%20square(x)%5Cn%20%20%20%20%20%20%20%20console.log(res)%5Cn%20%20%20%20%7D%5Cn%7D%5Cntest3()%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E6%AF%8F1s%EF%BC%8C%E8%BE%93%E5%87%BA1%E3%80%81%204%E3%80%81%20%209%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22wnowm%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u9f4d12e8" id="u9f4d12e8"><br></p><h1 data-lake-id="KBEx3" id="KBEx3"><span data-lake-id="u6458fa78" id="u6458fa78">22、字符串仅由</span><code data-lake-id="ue5511c6d" id="ue5511c6d"><span data-lake-id="u119e32b0" id="u119e32b0">小写字母</span></code><span data-lake-id="u11c9af1d" id="u11c9af1d">和</span><code data-lake-id="ua7b03bdd" id="ua7b03bdd"><span data-lake-id="ua0ad5a6f" id="ua0ad5a6f"> [] </span></code><span data-lake-id="u4d1c0ea9" id="u4d1c0ea9">组成，且字符串不会包含多余的空格。\0转成如下结构</span></h1><p data-lake-id="u7756da41" id="u7756da41"><span data-lake-id="u8e9bb6c9" id="u8e9bb6c9">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22%2F**%5Cn%20*%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BB%85%E7%94%B1%E5%B0%8F%E5%86%99%E5%AD%97%E6%AF%8D%E5%92%8C%20%5B%5D%20%E7%BB%84%E6%88%90%EF%BC%8C%E4%B8%94%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8D%E4%BC%9A%E5%8C%85%E5%90%AB%E5%A4%9A%E4%BD%99%E7%9A%84%E7%A9%BA%E6%A0%BC%E3%80%82%5Cn%20%E7%A4%BA%E4%BE%8B%E4%B8%80%3A%20'abc'%20--%3E%20%7Bvalue%3A%20'abc'%7D%5Cn%20%E7%A4%BA%E4%BE%8B%E4%BA%8C%EF%BC%9A'%5Babc%5Bbcd%5Bdef%5D%5D%5D'%20--%3E%20%5Cn%20%5Ct%5Ct%5Ct%5Ct%7Bvalue%3A%20'abc'%2C%20children%3A%20%7Bvalue%3A%20'bcd'%2C%20children%3A%20%7Bvalue%3A%20'def'%7D%7D%7D%5Cn%20*%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E9%A2%98%E7%9B%AE%E8%A6%81%E6%B1%82%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22D2bOC%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ua1710050" id="ua1710050"><span data-lake-id="u969fccff" id="u969fccff">​</span><br></p><p data-lake-id="u2f84e924" id="u2f84e924"><span data-lake-id="u638ca1f3" id="u638ca1f3">先看如下代码</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22let%20s%20%3D%20'%5Babc%5Bbcd%5Bdef%5D%5D%5D'%3B%5Cnlet%20r%20%3D%20%2F%5B%5C%5C%5B%5C%5C%5D%5D%2Fg%5Cnconsole.log(s.split(r))%5Cn%5Cn%2F*************************************************%5Cn%20*%20%20%20%20%20%5B%5Cn%20*%20%20%20%20%20''%2C%20%20%20%20'abc'%2C%20'bcd'%2C%5Cn%20*%20%20%20%20%20%20%20%20%20'def'%2C%20''%2C%20%20%20%20''%2C%5Cn%20*%20%20%20%20%20%20%20%20%20''%5Cn%20*%20%20%20%20%20%5D%5Cn%20************************************************%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22cP5pz%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uf9df0655" id="uf9df0655"><span data-lake-id="u9bc4b0fb" id="u9bc4b0fb">所以需要 </span><code data-lake-id="u3ddc7b3c" id="u3ddc7b3c"><span data-lake-id="ucd9afd14" id="ucd9afd14"> s.split(r)</span></code><span data-lake-id="u5aecfb6d" id="u5aecfb6d">后还需要过滤空字符串，如下：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20arr%20%3D%20str.split(%2F%5B%5C%5C%5B%5C%5C%5D%5D%2F).filter((item)%20%3D%3E%20%7B%5Cn%20%20return%20!!item%5Cn%7D)%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22pitCF%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u79c318c3" id="u79c318c3"><span data-lake-id="u7c3951c3" id="u7c3951c3">​</span><br></p><p data-lake-id="u59e9e7c4" id="u59e9e7c4"><span data-lake-id="u1ebdd8dc" id="u1ebdd8dc">当然也可以使用正则 </span><code data-lake-id="ud237d8b2" id="ud237d8b2"><span data-lake-id="u013c23fd" id="u013c23fd">match</span></code><span data-lake-id="uceed2ba7" id="uceed2ba7"> 产出一个数组，如下</span></p><p data-lake-id="uccb8902c" id="uccb8902c"><span data-lake-id="ua9646cde" id="ua9646cde">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20ss%20%3D%20'%5Babc%5Bbcd%5Bdef%5D%5D%5D'%5Cnvar%20list%20%3D%20ss.match(%2F%5C%5Cw%2B%2Fg)%5Cnconsole.log(list)%3B%5Cn%2F%2F%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%20%5D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B0%2C3%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22oHlS5%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u793581ce" id="u793581ce"><span data-lake-id="u45f05277" id="u45f05277">​</span><br></p><p data-lake-id="u54ea0ded" id="u54ea0ded"><span data-lake-id="u9c0ae216" id="u9c0ae216">单独看</span><code data-lake-id="u42c415dd" id="u42c415dd"><span data-lake-id="u36d5672c" id="u36d5672c">let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];\0</span></code><span data-lake-id="u993dab73" id="u993dab73"> 如何转化成上面要求的对象。</span></p><p data-lake-id="u8cc08144" id="u8cc08144"><span data-lake-id="u81461758" id="u81461758">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20ss%20%3D%20'%5Babc%5Bbcd%5Bdef%5D%5D%5D'%5Cnvar%20list%20%3D%20ss.match(%2F%5C%5Cw%2B%2Fg)%5Cn%5Cnlet%20arr%20%3D%20%5B'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%5D%3B%5Cn%5Cn%2F%2F%20%3A%3A%3A%3A%E5%BE%88%E7%AE%80%E6%B4%81%E5%90%A7%EF%BC%81%EF%BC%81%EF%BC%81%5Cn%5Cnlet%20res%20%3D%20%7B%7D%3B%5Cnarr.reduce((prev%2C%20next%2C%20index%2C%20array)%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20console.log(prev%2C%20next%2C%20index)%3B%5Cn%20%20%20%20prev.value%20%3D%20next%3B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E9%99%A4%E4%BA%86%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%EF%BC%8C%E9%83%BD%E8%BF%94%E5%9B%9E%20prev.children%5Cn%20%20%20%20if%20(array.length%20-%201%20!%3D%3D%20index)%20%7B%5Cn%20%20%20%20%20%20%20%20prev.children%20%3D%20%7B%7D%5Cn%20%20%20%20%20%20%20%20return%20prev.children%3B%5Cn%20%20%20%20%7D%5Cn%7D%2C%20res)%5Cn%5Cnconsole.log(JSON.stringify(res))%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%2C13%2C14%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22oAP2N%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ub99fe676" id="ub99fe676"><br></p><p data-lake-id="u4f577e31" id="u4f577e31"><span data-lake-id="u6796626e" id="u6796626e">再看看</span><code data-lake-id="u509fa111" id="u509fa111"><span data-lake-id="u79ddb4b8" id="u79ddb4b8">reduce</span></code><span data-lake-id="u58cc0877" id="u58cc0877">方法注意事项：</span></p><p data-lake-id="u056f296f" id="u056f296f"><span data-lake-id="ub9b0f415" id="ub9b0f415">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20arr%20%3D%20%5B'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%5D%3B%5Cnlet%20res%20%3D%20%7B%7D%3B%5Cn%2F%2F%20%3A%3A%3A%3A%E6%B2%A1%E4%BC%A0%E5%88%9D%E5%A7%8B%E5%80%BC%EF%BC%8Cindex%E5%8F%AA%E4%BC%9A%E6%89%93%E5%8D%B0%201%E3%80%812%E3%80%813%E3%80%814%20%E5%BF%BD%E7%95%A5%200%5Cnarr.reduce((a%2C%20b%2C%20index%2C%20array)%20%3D%3E%20%7B%5Cn%20%20%20%20console.log(a%2C%20b%2C%20index%2C%20array)%3B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E6%89%93%E5%8D%B0%E7%BB%93%E6%9E%9C%E5%A6%82%E4%B8%8B%5Cn%20%20%20%20%2F**%5Cn%20%20%20%20%20*%20%20%20%20%20%20abc%20%20%20%20%20%20%20%20%20bcd%20%20%20%20%20%201%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20undefined%20%20%20def%20%20%20%20%20%202%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20undefined%20%20%20gfg%20%20%20%20%20%203%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20undefined%20%20%20ccc%20%20%20%20%20%204%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%5Cn%20%20%20%20%20*%20*%2F%5Cn%7D)%5Cn%5Cn%2F%2F%20%3A%3A%3A%3A%E4%BC%A0%E4%BA%86%E5%88%9D%E5%A7%8B%E5%80%BC%EF%BC%8Cindex%E6%89%93%E5%8D%B0%E4%BB%8E%200%20%E5%88%B0%204%5Cnarr.reduce((a%2C%20b%2C%20index%2C%20array)%20%3D%3E%20%7B%5Cn%20%20%20%20console.log(a%2C%20b%2C%20index%2C%20array)%3B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E6%89%93%E5%8D%B0%E7%BB%93%E6%9E%9C%E5%A6%82%E4%B8%8B%5Cn%20%20%20%20%2F**%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20%7B%7D%20%20%20%20%20%20%20%20%20%20abc%20%20%200%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20undefined%20%20%20bcd%20%20%201%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20undefined%20%20%20def%20%20%202%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20undefined%20%20%20gfg%20%20%203%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20undefined%20%20%20ccc%20%20%204%20%20%20%20%20%20%20%20%5B%20'abc'%2C%20'bcd'%2C%20'def'%2C%20'gfg'%2C%20'ccc'%20%5D%5Cn%20%20%20%20%20*%20*%2F%5Cn%7D%2C%20res)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B2%2C15%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22YAdOi%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u64f5e6cb" id="u64f5e6cb"><span data-lake-id="ub1768da4" id="ub1768da4">​</span><br></p><p data-lake-id="ud2626e5d" id="ud2626e5d"><span data-lake-id="u3362fcb8" id="u3362fcb8">​</span><br></p><h1 data-lake-id="ynh7n" id="ynh7n"><span data-lake-id="ub9b4be2b" id="ub9b4be2b">23、正则的一个应用</span></h1><p data-lake-id="u5dff0624" id="u5dff0624"><span data-lake-id="ud9bb21df" id="ud9bb21df">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20url%E6%9C%89%E4%B8%89%E7%A7%8D%E6%83%85%E5%86%B5%5Cn%20*%20https%3A%2F%2Fwww.xx.cn%2Fapi%3Fkeyword%3D%26level1%3D%26local_batch_id%3D%26elective%3D%26local_province_id%3D33%5Cn%20*%20https%3A%2F%2Fwww.xx.cn%2Fapi%3Fkeyword%3D%26level1%3D%26local_batch_id%3D%26elective%3D800%26local_province_id%3D33%5Cn%20*%20https%3A%2F%2Fwww.xx.cn%2Fapi%3Fkeyword%3D%26level1%3D%26local_batch_id%3D%26elective%3D800%2C700%26local_province_id%3D33%5Cn%20*%20%E5%8C%B9%E9%85%8Delective%E5%90%8E%E7%9A%84%E6%95%B0%E5%AD%97%E8%BE%93%E5%87%BA%EF%BC%88%E5%86%99%E5%87%BA%E4%BD%A0%E8%AE%A4%E4%B8%BA%E7%9A%84%E6%9C%80%E4%BC%98%E8%A7%A3%E6%B3%95%EF%BC%89%3A%5Cn%20*%20*%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B5%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22UOmpB%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u0ef5a344" id="u0ef5a344"><span data-lake-id="u83386cb0" id="u83386cb0">方法1：正则</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20fn(url)%20%7B%5Cn%20%20%20%20let%20reg%20%3D%20%2Felective%3D(.*)%26%2Fg%5Cn%20%20%20%20%2F%2F%20%E4%BD%BF%E7%94%A8exec%2C%E8%AE%B0%E4%BD%8F%EF%BC%8C%E6%98%AF%E7%AC%AC2%E4%B8%AA%E5%85%83%E7%B4%A0%5Cn%20%20%20%20let%20arr%20%3D%20reg.exec(url)%3B%5Cn%20%20%20%20let%20res%20%3D%20%5B%5D%3B%5Cn%20%20%20%20res%20%3D%20arr%20%26%26%20arr%5B1%5D%20%3F%20arr%5B1%5D.split('%2C')%20%3A%20%5B%5D%3B%5Cn%20%20%20%20console.log(res)%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B1%2C3%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22O8Bah%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u625aa3f0" id="u625aa3f0"><span data-lake-id="u21c68e2c" id="u21c68e2c">上面</span><code data-lake-id="u017b5a74" id="u017b5a74"><span data-lake-id="u0b6d799e" id="u0b6d799e">exec</span></code><span data-lake-id="u6e2681f7" id="u6e2681f7">的结果：</span></p><p data-lake-id="u93c10495" id="u93c10495"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090415809-4cfdfba9-9171-4388-ad9b-b8cae1197b1a.png%22%2C%22taskId%22%3A%22u0e0806d3-28d8-4499-a948-7a3a25ee66c%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A721.3333333333334%2C%22height%22%3A150%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A71738%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2164%2C%22originHeight%22%3A450%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22ELECTIVE800%26%20800%20INDEX%3A%2055%2C%20%2F%2FWWW.XX.CN%2FAPIZKEYWORD-SLEVELL-SLOCAL%20BATCH.ID-GELECTIVE-809SLOCAL.PROVINCE.ID-33'%5C%22%20INPUT%3A%20NTTPS%3A%2F%2FW%20UNDEFINED%20GROUPS%3A%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A128.81412%2C%22y%22%3A99.75395%2C%22width%22%3A240.19702%2C%22height%22%3A28.38149999999999%2C%22text%22%3A%22ELECTIVE800%26%22%7D%2C%7B%22x%22%3A106.95941%2C%22y%22%3A153.58289%2C%22width%22%3A68.91973%2C%22height%22%3A30.08348000000001%2C%22text%22%3A%22800%22%7D%2C%7B%22x%22%3A85.699486%2C%22y%22%3A212.47983%2C%22width%22%3A194.801464%2C%22height%22%3A27.575880000000012%2C%22text%22%3A%22INDEX%3A%2055%2C%22%7D%2C%7B%22x%22%3A384.31778%2C%22y%22%3A254.59142%2C%22width%22%3A1667.71082%2C%22height%22%3A46.09157999999999%2C%22text%22%3A%22%2F%2FWWW.XX.CN%2FAPIZKEYWORD-SLEVELL-SLOCAL%20BATCH.ID-GELECTIVE-809SLOCAL.PROVINCE.ID-33'%5C%22%22%7D%2C%7B%22x%22%3A84.1094%2C%22y%22%3A266.98767%2C%22width%22%3A130.88694%2C%22height%22%3A26.962649999999996%2C%22text%22%3A%22INPUT%3A%22%7D%2C%7B%22x%22%3A254.91826%2C%22y%22%3A268.83966%2C%22width%22%3A160.66134000000002%2C%22height%22%3A22.631140000000016%2C%22text%22%3A%22NTTPS%3A%2F%2FW%22%7D%2C%7B%22x%22%3A232.77545%2C%22y%22%3A318.20462%2C%22width%22%3A198.91477%2C%22height%22%3A31.192750000000046%2C%22text%22%3A%22UNDEFINED%22%7D%2C%7B%22x%22%3A89.2421%2C%22y%22%3A322.5931%2C%22width%22%3A161.6611%2C%22height%22%3A25.660470000000032%2C%22text%22%3A%22GROUPS%3A%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231c1a19%22%2C%22id%22%3A%22u6d53627d%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u9151dd42" id="u9151dd42"><br></p><card type="block" name="hr" value="data:%7B%22id%22%3A%22to3bA%22%7D"></card><p data-lake-id="udbb5d7fe" id="udbb5d7fe"><span data-lake-id="u7335c73f" id="u7335c73f">方法2：直接使用</span><code data-lake-id="u420df835" id="u420df835"><span data-lake-id="u870dee94" id="u870dee94">new URLSearchParams\0(url)</span></code></p><p data-lake-id="u1f0bc938" id="u1f0bc938"><span data-lake-id="uc657cfb4" id="uc657cfb4">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22let%20params%20%3D%20new%20URLSearchParams('https%3A%2F%2Fwww.xx.cn%2Fapi%3Fkeyword%3D%26level1%3D%26local_batch_id%3D%26elective%3D800%2C700%26local_province_id%3D33')%3B%5Cnconsole.log(params.get('elective'))%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22VcGOH%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6c670fd6" id="u6c670fd6"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090489770-2ba4d4c1-0699-4c13-99f8-acf4028145a3.png%22%2C%22taskId%22%3A%22u2e0c7d6a-3721-4395-955c-189cabbe47f%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A732.6666666666666%2C%22height%22%3A71%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A70199%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2198%2C%22originHeight%22%3A214%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22LET%20%20PERONS%20-%20NOW%20UNISEARCH-SONS(%20NTEPS%2F%2FMNU%2CSTESNOREESHOCAL%20SOTERESTOCAL%20SOTEREETIVEREESTIOCALA-33%20)%20CONSOLE.LOG(PARAMS.GET('ELECTIVE'))%20800%2C700%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A92.731445%2C%22y%22%3A50.98955%2C%22width%22%3A1865.968755%2C%22height%22%3A36.898149999999994%2C%22text%22%3A%22LET%20%20PERONS%20-%20NOW%20UNISEARCH-SONS(%20NTEPS%2F%2FMNU%2CSTESNOREESHOCAL%20SOTERESTOCAL%20SOTEREETIVEREESTIOCALA-33%20)%22%7D%2C%7B%22x%22%3A88.53321%2C%22y%22%3A87.228455%2C%22width%22%3A507.21918999999997%2C%22height%22%3A23.078595000000007%2C%22text%22%3A%22CONSOLE.LOG(PARAMS.GET('ELECTIVE'))%22%7D%2C%7B%22x%22%3A90.055336%2C%22y%22%3A125.71452%2C%22width%22%3A105.30206400000002%2C%22height%22%3A22.233460000000008%2C%22text%22%3A%22800%2C700%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%239fa1a0%22%2C%22id%22%3A%22uac83d730%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u4225372a" id="u4225372a"><br></p><h1 data-lake-id="bciww" id="bciww"><span data-lake-id="u135d001d" id="u135d001d">24、找出字符串中连续出现最多的字符和个数\0</span></h1><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%20%E6%89%BE%E5%87%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E8%BF%9E%E7%BB%AD%E5%87%BA%E7%8E%B0%E6%9C%80%E5%A4%9A%E7%9A%84%E5%AD%97%E7%AC%A6%E5%92%8C%E4%B8%AA%E6%95%B0%20%23220%5Cn%20*%20'abcaakjbb'%20%3D%3E%20%7B'a'%3A2%2C'b'%3A2%7D%5Cn%20*%20'abbkejsbcccwqaa'%20%3D%3E%20%7B'c'%3A3%7D%5Cn%20*%20*%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22UnRfB%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uc150d59a" id="uc150d59a"><br></p><p data-lake-id="u5be1f056" id="u5be1f056"><code data-lake-id="u8e95dd4b" id="u8e95dd4b"><span data-lake-id="uda6db3fc" id="uda6db3fc">let reg = /</span><span data-lake-id="ua3ff74c2" id="ua3ff74c2" style="color: rgb(205, 23, 33); background-color: rgb(235, 204, 5)">(\\w)\\1*</span><span data-lake-id="ucdabc081" id="ucdabc081">/g</span></code></p><p data-lake-id="udc3efa93" id="udc3efa93"><span data-lake-id="uef6b718b" id="uef6b718b">​</span><br></p><p data-lake-id="ufc3550d7" id="ufc3550d7"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090672927-f89caa97-d7bb-4531-b1d5-d28f596b240e.png%22%2C%22taskId%22%3A%22u49a08a65-c29f-4c30-9b22-c1d50435af7%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A592%2C%22height%22%3A217%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A114485%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1776%2C%22originHeight%22%3A650%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22%2F%2F%2F%2F%3A%3A%3A%3A%3A%3A%E6%9C%80%E6%9C%80%E6%9C%80%E6%9C%80%E5%85%B3%E9%94%AE%E7%9A%84%20LET%20REG%20%E4%B8%89%20%2F(%5C%5CW)%5C%5C1*%2FG%20%E6%AD%A3%E5%88%99%E5%86%99%E5%87%BA%E6%9D%A5%E5%B0%B1%E6%B2%A1%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%E4%BA%86%20'AKSAAKIBH'.MATCH(REG)%3B%20CONST%20ARR1%20%3B%20CONST%20ARR2%20-%20'ABBKEISHCCCWGAA'%20.MATCH(REG)%3B%20CONSOLE.LOG(ARR1)%3B%20%20CONSOLE.LOG(ARR2)%3B%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A100.30858%2C%22y%22%3A67.664696%2C%22width%22%3A497.61835999999994%2C%22height%22%3A55.374854%2C%22text%22%3A%22%2F%2F%2F%2F%3A%3A%3A%3A%3A%3A%E6%9C%80%E6%9C%80%E6%9C%80%E6%9C%80%E5%85%B3%E9%94%AE%E7%9A%84%22%7D%2C%7B%22x%22%3A106.23369%2C%22y%22%3A131.174%2C%22width%22%3A403.05451000000005%2C%22height%22%3A33.51683%2C%22text%22%3A%22LET%20REG%20%E4%B8%89%20%2F(%5C%5CW)%5C%5C1*%2FG%22%7D%2C%7B%22x%22%3A827.096%2C%22y%22%3A153.63527%2C%22width%22%3A769.6994%2C%22height%22%3A70.88081%2C%22text%22%3A%22%E6%AD%A3%E5%88%99%E5%86%99%E5%87%BA%E6%9D%A5%E5%B0%B1%E6%B2%A1%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%E4%BA%86%22%7D%2C%7B%22x%22%3A373.53433%2C%22y%22%3A292.71524%2C%22width%22%3A449.38912999999997%2C%22height%22%3A38.36218000000002%2C%22text%22%3A%22'AKSAAKIBH'.MATCH(REG)%3B%22%7D%2C%7B%22x%22%3A105.49386%2C%22y%22%3A295.60495%2C%22width%22%3A104.37539%2C%22height%22%3A27.85880000000003%2C%22text%22%3A%22CONST%22%7D%2C%7B%22x%22%3A225.89891%2C%22y%22%3A295.40738%2C%22width%22%3A125.02269000000001%2C%22height%22%3A28.49892%2C%22text%22%3A%22ARR1%20%3B%22%7D%2C%7B%22x%22%3A107.78336%2C%22y%22%3A341.3046%2C%22width%22%3A839.1072399999999%2C%22height%22%3A45.01693%2C%22text%22%3A%22CONST%20ARR2%20-%20'ABBKEISHCCCWGAA'%20.MATCH(REG)%3B%22%7D%2C%7B%22x%22%3A105.69352%2C%22y%22%3A449.89163%2C%22width%22%3A361.27311999999995%2C%22height%22%3A40.83233999999999%2C%22text%22%3A%22CONSOLE.LOG(ARR1)%3B%22%7D%2C%7B%22x%22%3A106.91808%2C%22y%22%3A508.1198%2C%22width%22%3A350.96867%2C%22height%22%3A35.400649999999985%2C%22text%22%3A%22%20CONSOLE.LOG(ARR2)%3B%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231e1b1a%22%2C%22id%22%3A%22u33f6b8ea%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u68982943" id="u68982943"><span data-lake-id="ud3a3d0d0" id="ud3a3d0d0">看打印结果：然后遍历就好了！！！</span></p><p data-lake-id="uc0ecef60" id="uc0ecef60"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090724883-a8c27a4b-8027-4f8f-8b6c-bb1664bb0828.png%22%2C%22taskId%22%3A%22u0eff5dcc-ff59-441d-ab0f-c3d05defa4e%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A385.3333333333333%2C%22height%22%3A245%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A59412%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1156%2C%22originHeight%22%3A734%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22NODE%2020.JS%20%20DAILY-CODING%20GIT%3A(MAIN)%20'A'%2C%20'B'%2C'C'%2C%20'AA'%2C%20'K'%2C%20'J'%2C%20'BB%2011%20'BB'%2C%20%20'K'%2C%20%2C%20%20'E'%2C'J'%2C%20%20'S'%2C%20IQ'%20'CCC'%2C%20'W'%2C%20Q'%2C%20'AA%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A636.4504%2C%22y%22%3A47.750507%2C%22width%22%3A203.28060000000005%2C%22height%22%3A36.832333000000006%2C%22text%22%3A%22NODE%2020.JS%22%7D%2C%7B%22x%22%3A118.82372%2C%22y%22%3A45.625202%2C%22width%22%3A456.06777999999997%2C%22height%22%3A45.034153%2C%22text%22%3A%22%20DAILY-CODING%20GIT%3A(MAIN)%22%7D%2C%7B%22x%22%3A68.245415%2C%22y%22%3A155.46112%2C%22width%22%3A384.88968500000004%2C%22height%22%3A41.79981000000001%2C%22text%22%3A%22'A'%2C%20'B'%2C'C'%2C%22%7D%2C%7B%22x%22%3A108.82878%2C%22y%22%3A205.50117%2C%22width%22%3A285.98102%2C%22height%22%3A41.13705999999999%2C%22text%22%3A%22'AA'%2C%20'K'%2C%20'J'%2C%22%7D%2C%7B%22x%22%3A107.13966%2C%22y%22%3A265.96713%2C%22width%22%3A56.58477999999998%2C%22height%22%3A28.59784000000002%2C%22text%22%3A%22'BB%22%7D%2C%7B%22x%22%3A61.71859%2C%22y%22%3A315.0443%2C%22width%22%3A15.165749999999996%2C%22height%22%3A70.99122%2C%22text%22%3A%2211%22%7D%2C%7B%22x%22%3A192.47804%2C%22y%22%3A429.42056%2C%22width%22%3A210.39246%2C%22height%22%3A30.961179999999956%2C%22text%22%3A%22'BB'%2C%20%20'K'%2C%22%7D%2C%7B%22x%22%3A13.6892395%2C%22y%22%3A477.55673%2C%22width%22%3A383.57496050000003%2C%22height%22%3A37.610630000000015%2C%22text%22%3A%22%2C%20%20'E'%2C'J'%2C%20%20'S'%2C%22%7D%2C%7B%22x%22%3A104.04797%2C%22y%22%3A536.03046%2C%22width%22%3A44.873649999999984%2C%22height%22%3A30.057440000000042%2C%22text%22%3A%22IQ'%22%7D%2C%7B%22x%22%3A210.10284%2C%22y%22%3A536.1928%2C%22width%22%3A204.24286000000004%2C%22height%22%3A34.864149999999995%2C%22text%22%3A%22'CCC'%2C%20'W'%2C%22%7D%2C%7B%22x%22%3A118.732864%2C%22y%22%3A587.62714%2C%22width%22%3A144.192636%2C%22height%22%3A34.215459999999894%2C%22text%22%3A%22Q'%2C%20'AA%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231b1b1b%22%2C%22id%22%3A%22u690bb355%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u89bad8d6" id="u89bad8d6"><br></p><h1 data-lake-id="fwoFm" id="fwoFm"><span data-lake-id="ue605d790" id="ue605d790">25、将下面的数组结构转成树形结构</span></h1><p data-lake-id="u18e89325" id="u18e89325"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F**%5Cn%20*%20%2021%E3%80%81%E6%95%B0%E7%BB%84%E8%BD%AC%E6%88%90%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%5Cn%20*%20%20%E5%A6%82%E4%BD%95%E5%B0%86%20%5B%7Bid%3A%201%7D%2C%20%7Bid%3A%202%2C%20pId%3A%201%7D%2C%20...%5D%20%E7%9A%84%E9%87%8D%E5%A4%8D%E6%95%B0%E7%BB%84%EF%BC%88%E6%9C%89%E9%87%8D%E5%A4%8D%E6%95%B0%E6%8D%AE%EF%BC%89%5Cn%20*%20%20%E8%BD%AC%E6%88%90%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E7%9A%84%E6%95%B0%E7%BB%84%20%5B%7Bid%3A%201%2C%20child%3A%20%5B%7Bid%3A%202%2C%20pId%3A%201%7D%5D%7D%2C%20...%5D%20%EF%BC%88%E9%9C%80%E8%A6%81%E5%8E%BB%E9%87%8D%EF%BC%89%20%23243%5Cn%20*%20*%2F%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22tFzah%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u16016782" id="u16016782"><span data-lake-id="u5640e622" id="u5640e622">先去重：使用</span><code data-lake-id="u0fc65532" id="u0fc65532"><span data-lake-id="uec47cf6e" id="uec47cf6e">map</span></code><span data-lake-id="ua011caa9" id="ua011caa9">去重，然后</span><code data-lake-id="u805dd45d" id="u805dd45d"><span data-lake-id="uc40e79d4" id="uc40e79d4">map.values()</span></code></p><p data-lake-id="uc2ee4399" id="uc2ee4399"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1671090865710-50c94080-c573-4f27-a823-62a0b6b8ea85.png%22%2C%22taskId%22%3A%22u778b19e5-0ff2-41db-af7b-521554ad147%22%2C%22clientId%22%3A%22u5ba1859b-6989-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A585.3312683105469%2C%22height%22%3A551%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A162074%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1396%2C%22originHeight%22%3A1314%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22stroke%22%2C%22search%22%3A%22-LET%20ARR%20%E5%B7%9D%20%7BID%3A%201%7D%2C%20%E9%87%8D%E5%A4%8D%20%7BID%3A%202%2C%20PID%3A%201%7D%2C%20%7BID%3A%203%2C%20PID%3A%202%7D%2C%20%7BID%3A%204%2C%20PID%3A%201%7D%2C%20%7BID%3A%205%2C%20PID%3A%203%7D%2C%20%7BID%3A%206%2C%20PID%3A%202%7D%2C%20%7BID%3A%206%2C%20PID%3A%202%7D%2C%20%7BID%3A2%2C%20PID%3A%201%7D%20%2F%2F%2F%20%3A%3A%3A%3A%3A%3A%3A%3A%20%E9%87%8D%E5%A4%8D%20IFUNCTION%20FN(ARR)%20%7B%20MAP()%20LET%20%E5%B7%9D%20NEW%20MAP%20OF%20ARR)%20%7B%20(LET%20ITEM%20FOR%20%20IF%20(!MAP.GET(ITEM.ID))%20%7B%20%20MAP.SET(ITEM.ID%2C%20ITEM)%3B%20%E5%AD%90%20%20CONSOLE.LOG(MAP.VALUES())%3B%20LIGUANGWEI007%2C%202022%2F6%2F29%2C05%3A47%20%20FEAT%3A%E6%89%93%E5%B9%B3%E7%9B%AE%E5%BD%95%20FN(ARR)%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A80.55388%2C%22y%22%3A65.783646%2C%22width%22%3A74.71059999999999%2C%22height%22%3A28.813164%2C%22text%22%3A%22-LET%22%7D%2C%7B%22x%22%3A175.60194%2C%22y%22%3A70.27076%2C%22width%22%3A62.890799999999984%2C%22height%22%3A24.528090000000006%2C%22text%22%3A%22ARR%22%7D%2C%7B%22x%22%3A250.02084%2C%22y%22%3A70.38054%2C%22width%22%3A24.81928000000002%2C%22height%22%3A22.920630000000003%2C%22text%22%3A%22%E5%B7%9D%22%7D%2C%7B%22x%22%3A178.24176%2C%22y%22%3A115.539345%2C%22width%22%3A149.89154000000002%2C%22height%22%3A37.823634999999996%2C%22text%22%3A%22%7BID%3A%201%7D%2C%22%7D%2C%7B%22x%22%3A732.09204%2C%22y%22%3A170.06808%2C%22width%22%3A66.30276000000003%2C%22height%22%3A34.69847999999999%2C%22text%22%3A%22%E9%87%8D%E5%A4%8D%22%7D%2C%7B%22x%22%3A176.8015%2C%22y%22%3A170.60283%2C%22width%22%3A311.19769999999994%2C%22height%22%3A35.47954999999999%2C%22text%22%3A%22%7BID%3A%202%2C%20PID%3A%201%7D%2C%22%7D%2C%7B%22x%22%3A177.70686%2C%22y%22%3A224.81993%2C%22width%22%3A312.09829%2C%22height%22%3A34.640150000000006%2C%22text%22%3A%22%7BID%3A%203%2C%20PID%3A%202%7D%2C%22%7D%2C%7B%22x%22%3A176.77338%2C%22y%22%3A278.7121%2C%22width%22%3A308.52945%2C%22height%22%3A34.35262999999998%2C%22text%22%3A%22%7BID%3A%204%2C%20PID%3A%201%7D%2C%22%7D%2C%7B%22x%22%3A176.68295%2C%22y%22%3A332.58%2C%22width%22%3A309.36081%2C%22height%22%3A35.03077999999999%2C%22text%22%3A%22%7BID%3A%205%2C%20PID%3A%203%7D%2C%22%7D%2C%7B%22x%22%3A176.23648%2C%22y%22%3A385.049%2C%22width%22%3A311.63392%2C%22height%22%3A37.657730000000015%2C%22text%22%3A%22%7BID%3A%206%2C%20PID%3A%202%7D%2C%22%7D%2C%7B%22x%22%3A178.22792%2C%22y%22%3A440.5732%2C%22width%22%3A310.53297999999995%2C%22height%22%3A37.75093000000004%2C%22text%22%3A%22%7BID%3A%206%2C%20PID%3A%202%7D%2C%22%7D%2C%7B%22x%22%3A176.91846%2C%22y%22%3A493.4091%2C%22width%22%3A623.4248%2C%22height%22%3A39.503699999999924%2C%22text%22%3A%22%7BID%3A2%2C%20PID%3A%201%7D%20%2F%2F%2F%20%3A%3A%3A%3A%3A%3A%3A%3A%20%E9%87%8D%E5%A4%8D%22%7D%2C%7B%22x%22%3A107.9084%2C%22y%22%3A656.7546%2C%22width%22%3A348.47905000000003%2C%22height%22%3A42.93394000000001%2C%22text%22%3A%22IFUNCTION%20FN(ARR)%20%7B%22%7D%2C%7B%22x%22%3A453.7115%2C%22y%22%3A712.67255%2C%22width%22%3A96.10040000000004%2C%22height%22%3A30.851850000000013%2C%22text%22%3A%22MAP()%22%7D%2C%7B%22x%22%3A177.08409%2C%22y%22%3A714.80554%2C%22width%22%3A59.948170000000005%2C%22height%22%3A26.984320000000025%2C%22text%22%3A%22LET%22%7D%2C%7B%22x%22%3A334.51233%2C%22y%22%3A716.7957%2C%22width%22%3A21.808989999999994%2C%22height%22%3A23.691799999999944%2C%22text%22%3A%22%E5%B7%9D%22%7D%2C%7B%22x%22%3A374.67764%2C%22y%22%3A717.2487%2C%22width%22%3A64.14938999999998%2C%22height%22%3A24.88076000000001%2C%22text%22%3A%22NEW%22%7D%2C%7B%22x%22%3A255.45683%2C%22y%22%3A718.4668%2C%22width%22%3A64.01737%2C%22height%22%3A25.88259999999991%2C%22text%22%3A%22MAP%22%7D%2C%7B%22x%22%3A454.29327%2C%22y%22%3A764.554%2C%22width%22%3A186.81343000000004%2C%22height%22%3A39.34019999999998%2C%22text%22%3A%22OF%20ARR)%20%7B%22%7D%2C%7B%22x%22%3A259.93436%2C%22y%22%3A766.57495%2C%22width%22%3A76.62759%2C%22height%22%3A31.054050000000075%2C%22text%22%3A%22(LET%22%7D%2C%7B%22x%22%3A356.22745%2C%22y%22%3A767.9455%2C%22width%22%3A81.35812000000004%2C%22height%22%3A30.2654%2C%22text%22%3A%22ITEM%22%7D%2C%7B%22x%22%3A174.43393%2C%22y%22%3A769.7561%2C%22width%22%3A62.07289%2C%22height%22%3A27.267900000000054%2C%22text%22%3A%22FOR%22%7D%2C%7B%22x%22%3A254.5297%2C%22y%22%3A816.899%2C%22width%22%3A484.3068%2C%22height%22%3A40.327%2C%22text%22%3A%22%20IF%20(!MAP.GET(ITEM.ID))%20%7B%22%7D%2C%7B%22x%22%3A331.0015%2C%22y%22%3A875.2234%2C%22width%22%3A453.31185%2C%22height%22%3A38.05180000000007%2C%22text%22%3A%22%20MAP.SET(ITEM.ID%2C%20ITEM)%3B%22%7D%2C%7B%22x%22%3A253.99031%2C%22y%22%3A924.6557%2C%22width%22%3A20.808239999999984%2C%22height%22%3A38.72249999999997%2C%22text%22%3A%22%E5%AD%90%22%7D%2C%7B%22x%22%3A172.704%2C%22y%22%3A1030.1534%2C%22width%22%3A511.91529999999995%2C%22height%22%3A43.60180000000014%2C%22text%22%3A%22%20CONSOLE.LOG(MAP.VALUES())%3B%22%7D%2C%7B%22x%22%3A316.89642%2C%22y%22%3A1195.7996%2C%22width%22%3A929.21918%2C%22height%22%3A36.934799999999996%2C%22text%22%3A%22LIGUANGWEI007%2C%202022%2F6%2F29%2C05%3A47%20%20FEAT%3A%E6%89%93%E5%B9%B3%E7%9B%AE%E5%BD%95%22%7D%2C%7B%22x%22%3A96.93387%2C%22y%22%3A1197.2957%2C%22width%22%3A142.66431999999998%2C%22height%22%3A36.70810000000006%2C%22text%22%3A%22FN(ARR)%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%231d1d1c%22%2C%22id%22%3A%22u5ed4802f%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u1bea7fe5" id="u1bea7fe5"><br></p><blockquote data-lake-id="u6413a879" id="u6413a879" class="lake-alert lake-alert-danger"><p data-lake-id="ue2bcaac8" id="ue2bcaac8"><span data-lake-id="ub64a48ab" id="ub64a48ab">最好再写一遍，花了两个小时，不一定又写不出来了</span></p></blockquote><p data-lake-id="ud404bb1c" id="ud404bb1c"><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%3A%3A%3A%3A%20%E5%B7%B2%E7%BB%8F%E5%8E%BB%E9%87%8D%E4%BA%86%5Cnlet%20arr%20%3D%20%5B%5Cn%20%20%20%20%7Bid%3A%201%2C%20pid%3A%200%7D%2C%5Cn%20%20%20%20%7Bid%3A%202%2C%20pid%3A%201%7D%2C%5Cn%20%20%20%20%7Bid%3A%203%2C%20pid%3A%202%7D%2C%5Cn%20%20%20%20%7Bid%3A%204%2C%20pid%3A%201%7D%2C%5Cn%20%20%20%20%7Bid%3A%205%2C%20pid%3A%203%7D%2C%5Cn%20%20%20%20%7Bid%3A%206%2C%20pid%3A%202%7D%5D%3B%5Cn%5Cn%2F**%5Cn%20*%20%40rootId%20%E8%B7%9F%E8%8A%82%E7%82%B9%E7%9A%84%20pid%5Cn%20*%20*%2F%5Cnfunction%20fn(array%2C%20rootId)%20%7B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%20%E7%AC%AC1%E6%AD%A5%EF%BC%9A%20%E5%80%9F%E5%8A%A9map%E5%AF%B9%E8%B1%A1%EF%BC%8C%20%E8%BD%AC%E6%88%90%E4%BB%A5id%E4%B8%BA%20key%20%2C%20item%E4%B8%BAvalue%E7%9A%84%20%E5%AF%B9%E8%B1%A1%5Cn%20%20%20%20let%20map%20%3D%20%7B%7D%3B%5Cn%20%20%20%20array.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20map%5Bitem.id%5D%20%3D%20%7B...item%7D%20%2F%2F%20%E6%B5%85%E6%8B%B7%E8%B4%9D%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20const%20res%20%3D%20%5B%5D%3B%5Cn%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E9%81%8D%E5%8E%86%5Cn%20%20%20%20array.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20let%20%7Bid%2C%20pid%7D%20%3D%20item%3B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%3A%3A%3A%3A%E5%A6%82%E6%9E%9C%E6%98%AF%E6%A0%B9%E8%8A%82%E7%82%B9%EF%BC%8C%E9%82%A3%E4%B9%88%E7%9B%B4%E6%8E%A5push%20%E7%BB%99%20res%5Cn%20%20%20%20%20%20%20%20if%20(pid%20%3D%3D%3D%20rootId)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20res.push(map%5Bid%5D)%3B%5Cn%20%20%20%20%20%20%20%20%2F%2F%2F%2F%20%3A%3A%3A%3A%20%20%20%E5%90%A6%E5%88%99%EF%BC%8C%E6%93%8D%E4%BD%9C%E5%90%8E%E9%9D%A2%E7%9A%84map%2C%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%9C%89children%EF%BC%8C%E6%B2%A1%E6%9C%89%E5%B0%B1%E5%A4%8D%E5%88%B6%E7%BB%99%E4%B8%80%E4%B8%AA%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20if%20(map%5Bpid%5D.children)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20map%5Bpid%5D.children.push(map%5Bid%5D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20map%5Bpid%5D.children%20%3D%20%5Bmap%5Bid%5D%5D%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D)%5Cn%20%20%20%20return%20res%3B%5Cn%7D%5Cn%5Cn%5Cnconsole.log(JSON.stringify(fn(arr%2C0)))%3B%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B13%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22yEVRA%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u525fbe0c" id="u525fbe0c"><br></p><p data-lake-id="uffab904b" id="uffab904b"><span data-lake-id="ub50cd36b" id="ub50cd36b">再看下一个题，完全类似的题</span></p><p data-lake-id="u1a7a43ac" id="u1a7a43ac"><span data-lake-id="u6b09483c" id="u6b09483c">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%20id%20%E4%BB%A3%E8%A1%A8%E9%83%A8%E9%97%A8%E7%BC%96%E5%8F%B7%EF%BC%8Cname%20%E6%98%AF%E9%83%A8%E9%97%A8%E5%90%8D%E7%A7%B0%EF%BC%8CparentId%20%E6%98%AF%E7%88%B6%E9%83%A8%E9%97%A8%E7%BC%96%E5%8F%B7%EF%BC%8C%E4%B8%BA%200%20%E4%BB%A3%E8%A1%A8%E4%B8%80%E7%BA%A7%E9%83%A8%E9%97%A8%EF%BC%8C%5Cn%2F%2F%20%20%E7%8E%B0%E5%9C%A8%E8%A6%81%E6%B1%82%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%20convert%20%E6%96%B9%E6%B3%95%EF%BC%8C%E6%8A%8A%E5%8E%9F%E5%A7%8B%20list%20%E8%BD%AC%E6%8D%A2%E6%88%90%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%EF%BC%8C%5Cn%2F%2F%20%20parentId%20%E4%B8%BA%E5%A4%9A%E5%B0%91%E5%B0%B1%E6%8C%82%E8%BD%BD%E5%9C%A8%E8%AF%A5%20id%20%E7%9A%84%E5%B1%9E%E6%80%A7%20children%20%E6%95%B0%E7%BB%84%E4%B8%8B%EF%BC%8C%E7%BB%93%E6%9E%84%E5%A6%82%E4%B8%8B%EF%BC%9A%5Cnlet%20list%20%3D%20%5B%5Cn%20%20%7Bid%3A%201%2C%20name%3A%20'%E9%83%A8%E9%97%A8A'%2C%20parentId%3A%200%7D%2C%5Cn%20%20%7Bid%3A%202%2C%20name%3A%20'%E9%83%A8%E9%97%A8B'%2C%20parentId%3A%200%7D%2C%5Cn%20%20%7Bid%3A%203%2C%20name%3A%20'%E9%83%A8%E9%97%A8C'%2C%20parentId%3A%201%7D%2C%5Cn%20%20%7Bid%3A%204%2C%20name%3A%20'%E9%83%A8%E9%97%A8D'%2C%20parentId%3A%201%7D%2C%5Cn%20%20%7Bid%3A%205%2C%20name%3A%20'%E9%83%A8%E9%97%A8E'%2C%20parentId%3A%202%7D%2C%5Cn%20%20%7Bid%3A%206%2C%20name%3A%20'%E9%83%A8%E9%97%A8F'%2C%20parentId%3A%203%7D%2C%5Cn%20%20%7Bid%3A%207%2C%20name%3A%20'%E9%83%A8%E9%97%A8G'%2C%20parentId%3A%202%7D%2C%5Cn%20%20%7Bid%3A%208%2C%20name%3A%20'%E9%83%A8%E9%97%A8H'%2C%20parentId%3A%204%7D%5Cn%5D%3B%5Cn%5Cn%5Cnfunction%20fn(list%2C%20root)%20%7B%5Cn%20%20let%20res%20%3D%20%5B%5D%3B%5Cn%20%20let%20map%20%3D%20%7B%7D%3B%5Cn%20%20list.forEach((item)%20%3D%3E%20%7B%5Cn%20%20%20%20map%5Bitem.id%5D%20%3D%20%7B...item%7D%3B%5Cn%20%20%7D)%3B%5Cn%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20list.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20let%20%7Bid%2C%20parentId%7D%20%3D%20list%5Bi%5D%3B%5Cn%20%20%20%20if%20(parentId%20%3D%3D%3D%20root)%20%7B%5Cn%20%20%20%20%20%20res.push(map%5Bid%5D)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20if%20(map%5BparentId%5D.children)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%BF%99%E9%87%8C%E6%98%AFpid%5Cn%20%20%20%20%20%20%20%20map%5BparentId%5D.children.push(map%5Bid%5D)%3B%5Cn%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20map%5BparentId%5D.children%20%3D%20%5Bmap%5Bid%5D%5D%3B%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%20%20return%20res%3B%5Cn%7D%5Cn%5Cnconsole.log(JSON.stringify(fn(list%2C%200)))%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B27%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22eiSlL%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uec5cc5c2" id="uec5cc5c2"><span data-lake-id="u07165f33" id="u07165f33">\0</span></p><p data-lake-id="u4d577e47" id="u4d577e47"><br></p><p data-lake-id="uf943d214" id="uf943d214"><br></p><p data-lake-id="uf568c3da" id="uf568c3da"><br></p>`,public:1,status:1,view_status:0,read_status:1,likes_count:0,comments_count:0,content_updated_at:"2023-03-11T07:06:40.000Z",deleted_at:null,created_at:"2023-03-11T05:41:43.000Z",updated_at:"2023-03-11T09:17:00.000Z",published_at:"2023-03-11T08:25:20.000Z",first_published_at:"2023-03-11T05:41:42.901Z",word_count:3485,cover:"https://cdn.nlark.com/yuque/0/2022/png/687303/1671061026829-a88eba62-a5fa-42eb-a584-8ec29e7345b9.png",description:"1、for循环中，return是可以中断循环的。这个需要注意了/**************************************************************************  * // ::::return 是可以中断循环的，之前都懵懵懂懂的  * **...",custom_description:null,hits:0,_serializer:"v2.doc_detail"},{id:117542185,slug:"kayuuigb4gpzcl2b",title:"算法.Programs Are Translated by Other Programs into Different Forms",book_id:36687938,book:{id:36687938,type:"Book",slug:"blog",name:"liguwe.github.io",user_id:687303,description:"liguwe's blog",creator_id:687303,public:1,items_count:8,likes_count:0,watches_count:0,content_updated_at:"2023-03-11T09:36:03.001Z",updated_at:"2023-03-11T09:36:03.000Z",created_at:"2023-03-11T03:13:50.000Z",namespace:"liguwe/blog",user:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},_serializer:"v2.book"},user_id:687303,creator:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},format:"lake",body:"The hello program begins life as a high-level C program because it can be read and understood by human beings in that form. However, in order to run `hello.c` on the system, the individual单独的 C statements must be translated by other programs into a sequence of low-level machine-language instructions. \n\nThese instructions are then packaged in a form called an executable object program and stored as a binary disk ﬁle. \n\nObject programs are also referred to as 也称为 executable object ﬁles.\n\nOn a Unix system, the translation from source ﬁle to object ﬁle is performed by a compiler driver:\n\n![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1668472440052-9f45a121-db27-49bb-86e0-6b4c79179bcc.png#averageHue=%23f4f4f4&clientId=u6bb6df7b-79bb-4&from=paste&height=275&id=u2337d479&name=image.png&originHeight=824&originWidth=2088&originalType=binary&ratio=1&rotation=0&showTitle=false&size=149716&status=done&style=none&taskId=u4c194054-430a-42f4-8c78-b67e96dcfb9&title=&width=696)<br />Here, the gcc compiler driver reads the source ﬁle `hello.c` and translates it into an executable object ﬁle `hello`. The translation is performed in the sequence of four phases shown in Figure 1.3. The programs that perform the four phases (preprocessor, compiler, assembler, and linker) are known collectively  as the compilation system.\n\n- Preprocessing phase. The preprocessor (cpp) modiﬁes the original C program according to directives that begin with the `‘#’` character. For example, the `#include <stdio.h>` command in line 1 of `hello.c` tells the preprocessor to read the contents of the system header ﬁle `stdio.h` and insert it directly into the program text. The result is another C program, typically with the `.i` sufﬁx.\n- Compilation phase. The compiler (cc1) translates the text ﬁle `hello.i` into the text ﬁle hello.s, which contains an assembly-language program. This program includes the following deﬁnition of function main:\n\n      ![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1668473023883-ca1d2b75-7b3b-45c2-aca5-b8c78c287524.png#averageHue=%23f3f3f3&clientId=u6bb6df7b-79bb-4&from=paste&height=141&id=u9aa8485a&name=image.png&originHeight=424&originWidth=716&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48400&status=done&style=none&taskId=u00b37ebe-ca07-4fbb-9857-8220bb88af5&title=&width=238.66666666666666)<br />       Each of lines 2–7 in this deﬁnition describes one low-level machine-language instruction in a textual form. Assembly language is useful because  it provides a common output language  for  different compilers  for different high-level languages.  For example, C compilers and Fortran compilers both generate output ﬁles in the same assembly language.\n\n- Assembly phase. Next, `the assembler S`   (as)   translates v `hello.s` into machine-language instructions,  packages v them in a form known as a relocatable object program 可重定位的目标程序, and stores the result in the object ﬁle `hello.o`.  This ﬁle is a binary ﬁle （containing 17 bytes） to encode 动词不定时？ the instructions for function main.  If we were to view hello.o with a text editor, it would appear to be gibberish.\n\n\n",body_draft:"The hello program begins life as a high-level C program because it can be read and understood by human beings in that form. However, in order to run `hello.c` on the system, the individual单独的 C statements must be translated by other programs into a sequence of low-level machine-language instructions. \n\nThese instructions are then packaged in a form called an executable object program and stored as a binary disk ﬁle. \n\nObject programs are also referred to as 也称为 executable object ﬁles.\n\nOn a Unix system, the translation from source ﬁle to object ﬁle is performed by a compiler driver:\n\n![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1668472440052-9f45a121-db27-49bb-86e0-6b4c79179bcc.png#averageHue=%23f4f4f4&clientId=u6bb6df7b-79bb-4&from=paste&height=275&id=u2337d479&name=image.png&originHeight=824&originWidth=2088&originalType=binary&ratio=1&rotation=0&showTitle=false&size=149716&status=done&style=none&taskId=u4c194054-430a-42f4-8c78-b67e96dcfb9&title=&width=696)<br />Here, the gcc compiler driver reads the source ﬁle `hello.c` and translates it into an executable object ﬁle `hello`. The translation is performed in the sequence of four phases shown in Figure 1.3. The programs that perform the four phases (preprocessor, compiler, assembler, and linker) are known collectively  as the compilation system.\n\n- Preprocessing phase. The preprocessor (cpp) modiﬁes the original C program according to directives that begin with the `‘#’` character. For example, the `#include <stdio.h>` command in line 1 of `hello.c` tells the preprocessor to read the contents of the system header ﬁle `stdio.h` and insert it directly into the program text. The result is another C program, typically with the `.i` sufﬁx.\n- Compilation phase. The compiler (cc1) translates the text ﬁle `hello.i` into the text ﬁle hello.s, which contains an assembly-language program. This program includes the following deﬁnition of function main:\n\n      ![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1668473023883-ca1d2b75-7b3b-45c2-aca5-b8c78c287524.png#averageHue=%23f3f3f3&clientId=u6bb6df7b-79bb-4&from=paste&height=141&id=u9aa8485a&name=image.png&originHeight=424&originWidth=716&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48400&status=done&style=none&taskId=u00b37ebe-ca07-4fbb-9857-8220bb88af5&title=&width=238.66666666666666)<br />       Each of lines 2–7 in this deﬁnition describes one low-level machine-language instruction in a textual form. Assembly language is useful because  it provides a common output language  for  different compilers  for different high-level languages.  For example, C compilers and Fortran compilers both generate output ﬁles in the same assembly language.\n\n- Assembly phase. Next, `the assembler S`   (as)   translates v `hello.s` into machine-language instructions,  packages v them in a form known as a relocatable object program 可重定位的目标程序, and stores the result in the object ﬁle `hello.o`.  This ﬁle is a binary ﬁle （containing 17 bytes） to encode 动词不定时？ the instructions for function main.  If we were to view hello.o with a text editor, it would appear to be gibberish.\n\n\n",body_html:'<!doctype html><div class="lake-content" typography="classic"><p id="ucdace451" class="ne-p"><span class="ne-text">The hello program begins life as a high-level C program </span><span class="ne-text" style="text-decoration: underline">because</span><span class="ne-text"> it can be read and understood by human beings in that form. However, in order to run </span><code class="ne-code"><span class="ne-text">hello.c</span></code><span class="ne-text"> on the system, the </span><span class="ne-text" style="color: #E8323C">individual</span><sup><span class="ne-text" style="color: #E8323C">单独的</span></sup><span class="ne-text"> C statements must be translated by other programs into a sequence of low-level machine-language instructions. </span></p><p id="u1816b331" class="ne-p"><span class="ne-text"></span></p><p id="u84ac3ad7" class="ne-p"><span class="ne-text">These instructions are then packaged in a form </span><span class="ne-text" style="text-decoration: underline">called</span><span class="ne-text"> an executable object program and stored as a binary disk ﬁle. </span></p><p id="u90f6a1e0" class="ne-p"><span class="ne-text"></span></p><p id="u8b90bc08" class="ne-p"><span class="ne-text">Object programs </span><span class="ne-text" style="text-decoration: underline">are also referred to as </span><sup><span class="ne-text" style="text-decoration: underline">也称为</span></sup><span class="ne-text"> executable object ﬁles.</span></p><p id="u704a7308" class="ne-p"><span class="ne-text"></span></p><p id="u346670aa" class="ne-p"><span class="ne-text">On a Unix system, the translation from source ﬁle to object ﬁle is performed by a compiler driver:</span></p><p id="ue9619857" class="ne-p"><span class="ne-text"></span></p><p id="uaf9afed8" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1668472440052-9f45a121-db27-49bb-86e0-6b4c79179bcc.png" width="696" id="u2337d479" class="ne-image"></p><p id="ude92f498" class="ne-p"><span class="ne-text">Here, the gcc compiler driver reads the source ﬁle </span><code class="ne-code"><span class="ne-text">hello.c</span></code><span class="ne-text"> and translates it into an executable object ﬁle </span><code class="ne-code"><span class="ne-text">hello</span></code><span class="ne-text">. The translation is performed in the sequence of four phases shown in Figure 1.3. The programs that perform the four phases (preprocessor, compiler, assembler, and linker) are known </span><span class="ne-text" style="color: #E8323C">collectively</span><span class="ne-text">  as the compilation system.</span></p><ul class="ne-ul"><li id="u66a50d9d"><span class="ne-text">Preprocessing phase. The preprocessor (cpp) modiﬁes the original C program according to directives </span><span class="ne-text" style="text-decoration: underline">that</span><span class="ne-text"> begin with the </span><code class="ne-code"><span class="ne-text">‘#’</span></code><span class="ne-text"> character. For example, the </span><code class="ne-code"><span class="ne-text">#include &lt;stdio.h&gt;</span></code><span class="ne-text"> command in line 1 of </span><code class="ne-code"><span class="ne-text">hello.c</span></code><span class="ne-text"> tells the preprocessor to read the contents of the system header ﬁle </span><code class="ne-code"><span class="ne-text">stdio.h</span></code><span class="ne-text"> and insert it directly into the program text. The result is another C program, typically with the </span><code class="ne-code"><span class="ne-text">.i</span></code><span class="ne-text"> sufﬁx.</span></li><li id="u9979dc30"><span class="ne-text" style="color: #E8323C">Compilation</span><span class="ne-text"> phase. The compiler (cc1) translates the text ﬁle </span><code class="ne-code"><span class="ne-text">hello.i</span></code><span class="ne-text"> into the text ﬁle hello.s, which contains an assembly-language program. This program includes the following deﬁnition of function main:</span></li></ul><p id="u611e3647" class="ne-p" style="text-align: left"><span class="ne-text">      </span><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1668473023883-ca1d2b75-7b3b-45c2-aca5-b8c78c287524.png" width="238.66666666666666" id="u9aa8485a" class="ne-image"></p><p id="uc5005d4a" class="ne-p" style="text-align: left"><span class="ne-text">       Each of lines 2–7 in this deﬁnition describes one low-level machine-language instruction in a textual form. Assembly language is useful </span><span class="ne-text" style="text-decoration: underline">because</span><span class="ne-text">  it provides a common output language  </span><span class="ne-text" style="text-decoration: underline">for</span><span class="ne-text">  different compilers </span><span class="ne-text" style="text-decoration: underline"> for</span><span class="ne-text"> different high-level languages.  For example, C compilers and Fortran compilers both generate output ﬁles in the same assembly language.</span></p><ul class="ne-ul"><li id="uc96eebf7" style="text-align: left"><span class="ne-text">Assembly phase. Next, </span><code class="ne-code"><span class="ne-text">the assembler </span><sup><span class="ne-text">S</span></sup></code><span class="ne-text">  </span><span class="ne-text" style="background-color: #BA9BF2"> (as)</span><span class="ne-text">   </span><span class="ne-text" style="color: #E8323C">translates </span><sup><span class="ne-text" style="color: #E8323C">v</span></sup><span class="ne-text"> </span><code class="ne-code"><span class="ne-text">hello.s</span></code><span class="ne-text"> into machine-language instructions,  </span><span class="ne-text" style="color: #E8323C">packages </span><sup><span class="ne-text" style="color: #E8323C">v</span></sup><span class="ne-text"> them in a form known as </span><span class="ne-text" style="text-decoration: underline">a relocatable object program 可重定位的目标程序,</span><span class="ne-text"> and stores the result in the object ﬁle </span><code class="ne-code"><span class="ne-text">hello.o</span></code><span class="ne-text">.  This ﬁle is a binary ﬁle （containing 17 bytes） </span><span class="ne-text" style="color: #E8323C">to encode </span><sup><span class="ne-text" style="color: #E8323C">动词不定时？</span></sup><span class="ne-text"> the instructions for function main.  If we were to view hello.o with a text editor, it would appear to be gibberish.</span></li></ul><p id="uec93bc1f" class="ne-p"><br></p><p id="u321f9c1c" class="ne-p"><br></p></div>',body_lake:'<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><p data-lake-id="ucdace451" id="ucdace451"><span data-lake-id="u9ace02c0" id="u9ace02c0">The hello program begins life as a high-level C program </span><u><span data-lake-id="u81a9f2a3" id="u81a9f2a3">because</span></u><span data-lake-id="u89c376b2" id="u89c376b2"> it can be read and understood by human beings in that form. However, in order to run </span><code data-lake-id="u28576b3e" id="u28576b3e"><span data-lake-id="u4e6b4e07" id="u4e6b4e07">hello.c</span></code><span data-lake-id="u5535c4ff" id="u5535c4ff"> on the system, the </span><span data-lake-id="ub1d28279" id="ub1d28279" style="color: #E8323C">individual</span><sup><span data-lake-id="u151e7927" id="u151e7927" style="color: #E8323C">单独的</span></sup><span data-lake-id="ub73bedeb" id="ub73bedeb"> C statements must be translated by other programs into a sequence of low-level machine-language instructions. </span></p><p data-lake-id="u1816b331" id="u1816b331"><span data-lake-id="u2ad42801" id="u2ad42801">​</span><br></p><p data-lake-id="u84ac3ad7" id="u84ac3ad7"><span data-lake-id="u1bedcbc7" id="u1bedcbc7">These instructions are then packaged in a form </span><u><span data-lake-id="u46545da4" id="u46545da4">called</span></u><span data-lake-id="uc37ed434" id="uc37ed434"> an executable object program and stored as a binary disk ﬁle. </span></p><p data-lake-id="u90f6a1e0" id="u90f6a1e0"><span data-lake-id="ud27a8494" id="ud27a8494">​</span><br></p><p data-lake-id="u8b90bc08" id="u8b90bc08"><span data-lake-id="u95d447a7" id="u95d447a7">Object programs </span><u><span data-lake-id="u32f77516" id="u32f77516">are also referred to as </span></u><u><sup><span data-lake-id="u6d7e7d49" id="u6d7e7d49">也称为</span></sup></u><span data-lake-id="ub328dabb" id="ub328dabb"> executable object ﬁles.</span></p><p data-lake-id="u704a7308" id="u704a7308"><span data-lake-id="u6dfabcee" id="u6dfabcee">​</span><br></p><p data-lake-id="u346670aa" id="u346670aa"><span data-lake-id="u3a85462c" id="u3a85462c">On a Unix system, the translation from source ﬁle to object ﬁle is performed by a compiler driver:</span></p><p data-lake-id="ue9619857" id="ue9619857"><span data-lake-id="ua11c2160" id="ua11c2160">​</span><br></p><p data-lake-id="uaf9afed8" id="uaf9afed8"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1668472440052-9f45a121-db27-49bb-86e0-6b4c79179bcc.png%22%2C%22taskId%22%3A%22u4c194054-430a-42f4-8c78-b67e96dcfb9%22%2C%22clientId%22%3A%22u6bb6df7b-79bb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A696%2C%22height%22%3A275%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A149716%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2088%2C%22originHeight%22%3A824%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22SECTION%201.2%20PROGRAMS%20ARE%20TRANSLATED%20BY%20OTHER%20PROGRAMS%20INTO%20DIFFERENT%20FORMS%20PRINTF.O%20PRE-%20HELLO.C%20HELLO.I%20HE1LO%20HELLO.S%20HELLO.0%20COMPILER%20ASSEMBLER%20LINKER%20PROCESSOR%20(AS)%20(CC1)%20(1D)%20(CPP)%20ASSEMBLY%20SOURCE%20MODIFIED%20RELOCATABLE%20EXECUTABLE%20PROGRAM%20OBJECT%20OBJECT%20PROGRAM%20SOURCE%20(TEXT)%20(TEXT)%20PROGRAM%20PROGRAM%20PROGRAMS%20(TEXT)%20(BINARY)%20(BINARY)%20FIGURE%201.3%20THE%20COMPILATION%20SYSTEM.%20LINUX%3E%20GCC%20-O%20HELLO%20HELLO.C%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A656.05695%2C%22y%22%3A60.696392%2C%22width%22%3A205.01035000000002%2C%22height%22%3A42.832347999999996%2C%22text%22%3A%22SECTION%201.2%22%7D%2C%7B%22x%22%3A892.6088%2C%22y%22%3A63.641937%2C%22width%22%3A1158.9132%2C%22height%22%3A43.726967%2C%22text%22%3A%22PROGRAMS%20ARE%20TRANSLATED%20BY%20OTHER%20PROGRAMS%20INTO%20DIFFERENT%20FORMS%22%7D%2C%7B%22x%22%3A1386.9727%2C%22y%22%3A190.39626%2C%22width%22%3A177.77189999999996%2C%22height%22%3A36.399789999999996%2C%22text%22%3A%22PRINTF.O%22%7D%2C%7B%22x%22%3A397.93063%2C%22y%22%3A277.227%2C%22width%22%3A69.22526999999997%2C%22height%22%3A32.68856000000005%2C%22text%22%3A%22PRE-%22%7D%2C%7B%22x%22%3A141.94446%2C%22y%22%3A294.7586%2C%22width%22%3A155.47876000000002%2C%22height%22%3A35.450139999999976%2C%22text%22%3A%22HELLO.C%22%7D%2C%7B%22x%22%3A559.02716%2C%22y%22%3A295.5682%2C%22width%22%3A151.33014000000003%2C%22height%22%3A30.247929999999997%2C%22text%22%3A%22HELLO.I%22%7D%2C%7B%22x%22%3A1863.097%2C%22y%22%3A296.42358%2C%22width%22%3A111.7378000000001%2C%22height%22%3A29.218619999999987%2C%22text%22%3A%22HE1LO%22%7D%2C%7B%22x%22%3A976.67126%2C%22y%22%3A296.49103%2C%22width%22%3A152.32834000000014%2C%22height%22%3A30.102409999999963%2C%22text%22%3A%22HELLO.S%22%7D%2C%7B%22x%22%3A1408.2023%2C%22y%22%3A296.69882%2C%22width%22%3A154.47250000000008%2C%22height%22%3A29.544179999999983%2C%22text%22%3A%22HELLO.0%22%7D%2C%7B%22x%22%3A770.8083%2C%22y%22%3A298.17972%2C%22width%22%3A151.56346999999994%2C%22height%22%3A34.14698000000004%2C%22text%22%3A%22COMPILER%22%7D%2C%7B%22x%22%3A1175.2085%2C%22y%22%3A298.71143%2C%22width%22%3A180.62239999999997%2C%22height%22%3A33.121519999999975%2C%22text%22%3A%22ASSEMBLER%22%7D%2C%7B%22x%22%3A1651.92%2C%22y%22%3A298.9951%2C%22width%22%3A108.52710000000002%2C%22height%22%3A35.17125000000004%2C%22text%22%3A%22LINKER%22%7D%2C%7B%22x%22%3A352.06543%2C%22y%22%3A324.70587%2C%22width%22%3A166.20847000000003%2C%22height%22%3A28.681579999999997%2C%22text%22%3A%22PROCESSOR%22%7D%2C%7B%22x%22%3A1227.3076%2C%22y%22%3A342.93726%2C%22width%22%3A73.23399999999992%2C%22height%22%3A30.855680000000007%2C%22text%22%3A%22(AS)%22%7D%2C%7B%22x%22%3A798.4391%2C%22y%22%3A343.31528%2C%22width%22%3A98.19759999999997%2C%22height%22%3A33.42599000000001%2C%22text%22%3A%22(CC1)%22%7D%2C%7B%22x%22%3A1668.0201%2C%22y%22%3A344.18954%2C%22width%22%3A74.82560000000012%2C%22height%22%3A32.78051999999997%2C%22text%22%3A%22(1D)%22%7D%2C%7B%22x%22%3A392.70074%2C%22y%22%3A366.48062%2C%22width%22%3A89.65296000000001%2C%22height%22%3A33.06143000000003%2C%22text%22%3A%22(CPP)%22%7D%2C%7B%22x%22%3A968.59344%2C%22y%22%3A384.772%2C%22width%22%3A165.01236000000006%2C%22height%22%3A38.56909999999999%2C%22text%22%3A%22ASSEMBLY%22%7D%2C%7B%22x%22%3A162.10965%2C%22y%22%3A385.28076%2C%22width%22%3A121.44968%2C%22height%22%3A33.330960000000005%2C%22text%22%3A%22SOURCE%22%7D%2C%7B%22x%22%3A564.7175%2C%22y%22%3A386.51358%2C%22width%22%3A143.98293999999999%2C%22height%22%3A30.932770000000005%2C%22text%22%3A%22MODIFIED%22%7D%2C%7B%22x%22%3A1387.3433%2C%22y%22%3A386.38702%2C%22width%22%3A204.14229999999998%2C%22height%22%3A32.32682%2C%22text%22%3A%22RELOCATABLE%22%7D%2C%7B%22x%22%3A1825.4648%2C%22y%22%3A386.88754%2C%22width%22%3A192.10950000000003%2C%22height%22%3A30.36124000000001%2C%22text%22%3A%22EXECUTABLE%22%7D%2C%7B%22x%22%3A150.99731%2C%22y%22%3A428.6814%2C%22width%22%3A142.96006000000003%2C%22height%22%3A34.948199999999986%2C%22text%22%3A%22PROGRAM%22%7D%2C%7B%22x%22%3A1438.1638%2C%22y%22%3A429.70352%2C%22width%22%3A104.26829999999995%2C%22height%22%3A31.42157999999995%2C%22text%22%3A%22OBJECT%22%7D%2C%7B%22x%22%3A1871.4448%2C%22y%22%3A432.44623%2C%22width%22%3A100.18849999999998%2C%22height%22%3A28.790039999999976%2C%22text%22%3A%22OBJECT%22%7D%2C%7B%22x%22%3A980.33777%2C%22y%22%3A434.03723%2C%22width%22%3A142.43602999999996%2C%22height%22%3A33.857169999999996%2C%22text%22%3A%22PROGRAM%22%7D%2C%7B%22x%22%3A579.5159%2C%22y%22%3A434.96143%2C%22width%22%3A112.87729999999999%2C%22height%22%3A25.171569999999974%2C%22text%22%3A%22SOURCE%22%7D%2C%7B%22x%22%3A181.19305%2C%22y%22%3A470.6873%2C%22width%22%3A83.33817000000002%2C%22height%22%3A36.61867000000001%2C%22text%22%3A%22(TEXT)%22%7D%2C%7B%22x%22%3A1005.59753%2C%22y%22%3A471.51205%2C%22width%22%3A90.76036999999997%2C%22height%22%3A40.89635000000004%2C%22text%22%3A%22(TEXT)%22%7D%2C%7B%22x%22%3A565.64233%2C%22y%22%3A476.2772%2C%22width%22%3A141.40430000000003%2C%22height%22%3A29.579430000000002%2C%22text%22%3A%22PROGRAM%22%7D%2C%7B%22x%22%3A1849.3352%2C%22y%22%3A475.19217%2C%22width%22%3A143.55549999999994%2C%22height%22%3A31.218780000000038%2C%22text%22%3A%22PROGRAM%22%7D%2C%7B%22x%22%3A1408.8455%2C%22y%22%3A476.85565%2C%22width%22%3A162.82150000000001%2C%22height%22%3A30.795019999999965%2C%22text%22%3A%22PROGRAMS%22%7D%2C%7B%22x%22%3A595.56714%2C%22y%22%3A516.6538%2C%22width%22%3A83.78085999999996%2C%22height%22%3A35.46799999999996%2C%22text%22%3A%22(TEXT)%22%7D%2C%7B%22x%22%3A1855.6577%2C%22y%22%3A517.08905%2C%22width%22%3A129.92599999999993%2C%22height%22%3A37.38959%2C%22text%22%3A%22(BINARY)%22%7D%2C%7B%22x%22%3A1427.5088%2C%22y%22%3A517.52313%2C%22width%22%3A128.93259999999987%2C%22height%22%3A34.901610000000005%2C%22text%22%3A%22(BINARY)%22%7D%2C%7B%22x%22%3A110.111084%2C%22y%22%3A595.859%2C%22width%22%3A731.554116%2C%22height%22%3A47.29549999999995%2C%22text%22%3A%22FIGURE%201.3%20THE%20COMPILATION%20SYSTEM.%22%7D%2C%7B%22x%22%3A108.86451%2C%22y%22%3A756.8415%2C%22width%22%3A644.40909%2C%22height%22%3A44.820550000000026%2C%22text%22%3A%22LINUX%3E%20GCC%20-O%20HELLO%20HELLO.C%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23f4f4f4%22%2C%22id%22%3A%22u2337d479%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ude92f498" id="ude92f498"><span data-lake-id="u74a49ef3" id="u74a49ef3">Here, the gcc compiler driver reads the source ﬁle </span><code data-lake-id="u64ea630d" id="u64ea630d"><span data-lake-id="ub694efd9" id="ub694efd9">hello.c</span></code><span data-lake-id="u91004053" id="u91004053"> and translates it into an executable object ﬁle </span><code data-lake-id="u4fd1b2bf" id="u4fd1b2bf"><span data-lake-id="u16bb4eb4" id="u16bb4eb4">hello</span></code><span data-lake-id="u4604455c" id="u4604455c">. The translation is performed in the sequence of four phases shown in Figure 1.3. The programs that perform the four phases (preprocessor, compiler, assembler, and linker) are known </span><span data-lake-id="u47096eba" id="u47096eba" style="color: #E8323C">collectively</span><span data-lake-id="u21c5a06a" id="u21c5a06a">  as the compilation system.</span></p><ul list="ua0f92e18"><li fid="u8a6943e7" data-lake-id="u66a50d9d" id="u66a50d9d"><span data-lake-id="u06532a29" id="u06532a29">Preprocessing phase. The preprocessor (cpp) modiﬁes the original C program according to directives </span><u><span data-lake-id="u47445cec" id="u47445cec">that</span></u><span data-lake-id="uc3cd5c49" id="uc3cd5c49"> begin with the </span><code data-lake-id="u62cab8cd" id="u62cab8cd"><span data-lake-id="u50befd68" id="u50befd68">‘#’</span></code><span data-lake-id="u32268e60" id="u32268e60"> character. For example, the </span><code data-lake-id="u183c50d0" id="u183c50d0"><span data-lake-id="ub51964c1" id="ub51964c1">#include &lt;stdio.h&gt;</span></code><span data-lake-id="u21b730be" id="u21b730be"> command in line 1 of </span><code data-lake-id="u73941fe4" id="u73941fe4"><span data-lake-id="u92c359a1" id="u92c359a1">hello.c</span></code><span data-lake-id="u91294678" id="u91294678"> tells the preprocessor to read the contents of the system header ﬁle </span><code data-lake-id="u2a52419f" id="u2a52419f"><span data-lake-id="u9bba9d0d" id="u9bba9d0d">stdio.h</span></code><span data-lake-id="u0cb79fab" id="u0cb79fab"> and insert it directly into the program text. The result is another C program, typically with the </span><code data-lake-id="ube146195" id="ube146195"><span data-lake-id="u9e56ce02" id="u9e56ce02">.i</span></code><span data-lake-id="u37fcf46e" id="u37fcf46e"> sufﬁx.</span></li><li fid="u8a6943e7" data-lake-id="u9979dc30" id="u9979dc30"><span data-lake-id="u8c214220" id="u8c214220" style="color: #E8323C">Compilation</span><span data-lake-id="u6067c623" id="u6067c623"> phase. The compiler (cc1) translates the text ﬁle </span><code data-lake-id="u194c60c7" id="u194c60c7"><span data-lake-id="u9fb13610" id="u9fb13610">hello.i</span></code><span data-lake-id="u71227094" id="u71227094"> into the text ﬁle hello.s, which contains an assembly-language program. This program includes the following deﬁnition of function main:</span></li></ul><p data-lake-id="u611e3647" id="u611e3647" style="text-align: left"><span data-lake-id="ua943549b" id="ua943549b">      </span><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1668473023883-ca1d2b75-7b3b-45c2-aca5-b8c78c287524.png%22%2C%22taskId%22%3A%22u00b37ebe-ca07-4fbb-9857-8220bb88af5%22%2C%22clientId%22%3A%22u6bb6df7b-79bb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A238.66666666666666%2C%22height%22%3A141%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A48400%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A716%2C%22originHeight%22%3A424%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22MAIN%3A%20%248%2C%20%25RSP%202%20SUBG%20%24.LCO%2C%20%25EDI%20345%20MOVI%20CALL%20PUTS%20%240%2C%20%25EAX%20MOVL%20%248%2C%20%25RSP%20ADDQ%207%20RET%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A127.77262%2C%22y%22%3A28.967493%2C%22width%22%3A114.22848%2C%22height%22%3A30.873617%2C%22text%22%3A%22MAIN%3A%22%7D%2C%7B%22x%22%3A366.21664%2C%22y%22%3A77.671165%2C%22width%22%3A190.50211000000002%2C%22height%22%3A46.303465%2C%22text%22%3A%22%248%2C%20%25RSP%22%7D%2C%7B%22x%22%3A32.790806%2C%22y%22%3A86.228615%2C%22width%22%3A26.446377%2C%22height%22%3A31.907534999999996%2C%22text%22%3A%222%22%7D%2C%7B%22x%22%3A177.71126%2C%22y%22%3A86.49523%2C%22width%22%3A93.98053999999999%2C%22height%22%3A35.57015%2C%22text%22%3A%22SUBG%22%7D%2C%7B%22x%22%3A364.12378%2C%22y%22%3A136.92036%2C%22width%22%3A262.56048999999996%2C%22height%22%3A43.65900000000002%2C%22text%22%3A%22%24.LCO%2C%20%25EDI%22%7D%2C%7B%22x%22%3A32.573116%2C%22y%22%3A143.11548%2C%22width%22%3A26.40522%2C%22height%22%3A145.72852%2C%22text%22%3A%22345%22%7D%2C%7B%22x%22%3A173.72722%2C%22y%22%3A144.20459%2C%22width%22%3A96.00968%2C%22height%22%3A31.292040000000014%2C%22text%22%3A%22MOVI%22%7D%2C%7B%22x%22%3A176.92058%2C%22y%22%3A196.72319%2C%22width%22%3A93.83479000000003%2C%22height%22%3A33.725420000000014%2C%22text%22%3A%22CALL%22%7D%2C%7B%22x%22%3A359.21097%2C%22y%22%3A198.23427%2C%22width%22%3A101.72723000000002%2C%22height%22%3A40.2269%2C%22text%22%3A%22PUTS%22%7D%2C%7B%22x%22%3A366.97195%2C%22y%22%3A248.49022%2C%22width%22%3A189.88715000000002%2C%22height%22%3A41.02189999999999%2C%22text%22%3A%22%240%2C%20%25EAX%22%7D%2C%7B%22x%22%3A173.96356%2C%22y%22%3A256.95407%2C%22width%22%3A96.61837999999997%2C%22height%22%3A30.38409999999999%2C%22text%22%3A%22MOVL%22%7D%2C%7B%22x%22%3A366.30777%2C%22y%22%3A305.0668%2C%22width%22%3A190.59682999999995%2C%22height%22%3A48.027300000000025%2C%22text%22%3A%22%248%2C%20%25RSP%22%7D%2C%7B%22x%22%3A177.72778%2C%22y%22%3A310.41504%2C%22width%22%3A97.21325999999999%2C%22height%22%3A41.62536%2C%22text%22%3A%22ADDQ%22%7D%2C%7B%22x%22%3A33.679806%2C%22y%22%3A366.45926%2C%22width%22%3A24.086292%2C%22height%22%3A35.68114000000003%2C%22text%22%3A%227%22%7D%2C%7B%22x%22%3A176.57622%2C%22y%22%3A371.61868%2C%22width%22%3A69.8013%2C%22height%22%3A27.77460000000002%2C%22text%22%3A%22RET%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23f3f3f3%22%2C%22id%22%3A%22u9aa8485a%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="uc5005d4a" id="uc5005d4a" style="text-align: left"><span data-lake-id="u55f4ed65" id="u55f4ed65">       Each of lines 2–7 in this deﬁnition describes one low-level machine-language instruction in a textual form. Assembly language is useful </span><u><span data-lake-id="ua17a9489" id="ua17a9489">because</span></u><span data-lake-id="u8c6c82a1" id="u8c6c82a1">  it provides a common output language  </span><u><span data-lake-id="u7090fde4" id="u7090fde4">for</span></u><span data-lake-id="u5aa2850f" id="u5aa2850f">  different compilers </span><u><span data-lake-id="u688b2823" id="u688b2823"> for</span></u><span data-lake-id="u5a24dd91" id="u5a24dd91"> different high-level languages.  For example, C compilers and Fortran compilers both generate output ﬁles in the same assembly language.</span></p><ul list="u31d0d4c9"><li fid="ucfe06c16" data-lake-id="uc96eebf7" id="uc96eebf7" style="text-align: left"><span data-lake-id="u53732538" id="u53732538">Assembly phase. Next, </span><code data-lake-id="ud0bc1eb1" id="ud0bc1eb1"><span data-lake-id="ue7e55dc9" id="ue7e55dc9">the assembler </span><sup><span data-lake-id="u4b4bea68" id="u4b4bea68">S</span></sup></code><span data-lake-id="u1ff56276" id="u1ff56276">  </span><span data-lake-id="u50ec58f8" id="u50ec58f8" style="background-color: #BA9BF2"> (as)</span><span data-lake-id="uc9f8e1f6" id="uc9f8e1f6">   </span><span data-lake-id="ue4373fc8" id="ue4373fc8" style="color: #E8323C">translates </span><sup><span data-lake-id="ub8a18fca" id="ub8a18fca" style="color: #E8323C">v</span></sup><span data-lake-id="uf205f8a7" id="uf205f8a7"> </span><code data-lake-id="u61aaf39c" id="u61aaf39c"><span data-lake-id="u91c18a26" id="u91c18a26">hello.s</span></code><span data-lake-id="u020b765f" id="u020b765f"> into machine-language instructions,  </span><span data-lake-id="u6632b5a0" id="u6632b5a0" style="color: #E8323C">packages </span><sup><span data-lake-id="udc3f951a" id="udc3f951a" style="color: #E8323C">v</span></sup><span data-lake-id="u90d7b4c3" id="u90d7b4c3"> them in a form known as </span><u><span data-lake-id="ub5c11c3f" id="ub5c11c3f">a relocatable object program 可重定位的目标程序,</span></u><span data-lake-id="u0f49a9f9" id="u0f49a9f9"> and stores the result in the object ﬁle </span><code data-lake-id="ua8d146f7" id="ua8d146f7"><span data-lake-id="u644228eb" id="u644228eb">hello.o</span></code><span data-lake-id="ubb2f55bf" id="ubb2f55bf">.  This ﬁle is a binary ﬁle （containing 17 bytes） </span><span data-lake-id="uf282c289" id="uf282c289" style="color: #E8323C">to encode </span><sup><span data-lake-id="u9efbcfe3" id="u9efbcfe3" style="color: #E8323C">动词不定时？</span></sup><span data-lake-id="uc1dd6fcc" id="uc1dd6fcc"> the instructions for function main.  If we were to view hello.o with a text editor, it would appear to be gibberish.</span></li></ul><p data-lake-id="uec93bc1f" id="uec93bc1f"><br></p><p data-lake-id="u321f9c1c" id="u321f9c1c"><br></p>',body_draft_lake:'<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><p data-lake-id="ucdace451" id="ucdace451"><span data-lake-id="u9ace02c0" id="u9ace02c0">The hello program begins life as a high-level C program </span><u><span data-lake-id="u81a9f2a3" id="u81a9f2a3">because</span></u><span data-lake-id="u89c376b2" id="u89c376b2"> it can be read and understood by human beings in that form. However, in order to run </span><code data-lake-id="u28576b3e" id="u28576b3e"><span data-lake-id="u4e6b4e07" id="u4e6b4e07">hello.c</span></code><span data-lake-id="u5535c4ff" id="u5535c4ff"> on the system, the </span><span data-lake-id="ub1d28279" id="ub1d28279" style="color: #E8323C">individual</span><sup><span data-lake-id="u151e7927" id="u151e7927" style="color: #E8323C">单独的</span></sup><span data-lake-id="ub73bedeb" id="ub73bedeb"> C statements must be translated by other programs into a sequence of low-level machine-language instructions. </span></p><p data-lake-id="u1816b331" id="u1816b331"><span data-lake-id="u2ad42801" id="u2ad42801">​</span><br></p><p data-lake-id="u84ac3ad7" id="u84ac3ad7"><span data-lake-id="u1bedcbc7" id="u1bedcbc7">These instructions are then packaged in a form </span><u><span data-lake-id="u46545da4" id="u46545da4">called</span></u><span data-lake-id="uc37ed434" id="uc37ed434"> an executable object program and stored as a binary disk ﬁle. </span></p><p data-lake-id="u90f6a1e0" id="u90f6a1e0"><span data-lake-id="ud27a8494" id="ud27a8494">​</span><br></p><p data-lake-id="u8b90bc08" id="u8b90bc08"><span data-lake-id="u95d447a7" id="u95d447a7">Object programs </span><u><span data-lake-id="u32f77516" id="u32f77516">are also referred to as </span></u><u><sup><span data-lake-id="u6d7e7d49" id="u6d7e7d49">也称为</span></sup></u><span data-lake-id="ub328dabb" id="ub328dabb"> executable object ﬁles.</span></p><p data-lake-id="u704a7308" id="u704a7308"><span data-lake-id="u6dfabcee" id="u6dfabcee">​</span><br></p><p data-lake-id="u346670aa" id="u346670aa"><span data-lake-id="u3a85462c" id="u3a85462c">On a Unix system, the translation from source ﬁle to object ﬁle is performed by a compiler driver:</span></p><p data-lake-id="ue9619857" id="ue9619857"><span data-lake-id="ua11c2160" id="ua11c2160">​</span><br></p><p data-lake-id="uaf9afed8" id="uaf9afed8"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1668472440052-9f45a121-db27-49bb-86e0-6b4c79179bcc.png%22%2C%22taskId%22%3A%22u4c194054-430a-42f4-8c78-b67e96dcfb9%22%2C%22clientId%22%3A%22u6bb6df7b-79bb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A696%2C%22height%22%3A275%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A149716%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2088%2C%22originHeight%22%3A824%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22SECTION%201.2%20PROGRAMS%20ARE%20TRANSLATED%20BY%20OTHER%20PROGRAMS%20INTO%20DIFFERENT%20FORMS%20PRINTF.O%20PRE-%20HELLO.C%20HELLO.I%20HE1LO%20HELLO.S%20HELLO.0%20COMPILER%20ASSEMBLER%20LINKER%20PROCESSOR%20(AS)%20(CC1)%20(1D)%20(CPP)%20ASSEMBLY%20SOURCE%20MODIFIED%20RELOCATABLE%20EXECUTABLE%20PROGRAM%20OBJECT%20OBJECT%20PROGRAM%20SOURCE%20(TEXT)%20(TEXT)%20PROGRAM%20PROGRAM%20PROGRAMS%20(TEXT)%20(BINARY)%20(BINARY)%20FIGURE%201.3%20THE%20COMPILATION%20SYSTEM.%20LINUX%3E%20GCC%20-O%20HELLO%20HELLO.C%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A656.05695%2C%22y%22%3A60.696392%2C%22width%22%3A205.01035000000002%2C%22height%22%3A42.832347999999996%2C%22text%22%3A%22SECTION%201.2%22%7D%2C%7B%22x%22%3A892.6088%2C%22y%22%3A63.641937%2C%22width%22%3A1158.9132%2C%22height%22%3A43.726967%2C%22text%22%3A%22PROGRAMS%20ARE%20TRANSLATED%20BY%20OTHER%20PROGRAMS%20INTO%20DIFFERENT%20FORMS%22%7D%2C%7B%22x%22%3A1386.9727%2C%22y%22%3A190.39626%2C%22width%22%3A177.77189999999996%2C%22height%22%3A36.399789999999996%2C%22text%22%3A%22PRINTF.O%22%7D%2C%7B%22x%22%3A397.93063%2C%22y%22%3A277.227%2C%22width%22%3A69.22526999999997%2C%22height%22%3A32.68856000000005%2C%22text%22%3A%22PRE-%22%7D%2C%7B%22x%22%3A141.94446%2C%22y%22%3A294.7586%2C%22width%22%3A155.47876000000002%2C%22height%22%3A35.450139999999976%2C%22text%22%3A%22HELLO.C%22%7D%2C%7B%22x%22%3A559.02716%2C%22y%22%3A295.5682%2C%22width%22%3A151.33014000000003%2C%22height%22%3A30.247929999999997%2C%22text%22%3A%22HELLO.I%22%7D%2C%7B%22x%22%3A1863.097%2C%22y%22%3A296.42358%2C%22width%22%3A111.7378000000001%2C%22height%22%3A29.218619999999987%2C%22text%22%3A%22HE1LO%22%7D%2C%7B%22x%22%3A976.67126%2C%22y%22%3A296.49103%2C%22width%22%3A152.32834000000014%2C%22height%22%3A30.102409999999963%2C%22text%22%3A%22HELLO.S%22%7D%2C%7B%22x%22%3A1408.2023%2C%22y%22%3A296.69882%2C%22width%22%3A154.47250000000008%2C%22height%22%3A29.544179999999983%2C%22text%22%3A%22HELLO.0%22%7D%2C%7B%22x%22%3A770.8083%2C%22y%22%3A298.17972%2C%22width%22%3A151.56346999999994%2C%22height%22%3A34.14698000000004%2C%22text%22%3A%22COMPILER%22%7D%2C%7B%22x%22%3A1175.2085%2C%22y%22%3A298.71143%2C%22width%22%3A180.62239999999997%2C%22height%22%3A33.121519999999975%2C%22text%22%3A%22ASSEMBLER%22%7D%2C%7B%22x%22%3A1651.92%2C%22y%22%3A298.9951%2C%22width%22%3A108.52710000000002%2C%22height%22%3A35.17125000000004%2C%22text%22%3A%22LINKER%22%7D%2C%7B%22x%22%3A352.06543%2C%22y%22%3A324.70587%2C%22width%22%3A166.20847000000003%2C%22height%22%3A28.681579999999997%2C%22text%22%3A%22PROCESSOR%22%7D%2C%7B%22x%22%3A1227.3076%2C%22y%22%3A342.93726%2C%22width%22%3A73.23399999999992%2C%22height%22%3A30.855680000000007%2C%22text%22%3A%22(AS)%22%7D%2C%7B%22x%22%3A798.4391%2C%22y%22%3A343.31528%2C%22width%22%3A98.19759999999997%2C%22height%22%3A33.42599000000001%2C%22text%22%3A%22(CC1)%22%7D%2C%7B%22x%22%3A1668.0201%2C%22y%22%3A344.18954%2C%22width%22%3A74.82560000000012%2C%22height%22%3A32.78051999999997%2C%22text%22%3A%22(1D)%22%7D%2C%7B%22x%22%3A392.70074%2C%22y%22%3A366.48062%2C%22width%22%3A89.65296000000001%2C%22height%22%3A33.06143000000003%2C%22text%22%3A%22(CPP)%22%7D%2C%7B%22x%22%3A968.59344%2C%22y%22%3A384.772%2C%22width%22%3A165.01236000000006%2C%22height%22%3A38.56909999999999%2C%22text%22%3A%22ASSEMBLY%22%7D%2C%7B%22x%22%3A162.10965%2C%22y%22%3A385.28076%2C%22width%22%3A121.44968%2C%22height%22%3A33.330960000000005%2C%22text%22%3A%22SOURCE%22%7D%2C%7B%22x%22%3A564.7175%2C%22y%22%3A386.51358%2C%22width%22%3A143.98293999999999%2C%22height%22%3A30.932770000000005%2C%22text%22%3A%22MODIFIED%22%7D%2C%7B%22x%22%3A1387.3433%2C%22y%22%3A386.38702%2C%22width%22%3A204.14229999999998%2C%22height%22%3A32.32682%2C%22text%22%3A%22RELOCATABLE%22%7D%2C%7B%22x%22%3A1825.4648%2C%22y%22%3A386.88754%2C%22width%22%3A192.10950000000003%2C%22height%22%3A30.36124000000001%2C%22text%22%3A%22EXECUTABLE%22%7D%2C%7B%22x%22%3A150.99731%2C%22y%22%3A428.6814%2C%22width%22%3A142.96006000000003%2C%22height%22%3A34.948199999999986%2C%22text%22%3A%22PROGRAM%22%7D%2C%7B%22x%22%3A1438.1638%2C%22y%22%3A429.70352%2C%22width%22%3A104.26829999999995%2C%22height%22%3A31.42157999999995%2C%22text%22%3A%22OBJECT%22%7D%2C%7B%22x%22%3A1871.4448%2C%22y%22%3A432.44623%2C%22width%22%3A100.18849999999998%2C%22height%22%3A28.790039999999976%2C%22text%22%3A%22OBJECT%22%7D%2C%7B%22x%22%3A980.33777%2C%22y%22%3A434.03723%2C%22width%22%3A142.43602999999996%2C%22height%22%3A33.857169999999996%2C%22text%22%3A%22PROGRAM%22%7D%2C%7B%22x%22%3A579.5159%2C%22y%22%3A434.96143%2C%22width%22%3A112.87729999999999%2C%22height%22%3A25.171569999999974%2C%22text%22%3A%22SOURCE%22%7D%2C%7B%22x%22%3A181.19305%2C%22y%22%3A470.6873%2C%22width%22%3A83.33817000000002%2C%22height%22%3A36.61867000000001%2C%22text%22%3A%22(TEXT)%22%7D%2C%7B%22x%22%3A1005.59753%2C%22y%22%3A471.51205%2C%22width%22%3A90.76036999999997%2C%22height%22%3A40.89635000000004%2C%22text%22%3A%22(TEXT)%22%7D%2C%7B%22x%22%3A565.64233%2C%22y%22%3A476.2772%2C%22width%22%3A141.40430000000003%2C%22height%22%3A29.579430000000002%2C%22text%22%3A%22PROGRAM%22%7D%2C%7B%22x%22%3A1849.3352%2C%22y%22%3A475.19217%2C%22width%22%3A143.55549999999994%2C%22height%22%3A31.218780000000038%2C%22text%22%3A%22PROGRAM%22%7D%2C%7B%22x%22%3A1408.8455%2C%22y%22%3A476.85565%2C%22width%22%3A162.82150000000001%2C%22height%22%3A30.795019999999965%2C%22text%22%3A%22PROGRAMS%22%7D%2C%7B%22x%22%3A595.56714%2C%22y%22%3A516.6538%2C%22width%22%3A83.78085999999996%2C%22height%22%3A35.46799999999996%2C%22text%22%3A%22(TEXT)%22%7D%2C%7B%22x%22%3A1855.6577%2C%22y%22%3A517.08905%2C%22width%22%3A129.92599999999993%2C%22height%22%3A37.38959%2C%22text%22%3A%22(BINARY)%22%7D%2C%7B%22x%22%3A1427.5088%2C%22y%22%3A517.52313%2C%22width%22%3A128.93259999999987%2C%22height%22%3A34.901610000000005%2C%22text%22%3A%22(BINARY)%22%7D%2C%7B%22x%22%3A110.111084%2C%22y%22%3A595.859%2C%22width%22%3A731.554116%2C%22height%22%3A47.29549999999995%2C%22text%22%3A%22FIGURE%201.3%20THE%20COMPILATION%20SYSTEM.%22%7D%2C%7B%22x%22%3A108.86451%2C%22y%22%3A756.8415%2C%22width%22%3A644.40909%2C%22height%22%3A44.820550000000026%2C%22text%22%3A%22LINUX%3E%20GCC%20-O%20HELLO%20HELLO.C%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23f4f4f4%22%2C%22id%22%3A%22u2337d479%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ude92f498" id="ude92f498"><span data-lake-id="u74a49ef3" id="u74a49ef3">Here, the gcc compiler driver reads the source ﬁle </span><code data-lake-id="u64ea630d" id="u64ea630d"><span data-lake-id="ub694efd9" id="ub694efd9">hello.c</span></code><span data-lake-id="u91004053" id="u91004053"> and translates it into an executable object ﬁle </span><code data-lake-id="u4fd1b2bf" id="u4fd1b2bf"><span data-lake-id="u16bb4eb4" id="u16bb4eb4">hello</span></code><span data-lake-id="u4604455c" id="u4604455c">. The translation is performed in the sequence of four phases shown in Figure 1.3. The programs that perform the four phases (preprocessor, compiler, assembler, and linker) are known </span><span data-lake-id="u47096eba" id="u47096eba" style="color: #E8323C">collectively</span><span data-lake-id="u21c5a06a" id="u21c5a06a">  as the compilation system.</span></p><ul list="ua0f92e18"><li fid="u8a6943e7" data-lake-id="u66a50d9d" id="u66a50d9d"><span data-lake-id="u06532a29" id="u06532a29">Preprocessing phase. The preprocessor (cpp) modiﬁes the original C program according to directives </span><u><span data-lake-id="u47445cec" id="u47445cec">that</span></u><span data-lake-id="uc3cd5c49" id="uc3cd5c49"> begin with the </span><code data-lake-id="u62cab8cd" id="u62cab8cd"><span data-lake-id="u50befd68" id="u50befd68">‘#’</span></code><span data-lake-id="u32268e60" id="u32268e60"> character. For example, the </span><code data-lake-id="u183c50d0" id="u183c50d0"><span data-lake-id="ub51964c1" id="ub51964c1">#include &lt;stdio.h&gt;</span></code><span data-lake-id="u21b730be" id="u21b730be"> command in line 1 of </span><code data-lake-id="u73941fe4" id="u73941fe4"><span data-lake-id="u92c359a1" id="u92c359a1">hello.c</span></code><span data-lake-id="u91294678" id="u91294678"> tells the preprocessor to read the contents of the system header ﬁle </span><code data-lake-id="u2a52419f" id="u2a52419f"><span data-lake-id="u9bba9d0d" id="u9bba9d0d">stdio.h</span></code><span data-lake-id="u0cb79fab" id="u0cb79fab"> and insert it directly into the program text. The result is another C program, typically with the </span><code data-lake-id="ube146195" id="ube146195"><span data-lake-id="u9e56ce02" id="u9e56ce02">.i</span></code><span data-lake-id="u37fcf46e" id="u37fcf46e"> sufﬁx.</span></li><li fid="u8a6943e7" data-lake-id="u9979dc30" id="u9979dc30"><span data-lake-id="u8c214220" id="u8c214220" style="color: #E8323C">Compilation</span><span data-lake-id="u6067c623" id="u6067c623"> phase. The compiler (cc1) translates the text ﬁle </span><code data-lake-id="u194c60c7" id="u194c60c7"><span data-lake-id="u9fb13610" id="u9fb13610">hello.i</span></code><span data-lake-id="u71227094" id="u71227094"> into the text ﬁle hello.s, which contains an assembly-language program. This program includes the following deﬁnition of function main:</span></li></ul><p data-lake-id="u611e3647" id="u611e3647" style="text-align: left"><span data-lake-id="ua943549b" id="ua943549b">      </span><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1668473023883-ca1d2b75-7b3b-45c2-aca5-b8c78c287524.png%22%2C%22taskId%22%3A%22u00b37ebe-ca07-4fbb-9857-8220bb88af5%22%2C%22clientId%22%3A%22u6bb6df7b-79bb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A238.66666666666666%2C%22height%22%3A141%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A48400%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A716%2C%22originHeight%22%3A424%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22MAIN%3A%20%248%2C%20%25RSP%202%20SUBG%20%24.LCO%2C%20%25EDI%20345%20MOVI%20CALL%20PUTS%20%240%2C%20%25EAX%20MOVL%20%248%2C%20%25RSP%20ADDQ%207%20RET%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A127.77262%2C%22y%22%3A28.967493%2C%22width%22%3A114.22848%2C%22height%22%3A30.873617%2C%22text%22%3A%22MAIN%3A%22%7D%2C%7B%22x%22%3A366.21664%2C%22y%22%3A77.671165%2C%22width%22%3A190.50211000000002%2C%22height%22%3A46.303465%2C%22text%22%3A%22%248%2C%20%25RSP%22%7D%2C%7B%22x%22%3A32.790806%2C%22y%22%3A86.228615%2C%22width%22%3A26.446377%2C%22height%22%3A31.907534999999996%2C%22text%22%3A%222%22%7D%2C%7B%22x%22%3A177.71126%2C%22y%22%3A86.49523%2C%22width%22%3A93.98053999999999%2C%22height%22%3A35.57015%2C%22text%22%3A%22SUBG%22%7D%2C%7B%22x%22%3A364.12378%2C%22y%22%3A136.92036%2C%22width%22%3A262.56048999999996%2C%22height%22%3A43.65900000000002%2C%22text%22%3A%22%24.LCO%2C%20%25EDI%22%7D%2C%7B%22x%22%3A32.573116%2C%22y%22%3A143.11548%2C%22width%22%3A26.40522%2C%22height%22%3A145.72852%2C%22text%22%3A%22345%22%7D%2C%7B%22x%22%3A173.72722%2C%22y%22%3A144.20459%2C%22width%22%3A96.00968%2C%22height%22%3A31.292040000000014%2C%22text%22%3A%22MOVI%22%7D%2C%7B%22x%22%3A176.92058%2C%22y%22%3A196.72319%2C%22width%22%3A93.83479000000003%2C%22height%22%3A33.725420000000014%2C%22text%22%3A%22CALL%22%7D%2C%7B%22x%22%3A359.21097%2C%22y%22%3A198.23427%2C%22width%22%3A101.72723000000002%2C%22height%22%3A40.2269%2C%22text%22%3A%22PUTS%22%7D%2C%7B%22x%22%3A366.97195%2C%22y%22%3A248.49022%2C%22width%22%3A189.88715000000002%2C%22height%22%3A41.02189999999999%2C%22text%22%3A%22%240%2C%20%25EAX%22%7D%2C%7B%22x%22%3A173.96356%2C%22y%22%3A256.95407%2C%22width%22%3A96.61837999999997%2C%22height%22%3A30.38409999999999%2C%22text%22%3A%22MOVL%22%7D%2C%7B%22x%22%3A366.30777%2C%22y%22%3A305.0668%2C%22width%22%3A190.59682999999995%2C%22height%22%3A48.027300000000025%2C%22text%22%3A%22%248%2C%20%25RSP%22%7D%2C%7B%22x%22%3A177.72778%2C%22y%22%3A310.41504%2C%22width%22%3A97.21325999999999%2C%22height%22%3A41.62536%2C%22text%22%3A%22ADDQ%22%7D%2C%7B%22x%22%3A33.679806%2C%22y%22%3A366.45926%2C%22width%22%3A24.086292%2C%22height%22%3A35.68114000000003%2C%22text%22%3A%227%22%7D%2C%7B%22x%22%3A176.57622%2C%22y%22%3A371.61868%2C%22width%22%3A69.8013%2C%22height%22%3A27.77460000000002%2C%22text%22%3A%22RET%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23f3f3f3%22%2C%22id%22%3A%22u9aa8485a%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="uc5005d4a" id="uc5005d4a" style="text-align: left"><span data-lake-id="u55f4ed65" id="u55f4ed65">       Each of lines 2–7 in this deﬁnition describes one low-level machine-language instruction in a textual form. Assembly language is useful </span><u><span data-lake-id="ua17a9489" id="ua17a9489">because</span></u><span data-lake-id="u8c6c82a1" id="u8c6c82a1">  it provides a common output language  </span><u><span data-lake-id="u7090fde4" id="u7090fde4">for</span></u><span data-lake-id="u5aa2850f" id="u5aa2850f">  different compilers </span><u><span data-lake-id="u688b2823" id="u688b2823"> for</span></u><span data-lake-id="u5a24dd91" id="u5a24dd91"> different high-level languages.  For example, C compilers and Fortran compilers both generate output ﬁles in the same assembly language.</span></p><ul list="u31d0d4c9"><li fid="ucfe06c16" data-lake-id="uc96eebf7" id="uc96eebf7" style="text-align: left"><span data-lake-id="u53732538" id="u53732538">Assembly phase. Next, </span><code data-lake-id="ud0bc1eb1" id="ud0bc1eb1"><span data-lake-id="ue7e55dc9" id="ue7e55dc9">the assembler </span><sup><span data-lake-id="u4b4bea68" id="u4b4bea68">S</span></sup></code><span data-lake-id="u1ff56276" id="u1ff56276">  </span><span data-lake-id="u50ec58f8" id="u50ec58f8" style="background-color: #BA9BF2"> (as)</span><span data-lake-id="uc9f8e1f6" id="uc9f8e1f6">   </span><span data-lake-id="ue4373fc8" id="ue4373fc8" style="color: #E8323C">translates </span><sup><span data-lake-id="ub8a18fca" id="ub8a18fca" style="color: #E8323C">v</span></sup><span data-lake-id="uf205f8a7" id="uf205f8a7"> </span><code data-lake-id="u61aaf39c" id="u61aaf39c"><span data-lake-id="u91c18a26" id="u91c18a26">hello.s</span></code><span data-lake-id="u020b765f" id="u020b765f"> into machine-language instructions,  </span><span data-lake-id="u6632b5a0" id="u6632b5a0" style="color: #E8323C">packages </span><sup><span data-lake-id="udc3f951a" id="udc3f951a" style="color: #E8323C">v</span></sup><span data-lake-id="u90d7b4c3" id="u90d7b4c3"> them in a form known as </span><u><span data-lake-id="ub5c11c3f" id="ub5c11c3f">a relocatable object program 可重定位的目标程序,</span></u><span data-lake-id="u0f49a9f9" id="u0f49a9f9"> and stores the result in the object ﬁle </span><code data-lake-id="ua8d146f7" id="ua8d146f7"><span data-lake-id="u644228eb" id="u644228eb">hello.o</span></code><span data-lake-id="ubb2f55bf" id="ubb2f55bf">.  This ﬁle is a binary ﬁle （containing 17 bytes） </span><span data-lake-id="uf282c289" id="uf282c289" style="color: #E8323C">to encode </span><sup><span data-lake-id="u9efbcfe3" id="u9efbcfe3" style="color: #E8323C">动词不定时？</span></sup><span data-lake-id="uc1dd6fcc" id="uc1dd6fcc"> the instructions for function main.  If we were to view hello.o with a text editor, it would appear to be gibberish.</span></li></ul><p data-lake-id="uec93bc1f" id="uec93bc1f"><br></p><p data-lake-id="u321f9c1c" id="u321f9c1c"><br></p>',public:1,status:1,view_status:0,read_status:1,likes_count:0,comments_count:0,content_updated_at:"2023-03-11T05:09:32.000Z",deleted_at:null,created_at:"2023-03-11T05:01:03.000Z",updated_at:"2023-03-11T09:17:06.000Z",published_at:"2023-03-11T08:25:46.000Z",first_published_at:"2023-03-11T05:01:03.046Z",word_count:407,cover:"https://cdn.nlark.com/yuque/0/2022/png/687303/1668472440052-9f45a121-db27-49bb-86e0-6b4c79179bcc.png",description:"The hello program begins life as a high-level C program because it can be read and understood by human beings in that form. However, in order to ru...",custom_description:null,hits:2,_serializer:"v2.doc_detail"},{id:117542158,slug:"fnbhwx34twlmw762",title:"FE.Chapter 算法.1  A Tour of Computer Systems",book_id:36687938,book:{id:36687938,type:"Book",slug:"blog",name:"liguwe.github.io",user_id:687303,description:"liguwe's blog",creator_id:687303,public:1,items_count:8,likes_count:0,watches_count:0,content_updated_at:"2023-03-11T09:36:03.001Z",updated_at:"2023-03-11T09:36:03.000Z",created_at:"2023-03-11T03:13:50.000Z",namespace:"liguwe/blog",user:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},_serializer:"v2.book"},user_id:687303,creator:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},format:"lake",body:`<a name="xJbOD"></a>
# 大标题，的场景
computer system consists of hardware and systems software  that  work together to run application programs.  Speciﬁc implementations of systems change over time, but the  underlying  concepts do not.  All computer systems have similar hardware and software components that  perform similar functions. This book is written for programmers  who  want to get better at their craft 技能，手艺 by understanding how these components work and how they affect the correctness and performance of their programs.

You are poised for an exciting journey. If you dedicate yourself to learning the concepts in this book, then you will be on your way to becoming a rare “power programmer,”  enlightened by an understanding of the underlying computer system and its impact on your application programs.

You are going to learn practical skills such as how to avoid strange奇怪的，仔细看单词 numerical errors caused by \`the way\`  that computers represent numbers.  

You will learn how to optimize your C code by using clever tricks  that  exploit充分利用  the designs of modern processors and memory systems.  

You will learn how the compiler implements procedure calls and how to use this knowledge to avoid the security holes from \` buffer overﬂow vulnerabilities\` that  plague network and Internet software.  

You will learn how to recognize and avoid the nasty errors during linking （ that  confound the average普通的，不是平庸的 programmer. ）

You will learn how to write your own Unix shell, your own dynamic storage allocation package 动态存储分配包 , and even your own Web server. 

You will learn the promises and pitfalls of concurrency,  a topic of increasing importance  as  multiple processor cores are integrated onto single chips.<br />你将学习并发的陷阱和希望，这个主题随着 单个芯片上集成的多核处理器变得越来越重要。

In their classic text on the C programming language [61], Kernighan and Ritchie introduce readers to C using the hello program shown in Figure 1.1.

\`\`\`typescript
#include <stdio.h> 
int main() {

  printf("hello, world\\n");

  return 0; 
}
\`\`\`
 Although  hello is a very simple program, every major part of the system   must work in  concert 音乐会，使协调   in order （for it） to run to completion. 
> 对于这个程序，为了能完整运行，系统的每个主要组成部分，必须协调工作。


In a sense, the goal of this book is to help you understand what happens and why when you run hello on your system.

We begin our study of systems by tracing the lifetime of the hello program, from the time it is created by a programmer, until it runs on a system, prints its simple message, and terminates. 

As we follow the lifetime of the program, we will brieﬂy introduce the key concepts, terminology, and components that come into play 发挥作用的组件. Later chapters will expand on these ideas.



`,body_draft:`<a name="xJbOD"></a>
# 大标题，的场景
computer system consists of hardware and systems software  that  work together to run application programs.  Speciﬁc implementations of systems change over time, but the  underlying  concepts do not.  All computer systems have similar hardware and software components that  perform similar functions. This book is written for programmers  who  want to get better at their craft 技能，手艺 by understanding how these components work and how they affect the correctness and performance of their programs.

You are poised for an exciting journey. If you dedicate yourself to learning the concepts in this book, then you will be on your way to becoming a rare “power programmer,”  enlightened by an understanding of the underlying computer system and its impact on your application programs.

You are going to learn practical skills such as how to avoid strange奇怪的，仔细看单词 numerical errors caused by \`the way\`  that computers represent numbers.  

You will learn how to optimize your C code by using clever tricks  that  exploit充分利用  the designs of modern processors and memory systems.  

You will learn how the compiler implements procedure calls and how to use this knowledge to avoid the security holes from \` buffer overﬂow vulnerabilities\` that  plague network and Internet software.  

You will learn how to recognize and avoid the nasty errors during linking （ that  confound the average普通的，不是平庸的 programmer. ）

You will learn how to write your own Unix shell, your own dynamic storage allocation package 动态存储分配包 , and even your own Web server. 

You will learn the promises and pitfalls of concurrency,  a topic of increasing importance  as  multiple processor cores are integrated onto single chips.<br />你将学习并发的陷阱和希望，这个主题随着 单个芯片上集成的多核处理器变得越来越重要。

In their classic text on the C programming language [61], Kernighan and Ritchie introduce readers to C using the hello program shown in Figure 1.1.

\`\`\`typescript
#include <stdio.h> 
int main() {

  printf("hello, world\\n");

  return 0; 
}
\`\`\`
 Although  hello is a very simple program, every major part of the system   must work in  concert 音乐会，使协调   in order （for it） to run to completion. 
> 对于这个程序，为了能完整运行，系统的每个主要组成部分，必须协调工作。


In a sense, the goal of this book is to help you understand what happens and why when you run hello on your system.

We begin our study of systems by tracing the lifetime of the hello program, from the time it is created by a programmer, until it runs on a system, prints its simple message, and terminates. 

As we follow the lifetime of the program, we will brieﬂy introduce the key concepts, terminology, and components that come into play 发挥作用的组件. Later chapters will expand on these ideas.



`,body_html:`<!doctype html><div class="lake-content" typography="classic"><h1 id="xJbOD"><span class="ne-text">大标题，的场景</span></h1><p id="u16d76fdc" class="ne-p"><span class="ne-text">computer system consists of hardware and systems software  </span><span class="ne-text" style="text-decoration: underline">that</span><span class="ne-text">  work together to run application programs.  Speciﬁc implementations of systems change over time, but the  </span><span class="ne-text" style="color: #DF2A3F">underlying</span><span class="ne-text">  concepts do not.  All computer systems have similar hardware and software components </span><span class="ne-text" style="text-decoration: underline">that</span><span class="ne-text">  perform similar functions. This book is written for programmers  </span><span class="ne-text" style="text-decoration: underline">who</span><span class="ne-text">  want to get better at their </span><span class="ne-text" style="color: #CA3F4F">craft </span><sup><span class="ne-text" style="color: #CA3F4F">技能，手艺</span></sup><span class="ne-text"> by understanding </span><span class="ne-text" style="text-decoration: underline">how</span><span class="ne-text"> these components work and </span><span class="ne-text" style="text-decoration: underline">how</span><span class="ne-text"> they affect the correctness and performance of their programs.</span></p><p id="uebc954d6" class="ne-p"><br></p><p id="ub0d7c930" class="ne-p"><span class="ne-text">You are poised for an exciting journey. If you </span><span class="ne-text" style="text-decoration: underline">dedicate</span><span class="ne-text"> yourself </span><span class="ne-text" style="text-decoration: underline">to</span><span class="ne-text"> learning the concepts in this book, then you will be on your way to becoming a rare “power programmer,”  enlightened by an understanding of the underlying computer system </span><span class="ne-text" style="text-decoration: underline">and</span><span class="ne-text"> its impact on your application programs.</span></p><p id="u0da0a0c9" class="ne-p"><span class="ne-text"></span></p><p id="uc5911dc8" class="ne-p"><span class="ne-text">You are going to learn practical skills </span><span class="ne-text" style="text-decoration: underline">such as</span><span class="ne-text"> how to avoid strange</span><sup><span class="ne-text">奇怪的，仔细看单词</span></sup><span class="ne-text"> numerical errors caused by </span><code class="ne-code"><span class="ne-text">the way</span></code><span class="ne-text">  </span><span class="ne-text" style="text-decoration: underline">that</span><span class="ne-text"> computers represent numbers.  </span></p><p id="u03fc805b" class="ne-p"><span class="ne-text"></span></p><p id="u8d351ac6" class="ne-p"><span class="ne-text">You will learn how to optimize your C code by using </span><span class="ne-text" style="color: #CA3F4F">clever</span><span class="ne-text"> tricks  </span><span class="ne-text" style="text-decoration: underline">that</span><span class="ne-text">  </span><span class="ne-text" style="color: #CA3F4F">exploit</span><sup><span class="ne-text" style="color: #CA3F4F">充分利用</span></sup><span class="ne-text">  the designs of modern processors and memory systems.  </span></p><p id="u735ed5b9" class="ne-p"><span class="ne-text"></span></p><p id="udf90c650" class="ne-p"><span class="ne-text">You will learn </span><span class="ne-text" style="color: #E4495B; background-color: #F3BB2F">how</span><span class="ne-text"> the compiler implements procedure calls </span><span class="ne-text" style="background-color: #F3BB2F">and how</span><span class="ne-text"> to use this knowledge to avoid the security holes from </span><code class="ne-code"><span class="ne-text"> buffer overﬂow vulnerabilities</span></code><span class="ne-text"> </span><span class="ne-text" style="background-color: #C29219">that</span><span class="ne-text">  </span><span class="ne-text" style="color: #B62536">plague</span><span class="ne-text"> network and Internet software.  </span></p><p id="u4c2bac0c" class="ne-p"><br></p><p id="ud79de948" class="ne-p"><span class="ne-text">You will learn how to recognize and avoid </span><span class="ne-text" style="text-decoration: underline">the </span><span class="ne-text" style="color: #B62536; text-decoration: underline">nasty</span><span class="ne-text" style="text-decoration: underline"> errors during linking</span><span class="ne-text"> （ </span><span class="ne-text" style="background-color: #BA9BF2">that</span><span class="ne-text">  </span><span class="ne-text" style="color: #B62536">confound</span><span class="ne-text"> the </span><span class="ne-text" style="color: #B62536">average</span><sup><span class="ne-text">普通的，不是平庸的</span></sup><span class="ne-text"> programmer. ）</span></p><p id="ub72c8021" class="ne-p"><br></p><p id="u490bf641" class="ne-p"><span class="ne-text">You will learn how to write your own Unix shell, your own </span><span class="ne-text" style="text-decoration: underline">dynamic storage </span><span class="ne-text" style="color: #B62536; text-decoration: underline">allocation</span><span class="ne-text" style="text-decoration: underline"> package </span><sup><span class="ne-text" style="text-decoration: underline">动态存储分配包 </span></sup><span class="ne-text" style="text-decoration: underline">,</span><span class="ne-text"> and even your own Web server. </span></p><p id="u7a25d41a" class="ne-p"><br></p><p id="u94bae4f4" class="ne-p"><span class="ne-text">You will learn the promises and </span><span class="ne-text" style="color: #B62536">pitfalls</span><span class="ne-text"> of </span><span class="ne-text" style="color: #B62536">concurrency</span><span class="ne-text">,  a topic of increasing importance  </span><span class="ne-text" style="background-color: #3A1C73">as</span><span class="ne-text">  multiple processor cores are integrated onto single chips.</span></p><p id="ue86491a3" class="ne-p"><span class="ne-text">你将学习并发的陷阱和希望，这个主题随着 单个芯片上集成的多核处理器变得越来越重要。</span></p><p id="u163e3c40" class="ne-p"><span class="ne-text"></span></p><p id="uc1aa1c0c" class="ne-p"><span class="ne-text">In their classic text on the C programming language [61], Kernighan and Ritchie introduce readers to C using the hello program shown in Figure 1.1.</span></p><p id="uaa71ce8e" class="ne-p"><span class="ne-text"></span></p><pre data-language="typescript" id="ruzT7" class="ne-codeblock language-typescript">#include &lt;stdio.h&gt; 
int main() {

  printf(&quot;hello, world\\n&quot;);

  return 0; 
}</pre><p id="u9e983e6c" class="ne-p"><span class="ne-text"> </span><span class="ne-text" style="background-color: #BA9BF2">Although</span><span class="ne-text">  hello is a very simple program, </span><span class="ne-text" style="text-decoration: underline">every major part of the system</span><span class="ne-text">   </span><span class="ne-text" style="text-decoration: underline">must work in  </span><span class="ne-text" style="color: #B62536; text-decoration: underline">concert </span><sup><span class="ne-text" style="color: #B62536; text-decoration: underline">音乐会，使协调</span></sup><span class="ne-text" style="text-decoration: underline"> </span><span class="ne-text">  </span><span class="ne-text" style="text-decoration: underline">in order （for it） to run to completion</span><span class="ne-text">. </span></p><div class="ne-quote"><p id="u044649b5" class="ne-p"><span class="ne-text">对于这个程序，为了能完整运行，系统的每个主要组成部分，必须协调工作。</span></p></div><p id="u1995cf80" class="ne-p"><span class="ne-text"></span></p><p id="u65804d75" class="ne-p"><span class="ne-text">In a sense, the goal of this book is to help you understand what happens and why when you run hello on your system.</span></p><p id="uf0576d77" class="ne-p"><span class="ne-text"></span></p><p id="udcb21529" class="ne-p"><span class="ne-text">We begin our study of systems by tracing the lifetime of the hello program, from the time it is created by a programmer, until it runs on a system, prints its simple message, and terminates. </span></p><p id="u7d42ef94" class="ne-p"><span class="ne-text"></span></p><p id="uc6228ad1" class="ne-p"><span class="ne-text">As we follow the lifetime of the program, we will brieﬂy introduce the key concepts, </span><span class="ne-text" style="color: #B62536">terminology</span><span class="ne-text">, and </span><span class="ne-text" style="text-decoration: underline">components that come into play </span><sup><span class="ne-text">发挥作用的组件</span></sup><span class="ne-text">. Later chapters will expand on these ideas.</span></p><p id="u8c5d8670" class="ne-p"><br></p><p id="u9ddf24d9" class="ne-p"><br></p><p id="u0d33ef91" class="ne-p"><span class="ne-text"></span></p></div>`,body_lake:'<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="defaultFontsize" content="16" /><meta name="paragraphSpacing" content="relax" /><h1 data-lake-id="xJbOD" id="xJbOD"><span data-lake-id="u8916f596" id="u8916f596">大标题，的场景</span></h1><p data-lake-id="u16d76fdc" id="u16d76fdc"><span data-lake-id="u9f1a886e" id="u9f1a886e">computer system consists of hardware and systems software  </span><u><span data-lake-id="u67760662" id="u67760662">that</span></u><span data-lake-id="ue0f26516" id="ue0f26516">  work together to run application programs.  Speciﬁc implementations of systems change over time, but the  </span><span data-lake-id="u07a7691b" id="u07a7691b" style="color: #DF2A3F">underlying</span><span data-lake-id="u1f385a5c" id="u1f385a5c">  concepts do not.  All computer systems have similar hardware and software components </span><u><span data-lake-id="u3a7ec8cc" id="u3a7ec8cc">that</span></u><span data-lake-id="u336a4a9c" id="u336a4a9c">  perform similar functions. This book is written for programmers  </span><u><span data-lake-id="u665da331" id="u665da331">who</span></u><span data-lake-id="u28176ac2" id="u28176ac2">  want to get better at their </span><span data-lake-id="ufbd280c4" id="ufbd280c4" style="color: #CA3F4F">craft </span><sup><span data-lake-id="u63c939e0" id="u63c939e0" style="color: #CA3F4F">技能，手艺</span></sup><span data-lake-id="u4fd95c03" id="u4fd95c03"> by understanding </span><u><span data-lake-id="u821a4682" id="u821a4682">how</span></u><span data-lake-id="ud8084549" id="ud8084549"> these components work and </span><u><span data-lake-id="u01fc4334" id="u01fc4334">how</span></u><span data-lake-id="ub0a7ea3b" id="ub0a7ea3b"> they affect the correctness and performance of their programs.</span></p><p data-lake-id="uebc954d6" id="uebc954d6"><br></p><p data-lake-id="ub0d7c930" id="ub0d7c930"><span data-lake-id="ucab391fc" id="ucab391fc">You are poised for an exciting journey. If you </span><u><span data-lake-id="u7d3cdd6a" id="u7d3cdd6a">dedicate</span></u><span data-lake-id="u54885064" id="u54885064"> yourself </span><u><span data-lake-id="uf21538e3" id="uf21538e3">to</span></u><span data-lake-id="u028ae3a4" id="u028ae3a4"> learning the concepts in this book, then you will be on your way to becoming a rare “power programmer,”  enlightened by an understanding of the underlying computer system </span><u><span data-lake-id="u746bc931" id="u746bc931">and</span></u><span data-lake-id="u0b3782c4" id="u0b3782c4"> its impact on your application programs.</span></p><p data-lake-id="u0da0a0c9" id="u0da0a0c9"><span data-lake-id="u8f34d4be" id="u8f34d4be">​</span><br></p><p data-lake-id="uc5911dc8" id="uc5911dc8"><span data-lake-id="uc9acb7f4" id="uc9acb7f4">You are going to learn practical skills </span><u><span data-lake-id="u8b1e0b2f" id="u8b1e0b2f">such as</span></u><span data-lake-id="u956d8975" id="u956d8975"> how to avoid strange</span><sup><span data-lake-id="ua07344d1" id="ua07344d1">奇怪的，仔细看单词</span></sup><span data-lake-id="ue671dc4f" id="ue671dc4f"> numerical errors caused by </span><code data-lake-id="u7f116bb2" id="u7f116bb2"><span data-lake-id="uecf57402" id="uecf57402">the way</span></code><span data-lake-id="u7eff88fc" id="u7eff88fc">  </span><u><span data-lake-id="u7547273a" id="u7547273a">that</span></u><span data-lake-id="u9ea5375d" id="u9ea5375d"> computers represent numbers.  </span></p><p data-lake-id="u03fc805b" id="u03fc805b"><span data-lake-id="uefd74e9f" id="uefd74e9f">​</span><br></p><p data-lake-id="u8d351ac6" id="u8d351ac6"><span data-lake-id="u015e83cb" id="u015e83cb">You will learn how to optimize your C code by using </span><span data-lake-id="u80e210df" id="u80e210df" style="color: #CA3F4F">clever</span><span data-lake-id="u74f2af56" id="u74f2af56"> tricks  </span><u><span data-lake-id="u5ba29b58" id="u5ba29b58">that</span></u><span data-lake-id="u471d4917" id="u471d4917">  </span><span data-lake-id="uf8a8b87e" id="uf8a8b87e" style="color: #CA3F4F">exploit</span><sup><span data-lake-id="u5b7aaaed" id="u5b7aaaed" style="color: #CA3F4F">充分利用</span></sup><span data-lake-id="u7b278c65" id="u7b278c65">  the designs of modern processors and memory systems.  </span></p><p data-lake-id="u735ed5b9" id="u735ed5b9"><span data-lake-id="ucaad5d79" id="ucaad5d79">​</span><br></p><p data-lake-id="udf90c650" id="udf90c650"><span data-lake-id="ue0f926f7" id="ue0f926f7">You will learn </span><span data-lake-id="u1a9224cc" id="u1a9224cc" style="color: #E4495B; background-color: #F3BB2F">how</span><span data-lake-id="ua44b5990" id="ua44b5990"> the compiler implements procedure calls </span><span data-lake-id="ub039a201" id="ub039a201" style="background-color: #F3BB2F">and how</span><span data-lake-id="u31387bd0" id="u31387bd0"> to use this knowledge to avoid the security holes from </span><code data-lake-id="u4b9ddd90" id="u4b9ddd90"><span data-lake-id="u4b72a343" id="u4b72a343"> buffer overﬂow vulnerabilities</span></code><span data-lake-id="u354dcc3a" id="u354dcc3a"> </span><span data-lake-id="u4429bd7f" id="u4429bd7f" style="background-color: #C29219">that</span><span data-lake-id="udf1cfd08" id="udf1cfd08">  </span><span data-lake-id="u67dc2085" id="u67dc2085" style="color: #B62536">plague</span><span data-lake-id="u996fc6fa" id="u996fc6fa"> network and Internet software.  </span></p><p data-lake-id="u4c2bac0c" id="u4c2bac0c"><br></p><p data-lake-id="ud79de948" id="ud79de948"><span data-lake-id="u6c610c54" id="u6c610c54">You will learn how to recognize and avoid </span><u><span data-lake-id="u500b57c7" id="u500b57c7">the </span></u><span style="color: #B62536"><u><span data-lake-id="uec7a8c7e" id="uec7a8c7e">nasty</span></u></span><u><span data-lake-id="u30eda136" id="u30eda136"> errors during linking</span></u><span data-lake-id="ud1457cdd" id="ud1457cdd"> （ </span><span data-lake-id="uf994bb5b" id="uf994bb5b" style="background-color: #BA9BF2">that</span><span data-lake-id="u6db8f52e" id="u6db8f52e">  </span><span data-lake-id="udbfcfc8a" id="udbfcfc8a" style="color: #B62536">confound</span><span data-lake-id="ua1f3f3ea" id="ua1f3f3ea"> the </span><span data-lake-id="ud404ccaa" id="ud404ccaa" style="color: #B62536">average</span><sup><span data-lake-id="uadb23a0c" id="uadb23a0c">普通的，不是平庸的</span></sup><span data-lake-id="ueae1ff5a" id="ueae1ff5a"> programmer. ）</span></p><p data-lake-id="ub72c8021" id="ub72c8021"><br></p><p data-lake-id="u490bf641" id="u490bf641"><span data-lake-id="u5ef58ed4" id="u5ef58ed4">You will learn how to write your own Unix shell, your own </span><u><span data-lake-id="u292aab3e" id="u292aab3e">dynamic storage </span></u><span style="color: #B62536"><u><span data-lake-id="u01d54b53" id="u01d54b53">allocation</span></u></span><u><span data-lake-id="uaefd5ec7" id="uaefd5ec7"> package </span></u><u><sup><span data-lake-id="u8035409f" id="u8035409f">动态存储分配包 </span></sup></u><u><span data-lake-id="u6e42c5b6" id="u6e42c5b6">,</span></u><span data-lake-id="ub7fb15a8" id="ub7fb15a8"> and even your own Web server. </span></p><p data-lake-id="u7a25d41a" id="u7a25d41a"><br></p><p data-lake-id="u94bae4f4" id="u94bae4f4"><span data-lake-id="u39f679c9" id="u39f679c9">You will learn the promises and </span><span data-lake-id="u21905891" id="u21905891" style="color: #B62536">pitfalls</span><span data-lake-id="u8f259c4b" id="u8f259c4b"> of </span><span data-lake-id="u5002ee6b" id="u5002ee6b" style="color: #B62536">concurrency</span><span data-lake-id="ue6fc45d7" id="ue6fc45d7">,  a topic of increasing importance  </span><span data-lake-id="u5429e290" id="u5429e290" style="background-color: #3A1C73">as</span><span data-lake-id="uec9e5522" id="uec9e5522">  multiple processor cores are integrated onto single chips.</span></p><p data-lake-id="ue86491a3" id="ue86491a3"><span data-lake-id="u45e05e49" id="u45e05e49">你将学习并发的陷阱和希望，这个主题随着 单个芯片上集成的多核处理器变得越来越重要。</span></p><p data-lake-id="u163e3c40" id="u163e3c40"><span data-lake-id="u3cbb3735" id="u3cbb3735">​</span><br></p><p data-lake-id="uc1aa1c0c" id="uc1aa1c0c"><span data-lake-id="ub5af0e36" id="ub5af0e36">In their classic text on the C programming language [61], Kernighan and Ritchie introduce readers to C using the hello program shown in Figure 1.1.</span></p><p data-lake-id="uaa71ce8e" id="uaa71ce8e"><span data-lake-id="uc17cc693" id="uc17cc693">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%23include%20%3Cstdio.h%3E%20%5Cnint%20main()%20%7B%5Cn%5Cn%20%20printf(%5C%22hello%2C%20world%5C%5Cn%5C%22)%3B%5Cn%5Cn%20%20return%200%3B%20%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22ruzT7%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u9e983e6c" id="u9e983e6c"><span data-lake-id="u52a59716" id="u52a59716"> </span><span data-lake-id="u7e00b628" id="u7e00b628" style="background-color: #BA9BF2">Although</span><span data-lake-id="u1925599f" id="u1925599f">  hello is a very simple program, </span><u><span data-lake-id="ub7664ba7" id="ub7664ba7">every major part of the system</span></u><span data-lake-id="u61fcf8b3" id="u61fcf8b3">   </span><u><span data-lake-id="u7e26cba9" id="u7e26cba9">must work in  </span></u><span style="color: #B62536"><u><span data-lake-id="ufffcefa7" id="ufffcefa7">concert </span></u></span><span style="color: #B62536"><u><sup><span data-lake-id="uc7a0a906" id="uc7a0a906">音乐会，使协调</span></sup></u></span><u><span data-lake-id="u85fc3c28" id="u85fc3c28"> </span></u><span data-lake-id="u1b769a11" id="u1b769a11">  </span><u><span data-lake-id="ud21aea14" id="ud21aea14">in order （for it） to run to completion</span></u><span data-lake-id="u38996c16" id="u38996c16">. </span></p><blockquote data-lake-id="u81ab534d" id="u81ab534d"><p data-lake-id="u044649b5" id="u044649b5"><span data-lake-id="u969fd202" id="u969fd202">对于这个程序，为了能完整运行，系统的每个主要组成部分，必须协调工作。</span></p></blockquote><p data-lake-id="u1995cf80" id="u1995cf80"><span data-lake-id="u1c51eacb" id="u1c51eacb">​</span><br></p><p data-lake-id="u65804d75" id="u65804d75"><span data-lake-id="u95daac49" id="u95daac49">In a sense, the goal of this book is to help you understand what happens and why when you run hello on your system.</span></p><p data-lake-id="uf0576d77" id="uf0576d77"><span data-lake-id="u5e0e291f" id="u5e0e291f">​</span><br></p><p data-lake-id="udcb21529" id="udcb21529"><span data-lake-id="uf36f1989" id="uf36f1989">We begin our study of systems by tracing the lifetime of the hello program, from the time it is created by a programmer, until it runs on a system, prints its simple message, and terminates. </span></p><p data-lake-id="u7d42ef94" id="u7d42ef94"><span data-lake-id="u8c9cdeff" id="u8c9cdeff">​</span><br></p><p data-lake-id="uc6228ad1" id="uc6228ad1"><span data-lake-id="ue28f4638" id="ue28f4638">As we follow the lifetime of the program, we will brieﬂy introduce the key concepts, </span><span data-lake-id="u156f3ac6" id="u156f3ac6" style="color: #B62536">terminology</span><span data-lake-id="ubc828386" id="ubc828386">, and </span><u><span data-lake-id="u60d10ac4" id="u60d10ac4">components that come into play </span></u><sup><span data-lake-id="u6de9e3e9" id="u6de9e3e9">发挥作用的组件</span></sup><span data-lake-id="uee2a20bb" id="uee2a20bb">. Later chapters will expand on these ideas.</span></p><p data-lake-id="u8c5d8670" id="u8c5d8670"><br></p><p data-lake-id="u9ddf24d9" id="u9ddf24d9"><br></p><p data-lake-id="u0d33ef91" id="u0d33ef91"><span data-lake-id="ufb904854" id="ufb904854">​</span><br></p>',body_draft_lake:'<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="defaultFontsize" content="16" /><meta name="paragraphSpacing" content="relax" /><h1 data-lake-id="xJbOD" id="xJbOD"><span data-lake-id="u8916f596" id="u8916f596">大标题，的场景</span></h1><p data-lake-id="u16d76fdc" id="u16d76fdc"><span data-lake-id="u9f1a886e" id="u9f1a886e">computer system consists of hardware and systems software  </span><u><span data-lake-id="u67760662" id="u67760662">that</span></u><span data-lake-id="ue0f26516" id="ue0f26516">  work together to run application programs.  Speciﬁc implementations of systems change over time, but the  </span><span data-lake-id="u07a7691b" id="u07a7691b" style="color: #DF2A3F">underlying</span><span data-lake-id="u1f385a5c" id="u1f385a5c">  concepts do not.  All computer systems have similar hardware and software components </span><u><span data-lake-id="u3a7ec8cc" id="u3a7ec8cc">that</span></u><span data-lake-id="u336a4a9c" id="u336a4a9c">  perform similar functions. This book is written for programmers  </span><u><span data-lake-id="u665da331" id="u665da331">who</span></u><span data-lake-id="u28176ac2" id="u28176ac2">  want to get better at their </span><span data-lake-id="ufbd280c4" id="ufbd280c4" style="color: #CA3F4F">craft </span><sup><span data-lake-id="u63c939e0" id="u63c939e0" style="color: #CA3F4F">技能，手艺</span></sup><span data-lake-id="u4fd95c03" id="u4fd95c03"> by understanding </span><u><span data-lake-id="u821a4682" id="u821a4682">how</span></u><span data-lake-id="ud8084549" id="ud8084549"> these components work and </span><u><span data-lake-id="u01fc4334" id="u01fc4334">how</span></u><span data-lake-id="ub0a7ea3b" id="ub0a7ea3b"> they affect the correctness and performance of their programs.</span></p><p data-lake-id="uebc954d6" id="uebc954d6"><br></p><p data-lake-id="ub0d7c930" id="ub0d7c930"><span data-lake-id="ucab391fc" id="ucab391fc">You are poised for an exciting journey. If you </span><u><span data-lake-id="u7d3cdd6a" id="u7d3cdd6a">dedicate</span></u><span data-lake-id="u54885064" id="u54885064"> yourself </span><u><span data-lake-id="uf21538e3" id="uf21538e3">to</span></u><span data-lake-id="u028ae3a4" id="u028ae3a4"> learning the concepts in this book, then you will be on your way to becoming a rare “power programmer,”  enlightened by an understanding of the underlying computer system </span><u><span data-lake-id="u746bc931" id="u746bc931">and</span></u><span data-lake-id="u0b3782c4" id="u0b3782c4"> its impact on your application programs.</span></p><p data-lake-id="u0da0a0c9" id="u0da0a0c9"><span data-lake-id="u8f34d4be" id="u8f34d4be">​</span><br></p><p data-lake-id="uc5911dc8" id="uc5911dc8"><span data-lake-id="uc9acb7f4" id="uc9acb7f4">You are going to learn practical skills </span><u><span data-lake-id="u8b1e0b2f" id="u8b1e0b2f">such as</span></u><span data-lake-id="u956d8975" id="u956d8975"> how to avoid strange</span><sup><span data-lake-id="ua07344d1" id="ua07344d1">奇怪的，仔细看单词</span></sup><span data-lake-id="ue671dc4f" id="ue671dc4f"> numerical errors caused by </span><code data-lake-id="u7f116bb2" id="u7f116bb2"><span data-lake-id="uecf57402" id="uecf57402">the way</span></code><span data-lake-id="u7eff88fc" id="u7eff88fc">  </span><u><span data-lake-id="u7547273a" id="u7547273a">that</span></u><span data-lake-id="u9ea5375d" id="u9ea5375d"> computers represent numbers.  </span></p><p data-lake-id="u03fc805b" id="u03fc805b"><span data-lake-id="uefd74e9f" id="uefd74e9f">​</span><br></p><p data-lake-id="u8d351ac6" id="u8d351ac6"><span data-lake-id="u015e83cb" id="u015e83cb">You will learn how to optimize your C code by using </span><span data-lake-id="u80e210df" id="u80e210df" style="color: #CA3F4F">clever</span><span data-lake-id="u74f2af56" id="u74f2af56"> tricks  </span><u><span data-lake-id="u5ba29b58" id="u5ba29b58">that</span></u><span data-lake-id="u471d4917" id="u471d4917">  </span><span data-lake-id="uf8a8b87e" id="uf8a8b87e" style="color: #CA3F4F">exploit</span><sup><span data-lake-id="u5b7aaaed" id="u5b7aaaed" style="color: #CA3F4F">充分利用</span></sup><span data-lake-id="u7b278c65" id="u7b278c65">  the designs of modern processors and memory systems.  </span></p><p data-lake-id="u735ed5b9" id="u735ed5b9"><span data-lake-id="ucaad5d79" id="ucaad5d79">​</span><br></p><p data-lake-id="udf90c650" id="udf90c650"><span data-lake-id="ue0f926f7" id="ue0f926f7">You will learn </span><span data-lake-id="u1a9224cc" id="u1a9224cc" style="color: #E4495B; background-color: #F3BB2F">how</span><span data-lake-id="ua44b5990" id="ua44b5990"> the compiler implements procedure calls </span><span data-lake-id="ub039a201" id="ub039a201" style="background-color: #F3BB2F">and how</span><span data-lake-id="u31387bd0" id="u31387bd0"> to use this knowledge to avoid the security holes from </span><code data-lake-id="u4b9ddd90" id="u4b9ddd90"><span data-lake-id="u4b72a343" id="u4b72a343"> buffer overﬂow vulnerabilities</span></code><span data-lake-id="u354dcc3a" id="u354dcc3a"> </span><span data-lake-id="u4429bd7f" id="u4429bd7f" style="background-color: #C29219">that</span><span data-lake-id="udf1cfd08" id="udf1cfd08">  </span><span data-lake-id="u67dc2085" id="u67dc2085" style="color: #B62536">plague</span><span data-lake-id="u996fc6fa" id="u996fc6fa"> network and Internet software.  </span></p><p data-lake-id="u4c2bac0c" id="u4c2bac0c"><br></p><p data-lake-id="ud79de948" id="ud79de948"><span data-lake-id="u6c610c54" id="u6c610c54">You will learn how to recognize and avoid </span><u><span data-lake-id="u500b57c7" id="u500b57c7">the </span></u><span style="color: #B62536"><u><span data-lake-id="uec7a8c7e" id="uec7a8c7e">nasty</span></u></span><u><span data-lake-id="u30eda136" id="u30eda136"> errors during linking</span></u><span data-lake-id="ud1457cdd" id="ud1457cdd"> （ </span><span data-lake-id="uf994bb5b" id="uf994bb5b" style="background-color: #BA9BF2">that</span><span data-lake-id="u6db8f52e" id="u6db8f52e">  </span><span data-lake-id="udbfcfc8a" id="udbfcfc8a" style="color: #B62536">confound</span><span data-lake-id="ua1f3f3ea" id="ua1f3f3ea"> the </span><span data-lake-id="ud404ccaa" id="ud404ccaa" style="color: #B62536">average</span><sup><span data-lake-id="uadb23a0c" id="uadb23a0c">普通的，不是平庸的</span></sup><span data-lake-id="ueae1ff5a" id="ueae1ff5a"> programmer. ）</span></p><p data-lake-id="ub72c8021" id="ub72c8021"><br></p><p data-lake-id="u490bf641" id="u490bf641"><span data-lake-id="u5ef58ed4" id="u5ef58ed4">You will learn how to write your own Unix shell, your own </span><u><span data-lake-id="u292aab3e" id="u292aab3e">dynamic storage </span></u><span style="color: #B62536"><u><span data-lake-id="u01d54b53" id="u01d54b53">allocation</span></u></span><u><span data-lake-id="uaefd5ec7" id="uaefd5ec7"> package </span></u><u><sup><span data-lake-id="u8035409f" id="u8035409f">动态存储分配包 </span></sup></u><u><span data-lake-id="u6e42c5b6" id="u6e42c5b6">,</span></u><span data-lake-id="ub7fb15a8" id="ub7fb15a8"> and even your own Web server. </span></p><p data-lake-id="u7a25d41a" id="u7a25d41a"><br></p><p data-lake-id="u94bae4f4" id="u94bae4f4"><span data-lake-id="u39f679c9" id="u39f679c9">You will learn the promises and </span><span data-lake-id="u21905891" id="u21905891" style="color: #B62536">pitfalls</span><span data-lake-id="u8f259c4b" id="u8f259c4b"> of </span><span data-lake-id="u5002ee6b" id="u5002ee6b" style="color: #B62536">concurrency</span><span data-lake-id="ue6fc45d7" id="ue6fc45d7">,  a topic of increasing importance  </span><span data-lake-id="u5429e290" id="u5429e290" style="background-color: #3A1C73">as</span><span data-lake-id="uec9e5522" id="uec9e5522">  multiple processor cores are integrated onto single chips.</span></p><p data-lake-id="ue86491a3" id="ue86491a3"><span data-lake-id="u45e05e49" id="u45e05e49">你将学习并发的陷阱和希望，这个主题随着 单个芯片上集成的多核处理器变得越来越重要。</span></p><p data-lake-id="u163e3c40" id="u163e3c40"><span data-lake-id="u3cbb3735" id="u3cbb3735">​</span><br></p><p data-lake-id="uc1aa1c0c" id="uc1aa1c0c"><span data-lake-id="ub5af0e36" id="ub5af0e36">In their classic text on the C programming language [61], Kernighan and Ritchie introduce readers to C using the hello program shown in Figure 1.1.</span></p><p data-lake-id="uaa71ce8e" id="uaa71ce8e"><span data-lake-id="uc17cc693" id="uc17cc693">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%23include%20%3Cstdio.h%3E%20%5Cnint%20main()%20%7B%5Cn%5Cn%20%20printf(%5C%22hello%2C%20world%5C%5Cn%5C%22)%3B%5Cn%5Cn%20%20return%200%3B%20%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22ruzT7%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u9e983e6c" id="u9e983e6c"><span data-lake-id="u52a59716" id="u52a59716"> </span><span data-lake-id="u7e00b628" id="u7e00b628" style="background-color: #BA9BF2">Although</span><span data-lake-id="u1925599f" id="u1925599f">  hello is a very simple program, </span><u><span data-lake-id="ub7664ba7" id="ub7664ba7">every major part of the system</span></u><span data-lake-id="u61fcf8b3" id="u61fcf8b3">   </span><u><span data-lake-id="u7e26cba9" id="u7e26cba9">must work in  </span></u><span style="color: #B62536"><u><span data-lake-id="ufffcefa7" id="ufffcefa7">concert </span></u></span><span style="color: #B62536"><u><sup><span data-lake-id="uc7a0a906" id="uc7a0a906">音乐会，使协调</span></sup></u></span><u><span data-lake-id="u85fc3c28" id="u85fc3c28"> </span></u><span data-lake-id="u1b769a11" id="u1b769a11">  </span><u><span data-lake-id="ud21aea14" id="ud21aea14">in order （for it） to run to completion</span></u><span data-lake-id="u38996c16" id="u38996c16">. </span></p><blockquote data-lake-id="u81ab534d" id="u81ab534d"><p data-lake-id="u044649b5" id="u044649b5"><span data-lake-id="u969fd202" id="u969fd202">对于这个程序，为了能完整运行，系统的每个主要组成部分，必须协调工作。</span></p></blockquote><p data-lake-id="u1995cf80" id="u1995cf80"><span data-lake-id="u1c51eacb" id="u1c51eacb">​</span><br></p><p data-lake-id="u65804d75" id="u65804d75"><span data-lake-id="u95daac49" id="u95daac49">In a sense, the goal of this book is to help you understand what happens and why when you run hello on your system.</span></p><p data-lake-id="uf0576d77" id="uf0576d77"><span data-lake-id="u5e0e291f" id="u5e0e291f">​</span><br></p><p data-lake-id="udcb21529" id="udcb21529"><span data-lake-id="uf36f1989" id="uf36f1989">We begin our study of systems by tracing the lifetime of the hello program, from the time it is created by a programmer, until it runs on a system, prints its simple message, and terminates. </span></p><p data-lake-id="u7d42ef94" id="u7d42ef94"><span data-lake-id="u8c9cdeff" id="u8c9cdeff">​</span><br></p><p data-lake-id="uc6228ad1" id="uc6228ad1"><span data-lake-id="ue28f4638" id="ue28f4638">As we follow the lifetime of the program, we will brieﬂy introduce the key concepts, </span><span data-lake-id="u156f3ac6" id="u156f3ac6" style="color: #B62536">terminology</span><span data-lake-id="ubc828386" id="ubc828386">, and </span><u><span data-lake-id="u60d10ac4" id="u60d10ac4">components that come into play </span></u><sup><span data-lake-id="u6de9e3e9" id="u6de9e3e9">发挥作用的组件</span></sup><span data-lake-id="uee2a20bb" id="uee2a20bb">. Later chapters will expand on these ideas.</span></p><p data-lake-id="u8c5d8670" id="u8c5d8670"><br></p><p data-lake-id="u9ddf24d9" id="u9ddf24d9"><br></p><p data-lake-id="u0d33ef91" id="u0d33ef91"><span data-lake-id="ufb904854" id="ufb904854">​</span><br></p>',public:1,status:1,view_status:0,read_status:1,likes_count:0,comments_count:0,content_updated_at:"2023-03-11T08:39:36.000Z",deleted_at:null,created_at:"2023-03-11T05:00:40.000Z",updated_at:"2023-03-11T09:17:19.000Z",published_at:"2023-03-11T08:39:36.000Z",first_published_at:"2023-03-11T05:00:40.056Z",word_count:552,cover:null,description:"大标题，的场景computer system consists of hardware and systems software  that  work together to run application programs.  Speciﬁc implementations of syst...",custom_description:null,hits:0,_serializer:"v2.doc_detail"},{id:98445083,slug:"kqint5",title:"FE.vue3响应式系统设计",book_id:36687938,book:{id:36687938,type:"Book",slug:"blog",name:"liguwe.github.io",user_id:687303,description:"liguwe's blog",creator_id:687303,public:1,items_count:8,likes_count:0,watches_count:0,content_updated_at:"2023-03-11T09:36:03.001Z",updated_at:"2023-03-11T09:36:03.000Z",created_at:"2023-03-11T03:13:50.000Z",namespace:"liguwe/blog",user:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},_serializer:"v2.book"},user_id:687303,creator:{id:687303,type:"User",login:"liguwe",name:"liguwe",description:"liguwe's blog",avatar_url:"https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1576742181690-f84f2cfb-31cd-4c3b-87b1-2e055b3f06a9.jpeg",books_count:13,public_books_count:1,followers_count:1,following_count:20,created_at:"2019-12-19T07:56:58.000Z",updated_at:"2023-03-11T09:27:44.000Z",_serializer:"v2.user"},format:"lake",body:`<a name="TQf3q"></a>
# Vue3 响应式系统设计
<a name="yZMvx"></a>
## 一、为何响应式
比如以下代码：
\`\`\`typescript
const obj = {text: 'hello world！'};

function effect() {
    document.body.innerText = obj.text;
}
\`\`\`

如果我修改\`obj.text = "hello liguwe！";\0\` ， \`effect\` 函数重新会执行，更新页面内容为 \`hello liguwe！\`  ，则说明 \`obj\` 是 **响应式的，**下面是初步实现
<a name="x3fcb"></a>
## 二、初步实现
使用\`Proxy\` ， 代理对象进行读取和写入的拦截，并把\`副作用函数\`放入\`**桶**\`的数据结构中 ， 读取时放入\`桶\`中，写入时从\`桶\`中拿出来并执行。
\`\`\`typescript
// 存储副作用函数的桶
const bucket = new Set()

// 原始数据
const data = {text: 'hello world'}

// 对原始数据的代理
const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 将副作用函数 effect 添加到存储副作用函数的桶中
        bucket.add(effect); // 硬编码了副作用函数，名字就叫effect
        // 返回属性值
        return target[key];
    },
    // 拦截设置操作
    set(target, key, newVal) {
        // 设置属性值
        target[key] = newVal;
        // 把副作用函数从桶里取出并执行
        bucket.forEach(fn => fn())
    }
})
\`\`\`


**测试：**
\`\`\`typescript
function effect() {
    document.body.innerText = obj.text
}
// 触发读取
effect()

// 触发写入，可以重新执行 effect 
setTimeout(() => {
    obj.text = 'hello liguwe'
}, 2000);
\`\`\`

**以上实现的 缺点：**

- 硬编码 \`effect\` 
<a name="KxmuE"></a>
## 三、完善：解决\`硬编码\`的问题
使用全局变量 \`activeEffect\` 来存储 \`需要被注册的副作用函数\`。
\`\`\`typescript
// 存储副作用函数的桶
const bucket = new Set()
// 用一个全局变量存储当前激活的 effect 函数
let activeEffect

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    bucket.add(activeEffect)  
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    bucket.forEach(fn => fn())
  }
})
\`\`\`
副作用函数的定义：
\`\`\`typescript
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}

// 传入的匿名函数中有，读取了obj.text， 所以会触发proxy get，而这时 activeEffect 被赋值给了这个匿名函数
// 所以，这时候真正的 副作用函数 会被 桶 正常收集
effect(() => {
  console.log('effect run') // 📌 
  document.body.innerText = obj.text
})

effect(() => {
    console.log('effect 2 run')  // 📌 
    document.body.innerText = obj.text
})

setTimeout(() => {
  obj.text = 'hello vue3' ; // 📌📌 
}, 1000)

setTimeout(() => {
    obj.text = 'hello vue3 1' // 📌📌 
}, 2000)

// 打印不存在属性 text1 ，也会打印 2 次
setTimeout(() => {
    obj.text1 = 'hello not Exist' // 📌📌 
}, 4000);
\`\`\`

问：以上代码 \`log\` 的顺序？为什么会打印这8次呢？ 如上标记：📌<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1667052577212-ff9cb3c3-4d35-4f8c-8219-762d2d4e111c.png#averageHue=%2326272a&clientId=u9b0bc959-adbb-4&from=paste&height=254&id=u874687de&name=image.png&originHeight=514&originWidth=666&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52622&status=done&style=none&taskId=u10000ad6-84ba-4990-95e4-319c9190244&title=&width=329.3991394042969)<br />如上代码，打印设置不存在的属性时\`obj.text1\`，也会执行副作用函数，但副作用函数根本不需要使用到这个属性，**如何解决呢？ **
<a name="elQu9"></a>
## 四、继续完善：避免不需要的执行
需要重新设计数据结构 以表示 **副作用函数与目标之间的关系 **<br />以下是数据结构设计：
\`\`\`typescript
effect(function fn1() {
  document.body.innerText = obj.text
})
effect(function fn2() {
  document.body.innerText = obj.text
})
// ===> 数据结构可表示为：
└── obj
   	└── text
      	 ├──fn1
      	 └── fn2

effect(function fn1() {
  document.body.innerText = obj.text
  document.body.innerText = obj.text1
  document.body.innerText = obj.text2
})
// ===> 数据结构可表示为：
└── obj
    ├── text
  	│ 	 └── fn1
    ├── text1
 		│	   └── fn1
    └── text2
			   └── fn1


effect(function fn1() {
  document.body.innerText = obj1.text
})
effect(function fn2() {
  document.body.innerText = obj2.text2
})
// ===> 数据结构可表示为
└── obj1
    ├── text
    │   └── fn1
    obj2
    └── text2
		    └── fn2
\`\`\`
所以，可以这么设计\`**桶**\`的数据结构：

-  \`const bucket = new WeakMap()\`
   -  \`key\` 为 \`obj\` 
   -  \`value = new Map()\`
      - \`key\` 为 \`text\`
      - \`value = new Set()\`
         - 集合中的值 \`value\` 为 \`key\`所依赖的副作用函数 ，即\`value = [ fn1 , fn2 , ... ]\`

具体实现如下：
> 分别提取出\`track\` 和 \`trigger\` 以便更好的维护代码和理解代码

\`\`\`typescript
// 存储 副作用函数 的桶
const bucket = new WeakMap()

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    track(target, key)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    trigger(target, key)
  }
})


// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}


function track(target, key) {
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  effects && effects.forEach(fn => fn())
}
\`\`\`

看看最终的数据结构：<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1667120138689-eaf5e5df-aacb-40a9-b143-2b376955fcb3.png#averageHue=%2324272b&clientId=u9b0bc959-adbb-4&from=paste&height=251&id=u571493b4&name=image.png&originHeight=690&originWidth=1652&originalType=binary&ratio=1&rotation=0&showTitle=false&size=115209&status=done&style=none&taskId=uf8e9a1fa-b25e-4ab4-9f73-f412baa50da&title=&width=600.6666870117188)
<a name="YMoyi"></a>
## 五、如何避免分支场景不必要的执行呢？
具体场景如下：
\`\`\`typescript
effect(fn1 = () => { 
  console.log('fn1 run')
  document.body.innerText = obj.ok ? obj.text : 'not'
})
// ok从初始值true，会读取text的值，触发设置 当前副作用函数 为依赖 ===> 数据结构可表示为
└── obj
    ├── text
  	│ 	 └── fn1
    └── ok
 	  	   └── fn1

// ok 变为 false时，理想的情况是 fn1 不能被 text 对应的依赖所收集，即如下：
└── obj
    └── ok
 	  	   └── fn1
// 即：不关text的事，但实现情况并非如此。
\`\`\`
以上\`obj.ok\`为\`false\`时，\`obj.text\`变化没必要重新执行 \`fn1\`，仅在\`obj.ok\`为\`true\`时，才需要重新执行 \`fn1\`。

**详细代码如下：**
\`\`\`typescript
const bucket = new WeakMap()
const data = {
    text: 'hello world',
    ok: true,
}
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        trigger(target, key)
    }
})

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    effects && effects.forEach(fn => fn())
}

let activeEffect

function effect(fn) {
    activeEffect = fn
    fn()
}

effect(() => {
    console.log('fn1 run'); // 关注最终打印了多少次
    document.body.innerText = obj.ok ? obj.text : 'not'
})
console.log(bucket);

// 2s 后更改 obj.ok 为 false
setTimeout(() => {
    obj.ok = false;  // 执行了一次 fn1
},2000)

// 4s 后更改 obj.text 的值
setTimeout(() => {
    obj.text = "hello liguwe !"  // 最终执行了一次 fn1 , 其实不希望执行的
},4000)
\`\`\`

**为什么会出现上面这种情况呢？**
> 因为\`fn1\`已经被 \`text\` 所依赖的副作用函数集合所收集，\`text\`的变化，肯定会导致 \`fn1\` 的执行



**解决思路：**
:::success
每次 副作用函数\`fn1\`执行时，把\`fn1\` 从 它与之关联的依赖集合中 删除。
:::

重新设计\`effect\` 函数：
\`\`\`typescript
// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn) 
    // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
    activeEffect = effectFn
    fn()
  }
  // activeEffect.deps 用来存储所有与 该副作用函数相关 的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}

// 清除副作用函数的 deps 属性
function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        // deps里存的是 Set 类型
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}
\`\`\`
\`track\`函数：
\`\`\`typescript
function track(target, key) {
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
  
  // 新添加：把对应的 key 所依赖的 副作用函数集合 赋值给 当前副作用函数的deps 属性
  // 关键点：Set本身是引用类型
  activeEffect.deps.push(deps)
}
\`\`\`
\`trigger\`函数
\`\`\`typescript
function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    // effects && effects.forEach(fn => fn())
    // 修改为
    const effectsToRun = new Set() // 重新赋值给effectsToRun ，否则会导致死循环，见附1
    effects && effects.forEach(effectFn => effectsToRun.add(effectFn))
    effectsToRun.forEach(effectFn => effectFn());
}
\`\`\`

**完整代码：**
\`\`\`typescript
const bucket = new WeakMap()
const data = {
    text: 'hello world',
    ok: true,
}
const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
        track(target, key)
        // 返回属性值
        return target[key]
    },
    // 拦截设置操作
    set(target, key, newVal) {
        // 设置属性值
        target[key] = newVal
        // 把副作用函数从桶里取出并执行
        trigger(target, key)
    }
})

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    // 新添加
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    // effects && effects.forEach(fn => fn())
    // 修改为
    const effectsToRun = new Set()
    effects && effects.forEach(effectFn => effectsToRun.add(effectFn))
    effectsToRun.forEach(effectFn => effectFn());
}

let activeEffect

function effect(fn) {
    // activeEffect = fn
    // fn()
    // ===> 修改为：
    const effectFn = () => {
        cleanup(effectFn)
        // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
        activeEffect = effectFn
        fn()
    }
    // activeEffect.deps 用来存储所有与 该副作用函数相关 的依赖集合
    effectFn.deps = []
    // 执行副作用函数
    effectFn()
}

// 清除副作用函数的 deps 属性
function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}

effect(() => {
    console.log('fn1 run');
    document.body.innerText = obj.ok ? obj.text : 'not'
})
console.log('0s:', bucket);

// 2s后更改 obj.ok 为 false
setTimeout(() => {
    obj.ok = false;
    console.log('2s:', bucket);
}, 2000)


// 4s后更改 obj.text 的值
setTimeout(() => {
    obj.text = "hello liguwe !"
    console.log('4s:', bucket);
}, 4000)


// 6s 后更改 obj.text 的值
setTimeout(() => {
    obj.text = "hello liguwe !"
    console.log('6s:', bucket);
}, 6000)
\`\`\`

**测试看是否符合预期：**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1667130474516-f1cabc32-bd82-4ba4-b289-202437a8a83f.png#averageHue=%23242528&clientId=u9b0bc959-adbb-4&from=paste&height=551&id=ucd1ce418&name=image.png&originHeight=1526&originWidth=2330&originalType=binary&ratio=1&rotation=0&showTitle=false&size=441694&status=done&style=none&taskId=u6c938dd7-a5e1-4b47-ad8e-03c4dad3e26&title=&width=841.6619262695312)
<a name="dZOoS"></a>
### 附1：死循环原因

- 因为副作用的执行会导致 \`effect fn\` 被 清除，然后又被 收集，就类似于下面的代码
- \`cleanup\` 清除，但是 真正副作用函数执行时，触发了 \`obj\` 的读取操作，又能导致重新收集
\`\`\`typescript
const set = new Set([1])

const newSet = new Set(set)
newSet.forEach(item => {
  set.delete(1)
  set.add(1)
  console.log(999)
})
\`\`\`

<a name="uSV16"></a>
## 六、当\`effect\`函数嵌套时？
\`\`\`typescript
const bucket = new WeakMap()
const data = {foo: true, bar: true}
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        trigger(target, key)
    }
})

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    const effectsToRun = new Set()
    effects && effects.forEach(effectFn => effectsToRun.add(effectFn))
    effectsToRun.forEach(effectFn => effectFn())
}

let activeEffect

function effect(fn) {
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        fn()
    }
    effectFn.deps = []
    effectFn()
}

function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}

effect(() => {
    console.log('fn1 run');
    effect(() => {
        console.log('fn2 run');
        temp2 = obj.bar;
    })
    temp1 = obj.foo;
})

obj.foo = false;
obj.bar = false;
obj.foo = true;
\`\`\`

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1668340421785-fbff1de0-5445-41bc-aad4-df60668a9625.png#averageHue=%23212225&clientId=ub846f75e-7f94-4&from=paste&height=501&id=u14f246fe&name=image.png&originHeight=1096&originWidth=1136&originalType=binary&ratio=1&rotation=0&showTitle=false&size=134102&status=done&style=none&taskId=u4bad64a2-96c2-41ad-af60-bfde7b2b731&title=&width=519)

**每次赋值导致的打印如上图，为什么会这样呢？ 看**\`**Effect**\`** 代码**
\`\`\`typescript
function effect(fn) {
    const effectFn = () => {
        cleanup(effectFn)
        //  同一时刻，activeEffect只能有一个，嵌套时，内层的fn2 会覆盖 fn1 , 
        //  无论响应式在内层还是外层收集，每次收集都是 fn2
        activeEffect = effectFn
        fn()
    }
    effectFn.deps = []
    effectFn()
}

effect(() => {
    console.log('fn1 run');
    effect(() => {
        console.log('fn2 run');
        temp2 = obj.bar;
    })
    temp1 = obj.foo;
})
\`\`\`

**问：那么为什么第一次可以正常打印出 **\`**fn1 run**\`** **

解决方案：新增 \`effectStack\` 

\`\`\`typescript
// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
// 新增 effect 栈
const effectStack = []

function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn)
    // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
    activeEffect = effectFn
    //add: 在调用副作用函数之前将当前副作用函数压栈
    effectStack.push(effectFn)
    fn()
    // 在当前副作用函数执行完毕后，将当前副作用函数弹出栈，并还原 activeEffect 为之前的值
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
  }
  // activeEffect.deps 用来存储所有与该副作用函数相关的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}

\`\`\`
<br />
<a name="MW4KJ"></a>
## 七、obj.foo++ 导致的栈溢出
场景如下：
\`\`\`typescript
effect(() => {
  obj.foo++  // obj.foo = obj.foo + 1; 
})
\`\`\`

解决方法比较简单：\`trigger\` 时，添加条件判断

\`\`\`typescript
function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)

  const effectsToRun = new Set()
  effects && effects.forEach(effectFn => {
    // 如果 trigger 触发的函数，与正在执行的函数相同，则不触发执行
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })
  effectsToRun.forEach(effectFn => effectFn())
  // effects && effects.forEach(effectFn => effectFn())
}
\`\`\`
<br />
<a name="DQUek"></a>
## 八、如何实现调度 ？
<a name="fy0f6"></a>
### 场景一
看下面一段代码：
\`\`\`typescript
const data = { foo: 1 }
const obj = new Proxy(data,{/*..省略..*/}) 


effect(() => {
  console.log(obj.foo)
})

obj.foo++;

console.log('end')
\`\`\`

上面代码的打印顺序为 \`1 → 2 → end\`  问：如何实现输入顺序为 \`1 → end → 2\` ?
<a name="vNiSN"></a>
#### 方法一：换位置即可
当然不是想要的
<a name="La1ys"></a>
#### 方法二：调度
\`\`\`typescript
function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  const effectsToRun = new Set()
  effects && effects.forEach(effectFn => {
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })
  effectsToRun.forEach(effectFn => {
    // 如果一个副作用函数存在调度器，则调用调度器，并将副作用函数作为参数传递
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      effectFn()
    }
  })
}

let activeEffect
const effectStack = []

function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn)
    activeEffect = effectFn
    effectStack.push(effectFn)
    fn()
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
  }
  // 将 options 挂在到 effectFn 上
  effectFn.options = options  // add
  effectFn.deps = []
  effectFn()
}
\`\`\`

使用：
\`\`\`typescript
effect(() => {
  console.log(obj.foo)
},
// options
{
    // 调度器
    scheduler(fn) {
      // 放在一个setTimeout中，肯定能保证顺序为 1 → end → 2
    	setTimeout(fn)
  	}
})

obj.foo++;

console.log('end')
\`\`\`

<a name="Kvj7c"></a>
### 场景二
\`\`\`typescript
const data = { foo: 1 }
const obj = new Proxy(data,{/*..省略..*/}) 


effect(() => {
  console.log(obj.foo)
})

obj.foo++;
obj.foo++;
obj.foo++;

\`\`\`

结果是：\`1 → 2 → 3 → 4\` 如果我们希望打印出 \`1  → 4\` ，即 只打印出初始化值和最终值，而不关心中间态

实现方式如下：

\`\`\`typescript
const jobQueue = new Set()
// 使用微任务队列，来保证微任务队列执行一次
const p = Promise.resolve()

let isFlushing = false
function flushJob() {
  if (isFlushing) return
  isFlushing = true
  p.then(() => {
    jobQueue.forEach(job => job()) // 微任务队列里，只会执行一次
  }).finally(() => {
    isFlushing = false
  })
}


effect(() => {
  console.log(obj.foo)
}, {
  scheduler(fn) {
    // jobQueue为集合，保障连续执行 scheduler 调度函数时，只会添加一次
    jobQueue.add(fn)
    // 会执行两次，但是内部有 isFlushing 变量控制，实际在一个微任务队列里，只会执行一次
    flushJob()
  }
})

obj.foo++;
obj.foo++;
obj.foo++;
\`\`\`

`,body_draft:`<a name="TQf3q"></a>
# Vue3 响应式系统设计
<a name="yZMvx"></a>
## 一、为何响应式
比如以下代码：
\`\`\`typescript
const obj = {text: 'hello world！'};

function effect() {
    document.body.innerText = obj.text;
}
\`\`\`

如果我修改\`obj.text = "hello liguwe！";\0\` ， \`effect\` 函数重新会执行，更新页面内容为 \`hello liguwe！\`  ，则说明 \`obj\` 是 **响应式的，**下面是初步实现
<a name="x3fcb"></a>
## 二、初步实现
使用\`Proxy\` ， 代理对象进行读取和写入的拦截，并把\`副作用函数\`放入\`**桶**\`的数据结构中 ， 读取时放入\`桶\`中，写入时从\`桶\`中拿出来并执行。
\`\`\`typescript
// 存储副作用函数的桶
const bucket = new Set()

// 原始数据
const data = {text: 'hello world'}

// 对原始数据的代理
const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 将副作用函数 effect 添加到存储副作用函数的桶中
        bucket.add(effect); // 硬编码了副作用函数，名字就叫effect
        // 返回属性值
        return target[key];
    },
    // 拦截设置操作
    set(target, key, newVal) {
        // 设置属性值
        target[key] = newVal;
        // 把副作用函数从桶里取出并执行
        bucket.forEach(fn => fn())
    }
})
\`\`\`


**测试：**
\`\`\`typescript
function effect() {
    document.body.innerText = obj.text
}
// 触发读取
effect()

// 触发写入，可以重新执行 effect 
setTimeout(() => {
    obj.text = 'hello liguwe'
}, 2000);
\`\`\`

**以上实现的 缺点：**

- 硬编码 \`effect\` 
<a name="KxmuE"></a>
## 三、完善：解决\`硬编码\`的问题
使用全局变量 \`activeEffect\` 来存储 \`需要被注册的副作用函数\`。
\`\`\`typescript
// 存储副作用函数的桶
const bucket = new Set()
// 用一个全局变量存储当前激活的 effect 函数
let activeEffect

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    bucket.add(activeEffect)  
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    bucket.forEach(fn => fn())
  }
})
\`\`\`
副作用函数的定义：
\`\`\`typescript
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}

// 传入的匿名函数中有，读取了obj.text， 所以会触发proxy get，而这时 activeEffect 被赋值给了这个匿名函数
// 所以，这时候真正的 副作用函数 会被 桶 正常收集
effect(() => {
  console.log('effect run') // 📌 
  document.body.innerText = obj.text
})

effect(() => {
    console.log('effect 2 run')  // 📌 
    document.body.innerText = obj.text
})

setTimeout(() => {
  obj.text = 'hello vue3' ; // 📌📌 
}, 1000)

setTimeout(() => {
    obj.text = 'hello vue3 1' // 📌📌 
}, 2000)

// 打印不存在属性 text1 ，也会打印 2 次
setTimeout(() => {
    obj.text1 = 'hello not Exist' // 📌📌 
}, 4000);
\`\`\`

问：以上代码 \`log\` 的顺序？为什么会打印这8次呢？ 如上标记：📌<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1667052577212-ff9cb3c3-4d35-4f8c-8219-762d2d4e111c.png#averageHue=%2326272a&clientId=u9b0bc959-adbb-4&from=paste&height=254&id=u874687de&name=image.png&originHeight=514&originWidth=666&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52622&status=done&style=none&taskId=u10000ad6-84ba-4990-95e4-319c9190244&title=&width=329.3991394042969)<br />如上代码，打印设置不存在的属性时\`obj.text1\`，也会执行副作用函数，但副作用函数根本不需要使用到这个属性，**如何解决呢？ **
<a name="elQu9"></a>
## 四、继续完善：避免不需要的执行
需要重新设计数据结构 以表示 **副作用函数与目标之间的关系 **<br />以下是数据结构设计：
\`\`\`typescript
effect(function fn1() {
  document.body.innerText = obj.text
})
effect(function fn2() {
  document.body.innerText = obj.text
})
// ===> 数据结构可表示为：
└── obj
   	└── text
      	 ├──fn1
      	 └── fn2

effect(function fn1() {
  document.body.innerText = obj.text
  document.body.innerText = obj.text1
  document.body.innerText = obj.text2
})
// ===> 数据结构可表示为：
└── obj
    ├── text
  	│ 	 └── fn1
    ├── text1
 		│	   └── fn1
    └── text2
			   └── fn1


effect(function fn1() {
  document.body.innerText = obj1.text
})
effect(function fn2() {
  document.body.innerText = obj2.text2
})
// ===> 数据结构可表示为
└── obj1
    ├── text
    │   └── fn1
    obj2
    └── text2
		    └── fn2
\`\`\`
所以，可以这么设计\`**桶**\`的数据结构：

-  \`const bucket = new WeakMap()\`
   -  \`key\` 为 \`obj\` 
   -  \`value = new Map()\`
      - \`key\` 为 \`text\`
      - \`value = new Set()\`
         - 集合中的值 \`value\` 为 \`key\`所依赖的副作用函数 ，即\`value = [ fn1 , fn2 , ... ]\`

具体实现如下：
> 分别提取出\`track\` 和 \`trigger\` 以便更好的维护代码和理解代码

\`\`\`typescript
// 存储 副作用函数 的桶
const bucket = new WeakMap()

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    track(target, key)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    trigger(target, key)
  }
})


// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}


function track(target, key) {
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  effects && effects.forEach(fn => fn())
}
\`\`\`

看看最终的数据结构：<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1667120138689-eaf5e5df-aacb-40a9-b143-2b376955fcb3.png#averageHue=%2324272b&clientId=u9b0bc959-adbb-4&from=paste&height=251&id=u571493b4&name=image.png&originHeight=690&originWidth=1652&originalType=binary&ratio=1&rotation=0&showTitle=false&size=115209&status=done&style=none&taskId=uf8e9a1fa-b25e-4ab4-9f73-f412baa50da&title=&width=600.6666870117188)
<a name="YMoyi"></a>
## 五、如何避免分支场景不必要的执行呢？
具体场景如下：
\`\`\`typescript
effect(fn1 = () => { 
  console.log('fn1 run')
  document.body.innerText = obj.ok ? obj.text : 'not'
})
// ok从初始值true，会读取text的值，触发设置 当前副作用函数 为依赖 ===> 数据结构可表示为
└── obj
    ├── text
  	│ 	 └── fn1
    └── ok
 	  	   └── fn1

// ok 变为 false时，理想的情况是 fn1 不能被 text 对应的依赖所收集，即如下：
└── obj
    └── ok
 	  	   └── fn1
// 即：不关text的事，但实现情况并非如此。
\`\`\`
以上\`obj.ok\`为\`false\`时，\`obj.text\`变化没必要重新执行 \`fn1\`，仅在\`obj.ok\`为\`true\`时，才需要重新执行 \`fn1\`。

**详细代码如下：**
\`\`\`typescript
const bucket = new WeakMap()
const data = {
    text: 'hello world',
    ok: true,
}
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        trigger(target, key)
    }
})

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    effects && effects.forEach(fn => fn())
}

let activeEffect

function effect(fn) {
    activeEffect = fn
    fn()
}

effect(() => {
    console.log('fn1 run'); // 关注最终打印了多少次
    document.body.innerText = obj.ok ? obj.text : 'not'
})
console.log(bucket);

// 2s 后更改 obj.ok 为 false
setTimeout(() => {
    obj.ok = false;  // 执行了一次 fn1
},2000)

// 4s 后更改 obj.text 的值
setTimeout(() => {
    obj.text = "hello liguwe !"  // 最终执行了一次 fn1 , 其实不希望执行的
},4000)
\`\`\`

**为什么会出现上面这种情况呢？**
> 因为\`fn1\`已经被 \`text\` 所依赖的副作用函数集合所收集，\`text\`的变化，肯定会导致 \`fn1\` 的执行



**解决思路：**
:::success
每次 副作用函数\`fn1\`执行时，把\`fn1\` 从 它与之关联的依赖集合中 删除。
:::

重新设计\`effect\` 函数：
\`\`\`typescript
// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn) 
    // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
    activeEffect = effectFn
    fn()
  }
  // activeEffect.deps 用来存储所有与 该副作用函数相关 的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}

// 清除副作用函数的 deps 属性
function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        // deps里存的是 Set 类型
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}
\`\`\`
\`track\`函数：
\`\`\`typescript
function track(target, key) {
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
  
  // 新添加：把对应的 key 所依赖的 副作用函数集合 赋值给 当前副作用函数的deps 属性
  // 关键点：Set本身是引用类型
  activeEffect.deps.push(deps)
}
\`\`\`
\`trigger\`函数
\`\`\`typescript
function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    // effects && effects.forEach(fn => fn())
    // 修改为
    const effectsToRun = new Set() // 重新赋值给effectsToRun ，否则会导致死循环，见附1
    effects && effects.forEach(effectFn => effectsToRun.add(effectFn))
    effectsToRun.forEach(effectFn => effectFn());
}
\`\`\`

**完整代码：**
\`\`\`typescript
const bucket = new WeakMap()
const data = {
    text: 'hello world',
    ok: true,
}
const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
        track(target, key)
        // 返回属性值
        return target[key]
    },
    // 拦截设置操作
    set(target, key, newVal) {
        // 设置属性值
        target[key] = newVal
        // 把副作用函数从桶里取出并执行
        trigger(target, key)
    }
})

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    // 新添加
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    // effects && effects.forEach(fn => fn())
    // 修改为
    const effectsToRun = new Set()
    effects && effects.forEach(effectFn => effectsToRun.add(effectFn))
    effectsToRun.forEach(effectFn => effectFn());
}

let activeEffect

function effect(fn) {
    // activeEffect = fn
    // fn()
    // ===> 修改为：
    const effectFn = () => {
        cleanup(effectFn)
        // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
        activeEffect = effectFn
        fn()
    }
    // activeEffect.deps 用来存储所有与 该副作用函数相关 的依赖集合
    effectFn.deps = []
    // 执行副作用函数
    effectFn()
}

// 清除副作用函数的 deps 属性
function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}

effect(() => {
    console.log('fn1 run');
    document.body.innerText = obj.ok ? obj.text : 'not'
})
console.log('0s:', bucket);

// 2s后更改 obj.ok 为 false
setTimeout(() => {
    obj.ok = false;
    console.log('2s:', bucket);
}, 2000)


// 4s后更改 obj.text 的值
setTimeout(() => {
    obj.text = "hello liguwe !"
    console.log('4s:', bucket);
}, 4000)


// 6s 后更改 obj.text 的值
setTimeout(() => {
    obj.text = "hello liguwe !"
    console.log('6s:', bucket);
}, 6000)
\`\`\`

**测试看是否符合预期：**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1667130474516-f1cabc32-bd82-4ba4-b289-202437a8a83f.png#averageHue=%23242528&clientId=u9b0bc959-adbb-4&from=paste&height=551&id=ucd1ce418&name=image.png&originHeight=1526&originWidth=2330&originalType=binary&ratio=1&rotation=0&showTitle=false&size=441694&status=done&style=none&taskId=u6c938dd7-a5e1-4b47-ad8e-03c4dad3e26&title=&width=841.6619262695312)
<a name="dZOoS"></a>
### 附1：死循环原因

- 因为副作用的执行会导致 \`effect fn\` 被 清除，然后又被 收集，就类似于下面的代码
- \`cleanup\` 清除，但是 真正副作用函数执行时，触发了 \`obj\` 的读取操作，又能导致重新收集
\`\`\`typescript
const set = new Set([1])

const newSet = new Set(set)
newSet.forEach(item => {
  set.delete(1)
  set.add(1)
  console.log(999)
})
\`\`\`

<a name="uSV16"></a>
## 六、当\`effect\`函数嵌套时？
\`\`\`typescript
const bucket = new WeakMap()
const data = {foo: true, bar: true}
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        trigger(target, key)
    }
})

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    const effectsToRun = new Set()
    effects && effects.forEach(effectFn => effectsToRun.add(effectFn))
    effectsToRun.forEach(effectFn => effectFn())
}

let activeEffect

function effect(fn) {
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        fn()
    }
    effectFn.deps = []
    effectFn()
}

function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}

effect(() => {
    console.log('fn1 run');
    effect(() => {
        console.log('fn2 run');
        temp2 = obj.bar;
    })
    temp1 = obj.foo;
})

obj.foo = false;
obj.bar = false;
obj.foo = true;
\`\`\`

![image.png](https://cdn.nlark.com/yuque/0/2022/png/687303/1668340421785-fbff1de0-5445-41bc-aad4-df60668a9625.png#averageHue=%23212225&clientId=ub846f75e-7f94-4&from=paste&height=501&id=u14f246fe&name=image.png&originHeight=1096&originWidth=1136&originalType=binary&ratio=1&rotation=0&showTitle=false&size=134102&status=done&style=none&taskId=u4bad64a2-96c2-41ad-af60-bfde7b2b731&title=&width=519)

**每次赋值导致的打印如上图，为什么会这样呢？ 看**\`**Effect**\`** 代码**
\`\`\`typescript
function effect(fn) {
    const effectFn = () => {
        cleanup(effectFn)
        //  同一时刻，activeEffect只能有一个，嵌套时，内层的fn2 会覆盖 fn1 , 
        //  无论响应式在内层还是外层收集，每次收集都是 fn2
        activeEffect = effectFn
        fn()
    }
    effectFn.deps = []
    effectFn()
}

effect(() => {
    console.log('fn1 run');
    effect(() => {
        console.log('fn2 run');
        temp2 = obj.bar;
    })
    temp1 = obj.foo;
})
\`\`\`

**问：那么为什么第一次可以正常打印出 **\`**fn1 run**\`** **

解决方案：新增 \`effectStack\` 

\`\`\`typescript
// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
// 新增 effect 栈
const effectStack = []

function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn)
    // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
    activeEffect = effectFn
    //add: 在调用副作用函数之前将当前副作用函数压栈
    effectStack.push(effectFn)
    fn()
    // 在当前副作用函数执行完毕后，将当前副作用函数弹出栈，并还原 activeEffect 为之前的值
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
  }
  // activeEffect.deps 用来存储所有与该副作用函数相关的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}

\`\`\`
<br />
<a name="MW4KJ"></a>
## 七、obj.foo++ 导致的栈溢出
场景如下：
\`\`\`typescript
effect(() => {
  obj.foo++  // obj.foo = obj.foo + 1; 
})
\`\`\`

解决方法比较简单：\`trigger\` 时，添加条件判断

\`\`\`typescript
function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)

  const effectsToRun = new Set()
  effects && effects.forEach(effectFn => {
    // 如果 trigger 触发的函数，与正在执行的函数相同，则不触发执行
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })
  effectsToRun.forEach(effectFn => effectFn())
  // effects && effects.forEach(effectFn => effectFn())
}
\`\`\`
<br />
<a name="DQUek"></a>
## 八、如何实现调度 ？
<a name="fy0f6"></a>
### 场景一
看下面一段代码：
\`\`\`typescript
const data = { foo: 1 }
const obj = new Proxy(data,{/*..省略..*/}) 


effect(() => {
  console.log(obj.foo)
})

obj.foo++;

console.log('end')
\`\`\`

上面代码的打印顺序为 \`1 → 2 → end\`  问：如何实现输入顺序为 \`1 → end → 2\` ?
<a name="vNiSN"></a>
#### 方法一：换位置即可
当然不是想要的
<a name="La1ys"></a>
#### 方法二：调度
\`\`\`typescript
function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  const effectsToRun = new Set()
  effects && effects.forEach(effectFn => {
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })
  effectsToRun.forEach(effectFn => {
    // 如果一个副作用函数存在调度器，则调用调度器，并将副作用函数作为参数传递
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      effectFn()
    }
  })
}

let activeEffect
const effectStack = []

function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn)
    activeEffect = effectFn
    effectStack.push(effectFn)
    fn()
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
  }
  // 将 options 挂在到 effectFn 上
  effectFn.options = options  // add
  effectFn.deps = []
  effectFn()
}
\`\`\`

使用：
\`\`\`typescript
effect(() => {
  console.log(obj.foo)
},
// options
{
    // 调度器
    scheduler(fn) {
      // 放在一个setTimeout中，肯定能保证顺序为 1 → end → 2
    	setTimeout(fn)
  	}
})

obj.foo++;

console.log('end')
\`\`\`

<a name="Kvj7c"></a>
### 场景二
\`\`\`typescript
const data = { foo: 1 }
const obj = new Proxy(data,{/*..省略..*/}) 


effect(() => {
  console.log(obj.foo)
})

obj.foo++;
obj.foo++;
obj.foo++;

\`\`\`

结果是：\`1 → 2 → 3 → 4\` 如果我们希望打印出 \`1  → 4\` ，即 只打印出初始化值和最终值，而不关心中间态

实现方式如下：

\`\`\`typescript
const jobQueue = new Set()
// 使用微任务队列，来保证微任务队列执行一次
const p = Promise.resolve()

let isFlushing = false
function flushJob() {
  if (isFlushing) return
  isFlushing = true
  p.then(() => {
    jobQueue.forEach(job => job()) // 微任务队列里，只会执行一次
  }).finally(() => {
    isFlushing = false
  })
}


effect(() => {
  console.log(obj.foo)
}, {
  scheduler(fn) {
    // jobQueue为集合，保障连续执行 scheduler 调度函数时，只会添加一次
    jobQueue.add(fn)
    // 会执行两次，但是内部有 isFlushing 变量控制，实际在一个微任务队列里，只会执行一次
    flushJob()
  }
})

obj.foo++;
obj.foo++;
obj.foo++;
\`\`\`

`,body_html:`<!doctype html><div class="lake-content" typography="classic"><h1 id="TQf3q"><span class="ne-text">Vue3 响应式系统设计</span></h1><h2 id="yZMvx"><span class="ne-text">一、为何响应式</span></h2><p id="ua8668d39" class="ne-p"><span class="ne-text">比如以下代码：</span></p><pre data-language="typescript" id="hH8kX" class="ne-codeblock language-typescript">const obj = {text: 'hello world！'};

function effect() {
    document.body.innerText = obj.text;
}</pre><p id="uab99bcca" class="ne-p"><br></p><p id="ub582970d" class="ne-p"><span class="ne-text">如果我修改</span><code class="ne-code"><span class="ne-text">obj.text = &quot;hello liguwe！&quot;;\0</span></code><span class="ne-text"> ， </span><code class="ne-code"><span class="ne-text">effect</span></code><span class="ne-text"> 函数重新会执行，更新页面内容为 </span><code class="ne-code"><span class="ne-text">hello liguwe！</span></code><span class="ne-text">  ，则说明 </span><code class="ne-code"><span class="ne-text">obj</span></code><span class="ne-text"> 是 </span><strong><span class="ne-text">响应式的，</span></strong><span class="ne-text">下面是初步实现</span></p><h2 id="x3fcb"><span class="ne-text">二、初步实现</span></h2><p id="u7207122e" class="ne-p"><span class="ne-text">使用</span><code class="ne-code"><span class="ne-text">Proxy</span></code><span class="ne-text"> ， 代理对象进行读取和写入的拦截，并把</span><code class="ne-code"><span class="ne-text">副作用函数</span></code><span class="ne-text">放入</span><code class="ne-code"><strong><span class="ne-text">桶</span></strong></code><span class="ne-text">的数据结构中 ， 读取时放入</span><code class="ne-code"><span class="ne-text">桶</span></code><span class="ne-text">中，写入时从</span><code class="ne-code"><span class="ne-text">桶</span></code><span class="ne-text">中拿出来并执行。</span></p><pre data-language="typescript" id="H33QY" class="ne-codeblock language-typescript">// 存储副作用函数的桶
const bucket = new Set()

// 原始数据
const data = {text: 'hello world'}

// 对原始数据的代理
const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 将副作用函数 effect 添加到存储副作用函数的桶中
        bucket.add(effect); // 硬编码了副作用函数，名字就叫effect
        // 返回属性值
        return target[key];
    },
    // 拦截设置操作
    set(target, key, newVal) {
        // 设置属性值
        target[key] = newVal;
        // 把副作用函数从桶里取出并执行
        bucket.forEach(fn =&gt; fn())
    }
})</pre><p id="u8d04b7fd" class="ne-p"><strong><span class="ne-text"></span></strong></p><p id="ua756a6ff" class="ne-p"><strong><span class="ne-text">测试：</span></strong></p><pre data-language="typescript" id="Q5bq5" class="ne-codeblock language-typescript">function effect() {
    document.body.innerText = obj.text
}
// 触发读取
effect()

// 触发写入，可以重新执行 effect 
setTimeout(() =&gt; {
    obj.text = 'hello liguwe'
}, 2000);</pre><p id="u9a313742" class="ne-p"><span class="ne-text"></span></p><p id="u920673f2" class="ne-p"><strong><span class="ne-text">以上实现的 </span></strong><strong><span class="ne-text" style="color: rgb(205, 23, 33)">缺点</span></strong><strong><span class="ne-text">：</span></strong></p><ul class="ne-ul"><li id="ub5c73197"><span class="ne-text">硬编码 </span><code class="ne-code"><span class="ne-text">effect</span></code><span class="ne-text"> </span></li></ul><h2 id="KxmuE"><span class="ne-text">三、完善：解决</span><code class="ne-code"><span class="ne-text">硬编码</span></code><span class="ne-text">的问题</span></h2><p id="ue1ce8372" class="ne-p"><span class="ne-text">使用全局变量 </span><code class="ne-code"><span class="ne-text">activeEffect</span></code><span class="ne-text"> 来存储 </span><code class="ne-code"><span class="ne-text">需要被注册的副作用函数</span></code><span class="ne-text">。</span></p><pre data-language="typescript" id="ck61s" class="ne-codeblock language-typescript">// 存储副作用函数的桶
const bucket = new Set()
// 用一个全局变量存储当前激活的 effect 函数
let activeEffect

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    bucket.add(activeEffect)  
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    bucket.forEach(fn =&gt; fn())
  }
})</pre><p id="u6bde083f" class="ne-p"><span class="ne-text">副作用函数的定义：</span></p><pre data-language="typescript" id="ffG6R" class="ne-codeblock language-typescript">function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}

// 传入的匿名函数中有，读取了obj.text， 所以会触发proxy get，而这时 activeEffect 被赋值给了这个匿名函数
// 所以，这时候真正的 副作用函数 会被 桶 正常收集
effect(() =&gt; {
  console.log('effect run') // 📌 
  document.body.innerText = obj.text
})

effect(() =&gt; {
    console.log('effect 2 run')  // 📌 
    document.body.innerText = obj.text
})

setTimeout(() =&gt; {
  obj.text = 'hello vue3' ; // 📌📌 
}, 1000)

setTimeout(() =&gt; {
    obj.text = 'hello vue3 1' // 📌📌 
}, 2000)

// 打印不存在属性 text1 ，也会打印 2 次
setTimeout(() =&gt; {
    obj.text1 = 'hello not Exist' // 📌📌 
}, 4000);</pre><p id="u1f79d52d" class="ne-p"><br></p><p id="ufb2c9876" class="ne-p"><span class="ne-text">问：以上代码 </span><code class="ne-code"><span class="ne-text">log</span></code><span class="ne-text"> 的顺序？为什么会打印这8次呢？ 如上标记：📌</span></p><p id="u2f95edbb" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1667052577212-ff9cb3c3-4d35-4f8c-8219-762d2d4e111c.png" width="329.3991394042969" id="u874687de" class="ne-image"></p><p id="ufd3983eb" class="ne-p"><span class="ne-text">如上代码，打印设置不存在的属性时</span><code class="ne-code"><span class="ne-text">obj.text1</span></code><span class="ne-text">，也会执行副作用函数，但副作用函数根本不需要使用到这个属性，</span><strong><span class="ne-text">如何解决呢？ </span></strong></p><h2 id="elQu9"><span class="ne-text">四、继续完善：避免不需要的执行</span></h2><p id="ued923479" class="ne-p"><span class="ne-text">需要重新设计数据结构 以表示 </span><strong><span class="ne-text">副作用函数与目标之间的关系 </span></strong></p><p id="u2cf71a3b" class="ne-p"><span class="ne-text">以下是数据结构设计：</span></p><pre data-language="typescript" id="LGKfc" class="ne-codeblock language-typescript">effect(function fn1() {
  document.body.innerText = obj.text
})
effect(function fn2() {
  document.body.innerText = obj.text
})
// ===&gt; 数据结构可表示为：
└── obj
   	└── text
      	 ├──fn1
      	 └── fn2

effect(function fn1() {
  document.body.innerText = obj.text
  document.body.innerText = obj.text1
  document.body.innerText = obj.text2
})
// ===&gt; 数据结构可表示为：
└── obj
    ├── text
  	│ 	 └── fn1
    ├── text1
 		│	   └── fn1
    └── text2
			   └── fn1


effect(function fn1() {
  document.body.innerText = obj1.text
})
effect(function fn2() {
  document.body.innerText = obj2.text2
})
// ===&gt; 数据结构可表示为
└── obj1
    ├── text
    │   └── fn1
    obj2
    └── text2
		    └── fn2</pre><p id="uc19fe2ad" class="ne-p"><span class="ne-text">所以，可以这么设计</span><code class="ne-code"><strong><span class="ne-text">桶</span></strong></code><span class="ne-text">的数据结构：</span></p><ul class="ne-ul"><li id="udd6c0489"><span class="ne-text"> </span><code class="ne-code"><span class="ne-text">const bucket = new WeakMap()</span></code></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u0ea76003"><span class="ne-text"> </span><code class="ne-code"><span class="ne-text">key</span></code><span class="ne-text"> 为 </span><code class="ne-code"><span class="ne-text">obj</span></code><span class="ne-text"> </span></li><li id="u4eae7b1b"><span class="ne-text"> </span><code class="ne-code"><span class="ne-text">value = new Map()</span></code></li></ul></ul><ul class="ne-list-wrap"><ul class="ne-list-wrap"><ul ne-level="2" class="ne-ul"><li id="u92a25fa6"><code class="ne-code"><span class="ne-text">key</span></code><span class="ne-text"> 为 </span><code class="ne-code"><span class="ne-text">text</span></code></li><li id="u06ff65c0"><code class="ne-code"><span class="ne-text">value = new Set()</span></code></li></ul></ul></ul><ul class="ne-list-wrap"><ul class="ne-list-wrap"><ul class="ne-list-wrap"><ul ne-level="3" class="ne-ul"><li id="u46374790"><span class="ne-text">集合中的值 </span><code class="ne-code"><span class="ne-text">value</span></code><span class="ne-text"> 为 </span><code class="ne-code"><span class="ne-text">key</span></code><span class="ne-text">所依赖的副作用函数 ，即</span><code class="ne-code"><span class="ne-text">value = [ fn1 , fn2 , ... ]</span></code></li></ul></ul></ul></ul><p id="u4a7794b5" class="ne-p"><span class="ne-text">具体实现如下：</span></p><div class="ne-quote"><p id="u92dc11f1" class="ne-p"><span class="ne-text">分别提取出</span><code class="ne-code"><span class="ne-text">track</span></code><span class="ne-text"> 和 </span><code class="ne-code"><span class="ne-text">trigger</span></code><span class="ne-text"> 以便更好的维护代码和理解代码</span></p></div><pre data-language="typescript" id="D8VTg" class="ne-codeblock language-typescript">// 存储 副作用函数 的桶
const bucket = new WeakMap()

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    track(target, key)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    trigger(target, key)
  }
})


// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}


function track(target, key) {
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  effects &amp;&amp; effects.forEach(fn =&gt; fn())
}</pre><p id="u5ab79c9d" class="ne-p"><span class="ne-text"></span></p><p id="u117c759c" class="ne-p"><span class="ne-text">看看最终的数据结构：</span></p><p id="u3431f708" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1667120138689-eaf5e5df-aacb-40a9-b143-2b376955fcb3.png" width="600.6666870117188" id="u571493b4" class="ne-image"></p><h2 id="YMoyi"><span class="ne-text">五、如何避免分支场景不必要的执行呢？</span></h2><p id="u4e528e38" class="ne-p"><span class="ne-text">具体场景如下：</span></p><pre data-language="typescript" id="QjvK0" class="ne-codeblock language-typescript">effect(fn1 = () =&gt; { 
  console.log('fn1 run')
  document.body.innerText = obj.ok ? obj.text : 'not'
})
// ok从初始值true，会读取text的值，触发设置 当前副作用函数 为依赖 ===&gt; 数据结构可表示为
└── obj
    ├── text
  	│ 	 └── fn1
    └── ok
 	  	   └── fn1

// ok 变为 false时，理想的情况是 fn1 不能被 text 对应的依赖所收集，即如下：
└── obj
    └── ok
 	  	   └── fn1
// 即：不关text的事，但实现情况并非如此。</pre><p id="u31a55bf1" class="ne-p"><span class="ne-text">以上</span><code class="ne-code"><span class="ne-text">obj.ok</span></code><span class="ne-text">为</span><code class="ne-code"><span class="ne-text">false</span></code><span class="ne-text">时，</span><code class="ne-code"><span class="ne-text">obj.text</span></code><span class="ne-text">变化没必要重新执行 </span><code class="ne-code"><span class="ne-text">fn1</span></code><span class="ne-text">，仅在</span><code class="ne-code"><span class="ne-text">obj.ok</span></code><span class="ne-text">为</span><code class="ne-code"><span class="ne-text">true</span></code><span class="ne-text">时，才需要重新执行 </span><code class="ne-code"><span class="ne-text">fn1</span></code><span class="ne-text">。</span></p><p id="u4d6fec7d" class="ne-p"><span class="ne-text"></span></p><p id="u5ebb981e" class="ne-p"><strong><span class="ne-text">详细代码如下：</span></strong></p><pre data-language="typescript" id="EgAlP" class="ne-codeblock language-typescript">const bucket = new WeakMap()
const data = {
    text: 'hello world',
    ok: true,
}
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        trigger(target, key)
    }
})

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    effects &amp;&amp; effects.forEach(fn =&gt; fn())
}

let activeEffect

function effect(fn) {
    activeEffect = fn
    fn()
}

effect(() =&gt; {
    console.log('fn1 run'); // 关注最终打印了多少次
    document.body.innerText = obj.ok ? obj.text : 'not'
})
console.log(bucket);

// 2s 后更改 obj.ok 为 false
setTimeout(() =&gt; {
    obj.ok = false;  // 执行了一次 fn1
},2000)

// 4s 后更改 obj.text 的值
setTimeout(() =&gt; {
    obj.text = &quot;hello liguwe !&quot;  // 最终执行了一次 fn1 , 其实不希望执行的
},4000)</pre><p id="u70990c8b" class="ne-p"><span class="ne-text"></span></p><p id="u82f954bd" class="ne-p"><strong><span class="ne-text" style="text-decoration: underline">为什么会出现上面这种情况呢？</span></strong></p><div data-type="color4" class="ne-alert"><p id="ue2427b64" class="ne-p"><span class="ne-text">因为</span><code class="ne-code"><span class="ne-text">fn1</span></code><span class="ne-text">已经被 </span><code class="ne-code"><span class="ne-text">text</span></code><span class="ne-text"> 所依赖的副作用函数集合所收集，</span><code class="ne-code"><span class="ne-text">text</span></code><span class="ne-text">的变化，肯定会导致 </span><code class="ne-code"><span class="ne-text">fn1</span></code><span class="ne-text"> 的执行</span></p></div><p id="ua13c3189" class="ne-p"><strong><span class="ne-text"></span></strong></p><p id="ueadaf5ec" class="ne-p"><strong><span class="ne-text">解决思路：</span></strong></p><div data-type="success" class="ne-alert"><p id="u67eb4f3d" class="ne-p"><span class="ne-text">每次 副作用函数</span><code class="ne-code"><span class="ne-text">fn1</span></code><span class="ne-text">执行时，把</span><code class="ne-code"><span class="ne-text">fn1</span></code><span class="ne-text"> 从 它与之关联的依赖集合中 删除。</span></p></div><p id="u4f40d15b" class="ne-p"><span class="ne-text"></span></p><p id="u8b94155f" class="ne-p"><span class="ne-text">重新设计</span><code class="ne-code"><span class="ne-text">effect</span></code><span class="ne-text"> 函数：</span></p><pre data-language="typescript" id="uCLaQ" class="ne-codeblock language-typescript">// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
  const effectFn = () =&gt; {
    cleanup(effectFn) 
    // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
    activeEffect = effectFn
    fn()
  }
  // activeEffect.deps 用来存储所有与 该副作用函数相关 的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}

// 清除副作用函数的 deps 属性
function cleanup(effectFn) {
    for (let i = 0; i &lt; effectFn.deps.length; i++) {
        // deps里存的是 Set 类型
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}</pre><p id="u6628bd19" class="ne-p"><code class="ne-code"><span class="ne-text">track</span></code><span class="ne-text">函数：</span></p><pre data-language="typescript" id="WJPQc" class="ne-codeblock language-typescript">function track(target, key) {
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
  
  // 新添加：把对应的 key 所依赖的 副作用函数集合 赋值给 当前副作用函数的deps 属性
  // 关键点：Set本身是引用类型
  activeEffect.deps.push(deps)
}</pre><p id="ucc2303a6" class="ne-p"><code class="ne-code"><span class="ne-text">trigger</span></code><span class="ne-text">函数</span></p><pre data-language="typescript" id="FVSaS" class="ne-codeblock language-typescript">function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    // effects &amp;&amp; effects.forEach(fn =&gt; fn())
    // 修改为
    const effectsToRun = new Set() // 重新赋值给effectsToRun ，否则会导致死循环，见附1
    effects &amp;&amp; effects.forEach(effectFn =&gt; effectsToRun.add(effectFn))
    effectsToRun.forEach(effectFn =&gt; effectFn());
}</pre><p id="ue48feb31" class="ne-p"><br></p><p id="u6153d72c" class="ne-p"><strong><span class="ne-text">完整代码：</span></strong></p><pre data-language="typescript" id="SJwT7" class="ne-codeblock language-typescript">const bucket = new WeakMap()
const data = {
    text: 'hello world',
    ok: true,
}
const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
        track(target, key)
        // 返回属性值
        return target[key]
    },
    // 拦截设置操作
    set(target, key, newVal) {
        // 设置属性值
        target[key] = newVal
        // 把副作用函数从桶里取出并执行
        trigger(target, key)
    }
})

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    // 新添加
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    // effects &amp;&amp; effects.forEach(fn =&gt; fn())
    // 修改为
    const effectsToRun = new Set()
    effects &amp;&amp; effects.forEach(effectFn =&gt; effectsToRun.add(effectFn))
    effectsToRun.forEach(effectFn =&gt; effectFn());
}

let activeEffect

function effect(fn) {
    // activeEffect = fn
    // fn()
    // ===&gt; 修改为：
    const effectFn = () =&gt; {
        cleanup(effectFn)
        // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
        activeEffect = effectFn
        fn()
    }
    // activeEffect.deps 用来存储所有与 该副作用函数相关 的依赖集合
    effectFn.deps = []
    // 执行副作用函数
    effectFn()
}

// 清除副作用函数的 deps 属性
function cleanup(effectFn) {
    for (let i = 0; i &lt; effectFn.deps.length; i++) {
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}

effect(() =&gt; {
    console.log('fn1 run');
    document.body.innerText = obj.ok ? obj.text : 'not'
})
console.log('0s:', bucket);

// 2s后更改 obj.ok 为 false
setTimeout(() =&gt; {
    obj.ok = false;
    console.log('2s:', bucket);
}, 2000)


// 4s后更改 obj.text 的值
setTimeout(() =&gt; {
    obj.text = &quot;hello liguwe !&quot;
    console.log('4s:', bucket);
}, 4000)


// 6s 后更改 obj.text 的值
setTimeout(() =&gt; {
    obj.text = &quot;hello liguwe !&quot;
    console.log('6s:', bucket);
}, 6000)</pre><p id="udde5a258" class="ne-p"><br></p><p id="ue5465720" class="ne-p"><strong><span class="ne-text">测试看是否符合预期：</span></strong></p><p id="u878545fe" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1667130474516-f1cabc32-bd82-4ba4-b289-202437a8a83f.png" width="841.6619262695312" id="ucd1ce418" class="ne-image"></p><h3 id="dZOoS"><span class="ne-text">附1：死循环原因</span></h3><ul class="ne-ul"><li id="uc95920a7"><span class="ne-text">因为副作用的执行会导致 </span><code class="ne-code"><span class="ne-text">effect fn</span></code><span class="ne-text"> 被 清除，然后又被 收集，就类似于下面的代码</span></li><li id="u1926a0fa"><code class="ne-code"><span class="ne-text">cleanup</span></code><span class="ne-text"> 清除，但是 真正副作用函数执行时，触发了 </span><code class="ne-code"><span class="ne-text">obj</span></code><span class="ne-text"> 的读取操作，又能导致重新收集</span></li></ul><pre data-language="typescript" id="QSB1e" class="ne-codeblock language-typescript">const set = new Set([1])

const newSet = new Set(set)
newSet.forEach(item =&gt; {
  set.delete(1)
  set.add(1)
  console.log(999)
})</pre><p id="uc8a34633" class="ne-p"><br></p><h2 id="uSV16"><span class="ne-text">六、当</span><code class="ne-code"><span class="ne-text">effect</span></code><span class="ne-text">函数嵌套时？</span></h2><pre data-language="typescript" id="e7Jen" class="ne-codeblock language-typescript">const bucket = new WeakMap()
const data = {foo: true, bar: true}
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        trigger(target, key)
    }
})

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    const effectsToRun = new Set()
    effects &amp;&amp; effects.forEach(effectFn =&gt; effectsToRun.add(effectFn))
    effectsToRun.forEach(effectFn =&gt; effectFn())
}

let activeEffect

function effect(fn) {
    const effectFn = () =&gt; {
        cleanup(effectFn)
        activeEffect = effectFn
        fn()
    }
    effectFn.deps = []
    effectFn()
}

function cleanup(effectFn) {
    for (let i = 0; i &lt; effectFn.deps.length; i++) {
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}

effect(() =&gt; {
    console.log('fn1 run');
    effect(() =&gt; {
        console.log('fn2 run');
        temp2 = obj.bar;
    })
    temp1 = obj.foo;
})

obj.foo = false;
obj.bar = false;
obj.foo = true;</pre><p id="uc515596a" class="ne-p"><br></p><p id="uf8fa34ce" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/png/687303/1668340421785-fbff1de0-5445-41bc-aad4-df60668a9625.png" width="519" id="u14f246fe" class="ne-image"></p><p id="u7110b2ab" class="ne-p"><strong><span class="ne-text"></span></strong></p><p id="u94efcef0" class="ne-p"><strong><span class="ne-text">每次赋值导致的打印如上图，为什么会这样呢？ 看</span></strong><code class="ne-code"><strong><span class="ne-text">Effect</span></strong></code><strong><span class="ne-text"> 代码</span></strong></p><pre data-language="typescript" id="G8Elg" class="ne-codeblock language-typescript">function effect(fn) {
    const effectFn = () =&gt; {
        cleanup(effectFn)
        //  同一时刻，activeEffect只能有一个，嵌套时，内层的fn2 会覆盖 fn1 , 
        //  无论响应式在内层还是外层收集，每次收集都是 fn2
        activeEffect = effectFn
        fn()
    }
    effectFn.deps = []
    effectFn()
}

effect(() =&gt; {
    console.log('fn1 run');
    effect(() =&gt; {
        console.log('fn2 run');
        temp2 = obj.bar;
    })
    temp1 = obj.foo;
})</pre><p id="u953e93c9" class="ne-p"><br></p><p id="uf2f68031" class="ne-p"><strong><span class="ne-text" style="color: rgb(205, 23, 33)">问：那么为什么第一次可以正常打印出 </span></strong><code class="ne-code"><strong><span class="ne-text" style="color: rgb(205, 23, 33)">fn1 run</span></strong></code><strong><span class="ne-text" style="color: rgb(205, 23, 33)"> </span></strong></p><p id="u9ba810a5" class="ne-p"><br></p><p id="u58f97a7f" class="ne-p"><span class="ne-text">解决方案：新增 </span><code class="ne-code"><span class="ne-text">effectStack</span></code><span class="ne-text"> </span></p><p id="ub3784bb4" class="ne-p"><strong><span class="ne-text"></span></strong></p><pre data-language="typescript" id="gAnAA" class="ne-codeblock language-typescript">// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
// 新增 effect 栈
const effectStack = []

function effect(fn) {
  const effectFn = () =&gt; {
    cleanup(effectFn)
    // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
    activeEffect = effectFn
    //add: 在调用副作用函数之前将当前副作用函数压栈
    effectStack.push(effectFn)
    fn()
    // 在当前副作用函数执行完毕后，将当前副作用函数弹出栈，并还原 activeEffect 为之前的值
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
  }
  // activeEffect.deps 用来存储所有与该副作用函数相关的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}
</pre><p id="u6e8b6a4d" class="ne-p"><strong><span class="ne-text"></span></strong></p><h2 id="MW4KJ"><span class="ne-text">七、obj.foo++ 导致的栈溢出</span></h2><p id="u9d0ba402" class="ne-p"><span class="ne-text">场景如下：</span></p><pre data-language="typescript" id="Uj3e6" class="ne-codeblock language-typescript">effect(() =&gt; {
  obj.foo++  // obj.foo = obj.foo + 1; 
})</pre><p id="u3ee24a6a" class="ne-p"><br></p><p id="u0d938d50" class="ne-p"><span class="ne-text">解决方法比较简单：</span><code class="ne-code"><span class="ne-text">trigger</span></code><span class="ne-text"> 时，添加条件判断</span></p><p id="udc590c34" class="ne-p"><span class="ne-text"></span></p><pre data-language="typescript" id="i3YM0" class="ne-codeblock language-typescript">function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)

  const effectsToRun = new Set()
  effects &amp;&amp; effects.forEach(effectFn =&gt; {
    // 如果 trigger 触发的函数，与正在执行的函数相同，则不触发执行
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })
  effectsToRun.forEach(effectFn =&gt; effectFn())
  // effects &amp;&amp; effects.forEach(effectFn =&gt; effectFn())
}</pre><p id="uebfe4189" class="ne-p"><strong><span class="ne-text"></span></strong></p><h2 id="DQUek"><span class="ne-text">八、如何实现调度 ？</span></h2><h3 id="fy0f6"><span class="ne-text">场景一</span></h3><p id="u4a628440" class="ne-p"><span class="ne-text">看下面一段代码：</span></p><pre data-language="typescript" id="qBiDN" class="ne-codeblock language-typescript">const data = { foo: 1 }
const obj = new Proxy(data,{/*..省略..*/}) 


effect(() =&gt; {
  console.log(obj.foo)
})

obj.foo++;

console.log('end')</pre><p id="u38abeb31" class="ne-p"><br></p><p id="ua0a7a4d9" class="ne-p"><span class="ne-text">上面代码的打印顺序为 </span><code class="ne-code"><span class="ne-text">1 → 2 → end</span></code><span class="ne-text"> </span><span class="ne-text" style="color: rgb(205, 23, 33)"> 问：如何实现输入顺序为 </span><code class="ne-code"><span class="ne-text" style="color: rgb(205, 23, 33)">1 → end → 2</span></code><span class="ne-text" style="color: rgb(205, 23, 33)"> ?</span></p><h4 id="vNiSN"><span class="ne-text">方法一：换位置即可</span></h4><p id="u74964f42" class="ne-p"><span class="ne-text">当然不是想要的</span></p><h4 id="La1ys"><span class="ne-text">方法二：调度</span></h4><pre data-language="typescript" id="NwIQ2" class="ne-codeblock language-typescript">function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  const effectsToRun = new Set()
  effects &amp;&amp; effects.forEach(effectFn =&gt; {
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })
  effectsToRun.forEach(effectFn =&gt; {
    // 如果一个副作用函数存在调度器，则调用调度器，并将副作用函数作为参数传递
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      effectFn()
    }
  })
}

let activeEffect
const effectStack = []

function effect(fn, options = {}) {
  const effectFn = () =&gt; {
    cleanup(effectFn)
    activeEffect = effectFn
    effectStack.push(effectFn)
    fn()
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
  }
  // 将 options 挂在到 effectFn 上
  effectFn.options = options  // add
  effectFn.deps = []
  effectFn()
}</pre><p id="u13d2c14e" class="ne-p"><br></p><p id="ua9faf493" class="ne-p"><span class="ne-text">使用：</span></p><pre data-language="typescript" id="GtJUq" class="ne-codeblock language-typescript">effect(() =&gt; {
  console.log(obj.foo)
},
// options
{
    // 调度器
    scheduler(fn) {
      // 放在一个setTimeout中，肯定能保证顺序为 1 → end → 2
    	setTimeout(fn)
  	}
})

obj.foo++;

console.log('end')</pre><p id="ue5fa1c17" class="ne-p"><br></p><h3 id="Kvj7c"><span class="ne-text">场景二</span></h3><pre data-language="typescript" id="ioqS0" class="ne-codeblock language-typescript">const data = { foo: 1 }
const obj = new Proxy(data,{/*..省略..*/}) 


effect(() =&gt; {
  console.log(obj.foo)
})

obj.foo++;
obj.foo++;
obj.foo++;
</pre><p id="u54c69a6d" class="ne-p"><span class="ne-text"></span></p><p id="u228060c8" class="ne-p"><span class="ne-text">结果是：</span><code class="ne-code"><span class="ne-text">1 → 2 → 3 → 4</span></code><span class="ne-text"> 如果我们希望打印出 </span><code class="ne-code"><span class="ne-text">1  → 4</span></code><span class="ne-text"> ，即 </span><span class="ne-text" style="text-decoration: underline">只打印出初始化值和最终值，而不关心中间态</span></p><p id="uf3c8e4a6" class="ne-p"><span class="ne-text"></span></p><p id="u078d8a18" class="ne-p"><span class="ne-text">实现方式如下：</span></p><p id="uf79b60ce" class="ne-p"><span class="ne-text"></span></p><pre data-language="typescript" id="N2xHw" class="ne-codeblock language-typescript">const jobQueue = new Set()
// 使用微任务队列，来保证微任务队列执行一次
const p = Promise.resolve()

let isFlushing = false
function flushJob() {
  if (isFlushing) return
  isFlushing = true
  p.then(() =&gt; {
    jobQueue.forEach(job =&gt; job()) // 微任务队列里，只会执行一次
  }).finally(() =&gt; {
    isFlushing = false
  })
}


effect(() =&gt; {
  console.log(obj.foo)
}, {
  scheduler(fn) {
    // jobQueue为集合，保障连续执行 scheduler 调度函数时，只会添加一次
    jobQueue.add(fn)
    // 会执行两次，但是内部有 isFlushing 变量控制，实际在一个微任务队列里，只会执行一次
    flushJob()
  }
})

obj.foo++;
obj.foo++;
obj.foo++;</pre><p id="ude04550a" class="ne-p"><span class="ne-text"></span></p></div>`,body_lake:`<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><h1 data-lake-id="TQf3q" id="TQf3q"><span data-lake-id="udc262477" id="udc262477">Vue3 响应式系统设计</span></h1><h2 data-lake-id="yZMvx" id="yZMvx"><span data-lake-id="uecb7d888" id="uecb7d888">一、为何响应式</span></h2><p data-lake-id="ua8668d39" id="ua8668d39"><span data-lake-id="ud92da9f1" id="ud92da9f1">比如以下代码：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20obj%20%3D%20%7Btext%3A%20'hello%20world%EF%BC%81'%7D%3B%5Cn%5Cnfunction%20effect()%20%7B%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.text%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B3%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22One%20Dark%20Pro%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22hH8kX%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uab99bcca" id="uab99bcca"><br></p><p data-lake-id="ub582970d" id="ub582970d"><span data-lake-id="uf00fea38" id="uf00fea38">如果我修改</span><code data-lake-id="ue7066d20" id="ue7066d20"><span data-lake-id="u9eba87fa" id="u9eba87fa">obj.text = &quot;hello liguwe！&quot;;\0</span></code><span data-lake-id="ucadc5177" id="ucadc5177"> ， </span><code data-lake-id="uca36780e" id="uca36780e"><span data-lake-id="u41792592" id="u41792592">effect</span></code><span data-lake-id="u3995ddb6" id="u3995ddb6"> 函数重新会执行，更新页面内容为 </span><code data-lake-id="ue7457e7f" id="ue7457e7f"><span data-lake-id="u0c3c6f0e" id="u0c3c6f0e">hello liguwe！</span></code><span data-lake-id="u4777ae32" id="u4777ae32">  ，则说明 </span><code data-lake-id="u1906a774" id="u1906a774"><span data-lake-id="u4e61142a" id="u4e61142a">obj</span></code><span data-lake-id="u8cad3af0" id="u8cad3af0"> 是 </span><strong><span data-lake-id="ud469b7ad" id="ud469b7ad">响应式的，</span></strong><span data-lake-id="ud0d57e87" id="ud0d57e87">下面是初步实现</span></p><h2 data-lake-id="x3fcb" id="x3fcb"><span data-lake-id="u097b8e80" id="u097b8e80">二、初步实现</span></h2><p data-lake-id="u7207122e" id="u7207122e"><span data-lake-id="uc9c88038" id="uc9c88038">使用</span><code data-lake-id="u31cdc9a1" id="u31cdc9a1"><span data-lake-id="uce621ff2" id="uce621ff2">Proxy</span></code><span data-lake-id="u62decc5f" id="u62decc5f"> ， 代理对象进行读取和写入的拦截，并把</span><code data-lake-id="u7df2882c" id="u7df2882c"><span data-lake-id="u2b34e614" id="u2b34e614">副作用函数</span></code><span data-lake-id="u9b65ec5c" id="u9b65ec5c">放入</span><code data-lake-id="ud8e3343d" id="ud8e3343d"><strong><span data-lake-id="ub8f58747" id="ub8f58747">桶</span></strong></code><span data-lake-id="u40f697e6" id="u40f697e6">的数据结构中 ， 读取时放入</span><code data-lake-id="ua14c98c8" id="ua14c98c8"><span data-lake-id="u22675c26" id="u22675c26">桶</span></code><span data-lake-id="udba271ff" id="udba271ff">中，写入时从</span><code data-lake-id="u9ac46227" id="u9ac46227"><span data-lake-id="ued58aa8b" id="ued58aa8b">桶</span></code><span data-lake-id="u12c74675" id="u12c74675">中拿出来并执行。</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%5Cnconst%20bucket%20%3D%20new%20Set()%5Cn%5Cn%2F%2F%20%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%5Cnconst%20data%20%3D%20%7Btext%3A%20'hello%20world'%7D%5Cn%5Cn%2F%2F%20%E5%AF%B9%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BB%A3%E7%90%86%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AF%BB%E5%8F%96%E6%93%8D%E4%BD%9C%5Cn%20%20%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20effect%20%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%E4%B8%AD%5Cn%20%20%20%20%20%20%20%20bucket.add(effect)%3B%20%2F%2F%20%E7%A1%AC%E7%BC%96%E7%A0%81%E4%BA%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%EF%BC%8C%E5%90%8D%E5%AD%97%E5%B0%B1%E5%8F%ABeffect%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%BF%94%E5%9B%9E%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20%20%20%20%20return%20target%5Bkey%5D%3B%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AE%BE%E7%BD%AE%E6%93%8D%E4%BD%9C%5Cn%20%20%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20newVal%3B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E6%8A%8A%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BB%8E%E6%A1%B6%E9%87%8C%E5%8F%96%E5%87%BA%E5%B9%B6%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20%20%20%20%20bucket.forEach(fn%20%3D%3E%20fn())%5Cn%20%20%20%20%7D%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B1%2C11%2C20%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22One%20Dark%20Pro%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22H33QY%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u8d04b7fd" id="u8d04b7fd"><strong><span data-lake-id="ud6dfe924" id="ud6dfe924">​</span></strong><br></p><p data-lake-id="ua756a6ff" id="ua756a6ff"><strong><span data-lake-id="u56ac45ff" id="u56ac45ff">测试：</span></strong></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20effect()%20%7B%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D%5Cn%2F%2F%20%E8%A7%A6%E5%8F%91%E8%AF%BB%E5%8F%96%5Cneffect()%5Cn%5Cn%2F%2F%20%E8%A7%A6%E5%8F%91%E5%86%99%E5%85%A5%EF%BC%8C%E5%8F%AF%E4%BB%A5%E9%87%8D%E6%96%B0%E6%89%A7%E8%A1%8C%20effect%20%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20'hello%20liguwe'%5Cn%7D%2C%202000)%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22One%20Dark%20Pro%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22Q5bq5%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u9a313742" id="u9a313742"><span data-lake-id="ue7ce8730" id="ue7ce8730">​</span><br></p><p data-lake-id="u920673f2" id="u920673f2"><strong><span data-lake-id="udb0f902d" id="udb0f902d">以上实现的 </span></strong><strong><span data-lake-id="u3bb2df76" id="u3bb2df76" style="color: rgb(205, 23, 33)">缺点</span></strong><strong><span data-lake-id="u6c8280f4" id="u6c8280f4">：</span></strong></p><ul list="u1aa3b165"><li fid="u8e6adbad" data-lake-id="ub5c73197" id="ub5c73197"><span data-lake-id="udda0e5ca" id="udda0e5ca">硬编码 </span><code data-lake-id="ufaffb528" id="ufaffb528"><span data-lake-id="ud08bbfc3" id="ud08bbfc3">effect</span></code><span data-lake-id="udbbbec9d" id="udbbbec9d"> </span></li></ul><h2 data-lake-id="KxmuE" id="KxmuE"><span data-lake-id="uc6e7b469" id="uc6e7b469">三、完善：解决</span><code data-lake-id="uc8986ccb" id="uc8986ccb"><span data-lake-id="uaf5080cb" id="uaf5080cb">硬编码</span></code><span data-lake-id="u56b18861" id="u56b18861">的问题</span></h2><p data-lake-id="ue1ce8372" id="ue1ce8372"><span data-lake-id="u80691e56" id="u80691e56">使用全局变量 </span><code data-lake-id="ufc4728e7" id="ufc4728e7"><span data-lake-id="ueaecd1ef" id="ueaecd1ef">activeEffect</span></code><span data-lake-id="ua5125460" id="ua5125460"> 来存储 </span><code data-lake-id="uf11c342d" id="uf11c342d"><span data-lake-id="u97dc388f" id="u97dc388f">需要被注册的副作用函数</span></code><span data-lake-id="ucbea935b" id="ucbea935b">。</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%5Cnconst%20bucket%20%3D%20new%20Set()%5Cn%2F%2F%20%E7%94%A8%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E5%AD%98%E5%82%A8%E5%BD%93%E5%89%8D%E6%BF%80%E6%B4%BB%E7%9A%84%20effect%20%E5%87%BD%E6%95%B0%5Cnlet%20activeEffect%5Cn%5Cn%2F%2F%20%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%5Cnconst%20data%20%3D%20%7B%20text%3A%20'hello%20world'%20%7D%5Cn%2F%2F%20%E5%AF%B9%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BB%A3%E7%90%86%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AF%BB%E5%8F%96%E6%93%8D%E4%BD%9C%5Cn%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%2F%2F%20%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20activeEffect%20%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%E4%B8%AD%5Cn%20%20%20%20bucket.add(activeEffect)%20%20%5Cn%20%20%20%20%2F%2F%20%E8%BF%94%E5%9B%9E%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%7D%2C%5Cn%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AE%BE%E7%BD%AE%E6%93%8D%E4%BD%9C%5Cn%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%2F%2F%20%E6%8A%8A%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BB%8E%E6%A1%B6%E9%87%8C%E5%8F%96%E5%87%BA%E5%B9%B6%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20bucket.forEach(fn%20%3D%3E%20fn())%5Cn%20%20%7D%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B12%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22ck61s%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6bde083f" id="u6bde083f"><span data-lake-id="u981de3af" id="u981de3af">副作用函数的定义：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20effect(fn)%20%7B%5Cn%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20activeEffect%20%3D%20fn%5Cn%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20fn()%5Cn%7D%5Cn%5Cn%2F%2F%20%E4%BC%A0%E5%85%A5%E7%9A%84%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0%E4%B8%AD%E6%9C%89%EF%BC%8C%E8%AF%BB%E5%8F%96%E4%BA%86obj.text%EF%BC%8C%20%E6%89%80%E4%BB%A5%E4%BC%9A%E8%A7%A6%E5%8F%91proxy%20get%EF%BC%8C%E8%80%8C%E8%BF%99%E6%97%B6%20activeEffect%20%E8%A2%AB%E8%B5%8B%E5%80%BC%E7%BB%99%E4%BA%86%E8%BF%99%E4%B8%AA%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0%5Cn%2F%2F%20%E6%89%80%E4%BB%A5%EF%BC%8C%E8%BF%99%E6%97%B6%E5%80%99%E7%9C%9F%E6%AD%A3%E7%9A%84%20%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20%E4%BC%9A%E8%A2%AB%20%E6%A1%B6%20%E6%AD%A3%E5%B8%B8%E6%94%B6%E9%9B%86%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20console.log('effect%20run')%20%2F%2F%20%F0%9F%93%8C%20%5Cn%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D)%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('effect%202%20run')%20%20%2F%2F%20%F0%9F%93%8C%20%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D)%5Cn%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20obj.text%20%3D%20'hello%20vue3'%20%3B%20%2F%2F%20%F0%9F%93%8C%F0%9F%93%8C%20%5Cn%7D%2C%201000)%5Cn%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20'hello%20vue3%201'%20%2F%2F%20%F0%9F%93%8C%F0%9F%93%8C%20%5Cn%7D%2C%202000)%5Cn%5Cn%2F%2F%20%E6%89%93%E5%8D%B0%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%B1%9E%E6%80%A7%20text1%20%EF%BC%8C%E4%B9%9F%E4%BC%9A%E6%89%93%E5%8D%B0%202%20%E6%AC%A1%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text1%20%3D%20'hello%20not%20Exist'%20%2F%2F%20%F0%9F%93%8C%F0%9F%93%8C%20%5Cn%7D%2C%204000)%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B7%2C8%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22ffG6R%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u1f79d52d" id="u1f79d52d"><br></p><p data-lake-id="ufb2c9876" id="ufb2c9876"><span data-lake-id="ub48c86f4" id="ub48c86f4">问：以上代码 </span><code data-lake-id="ue6429e1b" id="ue6429e1b"><span data-lake-id="ub9abe0b4" id="ub9abe0b4">log</span></code><span data-lake-id="ub20420a4" id="ub20420a4"> 的顺序？为什么会打印这8次呢？ 如上标记：📌</span></p><p data-lake-id="u2f95edbb" id="u2f95edbb"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1667052577212-ff9cb3c3-4d35-4f8c-8219-762d2d4e111c.png%22%2C%22taskId%22%3A%22u10000ad6-84ba-4990-95e4-319c9190244%22%2C%22clientId%22%3A%22u9b0bc959-adbb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A329.3991394042969%2C%22height%22%3A254%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A52622%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A666%2C%22originHeight%22%3A514%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22FILTER%20EFFECT%20RUN%20GES%20OS%202%20EFFECT%20RUN%20ES.%20LOAD%20COU%20LED%20FAI%20DEVTOO%20LS%20TO%20MAP%3A%20SOURCE%20S%20EFFECT%201S%20E%20RUN%20G%20EFFECT%20RUN%202S%20EFFECT%202%20RUN%20DSE%20EFFECT%20RUN%204S%20EFFECT%202%20RUN%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A128.9752%2C%22y%22%3A39.37549%2C%22width%22%3A54.071979999999996%2C%22height%22%3A20.57257%2C%22text%22%3A%22FILTER%22%7D%2C%7B%22x%22%3A107.427574%2C%22y%22%3A86.67645%2C%22width%22%3A88.255486%2C%22height%22%3A21.95142%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A211.52191%2C%22y%22%3A90.407875%2C%22width%22%3A40.91187000000002%2C%22height%22%3A17.142884999999993%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A1.6415596%2C%22y%22%3A97.49393%2C%22width%22%3A38.9942304%2C%22height%22%3A19.076375%2C%22text%22%3A%22GES%22%7D%2C%7B%22x%22%3A391.04614%2C%22y%22%3A102.04461%2C%22width%22%3A42.93921%2C%22height%22%3A30.722679999999997%2C%22text%22%3A%22OS%22%7D%2C%7B%22x%22%3A206.92651%2C%22y%22%3A127.7243%2C%22width%22%3A15.39367999999999%2C%22height%22%3A20.411339999999996%2C%22text%22%3A%222%22%7D%2C%7B%22x%22%3A109.06681%2C%22y%22%3A129.13527%2C%22width%22%3A85.46475000000001%2C%22height%22%3A19.859589999999997%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A241.70927%2C%22y%22%3A131.07393%2C%22width%22%3A38.27533%2C%22height%22%3A16.60480000000001%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A3.6785214%2C%22y%22%3A146.00163%2C%22width%22%3A27.579208599999998%2C%22height%22%3A17.235169999999982%2C%22text%22%3A%22ES.%22%7D%2C%7B%22x%22%3A385.31473%2C%22y%22%3A166.70074%2C%22width%22%3A55.43358999999998%2C%22height%22%3A22.853200000000015%2C%22text%22%3A%22LOAD%22%7D%2C%7B%22x%22%3A625.0111%2C%22y%22%3A167.07307%2C%22width%22%3A41.83515%2C%22height%22%3A22.55393000000001%2C%22text%22%3A%22COU%22%7D%2C%7B%22x%22%3A287.18365%2C%22y%22%3A167.2181%2C%22width%22%3A38.45191%2C%22height%22%3A22.196979999999996%2C%22text%22%3A%22LED%22%7D%2C%7B%22x%22%3A238.88995%2C%22y%22%3A166.80731%2C%22width%22%3A35.64855%2C%22height%22%3A22.407790000000006%2C%22text%22%3A%22FAI%22%7D%2C%7B%22x%22%3A107.33144%2C%22y%22%3A168.51009%2C%22width%22%3A116.32776%2C%22height%22%3A21.65942000000001%2C%22text%22%3A%22DEVTOO%20LS%22%7D%2C%7B%22x%22%3A339.3203%2C%22y%22%3A168.774%2C%22width%22%3A28.300700000000006%2C%22height%22%3A21.010099999999994%2C%22text%22%3A%22TO%22%7D%2C%7B%22x%22%3A553.804%2C%22y%22%3A171.62907%2C%22width%22%3A58.225599999999986%2C%22height%22%3A20.808989999999994%2C%22text%22%3A%22MAP%3A%22%7D%2C%7B%22x%22%3A456.1418%2C%22y%22%3A172.3785%2C%22width%22%3A87.78966000000003%2C%22height%22%3A17.589470000000006%2C%22text%22%3A%22SOURCE%22%7D%2C%7B%22x%22%3A0.000015258789%2C%22y%22%3A194.44633%2C%22width%22%3A10.666636741210999%2C%22height%22%3A16.999470000000002%2C%22text%22%3A%22S%22%7D%2C%7B%22x%22%3A107.79822%2C%22y%22%3A208.37752%2C%22width%22%3A92.64844000000001%2C%22height%22%3A21.329800000000006%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A373.47855%2C%22y%22%3A210.91685%2C%22width%22%3A34.95282000000003%2C%22height%22%3A28.925789999999978%2C%22text%22%3A%221S%22%7D%2C%7B%22x%22%3A190.3929%2C%22y%22%3A211.91296%2C%22width%22%3A61.39828%2C%22height%22%3A17.34307000000001%2C%22text%22%3A%22E%20RUN%22%7D%2C%7B%22x%22%3A2.5074723%2C%22y%22%3A241.94647%2C%22width%22%3A12.329179700000001%2C%22height%22%3A20.152380000000022%2C%22text%22%3A%22G%22%7D%2C%7B%22x%22%3A105.957825%2C%22y%22%3A287.44876%2C%22width%22%3A146.53112499999997%2C%22height%22%3A24.60629%2C%22text%22%3A%22EFFECT%20RUN%22%7D%2C%7B%22x%22%3A378.53024%2C%22y%22%3A303.95914%2C%22width%22%3A48.17252000000002%2C%22height%22%3A35.49231000000003%2C%22text%22%3A%222S%22%7D%2C%7B%22x%22%3A104.96305%2C%22y%22%3A329.26175%2C%22width%22%3A123.01514999999999%2C%22height%22%3A24.403250000000014%2C%22text%22%3A%22EFFECT%202%22%7D%2C%7B%22x%22%3A239.01439%2C%22y%22%3A334.82242%2C%22width%22%3A42.985180000000014%2C%22height%22%3A17.775329999999997%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A1.4206719%2C%22y%22%3A337.9039%2C%22width%22%3A33.087178099999996%2C%22height%22%3A19.518550000000005%2C%22text%22%3A%22DSE%22%7D%2C%7B%22x%22%3A106.39526%2C%22y%22%3A370.55887%2C%22width%22%3A89.36727%2C%22height%22%3A23.52019999999999%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A209.95367%2C%22y%22%3A375.86304%2C%22width%22%3A42.88306%2C%22height%22%3A19.465820000000008%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A379.04092%2C%22y%22%3A393.36044%2C%22width%22%3A48.53045999999995%2C%22height%22%3A38.28531000000004%2C%22text%22%3A%224S%22%7D%2C%7B%22x%22%3A107.39066%2C%22y%22%3A411.57056%2C%22width%22%3A87.93620000000001%2C%22height%22%3A22.736479999999972%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A207.20601%2C%22y%22%3A412.13144%2C%22width%22%3A19.98198000000002%2C%22height%22%3A22.715160000000026%2C%22text%22%3A%222%22%7D%2C%7B%22x%22%3A239.66505%2C%22y%22%3A415.0555%2C%22width%22%3A40.926589999999976%2C%22height%22%3A19.256759999999986%2C%22text%22%3A%22RUN%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2326272a%22%2C%22id%22%3A%22u874687de%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ufd3983eb" id="ufd3983eb"><span data-lake-id="u7bc0a552" id="u7bc0a552">如上代码，打印设置不存在的属性时</span><code data-lake-id="u74d05e54" id="u74d05e54"><span data-lake-id="ueb99c63d" id="ueb99c63d">obj.text1</span></code><span data-lake-id="u26015618" id="u26015618">，也会执行副作用函数，但副作用函数根本不需要使用到这个属性，</span><strong><span data-lake-id="u0a680950" id="u0a680950">如何解决呢？ </span></strong></p><h2 data-lake-id="elQu9" id="elQu9"><span data-lake-id="u63379007" id="u63379007">四、继续完善：避免不需要的执行</span></h2><p data-lake-id="ued923479" id="ued923479"><span data-lake-id="u553116e2" id="u553116e2">需要重新设计数据结构 以表示 </span><strong><span data-lake-id="uebb33af3" id="uebb33af3">副作用函数与目标之间的关系 </span></strong></p><p data-lake-id="u2cf71a3b" id="u2cf71a3b"><span data-lake-id="u165a6fdf" id="u165a6fdf">以下是数据结构设计：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22effect(function%20fn1()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D)%5Cneffect(function%20fn2()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D)%5Cn%2F%2F%20%3D%3D%3D%3E%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8F%AF%E8%A1%A8%E7%A4%BA%E4%B8%BA%EF%BC%9A%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj%5Cn%C2%A0%C2%A0%20%5Ct%E2%94%94%E2%94%80%E2%94%80%20text%5Cn%C2%A0%C2%A0%20%20%20%20%5Ct%20%E2%94%9C%E2%94%80%E2%94%80fn1%5Cn%C2%A0%C2%A0%20%20%20%20%5Ct%20%E2%94%94%E2%94%80%E2%94%80%20fn2%5Cn%5Cneffect(function%20fn1()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj.text%5Cn%20%20document.body.innerText%20%3D%20obj.text1%5Cn%20%20document.body.innerText%20%3D%20obj.text2%5Cn%7D)%5Cn%2F%2F%20%3D%3D%3D%3E%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8F%AF%E8%A1%A8%E7%A4%BA%E4%B8%BA%EF%BC%9A%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj%5Cn%20%C2%A0%C2%A0%20%E2%94%9C%E2%94%80%E2%94%80%20text%5Cn%C2%A0%C2%A0%5Ct%E2%94%82%20%5Ct%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%20%C2%A0%C2%A0%20%E2%94%9C%E2%94%80%E2%94%80%20text1%5Cn%C2%A0%5Ct%5Ct%E2%94%82%5Ct%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%C2%A0%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20text2%5Cn%5Ct%5Ct%5Ct%C2%A0%20%C2%A0%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%5Cn%5Cneffect(function%20fn1()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj1.text%5Cn%7D)%5Cneffect(function%20fn2()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj2.text2%5Cn%7D)%5Cn%2F%2F%20%3D%3D%3D%3E%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8F%AF%E8%A1%A8%E7%A4%BA%E4%B8%BA%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj1%5Cn%20%C2%A0%C2%A0%20%E2%94%9C%E2%94%80%E2%94%80%20text%5Cn%20%20%20%20%E2%94%82%C2%A0%C2%A0%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%20%20%20%20obj2%5Cn%C2%A0%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20text2%5Cn%5Ct%5Ct%20%C2%A0%C2%A0%20%E2%94%94%E2%94%80%E2%94%80%20fn2%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B6%2C17%2C33%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22LGKfc%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uc19fe2ad" id="uc19fe2ad"><span data-lake-id="u2b88f840" id="u2b88f840">所以，可以这么设计</span><code data-lake-id="u7f07f5cf" id="u7f07f5cf"><strong><span data-lake-id="u11c4b464" id="u11c4b464">桶</span></strong></code><span data-lake-id="u97425c24" id="u97425c24">的数据结构：</span></p><ul list="uabe9df3f"><li fid="uca1e5727" data-lake-id="udd6c0489" id="udd6c0489"><span data-lake-id="ud3bdb84c" id="ud3bdb84c"> </span><code data-lake-id="ub894a92e" id="ub894a92e"><span data-lake-id="u0c6d406e" id="u0c6d406e">const bucket = new WeakMap()</span></code></li></ul><ul list="uabe9df3f" data-lake-indent="1"><li fid="uca1e5727" data-lake-id="u0ea76003" id="u0ea76003"><span data-lake-id="u3bddac99" id="u3bddac99"> </span><code data-lake-id="u1e173f09" id="u1e173f09"><span data-lake-id="u6d9529f2" id="u6d9529f2">key</span></code><span data-lake-id="u4bc892a2" id="u4bc892a2"> 为 </span><code data-lake-id="ub795d649" id="ub795d649"><span data-lake-id="uadd51743" id="uadd51743">obj</span></code><span data-lake-id="u69ae1dd4" id="u69ae1dd4"> </span></li><li fid="uca1e5727" data-lake-id="u4eae7b1b" id="u4eae7b1b"><span data-lake-id="u2db5b273" id="u2db5b273"> </span><code data-lake-id="u0775da99" id="u0775da99"><span data-lake-id="uf7951ff9" id="uf7951ff9">value = new Map()</span></code></li></ul><ul list="uabe9df3f" data-lake-indent="2"><li fid="uca1e5727" data-lake-id="u92a25fa6" id="u92a25fa6"><code data-lake-id="uc2d13f66" id="uc2d13f66"><span data-lake-id="u30620940" id="u30620940">key</span></code><span data-lake-id="u883a7a0c" id="u883a7a0c"> 为 </span><code data-lake-id="u8ac9f1da" id="u8ac9f1da"><span data-lake-id="ufbbbd673" id="ufbbbd673">text</span></code></li><li fid="uca1e5727" data-lake-id="u06ff65c0" id="u06ff65c0"><code data-lake-id="ua814604a" id="ua814604a"><span data-lake-id="u234a9042" id="u234a9042">value = new Set()</span></code></li></ul><ul list="uabe9df3f" data-lake-indent="3"><li fid="uca1e5727" data-lake-id="u46374790" id="u46374790"><span data-lake-id="u0a630aae" id="u0a630aae">集合中的值 </span><code data-lake-id="u03f0b818" id="u03f0b818"><span data-lake-id="u70abc48c" id="u70abc48c">value</span></code><span data-lake-id="u205d6761" id="u205d6761"> 为 </span><code data-lake-id="u21812023" id="u21812023"><span data-lake-id="u916c3810" id="u916c3810">key</span></code><span data-lake-id="u216c78c1" id="u216c78c1">所依赖的副作用函数 ，即</span><code data-lake-id="uecc7df57" id="uecc7df57"><span data-lake-id="ua1b5058a" id="ua1b5058a">value = [ fn1 , fn2 , ... ]</span></code></li></ul><p data-lake-id="u4a7794b5" id="u4a7794b5"><span data-lake-id="ud9b7314f" id="ud9b7314f">具体实现如下：</span></p><blockquote data-lake-id="ue4a72e44" id="ue4a72e44"><p data-lake-id="u92dc11f1" id="u92dc11f1"><span data-lake-id="u74847b4b" id="u74847b4b">分别提取出</span><code data-lake-id="u80c64cb7" id="u80c64cb7"><span data-lake-id="u399388f7" id="u399388f7">track</span></code><span data-lake-id="ua392f421" id="ua392f421"> 和 </span><code data-lake-id="u317788db" id="u317788db"><span data-lake-id="u29a6f572" id="u29a6f572">trigger</span></code><span data-lake-id="u0f27a9ff" id="u0f27a9ff"> 以便更好的维护代码和理解代码</span></p></blockquote><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E5%AD%98%E5%82%A8%20%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20%E7%9A%84%E6%A1%B6%5Cnconst%20bucket%20%3D%20new%20WeakMap()%5Cn%5Cn%2F%2F%20%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%5Cnconst%20data%20%3D%20%7B%20text%3A%20'hello%20world'%20%7D%5Cn%2F%2F%20%E5%AF%B9%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BB%A3%E7%90%86%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AF%BB%E5%8F%96%E6%93%8D%E4%BD%9C%5Cn%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%2F%2F%20%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20activeEffect%20%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%E4%B8%AD%5Cn%20%20%20%20track(target%2C%20key)%5Cn%20%20%20%20%2F%2F%20%E8%BF%94%E5%9B%9E%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%7D%2C%5Cn%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AE%BE%E7%BD%AE%E6%93%8D%E4%BD%9C%5Cn%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%2F%2F%20%E6%8A%8A%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BB%8E%E6%A1%B6%E9%87%8C%E5%8F%96%E5%87%BA%E5%B9%B6%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20trigger(target%2C%20key)%5Cn%20%20%7D%5Cn%7D)%5Cn%5Cn%5Cn%2F%2F%20%E7%94%A8%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E5%AD%98%E5%82%A8%E5%BD%93%E5%89%8D%E6%BF%80%E6%B4%BB%E7%9A%84%20effect%20%E5%87%BD%E6%95%B0%5Cnlet%20activeEffect%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20activeEffect%20%3D%20fn%5Cn%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20fn()%5Cn%7D%5Cn%5Cn%5Cnfunction%20track(target%2C%20key)%20%7B%5Cn%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%7D%5Cn%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%7D%5Cn%20%20deps.add(activeEffect)%5Cn%7D%5Cn%5Cnfunction%20trigger(target%2C%20key)%20%7B%5Cn%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20return%5Cn%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20effects%20%26%26%20effects.forEach(fn%20%3D%3E%20fn())%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B1%2C10%2C19%2C37%2C41%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22D8VTg%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u5ab79c9d" id="u5ab79c9d"><span data-lake-id="u84683825" id="u84683825">​</span><br></p><p data-lake-id="u117c759c" id="u117c759c"><span data-lake-id="u4c0c7210" id="u4c0c7210">看看最终的数据结构：</span></p><p data-lake-id="u3431f708" id="u3431f708"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1667120138689-eaf5e5df-aacb-40a9-b143-2b376955fcb3.png%22%2C%22taskId%22%3A%22uf8e9a1fa-b25e-4ab4-9f73-f412baa50da%22%2C%22clientId%22%3A%22u9b0bc959-adbb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A600.6666870117188%2C%22height%22%3A251%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A115209%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1652%2C%22originHeight%22%3A690%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22WEAKMAP%20MAP(1)%7D%20%5BENTRIES%20%5D%20V0%3A%7B0BJECT%3EMAP(1)%7D%20'HELLO%20WORLD'%7D%20KEY%3A1TEXT%3A%20VALUE%3A%20MAP(1)%20%5B%5BENTRIES%5D%5D%2070%3A%7B%5C%22TEXT%5C%22%20%3E%20SET(1)%7D%20KEY%3A%20'%20%5C%22TEXT%5C%22%20VALUE%3ASET(1)%20%5B%5BENTRIES%5D%5D%20%3E%3A%20()%20%3E%20(%20CONSOLE.LOG('EFFECT%20RUN')%20DOCUMENT.BODY.INNERTEXT%20-%20OBJ.TEXT%20%5D%20SIZE%3A%201%20%5B%5BPROTOTYPELL%3ASET%20SIZE%3A%201%20%5B%5BPROTOTYPE%5DL%3AMAP%20%5B%5BPROTOTYPE%5D%5D%3A%20%5D%3AWEAKMAP%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A60.05104%2C%22y%22%3A29.76686%2C%22width%22%3A128.06267%2C%22height%22%3A28.94334%2C%22text%22%3A%22WEAKMAP%22%7D%2C%7B%22x%22%3A342.97394%2C%22y%22%3A30.619967%2C%22width%22%3A133.33936%2C%22height%22%3A30.466279000000004%2C%22text%22%3A%22MAP(1)%7D%22%7D%2C%7B%22x%22%3A114.013336%2C%22y%22%3A69.26538%2C%22width%22%3A172.24478400000004%2C%22height%22%3A28.052110000000013%2C%22text%22%3A%22%5BENTRIES%20%5D%22%7D%2C%7B%22x%22%3A117.635605%2C%22y%22%3A106.79132%2C%22width%22%3A385.208695%2C%22height%22%3A33.68961%2C%22text%22%3A%22V0%3A%7B0BJECT%3EMAP(1)%7D%22%7D%2C%7B%22x%22%3A386.75317%2C%22y%22%3A148.00232%2C%22width%22%3A236.73202999999995%2C%22height%22%3A33.45877999999999%2C%22text%22%3A%22'HELLO%20WORLD'%7D%22%7D%2C%7B%22x%22%3A145.68675%2C%22y%22%3A149.90063%2C%22width%22%3A209.96810000000002%2C%22height%22%3A32.37735000000001%2C%22text%22%3A%22KEY%3A1TEXT%3A%22%7D%2C%7B%22x%22%3A139.88326%2C%22y%22%3A185.9216%2C%22width%22%3A242.50984%2C%22height%22%3A37.29227999999998%2C%22text%22%3A%22VALUE%3A%20MAP(1)%22%7D%2C%7B%22x%22%3A185.20677%2C%22y%22%3A227.43607%2C%22width%22%3A192.5775%2C%22height%22%3A31.56780999999998%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A203.72588%2C%22y%22%3A268.0465%2C%22width%22%3A181.85920000000002%2C%22height%22%3A30.12882000000002%2C%22text%22%3A%2270%3A%7B%5C%22TEXT%5C%22%22%7D%2C%7B%22x%22%3A405.19455%2C%22y%22%3A269.93384%2C%22width%22%3A186.05255000000005%2C%22height%22%3A28.931579999999997%2C%22text%22%3A%22%3E%20SET(1)%7D%22%7D%2C%7B%22x%22%3A241.64133%2C%22y%22%3A309.19144%2C%22width%22%3A96.32476999999997%2C%22height%22%3A32.23892000000001%2C%22text%22%3A%22KEY%3A%20'%22%7D%2C%7B%22x%22%3A320.78967%2C%22y%22%3A310.2023%2C%22width%22%3A113.29467999999997%2C%22height%22%3A27.989530000000002%2C%22text%22%3A%22%5C%22TEXT%5C%22%22%7D%2C%7B%22x%22%3A238.68803%2C%22y%22%3A349.04074%2C%22width%22%3A243.88667%2C%22height%22%3A29.171809999999994%2C%22text%22%3A%22VALUE%3ASET(1)%22%7D%2C%7B%22x%22%3A278.41556%2C%22y%22%3A387.6918%2C%22width%22%3A189.25741%2C%22height%22%3A33.55027000000001%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A302.20645%2C%22y%22%3A419.20273%2C%22width%22%3A1291.6392500000002%2C%22height%22%3A48.820970000000045%2C%22text%22%3A%22%3E%3A%20()%20%3E%20(%20CONSOLE.LOG('EFFECT%20RUN')%20DOCUMENT.BODY.INNERTEXT%20-%20OBJ.TEXT%20%5D%22%7D%2C%7B%22x%22%3A272.29343%2C%22y%22%3A469.95157%2C%22width%22%3A129.13353999999998%2C%22height%22%3A30.46886999999998%2C%22text%22%3A%22SIZE%3A%201%22%7D%2C%7B%22x%22%3A277.49588%2C%22y%22%3A508.37332%2C%22width%22%3A323.62624999999997%2C%22height%22%3A30.48417999999998%2C%22text%22%3A%22%5B%5BPROTOTYPELL%3ASET%22%7D%2C%7B%22x%22%3A181.98206%2C%22y%22%3A553.0447%2C%22width%22%3A119.84024%2C%22height%22%3A27.233439999999973%2C%22text%22%3A%22SIZE%3A%201%22%7D%2C%7B%22x%22%3A184.51648%2C%22y%22%3A587.11615%2C%22width%22%3A324.73444%2C%22height%22%3A34.61175000000003%2C%22text%22%3A%22%5B%5BPROTOTYPE%5DL%3AMAP%22%7D%2C%7B%22x%22%3A93.39274%2C%22y%22%3A628.9863%2C%22width%22%3A250.52983999999998%2C%22height%22%3A30.727999999999952%2C%22text%22%3A%22%5B%5BPROTOTYPE%5D%5D%3A%22%7D%2C%7B%22x%22%3A313.383%2C%22y%22%3A631.0772%2C%22width%22%3A178.82797%2C%22height%22%3A28.606200000000058%2C%22text%22%3A%22%5D%3AWEAKMAP%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2324272b%22%2C%22id%22%3A%22u571493b4%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><h2 data-lake-id="YMoyi" id="YMoyi"><span data-lake-id="ue615b998" id="ue615b998">五、如何避免分支场景不必要的执行呢？</span></h2><p data-lake-id="u4e528e38" id="u4e528e38"><span data-lake-id="u5890cdb5" id="u5890cdb5">具体场景如下：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22effect(fn1%20%3D%20()%20%3D%3E%20%7B%20%5Cn%20%20console.log('fn1%20run')%5Cn%20%20document.body.innerText%20%3D%20obj.ok%20%3F%20obj.text%20%3A%20'not'%5Cn%7D)%5Cn%2F%2F%20ok%E4%BB%8E%E5%88%9D%E5%A7%8B%E5%80%BCtrue%EF%BC%8C%E4%BC%9A%E8%AF%BB%E5%8F%96text%E7%9A%84%E5%80%BC%EF%BC%8C%E8%A7%A6%E5%8F%91%E8%AE%BE%E7%BD%AE%20%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20%E4%B8%BA%E4%BE%9D%E8%B5%96%20%3D%3D%3D%3E%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8F%AF%E8%A1%A8%E7%A4%BA%E4%B8%BA%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj%5Cn%20%C2%A0%C2%A0%20%E2%94%9C%E2%94%80%E2%94%80%20text%5Cn%C2%A0%C2%A0%5Ct%E2%94%82%20%5Ct%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%20%C2%A0%C2%A0%20%E2%94%94%E2%94%80%E2%94%80%20ok%5Cn%C2%A0%5Ct%20%20%5Ct%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%5Cn%2F%2F%20ok%20%E5%8F%98%E4%B8%BA%20false%E6%97%B6%EF%BC%8C%E7%90%86%E6%83%B3%E7%9A%84%E6%83%85%E5%86%B5%E6%98%AF%20fn1%20%E4%B8%8D%E8%83%BD%E8%A2%AB%20text%20%E5%AF%B9%E5%BA%94%E7%9A%84%E4%BE%9D%E8%B5%96%E6%89%80%E6%94%B6%E9%9B%86%EF%BC%8C%E5%8D%B3%E5%A6%82%E4%B8%8B%EF%BC%9A%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj%5Cn%20%C2%A0%C2%A0%20%E2%94%94%E2%94%80%E2%94%80%20ok%5Cn%C2%A0%5Ct%20%20%5Ct%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%2F%2F%20%E5%8D%B3%EF%BC%9A%E4%B8%8D%E5%85%B3text%E7%9A%84%E4%BA%8B%EF%BC%8C%E4%BD%86%E5%AE%9E%E7%8E%B0%E6%83%85%E5%86%B5%E5%B9%B6%E9%9D%9E%E5%A6%82%E6%AD%A4%E3%80%82%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22QjvK0%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u31a55bf1" id="u31a55bf1"><span data-lake-id="u3082aa8c" id="u3082aa8c">以上</span><code data-lake-id="ub3cf2b73" id="ub3cf2b73"><span data-lake-id="u0cf7b58f" id="u0cf7b58f">obj.ok</span></code><span data-lake-id="u3522ab18" id="u3522ab18">为</span><code data-lake-id="u413eb98c" id="u413eb98c"><span data-lake-id="u65398139" id="u65398139">false</span></code><span data-lake-id="ue9dfadaf" id="ue9dfadaf">时，</span><code data-lake-id="uea16c072" id="uea16c072"><span data-lake-id="ud4bfd415" id="ud4bfd415">obj.text</span></code><span data-lake-id="u88c8cc23" id="u88c8cc23">变化没必要重新执行 </span><code data-lake-id="ufc01725a" id="ufc01725a"><span data-lake-id="ud4cfa5d9" id="ud4cfa5d9">fn1</span></code><span data-lake-id="u5e4d4abe" id="u5e4d4abe">，仅在</span><code data-lake-id="uc1467f4b" id="uc1467f4b"><span data-lake-id="ubd6d74fd" id="ubd6d74fd">obj.ok</span></code><span data-lake-id="u89db2ab0" id="u89db2ab0">为</span><code data-lake-id="u5593b5e8" id="u5593b5e8"><span data-lake-id="u1d6e2225" id="u1d6e2225">true</span></code><span data-lake-id="u7152b446" id="u7152b446">时，才需要重新执行 </span><code data-lake-id="u73e552bb" id="u73e552bb"><span data-lake-id="u4e169979" id="u4e169979">fn1</span></code><span data-lake-id="uf12a545c" id="uf12a545c">。</span></p><p data-lake-id="u4d6fec7d" id="u4d6fec7d"><span data-lake-id="ua40a2d0e" id="ua40a2d0e">​</span><br></p><p data-lake-id="u5ebb981e" id="u5ebb981e"><strong><span data-lake-id="ub931b80f" id="ub931b80f">详细代码如下：</span></strong></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20bucket%20%3D%20new%20WeakMap()%5Cnconst%20data%20%3D%20%7B%5Cn%20%20%20%20text%3A%20'hello%20world'%2C%5Cn%20%20%20%20ok%3A%20true%2C%5Cn%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%20%20%20%20track(target%2C%20key)%5Cn%20%20%20%20%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%20%20%20%20trigger(target%2C%20key)%5Cn%20%20%20%20%7D%5Cn%7D)%5Cn%5Cnfunction%20track(target%2C%20key)%20%7B%5Cn%20%20%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20deps.add(activeEffect)%5Cn%7D%5Cn%5Cnfunction%20trigger(target%2C%20key)%20%7B%5Cn%20%20%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20return%5Cn%20%20%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20%20%20effects%20%26%26%20effects.forEach(fn%20%3D%3E%20fn())%5Cn%7D%5Cn%5Cnlet%20activeEffect%5Cn%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20%20%20activeEffect%20%3D%20fn%5Cn%20%20%20%20fn()%5Cn%7D%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('fn1%20run')%3B%20%2F%2F%20%E5%85%B3%E6%B3%A8%E6%9C%80%E7%BB%88%E6%89%93%E5%8D%B0%E4%BA%86%E5%A4%9A%E5%B0%91%E6%AC%A1%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.ok%20%3F%20obj.text%20%3A%20'not'%5Cn%7D)%5Cnconsole.log(bucket)%3B%5Cn%5Cn%2F%2F%202s%20%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.ok%20%E4%B8%BA%20false%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.ok%20%3D%20false%3B%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E4%BA%86%E4%B8%80%E6%AC%A1%20fn1%5Cn%7D%2C2000)%5Cn%5Cn%2F%2F%204s%20%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.text%20%E7%9A%84%E5%80%BC%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20%5C%22hello%20liguwe%20!%5C%22%20%20%2F%2F%20%E6%9C%80%E7%BB%88%E6%89%A7%E8%A1%8C%E4%BA%86%E4%B8%80%E6%AC%A1%20fn1%20%2C%20%E5%85%B6%E5%AE%9E%E4%B8%8D%E5%B8%8C%E6%9C%9B%E6%89%A7%E8%A1%8C%E7%9A%84%5Cn%7D%2C4000)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%8F%AF%E7%9B%B4%E6%8E%A5%E6%89%A7%E8%A1%8C%E7%9C%8B%E6%95%88%E6%9E%9C%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B43%2C48%2C53%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22EgAlP%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u70990c8b" id="u70990c8b"><span data-lake-id="uccd2ea8f" id="uccd2ea8f">​</span><br></p><p data-lake-id="u82f954bd" id="u82f954bd"><strong><u><span data-lake-id="u90034751" id="u90034751">为什么会出现上面这种情况呢？</span></u></strong></p><blockquote data-lake-id="u303776df" id="u303776df" class="lake-alert lake-alert-color4"><p data-lake-id="ue2427b64" id="ue2427b64"><span data-lake-id="u27f08e4b" id="u27f08e4b">因为</span><code data-lake-id="u734ec3bb" id="u734ec3bb"><span data-lake-id="u63babfb1" id="u63babfb1">fn1</span></code><span data-lake-id="uf0175537" id="uf0175537">已经被 </span><code data-lake-id="u54911a53" id="u54911a53"><span data-lake-id="ud4be0d28" id="ud4be0d28">text</span></code><span data-lake-id="u22ece578" id="u22ece578"> 所依赖的副作用函数集合所收集，</span><code data-lake-id="u89c040b0" id="u89c040b0"><span data-lake-id="ub3c06111" id="ub3c06111">text</span></code><span data-lake-id="u4990e241" id="u4990e241">的变化，肯定会导致 </span><code data-lake-id="ubc2486ec" id="ubc2486ec"><span data-lake-id="ud6e11ba7" id="ud6e11ba7">fn1</span></code><span data-lake-id="u66aba344" id="u66aba344"> 的执行</span></p></blockquote><p data-lake-id="ua13c3189" id="ua13c3189"><strong><span data-lake-id="u372c2922" id="u372c2922">​</span></strong><br></p><p data-lake-id="ueadaf5ec" id="ueadaf5ec"><strong><span data-lake-id="ud5022056" id="ud5022056">解决思路：</span></strong></p><blockquote data-lake-id="u91230973" id="u91230973" class="lake-alert lake-alert-success"><p data-lake-id="u67eb4f3d" id="u67eb4f3d"><span data-lake-id="u102a4059" id="u102a4059">每次 副作用函数</span><code data-lake-id="u130911a8" id="u130911a8"><span data-lake-id="u306efc4f" id="u306efc4f">fn1</span></code><span data-lake-id="u9e6dd015" id="u9e6dd015">执行时，把</span><code data-lake-id="ua4a4db7e" id="ua4a4db7e"><span data-lake-id="u534dd178" id="u534dd178">fn1</span></code><span data-lake-id="u26046324" id="u26046324"> 从 它与之关联的依赖集合中 删除。</span></p></blockquote><p data-lake-id="u4f40d15b" id="u4f40d15b"><span data-lake-id="uf6886c4c" id="uf6886c4c">​</span><br></p><p data-lake-id="u8b94155f" id="u8b94155f"><span data-lake-id="u71cdc8af" id="u71cdc8af">重新设计</span><code data-lake-id="uc35c3bbd" id="uc35c3bbd"><span data-lake-id="u2c347752" id="u2c347752">effect</span></code><span data-lake-id="u9617d839" id="u9617d839"> 函数：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E7%94%A8%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E5%AD%98%E5%82%A8%E5%BD%93%E5%89%8D%E6%BF%80%E6%B4%BB%E7%9A%84%20effect%20%E5%87%BD%E6%95%B0%5Cnlet%20activeEffect%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20cleanup(effectFn)%20%5Cn%20%20%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20fn()%5Cn%20%20%7D%5Cn%20%20%2F%2F%20activeEffect.deps%20%E7%94%A8%E6%9D%A5%E5%AD%98%E5%82%A8%E6%89%80%E6%9C%89%E4%B8%8E%20%E8%AF%A5%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9B%B8%E5%85%B3%20%E7%9A%84%E4%BE%9D%E8%B5%96%E9%9B%86%E5%90%88%5Cn%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20effectFn()%5Cn%7D%5Cn%5Cn%2F%2F%20%E6%B8%85%E9%99%A4%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%20deps%20%E5%B1%9E%E6%80%A7%5Cnfunction%20cleanup(effectFn)%20%7B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20effectFn.deps.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20deps%E9%87%8C%E5%AD%98%E7%9A%84%E6%98%AF%20Set%20%E7%B1%BB%E5%9E%8B%5Cn%20%20%20%20%20%20%20%20const%20deps%20%3D%20effectFn.deps%5Bi%5D%5Cn%20%20%20%20%20%20%20%20deps.delete(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps.length%20%3D%200%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E7%BB%99%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AAdeps%E5%B1%9E%E6%80%A7%EF%BC%8C%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E5%89%8D%E9%9C%80%E8%A6%81%E6%B8%85%E9%99%A4%20cleanup(effectFn)%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B4%2C18%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22uCLaQ%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6628bd19" id="u6628bd19"><code data-lake-id="u3d455e58" id="u3d455e58"><span data-lake-id="u460285e5" id="u460285e5">track</span></code><span data-lake-id="u57865782" id="u57865782">函数：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20track(target%2C%20key)%20%7B%5Cn%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%7D%5Cn%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%7D%5Cn%20%20deps.add(activeEffect)%5Cn%20%20%5Cn%20%20%2F%2F%20%E6%96%B0%E6%B7%BB%E5%8A%A0%EF%BC%9A%E6%8A%8A%E5%AF%B9%E5%BA%94%E7%9A%84%20key%20%E6%89%80%E4%BE%9D%E8%B5%96%E7%9A%84%20%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E9%9B%86%E5%90%88%20%E8%B5%8B%E5%80%BC%E7%BB%99%20%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84deps%20%E5%B1%9E%E6%80%A7%5Cn%20%20%2F%2F%20%E5%85%B3%E9%94%AE%E7%82%B9%EF%BC%9ASet%E6%9C%AC%E8%BA%AB%E6%98%AF%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%5Cn%20%20activeEffect.deps.push(deps)%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%2C12%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22WJPQc%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ucc2303a6" id="ucc2303a6"><code data-lake-id="u5bfaf18a" id="u5bfaf18a"><span data-lake-id="u0edaf831" id="u0edaf831">trigger</span></code><span data-lake-id="ua693bf98" id="ua693bf98">函数</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20trigger(target%2C%20key)%20%7B%5Cn%20%20%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20return%5Cn%20%20%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20%20%20%2F%2F%20effects%20%26%26%20effects.forEach(fn%20%3D%3E%20fn())%5Cn%20%20%20%20%2F%2F%20%E4%BF%AE%E6%94%B9%E4%B8%BA%5Cn%20%20%20%20const%20effectsToRun%20%3D%20new%20Set()%20%2F%2F%20%E9%87%8D%E6%96%B0%E8%B5%8B%E5%80%BC%E7%BB%99effectsToRun%20%EF%BC%8C%E5%90%A6%E5%88%99%E4%BC%9A%E5%AF%BC%E8%87%B4%E6%AD%BB%E5%BE%AA%E7%8E%AF%EF%BC%8C%E8%A7%81%E9%99%841%5Cn%20%20%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20effectsToRun.add(effectFn))%5Cn%20%20%20%20effectsToRun.forEach(effectFn%20%3D%3E%20effectFn())%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B6%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22FVSaS%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ue48feb31" id="ue48feb31"><br></p><p data-lake-id="u6153d72c" id="u6153d72c"><strong><span data-lake-id="uc0921f2e" id="uc0921f2e">完整代码：</span></strong></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20bucket%20%3D%20new%20WeakMap()%5Cnconst%20data%20%3D%20%7B%5Cn%20%20%20%20text%3A%20'hello%20world'%2C%5Cn%20%20%20%20ok%3A%20true%2C%5Cn%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AF%BB%E5%8F%96%E6%93%8D%E4%BD%9C%5Cn%20%20%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20activeEffect%20%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%E4%B8%AD%5Cn%20%20%20%20%20%20%20%20track(target%2C%20key)%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%BF%94%E5%9B%9E%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AE%BE%E7%BD%AE%E6%93%8D%E4%BD%9C%5Cn%20%20%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E6%8A%8A%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BB%8E%E6%A1%B6%E9%87%8C%E5%8F%96%E5%87%BA%E5%B9%B6%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20%20%20%20%20trigger(target%2C%20key)%5Cn%20%20%20%20%7D%5Cn%7D)%5Cn%5Cnfunction%20track(target%2C%20key)%20%7B%5Cn%20%20%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20deps.add(activeEffect)%5Cn%20%20%20%20%2F%2F%20%E6%96%B0%E6%B7%BB%E5%8A%A0%5Cn%20%20%20%20activeEffect.deps.push(deps)%5Cn%7D%5Cn%5Cnfunction%20trigger(target%2C%20key)%20%7B%5Cn%20%20%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20return%5Cn%20%20%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20%20%20%2F%2F%20effects%20%26%26%20effects.forEach(fn%20%3D%3E%20fn())%5Cn%20%20%20%20%2F%2F%20%E4%BF%AE%E6%94%B9%E4%B8%BA%5Cn%20%20%20%20const%20effectsToRun%20%3D%20new%20Set()%5Cn%20%20%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20effectsToRun.add(effectFn))%5Cn%20%20%20%20effectsToRun.forEach(effectFn%20%3D%3E%20effectFn())%3B%5Cn%7D%5Cn%5Cnlet%20activeEffect%5Cn%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20%20%20%2F%2F%20activeEffect%20%3D%20fn%5Cn%20%20%20%20%2F%2F%20fn()%5Cn%20%20%20%20%2F%2F%20%3D%3D%3D%3E%20%E4%BF%AE%E6%94%B9%E4%B8%BA%EF%BC%9A%5Cn%20%20%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20%20%20%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20%20%20%20%20fn()%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%2F%2F%20activeEffect.deps%20%E7%94%A8%E6%9D%A5%E5%AD%98%E5%82%A8%E6%89%80%E6%9C%89%E4%B8%8E%20%E8%AF%A5%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9B%B8%E5%85%B3%20%E7%9A%84%E4%BE%9D%E8%B5%96%E9%9B%86%E5%90%88%5Cn%20%20%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20%20%20effectFn()%5Cn%7D%5Cn%5Cn%2F%2F%20%E6%B8%85%E9%99%A4%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%20deps%20%E5%B1%9E%E6%80%A7%5Cnfunction%20cleanup(effectFn)%20%7B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20effectFn.deps.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20const%20deps%20%3D%20effectFn.deps%5Bi%5D%5Cn%20%20%20%20%20%20%20%20deps.delete(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps.length%20%3D%200%5Cn%7D%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('fn1%20run')%3B%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.ok%20%3F%20obj.text%20%3A%20'not'%5Cn%7D)%5Cnconsole.log('0s%3A'%2C%20bucket)%3B%5Cn%5Cn%2F%2F%202s%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.ok%20%E4%B8%BA%20false%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.ok%20%3D%20false%3B%5Cn%20%20%20%20console.log('2s%3A'%2C%20bucket)%3B%5Cn%7D%2C%202000)%5Cn%5Cn%5Cn%2F%2F%204s%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.text%20%E7%9A%84%E5%80%BC%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20%5C%22hello%20liguwe%20!%5C%22%5Cn%20%20%20%20console.log('4s%3A'%2C%20bucket)%3B%5Cn%7D%2C%204000)%5Cn%5Cn%5Cn%2F%2F%206s%20%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.text%20%E7%9A%84%E5%80%BC%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20%5C%22hello%20liguwe%20!%5C%22%5Cn%20%20%20%20console.log('6s%3A'%2C%20bucket)%3B%5Cn%7D%2C%206000)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E6%89%A7%E8%A1%8C%EF%BC%8C%E5%85%B3%E6%B3%A8%E6%89%93%E5%8D%B0%E7%9A%84%E5%80%BC%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E4%B8%80%E6%A0%B7%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22SJwT7%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="udde5a258" id="udde5a258"><br></p><p data-lake-id="ue5465720" id="ue5465720"><strong><span data-lake-id="u5292b35b" id="u5292b35b">测试看是否符合预期：</span></strong></p><p data-lake-id="u878545fe" id="u878545fe"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1667130474516-f1cabc32-bd82-4ba4-b289-202437a8a83f.png%22%2C%22taskId%22%3A%22u6c938dd7-a5e1-4b47-ad8e-03c4dad3e26%22%2C%22clientId%22%3A%22u9b0bc959-adbb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A841.6619262695312%2C%22height%22%3A551%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A441694%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2330%2C%22originHeight%22%3A1526%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22%E5%8F%AA%E6%89%93%E5%8D%B0%E4%BA%86%E4%B8%A4%E6%AC%A1%2C%E5%90%8E%E9%9D%A2%E4%BF%AE%E6%94%B9TEXT%E5%80%BC%2C%E4%B8%8D%E4%BC%9A%E8%A7%A6%E5%8F%91%E9%87%8D%E6%96%B0%E6%89%A7%E8%A1%8C%20FN1%20%20RUN%200S%3AWEAKMAP%20%7B%7B...MAP(2)%7D%20%5B%5BENTRIES%5D%5D%20%3A%3A%7B0BJECT%20%3EMAP(2)%3E%20%60KEY%3AFTEXT%3A'HELLO%20LIQUWE%20!'%2COK%3AFALSEL%20VALUE%3AMAP(2)%20%5BENTRIES%20OK%E5%B1%9E%E6%80%A7%E6%AD%A3%E5%B8%B8%E6%94%B6%E9%9B%86%2C%E4%BD%86TEXT%E5%B9%B6%E6%B2%A1%E6%9C%89%E5%AF%BC%E8%87%B4%E6%94%B6%E9%9B%86%200%3A%7B%5C%22OK%5C%22%3ESET(1)%3E%20%3A%5C%22TEXT%5C%22%20SET(0))%20SIZE%3A%202%20%5BPROTOTYPE%5D%5D%3AMAP%20%5B%5BPROTOTYPELL%3AWEAKMAP%20LOAD%20CANTENT%20FOR%20SHRONE%20EXTENSIONI%2F%2FNAPJ9SACHILNCBBOOKKOSBABAKAREHI%2FVLCTUALIZED-LIST.NIN-%20SYSTEN%20ERTE%20DEVTOOLS%20FAILED%20TO%20LOAD%20SOURCE%20MAP%3A%20COULD%20NOT%20LOAD%20CONTENT%20FOR%20FN1%20RUN%20%3EMAP(2)%3E%202S%3AWEAKMAP%20%7B%7B...%5D%204S%20WEAKMAP%20%7B%7B..J%3EMAP(2)%3B1%20%5B%5BENTRIES%5D%5D%20%3EKEY%3A%20%7BTEXT%3A%20'HELLO%20LIGUWE%20!'%2C%20OK%3A%20FALSE%5D%20%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%2CCLEANUP%E4%B9%9F%E4%BC%9A%E5%AF%BC%E8%87%B4BUCKET%E4%B8%AD%E7%9A%84%E5%80%BC%E5%8F%98%E5%8C%96%20VALUE%3AMAP(2)%20%5B%5BENTRIES%5D%5D%20V0%3A%7B'OK%5C%22%3E%20SET(1)%7D%20KEY%3A%20%5C%22OK%5C%22%20VVALUE%3ASET(1)%20%5B%5BENTRIES%5D%5D%5D%20CLAANUPLERFOCTFO)%20%2F%2F%2F%2F%2F%2F%2F%2F%20NLVEET%20R%20ACTIVEET%20ACTIVEERT%20ACT%20ACTIVEETTIVEET%20ACT%20ACT%20R%20OFFECTFN%20FO()%20VALUE%3A%20()()%20%5BSET(1)%5D%20DEPS%3A%20LENGTH%20'EFFECTFN''%20NAME%3A%20DE%20FUNCTIONS%20OR%20THE%20ARGU%20PROPERTIES%20MAY%20NOT%20BE%20ACCESSED%20ON%20STRICT%20MODE%20F%20ARGUMENTS%3A%20%5BEXCEPTION%3A%20TYPEERROR%3A'CALLER'%2C'CALLEE'%2C%20AND%20'ARGUMENTS'%20CALLER%3A%20(...)%20%5B%5BFUNCTIONLOCATION%5D%5D%3A%20CODE6.HTML%3F%20IJT%E4%B8%89I7HH.%2CD-RELOAD%20ON%20SAVE%3A58%20%5B%5BPROTOTYPEL%5D%3AF%20()%20%5B%5BSCOPES%5D%5D%3A%20SCOPES%5B3%5D%20SIZE%3A1%20%5B%5BPROTOTYPE%5D%5D%3ASET%201%3A%7B'TEXT%5C%22%20%3E%20SET(0)%3E%20SIZE%3A%20%20%202%20%5B%5BPROTOTYPE%5D%5D%3AMAP%20%5B%5BPROTOTYPE%5D%5D%3AWEAKMAP%206S%3AWEAKMAP%20%7B%7B%2F%2F%3E%3EMAP(2)%3E%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A1161.0021%2C%22y%22%3A41.91654%2C%22width%22%3A823.5505%2C%22height%22%3A43.972796%2C%22text%22%3A%22%E5%8F%AA%E6%89%93%E5%8D%B0%E4%BA%86%E4%B8%A4%E6%AC%A1%2C%E5%90%8E%E9%9D%A2%E4%BF%AE%E6%94%B9TEXT%E5%80%BC%2C%E4%B8%8D%E4%BC%9A%E8%A7%A6%E5%8F%91%E9%87%8D%E6%96%B0%E6%89%A7%E8%A1%8C%22%7D%2C%7B%22x%22%3A89.54841%2C%22y%22%3A87.14456%2C%22width%22%3A100.65713000000001%2C%22height%22%3A22.951310000000007%2C%22text%22%3A%22FN1%20%20RUN%22%7D%2C%7B%22x%22%3A87.92707%2C%22y%22%3A124.90939%2C%22width%22%3A436.46313000000004%2C%22height%22%3A31.497209999999995%2C%22text%22%3A%220S%3AWEAKMAP%20%7B%7B...MAP(2)%7D%22%7D%2C%7B%22x%22%3A203.48999%2C%22y%22%3A163.83057%2C%22width%22%3A148.97284%2C%22height%22%3A22.97236000000001%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A218.90196%2C%22y%22%3A191.73358%2C%22width%22%3A303.11803999999995%2C%22height%22%3A30.29242000000002%2C%22text%22%3A%22%3A%3A%7B0BJECT%20%3EMAP(2)%3E%22%7D%2C%7B%22x%22%3A223.03969%2C%22y%22%3A224.89043%2C%22width%22%3A597.4461100000001%2C%22height%22%3A25.971720000000005%2C%22text%22%3A%22%60KEY%3AFTEXT%3A'HELLO%20LIQUWE%20!'%2COK%3AFALSEL%22%7D%2C%7B%22x%22%3A237.34511%2C%22y%22%3A258.25778%2C%22width%22%3A184.86130999999997%2C%22height%22%3A24.80391999999995%2C%22text%22%3A%22VALUE%3AMAP(2)%22%7D%2C%7B%22x%22%3A266.64108%2C%22y%22%3A291.70575%2C%22width%22%3A121.04758000000004%2C%22height%22%3A21.06600999999995%2C%22text%22%3A%22%5BENTRIES%22%7D%2C%7B%22x%22%3A1510.4381%2C%22y%22%3A304.7342%2C%22width%22%3A659.5498999999998%2C%22height%22%3A43.62115%2C%22text%22%3A%22OK%E5%B1%9E%E6%80%A7%E6%AD%A3%E5%B8%B8%E6%94%B6%E9%9B%86%2C%E4%BD%86TEXT%E5%B9%B6%E6%B2%A1%E6%9C%89%E5%AF%BC%E8%87%B4%E6%94%B6%E9%9B%86%22%7D%2C%7B%22x%22%3A284.77084%2C%22y%22%3A320.21347%2C%22width%22%3A277.02876000000003%2C%22height%22%3A26.165070000000014%2C%22text%22%3A%220%3A%7B%5C%22OK%5C%22%3ESET(1)%3E%22%7D%2C%7B%22x%22%3A312.0207%2C%22y%22%3A350.54977%2C%22width%22%3A121.00188000000003%2C%22height%22%3A25.353399999999965%2C%22text%22%3A%22%3A%5C%22TEXT%5C%22%22%7D%2C%7B%22x%22%3A485.3966%2C%22y%22%3A353.16153%2C%22width%22%3A105.73160000000001%2C%22height%22%3A25.144349999999974%2C%22text%22%3A%22SET(0))%22%7D%2C%7B%22x%22%3A270.06714%2C%22y%22%3A386.22052%2C%22width%22%3A114.18283000000002%2C%22height%22%3A24.008759999999995%2C%22text%22%3A%22SIZE%3A%202%22%7D%2C%7B%22x%22%3A252.93372%2C%22y%22%3A413.4153%2C%22width%22%3A268.46558000000005%2C%22height%22%3A30.38141999999999%2C%22text%22%3A%22%5BPROTOTYPE%5D%5D%3AMAP%22%7D%2C%7B%22x%22%3A190.79425%2C%22y%22%3A449.42264%2C%22width%22%3A310.15410999999995%2C%22height%22%3A25.53915999999998%2C%22text%22%3A%22%5B%5BPROTOTYPELL%3AWEAKMAP%22%7D%2C%7B%22x%22%3A764.52014%2C%22y%22%3A490.1158%2C%22width%22%3A1554.56686%2C%22height%22%3A27.92796000000004%2C%22text%22%3A%22LOAD%20CANTENT%20FOR%20SHRONE%20EXTENSIONI%2F%2FNAPJ9SACHILNCBBOOKKOSBABAKAREHI%2FVLCTUALIZED-LIST.NIN-%20SYSTEN%20ERTE%22%7D%2C%7B%22x%22%3A82.94513%2C%22y%22%3A490.4526%2C%22width%22%3A897.6318699999999%2C%22height%22%3A26.836769999999945%2C%22text%22%3A%22DEVTOOLS%20FAILED%20TO%20LOAD%20SOURCE%20MAP%3A%20COULD%20NOT%20LOAD%20CONTENT%20FOR%22%7D%2C%7B%22x%22%3A89.845726%2C%22y%22%3A534.9488%2C%22width%22%3A96.27315399999999%2C%22height%22%3A22.17046000000005%2C%22text%22%3A%22FN1%20RUN%22%7D%2C%7B%22x%22%3A359.39014%2C%22y%22%3A572.5805%2C%22width%22%3A141.71942%2C%22height%22%3A27.688670000000002%2C%22text%22%3A%22%3EMAP(2)%3E%22%7D%2C%7B%22x%22%3A90.22879%2C%22y%22%3A576.6902%2C%22width%22%3A288.42276%2C%22height%22%3A22.165100000000052%2C%22text%22%3A%222S%3AWEAKMAP%20%7B%7B...%5D%22%7D%2C%7B%22x%22%3A88.801926%2C%22y%22%3A619.63556%2C%22width%22%3A33.24970400000001%2C%22height%22%3A21.090239999999994%2C%22text%22%3A%224S%22%7D%2C%7B%22x%22%3A103.40364%2C%22y%22%3A645.8803%2C%22width%22%3A376.51714%2C%22height%22%3A29.553969999999936%2C%22text%22%3A%22WEAKMAP%20%7B%7B..J%3EMAP(2)%3B1%22%7D%2C%7B%22x%22%3A132.07204%2C%22y%22%3A682.2806%2C%22width%22%3A151.68251%2C%22height%22%3A23.093669999999975%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A169.16191%2C%22y%22%3A743.15375%2C%22width%22%3A593.39409%2C%22height%22%3A27.236450000000104%2C%22text%22%3A%22%3EKEY%3A%20%7BTEXT%3A%20'HELLO%20LIGUWE%20!'%2C%20OK%3A%20FALSE%5D%22%7D%2C%7B%22x%22%3A1271.0764%2C%22y%22%3A750.58545%2C%22width%22%3A763.777%2C%22height%22%3A49.12518%2C%22text%22%3A%22%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%2CCLEANUP%E4%B9%9F%E4%BC%9A%E5%AF%BC%E8%87%B4BUCKET%E4%B8%AD%E7%9A%84%E5%80%BC%E5%8F%98%E5%8C%96%22%7D%2C%7B%22x%22%3A177.19699%2C%22y%22%3A774.94446%2C%22width%22%3A191.87488%2C%22height%22%3A27.931839999999966%2C%22text%22%3A%22VALUE%3AMAP(2)%22%7D%2C%7B%22x%22%3A204.41193%2C%22y%22%3A808.1403%2C%22width%22%3A154.69951999999998%2C%22height%22%3A25.999349999999936%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A214.94891%2C%22y%22%3A836.3315%2C%22width%22%3A291.85059%2C%22height%22%3A29.472759999999994%2C%22text%22%3A%22V0%3A%7B'OK%5C%22%3E%20SET(1)%7D%22%7D%2C%7B%22x%22%3A250.51526%2C%22y%22%3A871.6489%2C%22width%22%3A135.35735999999997%2C%22height%22%3A27.489599999999996%2C%22text%22%3A%22KEY%3A%20%5C%22OK%5C%22%22%7D%2C%7B%22x%22%3A244.3264%2C%22y%22%3A902.9621%2C%22width%22%3A196.79029999999997%2C%22height%22%3A26.875600000000077%2C%22text%22%3A%22VVALUE%3ASET(1)%22%7D%2C%7B%22x%22%3A275.42865%2C%22y%22%3A936.7531%2C%22width%22%3A157.24399%2C%22height%22%3A26.34809999999993%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%5D%22%7D%2C%7B%22x%22%3A468.00565%2C%22y%22%3A965.3292%2C%22width%22%3A1782.87255%2C%22height%22%3A29.20640000000003%2C%22text%22%3A%22CLAANUPLERFOCTFO)%20%2F%2F%2F%2F%2F%2F%2F%2F%20NLVEET%20R%20ACTIVEET%20ACTIVEERT%20ACT%20ACTIVEETTIVEET%20ACT%20ACT%20R%20OFFECTFN%20FO()%22%7D%2C%7B%22x%22%3A316.60345%2C%22y%22%3A1001.51166%2C%22width%22%3A97.80854999999997%2C%22height%22%3A23.539139999999975%2C%22text%22%3A%22VALUE%3A%22%7D%2C%7B%22x%22%3A425.98773%2C%22y%22%3A1001.21423%2C%22width%22%3A121.31232000000006%2C%22height%22%3A24.423070000000052%2C%22text%22%3A%22()()%22%7D%2C%7B%22x%22%3A440.58517%2C%22y%22%3A1034.2124%2C%22width%22%3A110.85318000000001%2C%22height%22%3A23.6096%2C%22text%22%3A%22%5BSET(1)%5D%22%7D%2C%7B%22x%22%3A335.88144%2C%22y%22%3A1034.6178%2C%22width%22%3A85.80716000000001%2C%22height%22%3A23.278299999999945%2C%22text%22%3A%22DEPS%3A%22%7D%2C%7B%22x%22%3A355.9553%2C%22y%22%3A1068.44%2C%22width%22%3A80.59163999999998%2C%22height%22%3A21.17619999999988%2C%22text%22%3A%22LENGTH%22%7D%2C%7B%22x%22%3A430.80972%2C%22y%22%3A1096.6865%2C%22width%22%3A148.75863999999996%2C%22height%22%3A25.04860000000008%2C%22text%22%3A%22'EFFECTFN''%22%7D%2C%7B%22x%22%3A348.44257%2C%22y%22%3A1099.7052%2C%22width%22%3A93.85138%2C%22height%22%3A21.92829999999981%2C%22text%22%3A%22NAME%3A%22%7D%2C%7B%22x%22%3A1998.0863%2C%22y%22%3A1127.6744%2C%22width%22%3A336.40369999999984%2C%22height%22%3A29.353599999999915%2C%22text%22%3A%22DE%20FUNCTIONS%20OR%20THE%20ARGU%22%7D%2C%7B%22x%22%3A1356.958%2C%22y%22%3A1128.1694%2C%22width%22%3A678.1464999999998%2C%22height%22%3A27.723999999999933%2C%22text%22%3A%22PROPERTIES%20MAY%20NOT%20BE%20ACCESSED%20ON%20STRICT%20MODE%20F%22%7D%2C%7B%22x%22%3A349.7072%2C%22y%22%3A1129.9875%2C%22width%22%3A994.7508%2C%22height%22%3A27.68859999999995%2C%22text%22%3A%22ARGUMENTS%3A%20%5BEXCEPTION%3A%20TYPEERROR%3A'CALLER'%2C'CALLEE'%2C%20AND%20'ARGUMENTS'%22%7D%2C%7B%22x%22%3A351.67804%2C%22y%22%3A1158.5732%2C%22width%22%3A215.81439%2C%22height%22%3A32.27970000000005%2C%22text%22%3A%22CALLER%3A%20(...)%22%7D%2C%7B%22x%22%3A352.88666%2C%22y%22%3A1189.6603%2C%22width%22%3A897.2451400000001%2C%22height%22%3A34.710399999999936%2C%22text%22%3A%22%5B%5BFUNCTIONLOCATION%5D%5D%3A%20CODE6.HTML%3F%20IJT%E4%B8%89I7HH.%2CD-RELOAD%20ON%20SAVE%3A58%22%7D%2C%7B%22x%22%3A348.66562%2C%22y%22%3A1220.631%2C%22width%22%3A287.62608%2C%22height%22%3A33.73419999999987%2C%22text%22%3A%22%5B%5BPROTOTYPEL%5D%3AF%20()%22%7D%2C%7B%22x%22%3A350.50073%2C%22y%22%3A1249.7874%2C%22width%22%3A302.59337000000005%2C%22height%22%3A33.184400000000096%2C%22text%22%3A%22%5B%5BSCOPES%5D%5D%3A%20SCOPES%5B3%5D%22%7D%2C%7B%22x%22%3A274.76624%2C%22y%22%3A1287.4716%2C%22width%22%3A126.07562000000001%2C%22height%22%3A25.813699999999926%2C%22text%22%3A%22SIZE%3A1%22%7D%2C%7B%22x%22%3A265.23163%2C%22y%22%3A1316.4031%2C%22width%22%3A277.55413999999996%2C%22height%22%3A28.053900000000112%2C%22text%22%3A%22%5B%5BPROTOTYPE%5D%5D%3ASET%22%7D%2C%7B%22x%22%3A225.56247%2C%22y%22%3A1350.973%2C%22width%22%3A307.98103000000003%2C%22height%22%3A28.76170000000002%2C%22text%22%3A%221%3A%7B'TEXT%5C%22%20%3E%20SET(0)%3E%22%7D%2C%7B%22x%22%3A206.2696%2C%22y%22%3A1385.2739%2C%22width%22%3A98.96123000000003%2C%22height%22%3A24.010800000000017%2C%22text%22%3A%22SIZE%3A%20%20%202%22%7D%2C%7B%22x%22%3A188.024%2C%22y%22%3A1415.7617%2C%22width%22%3A279.80104%2C%22height%22%3A27.11069999999995%2C%22text%22%3A%22%5B%5BPROTOTYPE%5D%5D%3AMAP%22%7D%2C%7B%22x%22%3A127.0054%2C%22y%22%3A1447.1515%2C%22width%22%3A327.24773999999996%2C%22height%22%3A29.23610000000008%2C%22text%22%3A%22%5B%5BPROTOTYPE%5D%5D%3AWEAKMAP%22%7D%2C%7B%22x%22%3A86.22081%2C%22y%22%3A1491.2908%2C%22width%22%3A415.24483%2C%22height%22%3A28.14149999999995%2C%22text%22%3A%226S%3AWEAKMAP%20%7B%7B%2F%2F%3E%3EMAP(2)%3E%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23242528%22%2C%22id%22%3A%22ucd1ce418%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><h3 data-lake-id="dZOoS" id="dZOoS"><span data-lake-id="u159d817f" id="u159d817f">附1：死循环原因</span></h3><ul list="u6e6fa396"><li fid="u2eba6825" data-lake-id="uc95920a7" id="uc95920a7"><span data-lake-id="u44cc7012" id="u44cc7012">因为副作用的执行会导致 </span><code data-lake-id="ub824049f" id="ub824049f"><span data-lake-id="u0ee27704" id="u0ee27704">effect fn</span></code><span data-lake-id="udb6ea04c" id="udb6ea04c"> 被 清除，然后又被 收集，就类似于下面的代码</span></li><li fid="u2eba6825" data-lake-id="u1926a0fa" id="u1926a0fa"><code data-lake-id="u8d3d7fc1" id="u8d3d7fc1"><span data-lake-id="ud46368da" id="ud46368da">cleanup</span></code><span data-lake-id="u701f2a6d" id="u701f2a6d"> 清除，但是 真正副作用函数执行时，触发了 </span><code data-lake-id="ud83a260d" id="ud83a260d"><span data-lake-id="ua8296f8e" id="ua8296f8e">obj</span></code><span data-lake-id="u59039c26" id="u59039c26"> 的读取操作，又能导致重新收集</span></li></ul><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20set%20%3D%20new%20Set(%5B1%5D)%5Cn%5Cnconst%20newSet%20%3D%20new%20Set(set)%5CnnewSet.forEach(item%20%3D%3E%20%7B%5Cn%20%20set.delete(1)%5Cn%20%20set.add(1)%5Cn%20%20console.log(999)%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__height%22%3A174.6292724609375%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22QSB1e%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%2C%22height%22%3A174.6292724609375%7D"></card><p data-lake-id="uc8a34633" id="uc8a34633"><br></p><h2 data-lake-id="uSV16" id="uSV16"><span data-lake-id="ue68d0966" id="ue68d0966">六、当</span><code data-lake-id="u741a69a9" id="u741a69a9"><span data-lake-id="u3d583126" id="u3d583126">effect</span></code><span data-lake-id="u6e5f549a" id="u6e5f549a">函数嵌套时？</span></h2><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20bucket%20%3D%20new%20WeakMap()%5Cnconst%20data%20%3D%20%7Bfoo%3A%20true%2C%20bar%3A%20true%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%20%20%20%20track(target%2C%20key)%5Cn%20%20%20%20%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%20%20%20%20trigger(target%2C%20key)%5Cn%20%20%20%20%7D%5Cn%7D)%5Cn%5Cnfunction%20track(target%2C%20key)%20%7B%5Cn%20%20%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20deps.add(activeEffect)%5Cn%20%20%20%20activeEffect.deps.push(deps)%5Cn%7D%5Cn%5Cnfunction%20trigger(target%2C%20key)%20%7B%5Cn%20%20%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20return%5Cn%20%20%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20%20%20const%20effectsToRun%20%3D%20new%20Set()%5Cn%20%20%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20effectsToRun.add(effectFn))%5Cn%20%20%20%20effectsToRun.forEach(effectFn%20%3D%3E%20effectFn())%5Cn%7D%5Cn%5Cnlet%20activeEffect%5Cn%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20%20%20%20%20fn()%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%20%20effectFn()%5Cn%7D%5Cn%5Cnfunction%20cleanup(effectFn)%20%7B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20effectFn.deps.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20const%20deps%20%3D%20effectFn.deps%5Bi%5D%5Cn%20%20%20%20%20%20%20%20deps.delete(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps.length%20%3D%200%5Cn%7D%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('fn1%20run')%3B%5Cn%20%20%20%20effect(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20console.log('fn2%20run')%3B%5Cn%20%20%20%20%20%20%20%20temp2%20%3D%20obj.bar%3B%5Cn%20%20%20%20%7D)%5Cn%20%20%20%20temp1%20%3D%20obj.foo%3B%5Cn%7D)%5Cn%5Cnobj.foo%20%3D%20false%3B%5Cnobj.bar%20%3D%20false%3B%5Cnobj.foo%20%3D%20true%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22effect%E5%87%BD%E6%95%B0%E5%B5%8C%E5%A5%97%E6%97%B6%EF%BC%8C%E4%B8%8B%E9%9D%A2%E4%BB%A3%E7%A0%81%E4%BC%9A%E6%80%8E%E4%B9%88%E6%89%93%E5%8D%B0%EF%BC%9F%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B56%2C58%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22e7Jen%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uc515596a" id="uc515596a"><br></p><p data-lake-id="uf8fa34ce" id="uf8fa34ce"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1668340421785-fbff1de0-5445-41bc-aad4-df60668a9625.png%22%2C%22taskId%22%3A%22u4bad64a2-96c2-41ad-af60-bfde7b2b731%22%2C%22clientId%22%3A%22ub846f75e-7f94-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A519%2C%22height%22%3A501%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A134102%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1136%2C%22originHeight%22%3A1096%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22%20FUNCTION%20CLEANUP(EFFECTFN)%20%7B%20FOR%20(LET%20I%20-%20O%3B%20I%20%3C%20EFFECTFN.DEPS.LENGTH%3B%20I%2B%2B)%20%7B%20%20CONST%20DEPS%20%E4%B8%89%20EFFECTFN.DEPS%5BI%5D%20DEPS.DELETE(EFFECTFN)%20EFFECTFN.DEPS.LENGTH%200%20EFFECT(()%20%E4%B8%89%3E%20%7B%20%20CONSOLE.LOG('FN1%20RUN')%3B%20EFFECT(()%20%E5%B7%9DV%20%20CONSOLE.LOG('FN2%20RUN'%20%E4%B8%89%20OBJ.BAR%3B%20TEMP2%2011%20TEMP1%20OBJ.FOO%3B%20%E4%BA%86)%20OBJ.FOO%20%E4%B8%89%20FALSE%3B%20OBJ.BAR%20FALSE%3B%20OBJ.%20FOO%20RUE%3B%20FN1%20RUR%20FN2%20RUL%20FN2%20RUN%20FN2%20RUN%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A68.28606%2C%22y%22%3A26.478994%2C%22width%22%3A505.37599%2C%22height%22%3A35.651366%2C%22text%22%3A%22%20FUNCTION%20CLEANUP(EFFECTFN)%20%7B%22%7D%2C%7B%22x%22%3A140.16013%2C%22y%22%3A61.366154%2C%22width%22%3A869.03437%2C%22height%22%3A36.337996%2C%22text%22%3A%22FOR%20(LET%20I%20-%20O%3B%20I%20%3C%20EFFECTFN.DEPS.LENGTH%3B%20I%2B%2B)%20%7B%22%7D%2C%7B%22x%22%3A211.51593%2C%22y%22%3A98.33587%2C%22width%22%3A520.10791%2C%22height%22%3A34.39463000000001%2C%22text%22%3A%22%20CONST%20DEPS%20%E4%B8%89%20EFFECTFN.DEPS%5BI%5D%22%7D%2C%7B%22x%22%3A209.8368%2C%22y%22%3A133.6677%2C%22width%22%3A379.00744%2C%22height%22%3A35.30572000000001%2C%22text%22%3A%22DEPS.DELETE(EFFECTFN)%22%7D%2C%7B%22x%22%3A140.29897%2C%22y%22%3A203.78609%2C%22width%22%3A361.15023%2C%22height%22%3A30.957580000000007%2C%22text%22%3A%22EFFECTFN.DEPS.LENGTH%22%7D%2C%7B%22x%22%3A512.70844%2C%22y%22%3A205.99435%2C%22width%22%3A60.76526000000001%2C%22height%22%3A25.832510000000013%2C%22text%22%3A%220%22%7D%2C%7B%22x%22%3A65.26619%2C%22y%22%3A305.6862%2C%22width%22%3A259.03154%2C%22height%22%3A34.51125000000002%2C%22text%22%3A%22EFFECT(()%20%E4%B8%89%3E%20%7B%22%7D%2C%7B%22x%22%3A141.03052%2C%22y%22%3A339.48462%2C%22width%22%3A410.33147999999994%2C%22height%22%3A43.264039999999966%2C%22text%22%3A%22%20CONSOLE.LOG('FN1%20RUN')%3B%22%7D%2C%7B%22x%22%3A139.02634%2C%22y%22%3A375.5696%2C%22width%22%3A158.74209000000002%2C%22height%22%3A33.65443000000005%2C%22text%22%3A%22EFFECT(()%22%7D%2C%7B%22x%22%3A316.38214%2C%22y%22%3A381.81598%2C%22width%22%3A55.00065999999998%2C%22height%22%3A24.743499999999983%2C%22text%22%3A%22%E5%B7%9DV%22%7D%2C%7B%22x%22%3A211.04016%2C%22y%22%3A407.2466%2C%22width%22%3A363.94379000000004%2C%22height%22%3A45.94896%2C%22text%22%3A%22%20CONSOLE.LOG('FN2%20RUN'%22%7D%2C%7B%22x%22%3A316.965%2C%22y%22%3A448.2877%2C%22width%22%3A185.94296000000003%2C%22height%22%3A35.06405000000001%2C%22text%22%3A%22%E4%B8%89%20OBJ.BAR%3B%22%7D%2C%7B%22x%22%3A210.9507%2C%22y%22%3A450.44388%2C%22width%22%3A92.1813%2C%22height%22%3A30.421899999999994%2C%22text%22%3A%22TEMP2%22%7D%2C%7B%22x%22%3A140.64758%2C%22y%22%3A482.7401%2C%22width%22%3A32.664320000000004%2C%22height%22%3A32.451400000000035%2C%22text%22%3A%2211%22%7D%2C%7B%22x%22%3A138.65549%2C%22y%22%3A519.4422%2C%22width%22%3A285.27311000000003%2C%22height%22%3A31.98790000000008%2C%22text%22%3A%22TEMP1%20OBJ.FOO%3B%22%7D%2C%7B%22x%22%3A65.58269%2C%22y%22%3A549.62573%2C%22width%22%3A34.207300000000004%2C%22height%22%3A35.70357000000001%2C%22text%22%3A%22%E4%BA%86)%22%7D%2C%7B%22x%22%3A64.8449%2C%22y%22%3A623.07245%2C%22width%22%3A285.86546%2C%22height%22%3A34.02410999999995%2C%22text%22%3A%22OBJ.FOO%20%E4%B8%89%20FALSE%3B%22%7D%2C%7B%22x%22%3A74.76995%2C%22y%22%3A693.6807%2C%22width%22%3A271.9495%2C%22height%22%3A32.819240000000036%2C%22text%22%3A%22OBJ.BAR%20FALSE%3B%22%7D%2C%7B%22x%22%3A67.144066%2C%22y%22%3A763.08484%2C%22width%22%3A126.35523400000001%2C%22height%22%3A32.01378999999997%2C%22text%22%3A%22OBJ.%20FOO%22%7D%2C%7B%22x%22%3A266.14258%2C%22y%22%3A771.21246%2C%22width%22%3A66.58031999999997%2C%22height%22%3A22.412739999999985%2C%22text%22%3A%22RUE%3B%22%7D%2C%7B%22x%22%3A69.81025%2C%22y%22%3A885.9513%2C%22width%22%3A51.024246000000005%2C%22height%22%3A25.272500000000036%2C%22text%22%3A%22FN1%22%7D%2C%7B%22x%22%3A141.2207%2C%22y%22%3A890.58844%2C%22width%22%3A45.734880000000004%2C%22height%22%3A21.78146000000004%2C%22text%22%3A%22RUR%22%7D%2C%7B%22x%22%3A65.986755%2C%22y%22%3A935.46277%2C%22width%22%3A109.98214499999999%2C%22height%22%3A28.413880000000063%2C%22text%22%3A%22FN2%20RUL%22%7D%2C%7B%22x%22%3A68.56127%2C%22y%22%3A987.76385%2C%22width%22%3A54.34740000000001%2C%22height%22%3A27.40179999999998%2C%22text%22%3A%22FN2%22%7D%2C%7B%22x%22%3A141.51656%2C%22y%22%3A992.47253%2C%22width%22%3A50.839380000000006%2C%22height%22%3A21.667670000000044%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A67.7579%2C%22y%22%3A1040.0673%2C%22width%22%3A53.893789999999996%2C%22height%22%3A25.561100000000124%2C%22text%22%3A%22FN2%22%7D%2C%7B%22x%22%3A142.1709%2C%22y%22%3A1044.3063%2C%22width%22%3A49.44218000000001%2C%22height%22%3A20.48810000000003%2C%22text%22%3A%22RUN%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0.0159%2C1%2C1%5D%2C%22averageHue%22%3A%22%23212225%22%2C%22id%22%3A%22u14f246fe%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u7110b2ab" id="u7110b2ab"><strong><span data-lake-id="u2df984cb" id="u2df984cb">​</span></strong><br></p><p data-lake-id="u94efcef0" id="u94efcef0"><strong><span data-lake-id="ub4ebead0" id="ub4ebead0">每次赋值导致的打印如上图，为什么会这样呢？ 看</span></strong><code data-lake-id="uda14eb1d" id="uda14eb1d"><strong><span data-lake-id="u2b459d31" id="u2b459d31">Effect</span></strong></code><strong><span data-lake-id="u5884e016" id="u5884e016"> 代码</span></strong></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20effect(fn)%20%7B%5Cn%20%20%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%20%E5%90%8C%E4%B8%80%E6%97%B6%E5%88%BB%EF%BC%8CactiveEffect%E5%8F%AA%E8%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%EF%BC%8C%E5%B5%8C%E5%A5%97%E6%97%B6%EF%BC%8C%E5%86%85%E5%B1%82%E7%9A%84fn2%20%E4%BC%9A%E8%A6%86%E7%9B%96%20fn1%20%2C%20%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%20%E6%97%A0%E8%AE%BA%E5%93%8D%E5%BA%94%E5%BC%8F%E5%9C%A8%E5%86%85%E5%B1%82%E8%BF%98%E6%98%AF%E5%A4%96%E5%B1%82%E6%94%B6%E9%9B%86%EF%BC%8C%E6%AF%8F%E6%AC%A1%E6%94%B6%E9%9B%86%E9%83%BD%E6%98%AF%20fn2%5Cn%20%20%20%20%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20%20%20%20%20fn()%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%20%20effectFn()%5Cn%7D%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('fn1%20run')%3B%5Cn%20%20%20%20effect(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20console.log('fn2%20run')%3B%5Cn%20%20%20%20%20%20%20%20temp2%20%3D%20obj.bar%3B%5Cn%20%20%20%20%7D)%5Cn%20%20%20%20temp1%20%3D%20obj.foo%3B%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B3%2C4%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22G8Elg%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u953e93c9" id="u953e93c9"><br></p><p data-lake-id="uf2f68031" id="uf2f68031"><strong><span data-lake-id="u35982cab" id="u35982cab" style="color: rgb(205, 23, 33)">问：那么为什么第一次可以正常打印出 </span></strong><code data-lake-id="u566d1768" id="u566d1768"><strong><span data-lake-id="u31faf4f6" id="u31faf4f6" style="color: rgb(205, 23, 33)">fn1 run</span></strong></code><strong><span data-lake-id="u005cd4f4" id="u005cd4f4" style="color: rgb(205, 23, 33)"> </span></strong></p><p data-lake-id="u9ba810a5" id="u9ba810a5"><br></p><p data-lake-id="u58f97a7f" id="u58f97a7f"><span data-lake-id="u535a29af" id="u535a29af">解决方案：新增 </span><code data-lake-id="u9000c425" id="u9000c425"><span data-lake-id="ub27226f0" id="ub27226f0">effectStack</span></code><span data-lake-id="ub1ae8dd3" id="ub1ae8dd3"> </span></p><p data-lake-id="ub3784bb4" id="ub3784bb4"><strong><span data-lake-id="uc3c8ab52" id="uc3c8ab52">​</span></strong><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E7%94%A8%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E5%AD%98%E5%82%A8%E5%BD%93%E5%89%8D%E6%BF%80%E6%B4%BB%E7%9A%84%20effect%20%E5%87%BD%E6%95%B0%5Cnlet%20activeEffect%5Cn%2F%2F%20%E6%96%B0%E5%A2%9E%20effect%20%E6%A0%88%5Cnconst%20effectStack%20%3D%20%5B%5D%5Cn%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20%2F%2Fadd%3A%20%E5%9C%A8%E8%B0%83%E7%94%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%B9%8B%E5%89%8D%E5%B0%86%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%8E%8B%E6%A0%88%5Cn%20%20%20%20effectStack.push(effectFn)%5Cn%20%20%20%20fn()%5Cn%20%20%20%20%2F%2F%20%E5%9C%A8%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E5%AE%8C%E6%AF%95%E5%90%8E%EF%BC%8C%E5%B0%86%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%BC%B9%E5%87%BA%E6%A0%88%EF%BC%8C%E5%B9%B6%E8%BF%98%E5%8E%9F%20activeEffect%20%E4%B8%BA%E4%B9%8B%E5%89%8D%E7%9A%84%E5%80%BC%5Cn%20%20%20%20effectStack.pop()%5Cn%20%20%20%20activeEffect%20%3D%20effectStack%5BeffectStack.length%20-%201%5D%5Cn%20%20%7D%5Cn%20%20%2F%2F%20activeEffect.deps%20%E7%94%A8%E6%9D%A5%E5%AD%98%E5%82%A8%E6%89%80%E6%9C%89%E4%B8%8E%E8%AF%A5%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9B%B8%E5%85%B3%E7%9A%84%E4%BE%9D%E8%B5%96%E9%9B%86%E5%90%88%5Cn%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20effectFn()%5Cn%7D%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B2%2C10%2C11%2C12%2C14%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22gAnAA%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6e8b6a4d" id="u6e8b6a4d"><strong><span data-lake-id="u658c2904" id="u658c2904">​</span></strong><br></p><h2 data-lake-id="MW4KJ" id="MW4KJ"><span data-lake-id="u456c01f7" id="u456c01f7">七、obj.foo++ 导致的栈溢出</span></h2><p data-lake-id="u9d0ba402" id="u9d0ba402"><span data-lake-id="u4c0667bb" id="u4c0667bb">场景如下：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22effect(()%20%3D%3E%20%7B%5Cn%20%20obj.foo%2B%2B%20%20%2F%2F%20obj.foo%20%3D%20obj.foo%20%2B%201%3B%20%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E6%97%A0%E7%BA%BF%E9%80%92%E5%BD%92%E5%BE%AA%E7%8E%AF%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22Uj3e6%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u3ee24a6a" id="u3ee24a6a"><br></p><p data-lake-id="u0d938d50" id="u0d938d50"><span data-lake-id="ua349698c" id="ua349698c">解决方法比较简单：</span><code data-lake-id="u68dde788" id="u68dde788"><span data-lake-id="ufef27b15" id="ufef27b15">trigger</span></code><span data-lake-id="u370a8aff" id="u370a8aff"> 时，添加条件判断</span></p><p data-lake-id="udc590c34" id="udc590c34"><span data-lake-id="u9e2a3883" id="u9e2a3883">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20trigger(target%2C%20key)%20%7B%5Cn%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20return%5Cn%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%5Cn%20%20const%20effectsToRun%20%3D%20new%20Set()%5Cn%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20%E5%A6%82%E6%9E%9C%20trigger%20%E8%A7%A6%E5%8F%91%E7%9A%84%E5%87%BD%E6%95%B0%EF%BC%8C%E4%B8%8E%E6%AD%A3%E5%9C%A8%E6%89%A7%E8%A1%8C%E7%9A%84%E5%87%BD%E6%95%B0%E7%9B%B8%E5%90%8C%EF%BC%8C%E5%88%99%E4%B8%8D%E8%A7%A6%E5%8F%91%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20if%20(effectFn%20!%3D%3D%20activeEffect)%20%7B%5Cn%20%20%20%20%20%20effectsToRun.add(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%7D)%5Cn%20%20effectsToRun.forEach(effectFn%20%3D%3E%20effectFn())%5Cn%20%20%2F%2F%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20effectFn())%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%A6%82%E6%9E%9C%20trigger%20%E8%A7%A6%E5%8F%91%E7%9A%84%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%EF%BC%8C%E4%B8%8E%E6%AD%A3%E5%9C%A8%E6%89%A7%E8%A1%8C%E7%9A%84%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9B%B8%E5%90%8C%EF%BC%8C%E5%88%99%E4%B8%8D%E8%A7%A6%E5%8F%91%E6%89%A7%E8%A1%8C%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B7%2C8%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22i3YM0%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uebfe4189" id="uebfe4189"><strong><span data-lake-id="ud38b584a" id="ud38b584a">​</span></strong><br></p><h2 data-lake-id="DQUek" id="DQUek"><span data-lake-id="u914ac27d" id="u914ac27d">八、如何实现调度 ？</span></h2><h3 data-lake-id="fy0f6" id="fy0f6"><span data-lake-id="ucd2a58e1" id="ucd2a58e1">场景一</span></h3><p data-lake-id="u4a628440" id="u4a628440"><span data-lake-id="u2e3cbe02" id="u2e3cbe02">看下面一段代码：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20data%20%3D%20%7B%20foo%3A%201%20%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%7B%2F*..%E7%9C%81%E7%95%A5..*%2F%7D)%20%5Cn%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20console.log(obj.foo)%5Cn%7D)%5Cn%5Cnobj.foo%2B%2B%3B%5Cn%5Cnconsole.log('end')%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22qBiDN%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u38abeb31" id="u38abeb31"><br></p><p data-lake-id="ua0a7a4d9" id="ua0a7a4d9"><span data-lake-id="u8cc0d307" id="u8cc0d307">上面代码的打印顺序为 </span><code data-lake-id="u37f513fd" id="u37f513fd"><span data-lake-id="u4ad9bd0a" id="u4ad9bd0a">1 → 2 → end</span></code><span data-lake-id="uf6ae1ad1" id="uf6ae1ad1"> </span><span data-lake-id="ue8641405" id="ue8641405" style="color: rgb(205, 23, 33)"> 问：如何实现输入顺序为 </span><code data-lake-id="u51485c86" id="u51485c86"><span data-lake-id="u31f44a4f" id="u31f44a4f" style="color: rgb(205, 23, 33)">1 → end → 2</span></code><span data-lake-id="u17d2ebf2" id="u17d2ebf2" style="color: rgb(205, 23, 33)"> ?</span></p><h4 data-lake-id="vNiSN" id="vNiSN"><span data-lake-id="uba95e619" id="uba95e619">方法一：换位置即可</span></h4><p data-lake-id="u74964f42" id="u74964f42"><span data-lake-id="u98db9d68" id="u98db9d68">当然不是想要的</span></p><h4 data-lake-id="La1ys" id="La1ys"><span data-lake-id="u50ed5865" id="u50ed5865">方法二：调度</span></h4><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20trigger(target%2C%20key)%20%7B%5Cn%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20return%5Cn%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20const%20effectsToRun%20%3D%20new%20Set()%5Cn%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(effectFn%20!%3D%3D%20activeEffect)%20%7B%5Cn%20%20%20%20%20%20effectsToRun.add(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%7D)%5Cn%20%20effectsToRun.forEach(effectFn%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AA%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%AD%98%E5%9C%A8%E8%B0%83%E5%BA%A6%E5%99%A8%EF%BC%8C%E5%88%99%E8%B0%83%E7%94%A8%E8%B0%83%E5%BA%A6%E5%99%A8%EF%BC%8C%E5%B9%B6%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92%5Cn%20%20%20%20if%20(effectFn.options.scheduler)%20%7B%5Cn%20%20%20%20%20%20effectFn.options.scheduler(effectFn)%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20effectFn()%5Cn%20%20%20%20%7D%5Cn%20%20%7D)%5Cn%7D%5Cn%5Cnlet%20activeEffect%5Cnconst%20effectStack%20%3D%20%5B%5D%5Cn%5Cnfunction%20effect(fn%2C%20options%20%3D%20%7B%7D)%20%7B%5Cn%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20effectStack.push(effectFn)%5Cn%20%20%20%20fn()%5Cn%20%20%20%20effectStack.pop()%5Cn%20%20%20%20activeEffect%20%3D%20effectStack%5BeffectStack.length%20-%201%5D%5Cn%20%20%7D%5Cn%20%20%2F%2F%20%E5%B0%86%20options%20%E6%8C%82%E5%9C%A8%E5%88%B0%20effectFn%20%E4%B8%8A%5Cn%20%20effectFn.options%20%3D%20options%20%20%2F%2F%20add%5Cn%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20effectFn()%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E8%B0%83%E5%BA%A6%E5%99%A8%E6%9C%AC%E8%BA%AB%E4%B9%9F%E5%BA%94%E8%AF%A5%E6%98%AF%E4%B8%80%E5%87%BD%E6%95%B0%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%2C33%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22NwIQ2%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u13d2c14e" id="u13d2c14e"><br></p><p data-lake-id="ua9faf493" id="ua9faf493"><span data-lake-id="u153d0010" id="u153d0010">使用：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22effect(()%20%3D%3E%20%7B%5Cn%20%20console.log(obj.foo)%5Cn%7D%2C%5Cn%2F%2F%20options%5Cn%7B%5Cn%20%20%20%20%2F%2F%20%E8%B0%83%E5%BA%A6%E5%99%A8%5Cn%20%20%20%20scheduler(fn)%20%7B%5Cn%20%20%20%20%20%20%2F%2F%20%E6%94%BE%E5%9C%A8%E4%B8%80%E4%B8%AAsetTimeout%E4%B8%AD%EF%BC%8C%E8%82%AF%E5%AE%9A%E8%83%BD%E4%BF%9D%E8%AF%81%E9%A1%BA%E5%BA%8F%E4%B8%BA%201%20%E2%86%92%20end%20%E2%86%92%202%5Cn%20%20%20%20%5CtsetTimeout(fn)%5Cn%20%20%5Ct%7D%5Cn%7D)%5Cn%5Cnobj.foo%2B%2B%3B%5Cn%5Cnconsole.log('end')%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22setTimeout%E6%9D%A5%E5%AE%9E%E7%8E%B0%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B7%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22GtJUq%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ue5fa1c17" id="ue5fa1c17"><br></p><h3 data-lake-id="Kvj7c" id="Kvj7c"><span data-lake-id="uf11ef911" id="uf11ef911">场景二</span></h3><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20data%20%3D%20%7B%20foo%3A%201%20%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%7B%2F*..%E7%9C%81%E7%95%A5..*%2F%7D)%20%5Cn%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20console.log(obj.foo)%5Cn%7D)%5Cn%5Cnobj.foo%2B%2B%3B%5Cnobj.foo%2B%2B%3B%5Cnobj.foo%2B%2B%3B%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%9C%BA%E6%99%AF2%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22ioqS0%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u54c69a6d" id="u54c69a6d"><span data-lake-id="u49f98be7" id="u49f98be7">​</span><br></p><p data-lake-id="u228060c8" id="u228060c8"><span data-lake-id="u819c3d97" id="u819c3d97">结果是：</span><code data-lake-id="u6754c2e6" id="u6754c2e6"><span data-lake-id="uf7818bbd" id="uf7818bbd">1 → 2 → 3 → 4</span></code><span data-lake-id="u9d3f1e0d" id="u9d3f1e0d"> 如果我们希望打印出 </span><code data-lake-id="ue80a3aec" id="ue80a3aec"><span data-lake-id="u6f740267" id="u6f740267">1  → 4</span></code><span data-lake-id="ud36305b4" id="ud36305b4"> ，即 </span><u><span data-lake-id="u7349d43f" id="u7349d43f">只打印出初始化值和最终值，而不关心中间态</span></u></p><p data-lake-id="uf3c8e4a6" id="uf3c8e4a6"><span data-lake-id="u05d212fc" id="u05d212fc">​</span><br></p><p data-lake-id="u078d8a18" id="u078d8a18"><span data-lake-id="ue97a2414" id="ue97a2414">实现方式如下：</span></p><p data-lake-id="uf79b60ce" id="uf79b60ce"><span data-lake-id="u21b8598d" id="u21b8598d">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20jobQueue%20%3D%20new%20Set()%5Cn%2F%2F%20%E4%BD%BF%E7%94%A8%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%EF%BC%8C%E6%9D%A5%E4%BF%9D%E8%AF%81%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%5Cnconst%20p%20%3D%20Promise.resolve()%5Cn%5Cnlet%20isFlushing%20%3D%20false%5Cnfunction%20flushJob()%20%7B%5Cn%20%20if%20(isFlushing)%20return%5Cn%20%20isFlushing%20%3D%20true%5Cn%20%20p.then(()%20%3D%3E%20%7B%5Cn%20%20%20%20jobQueue.forEach(job%20%3D%3E%20job())%20%2F%2F%20%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%87%8C%EF%BC%8C%E5%8F%AA%E4%BC%9A%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%5Cn%20%20%7D).finally(()%20%3D%3E%20%7B%5Cn%20%20%20%20isFlushing%20%3D%20false%5Cn%20%20%7D)%5Cn%7D%5Cn%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20console.log(obj.foo)%5Cn%7D%2C%20%7B%5Cn%20%20scheduler(fn)%20%7B%5Cn%20%20%20%20%2F%2F%20jobQueue%E4%B8%BA%E9%9B%86%E5%90%88%EF%BC%8C%E4%BF%9D%E9%9A%9C%E8%BF%9E%E7%BB%AD%E6%89%A7%E8%A1%8C%20scheduler%20%E8%B0%83%E5%BA%A6%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%8F%AA%E4%BC%9A%E6%B7%BB%E5%8A%A0%E4%B8%80%E6%AC%A1%5Cn%20%20%20%20jobQueue.add(fn)%5Cn%20%20%20%20%2F%2F%20%E4%BC%9A%E6%89%A7%E8%A1%8C%E4%B8%A4%E6%AC%A1%EF%BC%8C%E4%BD%86%E6%98%AF%E5%86%85%E9%83%A8%E6%9C%89%20isFlushing%20%E5%8F%98%E9%87%8F%E6%8E%A7%E5%88%B6%EF%BC%8C%E5%AE%9E%E9%99%85%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%87%8C%EF%BC%8C%E5%8F%AA%E4%BC%9A%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%5Cn%20%20%20%20flushJob()%5Cn%20%20%7D%5Cn%7D)%5Cn%5Cnobj.foo%2B%2B%3B%5Cnobj.foo%2B%2B%3B%5Cnobj.foo%2B%2B%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%BD%BF%E7%94%A8Promise%E5%AE%9E%E7%8E%B0%EF%BC%8C%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%87%8C%EF%BC%8C%E5%8F%AA%E4%BC%9A%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B1%2C9%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22N2xHw%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ude04550a" id="ude04550a"><span data-lake-id="ub8ff69df" id="ub8ff69df">​</span><br></p>`,body_draft_lake:`<!doctype lake><meta name="doc-version" content="1" /><meta name="typography" content="classic" /><meta name="viewport" content="fixed" /><meta name="paragraphSpacing" content="relax" /><h1 data-lake-id="TQf3q" id="TQf3q"><span data-lake-id="udc262477" id="udc262477">Vue3 响应式系统设计</span></h1><h2 data-lake-id="yZMvx" id="yZMvx"><span data-lake-id="uecb7d888" id="uecb7d888">一、为何响应式</span></h2><p data-lake-id="ua8668d39" id="ua8668d39"><span data-lake-id="ud92da9f1" id="ud92da9f1">比如以下代码：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20obj%20%3D%20%7Btext%3A%20'hello%20world%EF%BC%81'%7D%3B%5Cn%5Cnfunction%20effect()%20%7B%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.text%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B3%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22One%20Dark%20Pro%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22hH8kX%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uab99bcca" id="uab99bcca"><br></p><p data-lake-id="ub582970d" id="ub582970d"><span data-lake-id="uf00fea38" id="uf00fea38">如果我修改</span><code data-lake-id="ue7066d20" id="ue7066d20"><span data-lake-id="u9eba87fa" id="u9eba87fa">obj.text = &quot;hello liguwe！&quot;;\0</span></code><span data-lake-id="ucadc5177" id="ucadc5177"> ， </span><code data-lake-id="uca36780e" id="uca36780e"><span data-lake-id="u41792592" id="u41792592">effect</span></code><span data-lake-id="u3995ddb6" id="u3995ddb6"> 函数重新会执行，更新页面内容为 </span><code data-lake-id="ue7457e7f" id="ue7457e7f"><span data-lake-id="u0c3c6f0e" id="u0c3c6f0e">hello liguwe！</span></code><span data-lake-id="u4777ae32" id="u4777ae32">  ，则说明 </span><code data-lake-id="u1906a774" id="u1906a774"><span data-lake-id="u4e61142a" id="u4e61142a">obj</span></code><span data-lake-id="u8cad3af0" id="u8cad3af0"> 是 </span><strong><span data-lake-id="ud469b7ad" id="ud469b7ad">响应式的，</span></strong><span data-lake-id="ud0d57e87" id="ud0d57e87">下面是初步实现</span></p><h2 data-lake-id="x3fcb" id="x3fcb"><span data-lake-id="u097b8e80" id="u097b8e80">二、初步实现</span></h2><p data-lake-id="u7207122e" id="u7207122e"><span data-lake-id="uc9c88038" id="uc9c88038">使用</span><code data-lake-id="u31cdc9a1" id="u31cdc9a1"><span data-lake-id="uce621ff2" id="uce621ff2">Proxy</span></code><span data-lake-id="u62decc5f" id="u62decc5f"> ， 代理对象进行读取和写入的拦截，并把</span><code data-lake-id="u7df2882c" id="u7df2882c"><span data-lake-id="u2b34e614" id="u2b34e614">副作用函数</span></code><span data-lake-id="u9b65ec5c" id="u9b65ec5c">放入</span><code data-lake-id="ud8e3343d" id="ud8e3343d"><strong><span data-lake-id="ub8f58747" id="ub8f58747">桶</span></strong></code><span data-lake-id="u40f697e6" id="u40f697e6">的数据结构中 ， 读取时放入</span><code data-lake-id="ua14c98c8" id="ua14c98c8"><span data-lake-id="u22675c26" id="u22675c26">桶</span></code><span data-lake-id="udba271ff" id="udba271ff">中，写入时从</span><code data-lake-id="u9ac46227" id="u9ac46227"><span data-lake-id="ued58aa8b" id="ued58aa8b">桶</span></code><span data-lake-id="u12c74675" id="u12c74675">中拿出来并执行。</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%5Cnconst%20bucket%20%3D%20new%20Set()%5Cn%5Cn%2F%2F%20%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%5Cnconst%20data%20%3D%20%7Btext%3A%20'hello%20world'%7D%5Cn%5Cn%2F%2F%20%E5%AF%B9%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BB%A3%E7%90%86%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AF%BB%E5%8F%96%E6%93%8D%E4%BD%9C%5Cn%20%20%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20effect%20%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%E4%B8%AD%5Cn%20%20%20%20%20%20%20%20bucket.add(effect)%3B%20%2F%2F%20%E7%A1%AC%E7%BC%96%E7%A0%81%E4%BA%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%EF%BC%8C%E5%90%8D%E5%AD%97%E5%B0%B1%E5%8F%ABeffect%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%BF%94%E5%9B%9E%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20%20%20%20%20return%20target%5Bkey%5D%3B%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AE%BE%E7%BD%AE%E6%93%8D%E4%BD%9C%5Cn%20%20%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20newVal%3B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E6%8A%8A%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BB%8E%E6%A1%B6%E9%87%8C%E5%8F%96%E5%87%BA%E5%B9%B6%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20%20%20%20%20bucket.forEach(fn%20%3D%3E%20fn())%5Cn%20%20%20%20%7D%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B1%2C11%2C20%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22One%20Dark%20Pro%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22H33QY%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u8d04b7fd" id="u8d04b7fd"><strong><span data-lake-id="ud6dfe924" id="ud6dfe924">​</span></strong><br></p><p data-lake-id="ua756a6ff" id="ua756a6ff"><strong><span data-lake-id="u56ac45ff" id="u56ac45ff">测试：</span></strong></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20effect()%20%7B%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D%5Cn%2F%2F%20%E8%A7%A6%E5%8F%91%E8%AF%BB%E5%8F%96%5Cneffect()%5Cn%5Cn%2F%2F%20%E8%A7%A6%E5%8F%91%E5%86%99%E5%85%A5%EF%BC%8C%E5%8F%AF%E4%BB%A5%E9%87%8D%E6%96%B0%E6%89%A7%E8%A1%8C%20effect%20%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20'hello%20liguwe'%5Cn%7D%2C%202000)%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22One%20Dark%20Pro%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22Q5bq5%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u9a313742" id="u9a313742"><span data-lake-id="ue7ce8730" id="ue7ce8730">​</span><br></p><p data-lake-id="u920673f2" id="u920673f2"><strong><span data-lake-id="udb0f902d" id="udb0f902d">以上实现的 </span></strong><strong><span data-lake-id="u3bb2df76" id="u3bb2df76" style="color: rgb(205, 23, 33)">缺点</span></strong><strong><span data-lake-id="u6c8280f4" id="u6c8280f4">：</span></strong></p><ul list="u1aa3b165"><li fid="u8e6adbad" data-lake-id="ub5c73197" id="ub5c73197"><span data-lake-id="udda0e5ca" id="udda0e5ca">硬编码 </span><code data-lake-id="ufaffb528" id="ufaffb528"><span data-lake-id="ud08bbfc3" id="ud08bbfc3">effect</span></code><span data-lake-id="udbbbec9d" id="udbbbec9d"> </span></li></ul><h2 data-lake-id="KxmuE" id="KxmuE"><span data-lake-id="uc6e7b469" id="uc6e7b469">三、完善：解决</span><code data-lake-id="uc8986ccb" id="uc8986ccb"><span data-lake-id="uaf5080cb" id="uaf5080cb">硬编码</span></code><span data-lake-id="u56b18861" id="u56b18861">的问题</span></h2><p data-lake-id="ue1ce8372" id="ue1ce8372"><span data-lake-id="u80691e56" id="u80691e56">使用全局变量 </span><code data-lake-id="ufc4728e7" id="ufc4728e7"><span data-lake-id="ueaecd1ef" id="ueaecd1ef">activeEffect</span></code><span data-lake-id="ua5125460" id="ua5125460"> 来存储 </span><code data-lake-id="uf11c342d" id="uf11c342d"><span data-lake-id="u97dc388f" id="u97dc388f">需要被注册的副作用函数</span></code><span data-lake-id="ucbea935b" id="ucbea935b">。</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%5Cnconst%20bucket%20%3D%20new%20Set()%5Cn%2F%2F%20%E7%94%A8%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E5%AD%98%E5%82%A8%E5%BD%93%E5%89%8D%E6%BF%80%E6%B4%BB%E7%9A%84%20effect%20%E5%87%BD%E6%95%B0%5Cnlet%20activeEffect%5Cn%5Cn%2F%2F%20%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%5Cnconst%20data%20%3D%20%7B%20text%3A%20'hello%20world'%20%7D%5Cn%2F%2F%20%E5%AF%B9%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BB%A3%E7%90%86%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AF%BB%E5%8F%96%E6%93%8D%E4%BD%9C%5Cn%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%2F%2F%20%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20activeEffect%20%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%E4%B8%AD%5Cn%20%20%20%20bucket.add(activeEffect)%20%20%5Cn%20%20%20%20%2F%2F%20%E8%BF%94%E5%9B%9E%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%7D%2C%5Cn%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AE%BE%E7%BD%AE%E6%93%8D%E4%BD%9C%5Cn%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%2F%2F%20%E6%8A%8A%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BB%8E%E6%A1%B6%E9%87%8C%E5%8F%96%E5%87%BA%E5%B9%B6%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20bucket.forEach(fn%20%3D%3E%20fn())%5Cn%20%20%7D%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B12%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22ck61s%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6bde083f" id="u6bde083f"><span data-lake-id="u981de3af" id="u981de3af">副作用函数的定义：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20effect(fn)%20%7B%5Cn%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20activeEffect%20%3D%20fn%5Cn%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20fn()%5Cn%7D%5Cn%5Cn%2F%2F%20%E4%BC%A0%E5%85%A5%E7%9A%84%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0%E4%B8%AD%E6%9C%89%EF%BC%8C%E8%AF%BB%E5%8F%96%E4%BA%86obj.text%EF%BC%8C%20%E6%89%80%E4%BB%A5%E4%BC%9A%E8%A7%A6%E5%8F%91proxy%20get%EF%BC%8C%E8%80%8C%E8%BF%99%E6%97%B6%20activeEffect%20%E8%A2%AB%E8%B5%8B%E5%80%BC%E7%BB%99%E4%BA%86%E8%BF%99%E4%B8%AA%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0%5Cn%2F%2F%20%E6%89%80%E4%BB%A5%EF%BC%8C%E8%BF%99%E6%97%B6%E5%80%99%E7%9C%9F%E6%AD%A3%E7%9A%84%20%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20%E4%BC%9A%E8%A2%AB%20%E6%A1%B6%20%E6%AD%A3%E5%B8%B8%E6%94%B6%E9%9B%86%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20console.log('effect%20run')%20%2F%2F%20%F0%9F%93%8C%20%5Cn%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D)%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('effect%202%20run')%20%20%2F%2F%20%F0%9F%93%8C%20%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D)%5Cn%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20obj.text%20%3D%20'hello%20vue3'%20%3B%20%2F%2F%20%F0%9F%93%8C%F0%9F%93%8C%20%5Cn%7D%2C%201000)%5Cn%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20'hello%20vue3%201'%20%2F%2F%20%F0%9F%93%8C%F0%9F%93%8C%20%5Cn%7D%2C%202000)%5Cn%5Cn%2F%2F%20%E6%89%93%E5%8D%B0%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%B1%9E%E6%80%A7%20text1%20%EF%BC%8C%E4%B9%9F%E4%BC%9A%E6%89%93%E5%8D%B0%202%20%E6%AC%A1%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text1%20%3D%20'hello%20not%20Exist'%20%2F%2F%20%F0%9F%93%8C%F0%9F%93%8C%20%5Cn%7D%2C%204000)%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B7%2C8%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22ffG6R%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u1f79d52d" id="u1f79d52d"><br></p><p data-lake-id="ufb2c9876" id="ufb2c9876"><span data-lake-id="ub48c86f4" id="ub48c86f4">问：以上代码 </span><code data-lake-id="ue6429e1b" id="ue6429e1b"><span data-lake-id="ub9abe0b4" id="ub9abe0b4">log</span></code><span data-lake-id="ub20420a4" id="ub20420a4"> 的顺序？为什么会打印这8次呢？ 如上标记：📌</span></p><p data-lake-id="u2f95edbb" id="u2f95edbb"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1667052577212-ff9cb3c3-4d35-4f8c-8219-762d2d4e111c.png%22%2C%22taskId%22%3A%22u10000ad6-84ba-4990-95e4-319c9190244%22%2C%22clientId%22%3A%22u9b0bc959-adbb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A329.3991394042969%2C%22height%22%3A254%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A52622%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A666%2C%22originHeight%22%3A514%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22FILTER%20EFFECT%20RUN%20GES%20OS%202%20EFFECT%20RUN%20ES.%20LOAD%20COU%20LED%20FAI%20DEVTOO%20LS%20TO%20MAP%3A%20SOURCE%20S%20EFFECT%201S%20E%20RUN%20G%20EFFECT%20RUN%202S%20EFFECT%202%20RUN%20DSE%20EFFECT%20RUN%204S%20EFFECT%202%20RUN%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A128.9752%2C%22y%22%3A39.37549%2C%22width%22%3A54.071979999999996%2C%22height%22%3A20.57257%2C%22text%22%3A%22FILTER%22%7D%2C%7B%22x%22%3A107.427574%2C%22y%22%3A86.67645%2C%22width%22%3A88.255486%2C%22height%22%3A21.95142%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A211.52191%2C%22y%22%3A90.407875%2C%22width%22%3A40.91187000000002%2C%22height%22%3A17.142884999999993%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A1.6415596%2C%22y%22%3A97.49393%2C%22width%22%3A38.9942304%2C%22height%22%3A19.076375%2C%22text%22%3A%22GES%22%7D%2C%7B%22x%22%3A391.04614%2C%22y%22%3A102.04461%2C%22width%22%3A42.93921%2C%22height%22%3A30.722679999999997%2C%22text%22%3A%22OS%22%7D%2C%7B%22x%22%3A206.92651%2C%22y%22%3A127.7243%2C%22width%22%3A15.39367999999999%2C%22height%22%3A20.411339999999996%2C%22text%22%3A%222%22%7D%2C%7B%22x%22%3A109.06681%2C%22y%22%3A129.13527%2C%22width%22%3A85.46475000000001%2C%22height%22%3A19.859589999999997%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A241.70927%2C%22y%22%3A131.07393%2C%22width%22%3A38.27533%2C%22height%22%3A16.60480000000001%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A3.6785214%2C%22y%22%3A146.00163%2C%22width%22%3A27.579208599999998%2C%22height%22%3A17.235169999999982%2C%22text%22%3A%22ES.%22%7D%2C%7B%22x%22%3A385.31473%2C%22y%22%3A166.70074%2C%22width%22%3A55.43358999999998%2C%22height%22%3A22.853200000000015%2C%22text%22%3A%22LOAD%22%7D%2C%7B%22x%22%3A625.0111%2C%22y%22%3A167.07307%2C%22width%22%3A41.83515%2C%22height%22%3A22.55393000000001%2C%22text%22%3A%22COU%22%7D%2C%7B%22x%22%3A287.18365%2C%22y%22%3A167.2181%2C%22width%22%3A38.45191%2C%22height%22%3A22.196979999999996%2C%22text%22%3A%22LED%22%7D%2C%7B%22x%22%3A238.88995%2C%22y%22%3A166.80731%2C%22width%22%3A35.64855%2C%22height%22%3A22.407790000000006%2C%22text%22%3A%22FAI%22%7D%2C%7B%22x%22%3A107.33144%2C%22y%22%3A168.51009%2C%22width%22%3A116.32776%2C%22height%22%3A21.65942000000001%2C%22text%22%3A%22DEVTOO%20LS%22%7D%2C%7B%22x%22%3A339.3203%2C%22y%22%3A168.774%2C%22width%22%3A28.300700000000006%2C%22height%22%3A21.010099999999994%2C%22text%22%3A%22TO%22%7D%2C%7B%22x%22%3A553.804%2C%22y%22%3A171.62907%2C%22width%22%3A58.225599999999986%2C%22height%22%3A20.808989999999994%2C%22text%22%3A%22MAP%3A%22%7D%2C%7B%22x%22%3A456.1418%2C%22y%22%3A172.3785%2C%22width%22%3A87.78966000000003%2C%22height%22%3A17.589470000000006%2C%22text%22%3A%22SOURCE%22%7D%2C%7B%22x%22%3A0.000015258789%2C%22y%22%3A194.44633%2C%22width%22%3A10.666636741210999%2C%22height%22%3A16.999470000000002%2C%22text%22%3A%22S%22%7D%2C%7B%22x%22%3A107.79822%2C%22y%22%3A208.37752%2C%22width%22%3A92.64844000000001%2C%22height%22%3A21.329800000000006%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A373.47855%2C%22y%22%3A210.91685%2C%22width%22%3A34.95282000000003%2C%22height%22%3A28.925789999999978%2C%22text%22%3A%221S%22%7D%2C%7B%22x%22%3A190.3929%2C%22y%22%3A211.91296%2C%22width%22%3A61.39828%2C%22height%22%3A17.34307000000001%2C%22text%22%3A%22E%20RUN%22%7D%2C%7B%22x%22%3A2.5074723%2C%22y%22%3A241.94647%2C%22width%22%3A12.329179700000001%2C%22height%22%3A20.152380000000022%2C%22text%22%3A%22G%22%7D%2C%7B%22x%22%3A105.957825%2C%22y%22%3A287.44876%2C%22width%22%3A146.53112499999997%2C%22height%22%3A24.60629%2C%22text%22%3A%22EFFECT%20RUN%22%7D%2C%7B%22x%22%3A378.53024%2C%22y%22%3A303.95914%2C%22width%22%3A48.17252000000002%2C%22height%22%3A35.49231000000003%2C%22text%22%3A%222S%22%7D%2C%7B%22x%22%3A104.96305%2C%22y%22%3A329.26175%2C%22width%22%3A123.01514999999999%2C%22height%22%3A24.403250000000014%2C%22text%22%3A%22EFFECT%202%22%7D%2C%7B%22x%22%3A239.01439%2C%22y%22%3A334.82242%2C%22width%22%3A42.985180000000014%2C%22height%22%3A17.775329999999997%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A1.4206719%2C%22y%22%3A337.9039%2C%22width%22%3A33.087178099999996%2C%22height%22%3A19.518550000000005%2C%22text%22%3A%22DSE%22%7D%2C%7B%22x%22%3A106.39526%2C%22y%22%3A370.55887%2C%22width%22%3A89.36727%2C%22height%22%3A23.52019999999999%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A209.95367%2C%22y%22%3A375.86304%2C%22width%22%3A42.88306%2C%22height%22%3A19.465820000000008%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A379.04092%2C%22y%22%3A393.36044%2C%22width%22%3A48.53045999999995%2C%22height%22%3A38.28531000000004%2C%22text%22%3A%224S%22%7D%2C%7B%22x%22%3A107.39066%2C%22y%22%3A411.57056%2C%22width%22%3A87.93620000000001%2C%22height%22%3A22.736479999999972%2C%22text%22%3A%22EFFECT%22%7D%2C%7B%22x%22%3A207.20601%2C%22y%22%3A412.13144%2C%22width%22%3A19.98198000000002%2C%22height%22%3A22.715160000000026%2C%22text%22%3A%222%22%7D%2C%7B%22x%22%3A239.66505%2C%22y%22%3A415.0555%2C%22width%22%3A40.926589999999976%2C%22height%22%3A19.256759999999986%2C%22text%22%3A%22RUN%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2326272a%22%2C%22id%22%3A%22u874687de%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="ufd3983eb" id="ufd3983eb"><span data-lake-id="u7bc0a552" id="u7bc0a552">如上代码，打印设置不存在的属性时</span><code data-lake-id="u74d05e54" id="u74d05e54"><span data-lake-id="ueb99c63d" id="ueb99c63d">obj.text1</span></code><span data-lake-id="u26015618" id="u26015618">，也会执行副作用函数，但副作用函数根本不需要使用到这个属性，</span><strong><span data-lake-id="u0a680950" id="u0a680950">如何解决呢？ </span></strong></p><h2 data-lake-id="elQu9" id="elQu9"><span data-lake-id="u63379007" id="u63379007">四、继续完善：避免不需要的执行</span></h2><p data-lake-id="ued923479" id="ued923479"><span data-lake-id="u553116e2" id="u553116e2">需要重新设计数据结构 以表示 </span><strong><span data-lake-id="uebb33af3" id="uebb33af3">副作用函数与目标之间的关系 </span></strong></p><p data-lake-id="u2cf71a3b" id="u2cf71a3b"><span data-lake-id="u165a6fdf" id="u165a6fdf">以下是数据结构设计：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22effect(function%20fn1()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D)%5Cneffect(function%20fn2()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj.text%5Cn%7D)%5Cn%2F%2F%20%3D%3D%3D%3E%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8F%AF%E8%A1%A8%E7%A4%BA%E4%B8%BA%EF%BC%9A%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj%5Cn%C2%A0%C2%A0%20%5Ct%E2%94%94%E2%94%80%E2%94%80%20text%5Cn%C2%A0%C2%A0%20%20%20%20%5Ct%20%E2%94%9C%E2%94%80%E2%94%80fn1%5Cn%C2%A0%C2%A0%20%20%20%20%5Ct%20%E2%94%94%E2%94%80%E2%94%80%20fn2%5Cn%5Cneffect(function%20fn1()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj.text%5Cn%20%20document.body.innerText%20%3D%20obj.text1%5Cn%20%20document.body.innerText%20%3D%20obj.text2%5Cn%7D)%5Cn%2F%2F%20%3D%3D%3D%3E%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8F%AF%E8%A1%A8%E7%A4%BA%E4%B8%BA%EF%BC%9A%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj%5Cn%20%C2%A0%C2%A0%20%E2%94%9C%E2%94%80%E2%94%80%20text%5Cn%C2%A0%C2%A0%5Ct%E2%94%82%20%5Ct%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%20%C2%A0%C2%A0%20%E2%94%9C%E2%94%80%E2%94%80%20text1%5Cn%C2%A0%5Ct%5Ct%E2%94%82%5Ct%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%C2%A0%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20text2%5Cn%5Ct%5Ct%5Ct%C2%A0%20%C2%A0%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%5Cn%5Cneffect(function%20fn1()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj1.text%5Cn%7D)%5Cneffect(function%20fn2()%20%7B%5Cn%20%20document.body.innerText%20%3D%20obj2.text2%5Cn%7D)%5Cn%2F%2F%20%3D%3D%3D%3E%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8F%AF%E8%A1%A8%E7%A4%BA%E4%B8%BA%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj1%5Cn%20%C2%A0%C2%A0%20%E2%94%9C%E2%94%80%E2%94%80%20text%5Cn%20%20%20%20%E2%94%82%C2%A0%C2%A0%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%20%20%20%20obj2%5Cn%C2%A0%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20text2%5Cn%5Ct%5Ct%20%C2%A0%C2%A0%20%E2%94%94%E2%94%80%E2%94%80%20fn2%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Atrue%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B6%2C17%2C33%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22LGKfc%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uc19fe2ad" id="uc19fe2ad"><span data-lake-id="u2b88f840" id="u2b88f840">所以，可以这么设计</span><code data-lake-id="u7f07f5cf" id="u7f07f5cf"><strong><span data-lake-id="u11c4b464" id="u11c4b464">桶</span></strong></code><span data-lake-id="u97425c24" id="u97425c24">的数据结构：</span></p><ul list="uabe9df3f"><li fid="uca1e5727" data-lake-id="udd6c0489" id="udd6c0489"><span data-lake-id="ud3bdb84c" id="ud3bdb84c"> </span><code data-lake-id="ub894a92e" id="ub894a92e"><span data-lake-id="u0c6d406e" id="u0c6d406e">const bucket = new WeakMap()</span></code></li></ul><ul list="uabe9df3f" data-lake-indent="1"><li fid="uca1e5727" data-lake-id="u0ea76003" id="u0ea76003"><span data-lake-id="u3bddac99" id="u3bddac99"> </span><code data-lake-id="u1e173f09" id="u1e173f09"><span data-lake-id="u6d9529f2" id="u6d9529f2">key</span></code><span data-lake-id="u4bc892a2" id="u4bc892a2"> 为 </span><code data-lake-id="ub795d649" id="ub795d649"><span data-lake-id="uadd51743" id="uadd51743">obj</span></code><span data-lake-id="u69ae1dd4" id="u69ae1dd4"> </span></li><li fid="uca1e5727" data-lake-id="u4eae7b1b" id="u4eae7b1b"><span data-lake-id="u2db5b273" id="u2db5b273"> </span><code data-lake-id="u0775da99" id="u0775da99"><span data-lake-id="uf7951ff9" id="uf7951ff9">value = new Map()</span></code></li></ul><ul list="uabe9df3f" data-lake-indent="2"><li fid="uca1e5727" data-lake-id="u92a25fa6" id="u92a25fa6"><code data-lake-id="uc2d13f66" id="uc2d13f66"><span data-lake-id="u30620940" id="u30620940">key</span></code><span data-lake-id="u883a7a0c" id="u883a7a0c"> 为 </span><code data-lake-id="u8ac9f1da" id="u8ac9f1da"><span data-lake-id="ufbbbd673" id="ufbbbd673">text</span></code></li><li fid="uca1e5727" data-lake-id="u06ff65c0" id="u06ff65c0"><code data-lake-id="ua814604a" id="ua814604a"><span data-lake-id="u234a9042" id="u234a9042">value = new Set()</span></code></li></ul><ul list="uabe9df3f" data-lake-indent="3"><li fid="uca1e5727" data-lake-id="u46374790" id="u46374790"><span data-lake-id="u0a630aae" id="u0a630aae">集合中的值 </span><code data-lake-id="u03f0b818" id="u03f0b818"><span data-lake-id="u70abc48c" id="u70abc48c">value</span></code><span data-lake-id="u205d6761" id="u205d6761"> 为 </span><code data-lake-id="u21812023" id="u21812023"><span data-lake-id="u916c3810" id="u916c3810">key</span></code><span data-lake-id="u216c78c1" id="u216c78c1">所依赖的副作用函数 ，即</span><code data-lake-id="uecc7df57" id="uecc7df57"><span data-lake-id="ua1b5058a" id="ua1b5058a">value = [ fn1 , fn2 , ... ]</span></code></li></ul><p data-lake-id="u4a7794b5" id="u4a7794b5"><span data-lake-id="ud9b7314f" id="ud9b7314f">具体实现如下：</span></p><blockquote data-lake-id="ue4a72e44" id="ue4a72e44"><p data-lake-id="u92dc11f1" id="u92dc11f1"><span data-lake-id="u74847b4b" id="u74847b4b">分别提取出</span><code data-lake-id="u80c64cb7" id="u80c64cb7"><span data-lake-id="u399388f7" id="u399388f7">track</span></code><span data-lake-id="ua392f421" id="ua392f421"> 和 </span><code data-lake-id="u317788db" id="u317788db"><span data-lake-id="u29a6f572" id="u29a6f572">trigger</span></code><span data-lake-id="u0f27a9ff" id="u0f27a9ff"> 以便更好的维护代码和理解代码</span></p></blockquote><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E5%AD%98%E5%82%A8%20%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20%E7%9A%84%E6%A1%B6%5Cnconst%20bucket%20%3D%20new%20WeakMap()%5Cn%5Cn%2F%2F%20%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%5Cnconst%20data%20%3D%20%7B%20text%3A%20'hello%20world'%20%7D%5Cn%2F%2F%20%E5%AF%B9%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BB%A3%E7%90%86%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AF%BB%E5%8F%96%E6%93%8D%E4%BD%9C%5Cn%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%2F%2F%20%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20activeEffect%20%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%E4%B8%AD%5Cn%20%20%20%20track(target%2C%20key)%5Cn%20%20%20%20%2F%2F%20%E8%BF%94%E5%9B%9E%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%7D%2C%5Cn%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AE%BE%E7%BD%AE%E6%93%8D%E4%BD%9C%5Cn%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%2F%2F%20%E6%8A%8A%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BB%8E%E6%A1%B6%E9%87%8C%E5%8F%96%E5%87%BA%E5%B9%B6%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20trigger(target%2C%20key)%5Cn%20%20%7D%5Cn%7D)%5Cn%5Cn%5Cn%2F%2F%20%E7%94%A8%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E5%AD%98%E5%82%A8%E5%BD%93%E5%89%8D%E6%BF%80%E6%B4%BB%E7%9A%84%20effect%20%E5%87%BD%E6%95%B0%5Cnlet%20activeEffect%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20activeEffect%20%3D%20fn%5Cn%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20fn()%5Cn%7D%5Cn%5Cn%5Cnfunction%20track(target%2C%20key)%20%7B%5Cn%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%7D%5Cn%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%7D%5Cn%20%20deps.add(activeEffect)%5Cn%7D%5Cn%5Cnfunction%20trigger(target%2C%20key)%20%7B%5Cn%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20return%5Cn%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20effects%20%26%26%20effects.forEach(fn%20%3D%3E%20fn())%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B1%2C10%2C19%2C37%2C41%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22D8VTg%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u5ab79c9d" id="u5ab79c9d"><span data-lake-id="u84683825" id="u84683825">​</span><br></p><p data-lake-id="u117c759c" id="u117c759c"><span data-lake-id="u4c0c7210" id="u4c0c7210">看看最终的数据结构：</span></p><p data-lake-id="u3431f708" id="u3431f708"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1667120138689-eaf5e5df-aacb-40a9-b143-2b376955fcb3.png%22%2C%22taskId%22%3A%22uf8e9a1fa-b25e-4ab4-9f73-f412baa50da%22%2C%22clientId%22%3A%22u9b0bc959-adbb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A600.6666870117188%2C%22height%22%3A251%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A115209%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1652%2C%22originHeight%22%3A690%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22WEAKMAP%20MAP(1)%7D%20%5BENTRIES%20%5D%20V0%3A%7B0BJECT%3EMAP(1)%7D%20'HELLO%20WORLD'%7D%20KEY%3A1TEXT%3A%20VALUE%3A%20MAP(1)%20%5B%5BENTRIES%5D%5D%2070%3A%7B%5C%22TEXT%5C%22%20%3E%20SET(1)%7D%20KEY%3A%20'%20%5C%22TEXT%5C%22%20VALUE%3ASET(1)%20%5B%5BENTRIES%5D%5D%20%3E%3A%20()%20%3E%20(%20CONSOLE.LOG('EFFECT%20RUN')%20DOCUMENT.BODY.INNERTEXT%20-%20OBJ.TEXT%20%5D%20SIZE%3A%201%20%5B%5BPROTOTYPELL%3ASET%20SIZE%3A%201%20%5B%5BPROTOTYPE%5DL%3AMAP%20%5B%5BPROTOTYPE%5D%5D%3A%20%5D%3AWEAKMAP%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A60.05104%2C%22y%22%3A29.76686%2C%22width%22%3A128.06267%2C%22height%22%3A28.94334%2C%22text%22%3A%22WEAKMAP%22%7D%2C%7B%22x%22%3A342.97394%2C%22y%22%3A30.619967%2C%22width%22%3A133.33936%2C%22height%22%3A30.466279000000004%2C%22text%22%3A%22MAP(1)%7D%22%7D%2C%7B%22x%22%3A114.013336%2C%22y%22%3A69.26538%2C%22width%22%3A172.24478400000004%2C%22height%22%3A28.052110000000013%2C%22text%22%3A%22%5BENTRIES%20%5D%22%7D%2C%7B%22x%22%3A117.635605%2C%22y%22%3A106.79132%2C%22width%22%3A385.208695%2C%22height%22%3A33.68961%2C%22text%22%3A%22V0%3A%7B0BJECT%3EMAP(1)%7D%22%7D%2C%7B%22x%22%3A386.75317%2C%22y%22%3A148.00232%2C%22width%22%3A236.73202999999995%2C%22height%22%3A33.45877999999999%2C%22text%22%3A%22'HELLO%20WORLD'%7D%22%7D%2C%7B%22x%22%3A145.68675%2C%22y%22%3A149.90063%2C%22width%22%3A209.96810000000002%2C%22height%22%3A32.37735000000001%2C%22text%22%3A%22KEY%3A1TEXT%3A%22%7D%2C%7B%22x%22%3A139.88326%2C%22y%22%3A185.9216%2C%22width%22%3A242.50984%2C%22height%22%3A37.29227999999998%2C%22text%22%3A%22VALUE%3A%20MAP(1)%22%7D%2C%7B%22x%22%3A185.20677%2C%22y%22%3A227.43607%2C%22width%22%3A192.5775%2C%22height%22%3A31.56780999999998%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A203.72588%2C%22y%22%3A268.0465%2C%22width%22%3A181.85920000000002%2C%22height%22%3A30.12882000000002%2C%22text%22%3A%2270%3A%7B%5C%22TEXT%5C%22%22%7D%2C%7B%22x%22%3A405.19455%2C%22y%22%3A269.93384%2C%22width%22%3A186.05255000000005%2C%22height%22%3A28.931579999999997%2C%22text%22%3A%22%3E%20SET(1)%7D%22%7D%2C%7B%22x%22%3A241.64133%2C%22y%22%3A309.19144%2C%22width%22%3A96.32476999999997%2C%22height%22%3A32.23892000000001%2C%22text%22%3A%22KEY%3A%20'%22%7D%2C%7B%22x%22%3A320.78967%2C%22y%22%3A310.2023%2C%22width%22%3A113.29467999999997%2C%22height%22%3A27.989530000000002%2C%22text%22%3A%22%5C%22TEXT%5C%22%22%7D%2C%7B%22x%22%3A238.68803%2C%22y%22%3A349.04074%2C%22width%22%3A243.88667%2C%22height%22%3A29.171809999999994%2C%22text%22%3A%22VALUE%3ASET(1)%22%7D%2C%7B%22x%22%3A278.41556%2C%22y%22%3A387.6918%2C%22width%22%3A189.25741%2C%22height%22%3A33.55027000000001%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A302.20645%2C%22y%22%3A419.20273%2C%22width%22%3A1291.6392500000002%2C%22height%22%3A48.820970000000045%2C%22text%22%3A%22%3E%3A%20()%20%3E%20(%20CONSOLE.LOG('EFFECT%20RUN')%20DOCUMENT.BODY.INNERTEXT%20-%20OBJ.TEXT%20%5D%22%7D%2C%7B%22x%22%3A272.29343%2C%22y%22%3A469.95157%2C%22width%22%3A129.13353999999998%2C%22height%22%3A30.46886999999998%2C%22text%22%3A%22SIZE%3A%201%22%7D%2C%7B%22x%22%3A277.49588%2C%22y%22%3A508.37332%2C%22width%22%3A323.62624999999997%2C%22height%22%3A30.48417999999998%2C%22text%22%3A%22%5B%5BPROTOTYPELL%3ASET%22%7D%2C%7B%22x%22%3A181.98206%2C%22y%22%3A553.0447%2C%22width%22%3A119.84024%2C%22height%22%3A27.233439999999973%2C%22text%22%3A%22SIZE%3A%201%22%7D%2C%7B%22x%22%3A184.51648%2C%22y%22%3A587.11615%2C%22width%22%3A324.73444%2C%22height%22%3A34.61175000000003%2C%22text%22%3A%22%5B%5BPROTOTYPE%5DL%3AMAP%22%7D%2C%7B%22x%22%3A93.39274%2C%22y%22%3A628.9863%2C%22width%22%3A250.52983999999998%2C%22height%22%3A30.727999999999952%2C%22text%22%3A%22%5B%5BPROTOTYPE%5D%5D%3A%22%7D%2C%7B%22x%22%3A313.383%2C%22y%22%3A631.0772%2C%22width%22%3A178.82797%2C%22height%22%3A28.606200000000058%2C%22text%22%3A%22%5D%3AWEAKMAP%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%2324272b%22%2C%22id%22%3A%22u571493b4%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><h2 data-lake-id="YMoyi" id="YMoyi"><span data-lake-id="ue615b998" id="ue615b998">五、如何避免分支场景不必要的执行呢？</span></h2><p data-lake-id="u4e528e38" id="u4e528e38"><span data-lake-id="u5890cdb5" id="u5890cdb5">具体场景如下：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22effect(fn1%20%3D%20()%20%3D%3E%20%7B%20%5Cn%20%20console.log('fn1%20run')%5Cn%20%20document.body.innerText%20%3D%20obj.ok%20%3F%20obj.text%20%3A%20'not'%5Cn%7D)%5Cn%2F%2F%20ok%E4%BB%8E%E5%88%9D%E5%A7%8B%E5%80%BCtrue%EF%BC%8C%E4%BC%9A%E8%AF%BB%E5%8F%96text%E7%9A%84%E5%80%BC%EF%BC%8C%E8%A7%A6%E5%8F%91%E8%AE%BE%E7%BD%AE%20%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20%E4%B8%BA%E4%BE%9D%E8%B5%96%20%3D%3D%3D%3E%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8F%AF%E8%A1%A8%E7%A4%BA%E4%B8%BA%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj%5Cn%20%C2%A0%C2%A0%20%E2%94%9C%E2%94%80%E2%94%80%20text%5Cn%C2%A0%C2%A0%5Ct%E2%94%82%20%5Ct%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%20%C2%A0%C2%A0%20%E2%94%94%E2%94%80%E2%94%80%20ok%5Cn%C2%A0%5Ct%20%20%5Ct%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%5Cn%2F%2F%20ok%20%E5%8F%98%E4%B8%BA%20false%E6%97%B6%EF%BC%8C%E7%90%86%E6%83%B3%E7%9A%84%E6%83%85%E5%86%B5%E6%98%AF%20fn1%20%E4%B8%8D%E8%83%BD%E8%A2%AB%20text%20%E5%AF%B9%E5%BA%94%E7%9A%84%E4%BE%9D%E8%B5%96%E6%89%80%E6%94%B6%E9%9B%86%EF%BC%8C%E5%8D%B3%E5%A6%82%E4%B8%8B%EF%BC%9A%5Cn%E2%94%94%E2%94%80%E2%94%80%20obj%5Cn%20%C2%A0%C2%A0%20%E2%94%94%E2%94%80%E2%94%80%20ok%5Cn%C2%A0%5Ct%20%20%5Ct%C2%A0%20%20%E2%94%94%E2%94%80%E2%94%80%20fn1%5Cn%2F%2F%20%E5%8D%B3%EF%BC%9A%E4%B8%8D%E5%85%B3text%E7%9A%84%E4%BA%8B%EF%BC%8C%E4%BD%86%E5%AE%9E%E7%8E%B0%E6%83%85%E5%86%B5%E5%B9%B6%E9%9D%9E%E5%A6%82%E6%AD%A4%E3%80%82%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22QjvK0%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u31a55bf1" id="u31a55bf1"><span data-lake-id="u3082aa8c" id="u3082aa8c">以上</span><code data-lake-id="ub3cf2b73" id="ub3cf2b73"><span data-lake-id="u0cf7b58f" id="u0cf7b58f">obj.ok</span></code><span data-lake-id="u3522ab18" id="u3522ab18">为</span><code data-lake-id="u413eb98c" id="u413eb98c"><span data-lake-id="u65398139" id="u65398139">false</span></code><span data-lake-id="ue9dfadaf" id="ue9dfadaf">时，</span><code data-lake-id="uea16c072" id="uea16c072"><span data-lake-id="ud4bfd415" id="ud4bfd415">obj.text</span></code><span data-lake-id="u88c8cc23" id="u88c8cc23">变化没必要重新执行 </span><code data-lake-id="ufc01725a" id="ufc01725a"><span data-lake-id="ud4cfa5d9" id="ud4cfa5d9">fn1</span></code><span data-lake-id="u5e4d4abe" id="u5e4d4abe">，仅在</span><code data-lake-id="uc1467f4b" id="uc1467f4b"><span data-lake-id="ubd6d74fd" id="ubd6d74fd">obj.ok</span></code><span data-lake-id="u89db2ab0" id="u89db2ab0">为</span><code data-lake-id="u5593b5e8" id="u5593b5e8"><span data-lake-id="u1d6e2225" id="u1d6e2225">true</span></code><span data-lake-id="u7152b446" id="u7152b446">时，才需要重新执行 </span><code data-lake-id="u73e552bb" id="u73e552bb"><span data-lake-id="u4e169979" id="u4e169979">fn1</span></code><span data-lake-id="uf12a545c" id="uf12a545c">。</span></p><p data-lake-id="u4d6fec7d" id="u4d6fec7d"><span data-lake-id="ua40a2d0e" id="ua40a2d0e">​</span><br></p><p data-lake-id="u5ebb981e" id="u5ebb981e"><strong><span data-lake-id="ub931b80f" id="ub931b80f">详细代码如下：</span></strong></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20bucket%20%3D%20new%20WeakMap()%5Cnconst%20data%20%3D%20%7B%5Cn%20%20%20%20text%3A%20'hello%20world'%2C%5Cn%20%20%20%20ok%3A%20true%2C%5Cn%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%20%20%20%20track(target%2C%20key)%5Cn%20%20%20%20%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%20%20%20%20trigger(target%2C%20key)%5Cn%20%20%20%20%7D%5Cn%7D)%5Cn%5Cnfunction%20track(target%2C%20key)%20%7B%5Cn%20%20%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20deps.add(activeEffect)%5Cn%7D%5Cn%5Cnfunction%20trigger(target%2C%20key)%20%7B%5Cn%20%20%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20return%5Cn%20%20%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20%20%20effects%20%26%26%20effects.forEach(fn%20%3D%3E%20fn())%5Cn%7D%5Cn%5Cnlet%20activeEffect%5Cn%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20%20%20activeEffect%20%3D%20fn%5Cn%20%20%20%20fn()%5Cn%7D%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('fn1%20run')%3B%20%2F%2F%20%E5%85%B3%E6%B3%A8%E6%9C%80%E7%BB%88%E6%89%93%E5%8D%B0%E4%BA%86%E5%A4%9A%E5%B0%91%E6%AC%A1%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.ok%20%3F%20obj.text%20%3A%20'not'%5Cn%7D)%5Cnconsole.log(bucket)%3B%5Cn%5Cn%2F%2F%202s%20%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.ok%20%E4%B8%BA%20false%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.ok%20%3D%20false%3B%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E4%BA%86%E4%B8%80%E6%AC%A1%20fn1%5Cn%7D%2C2000)%5Cn%5Cn%2F%2F%204s%20%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.text%20%E7%9A%84%E5%80%BC%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20%5C%22hello%20liguwe%20!%5C%22%20%20%2F%2F%20%E6%9C%80%E7%BB%88%E6%89%A7%E8%A1%8C%E4%BA%86%E4%B8%80%E6%AC%A1%20fn1%20%2C%20%E5%85%B6%E5%AE%9E%E4%B8%8D%E5%B8%8C%E6%9C%9B%E6%89%A7%E8%A1%8C%E7%9A%84%5Cn%7D%2C4000)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%8F%AF%E7%9B%B4%E6%8E%A5%E6%89%A7%E8%A1%8C%E7%9C%8B%E6%95%88%E6%9E%9C%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B43%2C48%2C53%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22EgAlP%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u70990c8b" id="u70990c8b"><span data-lake-id="uccd2ea8f" id="uccd2ea8f">​</span><br></p><p data-lake-id="u82f954bd" id="u82f954bd"><strong><u><span data-lake-id="u90034751" id="u90034751">为什么会出现上面这种情况呢？</span></u></strong></p><blockquote data-lake-id="u303776df" id="u303776df" class="lake-alert lake-alert-color4"><p data-lake-id="ue2427b64" id="ue2427b64"><span data-lake-id="u27f08e4b" id="u27f08e4b">因为</span><code data-lake-id="u734ec3bb" id="u734ec3bb"><span data-lake-id="u63babfb1" id="u63babfb1">fn1</span></code><span data-lake-id="uf0175537" id="uf0175537">已经被 </span><code data-lake-id="u54911a53" id="u54911a53"><span data-lake-id="ud4be0d28" id="ud4be0d28">text</span></code><span data-lake-id="u22ece578" id="u22ece578"> 所依赖的副作用函数集合所收集，</span><code data-lake-id="u89c040b0" id="u89c040b0"><span data-lake-id="ub3c06111" id="ub3c06111">text</span></code><span data-lake-id="u4990e241" id="u4990e241">的变化，肯定会导致 </span><code data-lake-id="ubc2486ec" id="ubc2486ec"><span data-lake-id="ud6e11ba7" id="ud6e11ba7">fn1</span></code><span data-lake-id="u66aba344" id="u66aba344"> 的执行</span></p></blockquote><p data-lake-id="ua13c3189" id="ua13c3189"><strong><span data-lake-id="u372c2922" id="u372c2922">​</span></strong><br></p><p data-lake-id="ueadaf5ec" id="ueadaf5ec"><strong><span data-lake-id="ud5022056" id="ud5022056">解决思路：</span></strong></p><blockquote data-lake-id="u91230973" id="u91230973" class="lake-alert lake-alert-success"><p data-lake-id="u67eb4f3d" id="u67eb4f3d"><span data-lake-id="u102a4059" id="u102a4059">每次 副作用函数</span><code data-lake-id="u130911a8" id="u130911a8"><span data-lake-id="u306efc4f" id="u306efc4f">fn1</span></code><span data-lake-id="u9e6dd015" id="u9e6dd015">执行时，把</span><code data-lake-id="ua4a4db7e" id="ua4a4db7e"><span data-lake-id="u534dd178" id="u534dd178">fn1</span></code><span data-lake-id="u26046324" id="u26046324"> 从 它与之关联的依赖集合中 删除。</span></p></blockquote><p data-lake-id="u4f40d15b" id="u4f40d15b"><span data-lake-id="uf6886c4c" id="uf6886c4c">​</span><br></p><p data-lake-id="u8b94155f" id="u8b94155f"><span data-lake-id="u71cdc8af" id="u71cdc8af">重新设计</span><code data-lake-id="uc35c3bbd" id="uc35c3bbd"><span data-lake-id="u2c347752" id="u2c347752">effect</span></code><span data-lake-id="u9617d839" id="u9617d839"> 函数：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E7%94%A8%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E5%AD%98%E5%82%A8%E5%BD%93%E5%89%8D%E6%BF%80%E6%B4%BB%E7%9A%84%20effect%20%E5%87%BD%E6%95%B0%5Cnlet%20activeEffect%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20cleanup(effectFn)%20%5Cn%20%20%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20fn()%5Cn%20%20%7D%5Cn%20%20%2F%2F%20activeEffect.deps%20%E7%94%A8%E6%9D%A5%E5%AD%98%E5%82%A8%E6%89%80%E6%9C%89%E4%B8%8E%20%E8%AF%A5%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9B%B8%E5%85%B3%20%E7%9A%84%E4%BE%9D%E8%B5%96%E9%9B%86%E5%90%88%5Cn%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20effectFn()%5Cn%7D%5Cn%5Cn%2F%2F%20%E6%B8%85%E9%99%A4%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%20deps%20%E5%B1%9E%E6%80%A7%5Cnfunction%20cleanup(effectFn)%20%7B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20effectFn.deps.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20deps%E9%87%8C%E5%AD%98%E7%9A%84%E6%98%AF%20Set%20%E7%B1%BB%E5%9E%8B%5Cn%20%20%20%20%20%20%20%20const%20deps%20%3D%20effectFn.deps%5Bi%5D%5Cn%20%20%20%20%20%20%20%20deps.delete(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps.length%20%3D%200%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E7%BB%99%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AAdeps%E5%B1%9E%E6%80%A7%EF%BC%8C%E7%9C%9F%E6%AD%A3%E6%89%A7%E8%A1%8C%E5%89%8D%E9%9C%80%E8%A6%81%E6%B8%85%E9%99%A4%20cleanup(effectFn)%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B4%2C18%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22uCLaQ%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6628bd19" id="u6628bd19"><code data-lake-id="u3d455e58" id="u3d455e58"><span data-lake-id="u460285e5" id="u460285e5">track</span></code><span data-lake-id="u57865782" id="u57865782">函数：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20track(target%2C%20key)%20%7B%5Cn%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%7D%5Cn%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%7D%5Cn%20%20deps.add(activeEffect)%5Cn%20%20%5Cn%20%20%2F%2F%20%E6%96%B0%E6%B7%BB%E5%8A%A0%EF%BC%9A%E6%8A%8A%E5%AF%B9%E5%BA%94%E7%9A%84%20key%20%E6%89%80%E4%BE%9D%E8%B5%96%E7%9A%84%20%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E9%9B%86%E5%90%88%20%E8%B5%8B%E5%80%BC%E7%BB%99%20%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84deps%20%E5%B1%9E%E6%80%A7%5Cn%20%20%2F%2F%20%E5%85%B3%E9%94%AE%E7%82%B9%EF%BC%9ASet%E6%9C%AC%E8%BA%AB%E6%98%AF%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%5Cn%20%20activeEffect.deps.push(deps)%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%2C12%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22WJPQc%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ucc2303a6" id="ucc2303a6"><code data-lake-id="u5bfaf18a" id="u5bfaf18a"><span data-lake-id="u0edaf831" id="u0edaf831">trigger</span></code><span data-lake-id="ua693bf98" id="ua693bf98">函数</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20trigger(target%2C%20key)%20%7B%5Cn%20%20%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20return%5Cn%20%20%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20%20%20%2F%2F%20effects%20%26%26%20effects.forEach(fn%20%3D%3E%20fn())%5Cn%20%20%20%20%2F%2F%20%E4%BF%AE%E6%94%B9%E4%B8%BA%5Cn%20%20%20%20const%20effectsToRun%20%3D%20new%20Set()%20%2F%2F%20%E9%87%8D%E6%96%B0%E8%B5%8B%E5%80%BC%E7%BB%99effectsToRun%20%EF%BC%8C%E5%90%A6%E5%88%99%E4%BC%9A%E5%AF%BC%E8%87%B4%E6%AD%BB%E5%BE%AA%E7%8E%AF%EF%BC%8C%E8%A7%81%E9%99%841%5Cn%20%20%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20effectsToRun.add(effectFn))%5Cn%20%20%20%20effectsToRun.forEach(effectFn%20%3D%3E%20effectFn())%3B%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B6%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22FVSaS%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ue48feb31" id="ue48feb31"><br></p><p data-lake-id="u6153d72c" id="u6153d72c"><strong><span data-lake-id="uc0921f2e" id="uc0921f2e">完整代码：</span></strong></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20bucket%20%3D%20new%20WeakMap()%5Cnconst%20data%20%3D%20%7B%5Cn%20%20%20%20text%3A%20'hello%20world'%2C%5Cn%20%20%20%20ok%3A%20true%2C%5Cn%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AF%BB%E5%8F%96%E6%93%8D%E4%BD%9C%5Cn%20%20%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%20activeEffect%20%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%AD%98%E5%82%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%E6%A1%B6%E4%B8%AD%5Cn%20%20%20%20%20%20%20%20track(target%2C%20key)%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%BF%94%E5%9B%9E%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20%2F%2F%20%E6%8B%A6%E6%88%AA%E8%AE%BE%E7%BD%AE%E6%93%8D%E4%BD%9C%5Cn%20%20%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%80%BC%5Cn%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E6%8A%8A%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BB%8E%E6%A1%B6%E9%87%8C%E5%8F%96%E5%87%BA%E5%B9%B6%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20%20%20%20%20trigger(target%2C%20key)%5Cn%20%20%20%20%7D%5Cn%7D)%5Cn%5Cnfunction%20track(target%2C%20key)%20%7B%5Cn%20%20%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20deps.add(activeEffect)%5Cn%20%20%20%20%2F%2F%20%E6%96%B0%E6%B7%BB%E5%8A%A0%5Cn%20%20%20%20activeEffect.deps.push(deps)%5Cn%7D%5Cn%5Cnfunction%20trigger(target%2C%20key)%20%7B%5Cn%20%20%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20return%5Cn%20%20%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20%20%20%2F%2F%20effects%20%26%26%20effects.forEach(fn%20%3D%3E%20fn())%5Cn%20%20%20%20%2F%2F%20%E4%BF%AE%E6%94%B9%E4%B8%BA%5Cn%20%20%20%20const%20effectsToRun%20%3D%20new%20Set()%5Cn%20%20%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20effectsToRun.add(effectFn))%5Cn%20%20%20%20effectsToRun.forEach(effectFn%20%3D%3E%20effectFn())%3B%5Cn%7D%5Cn%5Cnlet%20activeEffect%5Cn%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20%20%20%2F%2F%20activeEffect%20%3D%20fn%5Cn%20%20%20%20%2F%2F%20fn()%5Cn%20%20%20%20%2F%2F%20%3D%3D%3D%3E%20%E4%BF%AE%E6%94%B9%E4%B8%BA%EF%BC%9A%5Cn%20%20%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20%20%20%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20%20%20%20%20fn()%5Cn%20%20%20%20%7D%5Cn%20%20%20%20%2F%2F%20activeEffect.deps%20%E7%94%A8%E6%9D%A5%E5%AD%98%E5%82%A8%E6%89%80%E6%9C%89%E4%B8%8E%20%E8%AF%A5%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9B%B8%E5%85%B3%20%E7%9A%84%E4%BE%9D%E8%B5%96%E9%9B%86%E5%90%88%5Cn%20%20%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20%20%20effectFn()%5Cn%7D%5Cn%5Cn%2F%2F%20%E6%B8%85%E9%99%A4%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9A%84%20deps%20%E5%B1%9E%E6%80%A7%5Cnfunction%20cleanup(effectFn)%20%7B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20effectFn.deps.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20const%20deps%20%3D%20effectFn.deps%5Bi%5D%5Cn%20%20%20%20%20%20%20%20deps.delete(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps.length%20%3D%200%5Cn%7D%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('fn1%20run')%3B%5Cn%20%20%20%20document.body.innerText%20%3D%20obj.ok%20%3F%20obj.text%20%3A%20'not'%5Cn%7D)%5Cnconsole.log('0s%3A'%2C%20bucket)%3B%5Cn%5Cn%2F%2F%202s%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.ok%20%E4%B8%BA%20false%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.ok%20%3D%20false%3B%5Cn%20%20%20%20console.log('2s%3A'%2C%20bucket)%3B%5Cn%7D%2C%202000)%5Cn%5Cn%5Cn%2F%2F%204s%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.text%20%E7%9A%84%E5%80%BC%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20%5C%22hello%20liguwe%20!%5C%22%5Cn%20%20%20%20console.log('4s%3A'%2C%20bucket)%3B%5Cn%7D%2C%204000)%5Cn%5Cn%5Cn%2F%2F%206s%20%E5%90%8E%E6%9B%B4%E6%94%B9%20obj.text%20%E7%9A%84%E5%80%BC%5CnsetTimeout(()%20%3D%3E%20%7B%5Cn%20%20%20%20obj.text%20%3D%20%5C%22hello%20liguwe%20!%5C%22%5Cn%20%20%20%20console.log('6s%3A'%2C%20bucket)%3B%5Cn%7D%2C%206000)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E6%89%A7%E8%A1%8C%EF%BC%8C%E5%85%B3%E6%B3%A8%E6%89%93%E5%8D%B0%E7%9A%84%E5%80%BC%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E4%B8%80%E6%A0%B7%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22SJwT7%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="udde5a258" id="udde5a258"><br></p><p data-lake-id="ue5465720" id="ue5465720"><strong><span data-lake-id="u5292b35b" id="u5292b35b">测试看是否符合预期：</span></strong></p><p data-lake-id="u878545fe" id="u878545fe"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1667130474516-f1cabc32-bd82-4ba4-b289-202437a8a83f.png%22%2C%22taskId%22%3A%22u6c938dd7-a5e1-4b47-ad8e-03c4dad3e26%22%2C%22clientId%22%3A%22u9b0bc959-adbb-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A841.6619262695312%2C%22height%22%3A551%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A441694%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A2330%2C%22originHeight%22%3A1526%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22%E5%8F%AA%E6%89%93%E5%8D%B0%E4%BA%86%E4%B8%A4%E6%AC%A1%2C%E5%90%8E%E9%9D%A2%E4%BF%AE%E6%94%B9TEXT%E5%80%BC%2C%E4%B8%8D%E4%BC%9A%E8%A7%A6%E5%8F%91%E9%87%8D%E6%96%B0%E6%89%A7%E8%A1%8C%20FN1%20%20RUN%200S%3AWEAKMAP%20%7B%7B...MAP(2)%7D%20%5B%5BENTRIES%5D%5D%20%3A%3A%7B0BJECT%20%3EMAP(2)%3E%20%60KEY%3AFTEXT%3A'HELLO%20LIQUWE%20!'%2COK%3AFALSEL%20VALUE%3AMAP(2)%20%5BENTRIES%20OK%E5%B1%9E%E6%80%A7%E6%AD%A3%E5%B8%B8%E6%94%B6%E9%9B%86%2C%E4%BD%86TEXT%E5%B9%B6%E6%B2%A1%E6%9C%89%E5%AF%BC%E8%87%B4%E6%94%B6%E9%9B%86%200%3A%7B%5C%22OK%5C%22%3ESET(1)%3E%20%3A%5C%22TEXT%5C%22%20SET(0))%20SIZE%3A%202%20%5BPROTOTYPE%5D%5D%3AMAP%20%5B%5BPROTOTYPELL%3AWEAKMAP%20LOAD%20CANTENT%20FOR%20SHRONE%20EXTENSIONI%2F%2FNAPJ9SACHILNCBBOOKKOSBABAKAREHI%2FVLCTUALIZED-LIST.NIN-%20SYSTEN%20ERTE%20DEVTOOLS%20FAILED%20TO%20LOAD%20SOURCE%20MAP%3A%20COULD%20NOT%20LOAD%20CONTENT%20FOR%20FN1%20RUN%20%3EMAP(2)%3E%202S%3AWEAKMAP%20%7B%7B...%5D%204S%20WEAKMAP%20%7B%7B..J%3EMAP(2)%3B1%20%5B%5BENTRIES%5D%5D%20%3EKEY%3A%20%7BTEXT%3A%20'HELLO%20LIGUWE%20!'%2C%20OK%3A%20FALSE%5D%20%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%2CCLEANUP%E4%B9%9F%E4%BC%9A%E5%AF%BC%E8%87%B4BUCKET%E4%B8%AD%E7%9A%84%E5%80%BC%E5%8F%98%E5%8C%96%20VALUE%3AMAP(2)%20%5B%5BENTRIES%5D%5D%20V0%3A%7B'OK%5C%22%3E%20SET(1)%7D%20KEY%3A%20%5C%22OK%5C%22%20VVALUE%3ASET(1)%20%5B%5BENTRIES%5D%5D%5D%20CLAANUPLERFOCTFO)%20%2F%2F%2F%2F%2F%2F%2F%2F%20NLVEET%20R%20ACTIVEET%20ACTIVEERT%20ACT%20ACTIVEETTIVEET%20ACT%20ACT%20R%20OFFECTFN%20FO()%20VALUE%3A%20()()%20%5BSET(1)%5D%20DEPS%3A%20LENGTH%20'EFFECTFN''%20NAME%3A%20DE%20FUNCTIONS%20OR%20THE%20ARGU%20PROPERTIES%20MAY%20NOT%20BE%20ACCESSED%20ON%20STRICT%20MODE%20F%20ARGUMENTS%3A%20%5BEXCEPTION%3A%20TYPEERROR%3A'CALLER'%2C'CALLEE'%2C%20AND%20'ARGUMENTS'%20CALLER%3A%20(...)%20%5B%5BFUNCTIONLOCATION%5D%5D%3A%20CODE6.HTML%3F%20IJT%E4%B8%89I7HH.%2CD-RELOAD%20ON%20SAVE%3A58%20%5B%5BPROTOTYPEL%5D%3AF%20()%20%5B%5BSCOPES%5D%5D%3A%20SCOPES%5B3%5D%20SIZE%3A1%20%5B%5BPROTOTYPE%5D%5D%3ASET%201%3A%7B'TEXT%5C%22%20%3E%20SET(0)%3E%20SIZE%3A%20%20%202%20%5B%5BPROTOTYPE%5D%5D%3AMAP%20%5B%5BPROTOTYPE%5D%5D%3AWEAKMAP%206S%3AWEAKMAP%20%7B%7B%2F%2F%3E%3EMAP(2)%3E%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A1161.0021%2C%22y%22%3A41.91654%2C%22width%22%3A823.5505%2C%22height%22%3A43.972796%2C%22text%22%3A%22%E5%8F%AA%E6%89%93%E5%8D%B0%E4%BA%86%E4%B8%A4%E6%AC%A1%2C%E5%90%8E%E9%9D%A2%E4%BF%AE%E6%94%B9TEXT%E5%80%BC%2C%E4%B8%8D%E4%BC%9A%E8%A7%A6%E5%8F%91%E9%87%8D%E6%96%B0%E6%89%A7%E8%A1%8C%22%7D%2C%7B%22x%22%3A89.54841%2C%22y%22%3A87.14456%2C%22width%22%3A100.65713000000001%2C%22height%22%3A22.951310000000007%2C%22text%22%3A%22FN1%20%20RUN%22%7D%2C%7B%22x%22%3A87.92707%2C%22y%22%3A124.90939%2C%22width%22%3A436.46313000000004%2C%22height%22%3A31.497209999999995%2C%22text%22%3A%220S%3AWEAKMAP%20%7B%7B...MAP(2)%7D%22%7D%2C%7B%22x%22%3A203.48999%2C%22y%22%3A163.83057%2C%22width%22%3A148.97284%2C%22height%22%3A22.97236000000001%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A218.90196%2C%22y%22%3A191.73358%2C%22width%22%3A303.11803999999995%2C%22height%22%3A30.29242000000002%2C%22text%22%3A%22%3A%3A%7B0BJECT%20%3EMAP(2)%3E%22%7D%2C%7B%22x%22%3A223.03969%2C%22y%22%3A224.89043%2C%22width%22%3A597.4461100000001%2C%22height%22%3A25.971720000000005%2C%22text%22%3A%22%60KEY%3AFTEXT%3A'HELLO%20LIQUWE%20!'%2COK%3AFALSEL%22%7D%2C%7B%22x%22%3A237.34511%2C%22y%22%3A258.25778%2C%22width%22%3A184.86130999999997%2C%22height%22%3A24.80391999999995%2C%22text%22%3A%22VALUE%3AMAP(2)%22%7D%2C%7B%22x%22%3A266.64108%2C%22y%22%3A291.70575%2C%22width%22%3A121.04758000000004%2C%22height%22%3A21.06600999999995%2C%22text%22%3A%22%5BENTRIES%22%7D%2C%7B%22x%22%3A1510.4381%2C%22y%22%3A304.7342%2C%22width%22%3A659.5498999999998%2C%22height%22%3A43.62115%2C%22text%22%3A%22OK%E5%B1%9E%E6%80%A7%E6%AD%A3%E5%B8%B8%E6%94%B6%E9%9B%86%2C%E4%BD%86TEXT%E5%B9%B6%E6%B2%A1%E6%9C%89%E5%AF%BC%E8%87%B4%E6%94%B6%E9%9B%86%22%7D%2C%7B%22x%22%3A284.77084%2C%22y%22%3A320.21347%2C%22width%22%3A277.02876000000003%2C%22height%22%3A26.165070000000014%2C%22text%22%3A%220%3A%7B%5C%22OK%5C%22%3ESET(1)%3E%22%7D%2C%7B%22x%22%3A312.0207%2C%22y%22%3A350.54977%2C%22width%22%3A121.00188000000003%2C%22height%22%3A25.353399999999965%2C%22text%22%3A%22%3A%5C%22TEXT%5C%22%22%7D%2C%7B%22x%22%3A485.3966%2C%22y%22%3A353.16153%2C%22width%22%3A105.73160000000001%2C%22height%22%3A25.144349999999974%2C%22text%22%3A%22SET(0))%22%7D%2C%7B%22x%22%3A270.06714%2C%22y%22%3A386.22052%2C%22width%22%3A114.18283000000002%2C%22height%22%3A24.008759999999995%2C%22text%22%3A%22SIZE%3A%202%22%7D%2C%7B%22x%22%3A252.93372%2C%22y%22%3A413.4153%2C%22width%22%3A268.46558000000005%2C%22height%22%3A30.38141999999999%2C%22text%22%3A%22%5BPROTOTYPE%5D%5D%3AMAP%22%7D%2C%7B%22x%22%3A190.79425%2C%22y%22%3A449.42264%2C%22width%22%3A310.15410999999995%2C%22height%22%3A25.53915999999998%2C%22text%22%3A%22%5B%5BPROTOTYPELL%3AWEAKMAP%22%7D%2C%7B%22x%22%3A764.52014%2C%22y%22%3A490.1158%2C%22width%22%3A1554.56686%2C%22height%22%3A27.92796000000004%2C%22text%22%3A%22LOAD%20CANTENT%20FOR%20SHRONE%20EXTENSIONI%2F%2FNAPJ9SACHILNCBBOOKKOSBABAKAREHI%2FVLCTUALIZED-LIST.NIN-%20SYSTEN%20ERTE%22%7D%2C%7B%22x%22%3A82.94513%2C%22y%22%3A490.4526%2C%22width%22%3A897.6318699999999%2C%22height%22%3A26.836769999999945%2C%22text%22%3A%22DEVTOOLS%20FAILED%20TO%20LOAD%20SOURCE%20MAP%3A%20COULD%20NOT%20LOAD%20CONTENT%20FOR%22%7D%2C%7B%22x%22%3A89.845726%2C%22y%22%3A534.9488%2C%22width%22%3A96.27315399999999%2C%22height%22%3A22.17046000000005%2C%22text%22%3A%22FN1%20RUN%22%7D%2C%7B%22x%22%3A359.39014%2C%22y%22%3A572.5805%2C%22width%22%3A141.71942%2C%22height%22%3A27.688670000000002%2C%22text%22%3A%22%3EMAP(2)%3E%22%7D%2C%7B%22x%22%3A90.22879%2C%22y%22%3A576.6902%2C%22width%22%3A288.42276%2C%22height%22%3A22.165100000000052%2C%22text%22%3A%222S%3AWEAKMAP%20%7B%7B...%5D%22%7D%2C%7B%22x%22%3A88.801926%2C%22y%22%3A619.63556%2C%22width%22%3A33.24970400000001%2C%22height%22%3A21.090239999999994%2C%22text%22%3A%224S%22%7D%2C%7B%22x%22%3A103.40364%2C%22y%22%3A645.8803%2C%22width%22%3A376.51714%2C%22height%22%3A29.553969999999936%2C%22text%22%3A%22WEAKMAP%20%7B%7B..J%3EMAP(2)%3B1%22%7D%2C%7B%22x%22%3A132.07204%2C%22y%22%3A682.2806%2C%22width%22%3A151.68251%2C%22height%22%3A23.093669999999975%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A169.16191%2C%22y%22%3A743.15375%2C%22width%22%3A593.39409%2C%22height%22%3A27.236450000000104%2C%22text%22%3A%22%3EKEY%3A%20%7BTEXT%3A%20'HELLO%20LIGUWE%20!'%2C%20OK%3A%20FALSE%5D%22%7D%2C%7B%22x%22%3A1271.0764%2C%22y%22%3A750.58545%2C%22width%22%3A763.777%2C%22height%22%3A49.12518%2C%22text%22%3A%22%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%2CCLEANUP%E4%B9%9F%E4%BC%9A%E5%AF%BC%E8%87%B4BUCKET%E4%B8%AD%E7%9A%84%E5%80%BC%E5%8F%98%E5%8C%96%22%7D%2C%7B%22x%22%3A177.19699%2C%22y%22%3A774.94446%2C%22width%22%3A191.87488%2C%22height%22%3A27.931839999999966%2C%22text%22%3A%22VALUE%3AMAP(2)%22%7D%2C%7B%22x%22%3A204.41193%2C%22y%22%3A808.1403%2C%22width%22%3A154.69951999999998%2C%22height%22%3A25.999349999999936%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%22%7D%2C%7B%22x%22%3A214.94891%2C%22y%22%3A836.3315%2C%22width%22%3A291.85059%2C%22height%22%3A29.472759999999994%2C%22text%22%3A%22V0%3A%7B'OK%5C%22%3E%20SET(1)%7D%22%7D%2C%7B%22x%22%3A250.51526%2C%22y%22%3A871.6489%2C%22width%22%3A135.35735999999997%2C%22height%22%3A27.489599999999996%2C%22text%22%3A%22KEY%3A%20%5C%22OK%5C%22%22%7D%2C%7B%22x%22%3A244.3264%2C%22y%22%3A902.9621%2C%22width%22%3A196.79029999999997%2C%22height%22%3A26.875600000000077%2C%22text%22%3A%22VVALUE%3ASET(1)%22%7D%2C%7B%22x%22%3A275.42865%2C%22y%22%3A936.7531%2C%22width%22%3A157.24399%2C%22height%22%3A26.34809999999993%2C%22text%22%3A%22%5B%5BENTRIES%5D%5D%5D%22%7D%2C%7B%22x%22%3A468.00565%2C%22y%22%3A965.3292%2C%22width%22%3A1782.87255%2C%22height%22%3A29.20640000000003%2C%22text%22%3A%22CLAANUPLERFOCTFO)%20%2F%2F%2F%2F%2F%2F%2F%2F%20NLVEET%20R%20ACTIVEET%20ACTIVEERT%20ACT%20ACTIVEETTIVEET%20ACT%20ACT%20R%20OFFECTFN%20FO()%22%7D%2C%7B%22x%22%3A316.60345%2C%22y%22%3A1001.51166%2C%22width%22%3A97.80854999999997%2C%22height%22%3A23.539139999999975%2C%22text%22%3A%22VALUE%3A%22%7D%2C%7B%22x%22%3A425.98773%2C%22y%22%3A1001.21423%2C%22width%22%3A121.31232000000006%2C%22height%22%3A24.423070000000052%2C%22text%22%3A%22()()%22%7D%2C%7B%22x%22%3A440.58517%2C%22y%22%3A1034.2124%2C%22width%22%3A110.85318000000001%2C%22height%22%3A23.6096%2C%22text%22%3A%22%5BSET(1)%5D%22%7D%2C%7B%22x%22%3A335.88144%2C%22y%22%3A1034.6178%2C%22width%22%3A85.80716000000001%2C%22height%22%3A23.278299999999945%2C%22text%22%3A%22DEPS%3A%22%7D%2C%7B%22x%22%3A355.9553%2C%22y%22%3A1068.44%2C%22width%22%3A80.59163999999998%2C%22height%22%3A21.17619999999988%2C%22text%22%3A%22LENGTH%22%7D%2C%7B%22x%22%3A430.80972%2C%22y%22%3A1096.6865%2C%22width%22%3A148.75863999999996%2C%22height%22%3A25.04860000000008%2C%22text%22%3A%22'EFFECTFN''%22%7D%2C%7B%22x%22%3A348.44257%2C%22y%22%3A1099.7052%2C%22width%22%3A93.85138%2C%22height%22%3A21.92829999999981%2C%22text%22%3A%22NAME%3A%22%7D%2C%7B%22x%22%3A1998.0863%2C%22y%22%3A1127.6744%2C%22width%22%3A336.40369999999984%2C%22height%22%3A29.353599999999915%2C%22text%22%3A%22DE%20FUNCTIONS%20OR%20THE%20ARGU%22%7D%2C%7B%22x%22%3A1356.958%2C%22y%22%3A1128.1694%2C%22width%22%3A678.1464999999998%2C%22height%22%3A27.723999999999933%2C%22text%22%3A%22PROPERTIES%20MAY%20NOT%20BE%20ACCESSED%20ON%20STRICT%20MODE%20F%22%7D%2C%7B%22x%22%3A349.7072%2C%22y%22%3A1129.9875%2C%22width%22%3A994.7508%2C%22height%22%3A27.68859999999995%2C%22text%22%3A%22ARGUMENTS%3A%20%5BEXCEPTION%3A%20TYPEERROR%3A'CALLER'%2C'CALLEE'%2C%20AND%20'ARGUMENTS'%22%7D%2C%7B%22x%22%3A351.67804%2C%22y%22%3A1158.5732%2C%22width%22%3A215.81439%2C%22height%22%3A32.27970000000005%2C%22text%22%3A%22CALLER%3A%20(...)%22%7D%2C%7B%22x%22%3A352.88666%2C%22y%22%3A1189.6603%2C%22width%22%3A897.2451400000001%2C%22height%22%3A34.710399999999936%2C%22text%22%3A%22%5B%5BFUNCTIONLOCATION%5D%5D%3A%20CODE6.HTML%3F%20IJT%E4%B8%89I7HH.%2CD-RELOAD%20ON%20SAVE%3A58%22%7D%2C%7B%22x%22%3A348.66562%2C%22y%22%3A1220.631%2C%22width%22%3A287.62608%2C%22height%22%3A33.73419999999987%2C%22text%22%3A%22%5B%5BPROTOTYPEL%5D%3AF%20()%22%7D%2C%7B%22x%22%3A350.50073%2C%22y%22%3A1249.7874%2C%22width%22%3A302.59337000000005%2C%22height%22%3A33.184400000000096%2C%22text%22%3A%22%5B%5BSCOPES%5D%5D%3A%20SCOPES%5B3%5D%22%7D%2C%7B%22x%22%3A274.76624%2C%22y%22%3A1287.4716%2C%22width%22%3A126.07562000000001%2C%22height%22%3A25.813699999999926%2C%22text%22%3A%22SIZE%3A1%22%7D%2C%7B%22x%22%3A265.23163%2C%22y%22%3A1316.4031%2C%22width%22%3A277.55413999999996%2C%22height%22%3A28.053900000000112%2C%22text%22%3A%22%5B%5BPROTOTYPE%5D%5D%3ASET%22%7D%2C%7B%22x%22%3A225.56247%2C%22y%22%3A1350.973%2C%22width%22%3A307.98103000000003%2C%22height%22%3A28.76170000000002%2C%22text%22%3A%221%3A%7B'TEXT%5C%22%20%3E%20SET(0)%3E%22%7D%2C%7B%22x%22%3A206.2696%2C%22y%22%3A1385.2739%2C%22width%22%3A98.96123000000003%2C%22height%22%3A24.010800000000017%2C%22text%22%3A%22SIZE%3A%20%20%202%22%7D%2C%7B%22x%22%3A188.024%2C%22y%22%3A1415.7617%2C%22width%22%3A279.80104%2C%22height%22%3A27.11069999999995%2C%22text%22%3A%22%5B%5BPROTOTYPE%5D%5D%3AMAP%22%7D%2C%7B%22x%22%3A127.0054%2C%22y%22%3A1447.1515%2C%22width%22%3A327.24773999999996%2C%22height%22%3A29.23610000000008%2C%22text%22%3A%22%5B%5BPROTOTYPE%5D%5D%3AWEAKMAP%22%7D%2C%7B%22x%22%3A86.22081%2C%22y%22%3A1491.2908%2C%22width%22%3A415.24483%2C%22height%22%3A28.14149999999995%2C%22text%22%3A%226S%3AWEAKMAP%20%7B%7B%2F%2F%3E%3EMAP(2)%3E%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0%2C1%2C1%5D%2C%22averageHue%22%3A%22%23242528%22%2C%22id%22%3A%22ucd1ce418%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><h3 data-lake-id="dZOoS" id="dZOoS"><span data-lake-id="u159d817f" id="u159d817f">附1：死循环原因</span></h3><ul list="u6e6fa396"><li fid="u2eba6825" data-lake-id="uc95920a7" id="uc95920a7"><span data-lake-id="u44cc7012" id="u44cc7012">因为副作用的执行会导致 </span><code data-lake-id="ub824049f" id="ub824049f"><span data-lake-id="u0ee27704" id="u0ee27704">effect fn</span></code><span data-lake-id="udb6ea04c" id="udb6ea04c"> 被 清除，然后又被 收集，就类似于下面的代码</span></li><li fid="u2eba6825" data-lake-id="u1926a0fa" id="u1926a0fa"><code data-lake-id="u8d3d7fc1" id="u8d3d7fc1"><span data-lake-id="ud46368da" id="ud46368da">cleanup</span></code><span data-lake-id="u701f2a6d" id="u701f2a6d"> 清除，但是 真正副作用函数执行时，触发了 </span><code data-lake-id="ud83a260d" id="ud83a260d"><span data-lake-id="ua8296f8e" id="ua8296f8e">obj</span></code><span data-lake-id="u59039c26" id="u59039c26"> 的读取操作，又能导致重新收集</span></li></ul><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20set%20%3D%20new%20Set(%5B1%5D)%5Cn%5Cnconst%20newSet%20%3D%20new%20Set(set)%5CnnewSet.forEach(item%20%3D%3E%20%7B%5Cn%20%20set.delete(1)%5Cn%20%20set.add(1)%5Cn%20%20console.log(999)%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__height%22%3A174.6292724609375%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22QSB1e%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%2C%22height%22%3A174.6292724609375%7D"></card><p data-lake-id="uc8a34633" id="uc8a34633"><br></p><h2 data-lake-id="uSV16" id="uSV16"><span data-lake-id="ue68d0966" id="ue68d0966">六、当</span><code data-lake-id="u741a69a9" id="u741a69a9"><span data-lake-id="u3d583126" id="u3d583126">effect</span></code><span data-lake-id="u6e5f549a" id="u6e5f549a">函数嵌套时？</span></h2><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20bucket%20%3D%20new%20WeakMap()%5Cnconst%20data%20%3D%20%7Bfoo%3A%20true%2C%20bar%3A%20true%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%20%7B%5Cn%20%20%20%20get(target%2C%20key)%20%7B%5Cn%20%20%20%20%20%20%20%20track(target%2C%20key)%5Cn%20%20%20%20%20%20%20%20return%20target%5Bkey%5D%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20set(target%2C%20key%2C%20newVal)%20%7B%5Cn%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20newVal%5Cn%20%20%20%20%20%20%20%20trigger(target%2C%20key)%5Cn%20%20%20%20%7D%5Cn%7D)%5Cn%5Cnfunction%20track(target%2C%20key)%20%7B%5Cn%20%20%20%20let%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20%7B%5Cn%20%20%20%20%20%20%20%20bucket.set(target%2C%20(depsMap%20%3D%20new%20Map()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20let%20deps%20%3D%20depsMap.get(key)%5Cn%20%20%20%20if%20(!deps)%20%7B%5Cn%20%20%20%20%20%20%20%20depsMap.set(key%2C%20(deps%20%3D%20new%20Set()))%5Cn%20%20%20%20%7D%5Cn%20%20%20%20deps.add(activeEffect)%5Cn%20%20%20%20activeEffect.deps.push(deps)%5Cn%7D%5Cn%5Cnfunction%20trigger(target%2C%20key)%20%7B%5Cn%20%20%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20%20%20if%20(!depsMap)%20return%5Cn%20%20%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20%20%20const%20effectsToRun%20%3D%20new%20Set()%5Cn%20%20%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20effectsToRun.add(effectFn))%5Cn%20%20%20%20effectsToRun.forEach(effectFn%20%3D%3E%20effectFn())%5Cn%7D%5Cn%5Cnlet%20activeEffect%5Cn%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20%20%20%20%20fn()%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%20%20effectFn()%5Cn%7D%5Cn%5Cnfunction%20cleanup(effectFn)%20%7B%5Cn%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20effectFn.deps.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20%20%20%20%20const%20deps%20%3D%20effectFn.deps%5Bi%5D%5Cn%20%20%20%20%20%20%20%20deps.delete(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps.length%20%3D%200%5Cn%7D%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('fn1%20run')%3B%5Cn%20%20%20%20effect(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20console.log('fn2%20run')%3B%5Cn%20%20%20%20%20%20%20%20temp2%20%3D%20obj.bar%3B%5Cn%20%20%20%20%7D)%5Cn%20%20%20%20temp1%20%3D%20obj.foo%3B%5Cn%7D)%5Cn%5Cnobj.foo%20%3D%20false%3B%5Cnobj.bar%20%3D%20false%3B%5Cnobj.foo%20%3D%20true%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22effect%E5%87%BD%E6%95%B0%E5%B5%8C%E5%A5%97%E6%97%B6%EF%BC%8C%E4%B8%8B%E9%9D%A2%E4%BB%A3%E7%A0%81%E4%BC%9A%E6%80%8E%E4%B9%88%E6%89%93%E5%8D%B0%EF%BC%9F%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B56%2C58%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22e7Jen%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uc515596a" id="uc515596a"><br></p><p data-lake-id="uf8fa34ce" id="uf8fa34ce"><card type="inline" name="image" value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F687303%2F1668340421785-fbff1de0-5445-41bc-aad4-df60668a9625.png%22%2C%22taskId%22%3A%22u4bad64a2-96c2-41ad-af60-bfde7b2b731%22%2C%22clientId%22%3A%22ub846f75e-7f94-4%22%2C%22originalType%22%3A%22binary%22%2C%22width%22%3A519%2C%22height%22%3A501%2C%22linkTarget%22%3A%22_blank%22%2C%22name%22%3A%22image.png%22%2C%22size%22%3A134102%2C%22from%22%3A%22paste%22%2C%22originWidth%22%3A1136%2C%22originHeight%22%3A1096%2C%22ratio%22%3A1%2C%22status%22%3A%22done%22%2C%22style%22%3A%22none%22%2C%22search%22%3A%22%20FUNCTION%20CLEANUP(EFFECTFN)%20%7B%20FOR%20(LET%20I%20-%20O%3B%20I%20%3C%20EFFECTFN.DEPS.LENGTH%3B%20I%2B%2B)%20%7B%20%20CONST%20DEPS%20%E4%B8%89%20EFFECTFN.DEPS%5BI%5D%20DEPS.DELETE(EFFECTFN)%20EFFECTFN.DEPS.LENGTH%200%20EFFECT(()%20%E4%B8%89%3E%20%7B%20%20CONSOLE.LOG('FN1%20RUN')%3B%20EFFECT(()%20%E5%B7%9DV%20%20CONSOLE.LOG('FN2%20RUN'%20%E4%B8%89%20OBJ.BAR%3B%20TEMP2%2011%20TEMP1%20OBJ.FOO%3B%20%E4%BA%86)%20OBJ.FOO%20%E4%B8%89%20FALSE%3B%20OBJ.BAR%20FALSE%3B%20OBJ.%20FOO%20RUE%3B%20FN1%20RUR%20FN2%20RUL%20FN2%20RUN%20FN2%20RUN%22%2C%22ocrLocations%22%3A%5B%7B%22x%22%3A68.28606%2C%22y%22%3A26.478994%2C%22width%22%3A505.37599%2C%22height%22%3A35.651366%2C%22text%22%3A%22%20FUNCTION%20CLEANUP(EFFECTFN)%20%7B%22%7D%2C%7B%22x%22%3A140.16013%2C%22y%22%3A61.366154%2C%22width%22%3A869.03437%2C%22height%22%3A36.337996%2C%22text%22%3A%22FOR%20(LET%20I%20-%20O%3B%20I%20%3C%20EFFECTFN.DEPS.LENGTH%3B%20I%2B%2B)%20%7B%22%7D%2C%7B%22x%22%3A211.51593%2C%22y%22%3A98.33587%2C%22width%22%3A520.10791%2C%22height%22%3A34.39463000000001%2C%22text%22%3A%22%20CONST%20DEPS%20%E4%B8%89%20EFFECTFN.DEPS%5BI%5D%22%7D%2C%7B%22x%22%3A209.8368%2C%22y%22%3A133.6677%2C%22width%22%3A379.00744%2C%22height%22%3A35.30572000000001%2C%22text%22%3A%22DEPS.DELETE(EFFECTFN)%22%7D%2C%7B%22x%22%3A140.29897%2C%22y%22%3A203.78609%2C%22width%22%3A361.15023%2C%22height%22%3A30.957580000000007%2C%22text%22%3A%22EFFECTFN.DEPS.LENGTH%22%7D%2C%7B%22x%22%3A512.70844%2C%22y%22%3A205.99435%2C%22width%22%3A60.76526000000001%2C%22height%22%3A25.832510000000013%2C%22text%22%3A%220%22%7D%2C%7B%22x%22%3A65.26619%2C%22y%22%3A305.6862%2C%22width%22%3A259.03154%2C%22height%22%3A34.51125000000002%2C%22text%22%3A%22EFFECT(()%20%E4%B8%89%3E%20%7B%22%7D%2C%7B%22x%22%3A141.03052%2C%22y%22%3A339.48462%2C%22width%22%3A410.33147999999994%2C%22height%22%3A43.264039999999966%2C%22text%22%3A%22%20CONSOLE.LOG('FN1%20RUN')%3B%22%7D%2C%7B%22x%22%3A139.02634%2C%22y%22%3A375.5696%2C%22width%22%3A158.74209000000002%2C%22height%22%3A33.65443000000005%2C%22text%22%3A%22EFFECT(()%22%7D%2C%7B%22x%22%3A316.38214%2C%22y%22%3A381.81598%2C%22width%22%3A55.00065999999998%2C%22height%22%3A24.743499999999983%2C%22text%22%3A%22%E5%B7%9DV%22%7D%2C%7B%22x%22%3A211.04016%2C%22y%22%3A407.2466%2C%22width%22%3A363.94379000000004%2C%22height%22%3A45.94896%2C%22text%22%3A%22%20CONSOLE.LOG('FN2%20RUN'%22%7D%2C%7B%22x%22%3A316.965%2C%22y%22%3A448.2877%2C%22width%22%3A185.94296000000003%2C%22height%22%3A35.06405000000001%2C%22text%22%3A%22%E4%B8%89%20OBJ.BAR%3B%22%7D%2C%7B%22x%22%3A210.9507%2C%22y%22%3A450.44388%2C%22width%22%3A92.1813%2C%22height%22%3A30.421899999999994%2C%22text%22%3A%22TEMP2%22%7D%2C%7B%22x%22%3A140.64758%2C%22y%22%3A482.7401%2C%22width%22%3A32.664320000000004%2C%22height%22%3A32.451400000000035%2C%22text%22%3A%2211%22%7D%2C%7B%22x%22%3A138.65549%2C%22y%22%3A519.4422%2C%22width%22%3A285.27311000000003%2C%22height%22%3A31.98790000000008%2C%22text%22%3A%22TEMP1%20OBJ.FOO%3B%22%7D%2C%7B%22x%22%3A65.58269%2C%22y%22%3A549.62573%2C%22width%22%3A34.207300000000004%2C%22height%22%3A35.70357000000001%2C%22text%22%3A%22%E4%BA%86)%22%7D%2C%7B%22x%22%3A64.8449%2C%22y%22%3A623.07245%2C%22width%22%3A285.86546%2C%22height%22%3A34.02410999999995%2C%22text%22%3A%22OBJ.FOO%20%E4%B8%89%20FALSE%3B%22%7D%2C%7B%22x%22%3A74.76995%2C%22y%22%3A693.6807%2C%22width%22%3A271.9495%2C%22height%22%3A32.819240000000036%2C%22text%22%3A%22OBJ.BAR%20FALSE%3B%22%7D%2C%7B%22x%22%3A67.144066%2C%22y%22%3A763.08484%2C%22width%22%3A126.35523400000001%2C%22height%22%3A32.01378999999997%2C%22text%22%3A%22OBJ.%20FOO%22%7D%2C%7B%22x%22%3A266.14258%2C%22y%22%3A771.21246%2C%22width%22%3A66.58031999999997%2C%22height%22%3A22.412739999999985%2C%22text%22%3A%22RUE%3B%22%7D%2C%7B%22x%22%3A69.81025%2C%22y%22%3A885.9513%2C%22width%22%3A51.024246000000005%2C%22height%22%3A25.272500000000036%2C%22text%22%3A%22FN1%22%7D%2C%7B%22x%22%3A141.2207%2C%22y%22%3A890.58844%2C%22width%22%3A45.734880000000004%2C%22height%22%3A21.78146000000004%2C%22text%22%3A%22RUR%22%7D%2C%7B%22x%22%3A65.986755%2C%22y%22%3A935.46277%2C%22width%22%3A109.98214499999999%2C%22height%22%3A28.413880000000063%2C%22text%22%3A%22FN2%20RUL%22%7D%2C%7B%22x%22%3A68.56127%2C%22y%22%3A987.76385%2C%22width%22%3A54.34740000000001%2C%22height%22%3A27.40179999999998%2C%22text%22%3A%22FN2%22%7D%2C%7B%22x%22%3A141.51656%2C%22y%22%3A992.47253%2C%22width%22%3A50.839380000000006%2C%22height%22%3A21.667670000000044%2C%22text%22%3A%22RUN%22%7D%2C%7B%22x%22%3A67.7579%2C%22y%22%3A1040.0673%2C%22width%22%3A53.893789999999996%2C%22height%22%3A25.561100000000124%2C%22text%22%3A%22FN2%22%7D%2C%7B%22x%22%3A142.1709%2C%22y%22%3A1044.3063%2C%22width%22%3A49.44218000000001%2C%22height%22%3A20.48810000000003%2C%22text%22%3A%22RUN%22%7D%5D%2C%22showTitle%22%3Afalse%2C%22title%22%3A%22%22%2C%22rotation%22%3A0%2C%22crop%22%3A%5B0%2C0.0159%2C1%2C1%5D%2C%22averageHue%22%3A%22%23212225%22%2C%22id%22%3A%22u14f246fe%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card></p><p data-lake-id="u7110b2ab" id="u7110b2ab"><strong><span data-lake-id="u2df984cb" id="u2df984cb">​</span></strong><br></p><p data-lake-id="u94efcef0" id="u94efcef0"><strong><span data-lake-id="ub4ebead0" id="ub4ebead0">每次赋值导致的打印如上图，为什么会这样呢？ 看</span></strong><code data-lake-id="uda14eb1d" id="uda14eb1d"><strong><span data-lake-id="u2b459d31" id="u2b459d31">Effect</span></strong></code><strong><span data-lake-id="u5884e016" id="u5884e016"> 代码</span></strong></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20effect(fn)%20%7B%5Cn%20%20%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%20%E5%90%8C%E4%B8%80%E6%97%B6%E5%88%BB%EF%BC%8CactiveEffect%E5%8F%AA%E8%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%EF%BC%8C%E5%B5%8C%E5%A5%97%E6%97%B6%EF%BC%8C%E5%86%85%E5%B1%82%E7%9A%84fn2%20%E4%BC%9A%E8%A6%86%E7%9B%96%20fn1%20%2C%20%5Cn%20%20%20%20%20%20%20%20%2F%2F%20%20%E6%97%A0%E8%AE%BA%E5%93%8D%E5%BA%94%E5%BC%8F%E5%9C%A8%E5%86%85%E5%B1%82%E8%BF%98%E6%98%AF%E5%A4%96%E5%B1%82%E6%94%B6%E9%9B%86%EF%BC%8C%E6%AF%8F%E6%AC%A1%E6%94%B6%E9%9B%86%E9%83%BD%E6%98%AF%20fn2%5Cn%20%20%20%20%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20%20%20%20%20fn()%5Cn%20%20%20%20%7D%5Cn%20%20%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%20%20effectFn()%5Cn%7D%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20console.log('fn1%20run')%3B%5Cn%20%20%20%20effect(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20console.log('fn2%20run')%3B%5Cn%20%20%20%20%20%20%20%20temp2%20%3D%20obj.bar%3B%5Cn%20%20%20%20%7D)%5Cn%20%20%20%20temp1%20%3D%20obj.foo%3B%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B3%2C4%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22G8Elg%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u953e93c9" id="u953e93c9"><br></p><p data-lake-id="uf2f68031" id="uf2f68031"><strong><span data-lake-id="u35982cab" id="u35982cab" style="color: rgb(205, 23, 33)">问：那么为什么第一次可以正常打印出 </span></strong><code data-lake-id="u566d1768" id="u566d1768"><strong><span data-lake-id="u31faf4f6" id="u31faf4f6" style="color: rgb(205, 23, 33)">fn1 run</span></strong></code><strong><span data-lake-id="u005cd4f4" id="u005cd4f4" style="color: rgb(205, 23, 33)"> </span></strong></p><p data-lake-id="u9ba810a5" id="u9ba810a5"><br></p><p data-lake-id="u58f97a7f" id="u58f97a7f"><span data-lake-id="u535a29af" id="u535a29af">解决方案：新增 </span><code data-lake-id="u9000c425" id="u9000c425"><span data-lake-id="ub27226f0" id="ub27226f0">effectStack</span></code><span data-lake-id="ub1ae8dd3" id="ub1ae8dd3"> </span></p><p data-lake-id="ub3784bb4" id="ub3784bb4"><strong><span data-lake-id="uc3c8ab52" id="uc3c8ab52">​</span></strong><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22%2F%2F%20%E7%94%A8%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E5%AD%98%E5%82%A8%E5%BD%93%E5%89%8D%E6%BF%80%E6%B4%BB%E7%9A%84%20effect%20%E5%87%BD%E6%95%B0%5Cnlet%20activeEffect%5Cn%2F%2F%20%E6%96%B0%E5%A2%9E%20effect%20%E6%A0%88%5Cnconst%20effectStack%20%3D%20%5B%5D%5Cn%5Cnfunction%20effect(fn)%20%7B%5Cn%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20%2F%2F%20%E5%BD%93%E8%B0%83%E7%94%A8%20effect%20%E6%B3%A8%E5%86%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%A4%8D%E5%88%B6%E7%BB%99%20activeEffect%5Cn%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20%2F%2Fadd%3A%20%E5%9C%A8%E8%B0%83%E7%94%A8%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%B9%8B%E5%89%8D%E5%B0%86%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%8E%8B%E6%A0%88%5Cn%20%20%20%20effectStack.push(effectFn)%5Cn%20%20%20%20fn()%5Cn%20%20%20%20%2F%2F%20%E5%9C%A8%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E5%AE%8C%E6%AF%95%E5%90%8E%EF%BC%8C%E5%B0%86%E5%BD%93%E5%89%8D%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%BC%B9%E5%87%BA%E6%A0%88%EF%BC%8C%E5%B9%B6%E8%BF%98%E5%8E%9F%20activeEffect%20%E4%B8%BA%E4%B9%8B%E5%89%8D%E7%9A%84%E5%80%BC%5Cn%20%20%20%20effectStack.pop()%5Cn%20%20%20%20activeEffect%20%3D%20effectStack%5BeffectStack.length%20-%201%5D%5Cn%20%20%7D%5Cn%20%20%2F%2F%20activeEffect.deps%20%E7%94%A8%E6%9D%A5%E5%AD%98%E5%82%A8%E6%89%80%E6%9C%89%E4%B8%8E%E8%AF%A5%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9B%B8%E5%85%B3%E7%9A%84%E4%BE%9D%E8%B5%96%E9%9B%86%E5%90%88%5Cn%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20%2F%2F%20%E6%89%A7%E8%A1%8C%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%5Cn%20%20effectFn()%5Cn%7D%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B2%2C10%2C11%2C12%2C14%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22gAnAA%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u6e8b6a4d" id="u6e8b6a4d"><strong><span data-lake-id="u658c2904" id="u658c2904">​</span></strong><br></p><h2 data-lake-id="MW4KJ" id="MW4KJ"><span data-lake-id="u456c01f7" id="u456c01f7">七、obj.foo++ 导致的栈溢出</span></h2><p data-lake-id="u9d0ba402" id="u9d0ba402"><span data-lake-id="u4c0667bb" id="u4c0667bb">场景如下：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22effect(()%20%3D%3E%20%7B%5Cn%20%20obj.foo%2B%2B%20%20%2F%2F%20obj.foo%20%3D%20obj.foo%20%2B%201%3B%20%5Cn%7D)%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E6%97%A0%E7%BA%BF%E9%80%92%E5%BD%92%E5%BE%AA%E7%8E%AF%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22Uj3e6%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u3ee24a6a" id="u3ee24a6a"><br></p><p data-lake-id="u0d938d50" id="u0d938d50"><span data-lake-id="ua349698c" id="ua349698c">解决方法比较简单：</span><code data-lake-id="u68dde788" id="u68dde788"><span data-lake-id="ufef27b15" id="ufef27b15">trigger</span></code><span data-lake-id="u370a8aff" id="u370a8aff"> 时，添加条件判断</span></p><p data-lake-id="udc590c34" id="udc590c34"><span data-lake-id="u9e2a3883" id="u9e2a3883">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20trigger(target%2C%20key)%20%7B%5Cn%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20return%5Cn%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%5Cn%20%20const%20effectsToRun%20%3D%20new%20Set()%5Cn%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20%E5%A6%82%E6%9E%9C%20trigger%20%E8%A7%A6%E5%8F%91%E7%9A%84%E5%87%BD%E6%95%B0%EF%BC%8C%E4%B8%8E%E6%AD%A3%E5%9C%A8%E6%89%A7%E8%A1%8C%E7%9A%84%E5%87%BD%E6%95%B0%E7%9B%B8%E5%90%8C%EF%BC%8C%E5%88%99%E4%B8%8D%E8%A7%A6%E5%8F%91%E6%89%A7%E8%A1%8C%5Cn%20%20%20%20if%20(effectFn%20!%3D%3D%20activeEffect)%20%7B%5Cn%20%20%20%20%20%20effectsToRun.add(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%7D)%5Cn%20%20effectsToRun.forEach(effectFn%20%3D%3E%20effectFn())%5Cn%20%20%2F%2F%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20effectFn())%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%A6%82%E6%9E%9C%20trigger%20%E8%A7%A6%E5%8F%91%E7%9A%84%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%EF%BC%8C%E4%B8%8E%E6%AD%A3%E5%9C%A8%E6%89%A7%E8%A1%8C%E7%9A%84%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E7%9B%B8%E5%90%8C%EF%BC%8C%E5%88%99%E4%B8%8D%E8%A7%A6%E5%8F%91%E6%89%A7%E8%A1%8C%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B7%2C8%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22i3YM0%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="uebfe4189" id="uebfe4189"><strong><span data-lake-id="ud38b584a" id="ud38b584a">​</span></strong><br></p><h2 data-lake-id="DQUek" id="DQUek"><span data-lake-id="u914ac27d" id="u914ac27d">八、如何实现调度 ？</span></h2><h3 data-lake-id="fy0f6" id="fy0f6"><span data-lake-id="ucd2a58e1" id="ucd2a58e1">场景一</span></h3><p data-lake-id="u4a628440" id="u4a628440"><span data-lake-id="u2e3cbe02" id="u2e3cbe02">看下面一段代码：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20data%20%3D%20%7B%20foo%3A%201%20%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%7B%2F*..%E7%9C%81%E7%95%A5..*%2F%7D)%20%5Cn%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20console.log(obj.foo)%5Cn%7D)%5Cn%5Cnobj.foo%2B%2B%3B%5Cn%5Cnconsole.log('end')%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22qBiDN%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u38abeb31" id="u38abeb31"><br></p><p data-lake-id="ua0a7a4d9" id="ua0a7a4d9"><span data-lake-id="u8cc0d307" id="u8cc0d307">上面代码的打印顺序为 </span><code data-lake-id="u37f513fd" id="u37f513fd"><span data-lake-id="u4ad9bd0a" id="u4ad9bd0a">1 → 2 → end</span></code><span data-lake-id="uf6ae1ad1" id="uf6ae1ad1"> </span><span data-lake-id="ue8641405" id="ue8641405" style="color: rgb(205, 23, 33)"> 问：如何实现输入顺序为 </span><code data-lake-id="u51485c86" id="u51485c86"><span data-lake-id="u31f44a4f" id="u31f44a4f" style="color: rgb(205, 23, 33)">1 → end → 2</span></code><span data-lake-id="u17d2ebf2" id="u17d2ebf2" style="color: rgb(205, 23, 33)"> ?</span></p><h4 data-lake-id="vNiSN" id="vNiSN"><span data-lake-id="uba95e619" id="uba95e619">方法一：换位置即可</span></h4><p data-lake-id="u74964f42" id="u74964f42"><span data-lake-id="u98db9d68" id="u98db9d68">当然不是想要的</span></p><h4 data-lake-id="La1ys" id="La1ys"><span data-lake-id="u50ed5865" id="u50ed5865">方法二：调度</span></h4><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22function%20trigger(target%2C%20key)%20%7B%5Cn%20%20const%20depsMap%20%3D%20bucket.get(target)%5Cn%20%20if%20(!depsMap)%20return%5Cn%20%20const%20effects%20%3D%20depsMap.get(key)%5Cn%20%20const%20effectsToRun%20%3D%20new%20Set()%5Cn%20%20effects%20%26%26%20effects.forEach(effectFn%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(effectFn%20!%3D%3D%20activeEffect)%20%7B%5Cn%20%20%20%20%20%20effectsToRun.add(effectFn)%5Cn%20%20%20%20%7D%5Cn%20%20%7D)%5Cn%20%20effectsToRun.forEach(effectFn%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AA%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E5%AD%98%E5%9C%A8%E8%B0%83%E5%BA%A6%E5%99%A8%EF%BC%8C%E5%88%99%E8%B0%83%E7%94%A8%E8%B0%83%E5%BA%A6%E5%99%A8%EF%BC%8C%E5%B9%B6%E5%B0%86%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92%5Cn%20%20%20%20if%20(effectFn.options.scheduler)%20%7B%5Cn%20%20%20%20%20%20effectFn.options.scheduler(effectFn)%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20effectFn()%5Cn%20%20%20%20%7D%5Cn%20%20%7D)%5Cn%7D%5Cn%5Cnlet%20activeEffect%5Cnconst%20effectStack%20%3D%20%5B%5D%5Cn%5Cnfunction%20effect(fn%2C%20options%20%3D%20%7B%7D)%20%7B%5Cn%20%20const%20effectFn%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20cleanup(effectFn)%5Cn%20%20%20%20activeEffect%20%3D%20effectFn%5Cn%20%20%20%20effectStack.push(effectFn)%5Cn%20%20%20%20fn()%5Cn%20%20%20%20effectStack.pop()%5Cn%20%20%20%20activeEffect%20%3D%20effectStack%5BeffectStack.length%20-%201%5D%5Cn%20%20%7D%5Cn%20%20%2F%2F%20%E5%B0%86%20options%20%E6%8C%82%E5%9C%A8%E5%88%B0%20effectFn%20%E4%B8%8A%5Cn%20%20effectFn.options%20%3D%20options%20%20%2F%2F%20add%5Cn%20%20effectFn.deps%20%3D%20%5B%5D%5Cn%20%20effectFn()%5Cn%7D%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E8%B0%83%E5%BA%A6%E5%99%A8%E6%9C%AC%E8%BA%AB%E4%B9%9F%E5%BA%94%E8%AF%A5%E6%98%AF%E4%B8%80%E5%87%BD%E6%95%B0%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B11%2C33%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22NwIQ2%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u13d2c14e" id="u13d2c14e"><br></p><p data-lake-id="ua9faf493" id="ua9faf493"><span data-lake-id="u153d0010" id="u153d0010">使用：</span></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22effect(()%20%3D%3E%20%7B%5Cn%20%20console.log(obj.foo)%5Cn%7D%2C%5Cn%2F%2F%20options%5Cn%7B%5Cn%20%20%20%20%2F%2F%20%E8%B0%83%E5%BA%A6%E5%99%A8%5Cn%20%20%20%20scheduler(fn)%20%7B%5Cn%20%20%20%20%20%20%2F%2F%20%E6%94%BE%E5%9C%A8%E4%B8%80%E4%B8%AAsetTimeout%E4%B8%AD%EF%BC%8C%E8%82%AF%E5%AE%9A%E8%83%BD%E4%BF%9D%E8%AF%81%E9%A1%BA%E5%BA%8F%E4%B8%BA%201%20%E2%86%92%20end%20%E2%86%92%202%5Cn%20%20%20%20%5CtsetTimeout(fn)%5Cn%20%20%5Ct%7D%5Cn%7D)%5Cn%5Cnobj.foo%2B%2B%3B%5Cn%5Cnconsole.log('end')%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22setTimeout%E6%9D%A5%E5%AE%9E%E7%8E%B0%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B7%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22GtJUq%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ue5fa1c17" id="ue5fa1c17"><br></p><h3 data-lake-id="Kvj7c" id="Kvj7c"><span data-lake-id="uf11ef911" id="uf11ef911">场景二</span></h3><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20data%20%3D%20%7B%20foo%3A%201%20%7D%5Cnconst%20obj%20%3D%20new%20Proxy(data%2C%7B%2F*..%E7%9C%81%E7%95%A5..*%2F%7D)%20%5Cn%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20console.log(obj.foo)%5Cn%7D)%5Cn%5Cnobj.foo%2B%2B%3B%5Cnobj.foo%2B%2B%3B%5Cnobj.foo%2B%2B%3B%5Cn%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E5%9C%BA%E6%99%AF2%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22ioqS0%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="u54c69a6d" id="u54c69a6d"><span data-lake-id="u49f98be7" id="u49f98be7">​</span><br></p><p data-lake-id="u228060c8" id="u228060c8"><span data-lake-id="u819c3d97" id="u819c3d97">结果是：</span><code data-lake-id="u6754c2e6" id="u6754c2e6"><span data-lake-id="uf7818bbd" id="uf7818bbd">1 → 2 → 3 → 4</span></code><span data-lake-id="u9d3f1e0d" id="u9d3f1e0d"> 如果我们希望打印出 </span><code data-lake-id="ue80a3aec" id="ue80a3aec"><span data-lake-id="u6f740267" id="u6f740267">1  → 4</span></code><span data-lake-id="ud36305b4" id="ud36305b4"> ，即 </span><u><span data-lake-id="u7349d43f" id="u7349d43f">只打印出初始化值和最终值，而不关心中间态</span></u></p><p data-lake-id="uf3c8e4a6" id="uf3c8e4a6"><span data-lake-id="u05d212fc" id="u05d212fc">​</span><br></p><p data-lake-id="u078d8a18" id="u078d8a18"><span data-lake-id="ue97a2414" id="ue97a2414">实现方式如下：</span></p><p data-lake-id="uf79b60ce" id="uf79b60ce"><span data-lake-id="u21b8598d" id="u21b8598d">​</span><br></p><card type="inline" name="codeblock" value="data:%7B%22mode%22%3A%22typescript%22%2C%22code%22%3A%22const%20jobQueue%20%3D%20new%20Set()%5Cn%2F%2F%20%E4%BD%BF%E7%94%A8%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%EF%BC%8C%E6%9D%A5%E4%BF%9D%E8%AF%81%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%5Cnconst%20p%20%3D%20Promise.resolve()%5Cn%5Cnlet%20isFlushing%20%3D%20false%5Cnfunction%20flushJob()%20%7B%5Cn%20%20if%20(isFlushing)%20return%5Cn%20%20isFlushing%20%3D%20true%5Cn%20%20p.then(()%20%3D%3E%20%7B%5Cn%20%20%20%20jobQueue.forEach(job%20%3D%3E%20job())%20%2F%2F%20%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%87%8C%EF%BC%8C%E5%8F%AA%E4%BC%9A%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%5Cn%20%20%7D).finally(()%20%3D%3E%20%7B%5Cn%20%20%20%20isFlushing%20%3D%20false%5Cn%20%20%7D)%5Cn%7D%5Cn%5Cn%5Cneffect(()%20%3D%3E%20%7B%5Cn%20%20console.log(obj.foo)%5Cn%7D%2C%20%7B%5Cn%20%20scheduler(fn)%20%7B%5Cn%20%20%20%20%2F%2F%20jobQueue%E4%B8%BA%E9%9B%86%E5%90%88%EF%BC%8C%E4%BF%9D%E9%9A%9C%E8%BF%9E%E7%BB%AD%E6%89%A7%E8%A1%8C%20scheduler%20%E8%B0%83%E5%BA%A6%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E5%8F%AA%E4%BC%9A%E6%B7%BB%E5%8A%A0%E4%B8%80%E6%AC%A1%5Cn%20%20%20%20jobQueue.add(fn)%5Cn%20%20%20%20%2F%2F%20%E4%BC%9A%E6%89%A7%E8%A1%8C%E4%B8%A4%E6%AC%A1%EF%BC%8C%E4%BD%86%E6%98%AF%E5%86%85%E9%83%A8%E6%9C%89%20isFlushing%20%E5%8F%98%E9%87%8F%E6%8E%A7%E5%88%B6%EF%BC%8C%E5%AE%9E%E9%99%85%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%87%8C%EF%BC%8C%E5%8F%AA%E4%BC%9A%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%5Cn%20%20%20%20flushJob()%5Cn%20%20%7D%5Cn%7D)%5Cn%5Cnobj.foo%2B%2B%3B%5Cnobj.foo%2B%2B%3B%5Cnobj.foo%2B%2B%3B%22%2C%22autoWrap%22%3Afalse%2C%22lineNumbers%22%3Atrue%2C%22heightLimit%22%3Atrue%2C%22collapsed%22%3Afalse%2C%22hideToolbar%22%3Afalse%2C%22name%22%3A%22%E4%BD%BF%E7%94%A8Promise%E5%AE%9E%E7%8E%B0%EF%BC%8C%E5%BE%AE%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%87%8C%EF%BC%8C%E5%8F%AA%E4%BC%9A%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%22%2C%22tabSize%22%3Anull%2C%22indentWithTab%22%3Afalse%2C%22lightLines%22%3A%5B1%2C9%5D%2C%22foldLines%22%3A%5B%5D%2C%22theme%22%3A%22Night%20Owl%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22N2xHw%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%7D"></card><p data-lake-id="ude04550a" id="ude04550a"><span data-lake-id="ub8ff69df" id="ub8ff69df">​</span><br></p>`,public:1,status:1,view_status:0,read_status:1,likes_count:0,comments_count:0,content_updated_at:"2023-03-11T09:36:03.000Z",deleted_at:null,created_at:"2022-10-27T00:40:39.000Z",updated_at:"2023-03-11T09:37:06.000Z",published_at:"2023-03-11T09:36:03.000Z",first_published_at:"2022-10-29T01:50:58.905Z",word_count:3659,cover:"https://cdn.nlark.com/yuque/0/2022/png/687303/1667052577212-ff9cb3c3-4d35-4f8c-8219-762d2d4e111c.png",description:`Vue3 响应式系统设计一、为何响应式比如以下代码：const obj = {text: 'hello world！'};  function effect() {     document.body.innerText = obj.text; }如果我修改obj.text = "hello ...`,custom_description:null,hits:0,_serializer:"v2.doc_detail"}];export{e as p};
