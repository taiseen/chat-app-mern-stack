import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	
	return (
		<form className='flex items-center gap-2 border-b border-slate-700 pb-4'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />

			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;