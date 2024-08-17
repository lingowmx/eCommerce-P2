import React from "react";

export const Layout = ({children}) => {
  return <div className="md:flex md:flex-col md:mt-20 md:items-center">
    {children}
  </div>;
};
