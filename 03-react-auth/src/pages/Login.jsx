import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginUserService } from '@/services/userServices'
import { useAuthContext } from '@/hooks/useAuthContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import logo from '@/assets/react.svg'
import '@/styles/form.css'

const Login = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (formData) => {
    try {
      const { status, data } = await loginUserService(formData)
      // console.log(data.token)
      if (status === 200) {
        login(data.token)
        navigate('/dashboard')

        MySwal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    } catch (error) {
      console.error('Error registering user:', error)
      MySwal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Login error',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>

        <img
          className='mb-4'
          src={logo}
          alt=''
          width={72}
          height={57}
        />

        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <label htmlFor='floatingInput'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign in
        </button>

        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2025</p>
      </form>
    </main>

  )
}
export default Login
