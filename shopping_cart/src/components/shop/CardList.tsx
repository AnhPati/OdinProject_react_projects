import { useQuery } from "@tanstack/react-query"
import { productsData } from "../../datas/datas"
import { Card } from "./Card"

const CardList = () => {
    const queryKey = ['products',]
    const { data, isLoading, isError, error } = useQuery({
        queryKey: queryKey,
        queryFn: productsData,
        refetchOnWindowFocus: false
    })

    isLoading && `En cours de chargement...`
    isError && ` Une erreur est survenue : ${error}`

    console.log("Products")
    console.log(data)

    return (
        <div>
            CardList
            <ul>
                {data && data.map(product =>
                    <Card
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                )}
            </ul>
        </div>
    )
}

export default CardList