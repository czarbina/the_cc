import React, {Component} from "react";
import ProfileCard from "../ProfileCard";
import Bio from "../bio/bio";
import Soundcloud from "../soundcloud/soundcloud";
import Icon from "../icons/icons";
import axios from "axios";
import { Row, Card, Col, CardTitle} from 'react-materialize';

class Profile extends Component {

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
	    axios.get("/bio/artistProfile").then((data) => {

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
					facebook: data.data.facebook,
				});
				console.log(this.state);

	    });
	  };

	  componentDidMount = () => {
	    this.getProfile();
	  };


	render () {
    return (
    	<div>
			<Row>
				<Col s={4}>
    	<ProfileCard
    	image="http://espyrock.com/wp-content/uploads/2010/09/Serj-Tankian.jpg"
		username={this.state.username}
		facebook={this.state.facebook}
		soundcloud={this.state.soundcloud}
		artistName={this.state.artistName}
		tags={this.state.tags}

		coverphoto={this.state.coverphoto}
    	/>
			</Col>
			<Soundcloud
				links={this.state.links}
				links2={this.state.links2}
				links3={this.state.links3}
			/>
			<Icon
			facebook={this.state.facebook}
			soundcloud={this.state.soundcloud}
			/>

<Col s={8}>
<Bio
bio={this.state.bio} />
</Col>
</Row>
    	</div>
    	)
	}
};

export default Profile;
