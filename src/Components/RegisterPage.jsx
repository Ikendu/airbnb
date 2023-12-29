import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className=''>
      <form className='mx-auto max-w-md '>
        <h3 className='text-center font-bold text-2xl m-5 text-gray-600'>Register Here</h3>

        <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder='Chibundu Aniede' />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' placeholder='chibunduaniede@gmail.com' />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' placeholder='your password' />

        <button className='primary'>Sutmit</button>
        <div className='text-center text-gray-500 p-5'>
          Already have an account?{' '}
          <Link to={`/login`} className='text-black underline'>
            Login here
          </Link>
        </div>
      </form>
    </div>
  )
}
export default RegisterPage
