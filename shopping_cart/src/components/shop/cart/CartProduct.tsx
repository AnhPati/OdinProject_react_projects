import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CartProduct = ({ title, image, price, quantity, onClick }) => {
    return (
        <>
            <hr />
            <CartProductStyled>
                <div className="remove-cart" onClick={onClick}>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
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
    position: relative;
    padding: 10px 0 20px;

    .remove-cart {
        position: absolute;  bottom: 10px;
        right: 0;
        padding: 7px 10px;
        color: #FFBA18;
        border: 5px solid #FFBA18;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            color: #CC4E00;
            border-color: #CC4E00;
        }

        &:active {
            color: #FFBA18;
            border-color: #FFBA18;
        }
    }

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