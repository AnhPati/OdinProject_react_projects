import '../styles/styles.css'
import '../styles/creation-cv.css'
import GeneralInformations from './GeneralInformations'
import ProfessionnalExp from './ProfessionnalExp'
import FormationExp from './FormationExp'
import { Button } from './Button'
import { ExpResume } from './ExpResume'
import datas from '../datas/userDatas.json'

const CreationCV = () => {
    console.log('datas')

    const handleClickAddExp = (event) => {
        const container = event.target.parentElement
        const inputs = container.querySelectorAll('input')
        const expData = {
            name: inputs[0].value,
            title: inputs[1].value,
            date: [inputs[inputs.length - 1].value]
        }

        if (container.id === 'exp-pro') {
            const expPro = inputs[2].value
            expData.push(inputs[3].value)
        }

        return (
            <>
                {console.log(event.target.nextElementSibling ? (
                    <ExpResume containerId={container.id} name={expData.name} title={expData.title} date={expData.date} experiences={expPro} />
                ) : (
                    <div id="expContainer">
                        <ExpResume />
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className="main-container row">
            <h2>CreationCV</h2>
            <form className="col s12" action="">
                <GeneralInformations />
                <FormationExp addExp={handleClickAddExp} />
                <ProfessionnalExp addExp={handleClickAddExp} />
                <Button type="submit" text="Valider" />
            </form>
        </div>
    )
}

export default CreationCV