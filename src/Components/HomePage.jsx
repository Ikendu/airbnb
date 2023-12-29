import { BarIcon, GlobeIcon, LogoIcon, SearchIcon, UserIcon } from '../assets/Icons'

const HomePage = () => {
  return (
    <div>
      <header className='p-4 flex justify-between'>
        <a href='#' className='flex gap-1 items-center'>
          <LogoIcon />
          <span className='text-lg font-bold'>lifella</span>
        </a>
        <div className='flex justify-between items-center'>
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
          <p>lifella your home</p>
          <GlobeIcon />
          <div className='flex justify-between border border-gray-400 rounded-full p-1 gap-3 px-3'>
            <BarIcon />

            <UserIcon />
          </div>
        </div>
      </header>
    </div>
  )
}
export default HomePage
