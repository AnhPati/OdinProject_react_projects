import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CardList from "./CardList"
import Cart from "./Cart"
import { useOutletContext } from "react-router-dom"

const queryClient = new QueryClient()

const Shop = () => {
    const { handleAddToCart } = useOutletContext()

    return (
        <div>
            Shop

            <QueryClientProvider client={queryClient}>
                <CardList addToCart={handleAddToCart} />
            </QueryClientProvider>
            <Cart />
        </div>
    )
}

export default Shop