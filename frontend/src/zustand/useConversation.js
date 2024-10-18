import { create } from "zustand";

const useConversation = create((set) => ({
    // 🟩🟩🟩 global data...
    selectedUser: null,
    messages: [],

    // 🟩🟩🟩 global setters...
    setSelectedUser: (selectedUser) => set({ selectedUser }),
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;