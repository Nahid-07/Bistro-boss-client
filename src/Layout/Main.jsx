import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/footer/Footer";
;

const Layout = () => {
  const location = useLocation();
  const pathLogin = location.pathname.includes('login');
  const pathSignup = location.pathname.includes('signup');
  console.log(pathLogin,pathSignup);
  return (
    <>
    
      {pathLogin || <nav>
        <Navbar></Navbar>
      </nav>}
      <main>
        <Outlet></Outlet>
      </main>
       {pathLogin || <footer>
        <Footer></Footer>
      </footer>}
    </>
  );
};

export default Layout;
