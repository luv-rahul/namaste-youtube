import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="fixed top-16 bottom-0 left-0 w-56 bg-white z-40 overflow-y-auto px-5">
        <div className="border-b-2 border-gray-400 my-3 p-2">
          <ul>
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <li>Shorts</li>
          </ul>
        </div>
        <div className="border-b-2 border-gray-400 my-3 p-2">
          <h1 className="font-bold flex items-center gap-1 text-sm">
            Subscriptions
            <span className="material-symbols-outlined scale-75">
              arrow_forward_ios
            </span>
          </h1>

          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
        <div className=" border-b-2 border-gray-400 my-3 p-2">
          <h1 className="font-bold flex items-center gap-1 text-sm">
            You
            <span className="material-symbols-outlined scale-75">
              arrow_forward_ios
            </span>
          </h1>

          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
        <div className=" border-b-2 border-gray-400 my-3 p-2">
          <h1 className="font-bold flex items-center gap-1 text-sm">
            Explore
            <span className="material-symbols-outlined scale-75">
              arrow_forward_ios
            </span>
          </h1>

          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
        <div className=" border-b-2 border-gray-400 my-3 p-2">
          <h1 className="font-bold flex items-center gap-1 text-sm">
            More From Youtube
            <span className="material-symbols-outlined scale-75">
              arrow_forward_ios
            </span>
          </h1>

          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sidebar;
