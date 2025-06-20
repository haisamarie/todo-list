import { LinkButton } from "../LinkButton";
type Props = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const TestData: Props[] = [
  { id: 1, text: "サンプル完了タスク", isCompleted: true },
  { id: 2, text: "2つ目のサンプル完了タスク", isCompleted: true },
  { id: 3, text: "3つ目のサンプル完了タスク", isCompleted: true },
  { id: 4, text: "3つ目のサンプル完了タスク", isCompleted: true },
  { id: 5, text: "3つ目のサンプル完了タスク", isCompleted: true },
  { id: 6, text: "3つ目のサンプル完了タスク", isCompleted: true },
];

export const List = () => {
  return (
    <ul className="space-y-3">
      {TestData.map((item) => {
        return (
          <li
            key={item.id}
            className="flex items-center justify-between bg-white/70 border border-blue-100 rounded-2xl px-4 py-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="accent-pink-300 w-4 h-4"
                defaultChecked
              />
              <span className="text-gray-400 line-through text-base">
                {item.text}
              </span>
            </div>
            <LinkButton />
          </li>
        );
      })}
    </ul>
  );
};
