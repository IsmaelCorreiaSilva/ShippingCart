import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { CartProvider } from "../../hooks/useCart";



export function CartPage() {
    return(
        <>
            {/* <CartProvider>
                <Header />
                <Cart />
            </CartProvider> */}
            <Header />
            <Cart />
        </>
    )
} 