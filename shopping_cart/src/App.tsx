import { useState } from "react"
import Home from "./components/Home"
import Shop from "./components/Shop"

function App() {
  const [productsCart, setProductsCart] = useState([])

  return (
    <>
      <Home />
      <Shop />
    </>
  )
}

export default App
