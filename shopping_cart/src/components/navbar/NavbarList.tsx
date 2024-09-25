import styled from "styled-components"
import { CartButton } from "../utils/CartButton"
import { NavbarLink } from "./NavbarLink"
import { NavbarTitleContainer } from "./NavbarTitleContainer"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft, faStore } from "@fortawesome/free-solid-svg-icons"

export const NavbarList = ({ isShop, productsCart }) => {
    const nextPage = isShop ? '' : 'shop'
    const nextPageIcon = isShop ? faCircleLeft : faStore

    return (
        <NavbarListStyled>
            <NavbarLink isShop={isShop}>
                <NavLink to={`/${nextPage}`} >
                    <FontAwesomeIcon icon={nextPageIcon} />
                </NavLink>
            </NavbarLink>
            <NavbarTitleContainer isShop={isShop} />
            <NavbarLink isShop={isShop}>
                <CartButton productsNumber={productsCart.length} colorShop={isShop} disabled={!isShop} />
            </NavbarLink>
        </NavbarListStyled>
    )
}

const NavbarListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`