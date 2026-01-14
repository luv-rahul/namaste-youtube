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
