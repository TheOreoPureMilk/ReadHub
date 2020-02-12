/* eslint-disable */
import React from 'react';
import Card from './basic/CardTopic'
import axios from 'axios'

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: '',
      url: "/topic"
    }
  }
  
  getMore = () => {
    const lastCursor = 'lastCursor='
    const itemNumber = 'pageSize='

    if (Math.ceil(document.documentElement.scrollTop + document.body.clientHeight) >= document.body.scrollHeight) {
      axios.get(this.state.url + '?' + itemNumber + '16' + '&' + lastCursor + this.state.id)
        .then((res) => {
          let strtime = res.data.data[15].publishDate
          const array = this.state.data.concat(res.data.data)
          this.setState({
            data: array,
            id: Date.parse(strtime)
          })
        }).catch((err) => { console.log(err) })
    }
  }

  componentDidMount() {
    const lastCursor = 'lastCursor='
    const itemNumber = 'pageSize='
    axios.get(this.state.url + '?' + itemNumber + '16' + '&' + lastCursor)
      .then((res) => {
        let strtime = res.data.data[15].publishDate
        this.setState({
          data: res.data.data,
          id: Date.parse(strtime)
        })
      }).catch((err) => { console.log(err) })
    window.addEventListener('scroll', this.getMore);
  }

  render() {
    return (
      <div>
        <Card data={this.state.data}></Card>
      </div>
    );
  }
}

export default Topic;