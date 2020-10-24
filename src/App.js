import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from './context'
import { PageRoutes, SheelRoutes } from './routes'


const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SheelRoutes />
        <PageRoutes />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App