import React from 'react';
import './assets/css/App.css';
import Head from './component/Head'
import Topic from './component/Topic'
import Tech from './component/Tech'
import News from './component/News'
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
      <Router>
        <Switch>
          <Route exact path="/">
            <Topic></Topic>
          </Route>
          <Route exact path="/news">
            <News></News>
          </Route>
          <Route exact path="/tech">
            <Tech></Tech>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
