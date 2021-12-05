import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-search"
              placeholder="Enter a city.."
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Sunday 14:40</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          7°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 51%</li>
            <li>Wind: 0.45 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
