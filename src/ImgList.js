import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";

export default function ImgList() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=dTcRd4gct9hDzV1UoBJJhSB7Nh9jjz1bXZi8bFKR"
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log("An Error has occurred", error);
      });
  }, []);

  return (
    <div className="Image">
      {image.map(info => {
        return <ImgCard copyright={info.copyright} date={info.date} />;
      })}
    </div>
  );
}
