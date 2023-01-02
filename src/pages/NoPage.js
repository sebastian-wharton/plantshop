import { NavLink } from 'react-router-dom';

const NoPage = () => {
	return (
		<>
			<h1>404</h1>
			<p>
				Go to the <NavLink to='/'>Homepage</NavLink>.
			</p>
		</>
	);
};

export default NoPage;
