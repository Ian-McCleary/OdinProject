import styles from "../styles/header.module.css"
export default function() {
    return (
        <div className={styles.siteHeader}>
            <div className={styles.headerText}>
                Pokemon Memory Game
            </div>
        </div>
    )
}