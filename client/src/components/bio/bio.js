
import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';
import "./bio.css";

const Bio = props => {
return (
	<div className="container">
				<h5 className={props.bio !== null && props.bio !== "" ? 'visible container grey-text text-darken-2' : 'invisible'}>About Me</h5>
				<p className="padding grey-text text-darken-2">{props.bio}</p>
	</div>)};

export default Bio;
