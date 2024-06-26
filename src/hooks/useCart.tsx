import { ReactNode, createContext, useContext, useState } from "react";
import { Product } from "../types/ProductType";

interface CartContextData{
    itens: Product[];
    addItem: (item:Product) => void;
    removeItem: (id:number) => void;
}

interface  CartProviderProps{
    children: ReactNode;
}

const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export function CartProvider({children}:CartProviderProps){

    const [itens, setItens] = useState<Product[]>([]);

    console.log(itens)

    function addItem(item:Product){        
        if(item !== null)
            setItens([...itens, item])
    }

    function removeItem(id: number){
        const list = itens.filter(item => item.id !== id);     
        setItens(list);
    }

    return (
        <CartContext.Provider value={{itens, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);

    return context;
}