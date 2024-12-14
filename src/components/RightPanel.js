import React from 'react';
import styles from '../styling/RightPanel.module.css';
import Education from '../molecules/Education';
import WorkExp from '../molecules/WorkExp';
import Skills from '../molecules/Skills';
import Projects from '../molecules/Projects';

const RightPanel = () => {
    return (
        <div className={styles.rightPanel}>
            <div className={styles.firstRow}>
                <Education />
                <WorkExp />
            </div>
            <div className={styles.firstRow}>
                <Skills />
                {/* <WorkExp /> */}
            </div>
            <div className={styles.firstRow}>
                <Projects />
            </div>
        </div>
    )
}

export default RightPanel;