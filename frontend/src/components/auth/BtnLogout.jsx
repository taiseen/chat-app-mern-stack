import { useLogout } from "../../api/mutation";
import { BiLogOut } from "react-icons/bi";

const BtnLogout = () => {

    const { mutate: logout, isPending } = useLogout();

    return (
        <div className='mt-auto pt-4 border-t border-slate-800'>
            {
                isPending
                    ? <span className='loading loading-spinner'></span>
                    : <BiLogOut
                        onClick={logout}
                        className='w-6 h-6 text-white cursor-pointer'
                    />
            }
        </div>
    );
};
export default BtnLogout;