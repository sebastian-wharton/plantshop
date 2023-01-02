const Login = () => {
	return (
		<>
			<div className='bg-plants'>
				<div className='container'>
					<div className='login'>
						<form action=''>
							<h1>Login</h1>
							<hr />
							<div className='username'>
								<label htmlFor=''>Username: </label>
								<input type='text' />
							</div>
							<div className='password'>
								<label htmlFor=''>Password: </label>
								<input type='text' />
							</div>
							<button>Submit</button>
						</form>
					</div>
					<div className='sign-up'>
						<form action=''>
							<h1>Sign Up</h1>
							<hr />
							<div className='username'>
								<label htmlFor=''>Username: </label>
								<input type='text' />
							</div>
							<div className='password'>
								<label htmlFor=''>Password: </label>
								<input type='text' />
							</div>
							<button>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
