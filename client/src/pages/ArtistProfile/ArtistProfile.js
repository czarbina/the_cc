import React from "react";
import axios from "axios";
import { Row, Col } from 'react-materialize';
import ProfileCard from "../../components/ProfileCard";
import Services from "../../components/services/services";
import Bio from "../../components/bio/bio";
import Icon from "../../components/icons/icons";
import Background from "../../components/background/background";
import Soundcloud from "../../components/soundcloud/soundcloud";
import "../Profile/Profile.css";
import Comments from "../../components/Comments";
import share from "./subtle_white_mini_waves.png";

class ArtistProfile extends React.Component {

		state = {
			id: "",
			artistName: "",
			bio: "",
			tags: "",
			links: "",
			links2: "",
			links3: "",
			coverphoto: "http://www.kinyu-z.net/data/wallpapers/225/1492625.jpg",
			soundcloud:"",
			facebook:"",
			image: ""
	}

	getProfile = () => {
		var id = this.props.match.params.id;
		var query = `/bio/artistprofile/${id}`;

	    axios.get(query).then((data) => {
				console.log(data.data)
				this.setState({
					id: data.data.id,
					artistName: data.data.artistName,
					username: data.data.username,
					bio: data.data.bio,
					tags: data.data.tags,
					links: data.data.links,
					links2: data.data.links2,
					links3: data.data.links3,
					soundcloud: data.data.soundcloud,
					facebook: data.data.facebook
				});
				if (data.data.image !== null && data.data.image !== "") {
					this.setState({
						image: data.data.image
					});
				};

				if (data.data.coverphoto !== null && data.data.coverphoto !== "") {
					this.setState({
						coverphoto: data.data.coverphoto
					});
				};

		    var usernameQuery = `/user/username/${this.state.username}`;
		    console.log(usernameQuery);
		    axios.get(usernameQuery).then((usernameRes) => {
		    	if(usernameRes.data.name !== null && usernameRes.data.name !== ""){
			    	this.setState({
			    		name: usernameRes.data.name,
			    		zipcode: usernameRes.data.zipcode
			    	});
		    	}
		    });

	    });
	  }

		getProfileCard = () => {
			axios.get("/user/profileCard").then((data) => {
				this.setState({
					username: this.state.username,
					zip: this.state.zipcode,
					name: this.state.name
				});
			});
		}

	  componentDidMount = () => {
	    this.getProfile();
	};
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
				<Comments/>
	

			</div>

		</div>
	)};
};


export default ArtistProfile;
