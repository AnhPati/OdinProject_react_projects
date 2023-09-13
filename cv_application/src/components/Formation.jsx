import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/formations.css'
import '../styles/styles.css'
import { Button } from './ui/Button'
import ExpContainer from './ExpContainer'

import { Input } from './ui/Input'

const FormationExp = ({
    editionMode,
    datas,
    setDataFormation
}) => {

    const [formationValues, setFormationValue] = useState({})

    const handleChange = (event) => {
        const newValues = { ...formationValues, [event.target.name]: event.target.value }
        setFormationValue(newValues)
    }

    const addExp = (event) => {
        const inputs = event.target.parentElement.querySelectorAll('input')
        const newExp = { ...formationValues, id: uuidv4() }
        const copyDatasArray = datas

        copyDatasArray.push(newExp)
        setDataFormation(copyDatasArray)
        Array.from(inputs).map(input => input.value = '')
        setFormationValue({})
    }

    const removeExp = (event) => {
        const oldExpId = event.target.previousSibling.id
        const copyDatasArray = datas.filter(data => data.id !== oldExpId)

        setDataFormation(copyDatasArray)
    }

    return (
        <div id="formations" className="formations-container row d-flex flex-column">
            <h2>Formations</h2>

            {editionMode && (
                <>
                    <div className="row d-flex flex-column w-100">
                        <Input
                            htmlFor="formationName"
                            type="text" name="name"
                            id="formationName"
                            text="Organisme de formation :"
                            onChange={handleChange}
                            value={formationValues.name || ''}
                        />
                        <Input
                            htmlFor="formationTitle"
                            type="text" name="title"
                            id="formationTitle"
                            text="Nom de la formation :"
                            onChange={handleChange}
                            value={formationValues.title || ''}
                        />
                        <Input
                            htmlFor="formationLocation"
                            type="text" name="location"
                            id="formationLocation"
                            text="Lieu de la formation :"
                            onChange={handleChange}
                            value={formationValues.location || ''}
                        />
                        <Input
                            htmlFor="yearFormation"
                            type="text" name="year"
                            id="yearFormation"
                            text="Année de la formation :"
                            classDiv="s4"
                            onChange={handleChange}
                            value={formationValues.year || ''}
                        />
                    </div>
                    <Button type="button" text="Ajouter" classBtn="right-self" onClick={addExp} />
                </>
            )}
            <ExpContainer removeExp={removeExp} datas={datas} id="formations-exp" editionMode={editionMode} />
        </div>
    )
}

export default FormationExp