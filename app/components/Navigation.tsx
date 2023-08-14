"use client";

import { useRef, useState } from "react";
import { ProfilePicture } from "./images/ProfilePicture";
import { Hamburger } from "./nav/Hamburger";
import { Links } from "./nav/Links";
import { Close } from "./icons/Close";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const path = usePathname();
  const focusedRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const checkPath = (href: string) => {
    if (href === path) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="self-center w-full max-w-xl lg:max-w-3xl xl:max-w-6xl">
        <div className="p-4 flex flex-row items-center justify-between text-md lg:text-lg xl:text-xl">
          <ProfilePicture />
          <div className="hidden md:flex flex-row gap-x-4 font-bold tracking-tight">
            <Links />
          </div>
          <button
            className="md:hidden px-4 py-2 hover:bg-crust dark:hover:bg-base rounded-lg"
            aria-label="Open Menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Hamburger />
          </button>
        </div>
      </nav>

      <Dialog
        className={
          isOpen
            ? "block w-full h-screen absolute overflow-hidden inset-0 bg-base dark:bg-crust z-10 flex-col items-center"
            : "hidden"
        }
        open={isOpen}
        onClose={() => setIsOpen(false)}
        // initialFocus={focusedRef}
      >
        <div className="max-w-xl mx-auto">
          <div className="p-4 w-full flex flex-row items-center justify-between">
            <ProfilePicture />
            <button
              className="px-4 py-1 hover:bg-crust dark:hover:bg-base rounded-lg focus:bg-crust dark:focus:bg-base"
              onClick={() => setIsOpen((prev) => !prev)}
              ref={focusedRef}
            >
              <Close />
            </button>
          </div>
          <ul className="flex flex-col space-y-6 items-center text-2xl font-semibold justify-center">
            <Link href="/" onClick={() => checkPath("/")}>
              &lt; Home /&gt;
            </Link>
            <Link href="/projects" onClick={() => checkPath("/projects")}>
              &lt; Projects /&gt;
            </Link>
          </ul>
        </div>
      </Dialog>
    </>
  );
};
