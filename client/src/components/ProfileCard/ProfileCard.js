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
</div>)};

export default ProfileCard;