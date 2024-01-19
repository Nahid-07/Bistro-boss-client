import React from 'react';
import { FaCalendarAlt, FaCalendarCheck, FaCartPlus, FaHome } from 'react-icons/fa';
import { IoWalletSharp } from 'react-icons/io5';
import { MdReviews } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <nav>
      <NavLink
        to="admin-home"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-black" : "text-black"
          }`
        }
      >
        <FaHome className="w-5 h-5" />
        <span className="mx-4 font-medium">Admin Home</span>
      </NavLink>
      <NavLink
        to="add-items"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <FaCalendarCheck className="w-5 h-5" />
        <span className="mx-4 font-medium">Add Items</span>
      </NavLink>
      <NavLink
        to="manage-items"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <IoWalletSharp className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Items</span>
      </NavLink>
      <NavLink
        to="manage-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <FaCartPlus className="h-5 w-5" />
        <span className="mx-4 font-medium">Manage Bookings</span>
      </NavLink>
      <NavLink
        to="all-users"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <MdReviews className="h-5 w-5" />
        <span className="mx-4 font-medium">All Users</span>
      </NavLink>
    </nav>
    );
};

export default AdminMenu;