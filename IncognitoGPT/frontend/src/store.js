import { create } from "zustand";

const useStore = create((set) => ({
  messages: [],
  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),
}));

export default useStore;
