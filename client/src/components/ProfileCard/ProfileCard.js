import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';

const ProfileCard = props => {
	console.log(props);
return (
<div className="container" style={{width:"80%"}}>
	<Row>
		<Col s={4}>
			<Card className='extra-large'
				header={<CardTitle image={props.image}
				style={{height:"40%"}}>{props.username}
				</CardTitle>}
				>
				<p>Name: {props.name}</p>
				<p>About me: {props.bio}</p>
			</Card>  
		</Col>
	</Row>
</div>)};

export default ProfileCard;