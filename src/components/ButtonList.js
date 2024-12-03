import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonName = [
    "All",
    "Podcast",
    "Music",
    "Skills",
    "cooking",
    "Driving",
    "News",
    "Live",
    "Fashion",
    "Lecture",
    "Movies",
  ];
  return (
    <div className="flex ">
      {buttonName.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
