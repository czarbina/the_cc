
import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';

const Services = props => {
    console.log(props)
  return (

  	<div className="container">
  				<h5>Hire Me</h5>
  				<p>{props.services}</p>
  	</div>)};

export default Services;
