import styled from "styled-components"

export const NavbarTitle = ({ pageTitle }) => {
    return (
        <NavbarTitleStyled>{pageTitle}</NavbarTitleStyled>
    )
}

const NavbarTitleStyled = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: 2.8em;
  font-weight: 700;
`