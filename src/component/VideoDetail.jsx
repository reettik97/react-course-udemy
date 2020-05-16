import React from "react";

function VideoDetail({ video }) {

  
  if (video) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} frameBorder="0" title={video.etag}></iframe>
        </div>

        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  } else {
    return <div>Loading . .</div>;
  }
}

export default VideoDetail;
