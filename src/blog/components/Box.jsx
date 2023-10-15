import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
function Box(props) {
    return (
      <div className="allblog duration-500 w-4/5 lg:w-[30%] md:w-[45%] rounded-md overflow-hidden mx-auto mt-8 h-auto dark:bg-[#404040] solid border-[1.25px] border-black/40 hover:border-black dark:border-transparent" data-aos-duration="500">
       <Link to="/Blog-Platform/Blog"> <div style={{ 
      backgroundImage: `url(${props.bgBlog})` 
    }} className={`w-full h-56 bg-left bg-cover bg-repeat duration-500 hover:bg-right`}></div>
    <div className="mx-4 pt-4"><button className="border-[1.5px] solid border-[#7971EA] dark:border-pink-400 px-2 py-1 text-xs text-[#7971EA] dark:text-pink-400">{props.category}</button></div>
        <div className={`text-black/70 dark:text-white text-3xl font-bold mx-4 ${props.Ref}`}>{props.heading}</div>
        <div className="text-black/60 dark:text-white/[.7] pt-4 text-lg font-light mx-4 mb-2">Adipisicing culpa ut consectetur sint incididunt elit...</div>
        <hr className="opacity-20" />
        <div className="text-black/70 dark:text-white/[.8] text-base p-2"><i className="bi bi-person-fill"></i> {props.author} &nbsp;&nbsp;&nbsp;<span className="text-[#7971EA] dark:text-pink-200"><i className="bi bi-eye"></i> {props.views}</span></div>
     </Link> </div>
      
    );
  }
export default Box;