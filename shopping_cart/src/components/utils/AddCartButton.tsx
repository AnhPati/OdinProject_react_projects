import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const AddCartButton = ({ addCart }) => {
    return (
        <div>
            <button onClick={addCart}><FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    )
}
