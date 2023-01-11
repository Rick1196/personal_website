import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HamburgerMenu from "../icons/hamburgerIcon";
import MoonIcon from "../icons/moonIcon";
import SonIcon from "../icons/sonIcon";

const Header: React.FC<{
  setDarkModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  darkModeEnabled: boolean;
}> = ({ setDarkModeEnabled, darkModeEnabled }) => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);
  const router = useRouter();
  return (
    <nav className="bg-transparent px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full sticky">
      <div className="container flex flex-wrap items-center justify-end mx-auto">
        <div className="flex gap-2 md:order-2">
          <button
            type="button"
            className="bg-transparent"
            aria-label="dark mode"
            onClick={() => setDarkModeEnabled(true)}
          >
            <MoonIcon color={darkModeEnabled ? "white" : "black"} />
          </button>
          <button
            type="button"
            className="bg-transparent"
            aria-label="light mode"
            onClick={() => setDarkModeEnabled(false)}
          >
            <SonIcon color={darkModeEnabled ? "white" : "black"} />
          </button>
          <button
            onClick={() => setDisplayMobileMenu((prev) => !prev)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 bg-transparent md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <HamburgerMenu color={darkModeEnabled ? "white" : "black"} />
          </button>
        </div>
        <div
          className={`${
            displayMobileMenu ? "" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white rounded text-gray-700 md:p-0 dark:text-white"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className="block py-2 pl-3 pr-4 text-white rounded text-gray-700 md:p-0 dark:text-white"
              >
                My Articles
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
