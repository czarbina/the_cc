import React from "react";
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
        
    </Navbar>
   </div>);

export default Nav;    