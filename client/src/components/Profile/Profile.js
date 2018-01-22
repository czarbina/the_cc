import React, {Component} from "react";
import Nav from "../Nav";
import ProfileCard from "../ProfileCard";
import { render } from 'react-dom';
import { Row, Col } from 'react-materialize';


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
		this.setState({
			image: "http://espyrock.com/wp-content/uploads/2010/09/Serj-Tankian.jpg",
			name: "Serj Tankian",
			username: "serj",
			bio: "WAKE UP! GRAB A BRUSH AND PUT ON A LITLE MAKEUP!"
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
