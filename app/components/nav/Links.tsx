import Link from "next/link";

export const Links = () => {
  return (
    <>
      <LinkWithAnimatedUnderline href="/" text="&lt; Home /&gt;" />
      <LinkWithAnimatedUnderline href="/projects" text="&lt; Projects /&gt;" />
    </>
  );
};

const LinkWithAnimatedUnderline = ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  const animatedUnderline =
    "md:block md:max-w-0 md:group-hover:max-w-full motion-safe:md:transition-all md:h-0.5 md:bg-blue motion-safe:md:duration-300";

  return (
    <Link href={href} className="motion-safe:md:transition motion-safe:md:duration-300 group focus:text-blue">
      <span className="group-hover:text-blue motion-safe:md:transition-all motion-safe:md:duration-300">
        {text}
      </span>
      <span className={`${animatedUnderline}`}></span>
    </Link>
  );
};
