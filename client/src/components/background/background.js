import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';
import "./background.css"

const Background = props => {

return (
<div className="cover-photo" >
  <Row>
  <Col s={12}>
      <img src={props.coverphoto}/>
  <Col s={6}>
<h1>{props.artistName}</h1>
  </Col>

  </Col>



    </Row>
</div>
);
};
export default Background;
