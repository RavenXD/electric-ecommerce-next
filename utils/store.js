import { create } from "zustand";

export const useStore = create((set) => ({
  navPage: "home",
  setPage: (page) => set({ navPage: page }),
}));
