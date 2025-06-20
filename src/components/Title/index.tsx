type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return (
    <h1 className="text-2xl font-bold text-pink-400 mb-6 pb-3 text-center tracking-wider">
      {text}
    </h1>
  );
};
