import '../styles/styles.css'

export const Button = ({ type, text = 'Push', classBtn, onClick }) => {
    return (
        <button className={`waves-effect waves-light btn ${classBtn}`} type={type} onClick={onClick}>{text}</button>
    )
}