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
        </div>
      </div>
    </nav>
  );
};

export default Header;
