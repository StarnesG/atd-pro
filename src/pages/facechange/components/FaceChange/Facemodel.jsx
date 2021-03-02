import React, { useState, useEffect } from 'react'
import { Card, Popconfirm, message, Modal, Button } from 'antd';
import CardImg from '../../assets/logo2.png';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import hotkeys from 'hotkeys-js';

const cardSty = {
    background: 'rgba(55,55,55, 0.8)',
    width: '18vw',
    height: '120px',
    float: 'right',
    color: 'rgb(230,230,230)',
    margin: '0 2vw 20px 0',
    borderRadius: "1vw",
    padding: '0',
    userSelect: 'none'
};
const imgSty = { width: '120px', float: 'left', borderRadius: "1vw 0 0 1vw" };
const deleteSty = { float: 'right', margin: '8px 0.8vw 0 0' };
const txtSty1 = { margin: '28px 0 0 9vw' };
const txtSty2 = { margin: '12px 0 0 9vw' };
const editSty1 = { float: 'right', margin: '0' };
const editSty2 = { float: 'right', margin: '67px 2.6vw 0 0' };
const KeyMap = require('./KeyMap.js');


export default function Facemodel(prop) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [keyFlag, setkeyFlag] = useState(false);
    const [innertxt, setInner] = useState('请输入按键');

    //快捷键按钮
    const showModal = () => {
        hotkeys.deleteScope('inMenu');
        hotkeys.deleteScope('inModal');
        setIsModalVisible(true);
    };
    const handleOk = () => {
        if (!keyFlag) {
            setIsModalVisible(false);
            hotkeys.deleteScope('inModal');
            prop.useKey();
            hotkeys.setScope('inMenu');         
        }
        else {
            message.info('清先确认按键')
        }
    };
    const handleCancel = () => {
        hotkeys.deleteScope('inModal');
        setInner("请输入按键");
        setIsModalVisible(false);
    };



    //快捷键设定
    const startEdit = () => {
        setkeyFlag(true)
        hotkeys.setScope('inModal');
    }
    const endEdit = () => {
        setkeyFlag(false);
        prop.setKey();
        message.info('按键设置完毕');
        hotkeys.deleteScope('inModal');
    }

    //删除表情
    const deleteExpression = () => {
        prop.getDeleteInfo(prop.nameKey);
    }

    const cancel = () => {
        message.error('Click on No');
    }


    hotkeys(KeyMap.key, 'inModal', function (event, handler) {
        event.preventDefault();
        setInner(handler.key);
        prop.sendKey(handler.key);
    });

    const hotkeyName = () => {
        let a = prop.kycache[prop.nameKey]
        if (a) {
            return a.replace(/,/i, " ");
        } else {
            return '快捷键'
        }
    }
    hotkeys(hotkeyName(), 'inMenu', function () {
        message.info('你通过' + hotkeyName() + '键调用了xxx的功能')
    });

    // useEffect(() => {
    //     let a = prop.kycache[prop.nameKey];
    //     if(a){
    //         let key=a.replace(/,/i, " ");
    //         console.log(key);
    //         hotkeys(key, 'inMenu', function () {
    //             message.info('你通过' + key + '键调用了xxx的功能')
    //         });
    //     }else{
    //         console.log(prop.kycache)
    //     }

    // }, [prop.kycache,prop.nameKey]);

    useEffect(() => {
        let key = hotkeyName()
        hotkeys(key, 'inMenu', function () {
            message.info('你通过' + key + '键调用了xxx的功能')
        });
    }, [hotkeys()]);


    return (

        <div>
            <Card bordered={false}
                bodyStyle={cardSty}>
                <img src={CardImg} alt="" style={imgSty} />
                <div style={deleteSty}>
                    <Popconfirm
                        title="确认删除该表情吗？"
                        onConfirm={deleteExpression}
                        onCancel={cancel}
                        okText="是"
                        cancelText="否"
                    >
                        <CloseOutlined />
                    </Popconfirm>
                </div>
                <div>
                    <EditOutlined style={editSty2} onClick={showModal} />
                    <Modal title="自定义按键编辑" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Button size="small" onClick={startEdit} block>编辑</Button>
                        <div style={{ fontSize: '20px', margin: '1vw auto', textAlign: 'center' }}>{innertxt}</div>
                        <Button size="small" onClick={endEdit} block>提交</Button>
                    </Modal>
                </div>
                <div style={txtSty1}>哭泣 {prop.nameKey}</div>
                <div style={txtSty2}>{hotkeyName()}</div>

                <div style={editSty1}>
                    <Button type="link" onClick={() => console.log(keyFlag)}>编辑</Button>
                </div>
            </Card>
        </div>

    );

}
