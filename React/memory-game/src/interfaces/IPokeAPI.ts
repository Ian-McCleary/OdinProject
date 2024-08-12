/**interface for a single pokemon from Poke API */
interface IPokeProp {
    name: string;
    sprites: ISprites;
    species: ISpecies;
}

interface ISprites {
    // image urls or null
    back_default: string|null;
    back_female: string|null;
    back_shiny: string|null;
    back_shiny_female: string|null;
    front_default: string|null;
    front_female: string|null;
    front_shiny: string|null;
    front_shiny_female: string|null;
}

interface ISpecies {
    name: string;
    url: string;
}

export default IPokeProp