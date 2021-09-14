import React from "react";
import CurrentWeather from "./CurrentWeather";
import WeekForecast from "./WeekForecast";

const Weather = () => {
  return (
    <div>
      <CurrentWeather />
      <WeekForecast />
    </div>
  );
};

export default Weather;
