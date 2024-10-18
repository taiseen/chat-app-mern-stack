import axios from "axios";

axios.defaults.withCredentials = true;

export const baseURL = import.meta.env.VITE_SERVER_URL

const api = axios.create({ baseURL, withCredentials: true });



export const register = async (newUser) => (await api.post('/auth/register', newUser)).data;

export const login = async (userData) => (await api.post('/auth/login', userData)).data;

export const logout = async () => await api.post('/auth/logout');



export const getUsers = async () => (await api.get(`/users`)).data;

export const getMessagesByUserId = async (obj) => (await api.get(`/messages/${obj.queryKey[1]}`)).data;

export const sendMessageByUserId = async ({ receiverId, message }) =>
    await api.post(`/messages/send/${receiverId}`, { message });