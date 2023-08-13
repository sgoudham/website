export const H1 = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-center">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
      {children}
    </h2>
  );
};

