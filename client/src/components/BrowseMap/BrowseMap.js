import React from "react";
import Browse from "../Browse/Browse";
import "./BrowseMap.css";


const BrowseMap = props => {
  return(
  <div className="container">
    <ul className="cardGroup">
      {props.Artists.map(item=>(
        <li className="card" key={item.id}>
         <img className="image" alt={item.artistName} src={item.image}/>
          <div className="bio">
          <li> {item.bio} </li>
          </div>
          <div className="content">
          <li> {item.artistName} </li>
          <li> {item.links} </li>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};



export default BrowseMap;