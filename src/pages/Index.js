import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TodoList from "../components/todolist/TodoList";
import Header from "../components/header/Header";
import AboutMe from "./aboutme/AboutMe";
import AboutThisProject from "./aboutthisproject/AboutThisProject";
import NotFound from "./notfound/NotFound";

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
