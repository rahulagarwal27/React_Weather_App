import SearchBox from "./Searchbox";
import Infobox from "./infobox";
import './Weatherapp.css';
import { useState } from "react";

export default function Weatherapp(){
    const [weatherInfo ,setweatherInfo] = useState({
    city: "Samplecityweather",
    feelslike: 38.41,
    humidity: 6,
    temp: 42.4,
    tempmax: 42.4,
    tempmin: 42.4,
    weather: "clear sky",
    });

    let updateinfo =(newinfo) =>{
        setweatherInfo(newinfo);
    }

    return (
        <div className="maincontainer">
          <h2>Weather App</h2>
          <div className="weather-container">
            <SearchBox updateinfo={updateinfo} />
            <Infobox info={weatherInfo} />
          </div>
        </div>
      );
    
}