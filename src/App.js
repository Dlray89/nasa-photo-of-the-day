import React from "react";
import ImgCard from "./ImgCard";
import Imglist from "./ImgList";
import "./App.css";

function App() {
  return (
    <div className="App">
       <div className="cardHolder">
         <img className="image" src="#" alt="#" />
         <h1>Welcome to Nasa</h1>
         <ImgCard />
         <Imglist/>
       </div>

    </div>
  );
}

export default App;
