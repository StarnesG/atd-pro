// import React, { useState } from 'react'
import { Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const cardSty = {
    background: 'rgba(55,55,55, 0.8)',
    width: '18vw',
    height: '120px',
    float: 'right',
    color: 'rgb(230,230,230)',
    margin: '0 2vw 20px 0',
    borderRadius: "1vw",
    padding: '0',
};

let Empty= (prop)=> {

    return (

        <div>
            <Card bordered={false}
                bodyStyle={cardSty}>
                <PlusOutlined style={{ fontSize: '60px', margin: '33px 7vw' }} onClick={prop.getAddInfo} />
            </Card>
        </div>

    );

}
export default Empty
