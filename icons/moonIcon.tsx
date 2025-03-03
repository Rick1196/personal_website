import React from "react";

const MoonIcon: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.03003 12.42C2.39003 17.57 6.76003 21.76 11.99 21.99C15.68 22.15 18.98 20.43 20.96 17.72C21.78 16.61 21.34 15.87 19.97 16.12C19.3 16.24 18.61 16.29 17.89 16.26C13 16.06 9.00003 11.97 8.98003 7.13999C8.97003 5.83999 9.24003 4.60999 9.73003 3.48999C10.27 2.24999 9.62003 1.65999 8.37003 2.18999C4.41003 3.85999 1.70003 7.84999 2.03003 12.42Z"
        stroke={color || "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default MoonIcon;
