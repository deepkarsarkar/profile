import React from 'react';
import styles from '../styling/TopContainer.module.css';
import { Button, Container, Link, Typography, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import githubIcon from '../assets/github-logo.svg';
import linkedinIcon from '../assets/linkedin-logo.svg';
import profilePhoto from '../assets/photograph.jpg';
import mavenLogo from '../assets/maven_logo.webp';
import ReactRoundedImage from "react-rounded-image";

const TopContainer = () => {
    return (
        <div className={styles.topContainer}>
            <div className={styles.profilePhoto}>
                <ReactRoundedImage image={profilePhoto}
                    roundedColor="#66A5CC"
                    imageWidth="200"
                    imageHeight="200"
                    roundedSize="8" />
            </div>
            <Typography className={styles.pageTitle}>DEEP KAR SARKAR</Typography>
            <Typography className={styles.designationText}>Associate, PwC India | M.Tech. (VLSI Design), IIEST-S</Typography>
            {/* <div className={styles.designationPanel}>
                <Typography className={styles.designationText}>Associate, PwC India | M.Tech. (VLSI Design), IIEST Shibpur</Typography>
                <Divider className={styles.designationDivider}  orientation="vertical" flexItem/>
                <Typography className={styles.designationText}>M.Tech. (VLSI Design), IIEST Shibpur</Typography>
            </div> */}
            <div className={styles.contactContainer}>
                {/* <img src={mavenLogo} alt='Maven Silicon' className={styles.profTrainingImage} />
                <div className={styles.profTrainingContainer}>
                    <Typography sx={{ fontSize: '1rem !important', fontWeight: '700  !important', width: '100%' }}>Maven Silicon VLSI Training Centre</Typography>
                    <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '600 !important', width: '100%' }}><i>Trainee, Advanced VLSI Design & Verification</i></Typography>
                    <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '500 !important', width: '100%' }}>August 2023 - Present</Typography>
                </div> */}
                {/* <Button href='tel:8420057039' className={styles.phoneBtn}>
                    <img className={styles.contactIcon} src={phoneIcon} alt="phone icon" />
                </Button> */}
                {/* <Button href='mailto:deep.ksarkar1211@gmail.com' className={styles.emailBtn}>
                    <img className={styles.contactIcon} src={emailIcon} alt="email icon" />
                </Button> */}
                {/* <Button href='https://linkedin.com/in/deep-ksarkar' className={styles.linkedinBtn}>
                    <img className={styles.contactIcon} src={linkedinIcon} alt="phone icon" />
                    
                </Button>
                <Button href='https://github.com/c0dE3P' className={styles.githubBtn}>
                    <img className={styles.contactIcon} src={githubIcon} alt="email icon" />
                </Button> */}
            </div>
        </div>
    )
}

export default TopContainer;