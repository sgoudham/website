import { Text } from "./utils/Text";
import {
  GitHub,
  Gitea,
  Instagram,
  LinkedIn,
  Twitter,
} from "./icons/SocialMedia";
import Link from "next/link";
import { Heart } from "./icons/Heart";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-surface1 w-full text-subtext1">
      <div className="flex flex-col justify-center items-center space-y-6 pt-10 pb-20">
        <div className="text-center">
          <p className="text-lg lg:text-xl xl:text-2xl">
            Designed With <Heart />
          </p>
          <Text>&copy; {new Date().getFullYear()} Goudham Suresh</Text>
        </div>
        <BuildInfo />
        <SocialMediaRow />
      </div>
    </footer>
  );
};

const BuildInfo = () => {
  return (
    <div className="text-center text-md lg:text-lg xl:text-xl">
      <p className="text-blue tracking-tight">
        {process.env.NEXT_PUBLIC_IS_PREVIEW ? "Preview" : "Release"} Build
      </p>
      <p>
        GitHub SHA:{" "}
        <Link
          className="hocus:underline hocus:decoration-solid hocus:decoration-blue hocus:decoration-2"
          href={`https://github.com/sgoudham/website/commit/${process.env.NEXT_PUBLIC_BUILD_SHA}`}
        >
          {process.env.NEXT_PUBLIC_BUILD_SHA}
        </Link>
      </p>
      <p>
        Build ID:{" "}
        <Link
          className="hocus:underline hocus:decoration-solid hocus:decoration-blue hocus:decoration-2"
          href={`https://github.com/sgoudham/website/actions/runs/${process.env.NEXT_PUBLIC_BUILD_ID}`}
        >
          {process.env.NEXT_PUBLIC_BUILD_ID}
        </Link>
      </p>
      <p>Build Num: #{process.env.NEXT_PUBLIC_BUILD_NUM}</p>
    </div>
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
        aria-label="Visit My Gitea Instance"
        href="https://gitea.goudham.com"
      >
        <Gitea />
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
    </div>
  );
};
