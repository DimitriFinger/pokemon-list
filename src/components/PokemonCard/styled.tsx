import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 50px;
    flex-wrap: wrap;
    border: 1px solid rgba(124, 115, 120, 0.8);
    border-radius: 5px;
    background-color: #f1f1f1;
    margin: .5rem auto;
    
    &:hover {
        background-color: rgba(151, 137, 144, 0.8);
    }
    `;
