import React from 'react';
import styles from '../styling/AppBarHeader.module.css';
import { Typography } from '@mui/material';
import appbarLogo from '../assets/ProfileLogo.png';

const AppBarHeader = () => {
    return(
        <div className={styles.appBarHeader}>
            <img className={styles.profileLogo} src={appbarLogo} alt='Deep Profile' />
        </div>
    )
}

export default AppBarHeader;