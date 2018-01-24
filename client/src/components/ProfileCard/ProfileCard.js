import React from "react";
import { Row, Card, Col, CardTitle, Carousel} from 'react-materialize';

const ProfileCard = props => {
	console.log(props);
return (
<div className="container" style={{width:"80%"}}>
	<Row>
		<Col s={4}>
			
			<Card className='extra-large z-depth-5'
				style= {{
    				position: "fixed",
    				top: "80",
    				left: "40",
    				width: "300px"
    				}}

				header={<CardTitle image={props.image}
				>{props.username}
				</CardTitle>}
				>
				<p>Name: {props.name}</p>
				<p>About me: {props.bio}</p>
			</Card>  
		</Col>
	</Row>
				<Row>
				<Col s={8}>
				<p>artistName: {props.artistName}</p>
				<p>Tags: {props.tags}</p>
				</Col>
				<Col s={2}>

					<a href={props.soundcloud}><img className={this.soundcloud != "NULL" ? 'visible' : 'invisible'} src="http://www.iconarchive.com/download/i97585/sicons/basic-round-social/soundcloud.ico" /></a>

				</Col>
				<Col s={2}>
						<a href={props.facebook}><img className={this.facebook != "NULL" ? 'visible' : 'invisible'} src="http://www.iconarchive.com/download/i80444/uiconstock/socialmedia/Facebook.ico" /></a>
				</Col>
				</Row>

</div>)};

export default ProfileCard;
