import React from "react";
import axios from "axios";
import { Row, Card, Col, CardTitle, Carousel, MediaBox, Button} from 'react-materialize';
import ProfileCard from "../../components/ProfileCard";
import Services from "../../components/services/services";
import Bio from "../../components/bio/bio";
import Background from "../../components/background/background";
import Soundcloud from "../../components/soundcloud/soundcloud";
import Icon from "../../components/icons/icons";
import "./Profile.css";

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
			services: ""
		};

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

		render () {
    	return (
				<div className="bg">
					<div className="container bg2">

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
			    	/>

						<Row>
							<Col s={3}></Col>
							<Col className="soundcloud" s={9}>
								<Bio
									bio={this.state.bio} />
								</Col>
						</Row>

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
