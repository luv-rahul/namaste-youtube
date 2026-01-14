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
