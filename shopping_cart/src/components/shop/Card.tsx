export const Card = ({ title, description, image, price }) => {
    const priceDecimal = (price.toString().slice(price.toString().indexOf('.') + 1).length < 2) && (price.toString().includes('.')) ? true : false
    console.log(priceDecimal)
    console.log('Taille')
    console.log(title)
    console.log(price.toString().slice(price.toString().indexOf('.')).length)

    return (
        <li>
            <h4>{title}</h4>
            <img src={image} alt={title} />
            <p>{description}</p>
            <h3>{price + (priceDecimal && '0')} €</h3>
        </li>
    )
}
