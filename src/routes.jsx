import Feira from './pages/Feira';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/feira' element={<Feira />}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;
