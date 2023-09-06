import '../styles/styles.css'

export const Button = ({ type, text = 'Push' }) => {
    return (
        <button className="waves-effect waves-light btn" type={type}>{text}</button>
    )
}