import '../styles/exp-pro.css'
import '../styles/styles.css'
import { Button } from './Button'
import { Input } from './Input'
import ExpContainer from './ExpContainer'

const ProfessionnalExp = ({ addExp }) => {



    return (
        <div id="exp-pro" className="expPro-container row d-flex flex-column">
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
            <Button type="button" text="Ajouter" classBtn="right-self" onClick={addExp} />
            <ExpContainer id="pro" />
        </div>
    )
}

export default ProfessionnalExp