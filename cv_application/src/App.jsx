import CVGenerator from "./components/CVGenerator"
import { useState } from "react"

function App() {
  const [editionMode, setEditionMode] = useState(false)

  const [userProfil, setUserProfil] = useState({
    firstname: '',
    lastname: '',
    photo: 'http://via.placeholder.com/120x120',
    email: '',
    phone: ''
  })

  const [userFormation, setUserFormation] = useState([])

  const [userExp, setUserExp] = useState([])

  const addExp = (values, event) => {
    const container = event.target.parentElement
    const copyExpArray = container.id === 'formations' ? [...userFormation] : [...userExp]
    const inputs = container.querySelectorAll('input')
    console.log('Inputs :')
    console.log(values)
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
