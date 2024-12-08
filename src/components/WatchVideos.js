import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import ChatContainer from "./ChatContainer";

const WatchVideos = () => {
  const [SearchParams] = useSearchParams();
  console.log(SearchParams.get("v"));
  const videoId = SearchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div>
      <div className="p-8 flex ">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="pl-2 ">
          <ChatContainer />
        </div>
      </div>
      <div>
        <Comment />
      </div>
    </div>
  );
};

export default WatchVideos;
