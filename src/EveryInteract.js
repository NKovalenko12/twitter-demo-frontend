import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Wallpaper from "./Wallpaper";
import Statistics from "./Statistics";
import TweetList from "./TweetList";
import ProfileInfo from "./ProfileInfo";

class EveryInteract extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Every Interaction (@EveryInteract)</title>
          <meta
            name="description"
            content="Последние твиты от Every Interaction (@EveryInteract). A user-experience design studio in London. We specialise in making the complex simple, the confusing intuitive and the perplexing obvious. London, UK"
          />
        </Helmet>
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

export default EveryInteract;
