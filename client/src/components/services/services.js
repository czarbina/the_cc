import React from "react";

const Services = props => {

  return (
  	<div className="container">
  				<h5 className={props.services !== null && props.services !== "" ? 'visible container' : 'invisible'}>{props.services}</h5>
  				<p>{props.services}</p>
  	</div>)};

export default Services;
