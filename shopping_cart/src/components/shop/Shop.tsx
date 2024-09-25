import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CardList from "./CardList"
import Cart from "./Cart"

const queryClient = new QueryClient()

const Shop = () => {
    return (
        <div>
            Shop

            <QueryClientProvider client={queryClient}>
                <CardList />
            </QueryClientProvider>
            <Cart />
        </div>
    )
}

export default Shop