import React, { Component } from "react";
import "./style.css";

class TimeShamsi extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const newTime = new Intl.DateTimeFormat("fa-IR", {
      // timeStyle: "short",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
    // const newTime = date.getHours() + ":" + date.getMinutes()
    const event = new Date();
    const weekOptions = { weekday: "long" };
    // const dateOptions = {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // };
    // const todayDate = event.toLocaleDateString("fa-IR", dateOptions);
    const todayweekday = event.toLocaleDateString("fa-IR", weekOptions);
    this.state = {
      // date: todayDate,
      time: newTime,
      weekday: todayweekday,
    };
  }

  updateTime = () => {
    const date = new Date();
    const newTime = new Intl.DateTimeFormat("fa-IR", {
      // timeStyle: "short",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
    // const newTime = date.getHours() + ":" + date.getMinutes()
    const event = new Date();
    const weekOptions = { weekday: "long" };
    // const dateOptions = {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // };
    // const todayDate = event.toLocaleDateString("fa-IR", dateOptions);
    const todayweekday = event.toLocaleDateString("fa-IR", weekOptions);
    this.setState(() => ({
      // date: todayDate,
      time: newTime,
      weekday: todayweekday,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 1000);
    // const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    // new Intl.DateTimeFormat("fa-IR", { timeStyle: "medium" }).format(date);
  }

  render() {
    return (
      <>
        <div className="time-wDay color-pallete-2 inset-shadow">
          <div className="time">{this.state.time}</div>
          <div className="wDay">{this.state.weekday}</div>
        </div>
        {/* <div>{this.state.date}</div> */}
      </>
    );
  }
}
export default TimeShamsi;
