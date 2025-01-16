import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4  sm:px-60 lg:px-4 border border-black ${className}`}>
      {children}
    </div>
  );
};

export default Container;
