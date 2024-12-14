import React from 'react';
import styles from '../styling/TopContainer.module.css';
import { Button, Container, Link, Typography, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import githubIcon from '../assets/github-logo.svg';
import linkedinIcon from '../assets/linkedin-logo.svg';
import profilePhoto from '../assets/photograph.jpg';
import pwcLogo from '../assets/PwC_Logo.png';
import iiestsLogo from '../assets/iiests_logo.png';
import mavenLogo from '../assets/maven_logo.webp';

const TopContainer = () => {
    return (
        <div className={styles.topContainer}>
            <img className={styles.profilePhoto} src={profilePhoto} alt="Deep Kar Sarkar" />
            <Typography className={styles.pageTitle}>DEEP KAR SARKAR</Typography>
            <div className={styles.designationPanel}>
                <img src={mavenLogo} alt='Maven Silicon' className={styles.profTrainingImage} title='Trainee (Advanced VLSI Design and Verification), Maven Silicon VLSI Training Centre' />
                <Divider orientation="vertical" variant="middle" flexItem className={styles.divider} />
                <img src={pwcLogo} alt='PwC India' className={styles.workExpImage} title='Associate (Emerging Technologies), PwC Services LLP' />
                <Divider orientation="vertical" variant="middle" flexItem className={styles.divider} />
                <img src={iiestsLogo} alt='IIEST-S' className={styles.eduImage} title='M.Tech. (VLSI Design), IIEST Shibpur' />
            </div>
            {/* <div className={styles.designationRow}>
                <img src={mavenLogo} alt='Maven Silicon' className={styles.profTrainingImage} />
                <Typography className={styles.designationText}>Trainee, Advanced VLSI Design & Verification</Typography>
            </div>
            <div className={styles.designationRow}>
                <img src={pwcLogo} alt='PwC India' className={styles.workExpImage} />
                <Typography className={styles.designationText}>Associate, Emerging Technologies</Typography>
            </div>
            <div className={styles.designationRow}>
                <img src={iiestsLogo} alt='IIEST-S' className={styles.eduImage} />
                <Typography className={styles.designationText}>M.Tech., VLSI Design</Typography>
            </div> */}
        </div>
    )
}

export default TopContainer;