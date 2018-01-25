import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';
import "./bio.css";

const Bio = props => {

return (
	<div className="container">
		<Row>
			<Col s={3}>
			</Col>
			<Col s={9} className="grey lighten-4">
				<h5>About Me</h5>
				<p className="padding">{props.bio}</p>
			</Col>
		</Row>
	</div>)};

export default Bio;
