import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import {getThisWidth} from '../util/getCss';

const data = [
    { name: 'React', value: 972 }, 
    { name: 'Vanilla', value: 443 },
    { name: 'Redux', value: 120 }, 
    { name: 'javascript', value: 88 },
    { name: 'react', value: 115 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FFA042'];

const RADIAN = Math.PI / 180;



const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
const SimplePieChart = () => {
    getThisWidth();
    return (
        <PieChart width={getThisWidth()/2} height={700}>
            <Pie
                data={data}
                cx={getThisWidth()/4}
                cy={350}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                fill="#8884d8"
            >
                {
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
        </PieChart>
    );

}
export default SimplePieChart;