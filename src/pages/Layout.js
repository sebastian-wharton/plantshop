import { Outlet, NavLink, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
	return (
		<>
			<ScrollRestoration />
			<header>
				<nav>
					<h1>Plant Shop</h1>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='login'>Login</NavLink>
					<NavLink to='Contact'>Contact</NavLink>
					<NavLink to='Store'>Store</NavLink>
					<NavLink to='Products'>Products</NavLink>
					<NavLink to='NoPage'>NoPage</NavLink>
				</nav>
			</header>

			<main>
				<div className='page'>
					<Outlet />
				</div>
				<Footer />
			</main>
		</>
	);
};

export default Layout;
