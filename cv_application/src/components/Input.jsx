import '../styles/styles.css'

export const Input = ({ htmlFor, type, name, id, text, required = false }) => {
    return (
        <div>
            <label htmlFor={htmlFor}>{text}</label>
            <input type={type} name={name} id={id} required={required} />
        </div>
    )
}