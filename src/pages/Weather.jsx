import React, { useEffect, useState } from "react";
import "../assets/css/Weather.css";

const Weather = () => {
  const [input, setInput] = useState("Mumbai");
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=fac1c4c9b7b9265a442d60af3efcc9b4`;
      const responce = await fetch(url);
      const resJson = await responce.json();
      setCity(resJson.main);
    };
    fetchAPI();
  }, [input]);

  return (
    <>
      <div className="container">
        <div className="card mx-auto">
          <div className="card-body">
            <input
              type="search"
              className="form-control mb-5"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />

            {!city ? (
              <p className="not-found">City Not Found</p>
            ) : (
              <>
                <p className="city-title">{input}</p>
                <p className="main-temp">{city.temp}°C</p>
                <p className="min-max-temp">Min Temp &nbsp; : &nbsp; {city.temp_min}°C</p>
                <p className="min-max-temp">Max Temp &nbsp; : &nbsp;{city.temp_max}°C</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;