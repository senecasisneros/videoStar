import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  //props from VideoList: video(single video, onVideoSelect: function(callback))

const imageUrl = video.snippet.thumbnails.default.url;
const imageTitle = video.snippet.title;

  return (
    <li onClick= { () => onVideoSelect(video) } className="list-group-item">       {/*whenever li is clicked it will run onVideoSelect and pass the single video*/}
      <div className="video-list  media">
        <div className="media-left">
          <img src={ imageUrl } alt="" className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading"> { imageTitle }</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
