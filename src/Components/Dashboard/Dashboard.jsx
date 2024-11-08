
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { SlSettings } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { FaUserFriends, FaCode } from "react-icons/fa";
import { Fa7 } from "react-icons/fa6";
import { LuHelpingHand } from "react-icons/lu";
import { useMediaQuery } from "react-responsive";
import { CgMenuMotion  } from "react-icons/cg";

import { FaChartLine , FaUserTie } from "react-icons/fa";

import { Link, NavLink, useLocation, useRoutes } from "react-router-dom";


const Dashboard = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };




  return (
    <div className="">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
          } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-gray-800 text-white  shadow-xl z-[999]  max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed  h-full min-h-screen "
      >
        <Link to="/">
          <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-2 px-2 ">
            <img
              src="https://i.ibb.co/v3czJrS/munshi-whole-sale.jpg"
              width={35}
              alt=""
              className="rounded-full py-2 "
            />
            <div className="flex items-center justify-between px-1 gap-6 ">

              <span className="text-md whitespace-pre  font-semibold text-gray-500">Burger Valley </span>
              <img src="https://i.ibb.co/9HmwSVd/avatar4.jpg" alt="" className="className='w-10 h-10 border-2 border-white rounded-full dark:border-gray-800'" />

            </div>
          </div>
        </Link>



        <div className="flex flex-col h-full  min-h-screen ">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/dashboard"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive 
                    ? "p-2.5 flex  rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium  "
                    : "p-2.5 flex rounded-md gap-6  items-center md:cursor-pointer duration-300 font-medium"
              }>
                <FaUserTie  size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/all-news"}

                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium bg-gray-800 text-[#FF9D00]  "
                      : "p-2.5 flex rounded-md gap-6  items-center md:cursor-pointer duration-300 font-medium"
                }
              >
                <BsPerson size={23} className="min-w-max" />
               All News
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/add-news"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium  bg-gray-800 text-[#FF9D00] "
                    : "p-2.5 flex rounded-md gap-6  items-center md:cursor-pointer duration-300 font-medium"
              }>
                <FaChartLine size={23} className="min-w-max" />
               Add News 
              </NavLink>
            </li>
            <li>
              <NavLink to={"/problem_solve_team"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium  bg-blue-100 text-blue-600"
                    : "p-2.5 flex rounded-md gap-6  items-center md:cursor-pointer duration-300 font-medium"
              }>
                <FaCode size={23} className="min-w-max" />
                Route 3 4
              </NavLink>
            </li>


            <li>
              <NavLink to={"/office"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium  bg-blue-100 text-blue-600"
                    : "p-2.5 flex rounded-md gap-6  items-center md:cursor-pointer duration-300 font-medium"
              }>
                <SlSettings size={23} className="min-w-max" />
                Route 5
              </NavLink>
            </li>
            <li>
              <NavLink to={"/design"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium  bg-blue-100 text-blue-600"
                    : "p-2.5 flex rounded-md gap-6  items-center md:cursor-pointer duration-300 font-medium"
              }>
                <SlSettings size={23} className="min-w-max" />
                Route 6
              </NavLink>
            </li>
            <li>
              <NavLink to={"/setting"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium  bg-blue-100 text-blue-600"
                    : "p-2.5 flex rounded-md gap-6  items-center md:cursor-pointer duration-300 font-medium"
              }>
                <SlSettings size={23} className="min-w-max" />
                Route 7
              </NavLink>
            </li>
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <ul>
                    <li>
                      <NavLink to={"/"} className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                            ? "p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium  bg-blue-100 text-blue-600"
                            : "p-2.5 flex rounded-md gap-6  items-center md:cursor-pointer duration-300 font-medium"
                      }>
                        <FaUserFriends size={23} className="min-w-max" />
                        Invite Teammates
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/"} className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                            ? "p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium  bg-blue-100 text-blue-600"
                            : "p-2.5 flex rounded-md gap-6   items-center md:cursor-pointer duration-300 font-medium"
                      }>
                        <LuHelpingHand size={23} className="min-w-max" />
                        Help Center
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/"} className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                            ? "p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium  bg-blue-100 text-blue-600"
                            : "p-2.5 flex rounded-md gap-6  items-center md:cursor-pointer duration-300 font-medium"
                      }>
                        <Fa7 size={23} className="min-w-max" />
                        Days Left On trial
                      </NavLink>
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
          )}
        </div>





      </motion.div>


      <div className="w-full lg:flex shadow-lg ">
        {/* navbar start */}
        <div className="flex justify-between items-center px-5">
          <div className=" py-3 md:hidden text-white " onClick={() => setOpen(true)}>
            <CgMenuMotion  size={20} />
          </div>

          <img src="https://i.ibb.co/9HmwSVd/avatar4.jpg" alt="" className="className=' md:hidden  w-10 h-10 border-2  border-white rounded-full dark:border-gray-800'" />
        </div>
        {/* navbar end */}

        {/* main content start*/}
      
        {/* main content end*/}
      </div>





    </div>
  );
};

export default Dashboard;
