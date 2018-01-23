import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';

const Soundcloud = props => {

return (
<div className="container" style={{width:"80%"}}>
	<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src={props.links}></iframe>
  <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src={props.links2}></iframe>
  <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src={props.links3}></iframe>
</div>)};

export default Soundcloud;
