import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore"

const Navbar = ({ productsCart }) => {
  const currentPage = document.URL
  console.log('coucou')
  console.log(currentPage)
  const nextPage = currentPage === 'http://localhost:4000/shop' ? '' : 'shop'
  const nextPageIcon = currentPage === 'http://localhost:4000/shop' ? faCircleLeft : faStore

  return (
    <div>
      <ul>
        <li>
          <NavLink to={`/${nextPage}`} >
            <FontAwesomeIcon icon={nextPageIcon} />
          </NavLink>
        </li>
        <li>
          <h2>{ }</h2>
        </li>

        <li>

        </li>
      </ul>
    </div>
  )
}

export default Navbar