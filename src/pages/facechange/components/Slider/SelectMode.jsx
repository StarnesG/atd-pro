import React, { Component } from 'react'
import { Select,Row,Col } from 'antd';

const { Option } = Select;

export default class SelectMode extends Component {


    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    render() {
        return (

            <Row align={'middle'} gutter={[0, 40]}>
                <Col span={8} offset={2}>{this.props.inputTxt}</Col>
                <Col span={10}>
                    <Select defaultValue="one" style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="one">#1</Option>
                        <Option value="two">#2</Option>
                        <Option value="three">#3</Option>
                    </Select>
                </Col>
            </Row>

        );
    }
}
