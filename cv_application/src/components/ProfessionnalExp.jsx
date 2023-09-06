import '../styles/exp-pro.css'
import '../styles/styles.css'
import { Input } from './Input'

const ProfessionnalExp = () => {
    return (
        <div className="expPro-container d-flex flex-center flex-column">
            <h2>Expériences professionnelles</h2>
            <div className="d-flex flex-column">
                <Input
                    htmlFor="companyName"
                    type="text" name="companyName"
                    id="companyName"
                    text={`Enter your company's name:`}
                />
                <Input
                    htmlFor="companyTitle"
                    type="text" name="companyTitle"
                    id="companyTitle"
                    text={`Enter your company's title:`}
                />
                <Input
                    htmlFor="companyResponsabilities"
                    type="text" name="companyResponsabilities"
                    id="companyResponsabilities"
                    text={`Enter your company's responsabilities:`}
                />
                <div className='d-flex'>
                    <Input
                        htmlFor="startCompany"
                        type="date" name="startCompany"
                        id="startCompany"
                        text="Start date:"
                    />
                    <Input
                        htmlFor="endCompany"
                        type="date" name="endCompany"
                        id="endCompany"
                        text="End date:"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfessionnalExp