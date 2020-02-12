import React from 'react';
import '../../assets/css/Timeline.css'


function Timeline(props) {

  return (
    <div>
      <ul>
        {
          props.more.map((item) => {
            return (
              <li key={item.id}>
                <a href={`/${item.id}`} >
                  <div className="item-time">{item.createdAt.substring(0,10)}</div>
                  <div className="item-title">{item.title}</div>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Timeline;