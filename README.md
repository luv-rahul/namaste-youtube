# 🚀 Namaste Youtube - Machine Coding Interview & Building

**Special Note: The code written here can be little different according to changes done later. This just shows the sequence of tutorial followed.**

## 📋 Machine Coding Interview

### 1. Requirements

### 2. TechStack

- React JS
- Redux
- Tailwind
- React Router Dom
- Bundler
- JEST Testing

> **Note:** Spend only 5 minutes on the above.

### 3. Planning

**Youtube UI Structure:**

```
/**
 * Header
 * Body
 * - Sidebar
 *    - Menu Items
 * - Main Container
 *    - Buttons List
 *    - Video Container
 *        - Video Card
 */
```

---

## 🎨 Create React App

### Installation

```bash
npx create-react-app namaste-youtube
```

### Install Tailwind

```bash
npm install -D tailwindcss@3
npx tailwindcss init
```

**Configure Tailwind**

> Refer: https://v3.tailwindcss.com/docs/guides/create-react-app

---

## 🏗️ Building Components

### Head.js

```js
const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 shadow-lg items-center">
      <div className="flex items-center gap-5 col-span-1">
        <span class="material-symbols-outlined">menu</span>
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
        <button className="bg-gray-100 border border-gray-400 rounded-r-3xl px-5">
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
```

### Sidebar.js

```js
const Sidebar = () => {
  return (
    <div className="px-5 shadow-lg w-60">
      <div className="border-b-2 border-gray-400 my-3 p-2">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-400 my-3 p-2">
        <h1 className="font-bold flex items-center gap-1">
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
        <h1 className="font-bold flex items-center gap-1">
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
        <h1 className="font-bold flex items-center gap-1">
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
        <h1 className="font-bold flex items-center gap-1">
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
  );
};

export default Sidebar;
```

---

## 🎛️ Control Sidebar with Redux

### Installation

```bash
npm i react-redux
npm i @reduxjs/toolkit
```

### appStore.js

```js
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default appStore;
```

### appSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { isMenuOpen } = appSlice.actions;
export default appSlice.reducer;
```

### App.js

```js
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
```

### Head.js (With Redux)

```js
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
```

### Sidebar.js (With Redux)

```js
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="px-5 shadow-lg w-60">
        <div className="border-b-2 border-gray-400 my-3 p-2">
          <ul>
            <li>Home</li>
            <li>Shorts</li>
          </ul>
        </div>
        <div className="border-b-2 border-gray-400 my-3 p-2">
          <h1 className="font-bold flex items-center gap-1">
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
          <h1 className="font-bold flex items-center gap-1">
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
          <h1 className="font-bold flex items-center gap-1">
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
          <h1 className="font-bold flex items-center gap-1">
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
```

---

## 📺 Main Body

### MainContainer.js

```js
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="m-4">
      <ButtonList></ButtonList>
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default MainContainer;
```

### constants.js

```js
export const listOfButtons = [
  "All",
  "Music",
  "Mixes",
  "Playlists",
  "Arijit Singh",
  "Romantic Music",
  "Music Arrangements",
  "Theme music",
  "T-Series",
  "New-Age Music",
  "Tanishk Bagchi",
  "Mohit Chauhan",
  "Reverberation",
  "Sachin-Jigar",
];
```

### ButtonList.js

```js
import Button from "./Button";
import { listOfButtons } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {listOfButtons.map((button, index) => (
        <Button btnName={button} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
```

### Button.js

```js
const Button = ({ btnName }) => {
  return (
    <button className="px-2 mx-2 text-sm border border-gray-400 bg-gray-400/50 rounded-xl">
      {btnName}
    </button>
  );
};

export default Button;
```

---

## 🔑 Youtube API

> **Note:** Generated Youtube API KEY

### constants.js (Updated)

```js
export const listOfButtons = [
  "All",
  "Music",
  "Mixes",
  "Playlists",
  "Arijit Singh",
  "Romantic Music",
  "Music Arrangements",
  "Theme music",
  "T-Series",
  "New-Age Music",
  "Tanishk Bagchi",
  "Mohit Chauhan",
  "Reverberation",
  "Sachin-Jigar",
];

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;
```

### VideoContainer.js

```js
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="p-5 grid grid-cols-4 m-2">
      {videos.length > 0 &&
        videos.map((video) => <VideoCard info={video} key={video.id} />)}
    </div>
  );
};

export default VideoContainer;
```

### VideoCard.js

```js
const VideoCard = ({ info }) => {
  if (!info) return;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails } = snippet;
  const { url } = thumbnails?.standard || "";
  const { likeCount } = statistics;
  return (
    <div className="w-96 my-2">
      <img
        className="rounded-lg object-contain"
        src={url}
        alt="thumbnail"
      ></img>
      <p className="text-sm text-gray-600 font-bold">{channelTitle}</p>
      <p className="text-sm text-gray-600 font-semibold">
        {likeCount} <span className="text-xs text-gray-500">views</span>
      </p>
    </div>
  );
};

export default VideoCard;
```

---

## 🛣️ Routing

### App.js (With Routing)

```js
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
```

### Body.js (With Outlet)

```js
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
```

### WatchPage.js

```js
const WatchPage = () => {
  return <div>WatchPage</div>;
};

export default WatchPage;
```

### VideoContainer.js (With Links)

```js
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="p-5 grid grid-cols-3 m-2">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
```

---

## 🎬 Watch Page

### appSlice.js (Updated)

```js
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
```

### WatchPage.js (Complete)

```js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-3">
      <iframe
        className="rounded-lg"
        width="1080"
        height="600"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default WatchPage;
```

---

# 🚀 Namaste Youtube - Advanced Features in Youtube Project

## ⚡ Debouncing

### Performance Comparison

**Typing Speed:**

- Typing Slow = 200ms
- Typing Fast = 30ms

**Performance Impact:**

Without Debouncing:

- iPhone Pro Max = 14 char × 1000 people = **140,000 API Calls**

With Debouncing:

- 3 API calls (depending upon typing speed) × 1000 people = **3,000 API Calls**

### How Debouncing Works

**Debouncing with 200ms:**

- If difference between 2 key strokes is **less than 200ms** → **DECLINE API Call**
- If difference is **>200ms** → **Make an API Call**

---

## 🔍 Search API Setup

### Youtube Search API

> **API URL:** `http://clients1.google.com/complete/search?hl=en&output=toolbar&q=YOURSEARCHTERM`

### constants.js

```js
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
```

---

## 🎯 Implementing Debouncing

### Head.js (Basic Implementation)

```js
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // make an API call after every key press
    // but if the difference between 2 API calls is <200ms
    // decline the API call

    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - i
   *  - render the component
   *  - useEffect called
   *  - start timer => make api call after 200ms
   *
   * key - ip
   *  - searchQuery changes => state changes => re-render triggers => destroy the component (useEffect return method)
   *  - re-render the component
   *  - useEffect called
   *  - start timer => make api call after 200ms
   */

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
```

---

## 📋 Search Suggestions UI

### Head.js (With Suggestions)

```js
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed w-full bg-white grid grid-flow-col p-4 shadow-lg items-center">
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
```

---

## 💾 Caching Search Suggestions

### searchSlice.js

```js
const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer;
```

### appStore.js (Updated)

```js
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
  },
});

export default appStore;
```

### Head.js (With Caching)

```js
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
    <div className="fixed w-full bg-white grid grid-flow-col p-4 shadow-lg items-center">
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
```

---

## 💬 Comments Section

> **Note:** Recursion happening in `CommentList`

### CommentsContainer.js (Initial Version)

```js
const commentsData = [
  {
    id: 1,
    name: "Rahul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
    replies: [
      {
        id: 1,
        name: "Rahul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
        replies: [],
      },
      {
        id: 2,
        name: "Rahul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
        replies: [],
      },
      {
        id: 3,
        name: "Rahul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
        replies: [],
      },
      {
        id: 4,
        name: "Rahul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    name: "Rahul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
    replies: [],
  },
  {
    id: 3,
    name: "Rahul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
    replies: [],
  },
  {
    id: 4,
    name: "Rahul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2">
      <span className="material-symbols-outlined w-10">account_circle</span>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return (
    <div>
      {commentsData?.map((comment) => (
        <div>
          <Comment key={comment.id} data={comment} />
          <div className="ml-4 pl-4  border-l-2 border-l-gray-400">
            <CommentList commentsData={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="px-2 bg-gray-100 my-4 rounded-lg">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
```

---

## 🔄 Recursive Comments (Final Version)

### CommentsContainer.js

```js
import { commentsData } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2">
      <span className="material-symbols-outlined w-10">account_circle</span>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return (
    <div>
      {commentsData?.map((comment) => (
        <div key={comment.id}>
          <Comment data={comment} />
          <div className="ml-4 pl-4  border-l-2 border-l-gray-400">
            <CommentList commentsData={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="px-2 bg-gray-100 my-4 rounded-lg">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
```

---

## 📊 Features Summary

| Feature                | Description                                   | Performance Benefit         |
| ---------------------- | --------------------------------------------- | --------------------------- |
| **Debouncing**         | Delays API calls until user stops typing      | Reduces API calls by ~95%   |
| **Caching**            | Stores previous search results                | Instant results for repeats |
| **Recursive Comments** | Nested comment structure with unlimited depth | Clean, scalable UI          |

---

# Namaste Youtube - Wrapping up Youtube Project

## Live Chat

Challenges:

- Get Live Data -> Data Layer
- Update the UI -> UI Layer

---

- Data (Live)

* Web Sockets UI-------Server(Two way Handshake) -> No regular interval

- Stock Market (Live - Real Time)
- Whatsapp

* API Polling UI<------Server -> Interval

- GMAIL
- Cricbuzz

chatSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
```

appStore.js

```js
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
```

helper.js

```js
export const liveChatMessages = [
  { id: 1, name: "Rahul", message: "Hello everyone 👋" },
  { id: 2, name: "Ananya", message: "This stream is awesome 🔥" },
  { id: 3, name: "Vikram", message: "Watching from Delhi 🇮🇳" },
  { id: 4, name: "Priya", message: "Can you explain this part again?" },
  { id: 5, name: "Aman", message: "First time here, hi all 😊" },
  { id: 6, name: "Neha", message: "Audio is clear now 👍" },
  { id: 7, name: "Suresh", message: "Loved the last example 💯" },
  { id: 8, name: "Kiran", message: "Please share the repo link 🙏" },
  { id: 9, name: "Pooja", message: "This helped a lot, thanks!" },
  { id: 10, name: "Rohit", message: "Lag ho raha hai thoda 😅" },
  { id: 11, name: "Sneha", message: "Perfect explanation 👌" },
  { id: 12, name: "Arjun", message: "Is this beginner friendly?" },
  { id: 13, name: "Mehul", message: "Subscribed just now 🔔" },
  { id: 14, name: "Isha", message: "From Mumbai ❤️" },
  { id: 15, name: "Dev", message: "Can you slow down a bit?" },
  { id: 16, name: "Simran", message: "Best live session till now 🔥" },
  { id: 17, name: "Nikhil", message: "React rocks 🚀" },
  { id: 18, name: "Tanya", message: "Hello chat 💕" },
];

export const randomMessageGenerator = () => {
  const random = Math.floor(Math.random() * liveChatMessages.length);
  const message = liveChatMessages[random];
  return message;
};
```

LiveChat.js

```js
import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomMessageGenerator } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    /*API Polling*/
    const i = setInterval(() => {
      const randomMessage = randomMessageGenerator();
      dispatch(addMessage(randomMessage));
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="mx-1 bg-slate-200 rounded-lg p-3 h-[600px] w-full overflow-y-scroll">
      <h1>Live Chat 🔴</h1>
      {chatMessages &&
        chatMessages.map((c) => (
          <ChatMessage name={c.name} key={c.id} message={c.message} />
        ))}
    </div>
  );
};

export default LiveChat;
```

ChatMessages.js

```js
const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex items-center shadow-md p-2 rounded-sm">
        <span class="material-symbols-outlined w-10">account_circle</span>
        <h1 className="font-semibold">{name}:</h1>
        <p className="px-2 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
```

LiveChat.js

```js
import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomMessageGenerator } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    /*API Polling*/
    const i = setInterval(() => {
      const randomMessage = randomMessageGenerator();
      dispatch(addMessage(randomMessage));
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <h1 className="font-bold bg-white mx-2 rounded-t-lg px-3 py-1 border-2">
        Live Chat 🔴
      </h1>
      <div className="mx-2 bg-slate-200 rounded-b-lg p-3 h-[560px] w-full overflow-y-scroll flex flex-col-reverse">
        {chatMessages &&
          chatMessages.map((c) => (
            <ChatMessage name={c.name} key={c.id} message={c.message} />
          ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Rahul",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="border-b border-gray-400"
      >
        <input
          type="text"
          placeholder="Enter message"
          className="px-2 mx-2 w-3/4 mt-2 border-b border-black"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="bg-green-300 px-2 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
```

ChatSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.slice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
```

# Namaste React - useMemo(), useCallback(), useRef()

- Study from documentation.
