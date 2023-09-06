import '../styles/general-info.css'
import '../styles/styles.css'

const GeneralInformations = () => {
    return (
        <div className="info-container d-flex flex-center flex-column">
            <h2>Informations générales</h2>
            <div>
                <div>
                    <label htmlFor="firstName">Enter your firstName: </label>
                    <input type="text" name="firstName" id="firstName" required />
                </div>
                <div>
                    <label htmlFor="laststName">Enter your laststName: </label>
                    <input type="text" name="laststName" id="laststName" required />
                </div>
            </div>

        </div>
    )
}

export default GeneralInformations