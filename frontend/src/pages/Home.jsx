import MessageContainer from "../components/messages";
import Sidebar from "../components/sidebar";

const Home = () => {

	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-slate-600'>

			<Sidebar />

			<MessageContainer />

		</div>
	);
};

export default Home;
