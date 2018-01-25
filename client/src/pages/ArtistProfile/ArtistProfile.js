import React from "react";
import axios from "axios";
import { Row, Card, Col, CardTitle, Carousel, MediaBox, Button} from 'react-materialize';
import ProfileCard from "../../components/ProfileCard";
import Services from "../../components/services/services";
import Bio from "../../components/bio/bio";
import Background from "../../components/background/background";
import Soundcloud from "../../components/soundcloud/soundcloud";
import "../Profile/Profile.css";
import Icon from "../../components/icons/icons";


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
			image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
			coverphoto: "http://www.kinyu-z.net/data/wallpapers/225/1492625.jpg",
			soundcloud:"",
			facebook:"",
			zipcode: "",
			username: "",
			services: "",
			name: ""
		}

		getProfile = () => {
			var id = this.props.match.params.id;
			var query = `/bio/artistprofile/${id}`;

	    axios.get(query).then((data) => {
	    	console.log("Data!!!!!!!!!!!!!!");
	    	console.log(data);
				this.setState({
					id: data.data.id,
					artistName: data.data[0].artistName,
					username: data.data[0].username, 
					bio: data.data[0].bio,
					tags: data.data[0].tags,
					links: data.data[0].links,
					links2: data.data[0].links2,
					links3: data.data[0].links3,
					image: data.data[0].image,
					links4: data.data[0].links4,
					links5: data.data[0].links5,
					links6: data.data[0].links6,
					soundcloud: data.data[0].soundcloud,
					facebook: data.data[0].facebook,
					services: data.data[0].services,
					coverphoto: data.data[0].coverphoto,
					image: data.data[0].image
				});

				if (data.data.image != null || "") {
					this.setState({
						image: data.data.image
					});
				};

				if (data.data.coverphoto != null || "") {
					this.setState({
						coverphoto: data.data.coverphoto
					});
				};
				

		    var usernameQuery = `/user/username/${this.state.username}`;
		    console.log(usernameQuery);
		    axios.get(usernameQuery).then((usernameRes) => {
		    	if(usernameRes.data[0].name !== null && usernameRes.data[0].name !== ""){
			    	this.setState({
			    		name: usernameRes.data[0].name,
			    		zipcode: usernameRes.data[0].zipcode
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
			this.getProfileCard();
	  }

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
					artistName={this.state.artistName}
					tags={this.state.tags}
					facebook={this.state.facebook}
					soundcloud={this.state.soundcloud}
							zip={this.state.zipcode}
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
							<Col s={3}>
								<Services
									services={this.state.services}
								/>
							</Col>
							<Col className="soundcloud" s={9}>
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


export default ArtistProfile;

