import './card.css'
const Card = ({ src, alt, handleClick }) => {
    const cardTitle = alt.charAt(0).toUpperCase() + alt.slice(1)

    return (
        <div className="col s6 m3 l2">
            <div className="card">
                <div className="card-image" onClick={handleClick}>
                    <img src={src} alt={alt} />
                    <span className="card-title">{cardTitle}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;