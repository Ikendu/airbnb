import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const RegisterPage = () => {
  const [user, setUser] = useState({ name: ``, email: ``, password: `` })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`/register`, user)
      toast.success(`Registration Successful`)
    } catch (error) {
      toast.error(`Registration failed`)
    }
  }

  return (
    <div className=''>
      <form className='mx-auto max-w-md ' onSubmit={handleSubmit}>
        <h3 className='text-center font-bold text-2xl m-5 text-gray-600'>Register Here</h3>

        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          placeholder='Chibundu Aniede'
          name='name'
          value={user.name}
          onChange={handleChange}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='chibunduaniede@gmail.com'
          name='email'
          value={user.email}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='your password'
          name='password'
          value={user.password}
          onChange={handleChange}
        />

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
