import '../styles/styles.css'

const Header = () => {
    const title = 'Pokémons memory game'
    return (
        <div className="d-flex flex-between">
            <h3>{title.toUpperCase()}</h3>
            <div>Count content</div>
        </div>
    );
}

export default Header;