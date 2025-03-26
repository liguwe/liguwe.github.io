// 解析 URL 为对象

const parseUrl = (url) => {
  const [full, protocol, host, path] = url.match(/(https?):\/\/([^/]+)(.*)/);
  return { protocol, host, path };
};
