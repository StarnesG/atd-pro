import React, { useState } from 'react'
// import { Button } from 'antd'
import Facemodel from './Facemodel'
import Empty from './Empty'

const style = {
    background: 'rgba(55,55,55, 0.5)',
    width: '22vw',
    height: '960px',
    float: 'right',
    marginRight: '1vw',
    paddingTop: '25px',
    color: 'white',
    borderRadius: '1.5vw',
    overflow: 'auto'
};


export default function FaceMenu() {
    const [fcArr, setFcArr] = useState([0]);
    const [numArr, setnumArr] = useState(1);
    const [keywordcache, setKeywordCache] = useState([]);
    const [keywordarr, setKeywordArr] = useState([]);
    const [keyword, setKeyword] = useState('快捷键');

    const addFacemodel = () => {
        setnumArr(numArr + 1);
        fcArr.push(numArr);
        setFcArr(fcArr);
        console.log(fcArr)
    }

    const deleteFacemodel = (nameKey) => {
        let list = [...fcArr];
        let result = list.indexOf(nameKey);
        // console.log(result)
        list.splice(result, 1);
        setFcArr(list);
        console.log(fcArr);
    }

    const cli = (arr) => {
        let x = '';
        arr.forEach(e => {
            x = x + e;
        })
        return x
    }


    const getKey = (e) => {
        keywordcache.push(',' + e);
        setKeywordCache(keywordcache);
    }

    const setKey = () => {
        let a=keywordcache.pop();
        keywordarr.push(a);
        setKeywordArr(keywordarr);
    }

    const useKey = () => {
        let arr= Array.from(new Set(keywordarr));
        console.log(arr)
        setKeyword(cli(arr));
        setKeywordCache([]);
    }

    return (
        <div id="FaceMenu" style={style}>
            <Empty getAddInfo={addFacemodel} />
            {fcArr.map((ele, ind) => {
                let kyword = keyword;
                let kycache = keywordarr;
                return <Facemodel key={ind} nameKey={ele} getDeleteInfo={deleteFacemodel} keyword={kyword} kycache={kycache} sendKey={getKey} setKey={setKey} useKey={useKey} />
            })}
        </div>
    );

}
