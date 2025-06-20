function App() {
  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-gradient-to-b from-pink-50 to-blue-50 shadow-xl rounded-3xl p-8">
        <h1 className="text-2xl font-bold text-pink-400 mb-6 pb-3 text-center tracking-wider">
          TODOリスト
        </h1>

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

        {/* TODOリスト */}
        <ul className="space-y-3">
          {/* サンプルアイテム */}
          <li className="flex items-center justify-between bg-white/70 border border-blue-100 rounded-2xl px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="accent-pink-300 w-4 h-4"
                defaultChecked
              />
              <span className="text-gray-400 line-through text-base">
                サンプル完了タスク
              </span>
            </div>
            <button className="text-pink-300 hover:text-pink-400 transition font-bold">
              削除
            </button>
          </li>
          <li className="flex items-center justify-between bg-white/70 border border-blue-100 rounded-2xl px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="accent-blue-300 w-4 h-4" />
              <span className="text-blue-600 text-base">
                サンプル未完了タスク
              </span>
            </div>
            <button className="text-pink-300 hover:text-pink-400 transition font-bold">
              削除
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
