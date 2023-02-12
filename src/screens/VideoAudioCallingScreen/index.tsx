import React, { FC, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import ZegoUIKitPrebuiltCall, {
  ONE_ON_ONE_VOICE_CALL_CONFIG,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
  GROUP_VIDEO_CALL_CONFIG,
  GROUP_VOICE_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import { AppStackParamList } from '../../navigators/AppNavigator'

interface Props {
  navigation: NavigationProp<AppStackParamList, 'VideoAudioCalling'>
  route: RouteProp<AppStackParamList, 'VideoAudioCalling'>
}

const VideoAudioCallingScreen: FC<Props> = ({
  navigation,
  route,
}): JSX.Element => {
  const {
    params: { meetingId, userName, meetingType },
  } = route

  const userId = String(Math.floor(Math.random() * 100000))

  const callConfig = useMemo(() => {
    switch (meetingType) {
      case 'audio_one_one':
        return ONE_ON_ONE_VOICE_CALL_CONFIG
      case 'audio_group':
        return GROUP_VOICE_CALL_CONFIG
      case 'video_one_one':
        return ONE_ON_ONE_VIDEO_CALL_CONFIG
      case 'video_group':
        return GROUP_VIDEO_CALL_CONFIG
      default:
        return ONE_ON_ONE_VIDEO_CALL_CONFIG
    }
  }, [])

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={123456}
        appSign={'enter your appSign'}
        userID={userId} // userID can be something like a phone number or the user id on your own user system.
        userName={`${userName}_${userId}`}
        callID={meetingId} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/ONE_ON_ONE_VIDEO_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...callConfig,
          onOnlySelfInRoom: () => {
            navigation.goBack()
          },
          onHangUp: () => {
            navigation.goBack()
          },
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default VideoAudioCallingScreen
