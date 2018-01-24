import React from "react";
import ProfileCard from "../../components/ProfileCard";
import Bio from "../../components/bio/bio";
import Soundcloud from "../../components/soundcloud/soundcloud";
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
			coverphoto: "",
			soundcloud:"",
			facebook:""
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
					coverphoto: data.data.coverphoto,
					soundcloud: data.data.soundcloud,
					facebook: data.data.facebook
				});
				console.log(this.state);

	    });
	  };

	  componentDidMount = () => {
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

export default Profile;
