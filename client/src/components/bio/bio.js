import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';

const Bio = props => {

return (
<div className="container" style={{width:"80%"}}>
	<Row>
		<Col s={4}>

				<p>About me: {props.bio}</p>

		</Col>
	</Row>
</div>)};

export default Bio;
