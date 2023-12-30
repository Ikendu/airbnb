import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    if (!userDetails) {
      const getUser = async () => {
        const userDoc = await axios.get(`/profile`, userDetails)
        setUserDetails(userDoc.data)
      }
      getUser()
    }
  }, [])

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>{children}</UserContext.Provider>
  )
}
