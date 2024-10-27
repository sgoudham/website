import Link from "next/link";

export const StyledLink = ({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={`font-medium text-blue underline focus:ring-1 focus:ring-blue ${className ?? ""
        }`}
    >
      {children}
    </Link>
  );
};
