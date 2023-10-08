import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import Box from "./Box";
function BoxContent() {
  return (
    <main className="bg-[#282828]">
      <div className="flex flex-wrap md:px-8 lg:px-32 2xl:px-80">
        <Box /><Box /><Box /> <Box /><Box /><Box /><Box /><Box /><Box /><Box /><Box /><Box /><Box /><Box/><Box /><Box /><Box/><Box />
      </div>
      <div className="text-center mt-8 pb-16"><button className="text-[#404040] text-3xl py-1 px-3 bg-white/75 hover:bg-white/90 duration-150 rounded-lg mx-1"><i class="bi bi-caret-left-fill"></i></button>
      <button className="text-[#404040] px-3 py-1 text-3xl rounded-lg bg-pink-200 hover:bg-pink-300 duration-150 mx-1"><i class="bi bi-caret-right-fill"></i></button></div>
    </main>
  );
}
export default BoxContent;
