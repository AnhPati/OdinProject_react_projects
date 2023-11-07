import styled from "styled-components"

const SelectContainer = styled.div`
    display: flex;
    align-items: end;
    margin-bottom: 2.6em;

    > input {
        width: 2.4em;
        margin-left: 0.6em;
    }
`

export const CountButton = () => {
    return (
        <SelectContainer>
            <label htmlFor="number-of-product">{`Nombre d'articles (20 max) : `}</label>
            <input type="number" min="0" max="20" step="any" name="number-of-product" value="0" />
        </SelectContainer>
    )
}
