import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PokemonList from './components/PokemonList/PokemonList';
import { getPokemons } from './services/api';
import { Pokemon } from './models/pokemons';


function App() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const loadPokemons = async () => {
        try {
            const response = await getPokemons();
            setPokemons(response.data.results);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        (async () => await loadPokemons())();
    }, []);


    return (
        <div className="main-container">
            <NavBar />
            <PokemonList pokemons={pokemons} />
        </div>
    );
}

export default App;
