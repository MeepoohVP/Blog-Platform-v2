import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import Box from "./Box";
function BoxContent() {
  return (
    <main className="bg-[#fffafa] dark:bg-[#282828]">
      <div className="mt-2 pb-2 pt-8 md:px-8 lg:px-32 2xl:px-80">
        <input
          type="search"
          className="w-64 py-3 pl-4 text-lg rounded-e-sm rounded-s-lg text-black outline-none solid border-[1px] border-[#9a93f7] shadowpurple"
          placeholder="Search blog here"
        />
        <button className="text-black py-3 px-4 text-lg ml-0.5 bg-pink-300 rounded-s-sm rounded-e-xl searchbutton">
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="flex flex-wrap md:px-8 lg:px-32 2xl:px-80">
        <Box /><Box /><Box /> <Box /><Box /><Box /><Box /><Box /><Box /><Box /><Box /><Box /><Box /><Box/><Box /><Box /><Box/><Box />
      </div>
      <div className="text-center mt-8 pb-16"><button className="text-[#404040] border-2 border-black/80 dark:border-transparent solid text-3xl py-1 px-3 bg-white/75 hover:bg-black/5 dark:hover:bg-white/90 duration-150 rounded-lg mx-1"><i class="bi bi-caret-left-fill"></i></button>
      <button className="text-[#404040] border-2 border-black/80 dark:border-transparent solid px-3 py-1 text-3xl rounded-lg bg-pink-200 hover:bg-pink-300 duration-150 mx-1"><i class="bi bi-caret-right-fill"></i></button></div>
    </main>
  );
}
export default BoxContent;
