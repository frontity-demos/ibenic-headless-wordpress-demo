import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ListArticles from "components/ListArticles/";
import SingleArticle from "components/SingleArticle/";
import page404 from "components/page404/";

import "./index.scss";

const App = props => {
  
  let currentPage = 1

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/page/:page" render={routeProps => {
              const {page} = routeProps.match.params
              currentPage = page
              return <ListArticles page={+page} />
            }} />
            <Route path="/404" component={page404} />
            <Route path="/:slug" render={routeProps => {
              const {slug} = routeProps.match.params
              return <SingleArticle currentPage={currentPage} slug={slug} />
            }} />
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
