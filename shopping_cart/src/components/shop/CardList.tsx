import styled from "styled-components"
import { useQuery } from "@tanstack/react-query"
import { productsData } from "../../datas/datas"
import { Card } from "./Card"

const CardsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const CardList = ({ addToCart }) => {
    const queryKey = ['products',]
    const { data, isLoading, isError, error } = useQuery({
        queryKey: queryKey,
        queryFn: productsData,
        refetchOnWindowFocus: false
    })



    const onClick = (productId, event) => {
        const productToAdd = data.find(product => product.id === productId)
        const quantity = event.currentTarget.previousSibling.children[1].value
        addToCart(productToAdd, quantity)
        event.currentTarget.previousSibling.children[1].value = 1
    }


    return (
        <div>
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
                        addToCart={(event) => onClick(product.id, event)}
                    />
                )}
            </CardsContainer>
        </div>
    )
}

export default CardList