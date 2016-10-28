import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetails";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('casey neistat');
  }

  videoSearch(term) {
    YTSearch ({ key: API_KEY, term: term }, (videos)  => {
      this.setState({
        videos: videos,  //array of videos
        selectedVideo: videos[0] //first video in the array
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />  {/*When SearchBar calls onSearchTermChange it will take the term(string put into the input) and pass to this.videoSearch. videoSearch will do the API call and assign the props*/}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo})}
          videos = { this.state.videos } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
