import { render } from '@testing-library/react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
	const toggleNav = () => {
		render ()
	};

	return (
		<>
			<nav>
				<button onClick={toggleNav}></button><h1>Plant Shop</h1>
			</nav>
			<div className='main'>
				<Outlet />
				<Footer />
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/store'>Store</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Layout;
