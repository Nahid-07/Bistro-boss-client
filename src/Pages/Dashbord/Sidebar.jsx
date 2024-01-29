import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import UserMenu from "../../components/userMenu/UserMenu";
import CommonMenu from "../../components/commonMenuDashbord/CommonMenu";
import AdminMenu from "../../components/sidebarAdminMenu/AdminMenu";
import useAdmin from "../hooks/useAdmin";

const Sidebar = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  const [isAdmin] = useAdmin()
  // TODO ADMIN AUTH
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">AirCnC</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <FaBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#D1A054] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <h2 className="text-3xl cursor-pointer font-semibold text-center text-gray-800 ">
              <Link to="/"> Bistro Boss</Link>
            </h2>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {isAdmin ? (
              <>
                <AdminMenu></AdminMenu>
              </>
            ) : (
              <>
                <UserMenu></UserMenu>
              </>
            )}
            <div className="divider"></div>
            <CommonMenu></CommonMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
