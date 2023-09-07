import '../styles/formations.css'
import '../styles/styles.css'
import { Button } from './Button'

import { Input } from './Input'

const FormationExp = () => {
    return (
        <div className="formations-container row d-flex flex-column">
            <h2>Formations</h2>
            <div className="row d-flex flex-column">
                <Input
                    htmlFor="formationName"
                    type="text" name="formationName"
                    id="formationName"
                    text={`Enter your formation's name:`}
                />
                <Input
                    htmlFor="formationTitle"
                    type="text" name="formationTitle"
                    id="formationTitle"
                    text={`Enter your formation's title:`}
                />
                <Input
                    htmlFor="yearFormation"
                    type="text" name="yearFormation"
                    id="yearFormation"
                    text="Year of formation"
                    classDiv="s4"
                />
            </div>
            <Button type="button" text="Ajouter" classBtn="right-self" />
        </div>
    )
}

export default FormationExp