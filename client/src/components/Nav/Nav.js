import React from "react";
import { render } from 'react-dom';
import { Navbar, NavItem } from 'react-materialize';

const Nav = () => (

  <div>
    <Navbar brand="the cc" right style={{paddingLeft:"20px"}} className="#7986cb indigo lighten-2"> 
      <NavItem href="/login">Login</NavItem>
        <ul id="nav-mobile" className="side-nav">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </Navbar>
   </div>);

export default Nav;    