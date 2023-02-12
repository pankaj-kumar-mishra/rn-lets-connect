import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native'
import { AppStackParamList } from '../../navigators/AppNavigator'

interface Props {
  navigation: NavigationProp<AppStackParamList, 'Meeting'>
  route: RouteProp<AppStackParamList, 'Meeting'>
}

const MeetingScreen: FC<Props> = ({ navigation, route }): JSX.Element => {
  const {
    params: { meetingType },
  } = route
  const [name, setName] = useState<string>('Pankaj')
  const [meetingId, setMeetingId] = useState<string>('')

  const handleGenerateNewMeetingId = () => {
    // const newId = `${Math.floor(Math.random() * 10000)}-${Math.floor(
    //   Math.random() * 10000,
    // )}-${Math.floor(Math.random() * 10000)}`
    const newId = String(Math.floor(Math.random() * 10000000))
    // console.log(newId)
    setMeetingId(newId)
  }

  const handleJoinMeeting = () => {
    if (meetingId.length > 5 && name.trim().length > 3) {
      navigation.navigate('VideoAudioCalling', {
        meetingId,
        userName: name.split(' ')[0],
        meetingType,
      })
    } else {
      Alert.alert('Please enter valid meeting id or generate new meeting id.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.inputTitle}
          value={name}
          onChangeText={setName}
          autoCorrect={false}
          placeholder="Enter your name"
        />
        <TextInput
          style={styles.input}
          value={meetingId}
          onChangeText={setMeetingId}
          placeholder="Enter meeting ID"
        />
        <Pressable onPress={handleJoinMeeting} style={styles.btn}>
          <Text style={[styles.btnTxt, styles.white]}>Join Meeting</Text>
        </Pressable>

        <Pressable onPress={handleGenerateNewMeetingId}>
          <Text style={styles.btnTxt}>Generate New Meeting ID</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  inputTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#00f',
    textAlign: 'center',
    marginVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#00f',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#00f',
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  btn: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#00f',
    marginVertical: 20,
    justifyContent: 'center',
  },
  btnTxt: {
    textAlign: 'center',
    color: '#00f',
    fontSize: 16,
    fontWeight: '600',
  },
  white: {
    color: '#fff',
  },
})

export default MeetingScreen
