const data = [
  {
    id: "1",
    name: "test1",
    children: [
      {
        id: "11",
        name: "test11",
        children: [
          {
            id: "111",
            name: "test111",
          },
          {
            id: "112",
            name: "test112",
          },
        ],
      },
      {
        id: "12",
        name: "test12",
        children: [
          {
            id: "121",
            name: "test121",
          },
          {
            id: "122",
            name: "test122",
          },
        ],
      },
    ],
  },
];

function find(data, id) {
  function dfs(root) {
    if (!root) {
      return null;
    }
    if (root.id === id) {
      return root;
    }
    // debugger;
    if (root.children) {
      for (let node of root.children) {
        console.log(node);
        dfs(node);
      }
    }
  }
  return dfs(data);
}

console.log(find(data[0], "test111"));
