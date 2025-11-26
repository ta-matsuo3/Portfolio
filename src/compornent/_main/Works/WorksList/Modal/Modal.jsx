import React from 'react'
import styles from './Modal.module.css'

import { skillIcons } from "./skillIcon.js";

export default function Modal({ work, isModal, setIsModal }) {
    if (!work) return null;

    return (
        <div className={`${styles.mask} ${isModal ? styles.open : ''}`} onClick={() => setIsModal(!isModal)}>
            <div className={`${styles.modal}`} onClick={(e) => e.stopPropagation()}>
                <div className={styles.work}>
                    <div className={styles.cancel} onClick={() => setIsModal(!isModal)}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.workInfo}>
                        <p style={{ fontWeight: 800 }}>{work.title}</p>
                        {work.skills && <div className={styles.skills}>
                            {work.skills?.map((skill) => (
                                <img
                                    key={skill}
                                    src={skillIcons[skill]}
                                    alt={skill}
                                    className={styles.skillIcon}
                                />
                            ))}
                        </div>}
                        {work.image && <img src={work.image} alt={work.title} />}

                        <div className={styles.btns}>
                            {work.url && <button><a href={work.url} target="_blank">{`link`}</a></button>}
                            {work.figma && <button><a href={work.figma} target="_blank">{`figma`}</a></button>}
                            {work.github && <button><a href={work.github} target="_blank">{`github`}</a></button>}
                        </div>
                        {work.period && <p>{`制作期間：${work.period}`}</p>}
                    </div>
                    <div className={styles.workDesc}>

                        {work.desc && <p>{work.desc}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
