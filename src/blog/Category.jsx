import { useState, useRef, useEffect } from "react";
import Earth2 from "../image/Earth2.jpg";
import jsLearn from "../image/jslearn.jpg";
import health from "../image/health.jpg";
import halloween from "../image/halloween.jpg";
import python from "../image/python.jpg";
import trade from "../image/trade.jpg";
import design from "../image/design.jpg";
import coffee from "../image/coffee.jpg";
import game from "../image/game.jpg";
import deposit from "../image/deposit.jpg";
import graphic from "../image/graphic.jpg";
import xmas from "../image/xmas.jpg";
import Box from "./components/Box";
import Footer from "./components/Footer";
function Category() {
  const data = require("./data.json");
  const showBlog = useRef();
  const blogs = data.blogs
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
  const changeCategory = (e) => {
      setBox(<Allblog/>);
      if (e.target.value === "Programming") {
        setBox(<Programming/>);
      };
      if (e.target.value === "Health") {
        setBox(<Health/>);
      };
      if (e.target.value === "Design") {
        setBox(<Design/>)
      }
      if (e.target.value === "Game") {
        setBox(<Game/>);
      }
      if (e.target.value === "Celebrate") {
        setBox(<Celebrate/>);
      }
      if (e.target.value === "Astronomy") {
        setBox(<Astronomy/>);
      }
      if (e.target.value === "Investment"){
        setBox(<Investment/>);
      }  
  }
  
  
  return (
    <>
    <main className="bg-[#fffafa] dark:bg-[#282828] lg:pt-24">
      <div className="px-2 pt-8 lg:pt-0 md:mx-12 lg:mx-32">
        <select onChange={changeCategory} className="outline-none p-1 shadow">
        <option className="" value="All">All</option>
          <option className="" value="Programming">Programming</option>
          <option value="Health">Health</option>
          <option value="Design">Design</option>
          <option value="Game">Game</option>
          <option value="Celebrate">Celebrate</option>
          <option value="Astronomy">Astronomy</option>
          <option value="Investment">Investment</option>
        </select>
      </div>
      <div className="flex flex-wrap md:px-8 lg:px-32 2xl:px-80" ref={showBlog}>
       {box} </div>
      <div className="text-center mt-8 pb-16">
        <button className="text-[#404040] border-2 border-black/80 dark:border-transparent solid text-3xl py-1 px-3 bg-white/75 hover:bg-black/5 dark:hover:bg-white/90 duration-150 rounded-lg mx-1">
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <button className="text-[#404040] border-2 border-black/80 dark:border-transparent solid px-3 py-1 text-3xl rounded-lg bg-pink-200 hover:bg-pink-300 duration-150 mx-1">
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </div>
    </main>
    <Footer/></>
  );
}
export default Category;
