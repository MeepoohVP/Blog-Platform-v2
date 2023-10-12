import React, { useEffect } from "react";
import { RiBearSmileFill } from "react-icons/ri";
import "bootstrap-icons/font/bootstrap-icons.css";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import "../../image/Earth.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function Header() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
    
  return (
    <>
    
    <header className={`w-full h-auto text-center pt-24 2xl:pt-36 text-[#3a3b3c]/[.7] dark:text-white relative bg-[#f5f5f5] dark:bg-[#181818]`} data-aos="fade-up">
      <RiBearSmileFill className="text-[192px] mx-auto block text-[#7971EA]/[.7] dark:text-[#9a93f7] animate-[pulse_2.5s_linear_infinite]" />
      <div className="text-4xl 2xl:text-5xl font-semibold inline bg-gradient-to-r dark:from-[#9a93f7] from-[#7971EA] to-pink-300 dark:to-pink-300 text-transparent bg-clip-text">
        Meepooh blog
      </div>
      <div className="mt-4 text-2xl font-medium">
        All Blogs are included here.
      </div>
      {/* <div className="mt-2 pb-8">
        <input
          type="search"
          className="w-64 py-3 pl-4 text-lg rounded-e-sm rounded-s-lg text-black outline-none solid border-[1px] border-[#9a93f7] shadowpurple"
          placeholder="Search blog here"
        />
        <button className="text-black py-3 px-4 text-lg ml-0.5 bg-pink-300 rounded-s-sm rounded-e-xl searchbutton">
          <i className="bi bi-search"></i>
        </button>
      </div> */}
      <div className="relative pb-16 mt-8">
        {/* <div className="h-96 w-[85%] md:flex-1 md:w-3/4 2xl:w-2/3 2xl:hover:w-[67.2%] md:h-96 md:hover:w-[75.5%] mx-auto block bg-[#181818]/70 dark:bg-[#181818] Earth bg-center bg-cover hotblog rounded-lg duration-700 brightness-90 dark:brightness-95">
          <div className="text-4xl text-left text-white px-4 md:px-6 pt-32">Earth Pixel Modeling
          <div className="mt-4"><Link to="/Blog-Platform/Blog"><button className="readbtn text-pink-300 hover:text-white text-xl hover:bg-pink-300/[.7] py-2 px-8 rounded duration-500 border-2 solid border-pink-300/[.7] hover:border-transparent">Read Now</button></Link></div>
          </div>
        </div> */}
      </div>
    </header></>
  );
}
export default Header;
