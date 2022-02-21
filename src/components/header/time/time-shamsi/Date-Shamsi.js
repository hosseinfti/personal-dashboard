import React, { Component } from "react";
import "./style.css";

class DateShamsi extends Component {
  constructor(props) {
    super(props);
    // const date = new Date();
    // const newTime = new Intl.DateTimeFormat("fa-IR", {
    //   timeStyle: "medium",
    // }).format(date);
    const event = new Date();
    // const weekOptions = { weekday: "long" };
    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const todayDate = event.toLocaleDateString("fa-IR", dateOptions);
    // const todayweekday = event.toLocaleDateString("fa-IR", weekOptions);
    this.state = {
        date: todayDate,
    //   weekday: todayweekday,
    //   time: newTime,
    };
  }

  updateTime = () => {
    // const date = new Date();
    // const newTime = new Intl.DateTimeFormat("fa-IR", {
    //   timeStyle: "medium",
    // }).format(date);
    const event = new Date();
    // const weekOptions = { weekday: "long" };
    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const todayDate = event.toLocaleDateString("fa-IR", dateOptions);
    // const todayweekday = event.toLocaleDateString("fa-IR", weekOptions);
    this.setState(() => ({
    //   weekday: todayweekday,
    //   time: newTime,
    date: todayDate,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 60000);
    // const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    // new Intl.DateTimeFormat("fa-IR", { timeStyle: "medium" }).format(date);
  }

  render() {
    return (
      <>
        {/* <div className="time-wDay">
          <div>{this.state.weekday}</div>
          <div>{this.state.time}</div>
        </div> */}
        <div>{this.state.date}</div>
      </>
    );
  }
}
export default DateShamsi;
