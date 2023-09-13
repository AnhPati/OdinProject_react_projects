
const Skills = ({
    editionMode,
    datas,
    setDataSkills
}) => {
    const [skillsValues, setSkillsValue] = useState({
        languages: {},
        skills: {},
        hobbies
    })

    const handleChange = (event) => {
        const newValues = { ...skillsValues, [event.target.name]: event.target.value }
        setSkillsValue(newValues)
    }

    const addSkills = (event) => {
        const inputs = event.target.parentElement.querySelectorAll('input')
        const newExp = { ...experienceProValues, id: uuidv4() }
        const copyDatasArray = datas

        copyDatasArray.push(newExp)
        setDataExp(copyDatasArray)
        Array.from(inputs).map(input => input.value = '')
        setSkillsValue({ languages: {}, skills: {}, hobbies })
    }

    return (
        <div id="skills" className="row">
            {editionMode && (

            )}
            <div>

            </div>
        </div>
    );
}

export default Skills;