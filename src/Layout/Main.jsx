import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/footer/Footer";
;

const Layout = () => {
  const location = useLocation();
  const path = location.pathname.includes('login')
  console.log(path);
  return (
    <>
      {path || <nav>
        <Navbar></Navbar>
      </nav>}
      <main>
        <Outlet></Outlet>
      </main>
      {path || <footer>
        <Footer></Footer>
      </footer>}
    </>
  );
};

export default Layout;
