import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import PokedexPage from './pages/PokedexPage/PokedexPage';
import PokemonModal from "./components/PokemonModal/PokemonModal";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/pokedex" element={<PokedexPage />} />
                {/* <Route path="/modal" element={<PokemonModal />} /> */}
            </Routes>
        </Router>
    )
}

export default AppRoutes