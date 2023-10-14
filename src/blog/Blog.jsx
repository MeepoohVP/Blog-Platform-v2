import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import earth from "../image/Earth2.jpg";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <>
      <header className="relative w-full h-96 earth bg-cover bg-no-repeat bg-center"></header>
      <main className="dark:text-white px-12 md:px-28 lg:px-56 pt-6 bg-[#f5f5f5] dark:bg-[#282828] w-full 2xl:w-5/6 2xl:px-64 2xl:mx-auto pb-8">
        <div className="text-center text-lg text-[#7971EA] dark:text-pink-400"><i className="bi bi-eye-fill"></i>
        <br/>125</div>
        <div className="text-5xl font-medium">
          Headline Quis magna dolor eu occaecat incididunt.
        </div>
        <div className="text-sm mt-4">
          <Link to="/Blog-Platform/Author" className="flex">
          <div>
            <i className="bi bi-person-fill text-7xl mr-2 align-middle"></i>
          </div>
          <div>
            <span className="text-base dark:text-white/90">
              Written by
              <br />
            </span>
            <span className="text-base dark:text-white/90">
              Author name
              <br />
            </span>
            <span className="dark:text-white/60">7 Oct 2023</span>
          </div></Link>
        </div>
        <div className="text-lg mt-8 2xl:flex">
          <article className="">
            <p className="font-normal">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ea in reprehenderit labore dolor
              minim. Occaecat aliquip ex ullamco consequat mollit magna. Amet
              nostrud amet magna fugiat ipsum nostrud sint tempor pariatur
              laboris commodo. Qui eu fugiat anim qui mollit exercitation
              laboris adipisicing consequat. Exercitation nostrud occaecat
              exercitation non exercitation aute et id aliqua aliquip deserunt.
              Enim non aute culpa consequat in eiusmod mollit. Velit dolor
              aliquip qui ex voluptate id culpa.
            </p>
          </article>
          <figure>
            <img
              src={earth}
              className="mt-4 w-3/4 md:w-1/2 lg:w-1/3 mx-auto rounded 2xl:w-1/2 2xl:mt-0"
              alt="earthmodel"
            />
            <figcaption className="text-center text-white/75 mt-1">
              Model 1
            </figcaption>
          </figure>
        </div>
        <div className="">
          <article>
            <dt className="text-3xl font-medium">Heading 1</dt>
            <dd className="md:ml-6 mt-2 font-normal px-4 2xl:ml-1">
              Aliqua fugiat incididunt consequat culpa dolor eiusmod laboris
              velit Lorem. Adipisicing velit id nulla tempor consequat Lorem
              anim do exercitation reprehenderit et labore culpa. Nostrud irure
              elit officia mollit incididunt do do cillum et incididunt est enim
              nostrud nostrud. Cupidatat proident magna laborum eiusmod laborum
              consectetur est ea. Nulla officia est cupidatat laboris commodo et
              velit cupidatat do. Quis amet dolor eiusmod nostrud deserunt
              eiusmod non. Aliqua duis culpa eu officia irure.
              <ul className="list-disc ml-4 md:ml-8 font-normal">
                <li className="mt-2">
                  Commodo adipisicing exercitation commodo fugiat exercitation
                  ad amet laborum dolore magna.
                </li>
                <li>Eiusmod cillum id commodo sint nulla labore est.</li>
                <li>
                  Irure esse velit eu dolore nostrud duis veniam voluptate
                  mollit.
                </li>
                <li>
                  Irure dolor magna tempor eu exercitation aute est exercitation
                  officia exercitation.
                </li>
              </ul>
            </dd>
          </article>
        </div>
        <div className="mt-12">
          <article>
            <dt className="text-3xl font-medium">Heading 2</dt>
            <dd className="md:ml-6 mt-2 font-normal px-4 2xl:ml-1">
              Ipsum mollit sunt do quis. Consequat eu est ex et voluptate aute
              sunt veniam duis sint. Sint aliqua cupidatat eu ullamco nostrud
              occaecat commodo amet aute. Veniam reprehenderit consequat nostrud
              magna officia non.
              <ol className="list-decimal ml-4 md:ml-8 font-normal">
                <li className="mt-2">
                  Commodo adipisicing exercitation commodo fugiat exercitation
                  ad amet laborum dolore magna.
                </li>
                <li>Eiusmod cillum id commodo sint nulla labore est.</li>
                <li>
                  Irure esse velit eu dolore nostrud duis veniam voluptate
                  mollit.
                </li>
                <li>
                  Irure dolor magna tempor eu exercitation aute est exercitation
                  officia exercitation.
                </li>
              </ol>
            </dd>
          </article>
        </div>
        <div className="w-[95%] md:w-2/3 mx-auto bg-pink-50 shadow-lg dark:bg-[#404040] mt-16 pt-3 py-5 px-3 mb-8 rounded-lg">
          <div className="text-xl font-medium">Comment</div>
          <form className="mt-4 text-center relative">
            <textarea
              rows="4"
              placeholder="Add your comment"
              className="w-[90%] block px-2 py-2 mx-auto bg-white/50 dark:bg-[#282828]/[.3] resize-none solid border-[1px] border-white/20 rounded-md outline-none"
            ></textarea>
            <button
              type="submit"
              className="absolute bottom-1 right-6 md:right-8 2xl:right-11"
            >
              <i class="ri-send-plane-2-line text-lg md:text-xl text-white/75"></i>
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Blog;
