import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "../components/todolist/TodoList";
import Header from "../components/header/Header";
import NotFound from "./notfound/NotFound";

class Index extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/"                                         element={<TodoList />} />
            <Route exact path="/personal-dashboard"                       element={<TodoList />} />
            <Route path="*"                                               element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default Index;

