import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { colors } from "@mui/material";

export default function SearchBox({ updateinfo }) {
  let [city, setcity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  console.log(import.meta.env.VITE_WEATHER_API_KEY);



  let getweatherinfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponse = await response.json();
      console.log(jsonresponse);

      let result = {
        city: city,
        temp: jsonresponse.main.temp,
        tempmin: jsonresponse.main.temp_min,
        tempmax: jsonresponse.main.temp_max,
        feelslike: jsonresponse.main.feels_like,
        humidity: jsonresponse.main.humidity,
        weather: jsonresponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handlechange = (event) => {
    setcity(event.target.value);
  };


  let handleSubmit = async (event) => {
    try{
        event.preventDefault();
        console.log(city);
        setcity("");
        let newinfo = await getweatherinfo();
        updateinfo(newinfo);

    } catch(err){
        setError(true);
    }
   
  };

  return (
    <div>
      <h3>Search Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="cityname"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exists!</p>}
      </form>
    </div>
  );
}
