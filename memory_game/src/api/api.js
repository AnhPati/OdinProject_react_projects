const api = () => {
    const getImages = () => {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
            type: 'Get'
        }).then(response => response.json())
    }

    return { getImages }
}

export default api()