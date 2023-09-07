import '../styles/styles.css'

export const Button = ({ type, text = 'Push', classBtn }) => {
    return (
        <button className={`waves-effect waves-light btn ${classBtn}`} type={type}>{text}</button>
    )
}