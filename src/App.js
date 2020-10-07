import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider, GlobalStylesProvider } from './context'
import { PageRoutes, SheelRoutes } from './routes'


const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <GlobalStylesProvider>
          <SheelRoutes />
          <PageRoutes />
        </GlobalStylesProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App