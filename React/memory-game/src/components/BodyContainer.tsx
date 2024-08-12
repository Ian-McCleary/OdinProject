import styles from "../styles/bodyConainer.module.css"
import CardGrid from "./CardGrid"
import ScoreCounter from "./ScoreCounter"
import { useState } from "react"


export default function BodyContainer() {
    
    const [scoreCounter, setScoreCounter] = useState(0);
    const [prevClickedPokemon, setPrevClickedPokemon] = useState<string[]>([])

    
    
    /** Increment score if this pokemon has not been clicked yet, 
     * otherwise set score to 0 and clear previously clicked pokemon list. */
    function clickedPokemon(currentPokemon: string) {
        if (prevClickedPokemon.indexOf(currentPokemon) > -1) {
            setScoreCounter(0)
            setPrevClickedPokemon([])
        } else {
            setScoreCounter(prev => prev + 1);
            setPrevClickedPokemon(prev => [...prev, currentPokemon])
        }
    }

    return (
        <div className={styles.container}>
            <ScoreCounter score = {scoreCounter} scoreCallback={clickedPokemon}></ScoreCounter>
            <CardGrid score = {scoreCounter} scoreCallback={clickedPokemon}></CardGrid>
        </div>
    )
};