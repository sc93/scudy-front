import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../modules/data'
const Graph = () => {
    const data = useSelector(state => state.data, []);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect')
        axios.get("http://localhost:3001/memo").then(({ data }) => {
            dispatch(setData(data));
        });
    }, []);
    return (
        <div className="graphArea">
            <h1>그래프영역</h1>
            {
            data.map((v, i) =>  
            <h1 key={v.id}>{v.id} / {v.title} / {v.body}</h1>)
            }
            
        </div>
    );
};

export default Graph;