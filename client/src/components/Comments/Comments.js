import React from "react";
import { Collapsible, CollapsibleItem } from 'react-materialize';
import "./Comments.css";

const Comments = props => {

return (
	<div className="container" style={{width:"60%", marginLeft:"415px"}}>
	<div id="comments">
	<Collapsible>
	<CollapsibleItem header='from Sabrina' icon='favorite_border'>
		Really love your work, man! Much love!
	</CollapsibleItem>
	<CollapsibleItem header='from Tyler' icon='favorite_border'>
		Siiiiiick - keep it coming!
	</CollapsibleItem>
	<CollapsibleItem header='from Ned' icon='favorite_border'>
		I'm looking for a DJ for my wedding, would love to discuss availability with you.
	</CollapsibleItem>
	<CollapsibleItem header='from Erin' icon='favorite_border'>
		BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! BEER! 
	</CollapsibleItem>
	<CollapsibleItem header='from Clark' icon='favorite_border'>
		This is amazing work. Truly, I am inspired by all of you.
	</CollapsibleItem>
	<CollapsibleItem header='from Elton' icon='favorite_border'>
		BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!BEEPBEEPBOOPBOOPBEEPBEEPBOOPBOOPBEER! BEER! BEER! BEER!
	</CollapsibleItem>
	</Collapsible>
	</div>
	</div>
)};

export default Comments;