import styles from './WorkThumbnail.module.css'
import React, { useState } from 'react'

export default function WorkThumbnail() {
    const [expanded, setExpanded] = useState(false);

    return (
        <button
            className={`${styles.btn} ${expanded ? styles.expanded : ""}`}
            onClick={() => setExpanded(!expanded)}
        >
            {expanded ?
                'CLICK'
                :
                <button>bb</button>}
        </button>
    )
}



