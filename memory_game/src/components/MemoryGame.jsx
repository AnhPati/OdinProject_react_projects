import { useEffect, useState } from "react";
import Board from "./Board";
import Header from "./Header";
import { toast, Toaster } from "react-hot-toast";
import './memory-game.css'
import '../styles/styles.css'


const MemoryGame = () => {
    const [images, setImages] = useState([])
    const [viewedImages, setViewedImages] = useState([])
    const [count, setCount] = useState({
        score: 0,
        highScore: 0
    })

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

    useEffect(() => {
        getImages()
    }, [])

    const handleScore = (event) => {
        const lastImage = event.currentTarget.firstChild

        if (viewedImages.indexOf(lastImage.src) === -1) {
            let newCount = count.score + 1
            setViewedImages([...viewedImages, lastImage.src])
            setCount({ ...count, score: newCount })
        } else {
            if (count.score > count.highScore) {
                const newHighScore = count.score
                setCount({ score: 0, highScore: newHighScore })
            } else {
                setCount({ ...count, score: 0 })
            }

            setViewedImages([])
            return toast.error('Dommage...')
        }

        if (viewedImages.length === images.length - 1) {
            setViewedImages([])
            return toast.success('Bien joué !')
        } else if (count.score > 0) {
            images.sort(() => Math.random() - 0.5);
        }
    }

    return (
        <div className="game-container d-flex flex-column column-between">
            <Toaster
                position="top-right"
                toastOptions={{
                    success: {
                        style: {
                            background: 'rgba(247, 181, 140, 1)',
                            color: '#FFF',
                            textShadow: '1px 1px 1px #84739c',
                            border: '5px double'
                        }
                    },
                    error: {
                        style: {
                            background: '#000',
                            color: '#84739c',
                            textShadow: '1px 1px 1px white',
                            border: '5px double'
                        }
                    }
                }}
            />
            <Header score={count.score} highScore={count.highScore} />
            <Board images={images} handleClick={handleScore} />
        </div >
    )
}

export default MemoryGame;