import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
              <ul>
                <li><Link to="/courses">courses</Link></li>
                <li><Link to="/users">users</Link></li>
              </ul>
              <Switch>
                <Route path="/courses" {...this.props} component={Courses}/>
                <Route path="/users" exact component={Users}/>
                <Redirect exact path="/all-courses" to="/courses" />
                <Route render={() => <h1>404 Error Page</h1>}/>
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
