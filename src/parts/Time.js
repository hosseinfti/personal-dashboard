import React,{ Component } from "react"
// import Moment from "react-moment";
// import 'moment-timezone';
// import Clock from "react-live-clock";
// import { Switch } from "antd";

class Time extends Component {
    constructor(props) {
        super(props)
        // const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        const date = new Date()
        const newTime = new Intl.DateTimeFormat('fa-IR', {timeStyle: 'medium' }).format(date)
        const event = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
        const today = event.toLocaleDateString('fa-IR', options)
        this.state={
            date : today,
            time : newTime,
            x:''
        }
    }

    updateTime = () => {
        // const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        const date = new Date()
        const newTime = new Intl.DateTimeFormat('fa-IR', {timeStyle: 'medium' }).format(date)
        const event = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
        const today = event.toLocaleDateString('fa-IR', options)
        this.setState(() =>  ({
            date : today,
            time : newTime
        }));
    }


    componentDidMount() {
        this.interval = setInterval(() => this.updateTime() , 1000);
        const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
        new Intl.DateTimeFormat('fa-IR', {timeStyle: 'medium' }).format(date)

    }

    render() {

    return (
        <>
            <div>{this.state.date}</div>
            <div>{this.state.time}</div>
        </>
    )
}
}
export default Time


// class Time extends Component {
    // render() {
    
    //     return <div> <Moment format={'MMMM Do YYYY'} /> <Clock format={'HH:mm:ss'} ticking={true} timezone={'IR/Pacific'} /> </div>
    // }
    // }
    // export default Time



            /* {this.state.date} :  {this.myClock.getMinutes()} : {this.myClock.getSeconds()}   */


//     myClock = () => {
//         this.setState(prevState => ({
//           seconds: prevState.seconds + this.state.date
//         }));
// }


    // myClock = () => {
    //         this.setState({
    //           date: new Date()
    //         })
    // }


// class Time extends Component {
//     constructor() {
//         super()
//         var today = new Date(),
//             date = today.getHours() + ':' + today.getMinutes()  + ':' + today.getSeconds()

//         this.state={
//             date : today.getHours() + ':' + today.getMinutes()  + ':' + today.getSeconds()
//         }
//     }



// function calcTime(city, offset) {
//     // create Date object for current location
//     var d = new Date();

//     // convert to msec
//     // subtract local time zone offset
//     // get UTC time in msec
//     var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

//     // create new Date object for different city
//     // using supplied offset
//     var nd = new Date(utc + (3600000*offset));

//     // return time as a string
//     return "The local time for city" + city + "is" + nd.toLocaleString();
// }

// console.log(calcTime(' Tehran ', '+3.5'));



// let date = new Date(0)
// console.log(date.toLocaleString('de-DE', {hour: '2-digit',   hour12: false, timeZone: 'Europe/Athens' }));
