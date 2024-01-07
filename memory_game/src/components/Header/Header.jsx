import '../../styles/styles.css'
import { PixelArt } from './PixelArt';
import Score from './Score';
import './header.css'

const Header = ({ score, highScore }) => {
    const title = 'Pokémons memory game'
    return (
        <div className="header-container d-flex flex-between">
            <h3>{title.toUpperCase()}</h3>
            <PixelArt />
            <Score score={score} highScore={highScore} />
        </div>
    );
}

export default Header;