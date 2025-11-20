import styles from './WorkThumbnail.module.css'
import React, { useState } from 'react'

export default function WorkThumbnail({ isClickWork, setIsClickWork }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.thumbnail}>
            <button
                className={`${isClickWork ? styles.close : ''} ${styles.btn} ${expanded ? styles.expanded : ""}`}
                onClick={() => setExpanded(!expanded)}
            >

                {expanded ? 'CLICK' : 'Work'}
            </button >
        </div>
    )
}



