import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 opacity-60 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow opacity-60 bg-black rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link><span className="text-xl lg:text-3xl font-bold">BISTRO BOSS </span><br /><span className="text-lg lg:text-3xl">Restaurant</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
