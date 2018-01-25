
import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';

const Services = props => {
  return (

  	<div className="container">
  				<h5 className={props.services !== null && props.services !== "" ? 'visible container' : 'invisible'}>Hire Me</h5>
  				<p>{props.services}</p>
  	</div>)};

export default Services;
