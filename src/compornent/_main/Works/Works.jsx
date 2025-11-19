import worksList from "./worksList"
import styles from "./Works.module.css"

import { motion } from "framer-motion";
import { useRef, useState } from "react";


export default function Works({ isActive }) {
    const [openAnime, setOpenAnime] = useState(true);
    const [openSite, setOpenSite] = useState(true);
    const [openApp, setOpenApp] = useState(true);

    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);


    const toggle = () => {
        const el = contentRef.current;
        if (!el) return;

        if (open) {
            // 閉じるとき
            el.style.maxHeight = `${el.scrollHeight}px`; // 現在の高さをセット
            requestAnimationFrame(() => {
                el.style.maxHeight = "0";                 // 0にアニメーション
            });
        } else {
            // 開くとき
            el.style.maxHeight = "none";                // 一旦リセット
            const height = el.scrollHeight;             // 正しい高さを取得
            el.style.maxHeight = "0";                   // 開く前に0にリセット
            requestAnimationFrame(() => {
                el.style.maxHeight = '1000px';       // 開くアニメーション
            });
        }

        setOpen(!open);
    };

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
        <section className={isActive ? `${styles.work} ${styles.active}` : styles.work}>
            <div className={isActive ? `${styles.worksList} ${styles.active}` : styles.worksList} >
                <ul className={styles.list}>
                    <h2 onClick={toggle}>Animation</h2>
                    <ul ref={contentRef} className={`${styles.itemsWrapper} ${open ? styles.open : ""}`}>{listAnime}</ul>
                </ul>
                <ul className={styles.list}>
                    <h2 onClick={toggle}>Site/Blog</h2>
                    <ul ref={contentRef} className={`${styles.itemsWrapper} ${open ? styles.open : ""}`}>{listSite}</ul>
                </ul>
                <ul className={styles.list}>
                    <h2 onClick={() => setOpenApp(!openApp)}>Web Application</h2>
                    <ul className={`${styles.itemsWrapper} ${openApp ? styles.open : ""}`}>{listApp}</ul>
                </ul>
            </div>
        </section>
    )
}