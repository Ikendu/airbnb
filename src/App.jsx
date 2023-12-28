import './App.css'
import { LogoIcon, SearchIcon } from './assets/Icons'

function App() {
  return (
    <div>
      <header className='p-4 flex justify-between'>
        <a href='#' className='flex gap-1 items-center'>
          <LogoIcon />
          <span className='text-lg font-bold'>lifella</span>
        </a>
        <div className='flex gap-2 border border-gray-300 rounded-full p-2 px-4 shadow-md shadow-gray-300 '>
          <div>Any Where</div>
          <div className='border-l border-gray-300 '></div>
          <div>Any Time</div>
          <div className='border-l border-gray-300 '></div>
          <div>Any One</div>
          <SearchIcon />
        </div>
      </header>
    </div>
  )
}

export default App
