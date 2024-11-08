import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import "./manu.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 font-primary bg-black duration-300">
      <div className="container w-full px-1 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">

          {/* Logo Section Start */}
          <div className='flex items-center gap-4 mr-5'>
            {/* <a
              className="text-xl xl:text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white duration-300"
              href="/"
            >
              Burger Valley
            </a> */}
            <a rel="noopener noreferrer" href="#" className="flex justify-center lg:justify-start">
              <img src={logo} alt="Burger Valley" className='w-20 mr-5' />
            </a>
          </div>
          {/* Logo Section End */}

          {/* Navbar Menu Button Section Start */}
          <button
            className="text-white duration-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={toggleNavbar}
          >
            <div className={`hamburger ${navbarOpen ? 'is-active' : ''}`} id="hamburger-menu">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </button>
          {/* Navbar Menu Button Section End */}

        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <div className='w-full flex justify-between items-center mt-5 lg:mt-0 mb-2 lg:mb-0'>

            {/* Nav Links And Routes Section Start */}
            <div>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-3 xl:gap-5">
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    HOME
                  </NavLink>

                </li>
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/all-foods"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    Menus
                  </NavLink>

                </li>
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/about-us"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    ABOUT US
                  </NavLink>
                </li>
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/faq"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    FAQ<span className='lowercase'>s</span>
                  </NavLink>
                </li>
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/gallery"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/news"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    News
                  </NavLink>
                </li>
              

                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="add_news"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    Add News
                  </NavLink>
                </li>
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="dashboard"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Nav Links And Routes Section End */}

            {/* User Section Start */}
            <div >
              <ul className=" flex lg:items-center justify-center items-end flex-col lg:flex-row list-none lg:ml-auto gap-3 xl:gap-5">

                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="login"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    LOGIN
                  </NavLink>
                </li>
                <a className=" lg:my-1 xl:mx-3 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75 border-2 border-[#FF9D00] rounded-md">
                  <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    <p className='flex items-center mx-2 xl:mx-3 my-1 xl:my-2'>REGISTER</p>
                  </NavLink>
                </a>
              </ul>
            </div>
            {/* User Section End */}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
