import React, {Component} from "react";
import ProfileCard from "../ProfileCard";
import "./Profile.css";
import { Button, Row, Col, Carousel } from 'react-materialize';
import axios from "axios";

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
		let {imagePreviewUrl} = this.state;
    	let $imagePreview = null;
    	if (imagePreviewUrl) {
      		$imagePreview = (<img src={imagePreviewUrl} />);
    	} else {
      	$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    	}
    return (
    	<div>
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
