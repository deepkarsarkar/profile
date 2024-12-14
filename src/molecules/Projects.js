import React from 'react';
import styles from '../styling/Projects.module.css';
import { Button, Typography } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DescriptionIcon from '@mui/icons-material/Description';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Projects = () => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectTitle}>
                <Typography className={styles.projectTitleText}>Projects</Typography>
                <Button>
                    <ArrowCircleRightOutlinedIcon sx={{ color: '#1f1f1f' }} />
                </Button>
            </div>
            <hr />
            <div className={styles.projectDetailsRow}>
                <div className={styles.projectCard}>
                    <Typography sx={{ fontSize: '1rem !important', fontWeight: '700  !important', width: '100%' }}>
                        AHB to APB Bridge IP Core Verification
                    </Typography>
                    <div className={styles.projectCardRow}>
                        <DataObjectIcon />
                        <Typography className={styles.projectCardText}>
                            SystemVerilog HVL, UVM, Synopsys VCS, Siemens Questasim
                        </Typography>
                    </div>
                    <div className={styles.projectCardRow}>
                        <DescriptionIcon />
                        <Typography className={styles.projectCardText}>
                            The AHB to APB bridge is an AHB slave which works as an interface between the high speed AHB and the low performance APB buses.
                        </Typography>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <Typography sx={{ fontSize: '1rem !important', fontWeight: '700  !important', width: '100%' }}>
                        Router 1x3 - RTL Design & Verification
                    </Typography>
                    <div className={styles.projectCardRow}>
                        <DataObjectIcon />
                        <Typography className={styles.projectCardText}>
                            Verilog HDL, SystemVerilog HVL, UVM, Synopsys VCS
                        </Typography>
                    </div>
                    <div className={styles.projectCardRow}>
                        <DescriptionIcon />
                        <Typography className={styles.projectCardText}>
                        The router accepts data packets on a single 8-bit port and routes them to one of the three output channels - channel0, channel1 and channel2.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;