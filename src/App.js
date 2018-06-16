import React, { Component } from "react";
import Header from "./Header";
import Wallpaper from "./Wallpaper";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wallpaper />
      </div>
    );
  }
}

export default App;
