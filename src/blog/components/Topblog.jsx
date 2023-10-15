import { Link } from "react-router-dom";
function TopBlog(props) {
  return (
    <div className="w-auto flex mx-4 bg-black/5 dark:bg-white/5 mb-2">
      <div
        style={{
          backgroundImage: `url(${props.bgBlog})`,
        }}
        className="w-1/3 md:w-1/4 h-auto bg-cover bg-center"
      ></div>
      <div className="mx-3 flex-1">
        <div className="text-base mt-1 md:mt-2 md:text-xl font-medium">
          {props.head}
        </div>
        <div className="text-xs dark:text-white/80 md:text-sm">
          Pariatur adipisicing incididunt id commodo reprehenderit est{" "}
          <span className="text-black/30 dark:text-white/60 dark:hover:text-[#9a93f7] hover:text-[#7971EA]">
            <Link to="/Blog-Platform/Blog">Read more...</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
export default TopBlog;
