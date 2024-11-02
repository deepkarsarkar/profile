import React from 'react';
import styles from '../styling/Skills.module.css';
import { Button, Typography } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Skills = () => {
    return(
        <div className={styles.skillsContainer}>
            <div className={styles.skillsTitle}>
                <Typography className={styles.skillsTitleText}>Skills</Typography>
                <Button title='Click to View More'>
                    <ArrowCircleRightOutlinedIcon sx={{ color: '#1f1f1f' }} />
                </Button>
            </div>
            <hr />
            <div className={styles.skillsRow}>
                <Button variant='outlined' className={styles.skillsBtn}>ASIC/FPGA Front-end Design & Verification</Button>
            </div>
            <div className={styles.skillsRow}>
                <Button variant='outlined' className={styles.skillsBtn}>Verilog</Button>
                <Button variant='outlined' className={styles.skillsBtn}>SystemVerilog</Button>
                <Button variant='outlined' className={styles.skillsBtn}>UVM</Button>
            </div>
            <div className={styles.skillsRow}>
                <Button variant='outlined' className={styles.skillsBtn}>Protocols (AHB, APB, AXI, UART, SPI, I2C)</Button>
            </div>
        </div>
    )
}

export default Skills;