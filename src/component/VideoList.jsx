import React from 'react';
import VideoItem from "./VideoItem";


 const VideoList = (props)=> {
   const renderedList = props.videos.map((video)=>{
     return <VideoItem key={video.etag} onVideoSelect={props.onVideoSelect} videoDetail = {video}/>
   }) 

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
}

export default VideoList;