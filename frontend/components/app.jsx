import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter }
  from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
//components
import NavbarContainer from './nav/navbar_container';
import LoginFormContainer from './session_form/login_container';
import SignupFormContainer from './session_form/signup_container';
import PhotoFeedContainer from './photo_feed/photo_feed_container';


const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/" component={PhotoFeedContainer} />
    </Switch>
  </div>
);

export default App;