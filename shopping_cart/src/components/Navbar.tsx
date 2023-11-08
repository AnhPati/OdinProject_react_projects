import { NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore"
import { CartButton } from "./utils/CartButton"

const Navbar = ({ productsCart }) => {
  const location = useLocation()

  const nextPage = location.pathname === '/shop' ? '' : 'shop'
  const nextPageIcon = location.pathname === '/shop' ? faCircleLeft : faStore
  const pageTitle = location.pathname === '/shop' ? 'Shop' : 'Home'

  return (
    <div>
      <ul>
        <li>
          <NavLink to={`/${nextPage}`} >
            <FontAwesomeIcon icon={nextPageIcon} />
          </NavLink>
        </li>
        <li>
          <h2>{pageTitle}</h2>
        </li>
        <li>
          <CartButton productsNumber={productsCart.length} />
        </li>
      </ul>
    </div>
  )
}

export default Navbar