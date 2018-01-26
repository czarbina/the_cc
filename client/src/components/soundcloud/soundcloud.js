import React from "react";
import "./soundcloud.css"

const Soundcloud = props => {
console.log(props)
	return (

		<div className={props.links != null || "" ? 'visible container' : 'invisible'}>
			<h5>My Music</h5>
			<div className="container">
				<iframe id="frame1" title="title1" className={props.links != null ? 'visible container' : 'invisible'} width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src={props.links}></iframe>
			  <iframe id="frame2" title="title2" className={props.links2 != null ? 'visible container' : 'invisible'} width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src={props.links2}></iframe>
			  <iframe id="frame3" title="title3" className={props.links3 != null ? 'visible container' : 'invisible'} width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src={props.links3}></iframe>
			</div>
		</div>)};

export default Soundcloud;
