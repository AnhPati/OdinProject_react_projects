import styled from "styled-components"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = styled.button`
    padding: 0.6em 0.7em 0.5em 0.7em;
    width: 48px;
    align-self: end;

    > svg {
        font-size: 1.6em
    }
`

export const AddCartButton = ({ addCart }) => {
    return (
        <Button onClick={addCart}>
            <FontAwesomeIcon icon={faCartPlus} />
        </Button>
    )
}
