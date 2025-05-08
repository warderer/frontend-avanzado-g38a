import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '@/services/userServices'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import logo from '@/assets/react.svg'
import '@/styles/form.css'

const Signup = () => {
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const { status } = await registerUserService(data)
      if (status === 201) {
        // console.log('User registered successfully')
        navigate('/login')

        MySwal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User registered successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    } catch (error) {
      console.error('Error registering user:', error)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='John'
            {...register('first_name', { required: true })}
          />
          {errors.first_name && <span>This field is required</span>}
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Doe'
            {...register('last_name', { required: true })}
          />
          {errors.last_name && <span>This field is required</span>}
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            {...register('gender', { required: true })}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          {errors.gender && <span>This field is required</span>}
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2024</p>
      </form>
    </main>
  )
}
export default Signup
