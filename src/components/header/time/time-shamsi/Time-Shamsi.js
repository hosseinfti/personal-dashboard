import React, { Component } from "react";

class TimeShamsi extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const newTime = new Intl.DateTimeFormat("fa-IR", {
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
    const event = new Date();
    const weekOptions = { weekday: "long" };
    const todayweekday = event.toLocaleDateString("fa-IR", weekOptions);
    this.state = {
      time: newTime,
      weekday: todayweekday,
    };
  }

  updateTime = () => {
    const date = new Date();
    const newTime = new Intl.DateTimeFormat("fa-IR", {
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
    const event = new Date();
    const weekOptions = { weekday: "long" };
    const todayweekday = event.toLocaleDateString("fa-IR", weekOptions);
    this.setState(() => ({
      time: newTime,
      weekday: todayweekday,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  render() {
    return (
      <>
        <div className="time-wDay color-pallete-2 inset-shadow">
          <div className="time">{this.state.time}</div>
          <div className="wDay">{this.state.weekday}</div>
        </div>
      </>
    );
  }
}
export default TimeShamsi;
