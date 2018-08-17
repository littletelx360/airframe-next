import React from 'react';
import {  
    PieChart, 
    Pie,
    Cell
} from 'recharts';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200}
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const TinyPieChart = () => (
    <PieChart width={ 30 } height={ 30 }>
        <Pie
            data={data}  
            fill="#8884d8"
            outerRadius={ 15 } 
        >
            {
                data.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]} />)
            }
        </Pie>
    </PieChart>
);

export { TinyPieChart };
