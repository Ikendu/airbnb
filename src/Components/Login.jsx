const Login = () => {
  return (
    <div className='mt-5'>
      <form className='mx-auto max-w-md'>
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
    </div>
  )
}
export default Login
