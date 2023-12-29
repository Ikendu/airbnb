import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import Login from './Components/Login'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
