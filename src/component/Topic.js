import React from 'react';
import Card from './basic//Card'
import axios from 'axios'

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    const url = 'https://api.readhub.cn/topic'
    const lastCursor = 'lastCursor='
    const itemNumber = 'pageSize='
    setTimeout((url) => {
      axios.get(url + '?' + itemNumber + '6' + '&' + lastCursor)
    }, 500)
      .then((res) => { console.log(res) });
  }

  render() {
    return (
      <div>
        <Card></Card>
      </div>
    );
  }
}

export default Topic; React.