import React, { useState } from "react";
import "./Weather.css";
import api from "../../api";
import dateBuilder from "../../dateBuilder";

const CurrentWeather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const searchCity = (e) => {
    fetch(`${api.staticURL}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
      });
    e.preventDefault();
  };

  const { name, main } = weather;

  return (
    <div className="weatherContainer">
      <div className="searchContainer">
        <div>
          <h3>Enter city:</h3>
          <input
            className="input"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>
        <div>
          <button type="submit" onClick={searchCity}>
            Show weather
          </button>
        </div>
      </div>

      {weather.main ? (
        <div className="resultContainer">
          <div className="location">
            {name}, {weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="temperature">
            <div className="celsius">{Math.round(main.temp)}°c</div>
            <div className="fahrenheit">
              {Math.round((main.temp * 9) / 5 + 32)}°
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CurrentWeather;
