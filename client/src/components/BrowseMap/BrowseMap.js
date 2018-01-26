import React from "react";
import "./BrowseMap.css";
import {Link} from "react-router-dom";

const BrowseMap = props => {

  return(
  <div className="container">
    <ul className="cardGroup">
      {props.Artists.map(item=>(
        <Link to={"/profile/" + item.id} >
          <li id="bg" className="card"
              key={item.id}>
         <img className="image" alt={item.artistName} src={item.image}/>
          <div className="bio">
            <li><h2> {item.artistName}</h2> </li>
            <span><li> {item.bio} </li></span>
              <li> <iframe title="title" id="soundcloud" className={item.links != null ? 'visible container' : 'invisible'} width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src={item.links}></iframe> </li>
          </div>

          </li>
        </Link>
        ))}
      </ul>
    </div>
  );
};

export default BrowseMap;
