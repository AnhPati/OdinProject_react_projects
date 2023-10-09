import { useEffect, useState, useRef } from "react";
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
    const [isInTransit, setIsInTransit] = useState(false)
    const [victory, setVictory] = useState(false)
    const [seconds, setSeconds] = useState(10)

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
        if (victory === true) {
            setVictory(false)
        }

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
            toast.error('Dommage...')
            return transition()
        }

        if (viewedImages.length === images.length - 1) {
            if (count.score > count.highScore) {
                const newHighScore = count.score + 1
                setCount({ score: 0, highScore: newHighScore })
            } else {
                setCount({ ...count, score: 0 })
            }

            setVictory(true)
            setViewedImages([])
            toast.success('Bien joué !')
            return transition()
        } else if (count.score > 0) {
            images.sort(() => Math.random() - 0.5);
        }
    }

    const transition = () => {
        setIsInTransit(true)
        timer()
        const blackMirror = document.querySelector('.new-round')
        blackMirror.classList.add("active")

        setTimeout(function () {
            blackMirror.classList.remove("active")
        }, 5000)

        setTimeout(function () {
            return setIsInTransit(false)
        }, 10000)
    }

    const secondsRef = useRef(seconds);
    secondsRef.current = seconds;

    const timer = () => {
        if (secondsRef.current > 0) {
            setSeconds(seconds => seconds - 1)
            setTimeout(timer, 1000)
        } else if (secondsRef.current === 0) {
            clearTimeout(timer)
            return setSeconds(seconds => seconds + 10)
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
            <Board images={images} isInTransit={isInTransit} handleClick={handleScore} />
            <div className="new-round d-flex flex-column flex-center">
                <h2>{victory ? 'Vous avez gagné !' : 'Vous avez perdu...'}</h2>
                <h3>Une nouvelle ronde va débuter dans {seconds} seconde{seconds > 1 && "s"}.</h3>
            </div>
        </div >
    )
}

export default MemoryGame;