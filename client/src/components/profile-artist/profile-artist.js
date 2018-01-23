import React from "react";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import axios from "axios";
import "./profile-artist.css";
import Links from "../links/links.js";

class artistProfile extends React.Component {

	state = {
		id: "",
		artistName: "",
		bio: "",
		tags: "",
		links: "",
		coverphoto: ""
	};

	getProfile = () => {
    axios.get("/bio/artistProfile").then((data) => {
			console.log(data.data);
			this.setState({
				id: data.data.id,
				artistName: data.data.artistName,
				bio: data.data.bio,
				tags: data.data.tags,
				links: data.data.links,
				coverphoto: data.data.coverphoto
			});
			console.log(this.state);

    });
  };

  componentDidMount = () => {
    this.getProfile();
  };



render() {
return (

<div className="container">
	<h1>{this.state.artistName}</h1>
	<img src={this.state.coverphoto} />


	<h5>bio: {this.state.bio}</h5>
	<p>{this.state.tags}</p>

<p><a href={this.state.links}>Checkout my SoundCloud Page</a></p>

<Links />
</div>

		)


	}


};


export default artistProfile;
