import { CountButton } from "../utils/CountButton"

export const Card = ({ id, title, description, image, price }) => {
    const priceString = price.toString()
    const priceDecimal = (priceString.slice(priceString.indexOf('.') + 1).length < 2) && (priceString.includes('.')) ? true : false

    return (
        <li id={id}>
            <h4>{title}</h4>
            <img src={image} alt={title} />
            <p>{description}</p>
            <h3>{price + (priceDecimal && '0')} €</h3>
            <CountButton />
        </li>
    )
}
