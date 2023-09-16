import { useEffect, useState } from "react";
import Board from "./Board";
import Header from "./Header";
import api from "../api/api";
import { v4 as uuidv4 } from 'uuid';

const MemoryGame = () => {
    const [pokemons, setPokemons] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        !isMounted &&
            api.getImages().then(json => {
                setPokemons(json)
                setIsMounted(true)
            })
    }, [isMounted])

    console.log(pokemons)
    const image = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }

    return (
        <div>
            <div>
                <img src={image('120')} alt="" />
            </div>
            {/* <div>
                {images.map(image => {
                    console.log(image)
                    return (
                        <div key={uuidv4()}>
                            <p>{image.name}</p>
                            <img src={image.url} alt={image.name} />
                        </div>
                    )
                })}
            </div> */}
            <Header />
            <Board />
        </div >
    );
}

export default MemoryGame;