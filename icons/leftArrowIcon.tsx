import React from "react";

const LeftArrowIcon: React.FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      width="9"
      height="18"
      viewBox="0 0 9 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.08997 1.08001L1.56997 7.60001C0.799965 8.37001 0.799965 9.63001 1.56997 10.4L8.08997 16.92"
        stroke={color || "black"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftArrowIcon;
