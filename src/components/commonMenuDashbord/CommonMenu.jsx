import React from "react";
import { CiShop } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom";

const CommonMenu = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <FaHome className="w-5 h-5" />
        <span className="mx-4 font-medium">Home</span>
      </NavLink>
      <NavLink
        to="/ourmenu"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <MdMenuOpen className="h-5 w-5" />
        <span className="mx-4 font-medium">Menu</span>
      </NavLink>
      <NavLink
        to="/ourShop"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <CiShop className="h-5 w-5" />
        <span className="mx-4 font-medium">Shop</span>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <IoIosContact className="h-5 w-5" />
        <span className="mx-4 font-medium">Contact</span>
      </NavLink>
    </nav>
  );
};

export default CommonMenu;
