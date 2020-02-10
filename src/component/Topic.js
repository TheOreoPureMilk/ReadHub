import React from 'react';
import Card from './basic//Card'
import axios from 'axios'

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    const url = '/topic'
    const lastCursor = 'lastCursor='
    const itemNumber = 'pageSize='
    axios.get(url + '?' + itemNumber + '6' + '&' + lastCursor)
      .then((res) => { console.log(res.data.data) })
  }

  render() {
    return (
      <div>
        <Card></Card>
      </div>
    );
  }
}

export default Topic;