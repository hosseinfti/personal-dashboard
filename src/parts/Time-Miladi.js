import React, { Component } from "react";

class TimeMiladi extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const newTime = new Intl.DateTimeFormat("en-US", {
      timeStyle: "medium",
    }).format(date);
    const event = new Date();
    const weekOptions = { weekday: "long" };
    const dateOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    const todayDate = event.toLocaleDateString("en-Us", dateOptions);
    const todayweekday = event.toLocaleDateString("en-Us", weekOptions);
    this.state = {
      weekday: todayweekday,
      date: todayDate,
      time: newTime,
    };
  }

  updateTime = () => {
    const date = new Date();
    const newTime = new Intl.DateTimeFormat("en-Us", {
      timeStyle: "medium",
    }).format(date);
    const event = new Date();
    const weekOptions = { weekday: "long" };
    const dateOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    const todayDate = event.toLocaleDateString("en-Us", dateOptions);
    const todayweekday = event.toLocaleDateString("en-Us", weekOptions);
    this.setState(() => ({
      weekday: todayweekday,
      date: todayDate,
      time: newTime,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 1000);
    const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    new Intl.DateTimeFormat("en-Us", { timeStyle: "medium" }).format(date);
  }

  render() {
    return (
      <div className="miladi">
        <div>{this.state.weekday}</div>
        <div>{this.state.date}</div>
        <div>{this.state.time}</div>
      </div>
    );
  }
}
export default TimeMiladi;
