import React from 'react'
import styles from './Modal.module.css'

import { skillIcons } from "./skillIcon.js";

export default function Modal({ work, isModal, setIsModal }) {
    if (!work) return null;

    return (
        <div className={`${styles.mask} ${isModal ? styles.open : ''}`} onClick={() => setIsModal(!isModal)}>
            <div className={`${styles.modal} ${isModal ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className={styles.work}>
                    <div className={styles.cancel} onClick={() => setIsModal(!isModal)}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.workWrapper}>
                        <div className={styles.title}>
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
                        </div>
                        <div className={styles.workInfoWrap}>
                            <div className={styles.workInfo}>
                                {work.image && <a href={work.url} target="_blank"><img src={work.image} alt={work.title} /></a>}
                                <div className={styles.btns}>
                                    {work.url && <a href={work.url} target="_blank"><button>link</button></a>}
                                    {work.figma && <a href={work.figma} target="_blank"><button>figma</button></a>}
                                    {work.github && <a href={work.github} target="_blank"><button>github</button></a>}
                                </div>
                                <div className={styles.props}>
                                    {work.period && <p>{`制作期間：
                                    ${work.period}`}</p>}
                                    {work.target && <p>{`ターゲット：
                                    ${work.target}`}</p>}
                                    {work.concept && <p>{`コンセプト：
                                    ${work.concept}`}</p>}
                                </div>
                            </div>
                            <div className={styles.workDesc}>
                                {work.desc && <p>{`${work.desc}`}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
