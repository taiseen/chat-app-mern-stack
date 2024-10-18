import useConversation from "../../zustand/useConversation";
import { useSendMessageByUserId } from "../../api/mutation";
import { useForm } from "react-hook-form";
import { BsSend } from "react-icons/bs";


const MessageInput = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { mutate: sendMessage, isPending } = useSendMessageByUserId();

    const { selectedUser } = useConversation();


    const onSendMessage = async (data) => {
        const { message } = data;

        sendMessage({ receiverId: selectedUser._id, message });

        reset(); // Clear the input after sending the message
    };


    return (
        <form className='px-4 my-3' onSubmit={handleSubmit(onSendMessage)}>
            {
                errors.message && (
                    <span className="text-red-600 text-sm mt-2">
                        {errors.message.message}
                    </span>
                )
            }

            <div className='w-full relative'>
                <input
                    type='text'
                    placeholder='Send a message...'
                    {...register('message', { required: "Message is required" })}
                    className={`border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white ${errors.message ? 'border-red-500' : ''}`}
                />

                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {
                        isPending
                            ? <div className='loading loading-spinner bg-emerald-500'></div>
                            : <BsSend />
                    }
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
