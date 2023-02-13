import React, { FC } from 'react'
import { StyleSheet, View, Text } from 'react-native'

interface Props {}

const VideoAudioCallingScreen: FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>VideoAudioCallingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default VideoAudioCallingScreen
