type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-gradient-to-b from-pink-50 to-blue-50 shadow-xl rounded-3xl p-8">
      {children}
    </div>
  );
};
