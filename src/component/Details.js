import React,{useEffect, useState} from 'react';
import axios from 'axios'

import { useParams } from 'react-router-dom'


function Details() {
  let { id } = useParams();
  let url = 'topic'
  let [data, setdata] = useState({})
  useEffect(() => {
    axios.get(url + '/' + id)
      .then((res) => {
        console.log(res.data)
        setdata(res.data)
      }).catch((err) => {
        console.log(err)
      })
  })
  return (
    <div>
      <p>{data.title}</p>
      <hr></hr>
      <p>{data.summary}</p>
    </div>
  );
}
/*
let id = useParams()

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: String
    }
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>yes</div>
    );
  }
}
*/
export default Details;