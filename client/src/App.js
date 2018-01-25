import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ArtistProfile from "./pages/ArtistProfile";
import Browse from "./pages/Browse"
import createProfile from "./pages/create-profile/create-profile";


const App = () =>
	<Router>
		<div>
			<Nav />
			<Route exact path="/" component ={Home}/>
			<Route exact path="/profile/:id" component ={ArtistProfile}/>
			<Route exact path="/browse" component={Browse}/>
			<Route exact path="/profile" component={Profile}/>
			<Route exact path="/createProfile" component={createProfile}/>
		</div>
	</Router>;

export default App; 
 