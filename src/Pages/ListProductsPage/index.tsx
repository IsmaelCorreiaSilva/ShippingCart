import { Header } from "../../components/Header";
import { ListProducts } from "../../components/ListProducts";
import { CartProvider } from "../../hooks/useCart";


export function ListProductsPage() {
    return (
        <>
            {/* <CartProvider>
                <Header />
                <ListProducts />
            </CartProvider> */}
            <Header />
            <ListProducts />
        </>
    );
}