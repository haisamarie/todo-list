import { Layout } from "./components/Layout";
import { Title } from "./components/Title";
//import { BasicButton } from "./components/BasicButton";
import { List } from "./components/List";
import { useTodoList } from "./hooks/useTodoList";

function App() {
  const {
    todos,
    handleSubmit,
    handleAddTodo,
    handleDeleteTodo,
    toggleTodo,
    handleFilter,
    filteredList,
  } = useTodoList();
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
