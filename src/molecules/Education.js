import React, { useState } from 'react';
import styles from '../styling/Education.module.css';
import { Button, Typography } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import iiestsLogo from '../assets/iiests_logo.png';
import makautLogo from '../assets/makaut_logo.png';
import HorizontalTimeline from "react-horizontal-timeline";
import academicDetailsData from '../json/academicDetailsData.json';

const Education = () => {
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);

    // Extract the years for the timeline
    const dates = academicDetailsData.map((item) => item.yop);

    return (
        <div className={styles.educationContainer}>
            <div className={styles.educationTitle}>
                <Typography className={styles.educationTitleText}>academic details</Typography>
                <Button>
                    <ArrowCircleRightOutlinedIcon sx={{ color: '#1f1f1f' }} />
                </Button>
            </div>
            <hr />
            {/* <div className={styles.eduDetailsRow}>
                <div className={styles.pgEduCard}>
                    <img src={iiestsLogo} alt='IIESTS' className={styles.eduImage} />
                    <Typography sx={{ fontSize: '1rem !important', fontWeight: '700  !important', width: '100%' }}>Indian Institute of Engineering Science & Technology, Shibpur</Typography>
                    <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '600 !important', width: '100%' }}><i>Master of Technology (VLSI Design)</i></Typography>
                    <div className={styles.eduCardRow}>
                        <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '500 !important', width: '100%' }}>2022</Typography>
                        <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '500 !important', width: '100%' }}>9.53 / 10</Typography>
                    </div>
                </div>
                <div className={styles.gradEduCard}>
                    <img src={makautLogo} alt='MAKAUT, WB' className={styles.eduImage} />
                    <Typography sx={{ fontSize: '1rem !important', fontWeight: '700  !important', width: '100%' }}>Maulana Abul Kalam Azad University of Technology, West Bengal</Typography>
                    <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '600 !important', width: '100%' }}><i>Bachelor of Technology (ECE)</i></Typography>
                    <div className={styles.eduCardRow}>
                        <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '500 !important', width: '100%' }}>2018</Typography>
                        <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '500 !important', width: '100%' }}>8.27 / 10</Typography>
                    </div>
                </div>
            </div> */}

            <div className={styles.rootDiv}>
                <div style={{
                    width: "100%",
                    height: "67px"
                }}>
                    {/* Render the Horizontal Timeline */}
                    <HorizontalTimeline
                        index={value}
                        indexClick={(index) => {
                            setPrevious(value);
                            setValue(index);
                        }}
                        values={dates} isOpenBeginning={false} isOpenEnding={false} linePadding={65} styles={{ background: '#fff', foreground: '#0b4b7e', outline: '#d9d9d9' }}
                    />
                </div>
                {/* Render the details of the selected timeline item */}
                <div className={styles.textCenter}>
                    <Typography sx={{ fontSize: '1rem !important', fontWeight: '700  !important', width: '100%' }}>{academicDetailsData[value].institute}</Typography>
                    <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '600 !important', width: '100%' }}><i>{academicDetailsData[value].degree}</i></Typography>
                    <Typography sx={{ fontSize: '0.87rem !important', fontWeight: '500 !important', width: '100%' }}>{academicDetailsData[value].marks}</Typography>
                </div>
            </div>
        </div >
    )
}

export default Education;