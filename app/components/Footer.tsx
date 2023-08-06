import { Text } from "./utils/Text";
import { GitHubSvg, InstagramSvg, LinkedInSvg, TwitterSvg } from "./Images";
import Link from "next/link";

export const Footer = () => {
  console.log(process.env.NEXT_PUBLIC_IS_PREVIEW);
  return (
    <footer className="border-t-2 border-surface1 w-full text-subtext0 dark:text-overlay1">
      <div className="flex flex-col justify-center items-center gap-y-6 pt-10 pb-20">
        <div className="gap-y-3 text-center">
          <p className="text-lg lg:text-xl xl:text-2xl">
            Designed With &#9829;
          </p>
          <Text>&copy; {new Date().getFullYear()} Goudham Suresh</Text>
        </div>
        {process.env.NEXT_PUBLIC_IS_PREVIEW && <PreviewBuild />}
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

const PreviewBuild = () => {
  return (
    <Text className="text-center">
      <p className="text-peach">Preview Build</p>
      <p>
        GitHub SHA:{" "}
        <Link
          className="hover:underline"
          href={`https://github.com/sgoudham/website/commit/${process.env.NEXT_PUBLIC_BUILD_SHA}`}
        >
          {process.env.NEXT_PUBLIC_BUILD_SHA}
        </Link>
      </p>
      <p>
        Build ID:{" "}
        <Link
          className="hover:underline"
          href={`https://github.com/sgoudham/website/actions/runs/${process.env.NEXT_PUBLIC_BUILD_ID}`}
        >
          {process.env.NEXT_PUBLIC_BUILD_ID}
        </Link>
      </p>
      <p>Build Num: #{process.env.NEXT_PUBLIC_BUILD_NUM}</p>
    </Text>
  );
};

const SocialMediaIcons = () => {
  return (
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
  );
};
