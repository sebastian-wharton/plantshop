// import img from '../assets/image.png';
// import bg from '../assets/bg.avif';
import girl from '../assets/girl.avif';
import gardening from '../assets/gardening.avif';

const Home = () => {
	return (
		<>
			{/* <span class='material-icons'>local_florist</span>
			<span class='material-icons'>shopping_cart</span>
			<span class='material-icons'>add_shopping_cart</span>
			<span class='material-icons'>delete</span>
			<span class='material-icons'>account_circle</span>
			<span class='material-icons'>check_circle</span>
			<span class='material-icons'>highlight_off</span>
			<span class='material-icons'>call</span>
			<span class='material-icons'>email</span>
			<span class='material-icons'>navigate_before</span>
			<span class='material-icons'>navigate_next</span>
			<span class='material-icons'>mode_edit</span>
			<span class='material-icons'>remove_circle_outline</span>
			<span class='material-icons'>add_circle_outline</span>
			<span class='material-icons'>check_box_outline_blank</span>
			<span class='material-icons'>check_box</span> */}
			{/* <img
				src={img}
				alt='plants'
				className='plants'
			/>
			<img
				src={bg}
				alt='background'
				className='bg'
			/> */}
			<div className='box'>
				<h1>Plants Plants Plants</h1>
				<h2>Subheader for plant lovers</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Reprehenderit dolor, quasi fugiat corporis maiores
					dignissimos doloremque illo praesentium enim obcaecati
					repellat ad velit non, animi ea! A quasi blanditiis expedita
					vitae iure velit nostrum omnis!
				</p>
				<button>Buy Plants</button>
			</div>
			<img
				src={girl}
				alt='background'
				className='girl'
			/>
			<img
				src={gardening}
				alt='background'
				className='gardening'
			/>
		</>
	);
};

export default Home;
