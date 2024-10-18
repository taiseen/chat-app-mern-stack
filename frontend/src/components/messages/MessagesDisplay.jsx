import { useGetUserMessages } from "../../api/query";
import { useEffect, useRef } from "react";
import useConversation from "../../zustand/useConversation";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";


const MessagesDisplay = () => {

    const lastMessageRef = useRef(null);

    const { selectedUser } = useConversation();

    const { data: allMessages, isLoading } = useGetUserMessages(selectedUser._id);


    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [allMessages?.length]);


    return (
        <div className='px-4 flex-1 overflow-auto'>
            {
                isLoading

                    ? [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)

                    : allMessages?.length > 0

                        ? allMessages.map((message, index) =>
                            <div
                                key={message._id}
                                ref={index === allMessages.length - 1 ? lastMessageRef : null}
                            >
                                <Message message={message} />
                            </div>
                        )

                        : <p className="text-lg text-gray-400 text-center pt-4">
                            Send a message... to start the conversation...
                        </p>
            }
        </div>
    );
};

export default MessagesDisplay;