import React from "react";
import ProfileCard from "../../components/ProfileCard";
import Bio from "../../components/bio/bio";
import Services from "../../components/services/services";
import Icon from "../../components/icons/icons";
import Background from "../../components/background/background";
import Soundcloud from "../../components/soundcloud/soundcloud";
import "../Profile/Profile.css";
import axios from "axios";
import { Row, Card, Col, CardTitle} from 'react-materialize';


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

				console.log(this.state);
	    });
	}

	componentDidMount = () => {
		console.log("ArtistProfile.js");
	    this.getProfile();
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

export default ArtistProfile;
