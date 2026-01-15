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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    id: 1,
    name: "Rahul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
    replies: [
      {
        id: 1,
        name: "Rahul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita!",
        replies: [
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

export const OFFSET_LIVE_CHAT = 10;