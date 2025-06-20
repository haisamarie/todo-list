type Props = {
  label: string;
  onClick: () => void;
};

export const BasicButton = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 rounded-full bg-pink-200 text-pink-600 font-semibold shadow hover:bg-pink-300 transition border-2 border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200"
    >
      {label}
    </button>
  );
};
