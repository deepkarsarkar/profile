import React from 'react';
import styles from '../styling/WorkExp.module.css';
import { Button, Typography } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import dayjs from 'dayjs';

const calculateExperience = (startDate, endDate = new Date()) => {
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    return end.diff(start, 'month');
};

// Data calculation
const experienceData = [
    {
        name: 'TCS Ltd. (Nov 2018 - Sep 2020)',
        value: calculateExperience('2018-11-19', '2020-09-30'),
    },
    {
        name: 'PwC India (Jul 2022 - Present)',
        value: calculateExperience('2022-07-11'),
    },
];

// Colors for the pie slices
const COLORS = ['#007DC5', '#DC6900'];

// Custom tooltip to show value with "months" unit
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: '#ffffff', padding: '5px', border: '1px solid #cccccc', fontSize: '12px' }}>
                <p>{`${payload[0].name}`} <br /> {`${payload[0].value} months`}</p>
            </div>
        );
    }
    return null;
};

const CustomLegend = (props) => {
    const { payload } = props;
    return (
        <ul style={{ fontSize: '12px', padding: 0, marginBottom: 5 }}>
            {payload.map((entry, index) => (
                <li
                    key={`item-${index}`}
                    style={{
                        color: entry.color,
                        listStyleType: 'square',
                        marginLeft: '50px', // Adjust this as needed for overall alignment
                        paddingLeft: '5px', // Minimizes the gap between bullet and text
                    }}
                >
                    {entry.value}
                </li>
            ))}
        </ul>
    );
};

const WorkExp = () => {
    return (
        <div className={styles.workExpContainer}>
            <div className={styles.workExpTitle}>
                <Typography className={styles.workExpTitleText}>work experience</Typography>
                <Button>
                    <ArrowCircleRightOutlinedIcon sx={{ color: '#1f1f1f' }} />
                </Button>
            </div>
            <hr />
            <div className={styles.workExpChart}>
                <PieChart width={296} height={133} className={styles.workExpChart}>
                    <Pie
                        data={experienceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={40} innerRadius={20} startAngle={90} endAngle={450} paddingAngle={5}
                        fill="#fff"
                        dataKey="value"
                        label
                    >
                        {experienceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegend />} />
                </PieChart>
            </div>
        </div>
    )
}

export default WorkExp;