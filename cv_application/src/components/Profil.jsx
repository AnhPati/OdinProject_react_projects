import '../styles/styles.css'

import { Input } from './ui/Input'

const Profil = ({ editionMode, datas, setDataProfil }) => {
    const handleChange = (event) => {
        const newDatas = { ...datas, [event.target.id]: event.target.value }
        setDataProfil(newDatas)
    }

    const handleChangeFile = (event) => {
        event.preventDefault()
        console.log(event.target.files[0])
        const newDatas = { ...datas, photo: URL.createObjectURL(event.target.files[0]) }
        setDataProfil(newDatas)
    }

    const titleProfil = datas.jobtitle !== '' ? datas.jobtitle : 'Informations générales'
    const printLayout = editionMode ? '' : 'd-flex'

    return (
        <div className={`section-layout mb-0 row ${printLayout}`}>
            {editionMode ? (
                <>
                    <h2 className="title-exp">Informations générales</h2>
                    <div className="row">
                        <Input
                            htmlFor="jobtitle"
                            type="text" name="jobtitle"
                            id="jobtitle"
                            text="Intitulé :"
                            required={true}
                            classDiv="s4"
                            onChange={handleChange}
                            value={datas.jobtitle}
                        />
                    </div>
                    <div className="row d-flex flex-end">
                        <Input
                            htmlFor="lastname"
                            type="text" name="lastname"
                            id="lastname"
                            text="Nom :"
                            required={true}
                            classDiv="s4"
                            onChange={handleChange}
                            value={datas.lastname}
                        />
                        <Input
                            htmlFor="firstname"
                            type="text" name="firstname"
                            id="firstname"
                            text="Prénom :"
                            required={true}
                            classDiv="s4"
                            onChange={handleChange}
                            value={datas.firstname}
                        />
                        <Input
                            htmlFor="photo"
                            type="file" name="photo"
                            id="photo"
                            text="Charger"
                            classDiv="s4 right"
                            onChange={handleChangeFile}
                            src={datas.photo}
                            accept="image/x-png,image/gif,image/jpeg"
                        />
                    </div>
                    <div className="row">
                        <Input
                            htmlFor="adress"
                            type="text" name="adress"
                            id="adress"
                            text="Adresse :"
                            required={true}
                            classDiv="s12"
                            onChange={handleChange}
                            value={datas.adress}
                        />
                    </div>
                    <div className="row">
                        <Input
                            htmlFor="email"
                            type="email" name="email"
                            id="email"
                            text="E-mail :"
                            required={true}
                            classDiv="s6"
                            onChange={handleChange}
                            value={datas.email}
                        />
                        <Input
                            htmlFor="phone"
                            type="tel" name="phone"
                            id="phone"
                            text="Numéro de téléphone :"
                            classDiv="s6"
                            onChange={handleChange}
                            value={datas.phone}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="col s4 side-container pb-20">
                        <div>
                            <p>{datas.lastname} {datas.firstname}</p>
                        </div>
                        <div>
                            <p>{datas.adress !== '' ? 'Adresse' : ''}</p>
                            <p>{datas.adress}</p>
                        </div>
                        <div>
                            <p>{datas.phone !== '' ? 'Téléphone' : ''}</p>
                            <p>{datas.phone}</p>
                        </div>
                        <div>
                            <p>{datas.email !== '' ? 'E-mail' : ''}</p>
                            <p>{datas.email}</p>
                        </div>
                    </div>
                    <div className="col s8 d-flex">
                        <h2 className="valign-wrapper center-align">{titleProfil}</h2>
                        {!editionMode && (
                            <div className="col s4  valign-wrapper">
                                <div className="photo-img">
                                    <img src={datas.photo} alt="" className="circle responsive-img" />
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default Profil