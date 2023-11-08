import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CardList from "./shop/CardList"
import Cart from "./shop/Cart"

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