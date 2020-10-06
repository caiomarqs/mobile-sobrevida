import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from './context'
import { PageRoutes, SheelRoutes } from './routes'
import { Login } from './views'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

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