import styled from "styled-components"
import { CartSummary } from "./CartSummary"
import { CartAmount } from "./CartAmount"

const Cart = ({ productsCart, onClick, removeFromCart }) => {

    return (
        <CartStyled id="cart">
            <form>
                <CartSummary products={productsCart} removeFromCart={removeFromCart} />
                <CartAmount products={productsCart} onClick={onClick} />
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
`;