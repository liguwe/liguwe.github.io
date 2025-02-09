function getAllProps(obj) {
  const props = new Set();
  let o = obj;
  while (o !== null) {
    // 获取当前对象的所有属性（包括不可枚举的）
    Reflect.ownKeys(o).forEach((key) => props.add(key));
    // 获取原型对象
    o = Object.getPrototypeOf(o);
  }
  return Array.from(props);
}
