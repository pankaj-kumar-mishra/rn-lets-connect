import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import MeetingScreen from '../screens/MeetingScreen'

export type AppStackParamList = {
  Home: undefined
  Meeting: {
    meetingType:
      | 'video_one_one'
      | 'video_group'
      | 'audio_one_one'
      | 'audio_group'
  }
  //   Profile: { userId: string } | undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>()

interface Props {}

const AppNavigator: FC<Props> = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* ZEGO CLOUD */}
      <Stack.Screen name="Meeting" component={MeetingScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
