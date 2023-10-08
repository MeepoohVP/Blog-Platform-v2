import React, { useRef } from "react";
import Footer from "./components/Footer";
function Write() {
  const containerRef = useRef(null);
  const AddTitle = (e) => {
    const postNode = document.createElement("textarea");
    postNode.placeholder = "Title";
    postNode.className = "mt-8 text-4xl text-white bg-[#404040] pt-2 w-[99%] px-4 outline-none";
    containerRef.current.appendChild(postNode);
  }
  const AddParagraph = (e) => {
    const postNode = document.createElement("textarea");
    postNode.placeholder = "Paragraph";
    postNode.rows = "5";
    postNode.className = "text-lg w-[99%] px-4 outline-none mt-4 text-white bg-[#404040] pt-2";
    containerRef.current.appendChild(postNode);
  }
  const AddList = (e) => {
    const postNode = document.createElement("ul");
    postNode.className = "list-disc text-white";
    postNode.innerHTML = '<li><input class="mt-4 mb-4 bg-[#404040] text-lg outline-none h-10" type="text"/></li>';
    containerRef.current.appendChild(postNode);
  }
  

  return (
    <>
    <form className="w-full h-auto">
    <div className="relative w-full h-96 Earth bg-cover bg-no-repeat bg-center">
        <div className="w-1/2 md:w-1/4 mx-auto top-1/2 -translate-y-1/2 relative grid grid-cols-1 border border-gray-300 bg-white/50 rounded-lg">
          <div className="rounded-l-lg p-4 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
            <label
              className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
              for="restaurantImage"
            >
              Select image
              <input
                id="restaurantImage"
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
              />
            </label>
            <button
              className="inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
            >
              remove image
            </button>
          </div>
        </div>
        
    </div>
    <div className="px-12 md:px-28 lg:px-56 pt-6 bg-[#282828] w-full 2xl:px-64">
      <div ref={containerRef}><textarea className="text-4xl text-white bg-[#404040] pt-2 w-[99%] px-4 outline-none" type="text" placeholder="Title"></textarea>
      <textarea rows="5" className="text-lg w-[99%] px-4 outline-none mt-4 text-white bg-[#404040] pt-2" type="text" placeholder="Paragraph"></textarea>
      <ul className="list-disc text-white">
        <li><input className="mt-4 bg-[#404040] text-lg outline-none h-10" type="text"/><button><i className="bi bi-x align-base text-xl text-red-400"></i></button></li>
        <li><input className="mt-4 bg-[#404040] text-lg outline-none h-10" type="text"/><button><i className="bi bi-x align-base text-xl text-red-400"></i></button></li>
        <li><input className="mt-4 bg-[#404040] text-lg outline-none h-10" type="text"/><button><i className="bi bi-x align-base text-xl text-red-400"></i></button></li>
        
      </ul>
      <ol className="list-decimal text-white mb-2">
        <li><input className="mt-4 bg-[#404040] text-lg outline-none h-10" type="text"/><button><i className="bi bi-x align-base text-xl text-red-400"></i></button></li>
        <li><input className="mt-4 bg-[#404040] text-lg outline-none h-10" type="text"/><button><i className="bi bi-x align-base text-xl text-red-400"></i></button></li>
        <li><input className="mt-4 bg-[#404040] text-lg outline-none h-10" type="text"/><button><i className="bi bi-x align-base text-xl text-red-400"></i></button></li>
      </ol>
      </div>
    <button className="mb-4 mr-2 text-[#282828]/[.8] font-bold rounded-sm bg-pink-300/80 hover:bg-pink-300 p-1" onClick={AddTitle}>Add Title</button>
    <button className="mb-4 mr-2 text-[#282828]/[.8] font-bold rounded-sm bg-pink-300/80 hover:bg-pink-300 p-1" onClick={AddParagraph}>Add Paragraph</button>
    <button className="mb-4 mr-2 text-[#282828]/[.8] font-bold rounded-sm bg-pink-300/80 hover:bg-pink-300 p-1" onClick={AddList}>Add List</button>
    <br/><div className="text-center pb-8"><button className="bg-green-300/80 text-xl rounded-md hover:bg-green-400 py-1 px-2" type="submit">Create blog</button></div>
  
    </div>
    </form>
    <Footer/>
    </>
  );
}
export default Write;
