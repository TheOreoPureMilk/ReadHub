import React from 'react';
import '../../assets/css/Timeline.css'
import { Link } from "react-router-dom"

function Timeline(props) {

  function reload() {
    window.location.reload(true)
  }
  return (
    <div>
      <ul>
        {
          props.more.map((item) => {
            return (
              <li key={item.id} onClick={reload}>
                <Link to={`/topics/${item.id}`} >
                  <div className="item-time">{item.createdAt.substring(0, 10)}</div>
                  <div className="item-title">{item.title}</div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Timeline;