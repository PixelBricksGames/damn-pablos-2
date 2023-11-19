import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import GamePage from './pages/game';
import './styles/index.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/game' element={<GamePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
