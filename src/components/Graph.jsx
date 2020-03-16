import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../modules/data';
import SimplePieChart from './PieChart';
const Graph = () => {
    const data = useSelector(state => state.data, []);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect')
        axios.get("http://localhost:3001/learnList").then(({ data }) => {
            console.log(data)
            dispatch(setData(data));
        });
    }, []);
    return (
        <div className="graphArea">
            <SimplePieChart/>
            {/* {
                data.map((v, i) =>
                    <h1 key={v.id}>{v.id} / {v.title} / {v.body} / {v.learningTime}분</h1>)
            } */}

        </div>
    );
};

export default Graph;