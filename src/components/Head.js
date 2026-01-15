import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache?.[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // cache
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full bg-white grid grid-flow-col p-3 fixed shadow-lg items-center">
      <div className="flex items-center gap-5 col-span-1">
        <span
          onClick={handleToggleMenu}
          className="material-symbols-outlined cursor-pointer"
        >
          menu
        </span>
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/960px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        ></img>
      </div>

      <div className="col-span-10">
        <div className="flex items-center justify-center">
          <input
            className="border border-gray-400 w-1/2 rounded-l-3xl py-0.5 px-2"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className="bg-gray-100 border border-gray-400 rounded-r-3xl px-4">
            <span class="material-symbols-outlined">search</span>
          </button>
        </div>
        {showSuggestions && suggestions && (
          <div className="bg-white w-2/5 px-8 fixed mx-64 rounded-lg shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  className="text-gray-700 border-b-2 border-gray-50"
                  key={index}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <span class="material-symbols-outlined w-10">account_circle</span>
      </div>
    </div>
  );
};

export default Head;
