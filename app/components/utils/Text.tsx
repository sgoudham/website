export const FancyUnderline = ({
  decoration,
  className,
  children,
}: {
  decoration: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={`underline ${decoration} decoration-2 ${className ?? ""}`}>
      {children}
    </span>
  );
};

export const Text = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return <p className={`text-md lg:text-lg xl:text-xl 2xl:text-2xl ${className ?? ""}`}>{children}</p>;
};

export const GroupedText = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col mx-2 gap-4 ${className}`}>{children}</div>
  );
};
