import React, { Component } from "react";

class DateShamsi extends Component {
  constructor(props) {
    super(props);
    const event = new Date();
    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const todayDate = event.toLocaleDateString("fa-IR", dateOptions);
    this.state = {
        date: todayDate,
    };
  }

  updateTime = () => {
    const event = new Date();
    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const todayDate = event.toLocaleDateString("fa-IR", dateOptions);
    this.setState(() => ({
    date: todayDate,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 60000);
  }

  render() {
    return (
      <>
        <div>{this.state.date}</div>
      </>
    );
  }
}
export default DateShamsi;
