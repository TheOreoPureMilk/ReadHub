import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../assets/css/Head.css'


class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <a href="/">
              <img
                src="https://cdn.readhub.cn/static/assets/png/readhub_logo_m@2x.78b35cd0.png"
              >
              </img>
            </a>
          </div>
          <br></br>
          <div className="list-content">
            <div>
              <a href="/" className="head-link">
                热门话题
              </a>
            </div>
            <div>
              <a href="/news" className="head-link">
                科技动态
              </a>
            </div>
            <div>
              <a href="/tech" className="head-link">
                开发者资讯
              </a>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Head