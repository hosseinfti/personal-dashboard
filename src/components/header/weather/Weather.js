import React, { Component } from "react";
import axios from "axios";
import iranCities from "/home/hossein/Documents/Practice/ReactJs/ClassPractice/todolist/src/json/iranCities.json";
import airConditions from "/home/hossein/Documents/Practice/ReactJs/ClassPractice/todolist/src/json/airConditions.json";
import Pollution from "../pollution/Pollution";
import "../style.css";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: iranCities,
      cityName: iranCities[12]["name"],
      inputCity: iranCities[12]["langs"][0]["fa"],
      inputId: iranCities[12]["id"],
      inputLat: iranCities[12]["coord"]["lat"],
      inputLon: iranCities[12]["coord"]["lon"],
      weatherData: undefined,
      weatherDescription: undefined,
      weatherTextDisplay: undefined,
      airConditionsText: airConditions,
      loading: false,
    };
  }

  getWeatherData = () => {
    axios
      .get(
        // `http://api.openweathermap.org/data/2.5/weather?id=${this.state.inputId}&units=metric&appid=2166d7ffe1acb211d49ade284aa794fa`
        `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.inputLat}&lon=${this.state.inputLon}&units=metric&appid=2166d7ffe1acb211d49ade284aa794fa`
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          weatherData: data.main.temp,
          weatherDescription: data.weather[0].description,
          weatherTextDisplay: this.state.airConditionsText.filter((item) => {
            return item["id"] === data.weather[0].id;
          }),
        });
      });
  };

  handleSelectCity = (event) => {
    const x = this.state.cities.filter((item) => {
      return event.target.value === item.langs[0].fa;
    });
    this.setState(
      {
        inputLat: x[0]["coord"]["lat"],
        inputLon: x[0]["coord"]["lon"],
        inputId: x[0].id,
        inputCity: event.target.value,
        cityName: x[0].name,
      },
      () => this.getWeatherData()
    );
  };

  componentDidMount() {
    this.getWeatherData();
  }

  componentDidUpdate() {}

  render() {
    let temp =
      isNaN(this.state.weatherData) === false
        ? `${this.state.weatherTextDisplay[0]["fa"]}`
        : "درحال بارگذاری ...";
    return (
      <>
        {/* <div> */}
        <select
          className="card selector-city color-pallete-1"
          value={this.state.inputCity}
          onChange={this.handleSelectCity}
        >
          {this.state.cities.map((item) => {
            return <option key={item.id}> {item.langs[0].fa} </option>;
          })}
        </select>
        <div className="card weather-container color-pallete-1">
          <div>
            <div>
              {isNaN(this.state.weatherData) === false
                ? `${Math.round(this.state.weatherData)}°C`
                : ""}
            </div>
            <div> {temp} </div>
          </div>
          <div></div>
        </div>
        <Pollution aqiCity={this.state.cityName} /> {/* </div> */}
      </>
    );
  }
}
export default Weather;
