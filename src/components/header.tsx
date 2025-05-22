"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useContext, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import HamburgerMenu from "../../icons/hamburgerIcon";
import MoonIcon from "../../icons/moonIcon";
import SonIcon from "../../icons/sonIcon";
import { ThemeModeContext } from "../../utils/contexts";

const MobileLink = dynamic(() => import("./mobile-item"), {
  ssr: false,
});


const Header: React.FC = () => {
  const { setDarkModeEnabled, darkModeEnabled } = useContext(ThemeModeContext);
  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = useCallback((value: string) => {
    value === 'dark' ? setDarkModeEnabled(true) : setDarkModeEnabled(false);
  }, [])


  return (
    <nav className="header-container">
      <div className="theme-toggler-container">
        <div className="theme-toggler-title">
          <span><SonIcon color={darkModeEnabled ? 'white' : undefined} /></span>
          <span><MoonIcon color={darkModeEnabled ? 'white' : undefined} /></span>
        </div>
        <div className="theme-toggler">
          <label className="theme-check">
            <input id="light" name="toggle-state" type="radio" value={'light'} onChange={({ target: { value } }) => handleThemeChange(value)} checked={!darkModeEnabled} />
            <span className="checkmark"></span>
          </label>

          <label className="theme-check">
            <input id="dark" name="toggle-state" type="radio" value={'dark'} onChange={({ target: { value } }) => handleThemeChange(value)} checked={darkModeEnabled} />
            <span className="checkmark"></span>
          </label>

        </div>
      </div>
      <div
        className="options-container"
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
              {/* <li>
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
              </li> */}
            </ul>
          </div>
        </div>
        <div className="desktop-options">
          <Link
            href="/"
          >
            About me
          </Link>
          {/* <Link
            href="/articles"
          >
            My Articles
          </Link>
          <Link
            href="/github_projects"
          >
            My Repositories
          </Link> */}
          <MobileLink />
        </div>
      </div>
    </nav>
  );
};

export default Header;
