import Card from "./Card";
import styles from "../styles/cardGrid.module.css"
import IScore from "../interfaces/IScore";


export default function CardGrid({ score, scoreCallback}: IScore) {

    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonNames = ["gyarados", "ditto", "crobat", "seadra", "electabuzz", "weedle", "golbat", "garchomp", "inteleon", "azelf", "bastiodon", "eternatus"];

    /**shuffle the list of pokemonNames so theyre random */
    function shuffle(array: string[]) {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }

    shuffle(pokemonNames)

    


    /** get pokemon card objects from url and name */
    function getCardForPokemon(api_url: string) {
        return (
            <Card key={api_url} url={api_url} score= {score} scoreCallback={scoreCallback}></Card>
        )
    }

    return (
        <div className={styles.cardGrid}>
            {pokemonNames.map(i => getCardForPokemon(baseUrl + i))}
        </div>
    )
}