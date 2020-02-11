import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../assets/css/Details.css'
import { useParams } from 'react-router-dom'


function Details() {
  let { id } = useParams();
  let url = 'topic'
  let [data, setdata] = useState({})
  let [news, setnews] = useState({})
  useEffect(() => {
    axios.get(url + '/' + id)
      .then((res) => {
        console.log(res.data.newsArray)
        setdata(res.data)
        setnews(res.data.newsArray[0])
      }).catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <p className="detail-title">
        · {data.title} ·
      </p>
      <p className="detail-summary">
        {data.summary}
      </p>
      <hr className="more-next"></hr>
      <p className="meta-info">媒体报道</p>
      <p className="news-title">{news.title}</p>
    </div>
  );
}

export default Details;