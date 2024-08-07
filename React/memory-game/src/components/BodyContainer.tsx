import styles from "../styles/bodyConainer.module.css"
import CardGrid from "./CardGrid"
import ScoreCounter from "./ScoreCounter"
import { useState } from "react"


export default function BodyContainer() {
    
    let initList: string[] = []
    const [scoreCounter, setScoreCounter] = useState(0);
    const [prevClickedPokemon, setPrevClickedPokemon] = useState(initList)

    
    
    /** Increment score if this pokemon has not been clicked yet, 
     * otherwise set score to 0 and clear previously clicked pokemon list. */
    function clickedPokemon(currentPokemon: string) {
        if (prevClickedPokemon.indexOf(currentPokemon) > -1) {
            setScoreCounter(0)
            setPrevClickedPokemon([])
        } else {
            setScoreCounter(scoreCounter + 1);
            let intermediate = prevClickedPokemon
            intermediate.push(currentPokemon)
            setPrevClickedPokemon(intermediate)
        }
    }

    return (
        <div className={styles.container}>
            <ScoreCounter score = {scoreCounter} scoreCallback={clickedPokemon}></ScoreCounter>
            <CardGrid score = {scoreCounter} scoreCallback={clickedPokemon}></CardGrid>
        </div>
    )
};