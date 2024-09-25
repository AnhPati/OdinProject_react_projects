import styled from "styled-components"

const Cart = ({ productsCart }) => {
    const amount = productsCart.reduce((acc, currentValue) => acc + Number(currentValue.quantity) * currentValue.price, 0)
    const amountString = amount.toString()
    const amountDecimal = (amountString.slice(amountString.indexOf('.') + 1).length < 2) && (amountString.includes('.')) ? true : false
    return (
        <CartStyled id="cart">
            <form action="submit">
                <h2>Récapitulatif de votre commande</h2>
                <ul>
                    {productsCart.map(product => {
                        <li key={product.id}>
                            <p>{product.title}</p>
                            <p>Prix unitaire : {product.price}</p>
                            <p>Quantité : {product.quantity}</p>
                            <img src={product.image} alt={product.title} />
                        </li>
                    })}
                </ul>
                <hr />
                <h2>Réglez votre commande</h2>
                <div className="cart-pay">
                    <p>A régler : {amount + (amountDecimal && '0')} €</p>
                    <button>Payer</button>
                </div>
            </form>
        </CartStyled>
    )
}

export default Cart

const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;

    .cart-pay {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;