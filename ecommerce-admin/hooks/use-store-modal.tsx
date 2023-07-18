import { create } from "zustand";

interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useStoreModalStore = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useStoreModalStore;
