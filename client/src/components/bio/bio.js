
import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';
import "./bio.css";

const Bio = props => {

return (
	<div className="container">
				<h5>About Me</h5>
				<p className="padding">{props.bio}</p>
	</div>)};

export default Bio;
