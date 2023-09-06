import '../styles/styles.css'
import '../styles/creation-cv.css'
import GeneralInformations from './GeneralInformations'
import ProfessionnalExp from './ProfessionnalExp'
import FormationExp from './FormationExp'
import { Button } from './Button'

const CreationCV = () => {
    return (
        <div className="main-container row">
            <h2>CreationCV</h2>
            <form className="col s12" action="">
                <GeneralInformations />
                <FormationExp />
                <ProfessionnalExp />
                <Button type="submit" text="Valider" />
            </form>
        </div>
    )
}

export default CreationCV