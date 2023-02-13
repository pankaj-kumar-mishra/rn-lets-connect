import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import MeetingScreen from '../screens/MeetingScreen'
import VideoAudioCallingScreen from '../screens/VideoAudioCallingScreen'

export type MeetingType =
  | 'audio_one_one'
  | 'audio_group'
  | 'video_one_one'
  | 'video_group'

export type AppStackParamList = {
  Home: undefined
  Meeting: {
    meetingType: MeetingType
  }
  VideoAudioCalling: {
    meetingId: string
    userName: string
    meetingType: MeetingType
  }
  //   Profile: { userId: string } | undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>()

interface Props {}

const AppNavigator: FC<Props> = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Meeting" component={MeetingScreen} />
      {/* ZEGO CLOUD */}
      <Stack.Screen
        name="VideoAudioCalling"
        component={VideoAudioCallingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
