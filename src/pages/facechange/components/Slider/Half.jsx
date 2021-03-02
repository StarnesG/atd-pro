import React, { Component } from 'react'
import { Slider, Row, Col } from 'antd';

export default class Half extends Component {
    state = {
        inputValueA: 0,
        inputValueB: 0,
        datakey:this.props.datakey,
    };

    onChange = value => {
        if (isNaN(value)) {
            return;
        }
        this.setState({
            inputValueA: value,
        });
    };
    onChangeB = value => {
        if (isNaN(value)) {
            return;
        }
        this.setState({
            inputValueB: value,
        });
    };

    onAfterChange = value => {
        if (isNaN(value)) {
            return;
        }
        this.setState({
            inputValueA: value,
        });
        this.props.getMsg(this.state)
    };
    onAfterChangeB = value => {
        if (isNaN(value)) {
            return;
        }
        this.setState({
            inputValueB: value,
        });
        this.props.getMsg(this.state)
    };

    render() {
        const { inputValueA, inputValueB} = this.state;
        return (

            <Row align={'middle'}>
                <Col span={4} offset={3}>{this.props.inputTxt}</Col>
                <Col span={6} offset={0}>
                    <Slider min={-1} max={1} onChange={this.onChange}
                        onAfterChange={this.onAfterChange} step={0.01}
                        value={typeof inputValueA === 'number' ? inputValueA : 0} />
                </Col>
                <Col span={6} offset={1}>
                    <Slider min={-1} max={1} onChange={this.onChangeB}
                        onAfterChange={this.onAfterChangeB} step={0.01}
                        value={typeof inputValueB === 'number' ? inputValueB : 0} />
                </Col>
            </Row>
            
        );
    }
}
