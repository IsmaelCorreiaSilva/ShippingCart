import { CartPage } from "./Pages/CartPage"
import { ListProductsPage } from "./Pages/ListProductsPage"
import { Header } from "./components/Header"
import { CartProvider } from "./hooks/useCart"
import './styles/global.scss'

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <CartPage />
        {/* <ListProductsPage /> */}
      </CartProvider>
    </>
  )
}

export default App
