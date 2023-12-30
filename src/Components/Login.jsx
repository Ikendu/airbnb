import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserContext } from './UserContext'

const Login = () => {
  const [user, setUser] = useState({ email: ``, password: `` })
  const [isLogged, setIsLogged] = useState(false)
  const { userDetails, setUserDetails } = useContext(UserContext)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userDoc = await axios.post(`/login`, user)
      console.log(userDoc)
      toast.success(`Login Successful`)
      setIsLogged(true)
      setUserDetails(userDoc.data)
    } catch (error) {
      toast.error(`Login Failed`)
    }
  }

  if (isLogged) return <Navigate to={`/`} />

  return (
    <div className='mt-5 grow items-center flex flex-col justify-round'>
      <form className='mx-auto max-w-md' onSubmit={handleSubmit}>
        <h3 className='font-bold text-2xl mb-4 text-center text-gray-600'>Login Here</h3>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='chibundu@gmail.com'
          value={user.email}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='password'
          value={user.password}
          onChange={handleChange}
        />

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
