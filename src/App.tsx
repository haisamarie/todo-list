import { Layout } from "./components/Layout";
import { Title } from "./components/Title";
//import { BasicButton } from "./components/BasicButton";
import { List } from "./components/List";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

type Items = {
  id: string;
  text: string;
  isCompleted: boolean;
};
type Filter = "all" | "active" | "completed";

function App() {
  const [todos, setTodos] = useState<string>("");
  const [filter, setFilter] = useState<Filter>("all");
  const data = localStorage.getItem("todoList");
  // localStorageからデータを取得
  // 取得したデータをJSON.parseでオブジェクトに変換
  const [todoList, setTodoList] = useState<Items[]>(JSON.parse(data || "[]"));

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos(e.target.value);
  };

  const handleAddTodo = () => {
    const newItems: Items = {
      id: nanoid(),
      text: todos,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newItems]);
    setTodos("");
  };

  const handleDeleteTodo = (id: string) => {
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const toggleTodo = (id: string) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleFilter = (newFilter: Filter) => {
    setFilter(newFilter);
  };

  const filteredList = todoList.filter((item) => {
    if (filter === "completed") {
      return !item.isCompleted;
    }
    if (filter === "active") {
      return item.isCompleted;
    }
    return true;
  });
  console.log(filteredList);

  return (
    <>
      <Layout>
        <Title text="TODOリスト" />
        {/* フィルター */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => {
              handleFilter("all");
            }}
            className="px-4 py-1 rounded-full bg-pink-200 text-pink-600 font-semibold shadow hover:bg-pink-300 transition border-2 border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200"
          >
            すべて
          </button>
          <button
            onClick={() => {
              handleFilter("completed");
            }}
            className="px-4 py-1 rounded-full bg-blue-100 text-blue-500 font-semibold shadow hover:bg-blue-200 transition border-2 border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            未完了
          </button>
          <button
            onClick={() => {
              handleFilter("active");
            }}
            className="px-4 py-1 rounded-full bg-gray-100 text-gray-500 font-semibold shadow hover:bg-gray-200 transition border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            完了済み
          </button>
        </div>

        {/* 追加フォーム */}

        <List
          handleSubmit={handleSubmit}
          handleAddTodo={handleAddTodo}
          handleDeleteTodo={handleDeleteTodo}
          toggleTodo={toggleTodo}
          todos={todos}
          todoList={filteredList}
        />
      </Layout>
    </>
  );
}

export default App;
