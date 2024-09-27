import styled from "styled-components"

const Cart = ({ productsCart }) => {
    const amount = productsCart.reduce((acc, currentValue) => acc + Number(currentValue.quantity) * currentValue.price, 0)
    const amountString = amount.toString()
    const amountDecimal = (amountString.slice(amountString.indexOf('.') + 1).length < 2) && (amountString.includes('.')) ? true : false
    console.log(productsCart)
    return (
        <CartStyled id="cart">
            <form action="submit">
                <h2>Récapitulatif de votre commande</h2>
                <ul>
                    {productsCart.map(product =>
                        <>
                            <hr />
                            <li key={product.id}>
                                <h3>{product.title}</h3>
                                <div className="cart-infos">
                                    <img src={product.image} alt={product.title} />
                                    <div>
                                        <p>Prix unitaire : {product.price}</p>
                                        <p>Quantité : {product.quantity}</p>
                                    </div>
                                </div>
                            </li>
                        </>
                    )}
                </ul>

                <div className="amount-container">
                    <hr />
                    <h2>Réglez votre commande</h2>
                    <div className="cart-pay">
                        <p>A régler : {amount + (amountDecimal && '0')} €</p>
                        <button>Payer</button>
                    </div>
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

    
    form {
        max-width: 360px;
        padding: 10px 30px;
    }

    ul {
        padding-left: 0;
        list-style: none;

        li {
            padding: 10px 0 20px;
        }
    }

    img {
        max-width: 70px;
    }

    .cart-infos {
        display: flex;
        justify-content: flex-start;
        gap: 30px;
        flex-wrap: wrap;
    }

    .amount-container {
        position: sticky;
        bottom: 0;
        background: #FFF;
        padding-top: 20px;

        .cart-pay {
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
                padding: 10px 20px;
                background: #FFBA18;
                color: #582D1D;
                border: 2px solid #582D1D;
                border-radius: 5px;
                font-weight: 600;
                text-transform: uppercase;
                cursor: pointer;

                &:hover {
                    background: #FBE577;
                    color: #FFBA18;
                    border-color: #FFBA18;
                }
                &:active {
                    background: #582D1D;
                    color: #FFBA18;
                    border-color: 2px solid #FFBA18;
                }
            }
        }
    } 
`;