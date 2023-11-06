export const productsData = async () => {
    const urlProducts = 'https://fakestoreapi.com/products?limit=20'
    const errorServer = 'Le serveur est actuellement inaccessible.'

    const products = await fetch(urlProducts)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(errorServer)
            } else {
                return response.json()
            }
        }).catch((err) => err.message)

    return products
}