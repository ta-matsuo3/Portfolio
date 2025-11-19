import React, { useEffect, useRef, useState } from 'react'
import styles from './WorksList.module.css'

export default function WorksList({ list, title }) {
    const [open, setOpen] = useState(true);
    const contentRef = useRef(null);

    useEffect(() => {
        const el = contentRef.current;
        if (open) {
            el.style.maxHeight = '1000px';
        }
    }, []);

    const toggle = () => {
        const el = contentRef.current;
        if (!el) return;

        if (open) {
            el.style.maxHeight = `${el.scrollHeight}px`;
            requestAnimationFrame(() => {
                el.style.maxHeight = "0";
            });
        } else {
            requestAnimationFrame(() => {
                el.style.maxHeight = '1000px';
            });
        }

        setOpen(!open);
    };
    return (
        <ul className={styles.list}>
            <h2 onClick={toggle}>{title}</h2>
            <ul ref={contentRef} className={`${styles.itemsWrapper} ${open ? styles.open : ""}`}>{list}</ul>
        </ul>
    )
}


