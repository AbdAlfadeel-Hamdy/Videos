import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video }) => {
  console.log(video);
  return (
    <div className="video-item item">
      <img
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.channelTitle}
        className="ui image"
      />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
