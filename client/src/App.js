import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Browse from "./components/Browse"

import createProfile from "./components/create-profile/create-profile";
const App = () =>
	<Router>
		<div>
			<Nav />
			<Route exact path="/" component ={Home}/>

			<Route exact path="/browse" component={Browse}/>
			<Route exact path="/artistProfile" component={Profile}/>
			<Route exact path="/createProfile" component={createProfile}/>
		</div>
	</Router>;

export default App;
