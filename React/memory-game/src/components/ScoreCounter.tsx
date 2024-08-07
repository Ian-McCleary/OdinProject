import IScore from "../interfaces/IScore"
import styles from "../styles/scoreCounter.module.css"

export default function ScoreCounter({ score, scoreCallback}: IScore) {
    return (
        <div className={styles.scoreText}>Score: {score}</div>
    )
};