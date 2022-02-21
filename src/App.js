import React, { Component } from "react";
import Router from "./pages/Index"


class App extends Component {
  render() {
    return (
      <>
        <div className="container">
        <Router />
        </div>
      </>
    );
  }
}
export default App;
