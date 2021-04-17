import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
