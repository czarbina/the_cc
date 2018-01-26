import React from "react";
import { Collapsible, CollapsibleItem } from 'react-materialize';
import "./Search.css";
import {Input, TextArea, FormBtn} from "../../components/Form";
import BrowseMap from "../../components/BrowseMap/BrowseMap";
import API from "../../Utils/API";
import axios from "axios";

class Search extends React.Component {


 	 handleInputChange = event => {
 	 	const {name, value} = event.target;
 	 	this.setState({
 	 		[name]: value});
 	 }

 	render() {

		return (

			<div className="row container" >
			<br></br>
               <form className="col s12">
                 <div className="row">
                   <div className="input-field col s4">
                     <i className="material-icons prefix">search</i>
                     <input

                         onChange={this.handleInputChange}
                         name="typeSearch"
                      id="icon_prefix" type="text" className="validate"/>
                     <label for="icon_prefix">Search by type</label>
                   </div>
                   <div className="input-field col s4">
                     <i className="material-icons prefix">place</i>
                     <input

                         onChange={this.handleInputChange}
                         name="zipSearch"
                     id="icon_account" type="tel" className="validate"/>
                     <label for="icon_account">Search by location</label>
                   </div>
                   <div className="input-field col s2">
                   <FormBtn
                     onClick={this.handleFormSubmit}
                   >
                     SEARCH
                   </FormBtn>
                   </div>
                 </div>
               </form>
             </div>
	)};
};

export default Search;
