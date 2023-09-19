import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';

const Board = ({ images }) => {
    return (
        <div className="row">
            {images.map(image => (
                <Card key={image.id} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
}

export default Board;