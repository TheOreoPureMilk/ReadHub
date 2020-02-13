/* eslint-disable */
import { Collapse, Icon } from 'antd';
import React from 'react'
import 'antd/dist/antd.css'

const { Panel } = Collapse;


const customPanelStyle = {
  background: 'gray',
  borderRadius: 4,
  marginBottom: 4,
  border: 0,
  overflow: 'hidden',
};

const listItem = {
  fontSize: '18px',
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIconPosition="right"
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          {
            this.props.data.map((item, index) => {
              return (
                <Panel header={item.title} key="1" style={customPanelStyle} style={listItem} key={index + 1}>
                  <a style={customPanelStyle} href={`/topic/${item.id}`}>
                    <p>{item.summary}</p>
                  </a>
                </Panel>
              )
            })
          }
        </Collapse>
      </div>
    );
  }
}

export default Card;