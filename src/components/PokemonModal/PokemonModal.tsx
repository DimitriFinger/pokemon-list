import * as React from 'react';
import { useEffect, useState } from 'react';
import Modal from '../ModalPopUp/Modal';
import { DesktopModalContainer, Header, PokemonImage } from './styled';
import { getPokemonDetails } from '../../services/api'

interface Props {
    isModalVisible: boolean,
    onBackdropClick: () => void,
    name: string
}

const PokemonModal: React.FC<Props> = ({ onBackdropClick, isModalVisible, name }) => {
    const [pokemonDetail, setPokemonDetail] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingError, setLoadingError] = useState<boolean>(false);

    console.log('name', name);

    const loadDetails = async () => {
        try {
            setLoading(true);
            const response = await getPokemonDetails(name);
            console.log(response.data);
            setPokemonDetail(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoadingError(true);

        }
    };


    useEffect(() => {
        if (isModalVisible) {
            (async () => await loadDetails())();
        }
    }, [isModalVisible]);


    if (!isModalVisible) {
        return null;
    }

    if (!name) {
        return (
            <Modal onBackdropClick={onBackdropClick}>
                <DesktopModalContainer>
                    <Header>Nome não inserido.</Header>
                </DesktopModalContainer>
            </Modal >
        )
    }
    if (loadingError) {
        return (
            <Modal onBackdropClick={onBackdropClick}>
                <DesktopModalContainer>
                    <Header>Erro ao carregar dados.</Header>
                </DesktopModalContainer>
            </Modal >
        )
    }

    if (loading) {
        return (
            <Modal onBackdropClick={onBackdropClick}>
                <DesktopModalContainer>
                    <Header>Carregando...</Header>
                </DesktopModalContainer>
            </Modal >

        )
    }


    return (
        <Modal onBackdropClick={onBackdropClick}>
            <DesktopModalContainer>
                <PokemonImage src={pokemonDetail.sprites.front_default} alt=" " />
                <Header>{name.charAt(0).toUpperCase() + name.slice(1)}</Header>
                {console.log(pokemonDetail)}
            </DesktopModalContainer>
        </Modal >

    );
};

export default PokemonModal;
