import { useEffect, useState } from "react";
import Board from "./Board";
import Header from "./Header";
import './memory-game.css'
import '../styles/styles.css'


const MemoryGame = () => {
    const [images, setImages] = useState([])

    const getImages = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=18&offset=18', {
            type: 'Get'
        }).then(response => response.json())
            .then(json => {
                const results = json.results

                for (let i = 0; i < results.length; i++) {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${results[i].name}/`, {
                        type: 'Get'
                    }).then(result => result.json())
                        .then(pokemon => {
                            const id = pokemon.id
                            const alt = pokemon.name
                            const src = pokemon.sprites.front_default
                            setImages(prevPokemons => [...prevPokemons, { id, alt, src }])
                        })
                }
            })
    }
    console.log('POKE')
    console.log(images)
    useEffect(() => {
        getImages()
    }, [])

    return (
        <div className="game-container d-flex flex-column flex-center">
            <Header />
            <Board images={images} />
        </div >
    );
}

export default MemoryGame;