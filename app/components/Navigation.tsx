import Link from "next/link";
import { ProfilePicture } from "./images/ProfilePicture";

export const NavBar = () => {
  return (
    <nav className="border-b-2 border-surface1">
      <div className="flex flex-row items-center justify-center text-lg lg:text-xl xl:text-2xl">
        <div className="p-2 flex flex-row gap-x-4 items-center tracking-tight font-bold">
          <ProfilePicture />
          <Link href="/" className="transition duration-300 group">
            <span className="group-hover:text-blue transition-all duration-300">
              &lt; Home /&gt;
            </span>
            <span className="block max-w-0 group-hover:max-w-full transition-all h-0.5 bg-blue duration-300"></span>
          </Link>
          <Link
            href="/projects"
            className="transition duration-300 group"
          >
            <span className="group-hover:text-blue transition-all duration-300">
              &lt; Projects /&gt;
            </span>
            <span className="block max-w-0 group-hover:max-w-full transition-all h-0.5 bg-blue duration-300"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
