import React, { Component } from "react";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import Time from "./parts/Time";
import TodoList from "./pages/TodoList";
import AboutMe from "./pages/AboutMe";
import AboutThisProject from "./pages/AboutThisProject.js";
import NotFound from "./pages/NotFound";
import Weather from "./parts/Weather";

class App extends Component {
  render() {
    return (
      <>
        <Router>
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
                  <Time />
                </div>
                <div>
                  <Weather />
                </div>
              </div>
              <ul className="router" >
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    لیست انجام کار
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/aboutme"
                  >
                    درباره ی من
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/aboutThisProject"
                  >
                    درباره ی این پروژه
                  </Link>
                </li>
              </ul>
              
            </nav>
          </header>
          <Routes>
            <Route exact path="/" element={<TodoList />} />
            <Route path="/todolist?filter=all" element={<TodoList />} /> 
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/aboutThisProject" element={<AboutThisProject />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
