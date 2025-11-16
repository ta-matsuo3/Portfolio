import worksList from "./worksList"
import styles from "./Works.module.css"
export default function Works() {
    const listAnime = worksList.filter(item => item.type === 'animation').map((works) =>
        <li>
            <a href={works.url}><img src={works.image} alt={works.title} /></a>
            <p className={styles.title}>{works.title}</p>
        </li>
    )
    const listSite = worksList.filter(item => item.type === 'site').map((works) =>
        <li>
            <a href={works.url}><img src={works.image} alt={works.title} /></a>
            <p className={styles.title}>{works.title}</p>
        </li>
    )
    const listApp = worksList.filter(item => item.type === 'app').map((works) =>
        <li>
            <a href={works.url}><img src={works.image} alt={works.title} /></a>
            <p className={styles.title}>{works.title}</p>
        </li>
    )

    return (
        <div className={styles.worksList}>
            <h2>アニメーション</h2>
            <ul className={styles.listAnime}>{listAnime}</ul>
            <h2>サイト</h2>
            <ul className={styles.listSite}>{listSite}</ul>
            <h2>アプリケーション</h2>
            <ul className={styles.listApp}>{listApp}</ul>
        </div>

    )
}