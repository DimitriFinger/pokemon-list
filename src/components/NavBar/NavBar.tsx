import React from 'react';
import { NavDiv, LogoPokedex, NavHeader, SearchBarDiv } from './styled';
import logo from '../../assets/logo.png';
import SearchBar from '../SearchBar/SearchBar';



const NavBar: React.FC = () => {
    return (
        <NavHeader>
            <NavDiv>
                <LogoPokedex src={logo} alt=" " />
                <SearchBarDiv>
                    <SearchBar />
                </SearchBarDiv>
            </NavDiv>
        </NavHeader>

    );
}

export default NavBar;