import React from 'react';
import { Pokemon } from '../../models/pokemons';
import PokemonCard from '../PokemonCard/PokemonCard';
import { ListContainer } from './styled';


interface Props {
    pokemons: Pokemon[];
}

const PokemonList: React.FC<Props> = ({ pokemons }) => {

    return (
        <ListContainer>
            {
                pokemons.map((pokemon, i) => (
                    <PokemonCard name={pokemon.name} key={i} />
                ))
            }
        </ListContainer>
    )
}

export default PokemonList