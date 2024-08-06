import IPokeProp from "../interfaces/IPokeAPI"

const getPokemon = async (url: string): Promise<IPokeProp> => {
    return fetch(url)
    .then(res =>res.json())
    .then(res => {return res as IPokeProp})
}

export default getPokemon