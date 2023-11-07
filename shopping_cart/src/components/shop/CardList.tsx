import styled from "styled-components"
import { useQuery } from "@tanstack/react-query"
import { productsData } from "../../datas/datas"
import { Card } from "./Card"

const CardsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const CardList = () => {
    const queryKey = ['products',]
    const { data, isLoading, isError, error } = useQuery({
        queryKey: queryKey,
        queryFn: productsData,
        refetchOnWindowFocus: false
    })



    return (
        <div>
            CardList
            {isLoading && `En cours de chargement...`}
            {isError && ` Une erreur est survenue : ${error}`}

            <CardsContainer>
                {data && data.map(product =>
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                )}
            </CardsContainer>
        </div>
    )
}

export default CardList