type Props = {
  label: string;
};

export const Input = ({ label }: Props) => {
  return (
    <input
      type={label}
      placeholder="新しいタスクを入力..."
      className="flex-1 border border-pink-200 bg-white/80 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder:text-pink-300 text-gray-700"
    />
  );
};
