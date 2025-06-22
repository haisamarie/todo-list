import { Layout } from "./components/Layout";
import { Title } from "./components/Title";
import { BasicButton } from "./components/BasicButton";
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
        <div className="flex justify-center gap-3 mb-6">
          <BasicButton
            onClick={() => {
              handleFilter("all");
            }}
            label="すべて"
          />
          <BasicButton
            onClick={() => {
              handleFilter("completed");
            }}
            label="すべて"
            style="blue"
          />
          <BasicButton
            onClick={() => {
              handleFilter("active");
            }}
            label="すべて"
            style="gray"
          />
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
