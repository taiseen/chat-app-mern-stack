import axios from "axios";

axios.defaults.withCredentials = true;

export const baseURL = import.meta.env.VITE_SERVER_URL


const api = axios.create({ baseURL, withCredentials: true });


export const register = async (newUser) => (await api.post('/auth/register', newUser)).data;

export const login = async (userData) => await api.post('/auth/login', userData);

export const logout = async () => await api.post('/auth/logout');


export const getUsers = async (obj) => (await api.get(`/users/${obj.queryKey[1]}`)).data;


export const sendMessageById = async (userId) => await api.post(`/messages/send/${userId}`);

export const getMessageById = async (userId) => (await api.get(`/messages/${userId}`)).data;