import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';

const Soundcloud = props => {
	console.log(props)
return (

<div className={props.links != null ? 'visible' : 'invisible'}>
	<iframe width="100%" height="75" scrolling="no" frameborder="no" allow="autoplay" src={props.links}></iframe>
  <iframe width="100%" height="75" scrolling="no" frameborder="no" allow="autoplay" src={props.links2}></iframe>
  <iframe width="100%" height="75" scrolling="no" frameborder="no" allow="autoplay" src={props.links3}></iframe>
</div>)};

export default Soundcloud;
