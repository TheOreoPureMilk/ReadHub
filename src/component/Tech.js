/* eslint-disable */
import React from 'react';
import Card from './basic/Card'
import axios from 'axios'

class Tech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    const url = '/technews'
    const lastCursor = 'lastCursor='
    const itemNumber = 'pageSize='
    const that = this
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

export default Tech;