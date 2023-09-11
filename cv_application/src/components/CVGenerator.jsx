import '../styles/styles.css'
import '../styles/creation-cv.css'
import Profil from './Profil'
import FormationExp from './Formation'
import { Button } from './ui/Button'
import ExperiencePro from './ExperiencePro'

const CVGenerator = ({
    editionMode,
    dataProfil,
    dataFormation,
    dataExp,
    setEditionMode,
    setDataProfil,
    setDataFormation,
    setDataExp,
    addExp
}) => {

    const saveData = () => {
        setDataProfil(dataProfil)
        setEditionMode(!editionMode)
    }

    const printCV = () => {
        const hideElements = Array.from(document.querySelectorAll('button'))
        hideElements.push(document.querySelector('#title-app'))
        hideElements.map(elem => elem.style.display = 'none')

        window.print()
        hideElements.map(elem => elem.style.display = 'inline-block')
    }

    const downloadCV = () => {
        const hideElements = Array.from(document.querySelectorAll('button'))
        hideElements.push(document.querySelector('#title-app'))
        hideElements.map(elem => elem.style.display = 'none')

        alert('Optimiser pour le format PDF')
        hideElements.map(elem => elem.style.display = 'inline-block')
    }

    return (
        <>
            <h2 id='title-app'>CV Generator</h2>
            <form id="for-print" className="col s12" action="">
                <Profil editionMode={editionMode} datas={dataProfil} setDataProfil={setDataProfil} />
                <FormationExp editionMode={editionMode} datas={dataFormation} setDataFormation={setDataFormation} addExp={addExp} />
                <ExperiencePro editionMode={editionMode} datas={dataExp} setDataExp={setDataExp} addExp={addExp} />
                {editionMode ? (
                    <Button type="submit" text="Valider" onClick={saveData} />
                ) : (
                    <div className='d-flex'>
                        <Button type="button" text="Editer" onClick={saveData} />
                        <Button type="button" text="Imprimer" onClick={printCV} />
                        <Button type="button" text="Télécharger" onClick={downloadCV} />
                    </div>
                )}

            </form>
        </>
    )
}

export default CVGenerator