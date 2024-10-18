import { getRandomEmoji } from "../../utils/emojis";
import { useGetUserList } from "../../api/query";
import User from "./User";

const UserList = () => {

    const { data: userList, isLoading } = useGetUserList();

    return (
        <div className='py-2 flex flex-col overflow-auto userList bg-gray-800/40'>
            {
                userList?.map((user, idx) => (
                    <User
                        key={user._id}
                        user={user}
                        emoji={getRandomEmoji()}
                        lastIdx={idx === userList.length - 1}
                    />
                ))
            }

            {
                isLoading
                    ? <span className='loading loading-spinner mx-auto'></span>
                    : null
            }
        </div>
    );
};

export default UserList;