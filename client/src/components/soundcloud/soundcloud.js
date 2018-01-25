import React from "react";

const Soundcloud = props => {
	console.log(props)
return (

<div className={props.links != null ? 'visible' : 'invisible'}>
	<iframe width="100%" height="75" scrolling="no" frameborder="no" allow="autoplay" src="http://google.com"></iframe>
</div>)};

export default Soundcloud;
