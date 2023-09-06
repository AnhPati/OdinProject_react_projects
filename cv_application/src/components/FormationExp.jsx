import '../styles/formations.css'
import '../styles/styles.css'

import { Input } from './Input'

const FormationExp = () => {
    return (
        <div className="formations-container row">
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
        </div>
    )
}

export default FormationExp