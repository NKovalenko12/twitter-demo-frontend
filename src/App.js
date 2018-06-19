import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { Helmet } from "react-helmet";
import ProfilePage from "./ProfilePage";

const TemporaryRoute = ({ component: ProfilePage }) => (
  <Route
    render={props => (
      <ProfilePage
        //Дальше как план передавать всю инфу(твиты, профайл инфо, все) из json, и так можно завести и твой профиль.
        desc="Every Interaction Profile Page"
        content="Последние твиты от Every Interaction (@EveryInteract). A user-experience design studio in London. We specialise in making the complex simple, the confusing intuitive and the perplexing obvious. London, UK"
      />
    )}
  />
);

const App = props => (
  <div>
    <Helmet>
      <title>Twitter</title>
    </Helmet>
    <BrowserRouter>
      <div>
        <Redirect from="/" to="/EveryInteract" />
        <TemporaryRoute path="/EveryInteract" component={ProfilePage} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
