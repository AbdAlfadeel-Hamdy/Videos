import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.high.url} alt="car" />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
