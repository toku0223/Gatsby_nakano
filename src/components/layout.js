import React from "react";
import "../styles/style.css";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main
        className="layout-body"
      >{children}</main>
      <Footer />
    </div>
  );
}

export default Layout
