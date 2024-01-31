import {
    FaCartPlus,
    FaCalendarAlt,
    FaHome,
    FaCalendarCheck,
  } from "react-icons/fa";
  import { MdReviews,MdMenuOpen } from "react-icons/md";
  import { IoWalletSharp } from "react-icons/io5";
  import { IoIosContact } from "react-icons/io";
  import { CiShop } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <nav>
      <NavLink
        to="user-home"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-black" : "text-black"
          }`
        }
      >
        <FaHome className="w-5 h-5" />
        <span className="mx-4 font-medium">User Home</span>
      </NavLink>
      <NavLink
        to="reservation"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <FaCalendarCheck className="w-5 h-5" />
        <span className="mx-4 font-medium">Reservation</span>
      </NavLink>
      <NavLink
        to="my-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <IoWalletSharp className="w-5 h-5" />
        <span className="mx-4 font-medium">Payment History</span>
      </NavLink>
      <NavLink
        to="myCart"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <FaCartPlus className="h-5 w-5" />
        <span className="mx-4 font-medium">My Cart</span>
      </NavLink>
      <NavLink
        to="add-review"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <MdReviews className="h-5 w-5" />
        <span className="mx-4 font-medium">Add review</span>
      </NavLink>
      <NavLink
        to="my-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-black"
          }`
        }
      >
        <FaCalendarAlt className="h-5 w-5" />
        <span className="mx-4 font-medium">My Booking</span>
      </NavLink>
    </nav>
  );
};

export default UserMenu;
