import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';

const ProfileCard = props => (
<div className="container" style={{width:"80%"}}>
	<Row>
		<Col s={4}>
			<Card className='extra-large'
				header={<CardTitle image={props.image}>{props.username}</CardTitle>}
				actions={[<a href='#'>CONTACT</a>]}>
				<p>Name: {props.name}</p>
				<p>About me: {props.bio}</p>
			</Card>  
		</Col>
	</Row>
</div>);

export default ProfileCard;