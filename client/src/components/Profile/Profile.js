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

	// componentDidMount() {
	// 	this.loadProfile();
	// }

	// loadProfile = () => {
	// 	API.getUserData()
	// 	.then(res =>
	// 		this.setState({}))
	// }

	render () {
    return (
    	<div>
    	<ProfileCard

    	/>		  	
    	</div>
    	)
	}
};

export default Profile;
