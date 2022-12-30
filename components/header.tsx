import { useRouter } from "next/router";
import React, { useState } from "react";
import HamburgerMenu from "../icons/hamburgerIcon";
import MoonIcon from "../icons/moonIcon";
import SonIcon from "../icons/sonIcon";

const Header: React.FC = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);
  const router = useRouter();
  return (
    <nav className="bg-transparent px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full sticky">
      <div className="container flex flex-wrap items-center justify-end mx-auto">
        <div className="flex gap-2 md:order-2">
          <button type="button" className="bg-transparent" aria-label="dark mode">
            <MoonIcon />
          </button>
          <button type="button" className="bg-transparent" aria-label="light mode">
            <SonIcon />
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
            <HamburgerMenu />
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
              <a
                href="#home"
                className="block py-2 pl-3 pr-4 text-white rounded text-gray-700 md:p-0 dark:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
