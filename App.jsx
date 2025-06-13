import { useState } from 'react'
import './App.css'
import searchIcon from "./assets/search.png";
import clearIcon from "./assets/clear.png";
import cloudIcon from "./assets/cloudy.png";
import drizzleIcon from "./assets/drzzle.png";
import rainIcon from "./assets/Rainy.png";
import windIcon from "./assets/wind.png";
import snowIcon from "./assets/snow.png";
import humidityIcon from "./assets/humidity.png";

const weatherDetails=()=>
{  
  return(
    <>
    <div classname="Images">
      <img src={clearIcon} alt="Image"/>
    </div>
    </>
  );
};
function App() {
  

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text"
          className="cityInput"
          placeholder="search city" />
          <div className="search-icon">
            <img src={searchIcon}
            alt="search"/>
          </div>
        </div> 
        <weatherDetails/> 
        </div>
    </>
  )
}

export default App
