import React from "react";
const SonIcon: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 18.5C13.7239 18.5 15.3772 17.8152 16.5962 16.5962C17.8152 15.3772 18.5 13.7239 18.5 12C18.5 10.2761 17.8152 8.62279 16.5962 7.40381C15.3772 6.18482 13.7239 5.5 12 5.5C10.2761 5.5 8.62279 6.18482 7.40381 7.40381C6.18482 8.62279 5.5 10.2761 5.5 12C5.5 13.7239 6.18482 15.3772 7.40381 16.5962C8.62279 17.8152 10.2761 18.5 12 18.5V18.5Z"
        stroke={color || "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
        stroke={color || "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SonIcon;
