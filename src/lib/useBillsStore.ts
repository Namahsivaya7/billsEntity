import { Bill } from "@prisma/client";
import { create } from "zustand";
import { getBills } from "./api";

interface useBillsStore {
  bills: Bill[];
  setBills: () => void;
  
}

export const useBillsStore = create<useBillsStore>((set, get) => ({
  bills: [],
  setBills: async () => {
    const bills = await getBills();
    set({ bills});
  },
}));
