import { NavigationProp } from '@react-navigation/native'
import React, { FC } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { AppStackParamList } from '../navigators/AppNavigator'

interface Props {
  navigation: NavigationProp<AppStackParamList, 'Home'>
}

const HomeScreen: FC<Props> = ({ navigation }): JSX.Element => {
  const handleAudioCallingOneToOne = () => {
    navigation.navigate('Meeting', { meetingType: 'audio_one_one' })
  }
  const handleAudioCallingGroup = () => {
    navigation.navigate('Meeting', { meetingType: 'audio_group' })
  }
  const handleVideoCallingOneToOne = () => {
    navigation.navigate('Meeting', { meetingType: 'video_one_one' })
  }
  const handleVideoCallingGroup = () => {
    navigation.navigate('Meeting', { meetingType: 'video_group' })
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handleAudioCallingOneToOne} style={styles.button}>
        <Text style={styles.text}>Audio Calling (One to One)</Text>
      </Pressable>
      <Pressable onPress={handleAudioCallingGroup} style={styles.button}>
        <Text style={styles.text}>Audio Calling (Group)</Text>
      </Pressable>
      <Pressable onPress={handleVideoCallingOneToOne} style={styles.button}>
        <Text style={styles.text}>Video Calling (One to One)</Text>
      </Pressable>
      <Pressable onPress={handleVideoCallingGroup} style={styles.button}>
        <Text style={styles.text}>Video Calling (Group)</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#00f',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  text: {
    fontWeight: '600',
    color: '#00f',
    fontSize: 16,
  },
})

export default HomeScreen
