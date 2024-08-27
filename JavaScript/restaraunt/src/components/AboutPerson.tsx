import styles from "../styles/about.module.css"

interface IProps {
    name: string,
    title: string,
    phoneNumber: string,
    emailAddress: string,
}
export default function AboutPerson({name, title, phoneNumber, emailAddress}: IProps) {

    return (
        <div className={styles.aboutPerson}>
            <div><b>{name}</b></div>
            <div>{title}</div>
            <div>{phoneNumber}</div>
            <div>{emailAddress}</div>
        </div>
    )
}