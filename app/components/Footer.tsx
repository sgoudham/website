import { GitHubSvg, InstagramSvg, LinkedInSvg, TwitterSvg } from "./Images";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-surface1 w-full text-subtext0 dark:text-overlay1">
      <div className="flex flex-col justify-center items-center gap-y-6 pt-10 pb-20">
        <div className="gap-y-3 text-center">
          <p className="text-lg lg:text-xl xl:text-2xl">Designed With &#9829;</p>
          <p className="text-md lg:text-lg xl:text-xl">&copy; {new Date().getFullYear()} Goudham Suresh</p>
        </div>
        <div className="flex gap-3">
          <a
            className="group"
            aria-label="Follow Me On GitHub"
            href="https://github.com/sgoudham"
          >
            <GitHubSvg />
          </a>
          <a
            className="group"
            aria-label="Follow Me On LinkedIn"
            href="https://linkedin.com/in/sgoudham"
          >
            <LinkedInSvg />
          </a>
          <a
            className="group"
            aria-label="Follow Me On Twitter"
            href="https://twitter.com/RealGoudham"
          >
            <TwitterSvg />
          </a>
          <a
            className="group"
            aria-label="Follow Me On Instagram"
            href="https://instagram.com/sgoudham"
          >
            <InstagramSvg />
          </a>
        </div>
      </div>
    </footer>
  );
};
