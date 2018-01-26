import React from "react";
import { Row, Card, Col, CardTitle } from 'react-materialize';
import "./ProfileCard.css";
// <p>{props.name}</p>
// <p>Zip Code: {props.zip}</p>
const ProfileCard = props => {

return (
<div className="container left cssfont" style={{width:"80%"}}>
	<Row classname="cssfont">
		<Col classname="cssfont" s={4}>
			<Card id="cssfont" className='cssfont extra-large z-depth-5 card'
				style= {{
    				position: "fixed",
    				top: "80",
    				left: "100",
    				width: "300px",
						height: "700px"
    		}}
				actions={[<a href='/Profile'>Contact Me</a>]}
				header={<CardTitle
					style= {{
					height: "300px",
					overflow: "hidden"
					}}
					image={props.image}

				><p >{props.username}</p>
				</CardTitle>}
				>


<h6>About Me</h6>
   <p className="flow-text cssfont">{props.bio}</p>
			</Card>
		</Col>
	</Row>

</div>)};

export default ProfileCard;
