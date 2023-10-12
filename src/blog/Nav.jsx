import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Write from "./Write";
import Author from "./Author";
import NotFound from "./NotFound";
import Switcher from "./darkmode/Switch";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  
  const classMenu = isActive
    ? "z-[4] right-0  opacity-1 lg:opacity-1"
    : "z-[-1] -right-56 md:-right-80 opacity-1 lg:opacity-[1] lg:z-[4]";
  const classIcon = isActive
    ? "bi bi-x text-white/[.7]"
    : "bi bi-list text-black/70 dark:text-white/[.7]";
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="w-full fixed text-right z-[5] lg:hidden">
        <button className="mr-2 text-4xl" onClick={handleClick}>
          <i className={classIcon}></i>
        </button>
      </div>
      <BrowserRouter>
        <nav
          className={`w-1/2 md:w-1/3 lg:w-full lg:right-0 h-full fixed text-right bg-[#7971EA]/[.8] lg:bg-[#FBFAF5]/[.9] dark:lg:bg-[#3a3b3c]/[.9] top-[-1px] duration-700 shadow-lg lg:h-auto lg:flex lg:pt:2 lg:opacity-1 ${classMenu}`}
        >
          <div className="font-normal text-left text-4xl  hidden lg:block mt-1 ml-4 lg:grow pb-3">
         
            <div className="mt-2 2xl:mt-9">
              <i className="ri-bear-smile-fill bg-gradient-to-r dark:from-[#9a93f7] from-[#7971EA] to-pink-300 dark:to-pink-300 text-transparent bg-clip-text align-middle"></i>{" "}
              <span className="text-2xl 2xl:text-3xl bg-gradient-to-r dark:from-[#9a93f7] from-[#7971EA] to-pink-300 dark:to-pink-300 text-transparent bg-clip-text font-bold">
                MEEPOOH
              </span>
            </div>
          </div>
          <ul className="text-3xl pb-6 font-medium block text-white/[.7] mt-16 lg:mt-0 relative lg:translate-y-0 top-0 lg:flex lg:text-xl lg:text-[#7971EA]  dark:lg:text-white lg:text-right">
            <li className="text-center lg:mt-6 lg:mr-8 2xl:mt-12 hover:lg:text-[#9a93f7] duration-500" onClick={handleClick}>
              <NavLink to="/Blog-Platform/">Home</NavLink>
            </li>
            <li
              className="text-center mt-12 lg:mt-6 lg:mr-8 2xl:mt-12 hover:lg:text-[#9a93f7] duration-500"
              onClick={handleClick}
            >
              <NavLink to="/Blog-Platform/Blog">Blog</NavLink>
            </li>
            <li className="text-center mt-12 lg:mt-6 lg:mr-8 2xl:mt-12 hover:lg:text-[#9a93f7] duration-500" onClick={handleClick}>
              <NavLink to="/Blog-Platform/Write">Write</NavLink>
            </li>
            <li className="text-center mt-12 lg:mt-6 lg:mr-8 2xl:mt-12 hover:lg:text-[#9a93f7] duration-500" onClick={handleClick}>
              <NavLink to="/Blog-Platform/Blog">Faqs</NavLink>
            </li>
            <li className="text-center mt-8 lg:mt-6 lg:mr-3 2xl:mt-12">
              <button className="dark:lg:text-[#9a93f7] lg:text-[#7971EA] lg:shadow lg:shadow-[#9a93f7] text-xl duration-500 hover:rounded-xl font-extrabold lg:text-sm p-1 border-[1px] solid border-transparent lg:border-[#9a93f7]">
                <a href="#">
                  <i className="bi bi-box-arrow-in-right lg:hidden align-middle text-2xl"></i>{" "}
                  <span>Log in</span>
                </a>
              </button>
            </li>
            <li className="text-center mt-3 lg:mt-6 lg:mr-8 bg-transparent duration-500 2xl:mt-12">
              <button className="lg:text-white/70 dark:lg:text-[#3a3b3c] lg:shadow lg:shadow-[#9a93f7] lg:bg-[#7971EA] dark:lg:bg-[#9a93f7] hover:rounded-2xl dark:hover:lg:bg-[#c6c3fa] text-xl duration-500 lg:text-sm px-[6px] py-1 font-bold">
                <a href="#">
                  <i className="bi bi-pencil-square align-middle lg:hidden text-2xl"></i>{" "}
                  <span>Register</span>
                </a>
              </button>
            </li>
            <li className="text-center mt-3 lg:mt-6 lg:mr-8 bg-transparent duration-500 md:text-white dark:lg:text-white lg:text-black 2xl:mt-12">
              <Switcher/>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Blog-Platform/" element={<Home />} />
          <Route path="/Blog-Platform/Blog" element={<Blog />} />
          <Route path="/Blog-Platform/Write" element={<Write />} />
          <Route path="/Blog-Platform/Author" element={<Author />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Nav;
