import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => <VideoItem video={video} />);
  console.log(renderedList);
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
