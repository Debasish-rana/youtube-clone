import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videosData, setVideoData] = useState([]);
  //console.log(videosData[0]);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);
    setVideoData(json.items);
  };

  return (
    <div>
      <ButtonList />
      <div className="flex flex-wrap">
        {videosData.map((video) => (
          <Link to={"/youtube-clone/watch?v=" + video.id}>
            <VideoCard key={video.id} videoData={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
