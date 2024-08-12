import MenuItem from "./MenuItem"
import styles from "../styles/menu.module.css"

export default function Menu() {
    const randArray = new Array(20).fill(0)
    console.log(randArray)

    return (
        <div className={styles.menu}>
            {randArray.map((val, idx) => <MenuItem key={idx}></MenuItem>)}
        </div>
    )
}