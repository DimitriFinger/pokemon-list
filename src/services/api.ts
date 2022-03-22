import axios from 'axios';

export const getPokemons = (url?: string) => {
    let baseURL = 'https://pokeapi.co/api/v2/pokemon/';

    if (url) {
        return axios.get(url);
    }
    return axios.get(baseURL);
};

export const getPokemonDetails = (pokemon: string) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
};
