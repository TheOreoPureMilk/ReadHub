import React from 'react';

function Timeline(props) {

  return (
    <div>
      <ul>
        {
          props.more.map((item, index) => {
            return (
              <a href={`/${item.id}`} key={index}>
                <div className="item-time">item.creatAt.substr(0,10)</div>
                <div className="item-title"></div>
              </a>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Timeline;