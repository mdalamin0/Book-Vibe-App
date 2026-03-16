import { NavLink } from "react-router";
import './NavBar.css'

const NavBar = () => {
  const links = <>
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:bg-transparent hover:text-[#23BE0A] duration-75 ${isActive ? "active" : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/listed-books"
          className={({ isActive }) =>
            `hover:bg-transparent hover:text-[#23BE0A] duration-75 ${isActive ? "active" : ""
            }`
          }
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/changelog"
          className={({ isActive }) =>
            `hover:bg-transparent hover:text-[#23BE0A] duration-75 ${isActive ? "active" : ""
            }`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  </>

  return (
    <div className="navbar p-0">
      <div className="navbar-start mt-8 mb-4">
        <div className="dropdown">
          <div tabIndex="0" role="button" className=" cursor-pointer lg:hidden px-0 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
            {links}
          </ul>
        </div>
        <a className="text-sm md:text-xl font-bold">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal space-x-1 font-bold">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <button className='btn  
          px-4 py-2 rounded  font-semibold text-white cursor-pointer bg-[#23BE0A] mr-3'>
          Sign In
        </button>
        <button className='btn  
          px-4 py-2 rounded  font-semibold text-white cursor-pointer bg-[#59C6D2] '>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;