import styles from "./Home.module.css"

export default function Home() {
    return (
        <>
            <main className={styles.lists}>
                <a href="#" className={styles.home}>-Home</a>
                <a href="#" className={styles.works}>-Works</a>
                <a href="#" className={styles.aboutMe}>-About Me</a>
            </main>
        </>
    )
}

