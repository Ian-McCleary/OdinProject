import { useState } from "react"
import ICardProp from "../interfaces/ICardProps"
import styles from "../styles/card.module.css"

export default function Card({label, image}: ICardProp){

    /**Returns the label text place on the card button */
    function cardLabel({label}: ICardProp) {
        return (<span></span>)
    }

    /** Returns the image placed on the card button */
    function cardImage({image}: ICardProp) {
        return (<div></div>)
    }

    return (
        <button className={styles.buttonCard}>
            {cardImage({label, image})}
            {cardLabel({label, image})}
        </button>
    )
}