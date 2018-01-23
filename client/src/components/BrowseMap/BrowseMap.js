import React from "react";
import Browse from "../Browse/Browse";



const BrowseMap = props => (
  <ul className="cardGroup">
      {props.Artists.map(item=>(
        <li className="card" key={item.id}>
         <img alt={item.artistName} src={item.image} />
          <div className="content">
          <strong>Artist:</strong> {item.artistName}
          <strong>About:</strong> {item.bio}
          <strong>Link:</strong> {item.link}
          </div>
        </li>
        ))}
      </ul>
);



export default BrowseMap;