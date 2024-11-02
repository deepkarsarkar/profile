import React from "react";
import styles from '../styling/ProfTraining.module.css';
import { Button, Typography } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import mavenLogo from '../assets/maven_logo.webp';

const ProfTraining = () => {
    return (
        <div className={styles.profTrainingContainer}>
            <div className={styles.profTrainingTitle}>
                <Typography className={styles.profTrainingTitleText}>professional Training</Typography>
                <Button>
                    <ArrowCircleRightOutlinedIcon sx={{ color: '#1f1f1f' }} />
                </Button>
            </div>
            <hr />
            <img src={mavenLogo} alt='Maven Silicon' className={styles.profTrainingImage} />
            <Typography sx={{ fontSize: '1rem !important', fontWeight: '700  !important', width: '100%' }}>Maven Silicon VLSI Training Centre</Typography>
            <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '600 !important', width: '100%' }}><i>Trainee, Advanced VLSI Design & Verification</i></Typography>
            <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '500 !important', width: '100%' }}>August 2023 - Present</Typography>
        </div>
    )
}

export default ProfTraining;