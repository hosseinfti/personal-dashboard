import React, { Component } from "react";
import "./style.css";

class TimeMiladi extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const newTime = new Intl.DateTimeFormat("en-GB", {
      timeStyle: "medium",
    }).format(date);
    const event = new Date();
    const weekOptions = { weekday: "long" };
    const dateOptionsDay = {
      // year: "numeric",
      // month: "long",
      day: "numeric",
    };
    const dateOptionsMounth = {
      // year: "numeric",
      month: "long",
      // day: "numeric",
    };
    const dateOptionsYear = {
      year: "numeric",
      // month: "long",
      // day: "numeric",
    };
    const todayMiladiDateDay = event.toLocaleDateString(
      "en-GB",
      dateOptionsDay
    );
    const todayMiladiDateMounth = event.toLocaleDateString(
      "en-GB",
      dateOptionsMounth
    );
    const todayMiladiDateYear = event.toLocaleDateString(
      "en-GB",
      dateOptionsYear
    );

    const todayMiladiweekday = event.toLocaleDateString("en-GB", weekOptions);
    this.state = {
      miladiWeekday: todayMiladiweekday,
      miladiDateDay: todayMiladiDateDay,
      miladiDateMounth: todayMiladiDateMounth,
      miladiDateYear: todayMiladiDateYear,
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
    const dateOptionsDay = {
      // year: "numeric",
      // month: "long",
      day: "numeric",
    };
    const dateOptionsMounth = {
      // year: "numeric",
      month: "long",
      // day: "numeric",
    };
    const dateOptionsYear = {
      year: "numeric",
      // month: "long",
      // day: "numeric",
    };
    const todayMiladiDateDay = event.toLocaleDateString(
      "en-GB",
      dateOptionsDay
    );
    const todayMiladiDateMounth = event.toLocaleDateString(
      "en-GB",
      dateOptionsMounth
    );
    const todayMiladiDateYear = event.toLocaleDateString(
      "en-GB",
      dateOptionsYear
    );
    const todayMiladiweekday = event.toLocaleDateString("en-GB", weekOptions);
    this.setState(() => ({
      miladiWeekday: todayMiladiweekday,
      miladiDateDay: todayMiladiDateDay,
      miladiDateMounth: todayMiladiDateMounth,
      miladiDateYear: todayMiladiDateYear,
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
        <div className="miladi-date">
          <div>{this.state.miladiDateDay}</div>
          <div>{this.state.miladiDateMounth}</div>
          <div>{this.state.miladiDateYear}</div>
        </div>
        {/* <div>{this.state.time}</div> */}

        {/* </div> */}
      </>
    );
  }
}
export default TimeMiladi;
