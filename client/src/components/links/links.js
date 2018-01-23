import React from "react";
import { render } from 'react-dom';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from "react-router-dom";

const Links = (props) => (
<div>
  <h1>{props.artistName}</h1>
</div>
);
export default Links;
