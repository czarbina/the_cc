import React, { Component } from "react";
import "./Browse.css";
import BrowseMap from "../../components/BrowseMap/BrowseMap";
import Search from "../../components/Search/Search";
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

  getSearch = () => {
    API.searchArtists({
      id: this.state.id,
      artistName: this.state.artistName,
      image: this.state.image,
      bio: this.state.bio,
      links: this.state.links
    })
      .then(res => this.setState({ artists: res.data }))
      .catch(err => console.log(err));
      console.log(this.state.artists);
    };


    	handleFormSubmit = event => {
    		event.preventDefault();
        this.getSearch();

     	 };


render() {
  console.log(this.state);
  return (
    <div >
    <Search />
    <BrowseMap
    Artists={this.state.artists}

     />
</div>
    );
  }
}
// const Browse = () => <BrowseMap Artists={Artists} />;

export default Browse;
