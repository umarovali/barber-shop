import create from "zustand";

const useBookStore = create((set) => ({
    data: [],
    setData: (newData) => set(newData),
}));

export default useBookStore;