import './card.css'
const Card = ({ src, alt }) => {
    return (
        <div className="col s6 m3 l2">
            <div className="card">
                <div className="card-image">
                    <img src={src} alt={alt} />
                    <span className="card-title">{alt}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;