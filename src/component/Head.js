import React from 'react';
import '../assets/css/Head.css'
import { Link } from "react-router-dom"

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <img
              alt="图标"
              src="https://cdn.readhub.cn/static/assets/png/readhub_logo_m@2x.78b35cd0.png"
            >
            </img>
          </Link>
        </div>
        <br></br>
        <div className="list-content">
          <div>
            <Link to="/" className="head-link">
              热门话题
              </Link>
          </div>
          <div>
            <Link to="/new" className="head-link">
              科技动态
              </Link>
          </div>
          <div>
            <Link to="/tech" className="head-link">
              开发者资讯
              </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Head