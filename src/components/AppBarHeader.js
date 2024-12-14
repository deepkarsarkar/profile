import React, { useState } from 'react';
import styles from '../styling/AppBarHeader.module.css';
import { Typography, Button, Menu, MenuItem } from '@mui/material';
import appbarLogo from '../assets/ProfileLogo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

const AppBarHeader = () => {

    const isMobile = window.innerWidth <= 768 ? true : false;

    // console.log("Device is Mobile: ", isMobile);

    const [anchorEl, setAnchorEl] = useState("");
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (isMobile) {
        return (
            <div className={styles.appBarHeader}>
                <img className={styles.profileLogo} src={appbarLogo} alt='Deep Profile' />
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon sx={{ color: '#d9d9d9' }} />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {/* <MenuItem onClick={handleClose}><Button href='tel:8420057039' className={styles.phoneBtn} title='Call me (+91) 8420057039'>
                            <PhoneIcon />
                        </Button>Phone</MenuItem>
                        <MenuItem onClick={handleClose}>Email</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                        <div className={styles.contactContainerMobile}>
                            <Button href='tel:8420057039' className={styles.phoneBtnMobile} title='Call me (+91) 8420057039'>
                                <PhoneIcon />
                            </Button>
                            <Button href='mailto:deep.ksarkar1211@gmail.com' className={styles.emailBtnMobile} title='Send email to deep.ksarkar1211@gmail.com'>
                                <MailOutlineIcon />
                            </Button>
                            <Button href='https://linkedin.com/in/deep-ksarkar' className={styles.linkedinBtnMobile} title='Connect with Deep on LinkedIn'>
                                <LinkedInIcon />
                            </Button>
                            <Button href='https://github.com/c0dE3P' className={styles.githubBtnMobile} title='Connect with Deep on Github'>
                                <GitHubIcon />
                            </Button>
                        </div>
                    </Menu>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.appBarHeader}>
                <img className={styles.profileLogo} src={appbarLogo} alt='Deep Profile' />
                <div className={styles.contactContainer}>
                    <Button href='tel:8420057039' className={styles.phoneBtn} title='Call me (+91) 8420057039'>
                        <PhoneIcon />
                    </Button>
                    <Button href='mailto:deep.ksarkar1211@gmail.com' className={styles.emailBtn} title='Send email to deep.ksarkar1211@gmail.com'>
                        <MailOutlineIcon />
                    </Button>
                    <Button href='https://linkedin.com/in/deep-ksarkar' className={styles.linkedinBtn} title='Connect with Deep on LinkedIn'>
                        <LinkedInIcon />
                    </Button>
                    <Button href='https://github.com/c0dE3P' className={styles.githubBtn} title='Connect with Deep on Github'>
                        <GitHubIcon />
                    </Button>
                </div>
            </div>
        )
    }
}

export default AppBarHeader;