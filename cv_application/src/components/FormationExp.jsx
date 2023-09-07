import '../styles/formations.css'
import '../styles/styles.css'
import { Button } from './Button'
import ExpContainer from './ExpContainer'

import { Input } from './Input'

const FormationExp = ({ addExp }) => {
    return (
        <div id="exp-formation" className="formations-container row d-flex flex-column">
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
            <Button type="button" text="Ajouter" classBtn="right-self" onClick={addExp} />
            <ExpContainer id="formations" />
        </div>
    )
}

export default FormationExp