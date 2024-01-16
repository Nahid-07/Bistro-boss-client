import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../hooks/useCart";
import CartSidebar from "../../../components/cartSidebar/CartSidebar";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [isOpen, setIsopen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [cartItems] = useCart();
  const handleLogout = () => {
    logout();
  };

  console.log(isOpen);
  return (
    <>
      <div className="px-6 py-2">
        <nav className="lg:flex justify-between items-center hidden">
          <div>
            <h1 className="text-2xl uppercase font-bold">Bistro boss</h1>
            <h4 className="text-2xl uppercase font-bold">Restaurant</h4>
          </div>
          <ul className="flex items-center space-x-6 text-lg">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/contactUs">
              <li>Contact Us</li>
            </Link>
            <Link to="/dashbord">
              <li>Dashbord</li>
            </Link>
            <Link to="/ourmenu">
              <li>Our menu</li>
            </Link>
            <Link to="/ourShop">
              <li>Our Shop</li>
            </Link>
            <>
              <button
                onClick={() => setIsopen(!isOpen)}
                className="p-2 rounded-full relative"
              >
                <IoCartOutline className="text-3xl" />{" "}
                <span className="absolute top-1 right-0 bg-red-600 rounded-full px-1 text-white text-xs">
                  +{cartItems.length}
                </span>
              </button>
            </>
            {user ? (
              <button
                onClick={handleLogout}
                className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log out
              </button>
            ) : (
              <Link to="/login">
                <li>Login</li>
              </Link>
            )}
          </ul>
        </nav>
        {/* responsive */}

        <div className="flex justify-between items-center py-3 lg:hidden">
          {/* navbar responsive switch */}
          <div>
            <h1 className="text-xl uppercase font-bold">Bistro boss</h1>
            <h4 className="text-xl uppercase font-bold">Restaurant</h4>
          </div>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w- h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>

        <nav
          className={`absolute z-10 lg:hidden bg-white left-0 w-full p-6 duration-200 ${
            open ? "-top-[1000px]" : "top-[80px]"
          }`}
        >
          <ul className="flex flex-col items-center justify-center space-y-6 text-lg">
            <li>Home</li>
            <Link to="/contactUs">
              <li>Contact Us</li>
            </Link>
            <li>Dashbord</li>
            <Link to="/ourmenu">
              <li>Our menu</li>
            </Link>
            <Link to="/ourShop">
              <li>Our Shop</li>
            </Link>
            <Link to="/cart">
              <li className="p-2 rounded-full relative">
                <IoCartOutline className="text-3xl" />{" "}
                <span className="absolute top-1 right-0 bg-red-600 rounded-full px-1 text-white text-xs">
                  +0
                </span>
              </li>
            </Link>
            {user ? (
              <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Log out
              </button>
            ) : (
              <Link to="/login">
                <li>Login</li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
      <CartSidebar isOpen={isOpen}></CartSidebar>
    </>
  );
};

export default Navbar;
