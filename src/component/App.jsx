import React, { Component } from "react";

import SearchBar from "./SearchBar";
import youtude from "../api/youtube";
import VideoDetail from "./VideoDetail.jsx";
import VideoList from "./VideoList";

const KEY = "";

class App extends Component {
  state = { videos: [], selectedVideo: null };

componentDidMount() {
  this.onSearchTerm('funny video');
}


  onSearchTerm = async (term) => {
    const response = await youtude.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,  // google api key
        q: term,
      },
    });
    this.setState({ videos: response.data.items , selectedVideo : response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onFormSubmit={this.onSearchTerm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
