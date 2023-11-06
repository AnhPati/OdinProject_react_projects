import { useQuery } from "@tanstack/react-query"
import { productsData } from "../../datas/datas"

const CardList = () => {
    const queryKey = ['products',]
    const { data, isLoading, isError, error } = useQuery({
        queryKey: queryKey,
        queryFn: productsData,
        refetchOnWindowFocus: false
    })

    isLoading && `En cours de chargement...`
    isError && ` Une erreur est survenue : ${error}`

    console.log(data)

    return (
        <div>
            CardList
        </div>
    )
}

export default CardList