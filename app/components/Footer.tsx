import { GitHubSvg, InstagramSvg, LinkedInSvg, TwitterSvg } from "./Images";

export const Footer = () => {
  return (
    <footer className="w-full bg-mantle text-subtext0 dark:text-overlay1">
      <div className="flex flex-row justify-center items-center space-x-10 sm:space-x-20">
        <div>Made With ❤️ By Goudham</div>
        <div className="flex gap-3">
          <a
            className="group -m-1 p-1"
            aria-label="Follow Me On GitHub"
            href="https://github.com/sgoudham"
          >
            <GitHubSvg />
          </a>
          <a
            className="group -m-1 p-1"
            aria-label="Follow Me On LinkedIn"
            href="https://linkedin.com/in/sgoudham"
          >
            <LinkedInSvg />
          </a>
          <a
            className="group -m-1 p-1"
            aria-label="Follow Me On Twitter"
            href="https://twitter.com/RealGoudham"
          >
            <TwitterSvg />
          </a>
          <a
            className="group -m-1 p-1"
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
