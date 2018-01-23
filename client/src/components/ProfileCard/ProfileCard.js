import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';

const ProfileCard = props => {
	console.log(props);
return (
<div className="container" style={{width:"80%"}}>

			<Card className='extra-large'
				header={<CardTitle image={props.coverphoto}
				style={{height:"40%"}}>{props.username}
				</CardTitle>}
				>
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
			</Card>

</div>)};

export default ProfileCard;
