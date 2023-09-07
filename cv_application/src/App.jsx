// import CreationCV from "./components/forms/CreationCV"
import DisplayCV from "./components/display/DisplayCV"
import { useState } from "react"
import datas from "./datas/userDatas"

function App() {
  const [userDatas, setUserDatas] = useState(datas)

  return (
    <div className="main-container row">
      <DisplayCV userDatas={userDatas} />
    </div>
  )
}

export default App
