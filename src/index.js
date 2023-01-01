import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Store from './pages/Store';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import './index.css';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='store'
						element={<Store />}
					/>
					<Route
						path='products'
						element={<Products />}
					/>
					<Route
						path='login'
						element={<Login />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
					<Route
						path='*'
						element={<NoPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);