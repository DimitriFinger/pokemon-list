import axios from 'axios';

export const getPokemons = (url?: string) => {
    let baseURL = 'https://pokeapi.co/api/v2/pokemon/';

    if (url) {

        if (url.charAt(url.length - 1) === '6') {
            url = url.slice(0, -1) + '20';
        }
        console.log(url.charAt(url.length - 1));
        return axios.get(url);
    }
    return axios.get(baseURL);
};

export const getPokemonDetails = (pokemon: string) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
};
