import React, { Component } from "react";
import Weather from "../parts/Weather";
import { Link } from "react-router-dom";
import TimeShamsi from "../parts/Time-Shamsi";
import TimeMiladi from "../parts/Time-Miladi";
import TimeHejri from "../parts/Time-Hejri";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="notices">
            <div className="headerDate">
              <TimeShamsi />
              <TimeMiladi />
              <TimeHejri />
            </div>
            <div>
              <Weather />
            </div>
          </div>
          <ul className="router">
            <li>
              <Link className="routerLink" to="/">
                لیست انجام کار
              </Link>
            </li>
            <li>
              <Link className="routerLink"
                to="/aboutMe"
              >
                درباره‌ی من
              </Link>
            </li>
            <li>
              <Link className="routerLink"
                to="/aboutThisProject"
              >
                درباره‌ی این پروژه
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
