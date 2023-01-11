import React from "react";

const HamburgerMenu: React.FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H9M0 7H9M0 3.82353H9" stroke={color || "black"} />
    </svg>
  );
};

export default HamburgerMenu;
