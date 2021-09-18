import React from 'react';
import CountUpDown from './CountUpDown.jsx';
import HelloReact from './HelloReact.jsx';
import  SignUpComponent  from './account/SignUp.jsx';
import  SignInComponent  from './account/SignIn.jsx';
import  AccountComponent  from './account/account.jsx';
import {  clearToken, clearUid, clearId, clearFirstName, clearLastName, clearPhone , clearEmailAddress} from '../features/account';
import { useSelector, useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const Navigation = () => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const clearLoginData = () => {
    dispatch(clearId(account.id));
    dispatch(clearUid(account.uid));
    dispatch(clearFirstName(account.firstName));
    dispatch(clearLastName(account.lastName));
    dispatch(clearEmailAddress(account.email));
    dispatch(clearPhone(account.phone));
    dispatch(clearToken(account.token));
  }
  if (account.token !== '') {
    return (
      <div className="Navigation">
        <Router>
          <div>
            <nav>
              <p><Link to="/">HelloReact</Link></p>
              <p><Link to="/count-up-down">CountUpDown</Link></p>
              <button onClick={ clearLoginData }>SignOut</button>
              {account.token !== '' ? <Redirect to="/account" /> : <AccountComponent />}
            </nav>
          <Switch>
            <Route exact path="/">
              <HelloReact />
            </Route>
            <Route exact path="/count-up-down">
              <CountUpDown />
            </Route>
            <Route exact path="/account">
              <AccountComponent />
            </Route>
          </Switch>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div className="Navigation">
        <Router>
          <div>
            <nav>
              <p><Link to="/">HelloReact</Link></p>
              <p><Link to="/count-up-down">CountUpDown</Link></p>
              <p><Link to="/sign-up">SignUp</Link></p>
              <p><Link to="/sign-in">SignIn</Link></p>
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
            <Route exact path="/sign-in">
              <SignInComponent />
            </Route>
            <Route exact path="/account">
              {account.token === '' ? <Redirect to="/sign-in" /> : <SignInComponent />}
            </Route>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default Navigation;