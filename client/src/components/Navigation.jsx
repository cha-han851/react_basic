import React from 'react';
import CountUpDown from './CountUpDown.jsx';
import HelloReact from './HelloReact.jsx';
import  SignUpComponent  from './account/SignUp.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <Router>
            <div>
              <nav>
                <p><Link to="/">HelloReact</Link></p>
                <p><Link to="/count-up-down">CountUpDown</Link></p>
                <p><Link to="/sign-up">SignUp</Link></p>
              </nav>
          <Switch>
            <Route exact path="/">
              <HelloReact />
            </Route>
            <Route exact path="/count-up-down">
              <CountUpDown />
            </Route>
            <Route exact path="/sign-up">
              <SignUpComponent />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}