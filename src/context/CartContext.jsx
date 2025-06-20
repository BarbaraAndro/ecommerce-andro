import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + quantity}
                } else {
                    return prod
                }
            }))
        } else{
            setCart([...cart, {...item, quantity}])
        }
    }

    const clear = () => {
        setCart([])
    } 

    const removeItem = (id) => {
        setCart(cart.filter((prod)=>prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc,prod)=>acc+=prod.quantity,0)
    }

    const cartTotal = () => {
        return cart.reduce((acc,prod) => acc+=(prod.quantity * prod.price),0)
    }

    const itemQuantity = (id) =>{
        const itemInCart = cart.find((item) => item.id === id)
        if (itemInCart){
            return itemInCart.quantity
        } else{
            return 0
        }
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, cartQuantity, cartTotal, itemQuantity}}>
            {props.children}
        </CartContext.Provider>
    )
}