import worksList from "./worksList"
import styles from "./Works.module.css"

import { useRef, useState } from "react";
import WorksList from "./WorksList/WorksList";
import WorkThumbnail from "../WorkThumbnail/WorkThumbnail";


export default function Works({ isActive, isModal, setIsModal, setSelectedWork }) {
    const handleWork = (title) => {
        const target = worksList.find(item => item.title === title);
        setSelectedWork(target);
        setIsModal(!isModal)
    }


    const listAnime = worksList.filter(item => item.type === 'animation').map((works, index) =>
        <li key={works.title} onClick={() => handleWork(works.title)}>
            <img src={works.image} alt={works.title} />
            <p className={styles.title}>{works.title}</p>
        </li>
    )
    const listSite = worksList.filter(item => item.type === 'site').map((works, index) =>
        <li key={works.title} onClick={() => handleWork(works.title)}>
            <img src={works.image} alt={works.title} />
            <p className={styles.title}>{works.title}</p>
        </li>
    )
    const listApp = worksList.filter(item => item.type === 'app').map((works, index) =>
        <li key={works.title} onClick={() => handleWork(works.title)}>
            <img src={works.image} alt={works.title} />
            <p className={styles.title}>{works.title}</p>
        </li>
    )

    return (
        <>
            <section>
                <div className={`${styles.worksList} ${isActive ? styles.active : ''}`} >

                    <WorksList title='Site/Blog' list={listSite} />
                    <WorksList title='Web Application' list={listApp} />
                    <WorksList title='Animation' list={listAnime} />
                </div>
            </section >
        </>

    )
}