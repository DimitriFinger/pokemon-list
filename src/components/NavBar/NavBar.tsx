import React from 'react';
import { NavDiv, LogoPokedex } from './styled';
import logo from '../../assets/logo.png';



const NavBar: React.FC = () => {
    return (
        <NavDiv>
            <LogoPokedex src={logo} alt=" " />
        </NavDiv>

    );
}

export default NavBar;