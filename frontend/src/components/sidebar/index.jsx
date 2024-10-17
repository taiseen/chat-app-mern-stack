import Conversations from "./Conversations";
import BtnLogout from "../auth/BtnLogout";
import SearchInput from "./SearchInput";

const Sidebar = () => {

    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchInput />
    
            <div className='divider px-3'></div>

            <Conversations />
            
            <BtnLogout />
        </div>
    );
};
export default Sidebar;