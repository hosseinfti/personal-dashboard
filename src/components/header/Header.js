import React, { Component } from "react";
import Weather from "./weather/Weather";
import { Link } from "react-router-dom";
import TimeShamsi from "./time/time-shamsi/Time-Shamsi";
import TimeMiladi from "./time/time-miladi/Time-Miladi";
import TimeHejri from "./time/time-hejri/Time-Hejri";
import "./style.css";
import DateShamsi from "./time/time-shamsi/Date-Shamsi";

class Header extends Component {
  render() {
    return (
      <div className="left-side color-pallete-1">
        <nav>
          <div className="date-container">
            <TimeShamsi />
            <div className="date color-pallete-2 inset-shadow">
              <DateShamsi />
              <TimeMiladi />
              <TimeHejri />
            </div>
          </div>
          <Weather />
        </nav>
        <div className="card calender-container color-pallete-2 inset-shadow">
          <div className="calender"> به زودی ... </div>
        </div>
      </div>
    );
  }
}
export default Header;
