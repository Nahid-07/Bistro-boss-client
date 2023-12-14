import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="px-6 py-2">
      <nav className="lg:flex justify-between items-center hidden">
        <div>
          <h1 className="text-2xl uppercase font-bold">Bistro boss</h1>
          <h4 className="text-2xl uppercase font-bold">Restaurant</h4>
        </div>
        <ul className="flex space-x-6 text-lg">
          <Link to='/'><li>Home</li></Link>
          <li>Contact Us</li>
          <li>Dashbord</li>
          <Link to='/ourmenu'><li>Our menu</li></Link>
          <li>Our Shop</li>
          <li>Sign Out</li>
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
          <li>Contact Us</li>
          <li>Dashbord</li>
          <Link to='/ourmenu'><li>Our menu</li></Link>
          <li>Our Shop</li>
          <li>Sign Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
