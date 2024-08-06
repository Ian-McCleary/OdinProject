import Card from "./Card";
import styles from "../styles/cardGrid.module.css"
import IPokeProp from "../interfaces/IPokeAPI";
import getPokemon from "../services/GetService";

import { useState, useEffect } from "react";


export default function CardGrid() {

    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonNames = ["gyarados", "ditto"];

    const [pokeList, setPokeList] = useState<IPokeProp[]>([]);

    useEffect(() => {
        // pokemonNames.forEach(async element => {
        //     const url = baseUrl + element;
        //     const pmon = await getPokemon(url);
        //     setPokeList(prev => [...prev, pmon]);
        // });
        getAllPokemons()
    }, []);

    async function getAllPokemons() {
        const initList: IPokeProp[] = []
        for (var pokemon of pokemonNames) {
            const url = baseUrl + pokemon;
            const pmon = await getPokemon(url);
            initList.push(pmon)
        }
        setPokeList(initList)
    }

    /** get pokemon card objects from url and name */
    function getCardForPokemon(pokeObject: IPokeProp) {
        console.log(pokeObject.name);
        return (
            //TODO give carde name of pokemon and let it do lookup with useEfect and state list
            <Card key={pokeObject.name} label={pokeObject.name} image={pokeObject.sprites.front_default}></Card>
        )
    }

    return (
        <div className={styles.cardGrid}>
            {pokeList.map(i => getCardForPokemon(i))}
        </div>
    )
}