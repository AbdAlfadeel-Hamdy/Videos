import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
    console.log(response);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
