import React from 'react';
import styles from '../styling/Skills.module.css';
import { Button, Typography } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import skillsData from '../json/skillsData.json';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: '#ffffff', padding: '5px', border: '1px solid #cccccc', fontSize: '12px', width: '128px' }}>
                <p>{`${label}`} <br /> {`${payload[0].value} / 10`}</p>
            </div>
        );
    }
    return null;
};

const Skills = () => {
    return (
        <div className={styles.skillsContainer}>
            <div className={styles.skillsTitle}>
                <Typography className={styles.skillsTitleText}>Skills</Typography>
                <Button title='Click to View More'>
                    <ArrowCircleRightOutlinedIcon sx={{ color: '#1f1f1f' }} />
                </Button>
            </div>
            <hr />
            <div className={styles.skillsChart}>
                <BarChart
                    width={987}
                    height={123}
                    data={skillsData}
                    margin={{ top: 5, right: 40, left: 5, bottom: 2 }}
                    className={styles.skillsBarchart}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" fill="#d9d9d9" fillOpacity={0.6} /> */}
                    <XAxis
                        dataKey="skill"
                        tick={{ fontSize: 11, fontWeight: 600 }} // Adjust font size here
                    />
                    <YAxis tick={{ fontSize: 12, fontWeight: 600 }} />
                    <Tooltip content={<CustomTooltip />} />
                    {/* <Legend /> */}
                    <Bar dataKey="score" fill="#0B4B7E" barSize="33" />
                </BarChart>
            </div>

        </div>
    )
}

export default Skills;