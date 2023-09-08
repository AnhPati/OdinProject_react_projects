import CVGenerator from "./components/CVGenerator"
import { useState } from "react"

function App() {
  const [editionMode, setEditionMode] = useState(false)

  const [userProfil, setUserProfil] = useState({
    firstName: '',
    lastname: '',
    photo: 'http://via.placeholder.com/120x120',
    email: '',
    phone: ''
  })

  const [userFormation, setUserFormation] = useState([
    {
      id: '',
      name: '',
      title: '',
      location: '',
      year: ''
    }
  ])

  const [userExp, setUserExp] = useState([
    {
      id: '',
      name: '',
      title: '',
      location: '',
      responsabilities: ',',
      startDate: '',
      endDate: ''
    }
  ])

  const addExp = (event) => {
    const container = event.target.parentElement
    const copyExpArray = container.id === 'formations' ? [...userFormation] : [...userExp]
    const newExp = container.id === 'formations' ? {
      id: '',
      name: '',
      title: '',
      location: '',
      year: ''
    } : {
      id: '',
      name: '',
      title: '',
      location: '',
      responsabilities: ',',
      startDate: '',
      endDate: ''
    }

    copyExpArray.push(newExp)
    container.id === 'formations' ? setUserFormation[copyExpArray] : setUserExp[copyExpArray]
  }

  return (
    <div className="main-container row">
      <CVGenerator
        editionMode={editionMode}
        dataProfil={userProfil}
        dataFormation={userFormation}
        dataExp={userExp}
        setEditionMode={setEditionMode}
        setDataProfil={setUserProfil}
        setDataFormation={setUserFormation}
        setDataExp={setUserExp}
        addExp={addExp}
      />
    </div>
  )
}

export default App
