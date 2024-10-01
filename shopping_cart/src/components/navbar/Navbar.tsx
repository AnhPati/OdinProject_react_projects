import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { NavbarList } from "./NavbarList"

const Navbar = ({ productsCart }) => {
  const location = useLocation()
  const isShop = location.pathname === '/shop' ? true : false

  return (
    <NavbarStyled $isShop={isShop} >
      <NavbarList isShop={isShop} productsCart={productsCart} />
    </NavbarStyled>
  )
}

export default Navbar

const NavbarStyled = styled.nav<{ $isShop?: boolean }>`
  position: sticky;
  top: 0px;
  z-index: 100;
  background: ${props => props.$isShop ? '#FFBA18' : '#74DAF8'};
  color: ${props => props.$isShop ? '#582D1D' : '#1D3E56'};
  font-family: 'Josefin Sans', sans-serif;
  padding: 1.4em 0.3em;
`