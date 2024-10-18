const MessageSkeleton = () => {

    return (
        <div className="mt-4">

            <div className='flex gap-3 items-center'>
                <div className='skeleton w-10 h-10 rounded-full shrink-0 bg-slate-700'></div>

                <div className='flex flex-col gap-1'>
                    <div className='skeleton bg-slate-700 h-4 w-40'></div>
                    <div className='skeleton bg-slate-700 h-4 w-40'></div>
                </div>
            </div>

            <div className='flex gap-3 items-center justify-end'>
                <div className='flex flex-col gap-1'>
                    <div className='skeleton bg-slate-700 h-4 w-40'></div>
                </div>

                <div className='skeleton bg-slate-700 w-10 h-10 rounded-full shrink-0'></div>
            </div>

        </div>
    );
};
export default MessageSkeleton;