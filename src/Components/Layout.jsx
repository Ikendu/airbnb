import { Outlet, Route } from 'react-router-dom'
import HeaderFile from './HeaderFile'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderFile />
      <Outlet />
    </div>
  )
}
export default Layout
