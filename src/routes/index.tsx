import React, { useCallback, useEffect, useState } from 'react'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Routes: React.FC = () => {
  const [isLogged, setIsLogged] = useState('false')

  const handleIsLogged = useCallback(async () => {
    try {
      const logged = await AsyncStorage.getItem('isLogged')
      Boolean(logged) ? setIsLogged('true') : isLogged
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    handleIsLogged()
  }, [isLogged])


  return isLogged ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
