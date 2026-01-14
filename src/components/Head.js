import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg items-center">
      <div className="flex items-center gap-5 col-span-1">
        <span
          onClick={handleToggleMenu}
          class="material-symbols-outlined cursor-pointer"
        >
          menu
        </span>
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/960px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        ></img>
      </div>
      <div className="col-span-10 flex items-center justify-center">
        <input
          className="border border-gray-400 w-1/2 rounded-l-3xl py-0.5 px-2"
          type="text"
          placeholder="Search"
        ></input>
        <button className="bg-gray-100 border border-gray-400 rounded-r-3xl px-4">
          <span class="material-symbols-outlined">search</span>
        </button>
      </div>
      <div>
        <span class="material-symbols-outlined w-10">account_circle</span>
      </div>
    </div>
  );
};

export default Head;
