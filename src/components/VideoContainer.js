import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";

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
    {videosData.map(video => <VideoCard key={video.id} videoData={video}/>)}
    </div>
    </div>
  );
};

export default VideoContainer;
