import { Text } from "./utils/Text";
import {
  GitHub,
  Gitea,
  Instagram,
  LinkedIn,
  Twitter,
  Twitch,
} from "./icons/SocialMedia";

export const Footer = () => {
  return (
    <footer className="w-full text-subtext1">
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="text-center">
          <Text>&copy; {new Date().getFullYear()} Goudham Suresh</Text>
        </div>
        <SocialMediaRow />
      </div>
    </footer>
  );
};

const SocialMediaRow = () => {
  return (
    <div className="flex gap-3 items-center">
      <a
        className="group focus:ring-2 focus:ring-blue ring-offset-0"
        aria-label="Follow Me On GitHub"
        href="https://github.com/sgoudham"
      >
        <GitHub />
      </a>
      <a
        className="group focus:ring-2 focus:ring-blue ring-offset-0"
        aria-label="Follow Me On LinkedIn"
        href="https://linkedin.com/in/sgoudham"
      >
        <LinkedIn />
      </a>
      <a
        className="group focus:ring-2 focus:ring-blue ring-offset-0"
        aria-label="Follow Me On Twitter"
        href="https://twitter.com/RealGoudham"
      >
        <Twitter />
      </a>
      <a
        className="group focus:ring-2 focus:ring-blue ring-offset-0"
        aria-label="Follow Me On Instagram"
        href="https://instagram.com/sgoudham"
      >
        <Instagram />
      </a>
      <a
        className="group focus:ring-2 focus:ring-blue ring-offset-0"
        aria-label="Yes, I Stream On Twitch"
        href="https://twitch.tv/goudham"
      >
        <Twitch />
      </a>
    </div>
  );
};
