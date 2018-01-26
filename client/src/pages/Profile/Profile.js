import React from "react";
import axios from "axios";
import { Row, Col } from 'react-materialize';
import ProfileCard from "../../components/ProfileCard";
import Services from "../../components/services/services";
import Bio from "../../components/bio/bio";
import Background from "../../components/background/background";
import Soundcloud from "../../components/soundcloud/soundcloud";
import Icon from "../../components/icons/icons";
import "./Profile.css";
import API from "../../Utils/API";
import share from "./subtle_white_mini_waves.png";

class Profile extends React.Component {

		state = {
			id: "",
			artistName: "",
			bio: "",
			tags: "",
			links: "",
			links2: "",
			links3: "",
			links4: "",
			links5: "",
			links6: "",
			image: "http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png",
			coverphoto: "http://www.kinyu-z.net/data/wallpapers/225/1492625.jpg",
			soundcloud:"",
			facebook:"",
			zip: "",
			username: "",
			services: "",
			artists: []
		};
  //
	// 	getSearch = () => {
	// 		API.searchArtist({
	//       id: this.state.id,
	//       artistName: this.state.artistName,
	//       image: this.state.image,
	//       bio: this.state.bio,
	//       links: this.state.links
	//     })
	//       .then(res => this.setState({ artists: res.data }))
	//       .catch(err => console.log(err));
	// 			console.log(this.state.artists);
  // };

		getProfile = () => {
	    axios.get("/bio/profile").then((data) => {
				console.log(data.data);
				this.setState({
					id: data.data.id,
					artistName: data.data.artistName,
					username: data.data.username,
					bio: data.data.bio,
					tags: data.data.tags,
					links: data.data.links,
					links2: data.data.links2,
					links3: data.data.links3,
					links4: data.data.links4,
					links5: data.data.links5,
					links6: data.data.links6,
					soundcloud: data.data.soundcloud,
					facebook: data.data.facebook,
					services: data.data.services
				});

				if (data.data.image !== null && data.data.image !== "") {
					this.setState({
						image: data.data.image
					});
				};

				if (data.data.coverphoto != null || "") {
					this.setState({
						coverphoto: data.data.coverphoto
					});
				};

				console.log(this.state);
	    });
	  };

		getProfileCard = () => {
			axios.get("/user/profileCard").then((data) => {
				this.setState({
					username: data.data.username,
					zip: data.data.zipcode,
					name: data.data.name
				});
			});
		};

	  componentDidMount = () => {
	    this.getProfile();
			this.getProfileCard();

	  };

		// 	handleFormSubmit = event => {
		// 		event.preventDefault();
		//   this.getSearch();
		// console.log(this.state.artists);
		//  	 };

		render () {
    	return (
				<div id="bg">
					<div style={{background: `url(${share})`}} className="container bg2">

						<Background
							coverphoto={this.state.coverphoto}
							artistName={this.state.artistName}
							tags={this.state.tags}
						/>

						<Row className="background">
							<Col s={9}></Col>
							<Col id="social" s={3}>
								<Icon
									soundcloud={this.state.soundcloud}
									facebook={this.state.facebook} />
							</Col>
						</Row>

			    	<ProfileCard
				    	image={this.state.image}
							username={this.state.username}
							zip={this.state.zip}
							name={this.state.name}
							bio={this.state.bio}
			    	/>


						<Row>
							<Col s={4}>
								<Services
									services={this.state.services}
								/>
							</Col>
							<Col className="soundcloud white z-index-5" s={7}>
								<Soundcloud
									links={this.state.links}
									links2={this.state.links2}
									links3={this.state.links3}
							/>
							</Col>
						</Row>

				</div>
			</div>
		)};
};

export default Profile;
