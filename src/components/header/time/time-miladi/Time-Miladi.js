import React, { Component } from "react";
import "./style.css"

class TimeMiladi extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const newTime = new Intl.DateTimeFormat("en-GB", {
      timeStyle: "medium",
    }).format(date);
    const event = new Date();
    const weekOptions = { weekday: "long" };
    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const todayMiladiDate = event.toLocaleDateString("en-GB", dateOptions);
    const todayMiladiweekday = event.toLocaleDateString("en-GB", weekOptions);
    this.state = {
      miladiWeekday: todayMiladiweekday,
      miladiDate: todayMiladiDate,
      time: newTime,
    };
  }

  updateTime = () => {
    const date = new Date();
    const newTime = new Intl.DateTimeFormat("en-GB", {
      timeStyle: "medium",
    }).format(date);
    const event = new Date();
    const weekOptions = { weekday: "long" };
    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const todayMiladiDate = event.toLocaleDateString("en-GB", dateOptions);
    const todayMiladiweekday = event.toLocaleDateString("en-GB", weekOptions);
    this.setState(() => ({
      miladiWeekday: todayMiladiweekday,
      miladiDate: todayMiladiDate,
      time: newTime,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 1000);
    const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    new Intl.DateTimeFormat("en-GB", { timeStyle: "medium" }).format(date);
  }

  render() {
    return (
      <>
      {/* <div className="miladi"> */}
        {/* <div>{this.state.weekday}</div> */}
        <div>{this.state.miladiDate}</div>
        {/* <div>{this.state.time}</div> */}
      {/* </div> */}
      </>
    );
  }
}
export default TimeMiladi;
