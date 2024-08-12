import IPokeProp from "../interfaces/IPokeAPI"

const getPokemonFromUrl = async (url: string): Promise<IPokeProp> => {
    return fetch(url)
    .then(res =>res.json())
    .then(res => {return res as IPokeProp})
};

export default getPokemonFromUrl