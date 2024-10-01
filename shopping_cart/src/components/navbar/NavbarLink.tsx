import styled from "styled-components"

export const NavbarLink = ({ children, isShop }) => {

    return (
        <NavbarLinkStyled $isShop={isShop}>
            {children}
        </NavbarLinkStyled>
    )
}

const NavbarLinkStyled = styled.li<{ $isShop?: boolean }>`
  svg {
    font-size: 2em;
    color: ${props => props.$isShop ? '#FFF7C2' : '#E1F6FD'};
    padding: 0 0.6em;
  }

  &:hover,
  &:focus {
    svg {
      color: ${props => props.$isShop ? '#FFEE9C' : '#D1F0FA'};
    }
  }

  &:active {
    svg {
      color: ${props => props.$isShop ? '#FBE577' : '#BEE7F5'};
    }
  }
`