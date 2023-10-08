import Box from "./components/Box";
import Panda from "../image/panda.jpeg";
import Footer from "./components/Footer";
function Author() {
    return (
        <>
        <div>
        <header className="relative w-full z-0  h-56 earth bg-cover bg-no-repeat bg-center"></header>
        <div className="block relative text-center z-3 -mt-16 w-full"><img src={Panda} className="mx-auto w-1/3 md:w-40 rounded-full" />
        <div className="text-white/90 text-3xl mt-2">Author name</div>
        <div className="mt-1">
        <a href="#" className="mx-2 text-white/90 text-3xl">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="mx-2 text-white/90 text-3xl">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" className="mx-2 text-white/90 text-3xl">
          <i className="bi bi-github"></i>
        </a>
        </div>
        </div>
        
        </div>
        <main className="bg-[#181818] mb-16">
        <div className="text-white text-5xl block mt-16 px-16 lg:px-36 2xl:px-80">Blog</div>
      <div className="flex flex-wrap md:px-8 lg:px-32 2xl:px-80">
        <Box /><Box /><Box /><Box /><Box /><Box /></div></main>
        <Footer/></>
    );
}
export default Author;