import React from "react";
import { Row, Col} from 'react-materialize';
import "./background.css"

const Background = props => {

return (
<div className="cover-photo" >
  <Row>
  <Col s={12}>
      <img alt="coverphoto" src={props.coverphoto}/>
  <Col s={6}>
<h1>{props.artistName}</h1>
  </Col>

  </Col>



    </Row>
</div>
);
};
export default Background;
