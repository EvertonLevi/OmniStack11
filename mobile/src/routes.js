import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Incident from '../src/pages/incidents'
import Detail from '../src/pages/detail'

const AppStack = createStackNavigator()

export default function Routes() {
 return (
  <NavigationContainer>
   <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Incidents" component={Incident} />
    <AppStack.Screen name="Detail" component={Detail} />
   </AppStack.Navigator>
  </NavigationContainer>
 )
}