import React from "react";
import { render } from 'react-dom';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from "react-router-dom";

const Nav = () => (

  <div>
    <Navbar brand="the cc" right style={{paddingLeft:"20px"}} className="#7986cb indigo lighten-2">
      <NavItem>
        <Link to="/profile">LOGIN</Link>
      </NavItem>

      <NavItem>
        <Link to="/browse">BROWSE</Link>
      </NavItem>

      <NavItem>
        <Link to="/artistProfile">MY PROFILE</Link>
      </NavItem>

      <NavItem>
        <Link to="/createProfile">CREATE PROFILE</Link>
      </NavItem>

        <ul id="nav-mobile" className="side-nav">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </Navbar>
   </div>);

export default Nav;
