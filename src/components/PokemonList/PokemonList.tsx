import React from 'react';
import { Pokemon } from '../../models/pokemons';
import PokemonCard from '../PokemonCard/PokemonCard'

interface Props {
    pokemons: Pokemon[];
}

const PokemonList: React.FC<Props> = ({ pokemons }) => {

    return (
        <div>
            {
                pokemons.map(pokemon => (
                    <PokemonCard name={pokemon.name} />
                ))
            }
        </div>
    )
}

export default PokemonList