import styles from './WorkThumbnail.module.css'
import React, { useState } from 'react'

export default function WorkThumbnail({ isClickWork, expanded }) {

    return (
        <div className={`${styles.thumbnail} ${expanded ? styles.expanded : ""}`}>
            <section
                className={`${isClickWork ? styles.close : ''} ${styles.btn} ${expanded ? styles.expanded : ""}`}
            >

                {expanded ? 'CLICK' : 'Work'}
            </ section>
        </div>
    )
}



