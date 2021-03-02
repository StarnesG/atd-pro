import React, { } from 'react'
import { SmileOutlined, PictureOutlined, BulbOutlined, GiftOutlined, FireOutlined } from '@ant-design/icons';

const style = {
    background: 'rgba(55,55,55, 0.5)',
    width: '5.5vw',
    height: '70vh',
    float: 'left',
    margin: '15vh 0',
    paddingTop: '3.5vh',
    color: 'white',
    borderRadius: "0 1.5vw 1.5vw 0 "
};
const outstyle = { width: '6vw', height: '13vh', float: 'left', userSelect: 'none' }
const iconstyle = { fontSize: '36px', margin: '1.2vh 0 0 1.4vw', float: 'left' }
const txtstyle = { fontSize: '13px', margin: '1.1vh 0 0 0.9vw', textAlign: 'center', float: 'left', }


export default function ModeMenu(prop) {

    return (
        <div style={style}>
            <div style={outstyle}>
                <SmileOutlined style={iconstyle} onClick={prop.goFace} />
                <div style={txtstyle}>捏&emsp;&emsp;脸</div>
            </div>
            <div style={outstyle}>
                <PictureOutlined style={iconstyle} />
                <div style={txtstyle}>背景替换</div>
            </div>
            <div style={outstyle}>
                <BulbOutlined style={iconstyle} />
                <div style={txtstyle}>磨皮美白</div>
            </div>
            <div style={outstyle}>
                <GiftOutlined style={iconstyle} />
                <div style={txtstyle}>虚拟妆容</div>
            </div>
            <div style={outstyle}>
                <FireOutlined style={iconstyle} onClick={prop.goVideo} />
                <div style={txtstyle}>视频表情</div>
            </div>
        </div>
    );

}
