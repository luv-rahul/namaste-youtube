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
