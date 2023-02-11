import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'

export type AppStackParamList = {
  Home: undefined
  //   Profile: { userId: string } | undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>()

interface Props {}

const AppNavigator: FC<Props> = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
