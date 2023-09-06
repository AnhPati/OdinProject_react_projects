import '../styles/general-info.css'
import '../styles/styles.css'

import { Input } from './Input'

const GeneralInformations = () => {
    return (
        <div className="info-container d-flex flex-center flex-column">
            <h2>Informations générales</h2>
            <div className="d-flex flex-center">
                <Input
                    htmlFor="laststName"
                    type="text" name="firstName"
                    id="firstName"
                    text="Enter your firstname:"
                    required={true}
                />
                <Input
                    htmlFor="laststName"
                    type="text" name="laststName"
                    id="laststName"
                    text="Enter your laststname:"
                    required={true}
                />
                <Input
                    htmlFor="photo"
                    type="file" name="photo"
                    id="photo"
                    text="Select your photo:"
                />
            </div>
            <div className="d-flex flex-center">
                <Input
                    htmlFor="email"
                    type="email" name="email"
                    id="email"
                    text="Enter your email:"
                    required={true}
                />
                <Input
                    htmlFor="phone"
                    type="phone" name="phone"
                    id="tel"
                    text="Enter your phone number:"
                />
            </div>
        </div>
    )
}

export default GeneralInformations