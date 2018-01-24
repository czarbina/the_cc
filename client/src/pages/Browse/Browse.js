import React, { Component } from "react";
import "./Browse.css";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import BrowseMap from "../../components/BrowseMap/BrowseMap";
import API from "../../Utils/API";
import axios from "axios";

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
    goToProfile={this.goToProfile} />

    );
  }
}
// const Browse = () => <BrowseMap Artists={Artists} />;

export default Browse;
