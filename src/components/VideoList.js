import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => <VideoItem />);
  console.log(renderedList);
  return <div>{renderedList}</div>;
};

export default VideoList;
