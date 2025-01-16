import React from "react";

const Box = ({ children, className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-12 sm:p-10 lg:p-10 ${className}`}>
      {children}
    </div>
  );
};

export default Box;
