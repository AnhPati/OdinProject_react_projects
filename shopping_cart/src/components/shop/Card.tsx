import styled from "styled-components"
import { CountButton } from "../utils/CountButton"
import { AddCartButton } from "../utils/AddCartButton"

const CardContainer = styled.li`
    max-width: 300px;
    height: auto;
    list-style: none;
    margin: 0.4em;
    padding: 0.8em;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    border: 1px lightgray solid;
    border-radius: 5px;
    box-shadow: 1px 1px lightgray;
`
const CardTitle = styled.h4`
    font-size: 1.2em;
    font-weight: 700;
`

const ImageContainer = styled.div`
    max-width: 100%;
    height: 200px;
    position: relative;
`

const CardPrice = styled.h3`
    font-size: 1.4em;
    font-weight: 700;
    position: absolute;
    bottom: 0;
    right: 0;
    background: #FFF;
    border: 2px solid #000;
    margin: 0;
    padding: 0.3em 0.3em 0.1em;
`

const CardImage = styled.img`
    height: 100%;
`

const CardDescription = styled.p`
    font-size: 0.8em;
    font-weight: 400;
`

const CardButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Card = ({ id, title, description, image, price, addCart }) => {
    const priceString = price.toString()
    const priceDecimal = (priceString.slice(priceString.indexOf('.') + 1).length < 2) && (priceString.includes('.')) ? true : false

    return (
        <CardContainer id={id}>
            <CardTitle>{title}</CardTitle>
            <ImageContainer>
                <CardImage src={image} alt={title} />
                <CardPrice>{price + (priceDecimal && '0')} €</CardPrice>
            </ImageContainer>
            <CardDescription>{description}</CardDescription>
            <CardButtonsContainer>
                <CountButton />
                <AddCartButton addCart={addCart} />
            </CardButtonsContainer>
        </CardContainer>
    )
}