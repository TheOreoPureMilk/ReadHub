import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

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
            <Link to="/topics">
              <img
                src="https://cdn.readhub.cn/static/assets/png/readhub_logo_m@2x.78b35cd0.png"
              >
              </img>
            </Link>
          </div>
          <div>
            <Link to="/topics">
              热门话题
            </Link>
          </div>
          <div>
            <Link to="/news">
              科技动态
            </Link>
          </div>
          <div>
            <Link to="/tech">
              开发者资讯
            </Link>
          </div>
        </Router>
      </div>
    );
  }
}

export default Head