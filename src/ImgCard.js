import React, { useState, useEffect } from "react";
import ImgList from "./ImgList";

const imageCard = props => {
  return (
    <div className="Cards">
      <h2>Photo to the day</h2>
      <p>{props.copyright}</p>
    </div>
  );
};

export default imageCard;
