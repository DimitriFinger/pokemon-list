import * as React from 'react';
import Modal from '../ModalPopUp/Modal';
import { DesktopModalContainer, Header } from './styled';

interface Props {
    isModalVisible: boolean,
    onBackdropClick: () => void,
    name: string
}

const PokemonModal: React.FunctionComponent<Props> = ({ onBackdropClick, isModalVisible, name }) => {
    if (!isModalVisible) {
        return null;
    }
    console.log(isModalVisible)
    return (
        <Modal onBackdropClick={onBackdropClick}>
            <DesktopModalContainer>
                <Header>{name}</Header>
            </DesktopModalContainer>
        </Modal>

    );
};

export default PokemonModal;
