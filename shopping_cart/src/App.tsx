import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {
  const [productsCart, setProductsCart] = useState([])
  const [isHome, setIsHome] = useState(true)

  const handleAddToCart = (productToAdd, quantity) => {
    const newProductsCart = [...productsCart]
    const isAlready = newProductsCart.find(product => product.id === productToAdd.id) === undefined ? false : true

    if (isAlready) {
      const productIndex = newProductsCart.findIndex(product => product.id === productToAdd.id)
      newProductsCart[productIndex].quantity = Number(newProductsCart[productIndex].quantity) + Number(quantity)

      setProductsCart(newProductsCart)
    } else {
      const productWithQuantity = { ...productToAdd, quantity }
      newProductsCart.push(productWithQuantity)
      setProductsCart(newProductsCart)
    }
  }

  const handleRemoveFromCart = (productToRemoveId) => {
    const newProductsCart = [...productsCart]

    const productIndex = newProductsCart.findIndex(product => product.id === productToRemoveId)
    newProductsCart.splice(productIndex, 1)

    setProductsCart(newProductsCart)
  }

  const handleResetCart = () => {
    setProductsCart([])
  }

  return (
    <>
      <Navbar productsCart={productsCart} isHome={isHome} setIsHome={setIsHome} />
      <Outlet context={{ productsCart, handleAddToCart, handleRemoveFromCart, handleResetCart }} />
    </>
  )
}

export default App
