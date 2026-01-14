const VideoCard = ({ info }) => {
  if (!info) return;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { url } = thumbnails?.medium;
  const { likeCount } = statistics;
  return (
    <div className="my-2 w-80">
      <img
        className="rounded-lg object-contain"
        src={url}
        alt="thumbnail"
      ></img>
      <p className="text-md font-bold">{title}</p>
      <p className="text-sm text-gray-600 font-bold">{channelTitle}</p>
      <p className="text-sm text-gray-600 font-semibold">
        {likeCount} <span className="text-xs text-gray-500">views</span>
      </p>
    </div>
  );
};

export default VideoCard;
