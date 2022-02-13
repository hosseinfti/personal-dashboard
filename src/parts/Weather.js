import React, { Component } from "react";
import axios from "axios";
import iranCities from "../services/iranCities.json";
import airConditions from "../services/airConditions.json";
import Pollution from "./Pollution";

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
        ? `${Math.round(this.state.weatherData)}°C ${
            this.state.weatherTextDisplay[0]["fa"]
          }`
        : "درحال بارگذاری ...";
    return (
      <>
        <div>
          <select value={this.state.inputCity} onChange={this.handleSelectCity}>
            {this.state.cities.map((item) => {
              return <option key={item.id}> {item.langs[0].fa} </option>;
            })}
          </select>
          <div>{temp}</div>
          <div>
            {" "}
            <Pollution aqiCity={this.state.cityName} />{" "}
          </div>
        </div>
      </>
    );
  }
}
export default Weather;

// const url = "api.openweathermap.org/data/2.5/weather?q=Tehran&appid=2166d7ffe1acb211d49ade284aa794fa";
// const request = new XMLHttpRequest();
// request.open('GET', url);
// request.send();
// if(request.status === 200){
//     const data = JSON.parse(request.responseText)
//     for(let item of data){
//         console.log(item.title);
//     }
// }else{
//     console.log("404 Not found");
// }
//     request.onload = () => {
//     console.log(request);
// }

// componentDidMount() {
//     fetch("http://api.openweathermap.org/data/2.5/weather?id=112931&units=metric&appid=2166d7ffe1acb211d49ade284aa794fa")
//     .then((response) =>  {
//        if(response.status === 200){
//         return response.json();
//        }else{throw new Error("404 Not Found...");}
//     })
//     .then(data => {
//         this.setState({
//             inputId: [data]
//         })
//     })
//     .catch(error => console.log(error.message))
// }

//     render() {
//         let temp = this.state.inputId.map((item) => <div key={item.weather[0].id} >{Math.round(item.main.temp)} °C - {item.weather[0].main} </div>)
//     return(
//         <>
//         <div>
//             {temp}
//             </div>
//         </>
//     )
// }

// const irCities = allcities.map((item) => {
//     if(item.country = "IR"){
//         return item
//     }
// })
// const listName = someCities.map((item) => {
//     if(item.country = "IR"){
//         return item.name
//     }
// })
// console.log(listId);
// console.log(listName);

// cityId: listId,
// cityName: listName,
