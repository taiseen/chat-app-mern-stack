import BtnLogout from "../auth/BtnLogout";
import SearchInput from "./SearchInput";
import UserList from "./UserList";

const Sidebar = () => {

    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchInput />
    
            <UserList />
            
            <BtnLogout />
        </div>
    );
};
export default Sidebar;