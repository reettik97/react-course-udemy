import React from "react";

import "./videoItem.css";

const VideoItem = ({ videoDetail , onVideoSelect }) => {
  const videoTitle = videoDetail.snippet.title;
  const videoUrl = videoDetail.snippet.thumbnails.medium.url;

  return (
    <div onClick={()=>onVideoSelect(videoDetail)}    className="item video-item">
      <img className="ui image" src={videoUrl} alt={videoDetail} />
      <div className="content">
        <div className="header">{videoTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
