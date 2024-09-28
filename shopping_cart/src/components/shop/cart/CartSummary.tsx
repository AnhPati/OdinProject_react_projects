import { Fragment } from "react";
import styled from "styled-components";
import { CartProduct } from "./CartProduct";

export const CartSummary = ({ products }) => {
    return (
        <CartSummaryStyled>
            <h2>Récapitulatif de votre commande</h2>
            <ul>
                {products.map(({ id, title, image, price, quantity }) =>
                    <CartProduct
                        key={id}
                        id={id}
                        title={title}
                        image={image}
                        price={price}
                        quantity={quantity}
                    />
                )}
            </ul>
        </CartSummaryStyled>
    )
}

const CartSummaryStyled = styled.div`
    ul {
        padding-left: 0;
        list-style: none;
    }
`;