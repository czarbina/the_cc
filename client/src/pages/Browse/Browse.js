import React, { Component } from "react";
import "./Browse.css";
import BrowseMap from "../../components/BrowseMap/BrowseMap";
import API from "../../Utils/API";

class Browse extends Component {
  state= {
    artists: []
  };

  componentDidMount() {
    this.loadArtists();
  };

  loadArtists = () => {
    API.getArtists({
      id: this.state.id,
      artistName: this.state.artistName,
      image: this.state.image,
      bio: this.state.bio,
      links: this.state.links
    })
      .then(res => this.setState({ artists: res.data }))
      .catch(err => console.log(err));
  };

render() {
  console.log(this.state);
  return (
    <BrowseMap
    Artists={this.state.artists}
    />

    );
  }
}
// const Browse = () => <BrowseMap Artists={Artists} />;

export default Browse;
