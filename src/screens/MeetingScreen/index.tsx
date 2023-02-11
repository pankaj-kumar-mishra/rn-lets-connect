import React, { FC, useState } from 'react'
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'

interface Props {}

const MeetingScreen: FC<Props> = (): JSX.Element => {
  const [name, setName] = useState<string>('PANKAJ')
  const [meetingId, setMeetingId] = useState<string>('')

  const handleGenerateNewMeetingId = () => {
    const newId = `${Math.floor(Math.random() * 10000)}-${Math.floor(
      Math.random() * 10000,
    )}-${Math.floor(Math.random() * 10000)}`
    // console.log(newId)
    setMeetingId(newId)
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.title}
          value={name}
          onChangeText={setName}
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          value={meetingId}
          onChangeText={setMeetingId}
        />
        <Pressable style={styles.btn}>
          <Text style={[styles.btnTxt, { color: '#fff' }]}>Join Meeting</Text>
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
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#00f',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#00f',
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  btn: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#00f',
    marginVertical: 10,
  },
  btnTxt: {
    textAlign: 'center',
    color: '#00f',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '600',
  },
})

export default MeetingScreen
