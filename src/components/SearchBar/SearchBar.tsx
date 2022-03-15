import * as React from 'react';
import { useState } from 'react';
import PokemonModal from '../PokemonModal/PokemonModal';
import { StyledInput, StyledInputDiv, StyledLabel } from './styled';

interface Props {
}


const SearchBar: React.FC<Props> = () => {

    const [isModalVisible, setModalVisible] = useState<boolean>(false)
    const [pokemonSearch, setPokemonSearch] = useState<string>('');

    const showModal = () => {
        return (
            setModalVisible(!isModalVisible)
        )
    }

    const handleClear = () => {
        setPokemonSearch('');
    };

    return (
        <StyledInputDiv>
            <StyledLabel htmlFor="query">Procurar:</StyledLabel>
            <StyledInput type="text" name="query" value={pokemonSearch} onChange={((e) => setPokemonSearch(e.target.value))} id="query" />
            <button onClick={handleClear} >Limpar</button>
            <button onClick={showModal}>Buscar</button>
            {
                console.log(pokemonSearch)
            }
            <PokemonModal isModalVisible={isModalVisible} onBackdropClick={showModal} name={pokemonSearch} />
        </StyledInputDiv >
    );
};

export default SearchBar;
