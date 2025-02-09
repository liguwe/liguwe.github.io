function getAllProperties(obj) {
  const props = new Set();
  let currentObj = obj;
  while (currentObj !== null) {
    // 获取当前对象的所有属性（包括不可枚举的）
    Reflect.ownKeys(currentObj).forEach((key) => props.add(key));
    // 获取原型对象
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return Array.from(props);
}
