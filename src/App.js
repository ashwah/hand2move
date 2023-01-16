import React from 'react';
import logo from './logo.svg';
import NavBar from './NavBar';
import MyJobs from './MyJobs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MyJobs />
            </Route>
            <Route exact path="/my-jobs">
              <MyJobs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
