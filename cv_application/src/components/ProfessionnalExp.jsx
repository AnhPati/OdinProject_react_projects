import '../styles/exp-pro.css'
import '../styles/styles.css'
import { Input } from './Input'

const ProfessionnalExp = () => {
    return (
        <div className="expPro-container row">
            <h2>Expériences professionnelles</h2>
            <div className="row d-flex flex-column">
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
                    type="textarea" name="companyResponsabilities"
                    id="companyResponsabilities"
                    text={`Enter your company's responsabilities:`}
                />
                <div className='d-flex'>
                    <Input
                        htmlFor="startCompany"
                        type="date" name="startCompany"
                        id="startCompany"
                        text="Start date:"
                        classDiv="s4"
                    />
                    <Input
                        htmlFor="endCompany"
                        type="date" name="endCompany"
                        id="endCompany"
                        text="End date:"
                        classDiv="s4"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfessionnalExp