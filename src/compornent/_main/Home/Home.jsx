import styles from "./Home.module.css"

export default function Home({ isClickWork, setIsClickWork }) {
    const handleCkick = () => {
        setIsClickWork(!isClickWork)
        console.log(isClickWork);
    }

    return (
        <>
            <main className={styles.lists}>
                <li className={styles.home} >-Home</li>
                <li className={styles.works} onClick={handleCkick}>-Works</li>
                <li className={styles.aboutMe}>-About Me</li>
            </main>
        </>
    )
}

