import React from 'react'
import { CardContainer } from './styled'

interface Props {
    name: string
}


const PokemonCard: React.FC<Props> = ({ name }) => {
    return (
        <CardContainer>
            <h1>{name}</h1>
        </CardContainer>
    )
};

export default PokemonCard;