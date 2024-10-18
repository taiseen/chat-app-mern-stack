import { useQuery } from "@tanstack/react-query";
import { getMessagesByUserId, getUsers } from ".";


export const useGetUserList = () => useQuery({ queryKey: ['users'], queryFn: getUsers });

export const useGetUserMessages = (uId) => useQuery({ queryKey: ['message', uId], queryFn: getMessagesByUserId });


