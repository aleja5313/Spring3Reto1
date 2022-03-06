import React, { useState } from 'react'
import { Form } from '../styles/SingUp'

const SignUp = () => {

  const [correo, setCorreo] = useState("")
  const [alerta, setAlerta] = useState("")

  const handleInputChange = ({target}) =>{
    setCorreo(target.value)
    validarCorreo(target.value)
  }

  const validarCorreo = (valor) =>{
    const formatoValido = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const validacion = formatoValido.test(valor);
    if((!validacion)||(valor==="")){
      setAlerta("alerta")
    } else{
      setAlerta("")
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if((alerta==="")&&(correo!=="")){
      setCorreo("")
    }else{
      setAlerta("alerta")
    }
  }

  return (
    <Form id='signUp'>
        <div>
            <h3>Get early access today</h3>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder='email@example.com'
                    value={correo}
                    onChange={handleInputChange}
                ></input>
                <p className={alerta} >Please enter a valid email address</p>
                <button type='submit'>Get started for free</button>
            </form>
        </div>
    </Form> 
  )
}

export default SignUp