import * as React from 'react';
import { ButtonsContainer, PaginationButton } from './styled';

interface Props {
    gotoNextPage: () => void,
    gotoPrevPage: () => void
}

const PaginationButtons: React.FC<Props> = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <ButtonsContainer>
            <PaginationButton onClick={gotoPrevPage}>Voltar</PaginationButton>
            <PaginationButton onClick={gotoNextPage}>Próxima</PaginationButton>
        </ButtonsContainer>
    );
};

export default PaginationButtons;
