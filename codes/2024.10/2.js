var urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error("Could not load image at" + url));
    };
    img.src = url;
  });
}

function loadImagesWithConcurrencyLimit(urls, limit) {
  // 队列，拷贝一份urls
  const queue = [...urls];
  // 正在进行的请求图片URL, 使用 Set 来存储
  const inProgress = new Set();
  // 结果数组
  const res = [];
  return new Promise((resolve, reject) => {
    // 如果队列为空且没有进行中的请求，说明所有请求都已完成
    if (queue.length === 0 && inProgress.size === 0) {
      resolve(res);
      return;
    }
    function loadNext() {
      while (inProgress.size < limit && queue.length > 0) {
        const url = queue.shift();
        inProgress.add(url);
        loadImg(url).then(
          (img) => {
            inProgress.delete(url);
            res.push(img);
            if (res.length === urls.length) {
              resolve(res);
            } else {
              loadNext();
            }
          },
          (err) => {
            inProgress.delete(url);
            res.push(err);
            loadNext();
          },
        );
      }
    }
    loadNext();
  });
}

loadImagesWithConcurrencyLimit(urls, 3).then((res) => {
  console.log("全部图片加载完成", res);
});


![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907102039.png)
![[99. Obsidian@832/files/Pasted image 20240907163023.png|456]]
