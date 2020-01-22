import React, { useState, useEffect } from "react";

const pictureCard = props => {




  return <div className="mainImg">
     <h2> copyright {props.copyright}</h2>
     <p> Date: {props.date}</p>

  </div>
   
};

export default pictureCard;
