import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CardList from "./shop/CardList"

const queryClient = new QueryClient()

const Shop = () => {
    return (
        <div>
            Shop

            <QueryClientProvider client={queryClient}>
                <CardList />
            </QueryClientProvider>
        </div>
    )
}

export default Shop