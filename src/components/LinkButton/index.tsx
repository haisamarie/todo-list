type Props = {
  onClick: () => void;
};

export const LinkButton = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-pink-300 hover:text-pink-400 transition font-bold"
    >
      削除
    </button>
  );
};
