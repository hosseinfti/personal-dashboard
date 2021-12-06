import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TodoList from "../pages/TodoList";
import Header from "../components/Header";
import AboutMe from "../pages/AboutMe";
import AboutThisProject from "../pages/AboutThisProject.js";
import NotFound from "../pages/NotFound";

class Index extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/"                 element={<TodoList />} />
            <Route exact path="/aboutMe"          element={<AboutMe />} />
            <Route exact path="/aboutThisProject" element={<AboutThisProject />} />
            <Route path="*"                       element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default Index;
