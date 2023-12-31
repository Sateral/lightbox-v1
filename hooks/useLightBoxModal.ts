import { create } from "zustand";

interface LightboxStore {
  isOpen: boolean; // opens the Modal on click
  data: string[]; // data of paths to images
  currentIndex: number; // tracks index of current image previewed
  onClose: () => void; // closes the modal on click
  onOpen: (data: string[], index: number) => void; // opens modal and uses data
  nextSlide: () => void; // increments index
  prevSlide: () => void; // decrements index
}

export const useLightboxStore = create<LightboxStore>((set) => ({
  isOpen: false, // initially false
  data: [], // when closed empty array
  currentIndex: 0, // set default to 0, get's automatically changed on Open
  onClose: () => set({ isOpen: false }), // sets isOpen to false, thus closing it
  onOpen: (data: string[], index: number) =>
    set({ data, currentIndex: index, isOpen: true }), // sets data param to given data, index to given index, and isOpen to true to open modal
  nextSlide: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % (state.data?.length || 1),
    })),
  prevSlide: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex - 1 + (state.data?.length || 1)) %
        (state.data?.length || 1),
    })),
}));
