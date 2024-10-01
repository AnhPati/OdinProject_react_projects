import styled from "styled-components"
import { NavbarTitle } from "./NavbarTitle"

export const NavbarTitleContainer = ({ isShop }) => {
    const pageTitle = isShop ? 'Shop' : 'Home'

    return (
        <NavbarTitleContainerStyled>
            <NavbarTitle pageTitle={pageTitle} />
        </NavbarTitleContainerStyled>
    )
}

const NavbarTitleContainerStyled = styled.li`
  flex-grow: 2;
  text-align: center;
`