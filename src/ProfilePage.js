import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Wallpaper from "./Wallpaper";
import Statistics from "./Statistics";
import TweetList from "./TweetList";
import ProfileInfo from "./ProfileInfo";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Every Interaction (@EveryInteract)</title>
          <meta name={this.props.desc} content={this.props.content} />
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

export default ProfilePage;
