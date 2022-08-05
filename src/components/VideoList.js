import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => <VideoItem video={video} />);
  console.log(renderedList);
  return <div>{renderedList}</div>;
};

export default VideoList;
