import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCart = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) => set((state) => {
        const isInCart = state.cart.some(cartItem => cartItem.id === item.id);
        if (!isInCart) {
            return { cart: [...state.cart, { ...item, count: 1 }] };
        } else {
            return {
                cart: state.cart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
                )
            };
        }
      }),

      removeFromCart: (itemId) => set((state) => ({
        cart: state.cart.filter(cartItem => cartItem.id !== itemId)
      })),

      updateItemCount: (itemId, count) => set((state) => ({
        cart: state.cart.map(cartItem =>
            cartItem.id === itemId ? { ...cartItem, count } : cartItem
        )
      })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
