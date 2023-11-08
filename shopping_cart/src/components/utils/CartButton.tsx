import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"

const CartContainer = styled.div<{ $colorShop?: boolean }>`
    position: relative;
`

const CartNumber = styled.span<{ $colorShop?: boolean }>`
    position: absolute;
    top: 3.5px;
    right: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.$colorShop ? '#AB6400' : '#00749E'};
    }
`


export const CartButton = ({ productsNumber = 0, colorShop }) => {
    return (
        <NavLink to={`#`}>
            <CartContainer $colorShop={colorShop}>
                <FontAwesomeIcon icon={faCartShopping} />
                <CartNumber $colorShop={colorShop}>
                    {productsNumber}
                </CartNumber>
            </CartContainer>
        </NavLink>
    )
}
