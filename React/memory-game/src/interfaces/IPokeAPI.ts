/**interface for a single pokemon from Poke API */
interface IPokeProp {
    name: string;
    sprites: ISprites;
    species: ISpecies;
}

interface ISprites {
    // image urls or null
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

interface ISpecies {
    name: string;
    url: string;
}

export default IPokeProp