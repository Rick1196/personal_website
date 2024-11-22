import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HamburgerMenu from "../icons/hamburgerIcon";
import MoonIcon from "../icons/moonIcon";
import SonIcon from "../icons/sonIcon";
import { inIframe } from "../utils/common";

const Header: React.FC<{
  setDarkModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  darkModeEnabled: boolean;
}> = ({ setDarkModeEnabled, darkModeEnabled }) => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="header-container">
      <div className="theme-toggler-container">
        <div className="theme-toggler-title">
          <span><SonIcon /></span>
          <span><MoonIcon /></span>
        </div>
        <div className="theme-toggler">
          <label className="theme-check">
            <input id="first" name="toggle-state" type="radio" checked />
            <span className="checkmark"></span>
          </label>

          <label className="theme-check">
            <input id="second" name="toggle-state" type="radio" />
            <span className="checkmark"></span>
          </label>

        </div>
      </div>
      <div
        className="options-container"
        id="navbar-sticky"
      >

        <div className="mobile-menu">
          <button
            onClick={() => toggleMenu()}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 bg-transparent md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <HamburgerMenu color={darkModeEnabled ? "white" : "black"} />
          </button>
          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul>
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
              <li>
                <Link
                  href="/github_projects"
                  className="block py-2 pl-3 pr-4 text-white rounded text-gray-700 md:p-0 dark:text-white"
                >
                  My Repositories
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="desktop-options">
          <Link
            href="/"
            className="block py-2 pl-3 pr-4 text-white rounded text-gray-700 md:p-0 dark:text-white"
          >
            About me
          </Link>
          <Link
            href="/articles"
            className="block py-2 pl-3 pr-4 text-white rounded text-gray-700 md:p-0 dark:text-white"
          >
            My Articles
          </Link>
          <Link
            href="/github_projects"
            className="block py-2 pl-3 pr-4 text-white rounded text-gray-700 md:p-0 dark:text-white"
          >
            My Repositories
          </Link>
          {/* {!inIframe() ? (
              <li>
                <Link
                  href="/mobile"
                  className="block py-2 pl-3 pr-4 text-white rounded text-gray-700 md:p-0 dark:text-white"
                >
                  Check a mobile device preview
                </Link>
              </li>
            ) : null} */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
