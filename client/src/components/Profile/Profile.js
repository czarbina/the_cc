import React, {Component} from "react";
import ProfileCard from "../ProfileCard";
import axios from "axios";

class Profile extends Component {
	state = {
		image: "",
		name: "",
		username: "",
		bio: ""
	}

	componentDidMount() {
		this.loadProfile();
	}

	loadProfile = () => {
		axios.get('/user/id/:id', this.state)
			.then((result) => {
				console.log(result);
		})
	}

	render () {
    return (
    	<div>
    	<ProfileCard
    	image="http://espyrock.com/wp-content/uploads/2010/09/Serj-Tankian.jpg"
		name="Serj Tankian"
		username= "serj"
		bio="WAKE UP! GRAB A BRUSH AND PUT ON A LITLE MAKEUP!"
    	/>	

    	</div>
    	)
	}
};

export default Profile;
