import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const userDoc = await axios.get(`/profile`)
      setUserDetails(userDoc.data)
    }
    getUser()
  }, [])

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>{children}</UserContext.Provider>
  )
}
