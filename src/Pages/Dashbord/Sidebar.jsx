import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
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
            <nav>
              <NavLink
                to="my-bookings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-black" : "text-black"
                  }`
                }
              >
                <span className="mx-4 font-medium">User Home</span>
              </NavLink>
              <NavLink
                to="my-bookings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-black"
                  }`
                }
              >
                <span className="mx-4 font-medium">Reservation</span>
              </NavLink>
              <NavLink
                to="my-bookings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-black"
                  }`
                }
              >
                <span className="mx-4 font-medium">Payment History</span>
              </NavLink>
              <NavLink
                to="my-bookings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-black"
                  }`
                }
              >
                <span className="mx-4 font-medium">My Cart</span>
              </NavLink>
              <NavLink
                to="my-bookings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-black"
                  }`
                }
              >
                <span className="mx-4 font-medium">Add review</span>
              </NavLink>
              <NavLink
                to="my-bookings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-black"
                  }`
                }
              >
                <span className="mx-4 font-medium">My Booking</span>
              </NavLink>
            </nav>
          </div>
        </div>

        {/* <div>
            <hr />
            <PrimaryButton
              handler={logout}
              classes='flex block w-full rounded-full items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform'
            >
              
  
              <span className='mx-4 font-medium'>Logout</span>
            </PrimaryButton>
          </div> */}
      </div>
    </>
  );
};

export default Sidebar;
