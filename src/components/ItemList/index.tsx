import { LinkButton } from "../LinkButton";
import { BasicButton } from "../BasicButton";

type Items = {
  toggleTodo: (id: string) => void;
  handleAddTodo: () => void;
  handleDeleteTodo: (id: string) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  todos: string;
  todoList: {
    id: string;
    text: string;
    isCompleted: boolean;
  }[];
};
export const ItemList = ({
  handleAddTodo,
  handleDeleteTodo,
  toggleTodo,
  handleSubmit,
  todos,
  todoList,
}: Items) => {
  return (
    <div>
      <form className="flex mb-4 gap-2">
        <input
          onChange={handleSubmit}
          value={todos}
          type="text"
          placeholder="新しいタスクを入力..."
          className="flex-1 border border-pink-200 bg-white/80 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder:text-pink-300 text-gray-700"
        />

        <BasicButton
          onClick={handleAddTodo}
          label="追加"
          style="simplePink"
          disabled={todos === ""}
        />
      </form>

      <ul className="space-y-3">
        {todoList.map((item) => {
          return (
            <li
              key={item.id}
              className="flex items-center justify-between bg-white/70 border border-blue-100 rounded-2xl px-4 py-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  onChange={() => toggleTodo(item.id)}
                  className="accent-pink-300 w-4 h-4"
                  checked={item.isCompleted}
                />
                <p
                  className={`text-base text-gray-400 ${
                    item.isCompleted && "line-through"
                  }`}
                >
                  {item.text}
                </p>
              </div>
              {/*onClick には「ボタンを押されたときに呼ばれる関数」を渡す必要があるので、関数を返す無名関数でラップ*/}
              <LinkButton onClick={() => handleDeleteTodo(item.id)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
