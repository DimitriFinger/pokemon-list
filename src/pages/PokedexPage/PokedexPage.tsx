import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PokemonList from '../../components/PokemonList/PokemonList';
import { getPokemons } from '../../services/api'
import { Pokemon } from '../../models/pokemons';
import SearchBar from '../../components/SearchBar/SearchBar';

const PokedexPage: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [nextPage, setNextPage] = useState<string>('');
    const [prevPage, setPrevPage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingError, setLoadingError] = useState<boolean>(false);

    const loadPokemons = async (url?: string) => {
        try {
            const response = await getPokemons();
            console.log(response.data);
            setPokemons(response.data.results);
            setNextPage(response.data.next);
            setPrevPage(response.data?.previous);
            console.log(nextPage);
            console.log(prevPage);
            setLoading(false);
        } catch (err) {
            setLoadingError(true);
            console.log(err);
        }
    };

    useEffect(() => {
        (async () => await loadPokemons())();
    }, []);

    if (loading) {
        return (
            <h1>Carregando...</h1>
        )
    }

    if (loadingError) {
        return (
            <h1>Erro ao carregar os dados.</h1>
        )
    }


    return (
        <div className="main-container">
            <NavBar />
            <SearchBar />
            <PokemonList pokemons={pokemons} />
        </div>
    )
}

export default PokedexPage