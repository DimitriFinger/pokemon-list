import styled from "styled-components";

export const ModalContainer = styled.div`
    background-color: rgba(203, 199, 201, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    `;

export const DesktopModalContainer = styled(ModalContainer)`
    border-radius: 7px;
    box-shadow: 0 0 32px rgba(0,0,0,0.5);
    padding: 40px;
    width: 450px;
    font-size: 26px;
    
    @media (max-width: 450px){
        margin: 0 10px 0 10px;
        width: 300px;
    }
`;


export const Header = styled.h1`
    color: white;
    font-size: 35px;
    line-height: 1em;
    font-weight: 300px;
    margin: 5px 0 10px;
    text-align: center;

`;

export const PokemonImage = styled.img`
    margin-top: 10px;
`;