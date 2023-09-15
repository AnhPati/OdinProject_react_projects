import '../styles/styles.css'
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

        alert('Vous pouvez télécharger votre CV au format PDF.')
        hideElements.map(elem => elem.style.display = 'inline-block')
    }

    const printHide = (dataProfil.jobtitle !== '' && !editionMode) ? 'hide' : ''

    return (
        <div className="row">
            <div className="row">
                <h2 id='title-app' className={`right-align ${printHide}`}>CV Generator</h2>
                <form id="for-print" className="row" action="">
                    <Profil editionMode={editionMode} datas={dataProfil} setDataProfil={setDataProfil} />
                    <FormationExp editionMode={editionMode} datas={dataFormation} setDataFormation={setDataFormation} />
                    <ExperiencePro editionMode={editionMode} datas={dataExp} setDataExp={setDataExp} />
                    {editionMode ? (
                        <Button type="submit" text="Valider" onClick={saveData} />
                    ) : (
                        <div className='d-flex flex-around'>
                            <Button type="button" text="Editer" onClick={saveData} />
                            <Button type="button" text="Imprimer" onClick={printCV} />
                            <Button type="button" text="Télécharger" onClick={downloadCV} />
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default CVGenerator