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
