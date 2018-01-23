import React, {Component} from "react";
import ProfileCard from "../ProfileCard";

import Bio from "../bio/bio";
import Soundcloud from "../soundcloud/soundcloud";
import Icon from "../icons/icons";
import "./Profile.css";
import { Button, Row, Col, Carousel } from 'react-materialize';
import axios from "axios";
import { Row, Card, Col, CardTitle} from 'react-materialize';


class Profile extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		file: '',
		imagePreviewUrl: '',
		image: "",
		name: "",
		username: "",
		bio: ""
	}
}

	_handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

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
		let {imagePreviewUrl} = this.state;
    	let $imagePreview = null;
    	if (imagePreviewUrl) {
      		$imagePreview = (<img src={imagePreviewUrl} />);
    	} else {
      	$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    	}
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

    	<Carousel className= "carousel-slider center" options={{ fullWidth: true, indicators: true }}>
			<div className='red previewComponent'>
				<div>
				{$imagePreview}
				<h2>First Panel</h2>
				<p className='white-text'>This is your first panel</p>
				<Button><input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} /></Button>
				</div>

			</div>
			<div className='amber previewComponent'>
				<h2>Second Panel</h2>
				<p className='white-text'>This is your second panel</p>
				<Button>Add featured image 2</Button>

			</div>
			<div className='green previewComponent'>
				<h2>Third Panel</h2>
				<p className='white-text'>This is your third panel</p>
				<Button>Add featured image 3</Button>

			</div>
			<div className='blue previewComponent'>
				<h2>Fourth Panel</h2>
				<p className='white-text'>This is your fourth panel</p>
				<Button>Add featured image 4</Button>

			</div>
		</Carousel>
    	<div>
	    	<Row>
	    		<Col s={12}>
			    	<ProfileCard
			    	image="http://espyrock.com/wp-content/uploads/2010/09/Serj-Tankian.jpg"
					name="Serj Tankian"
					username= "serj"
					bio="WAKE UP! GRAB A BRUSH AND PUT ON A LITLE MAKEUP!"
			    	/>
		    	</Col>
		    </Row>
    	</div>

    	</div>
    	);
	}
};

export default Profile;