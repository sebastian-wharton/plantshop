import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import './index.css';

// Pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Store from './pages/Store';
import Products from './pages/Products';
import NoPage from './pages/NoPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<Layout />}
		>
			<Route
				index
				element={<Home />}
      />
      {/* Nested Route */}
			<Route
				path='store'
				element={<Store />}
			>
				<Route
					path='products'
					element={<Products />}
				/>
			</Route>

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
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
