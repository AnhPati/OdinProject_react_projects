import styled from "styled-components"

export const CartAmount = ({ products, onClick }) => {
    const amount = products.reduce((acc, currentValue) => acc + Number(currentValue.quantity) * currentValue.price, 0)
    const amountString = amount.toString()
    const amountDecimal = (amountString.slice(amountString.indexOf('.') + 1).length < 2) && (amountString.includes('.')) ? true : false

    return (
        <CartAmountStyled>
            <hr />
            <h2>Réglez votre commande</h2>
            <div className="cart-pay">
                <p>A régler : {amount + (amountDecimal && '0')} €</p>
                <button onClick={onClick}>Payer</button>
            </div>
        </CartAmountStyled>
    )
}

const CartAmountStyled = styled.div`
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
`;