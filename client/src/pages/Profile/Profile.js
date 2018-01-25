import React from "react";
import ProfileCard from "../../components/ProfileCard";
import Bio from "../../components/bio/bio";
import Background from "../../components/background/background";
import Soundcloud from "../../components/soundcloud/soundcloud";
import Icon from "../../components/icons/icons";
import "./Profile.css";
import axios from "axios";
import { Row, Card, Col, CardTitle} from 'react-materialize';


class Profile extends React.Component {

		state = {
			id: "",
			artistName: "",
			bio: "",
			tags: "",
			links: "",
			links2: "",
			links3: "",
			image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
			coverphoto: "http://www.kinyu-z.net/data/wallpapers/225/1492634.jpg",
			soundcloud:"",
			facebook:"",
			zip: "",
			username: ""
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
					soundcloud: data.data.soundcloud,
					facebook: data.data.facebook
				});
					if (data.data.image != null) {
						this.setState({
							coverphoto: data.data.coverphoto,
							image: data.data.image
				});
			};
							console.log(this.state);
	    });
	  };

		getProfileCard = () => {
			axios.get("/user/profileCard").then((data) => {
				console.log(data.data);
				this.setState({
					username: data.data.username,
					zip: data.data.zipcode,
					name: data.data.name
				});
				console.log(this.state);

			});
		};
	  componentDidMount = () => {
	    this.getProfile();
			this.getProfileCard();
	  };

	render () {
    return (
			<div>
			<Row className="background">
<Col s={9}></Col>
			<Col id="social" s={3}>
				<Icon
					soundcloud={this.state.soundcloud}
					facebook={this.state.facebook} />
					</Col>
					</Row>
				<Background
					coverphoto={this.state.coverphoto}
					artistName={this.state.artistName}
				/>



			<Row className="row1">
				<Col className="left" s={4}>
		    	<ProfileCard
			    	image={this.state.image}
						username={this.state.username}
						zip={this.state.zip}
						name={this.state.name}
		    	/>
				</Col>


			</Row>

			<Row>
				<Bio
					bio={this.state.bio} />
			</Row>

			<Row>


					<Col s={9}>
					<Col className="soundcloud" s={8}>
						<Soundcloud
							links={this.state.links}
							links2={this.state.links2}
							links3={this.state.links3}
					/>
					</Col>
					</Col>
			</Row>


			</div>
		)};


};

export default Profile;
