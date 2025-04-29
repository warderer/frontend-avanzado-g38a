import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import logo from '../assets/react.svg'

const ReactHookForm = () => {
    const schema = yup.object({
        firstName: yup.string().required('Escribe tu nombre'),
        lastName: yup.string().required('Escribe tu apellido'),
        age: yup.number().positive('La edad debe ser un número positivo').integer('Indica tu edad'),
        email: yup.string().email('Correo invalido').required('Por favor indica un correo'),
        password: yup.string().required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, 'La contraseña debe tener al menos 8 caracteres, un número, una letra mayúscula, una letra minúscula y un caracter especial'),
        gender: yup
          .mixed()
          .oneOf(['M', 'F', 'O'], 'Selecciona un genero: Hombre, Mujer u Otro')
          .defined()
      })
        .required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >

          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
            {...register('firstName')}
          />
          <span>{errors.firstName?.message}</span>

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
            {...register('lastName')}
          />
          <span>{errors.lastName?.message}</span>

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
            {...register('age')}
          />
         <span>{errors.age?.message}</span>

          <label htmlFor='gender'>Genero</label>
          <select name='gender' id='gender' {...register('gender')}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>
          <span>{errors.gender?.message}</span>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            {...register('email')}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            {...register('password')}
          />
          <span>{errors.password?.message}</span>

          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm