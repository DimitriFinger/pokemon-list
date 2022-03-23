import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PokemonList from '../../components/PokemonList/PokemonList';
import { getPokemons } from '../../services/api'
import { Pokemon } from '../../models/pokemons';
import SearchBar from '../../components/SearchBar/SearchBar';
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons';

const PokedexPage: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [nextPage, setNextPage] = useState<string>('');
    const [prevPage, setPrevPage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingError, setLoadingError] = useState<boolean>(false);

    const loadPokemons = async (url?: string) => {
        try {
            const response = await getPokemons(url);
            setPokemons(response.data.results);
            setNextPage(response.data.next);
            setPrevPage(response.data?.previous);
            setLoading(false);
        } catch (err) {
            setLoadingError(true);
            console.log(err);
        }
    };

    useEffect(() => {
        (async () => await loadPokemons())();
    }, []);


    const gotoNextPage = () => {
        loadPokemons(nextPage)
    }

    const gotoPrevPage = () => {
        loadPokemons(prevPage)
    }

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
        <div>
            <NavBar />
            <PokemonList pokemons={pokemons} />
            <PaginationButtons gotoNextPage={nextPage ? gotoNextPage : null} gotoPrevPage={prevPage ? gotoPrevPage : null} />
        </div>
    )
}

export default PokedexPage