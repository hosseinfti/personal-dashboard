import React, { Component } from "react";
import Weather from "../parts/Weather";
import { Link } from "react-router-dom";
import TimeShamsi from "../parts/Time-Shamsi";
import TimeMiladi from "../parts/Time-Miladi";

class Header extends Component {
  render() {
    return (
      <header>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="notices">
            <div className="headerDate">
              <TimeShamsi />
              <TimeMiladi />
            </div>
            <div>
              <Weather />
            </div>
          </div>
          <ul className="router">
            <li>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                لیست انجام کار
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/aboutMe"
              >
                درباره‌ی من
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
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
