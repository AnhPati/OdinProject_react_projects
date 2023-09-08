import '../styles/exp-pro.css'
import '../styles/styles.css'
import { Button } from './Button'
import { Input } from './Input'
import ExpContainer from './ExpContainer'

const ExperiencePro = ({
    editionMode,
    datas,
    setDataExp,
    addExp
}) => {

    const handleChange = (event) => {
        const newDatas = { ...datas, [event.target.id]: event.target.value }
        setDataExp(newDatas)
    }

    return (
        <div id="exp-pro" className="expPro-container row d-flex flex-column">
            <h2>Expériences professionnelles</h2>
            {editionMode && (
                <>
                    <div className="row d-flex flex-column">
                        <Input
                            htmlFor="companyName"
                            type="text" name="companyName"
                            id="companyName"
                            text="Entreprise :"
                            onChange={handleChange}
                            value={datas.name}
                        />
                        <Input
                            htmlFor="companyTitle"
                            type="text" name="companyTitle"
                            id="companyTitle"
                            text="Intitulé du poste :"
                            onChange={handleChange}
                            value={datas.title}
                        />
                        <Input
                            htmlFor="companyLocation"
                            type="text" name="companyLocation"
                            id="companyLocation"
                            text="Intitulé du poste :"
                            onChange={handleChange}
                            value={datas.location}
                        />
                        <Input
                            htmlFor="companyResponsabilities"
                            type="textarea" name="companyResponsabilities"
                            id="companyResponsabilities"
                            text="Responsabilités :"
                            onChange={handleChange}
                            value={datas.responsabilities}
                        />
                        <div className='d-flex'>
                            <Input
                                htmlFor="startCompany"
                                type="date" name="startCompany"
                                id="startCompany"
                                text="Date de début :"
                                classDiv="s4"
                                onChange={handleChange}
                                value={datas.startDate}
                            />
                            <Input
                                htmlFor="endCompany"
                                type="date" name="endCompany"
                                id="endCompany"
                                text="Date de fin :"
                                classDiv="s4"
                                onChange={handleChange}
                                value={datas.endDate}
                            />
                        </div>
                    </div>
                    <Button type="button" text="Ajouter" classBtn="right-self" onClick={addExp} />
                </>
            )}

            <ExpContainer datas={datas} id="pro" />
        </div>
    )
}

export default ExperiencePro