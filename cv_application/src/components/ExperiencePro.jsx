import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/styles.css'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import ExpContainer from './ExpContainer'

const ExperiencePro = ({
    editionMode,
    datas,
    setDataExp
}) => {

    const [experienceProValues, setExperienceProValue] = useState({})

    const handleChange = (event) => {
        const newValues = { ...experienceProValues, [event.target.name]: event.target.value }
        setExperienceProValue(newValues)
    }

    const addExp = (event) => {
        const inputs = event.target.parentElement.querySelectorAll('input')
        const newExp = { ...experienceProValues, id: uuidv4() }
        const copyDatasArray = datas

        copyDatasArray.push(newExp)
        setDataExp(copyDatasArray)
        Array.from(inputs).map(input => input.value = '')
        setExperienceProValue({})
    }

    const removeExp = (event) => {
        const oldExpId = event.target.previousSibling.id
        const copyDatasArray = datas.filter(data => data.id !== oldExpId)

        setDataFormation(copyDatasArray)
    }

    const printLayout = editionMode ? '' : 'right-align'

    return (
        <div id="exp-pro" className="mb-0 expPro-container row d-flex flex-column">
            <div className="d-flex">
                <div className="col s4 side-container"></div>
                <h3 className={`col s8 title-exp ${printLayout}`}>Expériences professionnelles</h3>
            </div>
            {editionMode && (
                <>
                    <div className="row d-flex flex-column w-100">
                        <Input
                            htmlFor="companyName"
                            type="text" name="name"
                            id="companyName"
                            text="Entreprise :"
                            onChange={handleChange}
                            value={experienceProValues.name || ''}
                        />
                        <Input
                            htmlFor="companyTitle"
                            type="text" name="title"
                            id="companyTitle"
                            text="Intitulé du poste :"
                            onChange={handleChange}
                            value={experienceProValues.title || ''}
                        />
                        <Input
                            htmlFor="companyLocation"
                            type="text" name="location"
                            id="companyLocation"
                            text="Lieu :"
                            onChange={handleChange}
                            value={experienceProValues.location || ''}
                        />
                        <Input
                            htmlFor="companyResponsabilities"
                            type="textarea" name="responsabilities"
                            id="companyResponsabilities"
                            text="Responsabilités :"
                            onChange={handleChange}
                            value={experienceProValues.responsabilities || ''}
                        />
                        <div className='d-flex'>
                            <Input
                                htmlFor="startCompany"
                                type="date" name="startDate"
                                id="startCompany"
                                text="Date de début :"
                                classDiv="s4"
                                onChange={handleChange}
                                value={experienceProValues.startDate || ''}
                            />
                            <Input
                                htmlFor="endCompany"
                                type="date" name="endDate"
                                id="endCompany"
                                text="Date de fin :"
                                classDiv="s4"
                                onChange={handleChange}
                                value={experienceProValues.endDate || ''}
                            />
                        </div>
                    </div>
                    <Button type="button" text="Ajouter" classBtn="right-self" onClick={addExp} />
                </>
            )}

            <ExpContainer removeExp={removeExp} datas={datas} id="pro" editionMode={editionMode} />
        </div>
    )
}

export default ExperiencePro