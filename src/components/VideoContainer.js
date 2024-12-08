import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const VideoContainer = () => {
  const [videosData, setVideoData] = useState([]);
  const query = useSelector((store) => store.query.queryValue);
  console.log(query);

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
          <Link key={video.id} to={"/youtube-clone/watch?v=" + video.id}>
            <VideoCard videoData={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
