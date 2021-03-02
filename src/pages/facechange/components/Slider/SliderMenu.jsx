import React, { Component } from 'react'
import Single from './Single.jsx'
import Half from './Half.jsx'
import SelectMode from './SelectMode.jsx'
import { Row, Col,Divider } from 'antd'

const style = { 
    background: 'rgba(55,55,55, 0.5)', 
    width: '22vw', 
    height: '960px', 
    float: 'right', 
    marginRight: '1vw',
    paddingTop:'30px',
    color:'white',
    borderRadius: "1.5vw",
    userSelect: 'none'
};

export default class AllSlider extends Component {
    state = {
        val: 0,
    }
    getMsg = (value) => {
        console.log(value);
        this.setState({
            val: value.inputValue,
        });
    }

    render() {
        return (
            <div id="SliderMenu" style={style}>

                <SelectMode inputTxt={'选择人脸：'} />
                <Divider orientation="left" style={{color:'white'}}>眼睛</Divider>
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Half getMsg={this.getMsg} inputTxt={'倾角：'} datakey={0} />
                        </Col>
                    </Row>
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Half getMsg={this.getMsg} inputTxt={'高：'} datakey={1} />
                        </Col>
                    </Row>
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Half getMsg={this.getMsg} inputTxt={'宽：'} datakey={2} />
                        </Col>
                    </Row>
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'间距：'} datakey={3} />
                        </Col>
                    </Row>

                <Divider orientation="left" style={{color:'white'}}>鼻子</Divider>   
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'高：'} datakey={4} />
                        </Col>
                    </Row>
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'宽：'} datakey={5} />
                        </Col>
                    </Row>     

                <Divider orientation="left" style={{color:'white'}}>嘴</Divider>   
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'上唇：'} datakey={6} />
                        </Col>
                    </Row>
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'下唇：'} datakey={7} />
                        </Col>
                    </Row>                  
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'高：'} datakey={8} />
                        </Col>
                    </Row>                  
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'宽：'} datakey={9} />
                        </Col>
                    </Row>   

                <Divider orientation="left" style={{color:'white'}}>脸型</Divider>   
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'前额：'} datakey={10} />
                        </Col>
                    </Row>
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'下巴：'} datakey={11} />
                        </Col>
                    </Row>                  
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'脸颊：'} datakey={12} />
                        </Col>
                    </Row>                  
                    <Row gutter={[0, 10]}>
                        <Col  span={22} offset={2}>
                        <Single getMsg={this.getMsg} inputTxt={'脸宽：'} datakey={13} />
                        </Col>
                    </Row>                  

            </div>
        );
    }
}
