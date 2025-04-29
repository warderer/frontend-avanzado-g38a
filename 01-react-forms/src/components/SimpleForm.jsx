import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso #1: Crear los estados donde guardare la información tecleada por el usuario.
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso #3: Crear la función que se va a ejecutar cuando el usuario haga submit en el formulario.
  const handleSubmit = (event) => {
    event.preventDefault() // Evitar que la página se recargue al enviar el formulario.
    console.log({ email, password }) // Imprimir en consola el email y password que el usuario ingreso.
  }

    return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />

        {/* Paso #2: Guardar cada cambio del input en su estado respectivo  */}
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(event) => {setEmail(event.target.value)}}
            value={email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(event) => {setPassword(event.target.value)}}
            value={password}
          />

          <button type='submit'>
            Iniciar Sesion
          </button>

        </form>
      </div>
    </div>
  )
}

export default SimpleForm