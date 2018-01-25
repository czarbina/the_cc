import React from "react";
import "./background.css";

const Background = props => {
  const css = {
    background:
      `url(${props.coverphoto})`,color:"white"
  };

  return (

      <header style={css} >
        <h2>{props.artistName}</h2>
        <p className="white-text">{props.tags}</p>
      </header>


  );
};

export default Background;
