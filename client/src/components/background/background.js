import React from "react";

const Background = props => {
  const css = {
    background:
      `url(${props.coverphoto})`,color:"white"
  };

  return (

      <header style={css} >
        <h1>{props.artistName}</h1>
        <p>{props.tags}</p>
    </header>


  );
};

export default Background;
