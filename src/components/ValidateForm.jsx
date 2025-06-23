import React from 'react'
import { useForm } from 'react-hook-form'
import "../styles/form.css"

const ValidateForm = ({ finalizarCompra }) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({ mode: "all" })

    return (
        <div className='form-container'>
            <h2>Completa tus datos para finalizar la compra</h2>
            <form className='form' onSubmit={handleSubmit(finalizarCompra)}>

                <div className="input-group">
                    <input type="text" className="input-text" placeholder='Nombre completo' name='name'{...register('name', {
                        required: 'Debe completar su nombre',
                        minLength: { value: 3, message: 'El nombre es demasiado corto' }
                    })} />
                    {errors?.name?.type === 'required' && <span className="error-text">{errors.name.message}</span>}
                    {errors?.name?.type === 'minLength' && <span className="error-text">{errors.name.message}</span>}
                </div>
                <div className="input-group">
                    <input type="text" className="input-text" placeholder='Dirección de envío' name='address' {...register('address', {
                        required: 'Debe completar su dirección de envío',
                        minLength: { value: 10, message: 'Dirección demasiado corta' },
                        maxLength: { value: 40, message: 'La dirección excede la cantidad de cararcteres' }
                    })} />
                    {errors?.address?.type === 'required' && <span className="error-text">{errors.address.message}</span>}
                    {errors?.address?.type === 'minLength' && <span className="error-text">{errors.address.message}</span>}
                    {errors?.address?.type === 'maxLength' && <span className="error-text">{errors.address.message}</span>}
                </div>
                <div className="input-group">
                    <input type="text" className="input-text" placeholder='Correo electrónico' name='email' {...register('email', {
                        required: 'Debe completar su dirección de correo electrónico',
                        pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Complete con un correo electrónico válido" }
                    })} />
                    {errors?.email?.type === 'required' && <span className="error-text">{errors.email.message}</span>}
                    {errors?.email?.type === 'pattern' && <span className="error-text">{errors.email.message}</span>}
                </div>
                <div className="input-group">
                    <input type="text" className="input-text" placeholder='Repita su correo electrónico' name='email2' {...register("email2", { required: true, validate: { equalsMails: mail2 => mail2 === getValues().email } })} />
                    {errors?.email2?.type === 'required' && <span className="error-text">Debe completar su correo electrónico nuevamente</span>}
                    {errors?.email2?.type === "equalsMails" && <span className="error-text">Los correos electrónicos no coinciden</span>}
                </div>
                <button className='btn btn-sumar' type='submit'>Finalizar compra</button>
            </form>
        </div>
    )
}

export default ValidateForm