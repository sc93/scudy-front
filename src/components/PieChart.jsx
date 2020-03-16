import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
const data1 = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
{ name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FFA042'];

const RADIAN = Math.PI / 180;

const getThisWidth = ()=> {
    const width = window.innerWidth;
    return width < 1024 ? 1024 : width;
}

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
        <PieChart width={getThisWidth()/2} height={500}>
            <Pie
                data={data1}
                cx={getThisWidth()/4}
                cy={250}
                labelLine={true}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
            >
                {
                    data1.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
        </PieChart>
    );

}
export default SimplePieChart;