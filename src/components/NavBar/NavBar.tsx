import React from 'react';
import { NavDiv, LogoPokedex, NavHeader } from './styled';
import logo from '../../assets/logo.png';



const NavBar: React.FC = () => {
    return (
        <NavHeader>
            <NavDiv>
                <LogoPokedex src={logo} alt=" " />
            </NavDiv>
        </NavHeader>

    );
}

export default NavBar;