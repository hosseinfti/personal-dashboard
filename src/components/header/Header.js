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
      <div className="left-side">
        <nav>
        <ul className="card router color-pallete-1">
            <li>
              <Link className="routerLink" to="/">
                لیست انجام کار
              </Link>
            </li>
            <li>
              <Link className="routerLink" to="/aboutMe">
                درباره‌ی من
              </Link>
            </li>
            <li>
              <Link className="routerLink" to="/aboutThisProject">
                درباره‌ی این پروژه
              </Link>
            </li>
          </ul>
          {/* <div className="notices"> */}
          {/* <div className="headerDate"> */}
          <div className="date-container">
            <TimeShamsi />
            <div className="date color-pallete-2">
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
        <div className="card calender-container color-pallete-1">
        <div className="calender"> ... Comming soon </div>
        </div>
      </div>
    );
  }
}
export default Header;
