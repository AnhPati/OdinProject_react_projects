import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"


export const CartButton = ({ productsNumber = 0, colorShop, disabled }) => {
    return (
        <CartContainerStyled $colorShop={colorShop} $disabled={disabled}>
            <a href={`#cart`} className="cart-button">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="cart-number">
                    {productsNumber}
                </span>
            </a>
        </CartContainerStyled>
    )
}

const CartContainerStyled = styled.div<{ $colorShop?: boolean, $disabled?: boolean }>`
    cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};

    .cart-button {
        display: block;
        position: relative;
        pointer-events: ${props => props.$disabled ? 'none' : 'auto'};
        
        .cart-number {
            position: absolute;
            top: 3.5px;
            right: 29px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${props => props.$colorShop ? '#AB6400' : '#00749E'};
        }
    }
`