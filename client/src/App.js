import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Browse from "./components/Browse"

const App = () =>
	<Router>
		<div>
			<Nav />
			<Route exact path="/" component ={Home}/>
			<Route exact path="/profile" component={Profile}/>
			<Route exact path="/browse" component={Browse}/>
		</div>	
	</Router>;

export default App;