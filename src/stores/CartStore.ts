import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Product } from '../types/ProductType'

interface CartStoreProps {
    itens: Product[],
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
}
export const useCartStore = create<CartStoreProps>(
    (set) => ({
        itens: [],
        addItem: (product: Product) => set(
            (state) => ({ itens: [...state.itens, product] })
        ),
        removeItem: (productId: number) => set(
            (state) => ({ itens: state.itens.filter(item => item.id !== productId) })
        )
    })
    // persist(
    //     (set) => ({
    //         itens: [],
    //         addItem: (product: Product) => set(
    //             (state) => ({ itens: [...state.itens, product] })
    //         ),
    //         removeItem: (productId: number) => set(
    //             (state) => ({ itens: state.itens.filter(item => item.id !== productId) })
    //         )
    //     }), 
    //     {
    //         name: 'cart-store',
    //         storage: createJSONStorage(()=> sessionStorage)
    //     }
    // )
)
