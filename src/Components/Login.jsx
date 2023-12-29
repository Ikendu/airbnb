import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mt-5 grow items-center flex flex-col justify-round'>
      <form className='mx-auto max-w-md '>
        <h3 className='font-bold text-xl mb-4 text-center'>Login Here</h3>

        <label htmlFor='email' className=' ml-3'>
          Email
        </label>
        <input type='email' id='email' />

        <label htmlFor='password' className=' ml-3'>
          Password
        </label>
        <input type='password' id='password' />
        <button className='primary'>Submit</button>
      </form>
      <div className='text-gray-500 py-5'>
        Dont have an account yet?{' '}
        <Link className='text-black underline' to={`/register`}>
          Register now
        </Link>
      </div>
    </div>
  )
}
export default Login
