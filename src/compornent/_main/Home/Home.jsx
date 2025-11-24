import styles from "./Home.module.css"

export default function Home({ isClickWork, setIsClickWork, expanded, setExpanded }) {
    const handleWorks = () => {
        setIsClickWork(!isClickWork)
    }
    const handleAbout = () => {
        setExpanded(!expanded)
        if (isClickWork) {
            setIsClickWork(!isClickWork)
            if (expanded == true) {
                setExpanded(true)
            }
        }
    }
    const handleHome = () => {
        setExpanded(false)
        setIsClickWork(false)

    }

    return (
        <>
            <nav className={styles.lists}>
                <li className={styles.home} onClick={handleHome}>-Home</li>
                <li className={styles.works} onClick={handleWorks}>-Works</li>
                <li className={styles.aboutMe} onClick={handleAbout}>-About Me</li>
            </nav>
        </>
    )
}

