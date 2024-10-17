import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../api/mutation";


const BtnLogout = () => {

    const { mutate: logout, isPending } = useLogout();

    return (
        <div className='mt-auto'>
            {
                isPending
                    ? <span className='loading loading-spinner'></span>
                    : <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
            }
        </div>
    );
};
export default BtnLogout;