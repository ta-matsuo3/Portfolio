import worksList from "./worksList"
import styles from "./Works.module.css"

import { motion } from "framer-motion";


export default function Works({ isActive }) {
    const listAnime = worksList.filter(item => item.type === 'animation').map((works, index) =>
        <li key={index}>
            <a href={works.url}><img src={works.image} alt={works.title} /></a>
            <p className={styles.title}>{works.title}</p>
        </li>
    )
    const listSite = worksList.filter(item => item.type === 'site').map((works, index) =>
        <li key={index}>
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
        <section className={isActive ? `${styles.work} ${styles.active}` : styles.work}>

            <div className={isActive ? `${styles.worksList} ${styles.active}` : styles.worksList} >
                <ul className={styles.listAnime}><h2>Animation</h2>{listAnime}</ul>
                <ul className={styles.listSite}><h2>Site/Blog</h2>{listSite}</ul>
                <ul className={styles.listApp}> <h2>Web Application</h2>{listApp}</ul>
            </div>

        </section>
    )
}