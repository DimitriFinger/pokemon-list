import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

export const getPokemons = () => {
    return api.get();
};

export const getPokemon = () => {
    return api.get('/charizard');
};
