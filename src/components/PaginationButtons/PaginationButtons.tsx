import * as React from 'react';
import { ButtonsContainer, OffButtonDiv, PaginationButton } from './styled';

interface Props {
    gotoNextPage: (() => void) | null,
    gotoPrevPage: (() => void) | null
}

const PaginationButtons: React.FC<Props> = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <ButtonsContainer>
            {gotoPrevPage ? <PaginationButton onClick={gotoPrevPage}>Voltar</PaginationButton> : <h1> </h1>}
            {gotoNextPage ? <PaginationButton onClick={gotoNextPage}>Próxima</PaginationButton> : <h1> </h1>}
        </ButtonsContainer>
    );
};

export default PaginationButtons;
