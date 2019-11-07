import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginComponent from './Publics/Login/login';
import Register from './Publics/Register/register';

class Public extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'}>
            <LoginComponent />
          </Route>
          <Route exact path={'/register'}>
            <Register />
          </Route>
          <Route>
            <LoginComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Public;
