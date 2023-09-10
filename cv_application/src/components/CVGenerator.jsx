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
    return (
        <>
            <h2>CV Generator</h2>
            <form className="col s12" action="">
                <Profil editionMode={editionMode} datas={dataProfil} setDataProfil={setDataProfil} />
                <FormationExp editionMode={editionMode} datas={dataFormation} setDataFormation={setDataFormation} addExp={addExp} />
                <ExperiencePro editionMode={editionMode} datas={dataExp} setDataExp={setDataExp} addExp={addExp} />
                {editionMode ? (
                    <Button type="submit" text="Valider" onClick={saveData} />
                ) : (
                    <Button type="button" text="Editer" onClick={saveData} />
                )}

            </form>
        </>
    )
}

export default CVGenerator