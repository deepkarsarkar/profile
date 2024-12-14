import React from 'react';
import styles from '../styling/AboutContainer.module.css';
import { Button, Container, Link, Typography } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const AboutContainer = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutTitle}>
            <Typography className={styles.aboutTitleText}>about me</Typography>
            <Button>
                <ArrowCircleRightOutlinedIcon sx={{ color:'#0b4b7e' }} />
            </Button>
            </div>
            <hr />
            <div className={styles.bioContainer}>
                <Typography className={styles.bioText}>
                    Organized, dedicated and ambitious engineer with a Master of Technology degree in VLSI Design from IIESTS and over 3.5 years of prior experience in software development aspiring to excel in the field of VLSI verification with a unique blend of technical expertise and customer-centric approach.
                </Typography>
                <Typography className={styles.bioText}>
                    Throughout my career, I have demonstrated a proven track record of achieving customer satisfaction through my attention to detail and commitment to excellence. My ability to effectively communicate, both technically and non-technically, enables me to bridge the gap between complex concepts and practical applications, thereby contributing meaningfully to the long-term growth of any organization.
                </Typography>
                <Typography className={styles.bioText}>
                    As I look forward to venture into the realm of VLSI verification, I am excited to leverage my skills and knowledge to tackle new challenges, drive innovation, and make a significant impact in this dynamic field. I am eager to collaborate with like-minded professionals and contribute to the success of cutting-edge projects that push the boundaries of technology.
                </Typography>
            </div>
        </div>
    )
}

export default AboutContainer;