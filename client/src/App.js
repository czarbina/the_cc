import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";


const App = () =>
	<Router>
		<div>
			<Nav />
			<Route path="/" component ={Home}/>
			<Route exact path="/profile" component={Profile}/>
		</div>
	</Router>;

export default App;
