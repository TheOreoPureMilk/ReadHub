import { Collapse, Icon } from 'antd';
import React from 'react'
import 'antd/dist/antd.css'

const { Panel } = Collapse;


const customPanelStyle = {
  background: 'gry',
  borderRadius: 4,
  marginBottom: 4,
  border: 0,
  overflow: 'hidden',
};

const listItem = {
  fontSize: '0.14rem'
}

const string = `
test string
`
console.log(string)

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "标题",
          summary: "摘要内容",
          url: "https://www.baidu.com"
        },
        {
          title: "标题",
          summary: "摘要内容",
          url: "https://www.baidu.com"
        },
        {
          title: "标题",
          summary: "摘要内容",
          url: "https://www.baidu.com"
        },
      ]
    }
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
            this.state.list.map((item, index) => {
              return (
                <Panel header={item.title} key="1" style={customPanelStyle} style={listItem} key={index + 1}>
                  <a href="https://www.baidu.com">
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