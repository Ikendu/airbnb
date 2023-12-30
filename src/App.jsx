import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import Layout from './Components/Layout'
import RegisterPage from './Components/RegisterPage'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContextProvider } from './Components/UserContext'

axios.defaults.baseURL = `http://localhost:4000`
axios.defaults.withCredentials = true

function App() {
  return (
    <div>
      <ToastContainer />
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
