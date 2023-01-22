import React from 'react';
import NavBar from './NavBar';
import MyJobs from './MyJobs';
import NewJob from './NewJob';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content bg-gray-200">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/new-job">
              <NewJob />
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
