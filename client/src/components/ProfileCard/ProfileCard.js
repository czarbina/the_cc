import React from "react";
import { Row, Card, Col, CardTitle, Carousel} from 'react-materialize';
import "./ProfileCard.css";



const ProfileCard = props => {


return (
<div className="container left" style={{width:"80%"}}>
	<Row>
		<Col s={4}>
			<Card className='extra-large z-depth-5'
				style= {{
    				position: "fixed",
    				top: "80",
    				left: "80",
    				width: "300px",
						height: "390px"
    		}}

				header={<CardTitle image={props.image}
				>{props.username}
				</CardTitle>}
				>
				<p>Name: {props.name}</p>
				<p>Zip Code: {props.zip}</p>
			</Card>
		</Col>
	</Row>


</div>)};

export default ProfileCard;
