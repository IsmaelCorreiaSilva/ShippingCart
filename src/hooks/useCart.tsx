import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/ProductType";

interface CartContextData {
    itens: Product[];
    addItem: (item: Product) => void;
    removeItem: (id: number) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps) {

    const [itens, setItens] = useState<Product[]>([]);

    useEffect(() => {
        const data = localStorage.getItem('ShoppingCart');

        if (data !== null) {
            const itensCart = JSON.parse(data);
            setItens(itensCart)
        }

    }, [])
    
    useEffect(() => {
        const data = JSON.stringify(itens)
        localStorage.setItem('ShoppingCart', data)
    }, [itens])

    function addItem(item: Product) {
        setItens([...itens, item])
        //console.log(itens)
    }

    // function addItem(item: Product) {

    //     if (item !== null) {            
    //         const data = localStorage.getItem("ShoppingCart");
    //         if (data === null){
    //             const cartItens = JSON.stringify([...[], item]);
    //             localStorage.setItem("ShoppingCart", cartItens)
    //         }
    //         else {
    //             const cartItens = [...JSON.parse(data), item];
    //             localStorage.setItem("ShoppingCart", JSON.stringify(cartItens))
    //         }
    //     }
    // }
    // function getItensCart(){
    //     const data = localStorage.getItem("ShoppingCart");

    //     if(data !== null)
    //         return JSON.parse(data)

    //     return [];

    // }

    function removeItem(id: number) {
        // const data = localStorage.getItem("ShoppingCart");
        // if(data !== null){
        //     const cartItens = JSON.parse(data); 
        //     const filtered = cartItens.filter(item => item.id !== id);
        //     localStorage.setItem("ShoppingCart", JSON.stringify(filtered));
        // }
    }

    return (
        <CartContext.Provider value={{ itens, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);

    return context;
}