type TCardWithHeader = {
  title: string;
  children: React.ReactNode;
};

const CardWithHeader = ({ children, title }: TCardWithHeader) => {
  return (
    <div className="bg-white justify-between flex flex-col h-full">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {children}
    </div>
  );
};
export default CardWithHeader;
