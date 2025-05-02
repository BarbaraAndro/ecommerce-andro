import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
    return(
        <div> 
            <BsCart3 style={{ color: '#1565C0',fontSize:'1.5rem', fontWeight:"400"}}/> 
            <span style={{color:'#1565C0', backgroundColor:'white', borderRadius:'50%', padding:'2px 5px' }}>7</span>
        </div>
    )
}
export default CartWidget

/*#74ACDF #FFFFFF #FBC02D #A67B5B #D8C3A5 #1565C0*/