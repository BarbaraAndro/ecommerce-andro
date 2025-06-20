import { useContext, useState } from 'react'
import "../styles/cardDetail.css"
import "../styles/form.css"
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { FaRegCheckCircle } from 'react-icons/fa'
import { db } from '../service/firebase'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const CheckOut = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, cartTotal, clear } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({mode: "all"})

    const finalizarCompra = (formData) => {
        console.log(cart)
        const copiaCart = cart
        console.log(copiaCart)
        let orden = {
            comprador:{
                name:formData.name,
                direction:formData.adress,
                email:formData.email
            },
            compra: copiaCart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "ordenes")
        console.log(orden)
        addDoc(ventas, orden)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((err) => console.log('Error'))
    }

    return (
        <>
            {orderId
                ? <div className='error'>
                    <h2>Muchas gracias por tu compra</h2>
                    <h3>Tu id es: {orderId} </h3>
                    <div className='error-icon'><FaRegCheckCircle /></div>
                    <NavLink to='/'>
                        <button className='btn btn-sumar'>Volver al inicio</button>
                    </NavLink>
                </div>
                : <div className='form-container'>
                    <h2>Completa tus datos para finalizar la compra</h2>
                    <form className='form' onSubmit={handleSubmit(finalizarCompra)}>

                    <div className="input-group">
                        <input type="text" className="input-text" placeholder='Nombre completo' name='name'{...register('name', {
                            required: 'Debe completar su nombre',
                            minLength: {value:3, message: 'El nombre es demasiado corto'}
                        })} />
                        {errors?.name?.type === 'required' && <span className="error-text">{errors.name.message}</span>}
                        {errors?.name?.type === 'minLength' && <span className="error-text">{errors.name.message}</span>}
                        </div>
                        <div className="input-group">
                        <input type="text" className="input-text" placeholder='Dirección de envío' name='adress' {...register('adress',{
                            required: 'Debe completar su dirección de envío',
                            minLength:{value:10, message: 'Dirección demasiado corta'},
                            maxLength:{value:40, message: 'La dirección excede la cantidad de cararcteres'}
                        })}/>
                        {errors?.adress?.type === 'required' && <span className="error-text">{errors.adress.message}</span>}
                        {errors?.adress?.type === 'minLength' && <span className="error-text">{errors.adress.message}</span>}
                        {errors?.adress?.type === 'maxLength' && <span className="error-text">{errors.adress.nmessage}</span>}
                        </div>
                        <div className="input-group">
                        <input type="text" className="input-text" placeholder='Correo electrónico' name='email' {...register('email',{
                            required: 'Debe completar su dirección de correo electrónico',
                            pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Complete con un correo electrónico válido"}
                        })}/>
                        {errors?.email?.type === 'required' && <span className="error-text">{errors.email.message}</span>}
                        {errors?.email?.type === 'pattern' && <span className="error-text">{errors.email.message}</span>}
                        </div>
                        <div className="input-group">
                        <input type="text" className="input-text" placeholder='Repita su correo electrónico' name='email2' {...register("email2", {required: true, validate: {equalsMails: mail2 => mail2 === getValues().email}})}/>
                        {errors?.email2?.type === 'required' && <span className="error-text">Debe completar su correo electrónico nuevamente</span>}
                        {errors?.email2?.type === "equalsMails" && <span className="error-text">Los correos electrónicos no coinciden</span>}
                        </div>
                        <button className='btn btn-sumar' type='submit'>Finalizar compra</button>
                    </form>
                </div>
            }
        </>
    )
}

export default CheckOut
