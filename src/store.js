import { create } from 'zustand'

export const useStore = create((set) => ({
    activeProduct: null,
    setActiveProduct: (product) => set({ activeProduct: product }),
}))
