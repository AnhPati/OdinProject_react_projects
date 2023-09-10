import { useState } from 'react'
import '../styles/general-info.css'
import '../styles/styles.css'

import { Input } from './ui/Input'

const Profil = ({
    editionMode,
    datas,
    setDataProfil
}) => {
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

    return (
        <div className="info-container row">
            <h2>Informations générales</h2>
            <div className="row d-flex flex-end">
                {editionMode ? (
                    <>
                        <Input
                            htmlFor="lastname"
                            type="text" name="laststname"
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
                    </>
                ) : (
                    <>
                        <div className="col s4">
                            <h4>{datas.lastname}</h4>
                        </div>
                        <div className="col s4">
                            <h4>{datas.firstname}</h4>
                        </div>
                        <div className="col s4">
                            <div className="phot-img">
                                <img src={datas.photo} alt="" className="circle responsive-img" />
                            </div>
                        </div>
                    </>
                )}

            </div>
            <div className="row">
                {editionMode ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <div className="row">
                            <div className="col s4">
                                <h4>{datas.email}</h4>
                            </div>
                            <div className="col s4">
                                <h4>{datas.phone}</h4>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Profil