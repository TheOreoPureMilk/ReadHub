import React from 'react';
import Card from './basic//Card'
import axios from 'axios'

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    const url = '/topic'
    const lastCursor = 'lastCursor='
    const itemNumber = 'pageSize='
    const that = this
    axios.get(url + '?' + itemNumber + '6' + '&' + lastCursor)
      .then((res) => {
        console.log(res.data.data)
        that.setState({
          data: res.data.data
        })
      }).catch((err) => { console.log(err) })
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