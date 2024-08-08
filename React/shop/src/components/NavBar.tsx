import { useNavigate } from "react-router-dom"

import styles from "../styles/navBar.module.css"

export default function NavBar() {
    const navigate = useNavigate()

    function onClickHome() {
        navigate("/")
    }
    function onClickProducts() {
        navigate("/shop")
    }
    return (
        <div className={styles.navBar}>
            <div className={styles.navBarCompanyText}>The Ultimate Shop</div>
            < div className={styles.navBarHomeBtn}>
                <div className={styles.animatedBtn} onClick={onClickHome}>
                    <span>Home</span>
                </div>
            </div>
            <div className={styles.navBarProductsBtn}>
                <div className={styles.animatedBtn} onClick={onClickProducts}>
                    <span>Products</span>
                </div>
            </div>
        </div>
    )
};