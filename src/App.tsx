import { Layout } from "./components/Layout";
import { Title } from "./components/Title";
import { BasicButton } from "./components/BasicButton";
import { ItemList } from "./components/ItemList";
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

  type FilterOption = {
    label: string;
    value: "all" | "active" | "completed";
    style?: "pink" | "blue" | "gray" | "simplePink";
  };

  const filterOptions: FilterOption[] = [
    { label: "すべて", value: "all" as const, style: "pink" },
    { label: "未完了", value: "active" as const, style: "blue" },
    { label: "完了", value: "completed" as const, style: "gray" },
  ];
  return (
    <>
      <Layout>
        <Title text="TODOリスト" />
        <div className="flex justify-center gap-3 mb-6">
          {filterOptions.map((opt) => (
            <BasicButton
              key={opt.value}
              onClick={() => handleFilter(opt.value)}
              label={opt.label}
              style={opt.style}
            />
          ))}
        </div>

        <ItemList
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
