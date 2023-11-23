import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Wednesday the 8th of november | 16:12",
    description: "Overcast clouds",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    humidity: 80,
    wind: 10,
    temperature: 11,
  };

  return (
    <div className="Search">
      <form className="search-bar" action="submit">
        <input
          className="form-control"
          type="text"
          placeholder="type city here"
        />
        <input className="search-city" type="submit" value="Search" />
        <i
          className="fa-solid fa-location-dot current-location"
          type="submit"
          value="Current Location"
        ></i>
      </form>
      <header>
        <div>
          <h1 className="city">{weatherData.city}</h1>
          <h2 className="date">{weatherData.date}</h2>
          <p className="description">{weatherData.description}</p>
        </div>
        <div>
          <ul>
            <li className="humidity">Humidity: {weatherData.humidity}%</li>
            <li className="wind">Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </header>
      <section>
        <h3>
          <img
            src={weatherData.imgUrl}
            className="big-icon"
            alt="big-weather-icon"
          />
          <span className="temperature">{weatherData.temperature}</span>{" "}
          <span className="units">
            <a href="#" className="celsius-link active">
              °C
            </a>{" "}
            <span className="divider"> | </span>
            <a href="#" className="fahrenheit-link">
              °F
            </a>
          </span>
        </h3>
      </section>
      <section className="weather-forecast">
        <div className="row">
          <div className="col">
            <small className="day">Thursday</small>
            <br />
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              className="small-icon"
              alt="small-weather-icon"
            />
            <br />
            <small className="temp-day">12°</small>
          </div>
          <div className="col">
            <small className="day">Friday</small>
            <br />
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              className="small-icon"
              alt="small-weather-icon"
            />
            <br />
            <small className="temp-day">9°</small>
          </div>
          <div className="col">
            <small className="day">Saturday</small>
            <br />
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              className="small-icon"
              alt="small-weather-icon"
            />
            <br />
            <small className="temp-day">9°</small>
          </div>
          <div className="col">
            <small className="day">Sunday</small>
            <br />
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              className="small-icon"
              alt="small-weather-icon"
            />
            <br />
            <small className="temp-day" id="temp-day">
              9°
            </small>
          </div>
          <div className="col">
            <small className="day">Monday</small>
            <br />
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              className="small-icon"
              alt="small-weather-icon"
            />
            <br />
            <small className="temp-day">8°</small>
          </div>
        </div>
      </section>
    </div>
  );
}
