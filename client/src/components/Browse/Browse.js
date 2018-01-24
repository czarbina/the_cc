import React, { Component } from "react";
import "./Browse.css";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import BrowseMap from "../BrowseMap/BrowseMap";
import API from "../../Utils/API";

const Artists = [
  { 
    id:1,
    artistName: "marshmello",
    image: "http://3.bp.blogspot.com/-Q9YULC9C9Cg/UMkEx90dlHI/AAAAAAAACdU/RXv8slR6cxY/s1600/charstrengths.jpg",
    bio: "loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo ",
    link: "http://soundcloud.com/"
  },
  { 
    id:2,
    artistName: "beanbag",
    image: "https://i.pinimg.com/736x/cf/b6/ce/cfb6ce8aadfbf338c1c7c36333745da7--yung-lean-sad-boys-seapunk.jpg",
    bio: "loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo ",
    link: "http://soundcloud.com/"
  },
  { 
    id:3,
    artistName: "boy boy",
    image: "http://i2.kym-cdn.com/photos/images/newsfeed/000/444/233/733.jpg",
    bio: "loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo ",
    link: "http://soundcloud.com/"
  },
  { 
    id:4,
    artistName: "giselle",
    image: "https://pbs.twimg.com/profile_images/785597007280771072/MU2u1ywq_400x400.jpg",
    bio: "loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo loremipsum est imparo ",
    link: "http://soundcloud.com/"
  }
];

class Browse extends Component {
  state= {
    artists: []
  };

  componentDidMount() {
    this.loadArtists();
  }

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
    <BrowseMap Artists={this.state.artists} />
    );
  }
}
// const Browse = () => <BrowseMap Artists={Artists} />;

export default Browse;