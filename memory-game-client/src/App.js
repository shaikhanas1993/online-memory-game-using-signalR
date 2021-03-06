import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Desk from "./js/components/Desk";
import Stats from "./js/components/Stats";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <div className="App">
          <h1>Multiplayer Memory Game</h1>
          <Stats />
          <div className="table">
            <Desk />
          </div>
        </div>
      );
    }
  }
const mapStateToProps = state => ({
});

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;
