import { create } from "zustand";

const useAddReview = create((set) => ({
    reviewAdd: JSON.parse(localStorage.getItem('reviewAdd')) || [],

    setReviewAdd: (newReview) => set((state) => {
        const updatedReviews = [...state.reviewAdd, newReview];
        localStorage.setItem('reviewAdd', JSON.stringify(updatedReviews));
        return { reviewAdd: updatedReviews };
    }),

    clearReviews: () => set(() => {
        localStorage.removeItem('reviewAdd');
        return { reviewAdd: [] };
    })
}));

export default useAddReview;
