import worksList from "./worksList"
import styles from "./Works.module.css"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import WorksList from "./WorksList/WorksList";
import WorkThumbnail from "./WorkThumbnail/WorkThumbnail";


export default function Works({ isActive }) {
    const listAnime = worksList.filter(item => item.type === 'animation').map((works, index) =>
        <li key={index}>
            <a href={works.url}><img src={works.image} alt={works.title} /></a>
            <p className={styles.title}>{works.title}</p>
        </li>
    )
    const listSite = worksList.filter(item => item.type === 'site').map((works, index) =>
        <li key={index} >
            <a href={works.url}><img src={works.image} alt={works.title} /></a>
            <p className={styles.title}>{works.title}</p>
        </li>
    )
    const listApp = worksList.filter(item => item.type === 'app').map((works, index) =>
        <li key={index}>
            <a href={works.url}><img src={works.image} alt={works.title} /></a>
            <p className={styles.title}>{works.title}</p>
        </li>
    )

    return (
        <>
            <WorkThumbnail />
            <section className={isActive ? `${styles.work} ${styles.active}` : styles.work}>
                <div className={isActive ? `${styles.worksList} ${styles.active}` : styles.worksList} >
                    <WorksList title='Animation' list={listAnime} />
                    <WorksList title='Site/Blog' list={listSite} />
                    <WorksList title='Web Application' list={listApp} />
                </div>
            </section>
        </>

    )
}