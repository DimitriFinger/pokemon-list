import React, { useEffect, useState } from 'react';
import './App.css';
import { getPokemon, getPokemons } from './services/api';
function App() {

    const [pokemons, setPokemons] = useState(' ');

    const loadPokemons = async () => {
        try {
            const response = await getPokemons();
            const response2 = await getPokemon();
            setPokemons(response2.data.sprites.front_default);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        (async () => await loadPokemons())();
    }, []);

    console.log(pokemons)

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <img alt='none' src={pokemons} />
                {/* {
                    pokemons.map((pokemon, id) => (
                        <h1 key={id}>{pokemon.name}</h1>
                    ))
                } */}
            </header>
        </div>
    );
}

export default App;
