import React from 'react';
import styles from '../styling/FooterContainer.module.css';
import { Button, Container, Link, Typography } from '@mui/material';
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const FooterContainer = () => {
    return (
        <div className={styles.footerContainer}>
            {/* <Typography className={styles.footerText}>IMPORTANT LINKS</Typography> */}
            <div className={styles.footerBtnContainer}>
                <Button className={styles.downloadBtn} variant='outlined'>
                    <FileDownloadOutlinedIcon />
                    <Typography>&emsp;Download Resume</Typography>
                </Button>
                {/* <Button className={styles.viewBtn} variant='outlined'>View Resume</Button> */}
            </div>
        </div>
    )
}

export default FooterContainer;