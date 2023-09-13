import CVGenerator from "./components/CVGenerator"
import { useState } from "react"

function App() {
  const [editionMode, setEditionMode] = useState(false)
  const [userProfil, setUserProfil] = useState({
    jobtitle: '',
    firstname: '',
    lastname: '',
    photo: 'http://via.placeholder.com/120x120',
    adress: '',
    email: '',
    phone: ''
  })
  const [userFormation, setUserFormation] = useState([])
  const [userExp, setUserExp] = useState([])

  return (
    <div className="main-container container">
      <CVGenerator
        editionMode={editionMode}
        dataProfil={userProfil}
        dataFormation={userFormation}
        dataExp={userExp}
        setEditionMode={setEditionMode}
        setDataProfil={setUserProfil}
        setDataFormation={setUserFormation}
        setDataExp={setUserExp}
      />
    </div>
  )
}

export default App
