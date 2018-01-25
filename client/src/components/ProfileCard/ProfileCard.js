import React from "react";
import { Row, Card, Col, CardTitle, Carousel} from 'react-materialize';
import "./ProfileCard.css";



const ProfileCard = props => {


return (
<div className="container left" style={{width:"80%"}}>
	<Row>
		<Col s={4}>
			<Card className='extra-large z-depth-5 card'
				style= {{
    				position: "fixed",
    				top: "80",
    				left: "100",
    				width: "300px",
						height: "700px"
    		}}
				actions={[<a href='#'>Contact Me</a>]}
				header={<CardTitle
					style= {{
					height: "300px",
					overflow: "hidden"
					}}
					image={props.image}

				><p className="username" >{props.username}</p>
				</CardTitle>}
				>

				<p>{props.name}</p>
				<p>Zip Code: {props.zip}</p>

   <p class="flow-text">I am Flow Text</p>
			</Card>
		</Col>
	</Row>

</div>)};

export default ProfileCard;
