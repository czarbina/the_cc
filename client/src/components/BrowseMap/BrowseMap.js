import React from "react";
import Browse from "../../pages/Browse/Browse";
import "./BrowseMap.css";
import {Link} from "react-router-dom";


const BrowseMap = props => {
  return(
  <div className="container">
    <ul className="cardGroup">
      {props.Artists.map(item=>(
        <Link to={"/profile/" + item.id} >
          <li className="card" 
              key={item.id}>
         <img className="image" alt={item.artistName} src={item.image}/>
          <div className="bio">
          <li> {item.bio} </li>
          </div>
          <div className="content">
          <li> {item.artistName} </li>
          <li> {item.links} </li>
          </div>
          </li>
        </Link>
        ))}
      </ul>
    </div>
  );
};



export default BrowseMap;
