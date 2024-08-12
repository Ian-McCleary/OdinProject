import styles from "../styles/about.module.css"
import AboutPerson from "./AboutPerson"

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <AboutPerson title="Head Chef" name="Joe Vandal" emailAddress="joe.vandal@lavishlentil.com" phoneNumber="777-8888-4939"></AboutPerson>
            <AboutPerson title="Sous Chef" name="John Doe" emailAddress="john.doe@lavishlentil.com" phoneNumber="777-1538-6739"></AboutPerson>
            <AboutPerson title="Receptionist" name="Justin Timberlake" emailAddress="justin.timberlake@lavishlentil.com" phoneNumber="777-9503-6981"></AboutPerson>
        </div>
    )
}