import { Fragment } from "react"
import styled from "styled-components";

export const CartProduct = ({ title, image, price, quantity }) => {
    return (
        <>
            <hr />
            <CartProductStyled>
                <h3>{title}</h3>
                <div className="cart-infos">
                    <img src={image} alt={title} />
                    <div>
                        <p>Prix unitaire : {price}</p>
                        <p>Quantité : {quantity}</p>
                    </div>
                </div>
            </CartProductStyled>
        </>
    )
}

const CartProductStyled = styled.li`
    padding: 10px 0 20px;

    .cart-infos {
        display: flex;
        justify-content: flex-start;
        gap: 30px;
        flex-wrap: wrap;

        img {
            max-width: 70px;
        }
    }
`;