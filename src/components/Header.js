import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleshowSidebar } from "../utils/appSlice";
import { YOUTUBE_QUERY_API } from "../utils/constant";
import { addQueryvalue } from "../utils/querySlice";
import { addCache } from "../utils/cacheSlice";

const Header = () => {
  const [queryval, setQueryVal] = useState("");
  const [suggetion, setSuggetion] = useState([]);
  const [suggetionBar, setSuggetionBar] = useState(true);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.cache);
  console.log(searchCache);

  dispatch(addQueryvalue(queryval));
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[queryval]) {
        setSuggetion([queryval]);
      } else {
        querySuggetionApi();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [queryval]);
  const querySuggetionApi = async () => {
    const data = await fetch(YOUTUBE_QUERY_API + queryval);
    const json = await data.json();
    setSuggetion(json[1]);
    console.log(json);
    dispatch(
      addCache({
        [queryval]: [json[1]],
      })
    );
  };
  const handleClick = () => {
    dispatch(toggleshowSidebar());
  };
  //console.log(showSidebar);

  return (
    <div className="flex m-4 justify-between shadow-2xl p-2">
      <div className="flex">
        <img
          onClick={handleClick}
          className="w-8 h-8 mx-2 sm:mx-4 sm:w-[28px] "
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          alt="hamburger menu"
          srcset=""
        />

        <img
          className="h-3 w-[45px] sm:w-36 mt-3 sm:h-6 sm:mt-0"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s"
          alt="youtube icon"
        />
      </div>
      <div className=" rounded-full ">
        <input
          type="text"
          placeholder="search"
          className="w-[143px] h-[38px] sm:w-[500px] sm:h-auto px-4 p-2 border-2 rounded-l-full"
          value={queryval}
          onChange={(e) => {
            setQueryVal(e.target.value);
          }}
          onFocus={() => setSuggetionBar(true)}
          onBlur={() => setSuggetionBar(false)}
        ></input>
        <button className="px-4 p-2.5 w-14 rounded-r-full bg-slate-200">
          🔍
        </button>
        {suggetionBar && (
          <div className="absolute bg-white ml-[-60px] md:ml-0  w-[280px] md:w-[500px] top-18 rounded-lg text-lg ">
            <ul>
              {suggetion.map((s) => (
                <li className="px-3 py-2 font-bold hover:bg-slate-200" key={s}>
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="w-14"
          src="data:image/png;base64,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"
          alt="account icon"
          srcset=""
        />
      </div>
    </div>
  );
};

export default Header;
