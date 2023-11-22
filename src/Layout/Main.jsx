import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";import Footer from "../Pages/footer]/Footer";
;

const Layout = () => {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;
