import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Box from "./Box";
import Earth2 from "../../image/Earth2.jpg";
import jsLearn from "../../image/jslearn.jpg";
import health from "../../image/health.jpg";
import halloween from "../../image/halloween.jpg";
import python from "../../image/python.jpg";
import trade from "../../image/trade.jpg";
import design from "../../image/design.jpg";
import coffee from "../../image/coffee.jpg";
import game from "../../image/game.jpg";
import deposit from "../../image/deposit.jpg";
import graphic from "../../image/graphic.jpg";
import xmas from "../../image/xmas.jpg";
function BoxContent() {
  const data = require("./../data.json");
  const blogs = data.blogs;
  const text = useRef();
  const Allblog = () => {
    return (
     <> <Box
          bgBlog={health}
          heading={blogs[1].title}
          views={blogs[1].views}
          author={blogs[1].author}
          category={blogs[1].category}
        />
        <Box
          bgBlog={jsLearn}
          heading={blogs[0].title}
          views={blogs[0].views}
          author={blogs[0].author}
          category={blogs[0].category}
        />
        <Box
          bgBlog={Earth2}
          heading={blogs[2].title}
          views={blogs[2].views}
          author={blogs[2].author}
          category={blogs[2].category}
        />
        <Box
          bgBlog={halloween}
          heading={blogs[3].title}
          views={blogs[3].views}
          author={blogs[3].author}
          category={blogs[3].category}
        />
        <Box
          bgBlog={python}
          heading={blogs[4].title}
          views={blogs[4].views}
          author={blogs[4].author}
          category={blogs[4].category}
        />
        <Box
          bgBlog={trade}
          heading={blogs[5].title}
          views={blogs[5].views}
          author={blogs[5].author}
          category={blogs[5].category}
        />
        <Box
          bgBlog={design}
          heading={blogs[6].title}
          views={blogs[6].views}
          author={blogs[6].author}
          category={blogs[6].category}
        />
        <Box
          bgBlog={coffee}
          heading={blogs[7].title}
          views={blogs[7].views}
          author={blogs[7].author}
          category={blogs[7].category}
        />
        <Box
          bgBlog={game}
          heading={blogs[8].title}
          views={blogs[8].views}
          author={blogs[8].author}
          category={blogs[8].category}
        />
        <Box
          bgBlog={deposit}
          heading={blogs[9].title}
          views={blogs[9].views}
          author={blogs[9].author}
          category={blogs[9].category}
        />
        <Box
          bgBlog={graphic}
          heading={blogs[10].title}
          views={blogs[10].views}
          author={blogs[10].author}
          category={blogs[10].category}
        />
        <Box
          bgBlog={xmas}
          heading={blogs[11].title}
          views={blogs[11].views}
          author={blogs[11].author}
          category={blogs[11].category}
        /></>
    );
  }
  const Health = () =>{
    return (
      <>
      <Box
          bgBlog={health}
          heading={blogs[1].title}
          views={blogs[1].views}
          author={blogs[1].author}
          category={blogs[1].category}
        />
        <Box
          bgBlog={coffee}
          heading={blogs[7].title}
          views={blogs[7].views}
          author={blogs[7].author}
          category={blogs[7].category}
        />
      </>
    );
  }
  const Programming = () => {
    return(<>
      <Box
          bgBlog={jsLearn}
          heading={blogs[0].title}
          views={blogs[0].views}
          author={blogs[0].author}
          category={blogs[0].category}
        />
        <Box
          bgBlog={python}
          heading={blogs[4].title}
          views={blogs[4].views}
          author={blogs[4].author}
          category={blogs[4].category}
        />
      </>);
  }
  const Design = () => {
    return (
      <>
      <Box
          bgBlog={design}
          heading={blogs[6].title}
          views={blogs[6].views}
          author={blogs[6].author}
          category={blogs[6].category}
        />
        <Box
          bgBlog={graphic}
          heading={blogs[10].title}
          views={blogs[10].views}
          author={blogs[10].author}
          category={blogs[10].category}
        />
      </>
    );
  }
  const Game = () =>{
    return(
      <>
      <Box
          bgBlog={game}
          heading={blogs[8].title}
          views={blogs[8].views}
          author={blogs[8].author}
          category={blogs[8].category}
        />
      </>
    );
  }
  const Celebrate = () =>{
    return(
      <>
      <Box
          bgBlog={halloween}
          heading={blogs[3].title}
          views={blogs[3].views}
          author={blogs[3].author}
          category={blogs[3].category}
        />
         <Box
          bgBlog={xmas}
          heading={blogs[11].title}
          views={blogs[11].views}
          author={blogs[11].author}
          category={blogs[11].category}
        />
      </>
    );
  }
  const Investment = () => {
    return (
      <>
      <Box
          bgBlog={trade}
          heading={blogs[5].title}
          views={blogs[5].views}
          author={blogs[5].author}
          category={blogs[5].category}
        />
        <Box
          bgBlog={deposit}
          heading={blogs[9].title}
          views={blogs[9].views}
          author={blogs[9].author}
          category={blogs[9].category}
        />
      </>
    );
  }
  const Astronomy = () => {
    return (
      <>
      <Box
          bgBlog={Earth2}
          heading={blogs[2].title}
          views={blogs[2].views}
          author={blogs[2].author}
          category={blogs[2].category}
        />
      </>
    );
  }
  const [box, setBox] = useState(<Allblog/>);
  const Search = () => {
    console.log(text.current.value.toLowerCase());
    setBox(<Allblog/>);
    for (let index = 0; index < blogs[index]['category'].length; index++) {
      if (blogs[0]['category'].toLowerCase().indexOf(text.current.value.toLowerCase()) > -1) {
        setBox(<Programming/>);
      }
      if (blogs[1]['category'].toLowerCase().indexOf(text.current.value.toLowerCase()) > -1) {
        setBox(<Health/>);
      }
      if (blogs[2]['category'].toLowerCase().indexOf(text.current.value.toLowerCase()) > -1) {
        setBox(<Astronomy/>);
      }
      if (blogs[5]['category'].toLowerCase().indexOf(text.current.value.toLowerCase()) > -1) {
        setBox(<Investment/>);
      }
      if (blogs[6]['category'].toLowerCase().indexOf(text.current.value.toLowerCase()) > -1) {
        setBox(<Design/>);
      }
      if (blogs[3]['category'].toLowerCase().indexOf(text.current.value.toLowerCase()) > -1) {
        setBox(<Celebrate/>);
      }
      if (blogs[8]['category'].toLowerCase().indexOf(text.current.value.toLowerCase()) > -1) {
        setBox(<Game/>);
      }
    }
  }
  return (
    <main className="bg-[#fffafa] dark:bg-[#282828]">
      <div className="mt-2 pb-2 pt-8 md:px-8 lg:px-32 2xl:px-80">
        <input
          type="search"
          className="w-64 py-3 pl-4 text-lg rounded-e-sm rounded-s-lg text-black outline-none solid border-[1px] border-[#9a93f7] shadowpurple"
          placeholder="Search blog here"
          ref={text}/>
        <button className="text-black py-3 px-4 text-lg ml-0.5 bg-pink-300 rounded-s-sm rounded-e-xl searchbutton" onClick={Search}>
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="flex flex-wrap md:px-8 lg:px-32 2xl:px-80">
      {box}
      </div>
      <div className="text-center mt-8 pb-16">
        <button className="text-[#404040] border-2 border-black/80 dark:border-transparent solid text-3xl py-1 px-3 bg-white/75 hover:bg-black/5 dark:hover:bg-white/90 duration-150 rounded-lg mx-1">
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <button className="text-[#404040] border-2 border-black/80 dark:border-transparent solid px-3 py-1 text-3xl rounded-lg bg-pink-200 hover:bg-pink-300 duration-150 mx-1">
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </div>
    </main>
  );
}
export default BoxContent;
