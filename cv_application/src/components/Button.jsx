import '../styles/styles.css'

export const Button = ({ type, text = 'Push' }) => {
    return (
        <button type={type}>{text}</button>
    )
}