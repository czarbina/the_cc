import React from "react";
import "./soundcloud.css"

const Soundcloud = props => {

	return (

		<div className={props.links != null || "" ? 'visible container' : 'invisible'}>
			<h5>My Music</h5>
			<div className="container">
				<iframe className={props.links != null ? 'visible container' : 'invisible'} width="100%" height="75" scrolling="no" frameborder="no" allow="autoplay" src={props.links}></iframe>
			  <iframe className={props.links2 != null ? 'visible container' : 'invisible'} width="100%" height="75" scrolling="no" frameborder="no" allow="autoplay" src={props.links2}></iframe>
			  <iframe className={props.links3 != null ? 'visible container' : 'invisible'} width="100%" height="75" scrolling="no" frameborder="no" allow="autoplay" src={props.links3}></iframe>
			</div>
		</div>)};

export default Soundcloud;
