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
function Nav() {
  const [isActive, setIsActive] = useState(false);

  const classMenu = isActive
    ? "z-[4] right-0  opacity-1 lg:opacity-1"
    : "z-[-1] -right-56 md:-right-80 opacity-1 lg:opacity-[1] lg:z-[4]";
  const classIcon = isActive
    ? "bi bi-x text-white/[.7]"
    : "bi bi-list text-white/[.7]";
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
        className={`w-1/2 md:w-1/3 lg:w-full lg:right-0 h-full fixed text-right bg-[#7971EA]/[.8] top-[-1px] duration-700 shadow-lg lg:h-auto lg:bg-[#3a3b3c] lg:flex lg:pt:2 lg:opacity-1 ${classMenu}`}
      >
        <div className="logo font-normal text-left text-4xl text-black hidden lg:block mt-1 ml-4 lg:grow pb-3">
          {/* <img
            src={me}
            className="w-2/5 rounded-full h-auto shadow-md md:w-1/4 lg:w-12"
            alt="Kittikorn"
          /> */}
          <div className="mt-2 2xl:mt-9"><i className="ri-bear-smile-fill bg-gradient-to-r from-[#9a93f7] to-pink-300 text-transparent bg-clip-text align-middle"></i> <span className="text-2xl 2xl:text-3xl bg-gradient-to-r from-[#9a93f7] to-pink-300 text-transparent bg-clip-text font-bold">MEEPOOH</span></div>
        </div>
        <ul className="text-3xl pb-6 font-base block text-white/[.7] mt-16 lg:mt-0 relative lg:translate-y-0 top-0 lg:inline-flex lg:text-xl lg:text-[#c6c3fa] lg:text-right">
          <li className="text-center lg:mt-6 lg:mr-8 2xl:mt-12 hover:lg:text-[#9a93f7] duration-500">
            <NavLink to ="/blog-platform/home">
              Home
            </NavLink>
          </li>
          <li
            className="text-center mt-12 lg:mt-6 lg:mr-8 2xl:mt-12 hover:lg:text-[#9a93f7] duration-500"
            onClick={handleClick}
          >
            <NavLink to="/blog-platform/blog">Blog</NavLink>
          </li>
          <li className="text-center mt-12 lg:mt-6 lg:mr-8 2xl:mt-12 hover:lg:text-[#9a93f7] duration-500">
          <NavLink to="/blog-platform/write">Write</NavLink>
          </li>
          <li className="text-center mt-12 lg:mt-6 lg:mr-8 2xl:mt-12 hover:lg:text-[#9a93f7] duration-500">
          <NavLink to="/blog-platform/blog">Faqs</NavLink>
          </li>
          <li className="text-center mt-8 lg:mt-6 lg:mr-3 2xl:mt-12">
            <button className="lg:text-[#9a93f7] lg:shadow lg:shadow-[#9a93f7] text-xl hover:text-[#c6c3fa] duration-500 font-extrabold lg:text-sm p-1 border-[1px] solid border-transparent lg:border-[#9a93f7] hover:lg:border-[#c6c3fa]">
              <a href="#">
                <i className="bi bi-box-arrow-in-right lg:hidden align-middle text-2xl"></i>{" "}
                <span>Log in</span>
              </a>
            </button>
          </li>
          <li className="text-center mt-3 lg:mt-6 lg:mr-8 bg-transparent lg:bg-[#9a93f7] hover:bg-[#c6c3fa] duration-500 2xl:mt-12">
            <button className="lg:text-[#3a3b3c] lg:shadow lg:shadow-[#9a93f7] text-xl duration-500 lg:text-sm p-1 font-extrabold">
              <a href="#">
                <i className="bi bi-pencil-square align-middle lg:hidden text-2xl"></i>{" "}
                <span>Sign in</span>
              </a>
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/Blog-Platform/Home' element={<Home/>}/>
        <Route path='/Blog-Platform/Blog' element={<Blog/>}/>
        <Route path='/Blog-Platform/Write' element={<Write/>}/>
        <Route path='/Blog-Platform/Author' element={<Author/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes></BrowserRouter>
     
    </>
  );
}

export default Nav;
