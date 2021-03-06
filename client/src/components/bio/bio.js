
import React from "react";
import "./bio.css";

const Bio = props => {
return (
	<div className="container">
				<h5 className={props.bio !== null && props.bio !== "" ? 'visible container grey-text text-darken-2 cssfont' : 'invisible'}>About Me</h5>
				<p className="cssfont padding grey-text text-darken-2">{props.bio}</p>
	</div>)};

export default Bio;
