import React from 'react'
import styles from './Modal.module.css'

export default function Modal({ work, isModal, setIsModal }) {
    if (!work) return null;

    return (
        <div className={`${styles.mask} ${isModal ? styles.open : ''}`} onClick={() => setIsModal(!isModal)}>
            <div className={`${styles.modal}`} onClick={(e) => e.stopPropagation()}>
                <div className={styles.cancel} onClick={() => setIsModal(!isModal)}>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.workInfo}>
                    <p>{`サイトのタイトル=>${work.title}`}</p>
                    <img src={work.image} alt={work.title} />
                    {work.desc && <p>{work.desc}</p>}
                    {work.url && <a href={work.url} target="_blank">{`サイトのURL：${work.url}`}</a>}
                </div>
            </div>
        </div>
    )
}
