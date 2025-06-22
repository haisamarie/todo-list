type Props = {
  label: string;
  onClick?: () => void;
  style?: "pink" | "blue" | "gray" | "simplePink";
  disabled?: boolean;
};

export const BasicButton = ({
  label,
  onClick,
  style = "pink",
  disabled,
}: Props) => {
  const baseClass =
    "px-4 py-1 rounded-full font-semibold shadow transition focus:outline-none focus:ring-2";

  const colorClassMap: Record<string, string> = {
    pink: "bg-pink-200 text-pink-600 border-pink-100 hover:bg-pink-300 focus:ring-pink-200 border-2",
    gray: "bg-gray-200 text-gray-600 border-gray-100 hover:bg-gray-300 focus:ring-gray-200 border-2",
    blue: "bg-blue-200 text-blue-600 border-blue-100 hover:bg-blue-300 focus:ring-blue-200 border-2",
    simplePink:
      "bg-pink-300 text-white px-6 py-2 rounded-full hover:bg-pink-400 shadow-sm transition",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${colorClassMap[style]}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
