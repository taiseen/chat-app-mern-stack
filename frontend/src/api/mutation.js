import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { login, logout, register } from ".";
import toast from "react-hot-toast";


export const useRegistration = () => {

    // const queryClient = useQueryClient();
    const { setAuthUser } = useAuthContext();

    return useMutation({
        mutationFn: register,

        onSuccess: (serverResponse) => {
            // queryClient.invalidateQueries({ queryKey: ['userReg'] });
            toast.success("Account created successfully", { duration: 5000 });

            // to store this multiTab user auth support...
            localStorage.setItem("chat-user", JSON.stringify(serverResponse));
            setAuthUser(serverResponse); // set for globass accessing...
        },

        onError: (err) => toast.error(err.response.data.message || "Something went wrong"),
    })
}


export const useLogin = () => {

    const queryClient = useQueryClient();
    const { setAuthUser } = useAuthContext();

    return useMutation({
        mutationFn: login,

        onSuccess: (serverResponse) => {
            queryClient.invalidateQueries({ queryKey: ['userReg'] });
            // to store this multiTab user auth support...
            localStorage.setItem("chat-user", JSON.stringify(serverResponse));
            setAuthUser(serverResponse); // set for globass accessing...
        },

        onError: (err) => toast.error(err.response.data.message || "Something went wrong")
    })
}


export const useLogout = () => {

    const queryClient = useQueryClient();
    const { setAuthUser } = useAuthContext();

    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userReg'] })
            localStorage.removeItem("chat-user");
            setAuthUser(null);
        }
    })
}