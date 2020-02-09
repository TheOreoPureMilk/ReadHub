import { Collapse, Icon } from 'antd';
import React from 'react'
import 'antd/dist/antd.css'

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: 'gry',
  borderRadius: 4,
  marginBottom: 4,
  border: 0,
  overflow: 'hidden',
};

const string = `
test string
`
console.log(string)

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
          <Panel header={string} key="1" style={customPanelStyle} >
            <a href="https://www.baidu.com">
              <p>{text}</p>
            </a>
          </Panel>
          <Panel header="This is panel header 2" key="2" style={customPanelStyle} showArrow={false}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" style={customPanelStyle} showArrow={false}>
            <p>{text}</p>
          </Panel>
        </Collapse>,
        mountNode,
      </div>
    );
  }
}

export default Card;