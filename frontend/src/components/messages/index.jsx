import { useAuthContext } from "../../context/AuthContext";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessagesDisplay from "./MessagesDisplay";
import MessageInput from "./MessageInput";


const NoChatSelected = () => {
    const { authUser } = useAuthContext();

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser?.fullName} ❄</p>
                <p>Select a chat to start messaging</p>

                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};


const MessageContainer = () => {

    const { selectedUser, setSelectedUser } = useConversation();

    useEffect(() => {
        // when log out and this component remove form view area... 
        // then clean up selected user by this ==> cleanup function (unmounts)
        return () => setSelectedUser(null);
    }, [setSelectedUser]);

    
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {
                !selectedUser

                    ? <NoChatSelected />

                    : <>
                        <div className='px-4 py-2 mb-2 bg-slate-700 text-gray-400 flex items-center justify-between'>
                            <p>
                                <span>To: </span>
                                <span className='font-bold'>
                                    {selectedUser?.fullName}
                                </span>
                            </p>

                            <IoCloseCircleOutline
                                className="size-6 text-orange-400 cursor-pointer duration-200 hover:text-red-500"
                                onClick={() => setSelectedUser(null)}
                            />
                        </div>

                        <MessagesDisplay />

                        <MessageInput />
                    </>
            }
        </div>
    );
};

export default MessageContainer;