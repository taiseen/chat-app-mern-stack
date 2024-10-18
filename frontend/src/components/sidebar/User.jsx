import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const User = ({ user, lastIdx, emoji }) => {

    const { selectedUser, setSelectedUser } = useConversation();
    const { onlineUsers } = useSocketContext();

    const isSelectedUser = selectedUser?._id === user._id;

    const isOnline = onlineUsers.includes(user._id);

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelectedUser ? "bg-sky-500" : ""}
			`}
                onClick={() => setSelectedUser(user)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img src={user.profilePic} alt='user avatar' />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>
                            {user.fullName}
                        </p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>

            {
                !lastIdx && <div className='divider my-0 py-0 h-1' />
            }
        </>
    );
};

export default User;