import { GitHubSvg, InstagramSvg, LinkedInSvg, TwitterSvg } from "./Images";

export const Footer = () => {
  return (
    <footer className="w-full bg-mantle text-subtext0 dark:text-overlay1 sticky bottom-0">
      <div className="flex flex-row justify-center items-center p-1 gap-x-10 sm:gap-x-20">
        <p>Designed With ❤️ By Goudham</p>
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
