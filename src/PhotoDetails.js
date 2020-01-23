import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PhotoDetail() {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=dTcRd4gct9hDzV1UoBJJhSB7Nh9jjz1bXZi8bFKR"
      )
      .then(response => {
        const Data = response.data;
        console.log(response);
        setDetail(Data);
      })
      .catch(error => {
        console.log("AN ERROR HAS HAPPENED", error);
      });
  }, []);

  return (
    <div>
      <h1>{detail.copyright}</h1>
      <p>{detail.date}</p>
      <p> {detail.explanation}</p>
      <p>{detail.title}</p>
      <img src={detail.hdurl} alt="Pictures of stars" />
      
    </div>
  );
}

