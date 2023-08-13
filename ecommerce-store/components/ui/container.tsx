import React from "react";

interface ConatinerProps {
  children: React.ReactNode;
}

const Container: React.FC<ConatinerProps> = ({ children }) => {
  return <div className=" max-w-7xl mx-auto">{children}</div>;
};

export default Container;
