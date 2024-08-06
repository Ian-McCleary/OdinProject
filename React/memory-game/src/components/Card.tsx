import { useState, useEffect } from "react"
import styles from "../styles/card.module.css"
import IPokeProp from "../interfaces/IPokeAPI";
import getPokemonFromUrl from "../services/GetService";
import IScore from "../interfaces/IScore";

interface IProp extends IScore{
    url: string;
};

export default function Card({ url, score, scoreCallback }: IProp){

    const [pokemonObj, setPokemonObj] = useState<IPokeProp>();

    useEffect(() => {
        getPokemon()
    }, []);

    async function getPokemon(){
        setPokemonObj(await getPokemonFromUrl(url))
    };

    /**Returns the label text place on the card button */
    function cardLabel(label: string | undefined) {
        return (<span className={styles.cardTxt}>{label}</span>)
    };

    /** Returns the image placed on the card button */
    function cardImage(image: string | undefined) {
        return (
            <div className={styles.cardImg} style={{backgroundImage: "url(" + image + ")"}}></div>
        )
    };

    /** If the pokemon was not retrieved from API, return empty div */
    if (pokemonObj?.name == null) {
        return <div></div>
    }

    /** Otherwise return button */
    return (
        <button className={styles.cardBtn} onClick={() => scoreCallback(pokemonObj.name)}>
            {cardImage(pokemonObj.sprites.front_default)}
            {cardLabel(pokemonObj.name)}
        </button>
    );
}