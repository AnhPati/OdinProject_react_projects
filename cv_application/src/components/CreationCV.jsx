import '../styles/styles.css'
import '../styles/creation-cv.css'
import GeneralInformations from './GeneralInformations'
import ProfessionnalExp from './ProfessionnalExp'
import FormationExp from './FormationExp'
import { Button } from './Button'

const CreationCV = () => {
    return (
        <div className="main-container d-flex flex-center flex-column">
            <h2>CreationCV</h2>
            <form action="">
                <GeneralInformations />
                <FormationExp />
                <ProfessionnalExp />
                <Button />
            </form>
        </div>
    )
}

export default CreationCV