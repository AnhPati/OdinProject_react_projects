import '../styles/formations.css'
import '../styles/styles.css'
import { Button } from './Button'
import ExpContainer from './ExpContainer'

import { Input } from './Input'

const FormationExp = ({
    editionMode,
    datas,
    setDataFormation,
    addExp
}) => {

    const handleChange = (event) => {
        const newDatas = { ...datas, [event.target.id]: event.target.value }
        setDataFormation(newDatas)
    }

    return (
        <div id="formations" className="formations-container row d-flex flex-column">
            <h2>Formations</h2>

            {editionMode && (
                <>
                    <div className="row d-flex flex-column">
                        <Input
                            htmlFor="formationName"
                            type="text" name="formationName"
                            id="formationName"
                            text="Organisme de formation :"
                            onChange={handleChange}
                            value={datas.name}
                        />
                        <Input
                            htmlFor="formationTitle"
                            type="text" name="formationTitle"
                            id="formationTitle"
                            text="Nom de la formation :"
                            onChange={handleChange}
                            value={datas.title}
                        />
                        <Input
                            htmlFor="formationLocation"
                            type="text" name="formationLocation"
                            id="formationLocation"
                            text="Lieu de la formation :"
                            onChange={handleChange}
                            value={datas.location}
                        />
                        <Input
                            htmlFor="yearFormation"
                            type="text" name="yearFormation"
                            id="yearFormation"
                            text="Année de la formation :"
                            classDiv="s4"
                            onChange={handleChange}
                            value={datas.year}
                        />
                    </div>
                    <Button type="button" text="Ajouter" classBtn="right-self" onClick={addExp} />
                </>
            )}
            <ExpContainer datas={datas} id="formations-exp" />
        </div>
    )
}

export default FormationExp