// 定义一个表示用户信息的接口，包含 id, name, email, age 和可选的 address 字段
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  address?: string;
}

// 创建一个用户实例
const user: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  address: "123 Main St",
};

const exampleData = {
  products: [
    {
      id: 1,
      name: "Phone",
      price: 699.99,
      inStock: true,
      categories: ["electronics", "gadgets"],
    },
    {
      id: 2,
      name: "Laptop",
      price: 1299.99,
      inStock: false,
      categories: ["electronics", "computers"],
    },
  ],
  totalItems: 2,
  lastUpdated: "2023-05-15T14:30:00Z",
};

// 根据上面数据结构定义 TypeScript 类型
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  categories: string[];
}

interface Data {
  products: Product[];
  totalItems: number;
  lastUpdated: string;
}

// 使用 Partial 和 Omit 从以下接口创建新类型
interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
  hireDate: Date;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}
// 创建一个用于更新员工的类型，排除 id 和 hireDate，且所有字段可选
interface UpdateEmployee {
  name?: string;
  department?: string;
  salary?: number;
  address?: {
    street?: string;
    city?: string;
    zipCode?: string;
  };
}

// 使用 Partial 和 Omit 创建新类型
type PartialEmployee = Partial<Employee>;
type OmitEmployee = Omit<Employee, "id" | "hireDate">;

// 定义一个递归的树形结构类型，每个节点有 value, children 和可选的 parent
interface TreeNode {
  value: string;
  children: TreeNode[];
  parent?: TreeNode;
}

// 定义一个用于表示树形结构的类型，包含根节点和可选的父节点
interface Tree {
  root: TreeNode;
  parent?: Tree;
}

/**
 * 需求:
 * 1. 解析 CSV 字符串
 * 2. 跳过第一行标题
 * 3. 将每行转换为对象
 * 4. 过滤掉年龄小于18的记录
 */
function parseCSV(csv: string): Employee[] {
  const lines = csv.split("\n").slice(1);
  return lines
    .map((line) => {
      const [id, name, department, salary, hireDate, street, city, zipCode] =
        line.split(",");
      return {
        id: parseInt(id),
        name,
        department,
        salary: parseFloat(salary),
        hireDate: new Date(hireDate),
        address: { street, city, zipCode },
      };
    })
    .filter((employee) => employee.salary >= 18);
}
