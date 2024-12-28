import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const showSidebar = useSelector((store) => store.sidebar.showSidebar);
  //console.log(showSidebar);

  return (
    <div className="hidden md:block">
      {showSidebar === true ? (
        <div className="w-64 bg-white p-7 shadow-2xl">
          <ul>
            <li className="p-3"><Link to={"/youtube-clone"}>Home</Link></li>
            <li className="p-3">Shorts</li>
            <li className="p-3">Videos</li>
            <li className="p-3">Live</li>
          </ul>
          <h1 className="p-3 font-bold">Subsciption</h1>
          <ul>
            <li className="p-3">Music</li>
            <li className="p-3">Sports</li>
            <li className="p-3">Gaming</li>
            <li className="p-3">Movies</li>
          </ul>
          <h1 className="p-3 font-bold">Watch later</h1>
          <ul>
            <li className="p-3">Music</li>
            <li className="p-3">Sports</li>
            <li className="p-3">Gaming</li>
            <li className="p-3">Movies</li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;
