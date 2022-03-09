import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from './styled';


interface Props {
    onBackdropClick: () => void;
}


const Modal: React.FC<Props> = ({ onBackdropClick, children }) => {
    return ReactDOM.createPortal(
        <Overlay onClick={onBackdropClick}>
            <div onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </Overlay>
        , document.getElementById('modal-root')!)
}

export default Modal;