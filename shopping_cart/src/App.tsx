import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {
  const [productsCart, setProductsCart] = useState([])
  const [isHome, setIsHome] = useState(true)

  const handleAddToCart = (productToAdd, quantity) => {
    const newProductsCart = [...productsCart]
    const productWithQuantity = { ...productToAdd, quantity }
    newProductsCart.push(productWithQuantity)

    setProductsCart(newProductsCart)
  }

  return (
    <>
      <Navbar productsCart={productsCart} isHome={isHome} setIsHome={setIsHome} />
      <Outlet context={{ productsCart, handleAddToCart }} />
    </>
  )
}

export default App
