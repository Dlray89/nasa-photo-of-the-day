import React from "react";
import PhotoDetails from "./PhotoDetails";


const  App = () => {

return(
  <div className="app"> 
  <form className="search-form">
    <input className="Search-Bar" type="text" />
    <button className="search-button" type="submit">Search</button>
  </form>
  <PhotoDetails />
 
  </div>

)
}



export default App