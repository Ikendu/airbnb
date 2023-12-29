import { Outlet, Route } from 'react-router-dom'
import HeaderFile from './HeaderFile'

const Layout = () => {
  return (
    <div>
      <HeaderFile />
      <Outlet />
    </div>
  )
}
export default Layout
