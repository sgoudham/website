export const FancyUnderline = ({
  decoration,
  children,
}: {
  decoration: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={`underline font-semibold ${decoration} decoration-2`}>
      {children}
    </span>
  );
};

export const Text = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return <p className={`text-md lg:text-lg xl:text-xl ${className ?? ""}`}>{children}</p>;
};

export const GroupedText = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col mx-3 gap-3 ${className}`}>{children}</div>
  );
};
