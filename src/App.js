import React from 'react';
import './assets/css/App.css';
import Card from './component/basic/Card';
import Head from './component/Head'
import Topic from './component/Topic'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Head></Head>
      <hr></hr>
      <Card></Card>
      <hr></hr>
      <Router>
        <Switch>
          <Route exact path="/">
            <Topic></Topic>
          </Route>
          <Route path="/news">

          </Route>
          <Route path="/tech">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
