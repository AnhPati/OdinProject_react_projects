import Card from "./Card";
import './board.css'
const Board = ({ images }) => {
    return (
        <div className="row board-container">
            {images.map(image => (
                <Card key={image.id} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
}

export default Board;