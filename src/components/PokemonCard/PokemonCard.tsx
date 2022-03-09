import { useState } from 'react';
import PokemonModal from '../PokemonModal/PokemonModal';
import { Card } from './styled';

interface Props {
    name: string
}


const PokemonCard: React.FC<Props> = ({ name }) => {

    const [isModalVisible, setModalVisible] = useState<boolean>(false)

    const showModal = () => {
        return (
            setModalVisible(!isModalVisible)
        )
    }

    return (
        <div>
            <Card onClick={showModal}>
                {name}
            </Card>
            <PokemonModal isModalVisible={isModalVisible} onBackdropClick={showModal} name={name} />
        </div>
    )
};

export default PokemonCard;