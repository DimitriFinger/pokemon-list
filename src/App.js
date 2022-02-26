import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { getPokemon, getPokemons } from './services/api';
function App() {

    const [pokemons, setPokemons] = useState(' ');

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

    console.log(pokemons)

    return (
        <div className="main-container">
            <NavBar />
        </div>
    );
}

export default App;
