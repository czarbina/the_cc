import React from "react";
import { Row, Col } from 'react-materialize';
import "./icons.css";


const Icon = props => {

	return (
	<div className="container">
		<Row>
			<Col s={2}>
				<a href={props.soundcloud}><img alt="soundicon" className={props.soundcloud != null ? 'visible' : 'invisible'} src="http://www.iconarchive.com/download/i97585/sicons/basic-round-social/soundcloud.ico" /></a>
			</Col>
			<Col s={2}>
				<a href={props.facebook}><img alt="faceicon" className={props.facebook != null ? 'visible' : 'invisible'} src="http://www.iconarchive.com/download/i80444/uiconstock/socialmedia/Facebook.ico" /></a>
			</Col>
		</Row>
		</div>
);
};
export default Icon;
