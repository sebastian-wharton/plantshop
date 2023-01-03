import bg2 from '../assets/bg2.avif';

const Store = () => {
	return (
		<>
			<h1>Store</h1>
			<img
				src={bg2}
				alt='background'
				className='bg2'
			/>
			<div className='store-wrapper'>
				<h1>Take a look at our selection</h1>
				<div className='store-header'>
					<div className='filter'>
						<label htmlFor=''>Search</label>
						<input type='text' />
					</div>
				</div>
				<div className='store-body'>
					<div className='cards'>
						<div className='card'></div>
						<div className='card'></div>
						<div className='card'></div>
						<div className='card'></div>
						<div className='card'></div>
						<div className='card'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Store;
