import Card from "./Card";
import '../styles/styles.css'
import './board.css'
const Board = ({ images, handleClick }) => {
    return (
        <div className="row board-container m-0 d-flex">
            <div className="h-100 m-auto">
                {images.map(image => (
                    <Card key={image.id} src={image.src} alt={image.alt} handleClick={handleClick} />
                ))}

            </div>
        </div>
    );
}

export default Board;