import React, { Component } from "react";
import Header from "./Header";
import Wallpaper from "./Wallpaper";
import Statistics from "./Statistics";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wallpaper />
        <Statistics />
      </div>
    );
  }
}

export default App;
