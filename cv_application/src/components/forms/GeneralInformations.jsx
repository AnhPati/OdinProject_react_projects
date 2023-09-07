import '../styles/general-info.css'
import '../styles/styles.css'

import { Input } from './Input'

const GeneralInformations = ({ datas }) => {

    return (
        <div className="info-container row">
            <h2>Informations générales</h2>
            <div className="row d-flex flex-end">
                <Input
                    htmlFor="lastName"
                    type="text" name="laststName"
                    id="lastName"
                    text="Nom"
                    required={true}
                    classDiv="s4"
                />
                <Input
                    htmlFor="firstName"
                    type="text" name="firstName"
                    id="firstName"
                    text="Prénom"
                    required={true}
                    classDiv="s4"
                />
                <Input
                    htmlFor="photo"
                    type="file" name="photo"
                    id="photo"
                    text="Photo"
                    classDiv="s4 right"
                />
            </div>
            <div className="row">
                <Input
                    htmlFor="email"
                    type="email" name="email"
                    id="email"
                    text="Enter your email:"
                    required={true}
                    classDiv="s6"
                />
                <Input
                    htmlFor="phone"
                    type="tel" name="phone"
                    id="phone"
                    text="Enter your phone number:"
                    classDiv="s6"
                />
            </div>
        </div>
    )
}

export default GeneralInformations