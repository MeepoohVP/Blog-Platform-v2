import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
function Box(props) {
    return (
      
      <div className="allblog duration-500 w-2/3 lg:w-[30%] md:w-[45%] rounded-md overflow-hidden mx-auto mt-8 h-auto bg-[#404040]">
       <Link to="/Blog-Platform/Blog"> <div className="earth w-full h-56 bg-center bg-cover invert"></div>
        <div className="text-white pt-4 text-3xl font-bold mx-4">Headline</div>
        <div className="text-white/[.7] pt-4 text-lg font-light mx-4 mb-2">Adipisicing culpa ut consectetur sint incididunt elit...</div>
        <hr className="opacity-20" />
        <div className="text-white/[.8] text-base p-2"><i className="bi bi-person-fill"></i> author</div>
     </Link> </div>
      
    );
  }
export default Box;