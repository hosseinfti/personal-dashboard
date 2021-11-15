import React,{Component} from "react";
import axios from "axios";
import someCities from "../services/someCities.json"

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state= {
            cities: someCities,
            inputCity: someCities[4].name,
            inputWeather: someCities[4].id,
            weatherData: undefined
            
        }
    }
    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.state.inputWeather}&units=metric&appid=2166d7ffe1acb211d49ade284aa794fa`)
        .then(response => response.data)
        .then(data => data.main.temp)
        .then(newdata => {
            this.setState({
                weatherData: newdata
            })
        })
    }

    handleSelectCity = (event) => {
        const x = this.state.cities.filter((item) => {
           return event.target.value.includes(item.name)
        })
        this.setState({
            inputWeather:x[0].id,
            inputCity: event.target.value
        })
    }
    componentDidUpdate() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.state.inputWeather}&units=metric&appid=2166d7ffe1acb211d49ade284aa794fa`)
        .then(response => response.data)
        .then(data => data.main.temp)
        .then(newdata => {
            this.setState({
                weatherData: newdata
            })
        })

    }

    render() {
        let temp = Math.round(this.state.weatherData)
        // <div>{Math.round(item.main.temp)} °C - {item.weather[0].description} </div>)
    return(
        <>
        <div>
            <select value={this.state.inputCity} onChange={this.handleSelectCity}> 
            <option>{this.state.cities[0].name}</option>    
            <option>{this.state.cities[1].name}</option>    
            <option>{this.state.cities[2].name}</option>    
            <option>{this.state.cities[3].name}</option>    
            <option>{this.state.cities[4].name}</option>    
            <option>{this.state.cities[5].name}</option>    
            <option>{this.state.cities[6].name}</option>    
            <option>{this.state.cities[7].name}</option>    
            <option>{this.state.cities[8].name}</option>    
            <option>{this.state.cities[9].name}</option>    
            <option>{this.state.cities[10].name}</option>    
            </select>
            <div>{temp}°C  </div>
        </div>
        </>
    )
}
}
export default Weather



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
        //             inputWeather: [data]
        //         })
        //     })
        //     .catch(error => console.log(error.message))
        // }


    //     render() {
    //         let temp = this.state.inputWeather.map((item) => <div key={item.weather[0].id} >{Math.round(item.main.temp)} °C - {item.weather[0].main} </div>)
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