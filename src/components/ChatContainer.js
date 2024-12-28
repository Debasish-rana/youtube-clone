import React, { useState } from "react";
import LiveChat from "./LiveChat";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, generateRandomId } from "../utils/helper";

const ChatContainer = () => {
  const [sendMassage, setSendMassage] = useState();

  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          massage: generateRandomId(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="border-2 border-black rounded-lg p-2 bg-neutral-100 ml-[-12px] md:ml-1 mt-3 md:mt-0 w-[370px] md:w-[450px] ">
        <p>Live Chat</p>
        <div className="w-[450px]  h-[460px] overflow-y-auto p-2 flex flex-col-reverse">
          {chatData.map((c, index) => (
            <LiveChat key={index} chatName={c.name} chatComment={c.massage} />
          ))}
        </div>
      </div>
      <form
        className="p-3 border border-black ml-[-12px] md:ml-0"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ 
            name: "Debasish Rana",
            massage:sendMassage  
          }));
        }}
      >
        <input
          className="w-[200px] md:w-72 p-2 rounded-3xl border-2 border-black"
          type="chat"
          value={sendMassage}
          onChange={(e) => {
            setSendMassage(e.target.value);
          }}
        />
        <button className="ml-4 md:ml-7 bg-cyan-200 p-2 px-8 rounded-2xl">Send</button>
      </form>
    </>
  );
};

export default ChatContainer;
