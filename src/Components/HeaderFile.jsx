import { Link } from 'react-router-dom'
import { BarIcon, GlobeIcon, LogoIcon, SearchIcon, UserIcon } from '../assets/Icons'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const HeaderFile = () => {
  const { userDetails, setUserDetails } = useContext(UserContext)
  return (
    <div>
      <header className='p-4 flex justify-between'>
        <Link to={`/`} className='flex gap-1 items-center'>
          <LogoIcon />
          <span className='text-lg font-bold'>lifella</span>
        </Link>
        <div className='flex justify-between items-center lg:-mr-36'>
          <div className='flex gap-2 border border-gray-300 rounded-full p-2 px-4 shadow-md shadow-gray-300 '>
            <div>Any Where</div>
            <div className='border-l border-gray-300 '></div>
            <div>Any Time</div>
            <div className='border-l border-gray-300 '></div>
            <div>Any One</div>
            <button className='bg-primary text-white rounded-full p-1'>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className='flex items-center gap-10'>
          <div className='gap-5 hidden lg:flex'>
            <p>lifella your home</p>
            <GlobeIcon />
          </div>

          <Link
            to={`/login`}
            className='flex justify-between border border-gray-400 rounded-full p-1 gap-3 px-3'
          >
            <BarIcon />
            <UserIcon />
            <h3>{userDetails?.name}</h3>
          </Link>
        </div>
      </header>
    </div>
  )
}
export default HeaderFile
