import { useNavigate } from "react-router-dom"

import styles from "../styles/navBar.module.css"

export default function NavBar() {
    const navigate = useNavigate()

    function onClickHome() {
        navigate("/")
    }
    function onClickMenu() {
        navigate("/menu")
    }
    function onClickAbout() {
        navigate("/about")
    }
    return (
        <div className={styles.navBar}>
            <div className={styles.navBarCompanyText}>The Lavish Lentil</div>
            < div className={styles.navBarHomeBtn}>
                <div className={styles.animatedBtn} onClick={onClickHome}>
                    <span>Home</span>
                </div>
            </div>
            <div className={styles.navBarProductsBtn}>
                <div className={styles.animatedBtn} onClick={onClickMenu}>
                    <span>Menu</span>
                </div>
            </div>
            <div className={styles.navBarProductsBtn}>
                <div className={styles.animatedBtn} onClick={onClickAbout}>
                    <span>About</span>
                </div>
            </div>
        </div>
    )
};