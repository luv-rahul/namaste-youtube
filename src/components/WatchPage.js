import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="pt-20 px-2 w-full">
      <div className="flex w-full">
        <div className="flex-[3]">
          <iframe
            className="rounded-lg w-full"
            height="600"
            src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
            title="YouTube video player"
          />
        </div>

        <div className="flex-1">
          <LiveChat />
        </div>
      </div>

      <div className="w-3/4">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
