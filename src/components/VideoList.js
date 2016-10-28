import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = (props) => {
  //props from App: videos(array of videos. onVideoSelect: function)
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}    //taking the prop from APP and passing down to VideoListItem.
      key={ video.etag }
      video={video} />
    )
  });

  return (
    <ul className='col-md-4 list-group'>
    { videoItems }
    </ul>
  );
};

export default VideoList;
