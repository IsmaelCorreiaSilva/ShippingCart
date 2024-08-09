import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ItemCart, Product } from '../types/ProductType'

interface CartStoreProps {
    itens: ItemCart[],
    addItem: (itemCart: ItemCart) => void;
    removeItem: (itemId: number) => void;
    updateItem: (itemUpdate: ItemCart) => void;
}

export const useCartStore = create< CartStoreProps>()(
    
    persist(
        (set) => ({
            itens: [],
            addItem: (itemCart: ItemCart) =>
                 set((state) => ({ itens: [...state.itens.filter(item => item.id !== itemCart.id), itemCart] })
            ),
            removeItem: (itemId: number) => set(
                (state) => ({ itens: state.itens.filter(item => item.id !== itemId) })
            ),
            updateItem: (itemCart: ItemCart) =>
                set((state) =>({itens: state.itens.map(item => item.id === itemCart.id ? ({...item, quantity: itemCart.quantity}) as ItemCart : item)})
            )
        }), 
        {
            name: 'cart-store',
            storage: createJSONStorage(()=> sessionStorage)
        }
    )
)
