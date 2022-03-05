import React from 'react'
import { Card } from './styled'

interface Props {
    name: string
}


const PokemonCard: React.FC<Props> = ({ name }) => {
    return (
        <Card>
            {name}
        </Card>
    )
};

export default PokemonCard;