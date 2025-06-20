import { Layout } from "./components/Layout";
import { Title } from "./components/Title";
//import { BasicButton } from "./components/BasicButton";
import { List } from "./components/List";
import { Form } from "./components/Form";

function App() {
  return (
    <>
      <Layout>
        <Title text="TODOリスト" />
        {/* フィルター */}
        <div className="flex justify-center gap-3 mb-6">
          <button className="px-4 py-1 rounded-full bg-pink-200 text-pink-600 font-semibold shadow hover:bg-pink-300 transition border-2 border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200">
            すべて
          </button>
          <button className="px-4 py-1 rounded-full bg-blue-100 text-blue-500 font-semibold shadow hover:bg-blue-200 transition border-2 border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200">
            未完了
          </button>
          <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-500 font-semibold shadow hover:bg-gray-200 transition border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            完了済み
          </button>
        </div>
        {/* 追加フォーム */}
        <Form />
        <form className="flex mb-4 gap-2">
          <input
            type="text"
            placeholder="新しいタスクを入力..."
            className="flex-1 border border-pink-200 bg-white/80 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder:text-pink-300 text-gray-700"
          />
          <button
            type="submit"
            className="bg-pink-300 text-white px-6 py-2 rounded-full hover:bg-pink-400 shadow-sm transition"
          >
            追加
          </button>
        </form>

        <List />
      </Layout>
    </>
  );
}

export default App;
