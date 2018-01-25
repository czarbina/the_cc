import React from "react";
import { Row, Card, Col, CardTitle} from 'react-materialize';
import "./icons.css";


const Icon = props => {

	return (
	<div className="container">
		<Row>
			<Col s={2}>
				<a href={props.soundcloud}><img className={props.soundcloud != null ? 'visible' : 'invisible'} src="http://www.iconarchive.com/download/i97585/sicons/basic-round-social/soundcloud.ico" /></a>
			</Col>
			<Col s={2}>
					<a href={props.facebook}><img className={props.facebook != null ? 'visible' : 'invisible'} src="http://www.iconarchive.com/download/i80444/uiconstock/socialmedia/Facebook.ico" /></a>
			</Col>
		</Row>
		</div>
);
};
export default Icon;
