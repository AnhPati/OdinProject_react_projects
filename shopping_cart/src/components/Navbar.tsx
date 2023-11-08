import { NavLink, useLocation } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore"
import { CartButton } from "./utils/CartButton"

const NavbarContainer = styled.nav`
  background: ${currentPage => currentPage ? '#FFBA18' : '#74DAF8'};
  color: ${currentPage => currentPage ? '#582D1D' : '#1D3E56'};
  font-family: 'Josefin Sans', sans-serif;
  padding: 1.4em 0.3em
`
const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const NavbarLink = styled.li`
  svg {
    font-size: 2em;
    color: ${currentPage => currentPage ? '#FFF7C2' : '#E1F6FD'};
    padding: 0 0.6em;
  }

  &:hover,
  &:focus {
    svg {
      color: ${currentPage => currentPage ? '#FFEE9C' : '#D1F0FA'};
    }
  }

  &:active {
    svg {
      color: ${currentPage => currentPage ? '#FBE577' : '#BEE7F5'};
    }
  }
`

const NavbarTitleContainer = styled.li`
  flex-grow: 2;
  text-align: center;
`

const NavbarTitle = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: 2.8em;
  font-weight: 700;
`

const Navbar = ({ productsCart }) => {
  const location = useLocation()

  const isShop = location.pathname === '/shop' ? true : false
  const nextPage = isShop ? '' : 'shop'
  const nextPageIcon = isShop ? faCircleLeft : faStore
  const pageTitle = isShop ? 'Shop' : 'Home'

  console.log(isShop)


  return (
    <NavbarContainer currentPage={isShop} >
      <NavbarList>
        <NavbarLink>
          <NavLink to={`/${nextPage}`} >
            <FontAwesomeIcon icon={nextPageIcon} />
          </NavLink>
        </NavbarLink>
        <NavbarTitleContainer>
          <NavbarTitle>{pageTitle}</NavbarTitle>
        </NavbarTitleContainer>
        <NavbarLink>
          <CartButton productsNumber={productsCart.length} />
        </NavbarLink>
      </NavbarList>
    </NavbarContainer>
  )
}

export default Navbar