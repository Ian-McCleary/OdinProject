interface IScore {
    score: number;
    scoreCallback: (pokemonName: string) => void;
};

export default IScore