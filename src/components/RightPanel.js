import React from 'react';
import styles from '../styling/RightPanel.module.css';
import Education from '../molecules/Education';
import ProfTraining from '../molecules/ProfTraining';
import WorkExp from '../molecules/WorkExp';
import Skills from '../molecules/Skills';

const RightPanel = () => {
    return (
        <div className={styles.rightPanel}>
            <div className={styles.firstRow}>
                <Education />
                <ProfTraining />
            </div>
            <div className={styles.firstRow}>
                <WorkExp />
                <Skills />
            </div>
            <div className={styles.firstRow}>
                <WorkExp />
            </div>
        </div>
    )
}

export default RightPanel;