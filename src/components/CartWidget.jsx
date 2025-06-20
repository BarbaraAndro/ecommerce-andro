import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)
    return (
        <div style={{ display: 'flex', justifyContent: 'baseline' }}>
            <BsCart3 style={{ color: '#1565C0', fontSize: '1.5rem', fontWeight: "400" }} />
            {cartQuantity() > 0 && <small style={{ fontSize: '1rem', color: '#1565C0', backgroundColor: 'white', borderRadius: '50%', padding: '5px 7px' }}>
                {cartQuantity()}
            </small>}
        </div>
    )
}
export default CartWidget
