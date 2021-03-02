import React, { Component } from 'react'
import { Slider, Row, Col } from 'antd';

export default class Single extends Component {
  state = {
    inputValue: 0,
    datakey:this.props.datakey,
  };

  onChange = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value,
    });
  };
  onAfterChange = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value,
    });
    this.props.getMsg(this.state)
  };

  render() {
    const { inputValue } = this.state;
    return (

      <Row align={'middle'}>
        <Col span={4} offset={3}>{this.props.inputTxt}</Col>
        <Col span={13}>
          <Slider min={-1} max={1} onChange={this.onChange}
            onAfterChange={this.onAfterChange} step={0.01}
            value={typeof inputValue === 'number' ? inputValue : 0} />
        </Col>
      </Row>

    );
  }
}
