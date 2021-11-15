import React, { Component } from "react";
import Time from "./parts/Time";
import TodoList from "./pages/TodoList";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Weather from "./parts/Weather";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";

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
              <div>
                <h1>سلام رفقا !</h1>
              </div>
              <ul>
                <li>
                  <Link style={{textDecoration:'none', color:'white'}} to="/">خانه</Link>
                </li>
                <li>
                  <Link style={{textDecoration:'none', color:'white'}} to="/todolist">لیست انجام کار</Link>
                </li>
                <li>
                  <Link style={{textDecoration:'none', color:'white'}} to="/aboutme">درباره ی من</Link>
                </li>
              </ul>
              <div style={{ alignSelf: "center" }}>
                <div>
                <Time />
                </div>
                <div>
                <Weather />
                </div>
              </div>
            </nav>
          </header>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
