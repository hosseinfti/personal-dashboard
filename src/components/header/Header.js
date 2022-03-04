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
          <ul className="card router color-pallete-2 inset-shadow">
            <Link className="routerLink" to="/">
              <li>لیست انجام کار</li>
            </Link>
            <Link className="routerLink" to="/aboutMe">
              <li>درباره‌ی من</li>
            </Link>
            <Link className="routerLink" to="/aboutThisProject">
              <li>درباره‌ی این پروژه</li>
            </Link>
          </ul>
          {/* <div className="notices"> */}
          {/* <div className="headerDate"> */}
          <div className="date-container">
            <TimeShamsi />
            <div className="date color-pallete-2 inset-shadow">
              <DateShamsi />
              <TimeMiladi />
              <TimeHejri />
            </div>
          </div>
          {/* </div> */}
          {/* <div> */}
          {/* <div className="weather-aqi-container"> */}
          <Weather />
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </nav>
        <div className="card calender-container color-pallete-2 inset-shadow">
          <div className="calender"> به زودی ... </div>
        </div>
      </div>
    );
  }
}
export default Header;
