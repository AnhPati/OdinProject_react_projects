import '../styles/styles.css'
import '../styles/creation-cv.css'
import Profil from './Profil'
import FormationExp from './Formation'
import { Button } from './ui/Button'
import ExperiencePro from './ExperiencePro'
import Skills from './Skills'

const CVGenerator = ({
    editionMode,
    dataProfil,
    dataFormation,
    dataExp,
    dataSkills,
    setEditionMode,
    setDataProfil,
    setDataFormation,
    setDataExp,
    setDataSkills
}) => {

    const saveData = () => {
        setDataProfil(dataProfil)
        setDataSkills(dataSkills)
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

    const titleApp = dataProfil.jobtitle !== '' ? dataProfil.jobtitle : 'CV Generator'

    return (
        <div className="row">
            {!editionMode ? (
                <h2 id='title-app'>{titleApp}</h2>
            ) : (
                <h2 id='title-app'>{titleApp}</h2>
            )}
            <div className="row">
                <div className="d-flex">
                    <h2 id='title-app'>{dataProfil.titleApp}</h2>
                </div>
                <form id="for-print" className="row" action="">
                    <Profil editionMode={editionMode} datas={dataProfil} setDataProfil={setDataProfil} />
                    <FormationExp editionMode={editionMode} datas={dataFormation} setDataFormation={setDataFormation} />
                    <ExperiencePro editionMode={editionMode} datas={dataExp} setDataExp={setDataExp} />
                    <Skills editionMode={editionMode} datas={dataSkills} setDataSkills={setDataSkills} />
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
            </div>
        </div>
    )
}

export default CVGenerator