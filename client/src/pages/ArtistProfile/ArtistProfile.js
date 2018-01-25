import React from "react";
import ProfileCard from "../../components/ProfileCard";
import Bio from "../../components/bio/bio";
import Soundcloud from "../../components/soundcloud/soundcloud";
import "./Profile.css";
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
			coverphoto: "",
			soundcloud:"",
			facebook:""
	}

	getProfile = () => {
		var id = this.props.match.params.id;
		var query = `/bio/artistprofile/${id}`;
		console.log(`Query: ${query}`);

	    axios.get(query).then((data) => {
				this.setState({
					id: data.data[0].id,
					artistName: data.data[0].artistName,
					username: data.data[0].username,
					bio: data.data[0].bio,
					tags: data.data[0].tags,
					links: data.data[0].links,
					links2: data.data[0].links2,
					links3: data.data[0].links3,
					coverphoto: data.data[0].coverphoto,
					soundcloud: data.data[0].soundcloud,
					facebook: data.data[0].facebook
				});
				console.log("State!!!!!!!!!");
				console.log(this.state); 
	    });
	}

	componentDidMount = () => {
		console.log("ArtistProfile.js");
	    this.getProfile();
	};


	render () {
    return (
			<Row>
				<Col s={4}>
			    	<ProfileCard
			    	image={this.state.coverphoto}
					username={this.state.username}
					artistName={this.state.artistName}
					tags={this.state.tags}
					facebook={this.state.facebook}
					soundcloud={this.state.soundcloud}
			    	/>
				</Col>
			<Soundcloud
				links={this.state.links}
				links2={this.state.links2}
				links3={this.state.links3}
			/>


		<Col s={8}>
<Bio
bio={this.state.bio} />
</Col>
</Row>

		)};


};

export default ArtistProfile;
 