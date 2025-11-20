import { div } from 'framer-motion/client'
import styles from './AboutMe.module.css'
import React, { Children, useState } from 'react'

export default function AboutMe({ children, isClickWork, expanded, setExpanded }) {
    return (
        <div className={`${isClickWork ? styles.close : ''} ${styles.topics}`}>
            {children}
            <div className={`${styles.aboutMeWrap} ${expanded ? styles.expanded : ""}`}>
                <section className={styles.skills}><p>skills</p></section>
                <section
                    className={`${styles.aboutMe} ${expanded ? styles.expanded : ""}`}
                    onClick={() => setExpanded(!expanded)}
                >
                    <h2>{expanded ? 'CLICK' : 'aboutMe'}</h2>
                </section>
            </div>
        </div>
    )
}

