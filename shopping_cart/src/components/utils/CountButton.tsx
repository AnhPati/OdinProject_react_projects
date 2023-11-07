export const CountButton = () => {
    return (
        <div>
            <label htmlFor="number-of-product">{`Nombre d'articles (20 max) : `}</label>
            <input type="number" min="0" max="20" step="any" name="number-of-product" />
        </div>
    )
}
