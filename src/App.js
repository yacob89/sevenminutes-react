import React, { Component } from "react";
import HomepageLayout from "./components/HomepageLayout";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return <HomepageLayout />;
  }
}