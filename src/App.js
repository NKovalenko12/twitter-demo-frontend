import React, { Component } from "react";
import Header from "./Header";
import Wallpaper from "./Wallpaper";
import Statistics from "./Statistics";
import TweetList from "./TweetList";
import ProfileInfo from "./ProfileInfo";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wallpaper />
        <Statistics />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProfileInfo />
            </div>
            <div className="col-lg-6">
              <TweetList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
