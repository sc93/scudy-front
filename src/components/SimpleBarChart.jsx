import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {getThisWidth} from '../util/getCss';
const data = [
    {date : '20-03-13', time : 200},
    {date : '20-03-14', time : 34},
    {date : '20-03-15', time : 223},
    {date : '20-03-16', time : 179},
    {date : '20-03-17', time : 60},
    {date : '20-03-18', time : 0},
    {date : '20-03-19', time : 120},
];
const marginLeft = getThisWidth()/3 - getThisWidth()/4;
const SimpleBarChart = () => {
    return (
        <BarChart width={(getThisWidth()/2)} height={450} data={data}
            margin={{ top: 150, right: 30, left: 50, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="time" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
    );
}
export default SimpleBarChart;