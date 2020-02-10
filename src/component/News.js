import React from 'react';
import Card from './basic/Card'
import axios from 'axios'

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    const url = '/news'
    const lastCursor = 'lastCursor='
    const itemNumber = 'pageSize='
    const that = this
    console.log('nihao')
    axios.get(url + '?' + itemNumber + '16' + '&' + lastCursor)
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

export default News;