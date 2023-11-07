import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  const [productsCart, setProductsCart] = useState([])
  const [isHome, setIsHome] = useState(true)

  return (
    <>
      <Navbar productsCart={{ productsCart }} isHome={isHome} setIsHome={setIsHome} />
      <Outlet context={{ productsCart }} />
    </>
  )
}

export default App
