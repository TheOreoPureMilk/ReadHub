import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../assets/css/Details.css'
import { useParams } from 'react-router-dom'
import Meta from "./basic/Meta"
import Timeline from "./basic/Timeline"

function Details() {
  let { id } = useParams();
  let url = 'topic'
  let [data, setdata] = useState({})
  let [news, setnews] = useState([])
  let [topic, settopics] = useState([])
// eslint-disable-next-line
  useEffect(() => {
    axios.get(url + '/' + id)
      .then((res) => {
        setdata(res.data)
        setnews(res.data.newsArray)
        settopics(res.data.timeline.topics)
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
      {
        news.map((item, index) => {
          return (<Meta news={item} key={index}></Meta>)
        })
      }
      <br></br>
      <p className="meta-info">相关事件</p>
      <Timeline more={topic}></Timeline>
    </div>
  );
}

export default Details;