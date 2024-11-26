// 创建模板
const greetTpl = template("Hello <%= name %>!");
console.log(greetTpl({ name: "World" })); // 输出: Hello World!

// 带循环的模板
const listTpl = template(`
  <ul>
    <% items.forEach(function(item) { %>
      <li><%= item %></li>
    <% }); %>
  </ul>
`);

console.log(
  listTpl({
    items: ["apple", "banana", "orange"],
  }),
);
// 输出:
// <ul>
//   <li>apple</li>
//   <li>banana</li>
//   <li>orange</li>
// </ul>
