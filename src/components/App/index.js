import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ListArticles from "components/ListArticles/";

import "./index.scss";

const App = props => {
  

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/page/:page" render={routeProps => (
                <ListArticles page={+routeProps.match.params.page} />
              )}>
            </Route>
            <Route path="/" >
              <Redirect to="/page/1" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
