import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CardList from "./CardList"
import Cart from "./cart/Cart"
import { useOutletContext } from "react-router-dom"

const queryClient = new QueryClient()

const Shop = () => {
    const { productsCart, handleAddToCart, handleResetCart } = useOutletContext()

    return (
        <div>
            Shop

            <QueryClientProvider client={queryClient}>
                <CardList addToCart={handleAddToCart} />
            </QueryClientProvider>
            <Cart productsCart={productsCart} onClick={handleResetCart} />
        </div>
    )
}

export default Shop