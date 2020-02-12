import React from 'react';
import '../../assets/css/Meta.css'

function Meta(props) {
  return (
    <div>
      <hr></hr>
      <a href={props.news.url}>
        <p className="news-title">{props.news.title}</p>
        <p className="news-from">{props.news.siteName}</p>
      </a>
    </div>
  )
}

export default Meta;