import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import PokedexPage from './pages/PokedexPage/PokedexPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/pokedex" element={<PokedexPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes