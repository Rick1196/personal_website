import React from "react";
const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <article className="w-full shadow-card border border-grey-500 rounded p-4 min-h-[150px]">
      {children}
    </article>
  );
};

export default Card;
